// 从各家热榜里挑国内大事。只看标题，不进 AI 热榜。

const MAJOR = /被查|审查调查|违纪|落马|双开|开除党籍|留置|中共中央|政治局|国务院|全国人大|全国政协|省委书记|市委书记|总书记|国家主席|国务院总理|地震|遇难|失联|重大事故|山火|决堤|台风|外交部|国防部|央行|降准|降息/;
const NOISE = /综艺|演唱会|离婚|恋情|明星|剧透|票房|选秀|偶像|婚纱|塌房/;
const STOP = ["被查", "审查调查", "违纪违法", "违纪", "落马", "双开", "开除党籍", "留置", "中共中央", "政治局", "国务院总理", "国务院", "全国人大", "全国政协", "省委书记", "市委书记", "总书记", "国家主席", "地震", "遇难", "失联", "重大事故", "山火", "决堤", "台风", "外交部", "国防部", "央行", "降准", "降息", "中央纪委", "国家监委", "涉嫌", "严重", "目前", "正接受", "接受"];

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

function residual(title) {
  let s = norm(title);
  for (const word of STOP) s = s.split(norm(word)).join("");
  return s;
}

function sameStory(a, b) {
  if (jaccard(bigrams(a), bigrams(b)) >= 0.45) return true;
  const left = residual(a);
  const right = residual(b);
  for (let i = 0; i < left.length - 2; i++) {
    if (right.includes(left.slice(i, i + 3))) return true;
  }
  return false;
}

export function selectNation(items, opts = {}) {
  const limit = opts.limit ?? 12;
  const clusters = [];
  for (const it of items) {
    const title = String(it.title || "").trim();
    if (!title || !it.url || NOISE.test(title) || !MAJOR.test(title)) continue;
    const found = clusters.find((c) => sameStory(c.title, title));
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
