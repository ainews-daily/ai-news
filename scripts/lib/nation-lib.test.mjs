import { test } from "node:test";
import assert from "node:assert/strict";
import { selectNation, selectLocal, mergeKept, MONTH_MS, YEAR_MS } from "./nation-lib.mjs";

test("不同城市的同类政策、不同人物的调查和不同震级的地震分别保留", () => {
  const groups = [
    [selectLocal, ["上海发布住房补贴政策", "无锡发布住房补贴政策"]],
    [selectNation, ["张三涉嫌严重违纪违法接受审查调查", "李四涉嫌严重违纪违法接受审查调查"]],
    [selectNation, ["日本发生6.0级地震", "日本发生7.0级地震"]]
  ];
  for (const [select, titles] of groups) {
    const items = titles.map((title, i) => ({ title, url: `https://example.com/${i}`, source: "test", rank: i + 1 }));
    assert.equal(select(items).length, 2, titles.join(" / "));
    assert.equal(mergeKept([], items).length, 2, "归档合并也必须保留两个事件");
  }
});

test("同一链接换标题仍合并，通用措辞相同但主体不同不合并", () => {
  assert.equal(selectNation([
    { title: "央行宣布降准", url: "https://example.com/a", source: "a" },
    { title: "央行发布降准消息", url: "https://example.com/a", source: "b" }
  ]).length, 1);
  assert.equal(selectLocal([
    { title: "上海发布人才补贴政策", url: "https://example.com/a", source: "a" },
    { title: "上海发布住房补贴政策", url: "https://example.com/b", source: "b" }
  ]).length, 2);
});

test("selectNation：同一件调查并成一条，娱乐和公司新闻不收", () => {
  const picked = selectNation([
    { title: "上海市委书记陈吉宁被查", url: "https://news.southcn.com/a", source: "thepaper", rank: 1 },
    { title: "陈吉宁涉嫌严重违纪违法正接受中央纪委国家监委审查调查", url: "https://www.news.cn/b", source: "ifeng", rank: 2 },
    { title: "广东省委书记李某被查", url: "https://www.thepaper.cn/c", source: "thepaper", rank: 3 },
    { title: "某明星演唱会官宣", url: "https://baidu.com/show", source: "baidu", rank: 1 },
    { title: "英伟达股价暴涨超31%", url: "https://cls.cn/nv", source: "cls-hot", rank: 1 }
  ]);
  assert.equal(picked.length, 2);
  assert.equal(picked[0].sources.length, 2);
  assert.ok(picked.some((it) => it.title.includes("陈吉宁")));
  assert.ok(picked.some((it) => it.title.includes("李某")));
});

test("selectNation：没有对上的标题就空着", () => {
  assert.deepEqual(selectNation([{ title: "新手机发布", url: "https://a.com", source: "ithome", rank: 1 }]), []);
});

test("selectNation：竞选、福利、出入境和红头文件都收，公司福利不收", () => {
  const picked = selectNation([
    { title: "美国总统竞选进入最后阶段", url: "https://a.com/e", source: "ifeng", rank: 4 },
    { title: "加州上调州福利和社保标准", url: "https://a.com/w", source: "cls-hot", rank: 6 },
    { title: "多国出台新的出入境和免签政策", url: "https://a.com/v", source: "thepaper", rank: 5 },
    { title: "国务院关于印发社会保险经办条例的通知", url: "https://a.com/d", source: "thepaper", rank: 2 },
    { title: "某公司给员工发放节日福利", url: "https://a.com/c", source: "baidu", rank: 1 }
  ]);
  const titles = picked.map((it) => it.title);
  assert.equal(titles.length, 4);
  assert.ok(titles.some((t) => t.includes("竞选")));
  assert.ok(titles.some((t) => t.includes("州福利")));
  assert.ok(titles.some((t) => t.includes("出入境")));
  assert.ok(titles.some((t) => t.includes("关于印发")));
});

test("selectLocal：只留上海和无锡的政策，别的城市不收", () => {
  const picked = selectLocal([
    { title: "上海出台住房公积金新政", url: "https://a.com/sh", source: "thepaper", rank: 3 },
    { title: "无锡市关于印发住房保障办法的通知", url: "https://a.com/wx", source: "baidu", rank: 8 },
    { title: "上海迪士尼门票涨价", url: "https://a.com/disney", source: "toutiao", rank: 1 },
    { title: "北京出台公积金新政策", url: "https://a.com/bj", source: "cls-hot", rank: 2 }
  ]);
  assert.deepEqual(picked.map((it) => it.title), [
    "上海出台住房公积金新政",
    "无锡市关于印发住房保障办法的通知"
  ]);
});

test("mergeKept：大事留 30 天，沪锡政策留一年，同一件事沿用第一次出现的时间", () => {
  const now = Date.parse("2026-11-25T00:00:00.000Z");
  const day = 24 * 3600e3;
  const nation = mergeKept(
    [{ title: "陈吉宁被查", url: "https://a.com/old", source: "澎湃新闻", firstSeen: new Date(now - 40 * day).toISOString() }],
    [{ title: "央行宣布降准", url: "https://a.com/new", source: "财联社", firstSeen: new Date(now - 2 * day).toISOString() }],
    { now, keepMs: MONTH_MS }
  );
  assert.deepEqual(nation.map((it) => it.title), ["央行宣布降准"]);

  const kept = mergeKept(
    [{ title: "上海公积金新政", url: "https://a.com/sh", source: "澎湃新闻", firstSeen: new Date(now - 10 * day).toISOString() }],
    [{ title: "上海出台住房公积金新政", url: "https://a.com/sh2", source: "财联社", rank: 2 }],
    { now, keepMs: MONTH_MS }
  );
  assert.equal(kept.length, 1);
  assert.equal(kept[0].firstSeen, new Date(now - 10 * day).toISOString());

  const local = mergeKept(
    [
      { title: "无锡住房保障办法", url: "https://a.com/wx", source: "澎湃新闻", firstSeen: new Date(now - 200 * day).toISOString() },
      { title: "上海旧落户政策", url: "https://a.com/oldsh", source: "澎湃新闻", firstSeen: new Date(now - 400 * day).toISOString() }
    ],
    [],
    { now, keepMs: YEAR_MS }
  );
  assert.deepEqual(local.map((it) => it.title), ["无锡住房保障办法"]);
});
