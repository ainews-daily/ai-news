// 生成订阅源 feed.xml（RSS 2.0）和 feed.json（JSON Feed），取最近 10 期日报。
// 用法：node scripts/build-feed.mjs <输出目录>   （CI 里输出到 _site）
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";
import { buildRss, buildJsonFeed } from "./lib/feed-lib.mjs";

const LIMIT = 10;
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = process.argv[2];
if (!outDir) {
  console.error("用法：node scripts/build-feed.mjs <输出目录>");
  process.exit(1);
}

// 数据文件是给浏览器用的脚本，放进沙箱里跑一遍取出 window 上的数据
const ctx = vm.createContext({ window: {} });
const run = (file) => vm.runInContext(readFileSync(join(root, "data", file), "utf8"), ctx, { filename: file });

run("manifest.js");
const dates = (ctx.window.AI_DAILY_MANIFEST || []).slice().sort().reverse().slice(0, LIMIT);
const issues = dates.map((d) => {
  run(`${d}.js`);
  const issue = ctx.window.AI_DAILY?.[d];
  if (!issue) throw new Error(`data/${d}.js 里没有 ${d} 的数据`);
  return issue;
});

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "feed.xml"), buildRss(issues));
writeFileSync(join(outDir, "feed.json"), JSON.stringify(buildJsonFeed(issues), null, 2) + "\n");
console.log(`订阅源已生成：${issues.length} 期，最新 ${dates[0] || "无"}`);
