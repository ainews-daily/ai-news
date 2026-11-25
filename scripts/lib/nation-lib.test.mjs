import { test } from "node:test";
import assert from "node:assert/strict";
import { selectNation, selectLocal } from "./nation-lib.mjs";

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
