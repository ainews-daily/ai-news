// 校验日报数据文件和 manifest 是否符合规则。
// 用法：node scripts/validate.mjs data/2026-10-14.js
import { readFileSync } from "node:fs";
import { basename, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";

const CATEGORIES = ["model", "industry", "research", "tools"];
const REGIONS = ["cn", "intl"];
const APP_CATEGORIES = ["office", "coding", "system", "fun"];
const INSIGHT_KINDS = ["industry", "usage", "jobs"];
const CORP_KINDS = ["layoff", "quality", "penalty", "org", "business", "dispute"];
const DESIGN_KINDS = ["tool", "plugin", "deal", "trend"];
const PRICING_CHANGES = ["up", "down", "new", "free", "limit"];
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const URL_RE = /^https?:\/\/\S+$/;

function isText(v) {
  return typeof v === "string" && v.trim() !== "";
}

function countSentences(text) {
  return (text.match(/[。！？!?]+/g) || []).length;
}

export function validateIssue(issue) {
  const errors = [];
  if (!issue || typeof issue !== "object") return ["数据不是对象"];

  if (!DATE_RE.test(issue.date || "")) errors.push(`date 格式应为 YYYY-MM-DD：${issue.date}`);

  const hl = issue.highlights;
  if (!Array.isArray(hl) || hl.length !== 3 || !hl.every(isText)) {
    errors.push("highlights 必须正好 3 条非空文字");
  }

  const items = Array.isArray(issue.items) ? issue.items : [];
  if (items.length < 12 || items.length > 16) errors.push(`条数应为 12–16，实际 ${items.length}`);

  items.forEach((it, i) => {
    const at = `第 ${i + 1} 条`;
    if (!isText(it.title)) errors.push(`${at}：缺少标题`);
    else if ([...it.title].length > 30) errors.push(`${at}：标题超过 30 字`);
    if (!isText(it.summary)) errors.push(`${at}：缺少摘要`);
    else {
      const n = countSentences(it.summary);
      if (n < 2 || n > 3) errors.push(`${at}：摘要应为 2–3 句，实际 ${n} 句`);
    }
    if (!CATEGORIES.includes(it.category)) errors.push(`${at}：category 非法：${it.category}`);
    if (!REGIONS.includes(it.region)) errors.push(`${at}：region 非法：${it.region}`);
    if (!isText(it.source)) errors.push(`${at}：缺少 source`);
    if (!URL_RE.test(it.url || "")) errors.push(`${at}：url 无效：${it.url}`);
  });

  const cn = items.filter((it) => it.region === "cn").length;
  const intl = items.filter((it) => it.region === "intl").length;
  if (Math.abs(cn - intl) > 2) errors.push(`国内 ${cn} 条、国外 ${intl} 条，差距超过 2`);

  for (const c of CATEGORIES) {
    if (!items.some((it) => it.category === c)) errors.push(`缺少分类：${c}`);
  }

  errors.push(...validateApps(issue.apps, issue.date), ...validateInsights(issue.insights), ...validateCorp(issue.corp));
  // 设计专栏、价格动态、大佬观点是 2026-10-15 起新增的版块，往期没有这些字段
  if (issue.design !== undefined) errors.push(...validateDesign(issue.design));
  if (issue.pricing !== undefined) errors.push(...validatePricing(issue.pricing));
  if (issue.voices !== undefined) errors.push(...validateVoices(issue.voices));
  return errors;
}

function sentenceRange(errors, at, text, min, max) {
  if (!isText(text)) return errors.push(`${at}：缺少摘要`);
  const n = countSentences(text);
  if (n < min || n > max) errors.push(`${at}：应为 ${min}–${max} 句，实际 ${n} 句`);
}

function validateApps(apps, date = "") {
  const errors = [];
  apps = Array.isArray(apps) ? apps : [];
  // 2026-10-17 起工具推荐从 8–12 个、至少 3 类，改为 12–16 个、四类都要有
  const isNew = !(date < "2026-10-17");
  const [min, max] = isNew ? [12, 16] : [8, 12];
  if (apps.length < min || apps.length > max) errors.push(`工具数量应为 ${min}–${max}，实际 ${apps.length}`);
  const seen = new Set();
  apps.forEach((a, i) => {
    const at = `工具 ${i + 1}`;
    if (!isText(a.name)) errors.push(`${at}：缺少 name`);
    else {
      const key = a.name.trim().toLowerCase();
      if (seen.has(key)) errors.push(`${at}：与本期其他工具重复：${a.name}`);
      seen.add(key);
    }
    if (!APP_CATEGORIES.includes(a.category)) errors.push(`${at}：category 非法：${a.category}`);
    sentenceRange(errors, at, a.desc, 1, 2);
    if (!isText(a.license)) errors.push(`${at}：缺少 license`);
    if (a.stars !== undefined && !(Number.isInteger(a.stars) && a.stars >= 0)) errors.push(`${at}：stars 应为非负整数`);
    if (a.size !== undefined && !isText(a.size)) errors.push(`${at}：size 应为文字`);
    if (!URL_RE.test(a.url || "")) errors.push(`${at}：url 无效：${a.url}`);
  });
  const cats = new Set(apps.map((a) => a.category));
  const minCats = isNew ? APP_CATEGORIES.length : 3;
  if (apps.length && cats.size < minCats) errors.push(`工具分类至少覆盖 ${minCats} 种，实际 ${cats.size} 种`);
  return errors;
}

function validateInsights(list) {
  const errors = [];
  list = Array.isArray(list) ? list : [];
  if (list.length < 2 || list.length > 3) errors.push(`落地观察数量应为 2–3，实际 ${list.length}`);
  list.forEach((it, i) => {
    const at = `观察 ${i + 1}`;
    if (!isText(it.title)) errors.push(`${at}：缺少标题`);
    else if ([...it.title].length > 30) errors.push(`${at}：标题超过 30 字`);
    sentenceRange(errors, at, it.summary, 2, 4);
    if (!INSIGHT_KINDS.includes(it.kind)) errors.push(`${at}：kind 非法：${it.kind}`);
    if (!/^\d{4}-\d{2}(-\d{2})?$/.test(it.asOf || "")) errors.push(`${at}：asOf 应为 YYYY-MM 或 YYYY-MM-DD：${it.asOf}`);
    if (!isText(it.source)) errors.push(`${at}：缺少 source`);
    if (!URL_RE.test(it.url || "")) errors.push(`${at}：url 无效：${it.url}`);
  });
  return errors;
}

function validateCorp(list) {
  const errors = [];
  list = Array.isArray(list) ? list : [];
  // region 省略时算国内；国内 5–8 条，国外大厂最多 3 条
  const cn = list.filter((it) => (it.region || "cn") === "cn").length;
  const intl = list.length - cn;
  if (cn < 5 || cn > 8) errors.push(`国内企业动态应为 5–8 条，实际 ${cn}`);
  if (intl > 3) errors.push(`国外大厂动态最多 3 条，实际 ${intl}`);
  list.forEach((it, i) => {
    const at = `企业 ${i + 1}`;
    if (!isText(it.title)) errors.push(`${at}：缺少标题`);
    else if ([...it.title].length > 30) errors.push(`${at}：标题超过 30 字`);
    sentenceRange(errors, at, it.summary, 2, 3);
    if (!CORP_KINDS.includes(it.kind)) errors.push(`${at}：kind 非法：${it.kind}`);
    if (!isText(it.company)) errors.push(`${at}：缺少 company`);
    if (it.region !== undefined && !REGIONS.includes(it.region)) errors.push(`${at}：region 非法：${it.region}`);
    if (!isText(it.source)) errors.push(`${at}：缺少 source`);
    if (!URL_RE.test(it.url || "")) errors.push(`${at}：url 无效：${it.url}`);
  });
  return errors;
}

// 通用：标题、摘要句数、来源、链接
function checkEntry(errors, at, it, minSentences, maxSentences) {
  if (!isText(it.title)) errors.push(`${at}：缺少标题`);
  else if ([...it.title].length > 30) errors.push(`${at}：标题超过 30 字`);
  sentenceRange(errors, at, it.summary, minSentences, maxSentences);
  if (!isText(it.source)) errors.push(`${at}：缺少 source`);
  if (!URL_RE.test(it.url || "")) errors.push(`${at}：url 无效：${it.url}`);
}

function validateDesign(list) {
  const errors = [];
  if (!Array.isArray(list)) return ["design 应为数组"];
  if (list.length < 4 || list.length > 8) errors.push(`设计专栏数量应为 4–8，实际 ${list.length}`);
  list.forEach((it, i) => {
    const at = `设计 ${i + 1}`;
    checkEntry(errors, at, it, 2, 3);
    if (!DESIGN_KINDS.includes(it.kind)) errors.push(`${at}：kind 非法：${it.kind}`);
    if (it.price !== undefined && !isText(it.price)) errors.push(`${at}：price 应为文字`);
  });
  return errors;
}

// 价格动态可以为空数组：当天没有变化就不收
function validatePricing(list) {
  const errors = [];
  if (!Array.isArray(list)) return ["pricing 应为数组"];
  if (list.length > 8) errors.push(`价格动态最多 8 条，实际 ${list.length}`);
  list.forEach((it, i) => {
    const at = `价格 ${i + 1}`;
    checkEntry(errors, at, it, 2, 3);
    if (!isText(it.product)) errors.push(`${at}：缺少 product`);
    if (!PRICING_CHANGES.includes(it.change)) errors.push(`${at}：change 非法：${it.change}`);
  });
  return errors;
}

function validateVoices(list) {
  const errors = [];
  if (!Array.isArray(list)) return ["voices 应为数组"];
  if (list.length < 4 || list.length > 8) errors.push(`大佬观点数量应为 4–8，实际 ${list.length}`);
  if (list.length && !list.some((it) => it.region === "cn")) errors.push("大佬观点至少要有 1 条国内人物");
  list.forEach((it, i) => {
    const at = `观点 ${i + 1}`;
    checkEntry(errors, at, it, 2, 4);
    if (!isText(it.person)) errors.push(`${at}：缺少 person`);
    if (!isText(it.role)) errors.push(`${at}：缺少 role`);
    if (!REGIONS.includes(it.region)) errors.push(`${at}：region 非法：${it.region}`);
    if (!DATE_RE.test(it.said || "")) errors.push(`${at}：said 应为 YYYY-MM-DD：${it.said}`);
  });
  return errors;
}

// 返回本期中已在往期推荐过的工具，形如 "ShareX（2026-10-13 已推荐）"
export function findRepeatedApps(issue, others) {
  const firstSeen = new Map();
  for (const o of others) {
    for (const a of o.apps || []) {
      const key = String(a.name || "").trim().toLowerCase();
      if (key && !firstSeen.has(key)) firstSeen.set(key, o.date);
    }
  }
  return (issue.apps || [])
    .filter((a) => firstSeen.has(String(a.name || "").trim().toLowerCase()))
    .map((a) => `${a.name}（${firstSeen.get(a.name.trim().toLowerCase())} 已推荐）`);
}

export function validateManifest(dates, mustInclude) {
  const errors = [];
  if (!Array.isArray(dates)) return ["manifest 不是数组"];
  if (dates.some((d) => !DATE_RE.test(d))) errors.push("manifest 中有格式错误的日期");
  if (new Set(dates).size !== dates.length) errors.push("manifest 中有重复日期");
  const sorted = [...dates].sort().reverse();
  if (sorted.join() !== dates.join()) errors.push("manifest 排序应为从新到旧");
  if (mustInclude && !dates.includes(mustInclude)) errors.push(`manifest 不包含 ${mustInclude}`);
  return errors;
}

function runInSandbox(path) {
  const sandbox = { window: {} };
  vm.runInNewContext(readFileSync(path, "utf8"), sandbox, { filename: path });
  return sandbox.window;
}

export function loadIssueFile(path) {
  const date = basename(path, ".js");
  return (runInSandbox(path).AI_DAILY || {})[date];
}

export function loadManifest(path) {
  return runInSandbox(path).AI_DAILY_MANIFEST;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const file = process.argv[2];
  if (!file) {
    console.error("用法：node scripts/validate.mjs data/YYYY-MM-DD.js");
    process.exit(2);
  }
  const date = basename(file, ".js");
  const issue = loadIssueFile(file);
  const errors = issue ? validateIssue(issue) : [`文件里没有 window.AI_DAILY["${date}"]`];
  if (issue && issue.date !== date) errors.push(`文件名日期 ${date} 与 date 字段 ${issue.date} 不一致`);
  const manifest = loadManifest(join(dirname(file), "manifest.js"));
  errors.push(...validateManifest(manifest, date));
  if (issue && Array.isArray(manifest)) {
    const others = manifest
      .filter((d) => d !== date)
      .map((d) => {
        try { return loadIssueFile(join(dirname(file), d + ".js")); } catch { return null; }
      })
      .filter(Boolean);
    findRepeatedApps(issue, others).forEach((r) => errors.push(`工具与往期重复：${r}`));
  }

  if (errors.length) {
    console.error(`校验失败（${errors.length} 处）：`);
    errors.forEach((e) => console.error("  - " + e));
    process.exit(1);
  }
  const items = issue.items;
  const cn = items.filter((it) => it.region === "cn").length;
  console.log(`校验通过：${date}，共 ${items.length} 条（国内 ${cn}，国外 ${items.length - cn}）`);
}
