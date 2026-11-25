import { test } from "node:test";
import assert from "node:assert/strict";
import { updateSeen, applySeen, selectBrief, clusterItems, detectVendor, detectCategory } from "./brief-lib.mjs";

const NOW = "2026-11-20T08:00:00.000Z";
const NOW_MS = Date.parse(NOW);

function item(partial) {
  return { kind: "news", region: "intl", source: "openai", topics: ["ai"], firstSeen: NOW, ...partial };
}

test("selectBrief：历史 seen 中的无关仓库不进入新闻和大厂动态", () => {
  const result = selectBrief([
    item({ title: "Xbox compatibility layer", kind: "repo", source: "github", topics: [], url: "https://github.com/o/game" }),
    item({ title: "Google console game tool", kind: "repo", source: "github", topics: ["bigtech"], url: "https://github.com/o/console" }),
    item({ title: "AI coding assistant", kind: "repo", source: "github", topics: ["ai"], url: "https://github.com/o/assistant" })
  ], { now: NOW_MS });
  assert.deepEqual(result.items.map((it) => it.url), ["https://github.com/o/assistant"]);
  assert.equal(result.corp.length, 0);
});

test("detectVendor / detectCategory：厂商和分类", () => {
  assert.equal(detectVendor("OpenAI 发布 GPT 新模型"), "openai");
  assert.equal(detectVendor("苹果树结果了"), "");
  assert.equal(detectCategory(item({ title: "新论文提出 benchmark", kind: "news" })), "research");
  assert.equal(detectCategory({ title: "某仓库", kind: "repo" }), "tools");
  assert.equal(detectCategory(item({ title: "英伟达财报营收", topics: ["money", "bigtech"] })), "industry");
});

test("clusterItems：同一家的相近标题并成一条，不同厂商不并", () => {
  const clusters = clusterItems([
    item({ title: "英伟达三季报营收创新高", url: "https://a.com/1", source: "cls-hot", kind: "hot", region: "cn", rank: 3 }),
    item({ title: "英伟达三季报营收超预期", url: "https://b.com/2", source: "ithome", kind: "hot", region: "cn", rank: 8 }),
    item({ title: "OpenAI 发布新模型", url: "https://openai.com/x", source: "openai" }),
    item({ title: "Google 发布新模型", url: "https://blog.google/x", source: "google-ai" })
  ]);
  assert.equal(clusters.length, 3);
  const nv = clusters.find((c) => c.vendor === "nvidia");
  assert.equal(nv.also.length, 1);
  assert.equal(nv.source, "cls-hot");
});

test("updateSeen：没有历史时只把 fresh 当成新的；之后保留第一次出现的时间", () => {
  const current = [
    { title: "旧", url: "https://e.com/old", kind: "hot", source: "baidu" },
    { title: "新", url: "https://e.com/new", kind: "hot", source: "baidu", fresh: true }
  ];
  const first = updateSeen(current, null, NOW);
  assert.equal(first.find((x) => x.url.endsWith("/new")).firstSeen, NOW);
  assert.ok(Date.parse(NOW) - Date.parse(first.find((x) => x.url.endsWith("/old")).firstSeen) > 72 * 3600e3);

  const later = "2026-11-20T11:00:00.000Z";
  const second = updateSeen([
    { title: "新", url: "https://e.com/new", kind: "hot", source: "baidu", rank: 2 },
    { title: "更新的", url: "https://e.com/newer", kind: "news", source: "openai" }
  ], first, later);
  assert.equal(second.find((x) => x.url.endsWith("/new")).firstSeen, NOW);
  assert.equal(second.find((x) => x.url.endsWith("/newer")).firstSeen, later);
  // 第一次记到窗口外的旧链接，超过保留期就丢掉
  assert.equal(second.some((x) => x.url.endsWith("/old")), false);

  const recent = new Date(Date.parse(NOW) - 3 * 3600e3).toISOString();
  const kept = updateSeen(
    [{ title: "新", url: "https://e.com/new", kind: "hot", source: "baidu" }],
    first.map((x) => x.url.endsWith("/old") ? { ...x, firstSeen: recent } : x),
    later
  );
  assert.ok(kept.some((x) => x.url.endsWith("/old")));

  const stamped = applySeen(
    [{ title: "新", url: "https://e.com/new", kind: "hot", source: "baidu" }],
    second,
    later
  );
  assert.equal(stamped[0].fresh, true);
  assert.equal(stamped[0].firstSeen, NOW);
});

