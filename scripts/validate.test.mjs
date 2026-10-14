import { test } from "node:test";
import assert from "node:assert/strict";
import { validateIssue, validateManifest, findRepeatedApps } from "./validate.mjs";

const CATS = ["model", "industry", "research", "tools"];
const APP_CATS = ["office", "coding", "system", "fun"];
const CORP_KINDS = ["layoff", "quality", "penalty", "org", "business", "dispute"];

function makeIssue(n = 12) {
  const items = [];
  for (let i = 0; i < n; i++) {
    items.push({
      title: `第${i + 1}条新闻`,
      summary: "这是第一句。这是第二句。",
      category: CATS[i % 4],
      region: i % 2 === 0 ? "cn" : "intl",
      source: "示例来源",
      url: `https://example.com/${i}`,
    });
  }
  const apps = [];
  for (let i = 0; i < 8; i++) {
    apps.push({
      name: `工具${i + 1}`,
      category: APP_CATS[i % 4],
      desc: "一句话说明。",
      license: "MIT",
      stars: 1000,
      size: "5 MB",
      url: `https://github.com/example/app${i}`,
    });
  }
  const insights = [0, 1].map((i) => ({
    title: `观察${i + 1}`,
    summary: "第一句。第二句。",
    kind: "jobs",
    source: "示例来源",
    asOf: "2026-09",
    url: `https://example.com/insight${i}`,
  }));
  const corp = [];
  for (let i = 0; i < 5; i++) {
    corp.push({
      title: `企业动态${i + 1}`,
      summary: "第一句。第二句。",
      kind: CORP_KINDS[i],
      company: "示例公司",
      source: "示例来源",
      url: `https://example.com/corp${i}`,
    });
  }
  return { date: "2026-10-14", highlights: ["看点一", "看点二", "看点三"], items, apps, insights, corp };
}

function hasError(errors, keyword) {
  return errors.some((e) => e.includes(keyword));
}

test("合法数据通过", () => {
  assert.deepEqual(validateIssue(makeIssue()), []);
});

test("条数不足或过多", () => {
  assert.ok(hasError(validateIssue(makeIssue(10)), "条数"));
  assert.ok(hasError(validateIssue(makeIssue(18)), "条数"));
});

test("日期格式错误", () => {
  const issue = makeIssue();
  issue.date = "2026/10/14";
  assert.ok(hasError(validateIssue(issue), "date"));
});

test("highlights 必须正好 3 条", () => {
  const issue = makeIssue();
  issue.highlights = ["只有一条"];
  assert.ok(hasError(validateIssue(issue), "highlights"));
});

test("国内外失衡", () => {
  const issue = makeIssue();
  issue.items.forEach((it, i) => (it.region = i < 9 ? "cn" : "intl"));
  assert.ok(hasError(validateIssue(issue), "国内"));
});

test("缺少某个分类", () => {
  const issue = makeIssue();
  issue.items.forEach((it) => {
    if (it.category === "tools") it.category = "model";
  });
  assert.ok(hasError(validateIssue(issue), "tools"));
});

test("非法分类和地区", () => {
  const issue = makeIssue();
  issue.items[0].category = "news";
  issue.items[1].region = "us";
  const errors = validateIssue(issue);
  assert.ok(hasError(errors, "category"));
  assert.ok(hasError(errors, "region"));
});

test("链接必须是 http(s)", () => {
  const issue = makeIssue();
  issue.items[0].url = "example.com";
  assert.ok(hasError(validateIssue(issue), "url"));
});

test("标题过长", () => {
  const issue = makeIssue();
  issue.items[0].title = "长".repeat(31);
  assert.ok(hasError(validateIssue(issue), "标题"));
});

test("摘要句数不对", () => {
  const issue = makeIssue();
  issue.items[0].summary = "只有一句。";
  issue.items[1].summary = "一。二。三。四。";
  const errors = validateIssue(issue);
  assert.ok(hasError(errors, "第 1 条"));
  assert.ok(hasError(errors, "第 2 条"));
});

test("缺少 source", () => {
  const issue = makeIssue();
  delete issue.items[0].source;
  assert.ok(hasError(validateIssue(issue), "source"));
});

test("工具数量 8–12", () => {
  const issue = makeIssue();
  issue.apps = issue.apps.slice(0, 6);
  assert.ok(hasError(validateIssue(issue), "工具数量"));
});

test("工具字段：分类、许可证、Star、链接、同期重名", () => {
  const issue = makeIssue();
  issue.apps[0].category = "game";
  delete issue.apps[1].license;
  issue.apps[2].stars = "很多";
  issue.apps[3].url = "github.com/x";
  issue.apps[4].name = issue.apps[5].name;
  const errors = validateIssue(issue);
  assert.ok(hasError(errors, "工具 1：category"));
  assert.ok(hasError(errors, "工具 2：缺少 license"));
  assert.ok(hasError(errors, "工具 3：stars"));
  assert.ok(hasError(errors, "工具 4：url"));
  assert.ok(hasError(errors, "重复"));
});

test("工具至少覆盖 3 个分类", () => {
  const issue = makeIssue();
  issue.apps.forEach((a, i) => (a.category = i % 2 ? "office" : "coding"));
  assert.ok(hasError(validateIssue(issue), "工具分类"));
});

test("stars 和 size 可以省略", () => {
  const issue = makeIssue();
  delete issue.apps[0].stars;
  delete issue.apps[0].size;
  assert.deepEqual(validateIssue(issue), []);
});

test("落地观察 2–3 条且字段完整", () => {
  const issue = makeIssue();
  issue.insights = issue.insights.slice(0, 1);
  assert.ok(hasError(validateIssue(issue), "落地观察数量"));
  const issue2 = makeIssue();
  issue2.insights[0].kind = "news";
  issue2.insights[1].asOf = "去年";
  const errors = validateIssue(issue2);
  assert.ok(hasError(errors, "观察 1：kind"));
  assert.ok(hasError(errors, "观察 2：asOf"));
});

test("企业动态 5–8 条且字段完整", () => {
  const issue = makeIssue();
  issue.corp = issue.corp.slice(0, 3);
  assert.ok(hasError(validateIssue(issue), "企业动态数量"));
  const issue2 = makeIssue();
  issue2.corp[0].kind = "gossip";
  delete issue2.corp[1].company;
  const errors = validateIssue(issue2);
  assert.ok(hasError(errors, "企业 1：kind"));
  assert.ok(hasError(errors, "企业 2：缺少 company"));
});

test("工具不能和往期重复（忽略大小写）", () => {
  const issue = makeIssue();
  const older = { date: "2026-10-13", apps: [{ name: "工具1".toUpperCase() }, { name: "别的" }] };
  issue.apps[0].name = "ShareX";
  older.apps[0].name = "sharex";
  assert.deepEqual(findRepeatedApps(issue, [older]), ["ShareX（2026-10-13 已推荐）"]);
  assert.deepEqual(findRepeatedApps(makeIssue(), [older]), []);
});

test("manifest 校验", () => {
  assert.deepEqual(validateManifest(["2026-10-14", "2026-10-13"], "2026-10-14"), []);
  assert.ok(hasError(validateManifest(["2026-10-13", "2026-10-14"], "2026-10-14"), "排序"));
  assert.ok(hasError(validateManifest(["2026-10-14", "2026-10-14"], "2026-10-14"), "重复"));
  assert.ok(hasError(validateManifest(["2026-10-13"], "2026-10-14"), "不包含"));
});
