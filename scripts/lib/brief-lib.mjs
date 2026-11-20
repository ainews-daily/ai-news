// 今日速览的挑选规则，来自精选日报的筛选步骤，只保留爬虫数据能执行的部分：
// 过去 24 小时内新出现；同一件事并成一条；model / industry / research / tools 尽量都有；
// 国内外条数相差不超过 2（一边已经没有候选时不再硬卡）；同一家公司最多 2 条；
// 国外头部厂商（OpenAI、Google、Meta、Microsoft、xAI）池子里有就尽量收 1 条；
// 官方博客优先于媒体，媒体优先于热榜。
// 观点、价格、工具推荐、设计专栏、落地观察要逐条核实，这里不生成。

export const FRESH_MS = 24 * 3600e3;
export const SEEN_KEEP_MS = 72 * 3600e3;

const VENDORS = [
  { id: "openai", name: "OpenAI", region: "intl", major: true, ai: true, re: /openai|chatgpt|\bgpt\b/i, strip: ["openai", "chatgpt", "gpt"] },
  { id: "google", name: "Google", region: "intl", major: true, ai: true, re: /deepmind|gemini|\bgoogle\b|谷歌/i, strip: ["deepmind", "gemini", "google", "谷歌"] },
  { id: "meta", name: "Meta", region: "intl", major: true, ai: true, re: /\bmeta\b|\bllama\b/i, strip: ["meta", "llama"] },
  { id: "microsoft", name: "微软", region: "intl", major: true, ai: true, re: /microsoft|微软|\bcopilot\b/i, strip: ["microsoft", "微软", "copilot"] },
  { id: "xai", name: "xAI", region: "intl", major: true, ai: true, re: /\bxai\b|\bgrok\b/i, strip: ["xai", "grok"] },
  { id: "anthropic", name: "Anthropic", region: "intl", ai: true, re: /anthropic|\bclaude\b/i, strip: ["anthropic", "claude"] },
  { id: "nvidia", name: "英伟达", region: "intl", ai: true, re: /nvidia|英伟达|黄仁勋/i, strip: ["nvidia", "英伟达", "黄仁勋"] },
  { id: "apple", name: "苹果", region: "intl", re: /\bapple\b|iphone|库克|苹果公司/i, strip: ["apple", "iphone", "库克", "苹果"] },
  { id: "amazon", name: "亚马逊", region: "intl", re: /\bamazon\b|亚马逊/i, strip: ["amazon", "亚马逊"] },
  { id: "mistral", name: "Mistral", region: "intl", ai: true, re: /\bmistral\b/i, strip: ["mistral"] },
  { id: "deepseek", name: "DeepSeek", region: "cn", ai: true, re: /deepseek|深度求索/i, strip: ["deepseek", "深度求索"] },
  { id: "alibaba", name: "阿里", region: "cn", ai: true, re: /阿里|通义|千问|\bqwen\b/i, strip: ["阿里", "通义", "千问", "qwen"] },
  { id: "bytedance", name: "字节", region: "cn", ai: true, re: /字节|豆包/i, strip: ["字节", "豆包"] },
  { id: "tencent", name: "腾讯", region: "cn", ai: true, re: /腾讯|混元/i, strip: ["腾讯", "混元"] },
  { id: "baidu", name: "百度", region: "cn", ai: true, re: /百度|文心/i, strip: ["百度", "文心"] },
  { id: "moonshot", name: "月之暗面", region: "cn", ai: true, re: /月之暗面|\bkimi\b/i, strip: ["月之暗面", "kimi"] },
  { id: "zhipu", name: "智谱", region: "cn", ai: true, re: /智谱|\bglm\b/i, strip: ["智谱", "glm"] },
  { id: "minimax", name: "MiniMax", region: "cn", ai: true, re: /minimax/i, strip: ["minimax"] },
  { id: "stepfun", name: "阶跃星辰", region: "cn", ai: true, re: /阶跃星辰|阶跃/i, strip: ["阶跃星辰", "阶跃"] },
  { id: "huawei", name: "华为", region: "cn", re: /华为|鸿蒙|昇腾/i, strip: ["华为", "鸿蒙", "昇腾"] }
];

const MAJOR_IDS = VENDORS.filter((v) => v.major).map((v) => v.id);
const VENDOR_NAME = Object.fromEntries(VENDORS.map((v) => [v.id, v.name]));

