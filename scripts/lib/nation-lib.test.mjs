import { test } from "node:test";
import assert from "node:assert/strict";
import { selectNation } from "./nation-lib.mjs";

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
