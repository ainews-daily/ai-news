// 抓取实时热点，写入 data/hot.js。
// 用法：node scripts/crawl.mjs
// 环境变量：GITHUB_TOKEN（可选，提高 GitHub API 限额）
// 部分源失败不影响整体；全部失败时不覆盖旧文件，并以退出码 1 结束。

import { readFile, writeFile } from "node:fs/promises";
import { parseFeed, compileTopics, matchTopics, isNoteworthy, selectFeedItems, safeLink, dedupe } from "./lib/crawl-lib.mjs";

const ROOT = new URL("..", import.meta.url);
const NEWSNOW = "https://newsnow.busiyi.world/api/s";
const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36";
const TIMEOUT_MS = 20000;
const FEED_MAX_AGE_MS = 48 * 3600e3;
const FEED_LIMIT = 15;
const HOT_LIMIT = 50;

async function readJson(path) {
  return JSON.parse(await readFile(new URL(path, ROOT), "utf8"));
}

async function get(url, headers = {}) {
  const res = await fetch(url, { headers: { "User-Agent": UA, ...headers }, signal: AbortSignal.timeout(TIMEOUT_MS) });
  if (!res.ok) throw new Error("HTTP " + res.status);
  return res;
}

async function crawlHot(src, topics) {
  const data = await (await get(`${NEWSNOW}?id=${encodeURIComponent(src.id)}&latest`, { Accept: "application/json" })).json();
  if (!["success", "cache"].includes(data.status) || !Array.isArray(data.items)) throw new Error("接口返回异常");
  const out = [];
  data.items.slice(0, HOT_LIMIT).forEach((it, i) => {
    const title = String(it.title || "").trim();
    const url = safeLink(String(it.url || it.mobileUrl || ""), src.domain);
    if (!title || !url) return;
    const hit = matchTopics(title, topics);
    if (!isNoteworthy(hit, topics)) return;
    out.push({ kind: "hot", source: src.id, title, url, rank: i + 1, topics: hit });
  });
  return { total: data.items.length, items: out };
}

async function crawlFeed(src, topics, now) {
  const xml = await (await get(src.url, { Accept: "application/rss+xml, application/atom+xml, application/xml, text/xml" })).text();
  const parsed = parseFeed(xml);
  if (!parsed.length) throw new Error("没有解析出条目");
  const items = selectFeedItems(parsed, { now, maxAgeMs: FEED_MAX_AGE_MS, aiOnly: !!src.aiOnly, topics, limit: FEED_LIMIT })
    .map((it) => ({ ...it, url: safeLink(it.url, "") }))
    .filter((it) => it.url)
    .map((it) => ({ kind: "news", source: src.id, region: src.region, ...it }));
  return { total: parsed.length, items };
}

// GitHub 最近 7 天新建、Star 最多的 AI 相关仓库
async function crawlRepos(topics, now) {
  const since = new Date(now - 7 * 86400e3).toISOString().slice(0, 10);
  const q = `created:>${since} stars:>30`;
  const headers = { Accept: "application/vnd.github+json" };
  if (process.env.GITHUB_TOKEN) headers.Authorization = "Bearer " + process.env.GITHUB_TOKEN;
  const data = await (await get(`https://api.github.com/search/repositories?q=${encodeURIComponent(q)}&sort=stars&order=desc&per_page=40`, headers)).json();
  const items = (data.items || []).map((r) => ({
    kind: "repo",
    source: "github",
    title: r.full_name,
    url: safeLink(r.html_url, "github.com"),
    desc: String(r.description || "").slice(0, 160),
    stars: r.stargazers_count,
    lang: r.language || "",
    time: r.created_at,
    topics: matchTopics(`${r.full_name} ${r.description || ""} ${(r.topics || []).join(" ")}`, topics)
  })).filter((r) => r.url);
  return { total: items.length, items: items.slice(0, 25) };
}

async function run(name, kind, id, fn) {
  const started = Date.now();
  try {
    const { total, items } = await fn();
    console.log(`✓ ${name}：${items.length}/${total}（${Date.now() - started}ms）`);
    return { status: { id, name, kind, ok: true, total, count: items.length }, items };
  } catch (e) {
    const error = e.name === "TimeoutError" ? "超时" : String(e.message || e);
    console.log(`✗ ${name}：${error}`);
    return { status: { id, name, kind, ok: false, error }, items: [] };
  }
}

async function main() {
  const sources = await readJson("config/sources.json");
  const topicDefs = await readJson("config/topics.json");
  const topics = compileTopics(topicDefs);
  const now = Date.now();

  const jobs = [
    ...sources.hot.map((s) => run(s.name, "hot", s.id, () => crawlHot(s, topics))),
    ...sources.feeds.map((s) => run(s.name, "news", s.id, () => crawlFeed(s, topics, now))),
    run("GitHub 本周新项目", "repo", "github", () => crawlRepos(topics, now))
  ];
  const results = await Promise.all(jobs);
  const okCount = results.filter((r) => r.status.ok).length;
  if (!okCount) {
    console.error("所有数据源都失败了，保留原有的 data/hot.js 不变。");
    process.exit(1);
  }

  const items = dedupe(results.flatMap((r) => r.items));
  const snapshot = {
    generatedAt: new Date(now).toISOString(),
    topics: topicDefs.map((t) => ({ id: t.id, name: t.name })),
    sources: results.map((r) => r.status),
    items
  };
  const body = "// 由 scripts/crawl.mjs 自动生成，请勿手改\nwindow.AI_HOT = " + JSON.stringify(snapshot) + ";\n";
  await writeFile(new URL("data/hot.js", ROOT), body, "utf8");
  console.log(`\n完成：${okCount}/${results.length} 个源成功，共 ${items.length} 条，已写入 data/hot.js`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
