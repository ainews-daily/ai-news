import { test } from "node:test";
import assert from "node:assert/strict";
import vm from "node:vm";
import { hasChinese, cleanTitle, pendingItems, parseTranslations, pruneToCurrent, renderZhFile } from "./translate-lib.mjs";

const HOT = {
  items: [
    { kind: "news", url: "https://a.com/1", title: "OpenAI ships a model" },
    { kind: "news", url: "https://a.com/2", title: "已经是中文的标题" },
    { kind: "news", url: "https://news.google.com/rss/articles/x", title: "Claude goes to school - Anthropic" },
    { kind: "repo", url: "https://github.com/o/r", title: "o/r", desc: "A fast agent framework" },
    { kind: "repo", url: "https://github.com/o/empty", title: "o/empty", desc: "" },
    { kind: "hot", url: "https://b.com/1", title: "Some hot title" }
  ]
};

test("hasChinese 判断是否含中文", () => {
  assert.equal(hasChinese("AI 新鲜事"), true);
  assert.equal(hasChinese("OpenAI"), false);
  assert.equal(hasChinese(undefined), false);
});

test("cleanTitle 只去掉 Google News 的来源后缀", () => {
  assert.equal(cleanTitle("Claude goes to school - Anthropic", "https://news.google.com/rss/articles/x"), "Claude goes to school");
  assert.equal(cleanTitle("Pros - and cons", "https://techcrunch.com/x"), "Pros - and cons");
});

test("pendingItems 只挑没翻译过的英文资讯标题和项目简介", () => {
  const got = pendingItems(HOT, { "https://a.com/1": "已有翻译" }, {});
  assert.deepEqual(got, [
    { map: "title", url: "https://news.google.com/rss/articles/x", text: "Claude goes to school" },
    { map: "desc", url: "https://github.com/o/r", text: "A fast agent framework" }
  ]);
});

test("parseTranslations 去掉思考过程和多余文字，取出数组", () => {
  assert.deepEqual(parseTranslations('<think>嗯</think>好的：\n["甲", " 乙 "]', 2), ["甲", "乙"]);
  assert.deepEqual(parseTranslations(["甲"], 1), ["甲"]);
});

test("parseTranslations 条数不对或不是数组时报错", () => {
  assert.throws(() => parseTranslations('["甲"]', 2), /条数不对/);
  assert.throws(() => parseTranslations("翻译失败", 1), /没有 JSON 数组/);
});

test("pruneToCurrent 丢掉已经不在热点里的条目", () => {
  const { titleZh, descZh } = pruneToCurrent(HOT, { "https://a.com/1": "甲", "https://old.com": "旧" }, { "https://github.com/o/r": "" });
  assert.deepEqual(titleZh, { "https://a.com/1": "甲" });
  assert.deepEqual(descZh, {});
});

test("renderZhFile 生成的文件能被页面加载", () => {
  const ctx = { window: {} };
  vm.runInNewContext(renderZhFile({ "https://a.com/\"1": "带\"引号" }, {}), ctx);
  // vm 里的对象原型不同，转成普通对象再比
  const plain = (o) => JSON.parse(JSON.stringify(o));
  assert.deepEqual(plain(ctx.window.AI_TITLE_ZH), { "https://a.com/\"1": "带\"引号" });
  assert.deepEqual(plain(ctx.window.AI_DESC_ZH), {});
});
