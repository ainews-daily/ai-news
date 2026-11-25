import { test } from "node:test";
import assert from "node:assert/strict";
import { escapeXml, rfc822, issueSections, issueToHtml, buildRss, buildJsonFeed } from "./feed-lib.mjs";

const issue = {
  date: "2026-11-09",
  highlights: ["要点一 <b>&", "要点二", "要点三"],
  items: [
    { title: "A & B 发布", summary: "摘要 <script>。", category: "model", region: "intl", source: "CNBC", url: "https://example.com/a?x=1&y=2" },
  ],
  corp: [{ title: "大厂事", summary: "大厂摘要。", kind: "org", company: "腾讯", source: "IT之家", url: "https://example.com/c" }],
  voices: [{ title: "观点", summary: "观点摘要。", person: "张三", role: "CEO", region: "cn", said: "2026-11-08", source: "第一财经", url: "https://example.com/v" }],
  pricing: [{ title: "涨价", summary: "价格摘要。", product: "X", change: "up", source: "官网", url: "https://example.com/p" }],
  design: [{ title: "设计", summary: "不该出现的设计条目。", kind: "tool", price: "免费", source: "s", url: "https://example.com/d" }],
  apps: [{ name: "不该出现的软件", category: "office", desc: "d", license: "MIT", stars: "1k", size: "1MB", url: "https://example.com/app" }],
  insights: [{ title: "落地", summary: "落地摘要。", kind: "usage", source: "论文", asOf: "2026-10", url: "https://example.com/i" }],
};

test("escapeXml 转义五个特殊字符", () => {
  assert.equal(escapeXml(`<a href="x">&'</a>`), "&lt;a href=&quot;x&quot;&gt;&amp;&#39;&lt;/a&gt;");
});

test("rfc822 按北京时间 08:00 输出", () => {
  assert.equal(rfc822("2026-11-09"), "Mon, 09 Nov 2026 08:00:00 +0800");
});

test("板块里没有工具推荐和设计专栏", () => {
  const ids = issueSections(issue).map((s) => s.id);
  assert.deepEqual(ids, ["items", "corp", "voices", "pricing", "insights"]);
  const html = issueToHtml(issue);
  assert.ok(!html.includes("不该出现"));
});

test("正文转义内容、写出来源并带署名", () => {
  const html = issueToHtml(issue);
  assert.ok(html.includes("A &amp; B 发布"));
  assert.ok(html.includes("摘要 &lt;script&gt;。"));
  assert.ok(!html.includes("<script>"));
  assert.ok(html.includes('来源：<a href="https://example.com/a?x=1&amp;y=2">CNBC</a>'));
  assert.ok(html.includes("https://example.com/a?x=1&amp;y=2"));
  assert.ok(html.includes("张三（CEO）"));
  assert.ok(html.includes("本文来自 AI 新鲜事"));
  assert.ok(html.includes("https://aifresh.pages.dev/#2026-11-09"));
});

test("空板块不输出标题", () => {
  const html = issueToHtml({ ...issue, corp: [], pricing: undefined });
  assert.ok(!html.includes("大厂动态"));
  assert.ok(!html.includes("AI 价格动态"));
});

test("RSS 结构完整，正文放在 CDATA 里", () => {
  const xml = buildRss([issue], { now: new Date("2026-11-09T00:00:00Z") });
  assert.ok(xml.startsWith('<?xml version="1.0" encoding="UTF-8"?>'));
  assert.ok(xml.includes('<guid isPermaLink="false">aifresh-2026-11-09</guid>'));
  assert.ok(xml.includes("<link>https://aifresh.pages.dev/#2026-11-09</link>"));
  assert.ok(xml.includes("<pubDate>Mon, 09 Nov 2026 08:00:00 +0800</pubDate>"));
  assert.ok(xml.includes("<content:encoded><![CDATA["));
  assert.ok(xml.includes("<description>要点一 &lt;b&gt;&amp;"));
});

test("正文里的 ]]> 不会提前结束 CDATA", () => {
  const xml = buildRss([{ ...issue, highlights: ["坏 ]]> 字符", "b", "c"] }], { now: new Date(0) });
  const body = xml.slice(xml.indexOf("<content:encoded>"), xml.indexOf("</content:encoded>"));
  assert.ok(body.includes("坏 ]]&gt; 字符"));
  assert.equal(body.split("]]>").length - 1, 1); // 只剩 CDATA 结尾那一处
});

test("JSON Feed 带结构化板块", () => {
  const feed = buildJsonFeed([issue]);
  assert.equal(feed.version, "https://jsonfeed.org/version/1.1");
  const item = feed.items[0];
  assert.equal(item.id, "aifresh-2026-11-09");
  assert.equal(item.date_published, "2026-11-09T08:00:00+08:00");
  assert.deepEqual(item._aifresh.highlights, issue.highlights);
  assert.equal(item._aifresh.sections[0].name, "AI 新闻");
  assert.equal(item._aifresh.sections[0].entries[0].title, "A & B 发布");
  assert.ok(!JSON.stringify(feed).includes("不该出现"));
});
