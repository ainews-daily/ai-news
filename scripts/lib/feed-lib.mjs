// 把日报数据转成 RSS 2.0 和 JSON Feed。纯函数，不读写文件。
// 工具推荐（apps）和设计专栏（design）基本都是软件、插件，不进订阅源。

export const SITE_URL = "https://aifresh.pages.dev";
export const SITE_TITLE = "AI 新鲜事";
const SITE_DESC = "每天的 AI 圈和国内大厂动态，逐条核实，附原始出处。";

// 订阅源里的板块和顺序
const SECTIONS = [
  { id: "items", name: "AI 新闻" },
  { id: "corp", name: "大厂动态" },
  { id: "voices", name: "大佬观点" },
  { id: "pricing", name: "AI 价格动态" },
  { id: "insights", name: "AI 落地观察" },
];

export function escapeXml(s) {
  return String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// 日报日期按北京时间早上 8 点算发布时间
export function rfc822(date) {
  const [y, m, d] = date.split("-").map(Number);
  const day = DAYS[new Date(Date.UTC(y, m - 1, d)).getUTCDay()];
  return `${day}, ${String(d).padStart(2, "0")} ${MONTHS[m - 1]} ${y} 08:00:00 +0800`;
}

function isoDate(date) {
  return `${date}T08:00:00+08:00`;
}

function issueLink(date) {
  return `${SITE_URL}/#${date}`;
}

function issueTitle(date) {
  const [, m, d] = date.split("-").map(Number);
  return `${SITE_TITLE} · ${m}月${d}日`;
}

// 每条只保留转载需要的字段
function entry(sectionId, it) {
  const e = { title: it.title, summary: it.summary, source: it.source, url: it.url };
  if (sectionId === "voices") {
    e.person = it.person;
    e.role = it.role;
    e.said = it.said;
  }
  if (sectionId === "corp") e.company = it.company;
  if (sectionId === "pricing") e.product = it.product;
  return e;
}

export function issueSections(issue) {
  return SECTIONS.map((s) => ({
    id: s.id,
    name: s.name,
    entries: (Array.isArray(issue[s.id]) ? issue[s.id] : []).map((it) => entry(s.id, it)),
  })).filter((s) => s.entries.length > 0);
}

// 只用简单标签，方便转到公众号编辑器
export function issueToHtml(issue) {
  const out = [];
  out.push("<h2>今日要点</h2>");
  out.push("<ul>" + issue.highlights.map((h) => `<li>${escapeXml(h)}</li>`).join("") + "</ul>");
  for (const s of issueSections(issue)) {
    out.push(`<h2>${escapeXml(s.name)}</h2>`);
    for (const e of s.entries) {
      out.push(`<h3>${escapeXml(e.title)}</h3>`);
      if (e.person) out.push(`<p><strong>${escapeXml(e.person)}${e.role ? "（" + escapeXml(e.role) + "）" : ""}</strong></p>`);
      out.push(`<p>${escapeXml(e.summary)}</p>`);
      out.push(`<p>来源：<a href="${escapeXml(e.url)}">${escapeXml(e.source)}</a></p>`);
    }
  }
  const link = issueLink(issue.date);
  out.push(`<hr><p>本文来自 AI 新鲜事（${SITE_URL}），原文：<a href="${escapeXml(link)}">${escapeXml(link)}</a></p>`);
  return out.join("\n");
}

function cdata(s) {
  return "<![CDATA[" + s.replace(/]]>/g, "]]]]><![CDATA[>") + "]]>";
}

// issues 按日期从新到旧
export function buildRss(issues, { now = new Date() } = {}) {
  const items = issues.map((issue) => [
    "    <item>",
    `      <title>${escapeXml(issueTitle(issue.date))}</title>`,
    `      <link>${escapeXml(issueLink(issue.date))}</link>`,
    `      <guid isPermaLink="false">aifresh-${issue.date}</guid>`,
    `      <pubDate>${rfc822(issue.date)}</pubDate>`,
    `      <description>${escapeXml(issue.highlights.join(" "))}</description>`,
    `      <content:encoded>${cdata(issueToHtml(issue))}</content:encoded>`,
    "    </item>",
  ].join("\n"));
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom">',
    "  <channel>",
    `    <title>${SITE_TITLE}</title>`,
    `    <link>${SITE_URL}/</link>`,
    `    <description>${SITE_DESC}</description>`,
    "    <language>zh-CN</language>",
    `    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>`,
    `    <lastBuildDate>${now.toUTCString().replace("GMT", "+0000")}</lastBuildDate>`,
    ...items,
    "  </channel>",
    "</rss>",
    "",
  ].join("\n");
}

// JSON Feed 1.1；_aifresh 里是按板块拆好的原始字段，方便程序逐条筛选
export function buildJsonFeed(issues) {
  return {
    version: "https://jsonfeed.org/version/1.1",
    title: SITE_TITLE,
    home_page_url: `${SITE_URL}/`,
    feed_url: `${SITE_URL}/feed.json`,
    description: SITE_DESC,
    language: "zh-CN",
    items: issues.map((issue) => ({
      id: `aifresh-${issue.date}`,
      url: issueLink(issue.date),
      title: issueTitle(issue.date),
      summary: issue.highlights.join(" "),
      content_html: issueToHtml(issue),
      date_published: isoDate(issue.date),
      _aifresh: {
        date: issue.date,
        attribution: `本文来自 AI 新鲜事（${SITE_URL}）`,
        highlights: issue.highlights,
        sections: issueSections(issue),
      },
    })),
  };
}
