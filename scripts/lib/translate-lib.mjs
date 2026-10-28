// 实时热点英文翻译用到的纯函数，方便单独测试。

const CJK = /[一-鿿]/;

export function hasChinese(s) {
  return CJK.test(String(s || ""));
}

// Google News 的标题末尾带“ - Anthropic”这类来源后缀，翻译前去掉
export function cleanTitle(title, url) {
  const t = String(title || "").trim();
  if (!/^https:\/\/news\.google\.com\//.test(url || "")) return t;
  const i = t.lastIndexOf(" - ");
  return i > 0 ? t.slice(0, i).trim() : t;
}

// 找出还没有中文翻译的英文内容：资讯标题、GitHub 项目简介
export function pendingItems(hot, titleZh, descZh) {
  const out = [];
  for (const it of (hot && hot.items) || []) {
    if (it.kind === "news" && !hasChinese(it.title) && !titleZh[it.url]) {
      out.push({ map: "title", url: it.url, text: cleanTitle(it.title, it.url) });
    } else if (it.kind === "repo" && it.desc && !hasChinese(it.desc) && !descZh[it.url]) {
      out.push({ map: "desc", url: it.url, text: it.desc });
    }
  }
  return out;
}

// 从模型回复里取出 JSON 字符串数组；数量对不上就报错，宁可这批不翻也不要错位
export function parseTranslations(reply, count) {
  let text = typeof reply === "string" ? reply : JSON.stringify(reply);
  text = text.replace(/<think>[\s\S]*?<\/think>/g, "");
  const start = text.indexOf("["), end = text.lastIndexOf("]");
  if (start < 0 || end < start) throw new Error("回复里没有 JSON 数组");
  const arr = JSON.parse(text.slice(start, end + 1));
  if (!Array.isArray(arr) || arr.length !== count) throw new Error(`条数不对：要 ${count} 条，拿到 ${Array.isArray(arr) ? arr.length : "非数组"}`);
  return arr.map(pickText);
}

// 模型偶尔把每条包成对象，比如 {"zh": "……"}，取里面第一个字符串；取不到就当没翻
function pickText(v) {
  if (typeof v === "string") return v.trim();
  if (v && typeof v === "object") {
    const s = Object.values(v).find((x) => typeof x === "string");
    if (s) return s.trim();
  }
  return "";
}

// 只保留当前 hot.js 里还在、而且确实是中文的条目；坏掉的译文丢掉，下次重翻
export function pruneToCurrent(hot, titleZh, descZh) {
  const urls = new Set(((hot && hot.items) || []).map((it) => it.url));
  const keep = (m) => Object.fromEntries(Object.entries(m).filter(([url, zh]) => urls.has(url) && hasChinese(zh)));
  return { titleZh: keep(titleZh), descZh: keep(descZh) };
}

export function renderZhFile(titleZh, descZh) {
  const block = (m) => "{\n" + Object.entries(m).map(([k, v]) => "  " + JSON.stringify(k) + ": " + JSON.stringify(v)).join(",\n") + "\n}";
  return "// 实时热点里英文内容的中文翻译，键是原文链接；由 /ai日报 和 scripts/translate.mjs 生成\n" +
    "// AI_TITLE_ZH：AI 资讯的标题；AI_DESC_ZH：GitHub 新项目的简介\n" +
    "window.AI_TITLE_ZH = " + block(titleZh) + ";\n" +
    "window.AI_DESC_ZH = " + block(descZh) + ";\n";
}