test("selectBrief：24 小时窗口、往期去重、厂商最多两条、国内外不差过 2", () => {
  const old = new Date(NOW_MS - 48 * 3600e3).toISOString();
  const items = [
    item({ title: "OpenAI 发布代号 Aster 的新模型", url: "https://openai.com/1", source: "openai" }),
    item({ title: "ChatGPT 企业套餐涨价一倍", url: "https://openai.com/2", source: "openai", topics: ["money"] }),
    item({ title: "OpenAI 安全团队负责人离职", url: "https://openai.com/3", source: "openai", topics: ["bigtech"] }),
    item({ title: "DeepSeek 开源大模型", url: "https://qbitai.com/ds", source: "qbitai", region: "cn" }),
    item({ title: "阿里通义发布新模型", url: "https://qbitai.com/qwen", source: "qbitai", region: "cn" }),
    item({ title: "腾讯混元更新", url: "https://qbitai.com/hy", source: "qbitai", region: "cn" }),
    item({ title: "百度文心更新", url: "https://qbitai.com/wx", source: "qbitai", region: "cn" }),
    item({ title: "Google 发布 Gemini 新版本", url: "https://blog.google/g", source: "google-ai" }),
    item({ title: "英伟达数据中心营收指引", url: "https://blogs.nvidia.com/n", source: "nvidia", topics: ["money"] }),
    item({ title: "昨天的旧闻", url: "https://openai.com/old", firstSeen: old }),
    item({ title: "OpenAI 发布新模型甲", url: "https://daily.com/same", source: "theverge-ai" })
  ];
  const brief = selectBrief(items, {
    now: NOW_MS,
    covered: [{ title: "DeepSeek 开源大模型", url: "https://qbitai.com/ds" }],
    sourceNames: { openai: "OpenAI", qbitai: "量子位" }
  });
  const titles = brief.items.map((it) => it.title);
  assert.equal(titles.includes("昨天的旧闻"), false);
  assert.equal(titles.includes("DeepSeek 开源大模型"), false);
  assert.ok(titles.filter((t) => /OpenAI|ChatGPT/.test(t)).length <= 2);
  const cn = brief.items.filter((it) => it.region === "cn").length;
  const intl = brief.items.filter((it) => it.region === "intl").length;
  assert.ok(Math.abs(cn - intl) <= 2, `cn ${cn} intl ${intl}`);
  assert.equal(brief.items[0].source, "OpenAI");
});

test("selectBrief：汽车发布会进大厂动态，不占用 AI 线索；同一活动并成一条", () => {
  const items = [
    item({ title: "OpenAI 发布代号 Aster 的新模型", url: "https://openai.com/1", source: "openai" }),
    item({ title: "鸿蒙智行享界 V8 搭载全新 LOGO", url: "https://ithome.com/1", source: "ithome", kind: "hot", region: "cn", topics: ["bigtech"], rank: 2 }),
    item({ title: "鸿蒙智行享界 V8 星芒品牌发布会", url: "https://baidu.com/1", source: "baidu", kind: "hot", region: "cn", topics: ["bigtech"], rank: 1 }),
    item({ title: "《GTA6》一天营收超皇马一年", url: "https://baidu.com/gta", source: "baidu", kind: "hot", region: "cn", topics: ["money"], rank: 1 })
  ];
  const brief = selectBrief(items, { now: NOW_MS, sourceNames: { openai: "OpenAI", ithome: "IT之家", baidu: "百度热搜" } });
  assert.deepEqual(brief.items.map((it) => it.title), ["OpenAI 发布代号 Aster 的新模型"]);
  assert.equal(brief.corp.length, 1);
  assert.equal(brief.corp[0].vendor, "华为");
  assert.equal(brief.corp[0].also.length, 1);
});

