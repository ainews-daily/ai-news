// 爬虫用到的纯函数，不碰网络和文件，方便测试。

const ENTITIES = { lt: "<", gt: ">", quot: '"', apos: "'", amp: "&", nbsp: " " };

function decodeEntities(s) {
  return s.replace(/&(?:#x([0-9a-f]+)|#(\d+)|(lt|gt|quot|apos|amp|nbsp));/gi, (m, hex, dec, name) => {
    if (hex) return String.fromCodePoint(parseInt(hex, 16));
    if (dec) return String.fromCodePoint(Number(dec));
    return ENTITIES[name.toLowerCase()];
  });
}

// 取标签里的纯文本：CDATA 原样取，否则解实体；最后去掉 HTML 标签并压缩空白
function cleanText(raw) {
  const cdata = raw.match(/^\s*<!\[CDATA\[([\s\S]*?)\]\]>\s*$/);
  const text = cdata ? cdata[1] : decodeEntities(raw);
  return text.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

function tagText(block, name) {
  const m = block.match(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)</${name}>`, "i"));
  return m ? cleanText(m[1]) : "";
}

function toIso(s) {
  const t = Date.parse(s);
  return Number.isNaN(t) ? null : new Date(t).toISOString();
}

function atomLink(block) {
  const links = block.match(/<link\b[^>]*>/gi) || [];
  let fallback = "";
  for (const l of links) {
    const href = (l.match(/href="([^"]+)"/i) || [])[1];
    if (!href) continue;
    const rel = (l.match(/rel="([^"]+)"/i) || [])[1];
    if (!rel || rel === "alternate") return decodeEntities(href);
    if (!fallback) fallback = decodeEntities(href);
  }
  return fallback;
}

// 解析 RSS 2.0 / Atom，返回 [{ title, link, date }]，date 为 ISO 字符串或 null
export function parseFeed(xml) {
  const blocks = xml.match(/<item[\s>][\s\S]*?<\/item>/gi) || xml.match(/<entry[\s>][\s\S]*?<\/entry>/gi) || [];
  return blocks.map((b) => {
    const isAtom = /^<entry/i.test(b);
    const link = isAtom ? atomLink(b) : tagText(b, "link") || atomLink(b);
    const date = tagText(b, "pubDate") || tagText(b, "published") || tagText(b, "updated") || tagText(b, "dc:date");
    return { title: tagText(b, "title"), link: link.trim(), date: date ? toIso(date) : null };
  }).filter((x) => x.title && x.link);
}

function escapeRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// exclude：匹配前先从标题里去掉这些词（比如“王者荣耀”不算荣耀手机）
// 纯 ASCII 关键词按“整词”匹配（避免 AI 命中 said），中文等按子串匹配
export function compileTopics(topics) {
  return topics.map((t) => ({
    id: t.id,
    standalone: t.standalone !== false,
    exclude: t.exclude || [],
    res: t.keywords.map((k) => /^[\x20-\x7e]+$/.test(k)
      ? new RegExp(`(?<![A-Za-z0-9])${escapeRe(k)}(?![A-Za-z0-9])`, "i")
      : new RegExp(escapeRe(k), "i"))
  }));
}

export function matchTopics(title, compiled) {
  return compiled.filter((t) => {
    const text = t.exclude.reduce((s, x) => s.split(x).join(" "), title);
    return t.res.some((r) => r.test(text));
  }).map((t) => t.id);
}

// 热榜条目是否值得收录：至少命中一个“独立”分组（standalone 不为 false）
export function isNoteworthy(topicIds, compiled) {
  return compiled.some((t) => t.standalone && topicIds.includes(t.id));
}

// 资讯源条目：只留时间窗口内的（没有日期的丢掉），aiOnly 源必须命中 ai 分组
export function selectFeedItems(items, { now, maxAgeMs, aiOnly, topics, limit }) {
  const out = [];
  for (const it of items) {
    if (!it.date) continue;
    const age = now - Date.parse(it.date);
    if (age > maxAgeMs || age < -3600e3) continue;
    const hit = matchTopics(it.title, topics);
    if (aiOnly && !hit.includes("ai")) continue;
    out.push({ title: it.title, url: it.link, time: it.date, topics: hit });
    if (out.length >= limit) break;
  }
  return out;
}

// 只放行 https 链接；给了域名时，主机名必须是该域名或其子域名
export function safeLink(url, domain) {
  let u;
  try { u = new URL(url); } catch { return null; }
  if (u.protocol !== "https:" || u.username || u.password) return null;
  if (!domain) return u.href === url ? url : u.href;
  const host = u.hostname.toLowerCase();
  return host === domain || host.endsWith("." + domain) ? url : null;
}

export function dedupe(items) {
  const seen = new Set();
  return items.filter((it) => {
    const key = it.title.toLowerCase().replace(/\s+/g, "");
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}