const OFFICIAL = new Set(["openai", "google-ai", "deepmind", "anthropic", "meta-ai", "msr", "nvidia", "hf-blog", "mistral", "qwen"]);
const MEDIA = new Set(["theverge-ai", "techcrunch-ai", "arstechnica-ai", "techreview-ai", "thedecoder", "simonwillison", "importai", "qbitai", "jiqizhixin", "xinzhiyuan", "infoq", "sspai"]);
const READABLE_HOT = new Set(["thepaper", "cls-hot", "wallstreetcn-hot", "ifeng", "ithome", "bilibili-hot-search"]);

const CATEGORIES = ["model", "industry", "research", "tools"];
export const CATEGORY_NAME = { model: "模型产品", industry: "行业动态", research: "研究前沿", tools: "工具玩法" };

function tierOf(source) {
  if (OFFICIAL.has(source)) return 3;
  if (MEDIA.has(source)) return 2;
  if (READABLE_HOT.has(source)) return 1;
  return 0;
}

export function detectVendor(title) {
  const text = String(title || "");
  return VENDORS.find((v) => v.re.test(text))?.id || "";
}

export function detectCategory(item) {
  if (item.kind === "repo") return "tools";
  const title = String(item.title || "");
  if (/论文|arxiv|\bpaper\b|研究|benchmark|预印本/i.test(title)) return "research";
  const topics = item.topics || [];
  const modelish = /发布|开源|模型|\bmodel\b|权重|weights|\bgpt\b|\bclaude\b|\bgemini\b|\bllama\b|\bqwen\b|deepseek|大模型/i.test(title);
  if (topics.includes("money") || (topics.includes("bigtech") && !modelish)) return "industry";
  if (modelish || topics.includes("ai")) return "model";
  if (topics.includes("bigtech") || topics.includes("chip")) return "industry";
  return "industry";
}

export function detectRegion(item) {
  if (item.region === "cn" || item.region === "intl") return item.region;
  if (item.kind === "hot") return "cn";
  const vendor = VENDORS.find((v) => v.id === detectVendor(item.title));
  if (vendor) return vendor.region;
  return "intl";
}

function norm(title) {
  return String(title || "").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, "");
}

function bigrams(title) {
  const s = norm(title);
  const g = new Set();
  for (let i = 0; i < s.length - 1; i++) g.add(s.slice(i, i + 2));
  return g;
}

function jaccard(a, b) {
  if (!a.size || !b.size) return 0;
  let inter = 0;
  for (const x of a) if (b.has(x)) inter++;
  return inter / (a.size + b.size - inter);
}

function itemScore(it) {
  const rankBonus = it.kind === "hot" && it.rank ? Math.round((1 - Math.min(it.rank, 50) / 50) * 24) : 0;
  const starBonus = it.kind === "repo" ? Math.min(24, Math.round(Math.log10(it.stars || 1) * 10)) : 0;
  return tierOf(it.source) * 20 + rankBonus + starBonus;
}

function residual(title, vendorId) {
  let s = norm(title);
  const vendor = VENDORS.find((v) => v.id === vendorId);
  if (vendor) for (const part of vendor.strip) s = s.split(norm(part)).join("");
  return s;
}

// 去掉公司名之后还共享至少 3 个字，视为同一件事（比如余承东的几条鸿蒙智行）
function shareResidual(a, b) {
  if (!a.vendor || a.vendor !== b.vendor) return false;
  const left = residual(a.title, a.vendor);
  const right = residual(b.title, b.vendor);
  for (let i = 0; i < left.length - 2; i++) {
    if (right.includes(left.slice(i, i + 3))) return true;
  }
  return false;
}

function sameStory(a, b) {
  if (a.vendor && b.vendor && a.vendor !== b.vendor) return false;
  if (shareResidual(a, b)) return true;
  const jac = jaccard(a.grams, b.grams);
  if (a.vendor && a.vendor === b.vendor && jac >= 0.34) return true;
  if (!a.vendor && !b.vendor && jac >= 0.55) return true;
  return jac >= 0.62;
}

function pickRep(members) {
  return members.slice().sort((a, b) => {
    const d = tierOf(b.source) - tierOf(a.source);
    if (d) return d;
    return (a.rank || 99) - (b.rank || 99);
  })[0];
}

