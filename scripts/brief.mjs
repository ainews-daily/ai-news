// 从 data/seen.js（没有就从 data/hot.js 建一份）挑今日速览，写入 data/brief.js。
// 用法：node scripts/brief.mjs
// 由 GitHub Actions 在抓取和翻译之后运行。

import { readFile, writeFile } from "node:fs/promises";
import vm from "node:vm";
import { selectBrief, updateSeen } from "./lib/brief-lib.mjs";

const ROOT = new URL("..", import.meta.url);

async function loadWindow(path) {
  const ctx = { window: {} };
  try {
    vm.runInNewContext(await readFile(new URL(path, ROOT), "utf8"), ctx);
  } catch (e) {
    if (e.code !== "ENOENT") throw e;
    return null;
  }
  return ctx.window;
}

function coveredFrom(issues) {
  const out = [];
  for (const issue of issues) {
    for (const key of ["items", "corp", "voices", "pricing"]) {
      for (const it of issue[key] || []) {
        if (it && (it.title || it.url)) out.push({ title: it.title || "", url: it.url || "" });
      }
    }
  }
  return out;
}

async function main() {
  const hotWin = await loadWindow("data/hot.js");
  const hot = hotWin?.AI_HOT;
  if (!hot || !Array.isArray(hot.items)) {
    console.error("没有 data/hot.js，跳过今日速览。");
    return;
  }
  const nowIso = new Date().toISOString();
  let seenWin = await loadWindow("data/seen.js");
  let seen = Array.isArray(seenWin?.AI_SEEN) ? seenWin.AI_SEEN : null;
  if (!seen) {
    seen = updateSeen(hot.items, null, hot.generatedAt || nowIso);
    await writeFile(new URL("data/seen.js", ROOT), "// 由 scripts/crawl.mjs 自动生成，请勿手改\nwindow.AI_SEEN = " + JSON.stringify(seen) + ";\n");
    console.log("没有历史记录，已按当前 hot.js 的「新」标记初始化 data/seen.js");
  }

  const manifestWin = await loadWindow("data/manifest.js");
  const dates = Array.isArray(manifestWin?.AI_DAILY_MANIFEST) ? manifestWin.AI_DAILY_MANIFEST.slice(0, 3) : [];
  const issues = [];
  for (const d of dates) {
    const win = await loadWindow(`data/${d}.js`);
    if (win?.AI_DAILY?.[d]) issues.push(win.AI_DAILY[d]);
  }

  const zhWin = await loadWindow("data/title-zh.js");
  const titleZh = zhWin?.AI_TITLE_ZH || {};
  const names = Object.fromEntries((hot.sources || []).map((s) => [s.id, s.name]));
  const brief = selectBrief(seen, {
    now: Date.parse(nowIso),
    covered: coveredFrom(issues),
    sourceNames: names,
    translate: (url, title) => (/[\u4e00-\u9fff]/.test(title) ? "" : titleZh[url] || "")
  });
  const snapshot = {
    generatedAt: nowIso,
    windowHours: 24,
    ...brief
  };
  await writeFile(new URL("data/brief.js", ROOT), "// 由 scripts/brief.mjs 自动生成，请勿手改\nwindow.AI_BRIEF = " + JSON.stringify(snapshot) + ";\n");
  console.log(`今日速览：${brief.items.length} 条，看点 ${brief.highlights.length} 条，缺分类 ${brief.gaps.join("、") || "无"}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
