// 从各家热榜里挑国内外大事。只看标题，不进 AI 热榜。

const MAJOR = /被查|审查调查|违纪|落马|双开|开除党籍|留置|中共中央|政治局|国务院|全国人大|全国政协|省委书记|市委书记|总书记|国家主席|国务院总理|地震|遇难|失联|重大事故|山火|决堤|台风|外交部|国防部|央行|降准|降息|竞选|大选|选举|投票|候选人|总统选举|中期选举|州长|社会福利|国家福利|州福利|民生福利|福利政策|社保|社会保障|医保|养老金|养老保险|退休金|失业保险|工伤保险|生育保险|住房公积金|低保|出入境|口岸|签证|免签|护照|边检|海关|移民|关于印发|红头文件|(?:国务院|省政府|市政府|部|委|厅|局).{0,16}(?:通知|意见|办法|条例|规定|决定|公告)|election|ballot|presidential|social security|medicare|medicaid|immigration/i;
const NOISE = /综艺|演唱会|离婚|恋情|明星|剧透|票房|选秀|偶像|婚纱|塌房|员工福利|公司福利|游戏福利/;
const STOP = ["被查", "审查调查", "违纪违法", "违纪", "落马", "双开", "开除党籍", "留置", "中共中央", "政治局", "国务院总理", "国务院", "全国人大", "全国政协", "省委书记", "市委书记", "总书记", "国家主席", "地震", "遇难", "失联", "重大事故", "山火", "决堤", "台风", "外交部", "国防部", "央行", "降准", "降息", "中央纪委", "国家监委", "涉嫌", "严重", "目前", "正接受", "接受", "竞选", "大选", "选举", "投票", "候选人", "社会福利", "国家福利", "州福利", "社保", "社会保障", "医保", "养老金", "养老保险", "退休金", "失业保险", "出入境", "签证", "免签", "关于印发", "通知", "意见", "办法", "条例", "规定"];

function norm(title) {
  return String(title || "").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, "");
}

function residual(title) {
  let s = norm(title);
  for (const word of STOP) s = s.split(norm(word)).join("");
  return s.replace(/发布|出台|宣布/g, "").replace(/住房(?=公积金)/g, "");
}

function sameStory(a, b) {
  if (norm(a) === norm(b)) return true;
  // 数值变化可能代表另一场灾害或另一项政策，不能因措辞接近而合并。
  const numbers = (s) => [...new Set(String(s).match(/\d+(?:\.\d+)?/g) || [])].sort().join(",");
  const an = numbers(a), bn = numbers(b);
  if (an && bn && an !== bn) return false;
  const left = residual(a);
  const right = residual(b);
  // 去掉通用表述后，主体必须完整相同或完整包含；局部三字重叠不足以认定同一事件。
  const shorter = left.length <= right.length ? left : right;
  const longer = left.length <= right.length ? right : left;
  return shorter.length >= 3 && longer.includes(shorter) && shorter.length / longer.length >= 0.6;
}

const PLACE = /上海|浦东|无锡|梁溪|滨湖|惠山|新吴|锡山|宜兴|江阴/;
const LOCAL_POLICY = /政策|新政|通知|办法|条例|规定|意见|公告|通告|公积金|社保|医保|落户|限购|入学|补贴|印发|征求意见|住房|人才|积分|车牌|拍牌|保障房|养老|救助|规划/;

function clusterTitles(items, limit) {
  const clusters = [];
  for (const it of items) {
    const title = String(it.title || "").trim();
    if (!title || !it.url) continue;
    const found = clusters.find((c) => c.members.some((m) => m.url === it.url) || c.members.every((m) => sameStory(m.title, title)));
    if (found) found.members.push(it);
    else clusters.push({ title, members: [it] });
  }
  return clusters.map((c) => {
    const rep = c.members.slice().sort((a, b) => (a.rank || 99) - (b.rank || 99))[0];
    const sources = [...new Set(c.members.map((m) => m.source).filter(Boolean))];
    return {
      title: rep.title,
      url: rep.url,
      source: rep.source,
      rank: rep.rank,
      sources,
      score: sources.length * 20 + Math.max(0, 40 - (rep.rank || 40))
    };
  }).sort((a, b) => b.score - a.score).slice(0, limit);
}

export const MONTH_MS = 30 * 24 * 3600e3;
export const YEAR_MS = 365 * 24 * 3600e3;

// 把这次挑到的和以前留下的并在一起。同一件事沿用最早出现的时间，超过窗口的丢掉。
export function mergeKept(previous, incoming, opts = {}) {
  const now = opts.now ?? Date.now();
  const keepMs = opts.keepMs ?? MONTH_MS;
  const limit = opts.limit ?? 80;
  const pool = [];
  for (const it of [...(incoming || []), ...(previous || [])]) {
    if (!it || !it.url || !it.title) continue;
    const seen = Date.parse(it.firstSeen || "");
    const firstSeen = Number.isFinite(seen) ? seen : now;
    if (now - firstSeen > keepMs || now - firstSeen < -3600e3) continue;
    pool.push({ ...it, firstSeenMs: firstSeen });
  }
  const clusters = [];
  for (const it of pool) {
    const found = clusters.find((c) => c.members.some((m) => m.url === it.url) || c.members.every((m) => sameStory(m.title, it.title)));
    if (found) {
      found.members.push(it);
      if (it.firstSeenMs < found.firstSeenMs) found.firstSeenMs = it.firstSeenMs;
    } else clusters.push({ firstSeenMs: it.firstSeenMs, members: [it] });
  }
  return clusters.map((c) => {
    const fresh = c.members.filter((m) => now - m.firstSeenMs <= 6 * 3600e3);
    const pool = fresh.length ? fresh : c.members;
    const rep = pool.slice().sort((a, b) => (a.rank || 99) - (b.rank || 99))[0];
    const names = [];
    for (const m of c.members) {
      if (m.source && !names.includes(m.source)) names.push(m.source);
      for (const extra of m.also || []) if (extra && !names.includes(extra)) names.push(extra);
    }
    const source = rep.source || names[0] || "";
    return {
      title: rep.title,
      url: rep.url,
      source,
      rank: fresh.length ? (rep.rank || 0) : 0,
      also: names.filter((name) => name !== source),
      firstSeen: new Date(c.firstSeenMs).toISOString()
    };
  }).sort((a, b) => Date.parse(b.firstSeen) - Date.parse(a.firstSeen)).slice(0, limit);
}

export function selectNation(items, opts = {}) {
  const ready = (items || []).filter((it) => {
    const title = String(it.title || "");
    return it.url && !NOISE.test(title) && MAJOR.test(title);
  });
  return clusterTitles(ready, opts.limit ?? 16);
}

export function selectLocal(items, opts = {}) {
  const ready = (items || []).filter((it) => {
    const title = String(it.title || "");
    return it.url && !NOISE.test(title) && PLACE.test(title) && LOCAL_POLICY.test(title);
  });
  return clusterTitles(ready, opts.limit ?? 16);
}