export function clusterItems(items) {
  const seeds = items.slice().sort((a, b) => itemScore(b) - itemScore(a));
  const clusters = [];
  for (const it of seeds) {
    const entry = { ...it, vendor: detectVendor(it.title), grams: bigrams(it.title) };
    const found = clusters.find((c) => sameStory(c, entry));
    if (found) found.members.push(it);
    else clusters.push({ vendor: entry.vendor, grams: entry.grams, title: it.title, members: [it] });
  }
  return clusters.map((c) => {
    const rep = pickRep(c.members);
    const also = [...new Set(c.members.map((m) => m.source).filter((s) => s && s !== rep.source))];
    return {
      title: rep.title,
      url: rep.url,
      kind: rep.kind,
      source: rep.source,
      rank: rep.rank,
      stars: rep.stars,
      topics: rep.topics,
      region: detectRegion(rep),
      category: detectCategory(rep),
      vendor: detectVendor(rep.title),
      firstSeen: rep.firstSeen,
      also,
      score: itemScore(rep) + Math.min(3, c.members.length - 1) * 12
    };
  });
}

function inNewsPool(it) {
  if (it.kind === "repo" || it.kind === "news") return true;
  const topics = it.topics || [];
  if (topics.includes("ai") || topics.includes("chip")) return true;
  const vendor = VENDORS.find((v) => v.id === detectVendor(it.title));
  if (!vendor?.ai) return false;
  return topics.includes("money") || /季报|财报|营收|模型|开源|发布|芯片/.test(it.title || "");
}

function inCorpPool(it) {
  if (inNewsPool(it) || it.kind === "repo") return false;
  const topics = it.topics || [];
  return topics.includes("bigtech") || topics.includes("risk");
}

const CORP_KINDS = [
  ["layoff", /裁员|降薪|离职|辞职/],
  ["quality", /召回|故障|事故|起火|自燃/],
  ["penalty", /罚款|被罚|处罚|立案|调查|约谈/],
  ["org", /任命|加盟|离职|战略共同体/],
  ["dispute", /起诉|被告|维权|翻车/]
];

function corpKind(title) {
  return CORP_KINDS.find(([, re]) => re.test(title || ""))?.[0] || "business";
}

function coveredHit(item, covered) {
  const grams = bigrams(item.title);
  return covered.some((c) => (c.url && c.url === item.url) || jaccard(grams, bigrams(c.title || "")) >= 0.72);
}

function vendorCount(picked, id) {
  return id ? picked.filter((p) => p.vendor === id).length : 0;
}

function regionCounts(picked) {
  return {
    cn: picked.filter((p) => p.region === "cn").length,
    intl: picked.filter((p) => p.region === "intl").length
  };
}

// 一边还有没用过的候选时，不让另一边超前超过 2 条
function fits(cluster, picked, rest) {
  if (cluster.vendor && vendorCount(picked, cluster.vendor) >= 2) return false;
  const { cn, intl } = regionCounts(picked);
  const ncn = cn + (cluster.region === "cn" ? 1 : 0);
  const nintl = intl + (cluster.region === "intl" ? 1 : 0);
  if (Math.abs(ncn - nintl) <= 2) return true;
  const lagging = ncn > nintl ? "intl" : "cn";
  return !rest.some((x) => x !== cluster && !picked.includes(x) && x.region === lagging && vendorCount(picked, x.vendor) < 2);
}

function best(list, pred) {
  return list.filter(pred).sort((a, b) => b.score - a.score)[0] || null;
}

