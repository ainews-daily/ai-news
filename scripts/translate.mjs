// 用 Cloudflare Workers AI 翻译实时热点里新出现的英文，写入 data/title-zh.js。
// 用法：node scripts/translate.mjs
// 环境变量：CLOUDFLARE_ACCOUNT_ID、CLOUDFLARE_API_TOKEN（Token 需要 Workers AI 权限）
//           CF_AI_MODEL（可选，指定模型；不填就按 MODELS 的顺序试）
// 已有的翻译（包括 /ai日报 写的）原样保留，只补缺的。翻译失败不报错，页面照常显示英文。

import { readFile, writeFile } from "node:fs/promises";
import vm from "node:vm";
import { pendingItems, parseTranslations, pruneToCurrent, renderZhFile } from "./lib/translate-lib.mjs";

const ROOT = new URL("..", import.meta.url);
const MODELS = ["@cf/qwen/qwen3-30b-a3b-fp8", "@cf/meta/llama-3.3-70b-instruct-fp8-fast"];
const BATCH = 15;
const TIMEOUT_MS = 60000;

const PROMPT = `你是科技新闻编辑。把下面 JSON 数组里的每一条英文翻译成通顺的简体中文。
要求：意译，像中文科技媒体的标题；产品名、公司名、人名、代码和命令保留英文原文；HTML 实体按原意处理；不要补充原文没有的内容。
只输出一个 JSON 字符串数组，条数和顺序与输入完全一致，不要任何解释。/no_think`;

async function loadWindowFile(path) {
  const ctx = { window: {} };
  try {
    vm.runInNewContext(await readFile(new URL(path, ROOT), "utf8"), ctx);
  } catch (e) {
    if (e.code !== "ENOENT") throw e;
  }
  return ctx.window;
}

async function callModel(model, texts) {
  const { CLOUDFLARE_ACCOUNT_ID: account, CLOUDFLARE_API_TOKEN: token } = process.env;
  const res = await fetch(`https://api.cloudflare.com/client/v4/accounts/${account}/ai/run/${model}`, {
    method: "POST",
    headers: { Authorization: "Bearer " + token, "Content-Type": "application/json" },
    body: JSON.stringify({
      messages: [{ role: "system", content: PROMPT }, { role: "user", content: JSON.stringify(texts) }],
      max_tokens: 4096,
      temperature: 0.2
    }),
    signal: AbortSignal.timeout(TIMEOUT_MS)
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data.success) {
    const msg = (data.errors || []).map((e) => e.message).join("；") || "HTTP " + res.status;
    throw Object.assign(new Error(msg), { status: res.status });
  }
  const r = data.result || {};
  // 不同模型的返回格式不一样：有的是 response，有的是 OpenAI 风格的 choices
  return r.response ?? (r.choices && r.choices[0] && r.choices[0].message && r.choices[0].message.content) ?? "";
}

// 依次试每个模型；模型不存在或没权限之类的错误换下一个，其他错误也换下一个再试一次
async function translate(texts, models) {
  let lastError;
  for (const model of models) {
    try {
      return { model, out: parseTranslations(await callModel(model, texts), texts.length) };
    } catch (e) {
      lastError = e;
      console.log(`  ${model} 失败：${e.name === "TimeoutError" ? "超时" : e.message}`);
      if (e.status === 401 || e.status === 403) break; // Token 不对，换模型也没用
    }
  }
  throw lastError;
}

async function main() {
  if (!process.env.CLOUDFLARE_ACCOUNT_ID || !process.env.CLOUDFLARE_API_TOKEN) {
    console.log("没配 Cloudflare 密钥，跳过翻译");
    return;
  }
  const hot = (await loadWindowFile("data/hot.js")).AI_HOT;
  if (!hot) {
    console.log("没有 data/hot.js，跳过翻译");
    return;
  }
  const zh = await loadWindowFile("data/title-zh.js");
  const titleZh = { ...(zh.AI_TITLE_ZH || {}) };
  const descZh = { ...(zh.AI_DESC_ZH || {}) };
  const models = process.env.CF_AI_MODEL ? [process.env.CF_AI_MODEL] : MODELS;

  const todo = pendingItems(hot, titleZh, descZh);
  console.log(`待翻译 ${todo.length} 条`);
  let done = 0;
  for (let i = 0; i < todo.length; i += BATCH) {
    const batch = todo.slice(i, i + BATCH);
    try {
      const { model, out } = await translate(batch.map((x) => x.text), models);
      batch.forEach((x, j) => {
        if (!out[j]) return;
        (x.map === "title" ? titleZh : descZh)[x.url] = out[j];
        done++;
      });
      console.log(`✓ 第 ${i / BATCH + 1} 批 ${batch.length} 条（${model}）`);
    } catch (e) {
      console.log(`✗ 第 ${i / BATCH + 1} 批没翻成，这些条目先显示英文`);
      if (e.status === 401 || e.status === 403) {
        console.log("  Cloudflare Token 没有 Workers AI 权限，到 Cloudflare 后台给它加上 Workers AI 权限");
        break;
      }
    }
  }

  const kept = pruneToCurrent(hot, titleZh, descZh);
  await writeFile(new URL("data/title-zh.js", ROOT), renderZhFile(kept.titleZh, kept.descZh), "utf8");
  console.log(`完成：新翻译 ${done} 条，现有标题 ${Object.keys(kept.titleZh).length} 条、简介 ${Object.keys(kept.descZh).length} 条`);
}

main().catch((e) => {
  // 翻译只是锦上添花，出错不影响后面的发布
  console.error("翻译出错：", e);
});
