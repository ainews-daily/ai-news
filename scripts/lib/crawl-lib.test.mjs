import { test } from "node:test";
import assert from "node:assert/strict";
import { parseFeed, compileTopics, matchTopics, selectFeedItems, safeLink, dedupe, isNoteworthy } from "./crawl-lib.mjs";

const RSS = `<?xml version="1.0"?><rss><channel><title>站点</title>
<item><title><![CDATA[OpenAI 发布 <b>新模型</b>]]></title><link>https://example.com/a</link>
<pubDate>Tue, 13 Oct 2026 08:00:00 GMT</pubDate></item>
<item><title>Tom &amp; Jerry &#8217;s &#x4E2D;</title><link>https://example.com/b</link><dc:date>2026-10-01T00:00:00Z</dc:date></item>
</channel></rss>`;

const ATOM = `<feed xmlns="http://www.w3.org/2005/Atom"><title>Blog</title>
<entry><title type="html">Claude &lt;3 tools</title><link rel="replies" href="https://x.com/c"/><link rel="alternate" href="https://example.com/c"/>
<updated>2026-10-13T12:00:00Z</updated></entry></feed>`;

test("parseFeed 解析 RSS：CDATA、去标签、实体、日期", () => {
  const items = parseFeed(RSS);
  assert.equal(items.length, 2);
  assert.deepEqual(items[0], { title: "OpenAI 发布 新模型", link: "https://example.com/a", date: "2026-10-13T08:00:00.000Z" });
  assert.equal(items[1].title, "Tom & Jerry ’s 中");
  assert.equal(items[1].date, "2026-10-01T00:00:00.000Z");
});

test("parseFeed 解析 Atom：优先 alternate 链接", () => {
  const [e] = parseFeed(ATOM);
  assert.equal(e.title, "Claude <3 tools");
  assert.equal(e.link, "https://example.com/c");
  assert.equal(e.date, "2026-10-13T12:00:00.000Z");
});

test("parseFeed 遇到坏数据返回空数组", () => {
  assert.deepEqual(parseFeed("<html>not a feed</html>"), []);
});

const TOPICS = compileTopics([
  { id: "ai", name: "AI", keywords: ["AI", "大模型", "GPT"] },
  { id: "risk", name: "风险", keywords: ["裁员", "召回"] }
]);

test("matchTopics：英文关键词按整词匹配，中文按子串", () => {
  assert.deepEqual(matchTopics("AI眼镜开售", TOPICS), ["ai"]);
  assert.deepEqual(matchTopics("He said hello", TOPICS), []);
  assert.deepEqual(matchTopics("GPT-6 发布", TOPICS), ["ai"]);
  assert.deepEqual(matchTopics("某大模型公司裁员 30%", TOPICS), ["ai", "risk"]);
  assert.deepEqual(matchTopics("ai agents are here", TOPICS), ["ai"]);
});

test("selectFeedItems：只保留时间窗口内的，aiOnly 源必须命中 ai", () => {
  const now = Date.parse("2026-10-14T00:00:00Z");
  const items = [
    { title: "AI 新进展", link: "https://e.com/1", date: "2026-10-13T00:00:00.000Z" },
    { title: "手机评测", link: "https://e.com/2", date: "2026-10-13T00:00:00.000Z" },
    { title: "AI 旧闻", link: "https://e.com/3", date: "2026-10-01T00:00:00.000Z" },
    { title: "AI 无日期", link: "https://e.com/4", date: null }
  ];
  const all = selectFeedItems(items, { now, maxAgeMs: 48 * 3600e3, aiOnly: false, topics: TOPICS, limit: 10 });
  assert.deepEqual(all.map((x) => x.title), ["AI 新进展", "手机评测"]);
  assert.deepEqual(all[0].topics, ["ai"]);
  const ai = selectFeedItems(items, { now, maxAgeMs: 48 * 3600e3, aiOnly: true, topics: TOPICS, limit: 10 });
  assert.deepEqual(ai.map((x) => x.title), ["AI 新进展"]);
  assert.equal(selectFeedItems(items, { now, maxAgeMs: 48 * 3600e3, aiOnly: false, topics: TOPICS, limit: 1 }).length, 1);
});

test("safeLink：只放行 https 且域名匹配的链接", () => {
  assert.equal(safeLink("https://s.weibo.com/x", "weibo.com"), "https://s.weibo.com/x");
  assert.equal(safeLink("https://weibo.com/x", "weibo.com"), "https://weibo.com/x");
  assert.equal(safeLink("http://weibo.com/x", "weibo.com"), null);
  assert.equal(safeLink("https://weibo.com.evil.cn/x", "weibo.com"), null);
  assert.equal(safeLink("https://weibo.com@evil.cn/x", "weibo.com"), null);
  assert.equal(safeLink("javascript:alert(1)", ""), null);
  assert.equal(safeLink("https://any.org/x", ""), "https://any.org/x");
});

test("dedupe：按标题去重，保留先出现的", () => {
  const out = dedupe([{ title: "A 新闻" }, { title: "a  新闻 " }, { title: "B" }]);
  assert.deepEqual(out.map((x) => x.title), ["A 新闻", "B"]);
});

test("isNoteworthy：只命中非独立分组的不算，同时命中其他组才算", () => {
  const t = compileTopics([
    { id: "bigtech", name: "大厂", keywords: ["小米"] },
    { id: "risk", name: "出事了", standalone: false, keywords: ["道歉"] }
  ]);
  assert.equal(isNoteworthy(matchTopics("某明星道歉", t), t), false);
  assert.equal(isNoteworthy(matchTopics("小米道歉", t), t), true);
  assert.equal(isNoteworthy(matchTopics("小米发布会", t), t), true);
  assert.equal(isNoteworthy(matchTopics("天气晴", t), t), false);
});

test("exclude：标题里的排除词先去掉再匹配", () => {
  const t = compileTopics([{ id: "bigtech", name: "大厂", keywords: ["荣耀", "阿里"], exclude: ["王者荣耀", "阿里嘎多"] }]);
  assert.deepEqual(matchTopics("王者荣耀新赛季", t), []);
  assert.deepEqual(matchTopics("阿里嘎多萌宠", t), []);
  assert.deepEqual(matchTopics("荣耀发布新机，王者荣耀适配", t), ["bigtech"]);
  assert.deepEqual(matchTopics("阿里云宕机", t), ["bigtech"]);
});