export function selectBrief(items, opts = {}) {
  const now = opts.now ?? Date.now();
  const windowMs = opts.windowMs ?? FRESH_MS;
  const limit = opts.limit ?? 14;
  const covered = opts.covered ?? [];
  const names = opts.sourceNames ?? {};
  const translate = opts.translate ?? (() => "");

  const fresh = items.filter((it) => {
    if (it.source === "zhihu") return false;
    const seen = Date.parse(it.firstSeen || "");
    return Number.isFinite(seen) && now - seen <= windowMs && now - seen >= -3600e3 && !coveredHit(it, covered);
  });
  const newsClusters = clusterItems(fresh.filter(inNewsPool)).sort((a, b) => b.score - a.score);
  const corpClusters = clusterItems(fresh.filter(inCorpPool)).sort((a, b) => b.score - a.score);
  const clusters = newsClusters;
  const picked = [];

  function take(c) {
    if (!c || picked.includes(c) || picked.length >= limit) return;
    picked.push(c);
  }
  function open(extra) {
    return (c) => !picked.includes(c) && fits(c, picked, clusters) && (!extra || extra(c));
  }

  for (const cat of CATEGORIES) {
    const { cn, intl } = regionCounts(picked);
    const lagging = cn < intl ? "cn" : intl < cn ? "intl" : null;
    take(best(clusters, open((c) => c.category === cat && c.region === lagging))
      || best(clusters, open((c) => c.category === cat)));
  }
  for (const id of MAJOR_IDS) {
    if (picked.some((p) => p.vendor === id)) continue;
    take(best(clusters, open((c) => c.vendor === id)));
  }
  while (picked.length < limit) {
    const { cn, intl } = regionCounts(picked);
    const lagging = cn < intl ? "cn" : intl < cn ? "intl" : null;
    const next = (lagging && best(clusters, open((c) => c.region === lagging))) || best(clusters, open());
    if (!next) break;
    take(next);
  }
  picked.sort((a, b) => b.score - a.score);

  const present = new Set(picked.map((p) => p.category));
  const poolVendors = new Set([...clusters, ...corpClusters].map((c) => c.vendor).filter(Boolean));
  const corpPicked = [];
  for (const c of corpClusters) {
    if (corpPicked.length >= 4) break;
    if (c.vendor && corpPicked.filter((p) => p.vendor === c.vendor).length >= 2) continue;
    corpPicked.push(c);
  }
  const toItem = (p, extra) => ({
    title: translate(p.url, p.title) || p.title,
    original: p.title,
    url: p.url,
    category: p.category,
    region: p.region,
    source: names[p.source] || p.source,
    also: p.also.map((id) => names[id] || id),
    vendor: p.vendor ? VENDOR_NAME[p.vendor] || p.vendor : "",
    firstSeen: p.firstSeen,
    ...extra
  });
  return {
    highlights: picked.slice(0, 3).map((p) => translate(p.url, p.title) || p.title),
    items: picked.map((p) => toItem(p)),
    corp: corpPicked.map((p) => toItem(p, { corpKind: corpKind(p.title) })),
    gaps: CATEGORIES.filter((c) => !present.has(c)),
    majorsMissing: MAJOR_IDS.filter((id) => !poolVendors.has(id)).map((id) => VENDOR_NAME[id] || id)
  };
}

function slim(it) {
  const out = { title: it.title, url: it.url, kind: it.kind, source: it.source };
  for (const k of ["region", "rank", "topics", "time", "stars", "desc"]) {
    if (it[k] !== undefined && it[k] !== "") out[k] = it[k];
  }
  return out;
}

// previous 为 null 表示没有历史：fresh 的算这次新出现，其余记到窗口之外，避免第一次把整页都当成新的。
export function updateSeen(current, previous, nowIso, keepMs = SEEN_KEEP_MS) {
  const prevList = Array.isArray(previous) ? previous : null;
  const prevMap = new Map((prevList || []).filter((x) => x.url).map((x) => [x.url, x]));
  const now = Date.parse(nowIso);
  const baseline = new Date(now - keepMs - 1000).toISOString();
  const out = [];
  const urls = new Set();
  for (const it of current) {
    if (!it.url) continue;
    urls.add(it.url);
    const old = prevMap.get(it.url);
    const firstSeen = old?.firstSeen || (prevList ? nowIso : it.fresh ? nowIso : baseline);
    out.push({ ...slim(it), firstSeen });
  }
  const cutoff = now - keepMs;
  for (const old of prevList || []) {
    if (!old.url || urls.has(old.url)) continue;
    if (Date.parse(old.firstSeen) >= cutoff) out.push(old);
  }
  return out;
}

export function applySeen(items, seen, nowIso, freshMs = FRESH_MS) {
  const map = new Map(seen.map((x) => [x.url, x.firstSeen]));
  const now = Date.parse(nowIso);
  return items.map((it) => {
    const { fresh, firstSeen, ...rest } = it;
    const seenAt = map.get(it.url);
    if (!seenAt) return rest;
    const isFresh = now - Date.parse(seenAt) <= freshMs;
    return isFresh ? { ...rest, firstSeen: seenAt, fresh: true } : { ...rest, firstSeen: seenAt };
  });
}