test("selectBrief：投资者关系这种栏目页不进速览", () => {
  const items = [
    item({ title: "Investor Relations - Anthropic", url: "https://www.anthropic.com/ir", source: "anthropic" }),
    item({ title: "OpenAI 发布代号 Aster 的新模型", url: "https://openai.com/1", source: "openai" })
  ];
  const brief = selectBrief(items, { now: NOW_MS });
  assert.deepEqual(brief.items.map((it) => it.url), ["https://openai.com/1"]);
});

test("selectBrief：四个分类有候选时都会收，池子里没有的头部厂商会记下来", () => {
  const items = [
    item({ title: "OpenAI 发布 GPT 新模型", url: "https://openai.com/m", source: "openai" }),
    item({ title: "英伟达财报营收新高", url: "https://blogs.nvidia.com/e", source: "nvidia", topics: ["money"] }),
    item({ title: "新论文提出 agent benchmark", url: "https://arxiv.org/p", source: "hf-blog" }),
    item({ title: "owner/tool", url: "https://github.com/owner/tool", kind: "repo", source: "github", stars: 800 })
  ];
  const brief = selectBrief(items, { now: NOW_MS });
  assert.deepEqual(brief.gaps, []);
  assert.ok(brief.majorsMissing.includes("Google"));
  assert.equal(brief.highlights.length, 3);
});

test("selectBrief：同一事件的不同标题只留一条，另一件事还留着", () => {
  const items = [
    item({ title: "黄仁勋王者归来！董事会一致同意复职，英伟达股价暴涨30%", url: "https://cls.cn/1", source: "cls-hot", kind: "hot", region: "cn", topics: ["chip", "money"], rank: 1 }),
    item({ title: "美股收盘：英伟达暴涨超31% 单日市值大增逾9500亿美元创全球纪录", url: "https://cls.cn/2", source: "cls-hot", kind: "hot", region: "cn", topics: ["chip", "money"], rank: 2 }),
    item({ title: "特朗普力促黄仁勋复职、万斯介入给出保证", url: "https://wallstreetcn.com/1", source: "wallstreetcn-hot", kind: "hot", region: "cn", topics: ["bigtech"], rank: 1 }),
    item({ title: "【早报】黄仁勋复职，英伟达暴涨超31%；深夜，美股全线狂欢", url: "https://cls.cn/3", source: "cls-hot", kind: "hot", region: "cn", topics: ["bigtech"], rank: 4 }),
    item({ title: "英伟达发布新一代训练芯片", url: "https://blogs.nvidia.com/chip", source: "nvidia" }),
    item({ title: "OpenAI 发布代号 Aster 的新模型", url: "https://openai.com/1", source: "openai" })
  ];
  const brief = selectBrief(items, { now: NOW_MS });
  const nvidia = [...brief.items, ...brief.corp].filter((it) => it.vendor === "英伟达");
  assert.equal(nvidia.filter((it) => /复职|暴涨|归来/.test(it.title)).length, 1);
  assert.ok(nvidia.some((it) => it.title.includes("训练芯片")));
});

test("clusterItems：复职和暴涨没有出现在同一条标题里时，分成两件事", () => {
  const clusters = clusterItems([
    item({ title: "英伟达股价暴涨超31%", url: "https://a.com/s", kind: "hot", region: "cn", topics: ["money"] }),
    item({ title: "黄仁勋复职", url: "https://b.com/r", kind: "hot", region: "cn", topics: ["bigtech"] })
  ]);
  assert.equal(clusters.length, 2);
});
