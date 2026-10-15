---
name: ai日报
description: 生成当天的“AI 新鲜事”中文日报，写入本项目的 data/ 目录。用户输入 /ai日报，或说“更新今天的 AI 新鲜事”“出今天的日报”时使用。
---

# 生成 AI 新鲜事日报

在本项目根目录工作。数据格式和规则以 `docs/superpowers/specs/2026-10-14-ai-daily-design.md` 为准。

## 步骤

1. **确定日期并同步**：运行 `TZ=Asia/Shanghai date +%F` 取北京时间的日期（云端是 UTC 时区，不能直接用 `date +%F`），记为 `D`。如果项目是 git 仓库且配置了远程，先运行 `git pull --rebase`，拿到 GitHub Actions 最新抓取的 `data/hot.js`。

2. **读往期去重**：读取 `data/manifest.js`，再读最近 3 期的数据文件（不含 `D`），列出已经报道过的事件。同一事件只有出现重大新进展时才再次收录，而且要在标题里写明新进展。

3. **先看候选池**：读取 `data/hot.js`（`window.AI_HOT`，由 `scripts/crawl.mjs` 定时生成）。如果 `generatedAt` 在 12 小时以内，就把里面的条目当作线索：`kind: "hot"` 是国内热榜（适合找企业动态），`news` 是 AI 资讯，`repo` 是 GitHub 新项目（适合找工具）。如果数据超过 12 小时或文件不存在，先运行 `node scripts/crawl.mjs` 刷新一次，失败也不要紧，继续下一步。**候选池只是线索**：热榜标题常常不准确，收录前必须打开原文或找到可靠报道核实，链接也要换成具体的原文，不要用热榜的搜索页链接。

   然后**搜索**（使用 WebSearch，同一轮里并行发出），补上候选池里没有的内容。目标是过去 24–48 小时的新闻：
   - 国外：`AI news today`、`new AI model release`、`AI startup funding`、`AI research paper breakthrough`、`new open source AI tool`
   - 国内：`AI 大模型 发布 今天`、`人工智能 融资 最新`、`AI 新工具 开源`、`国内 大模型 动态`
   - **必须按厂商逐个补搜**，不能只靠综合搜索的结果。综合搜索和资讯聚合站的结果会偏向某几家公司，你自己也可能偏向 Anthropic，所以要主动去找各家的动态：
     - 国外：OpenAI、Google/DeepMind、Meta、Microsoft、xAI、Apple、Amazon、Nvidia、Mistral，以及 Anthropic
     - 国内：DeepSeek、阿里/通义千问、字节/豆包、腾讯/混元、百度/文心、月之暗面/Kimi、智谱、MiniMax、阶跃星辰、华为
     - 示例查询：`OpenAI news <日期>`、`Google Gemini announcement <日期>`、`<厂商> 发布 <日期>`。
   - 优先看一手来源（官方博客、公告、论文页）和可靠媒体（The Verge、TechCrunch、Reuters、机器之心、量子位、36氪等）。发布时间无法确认的消息不收录。

4. **筛选**：挑出 12–16 条，满足：
   - 四个分类（`model` / `industry` / `research` / `tools`）都有；
   - 国内（`cn`）、国外（`intl`）条数相差不超过 2；
   - 每条都有可以访问的原文链接；`url` 填最具体的那篇文章，不要填网站首页。
   - **厂商要分散**：同一家公司作为主角的条目最多 2 条（Anthropic 和 Claude 相关的内容同样受这个限制，不能因为你是 Claude 就多收）。国外头部厂商（OpenAI、Google、Meta、Microsoft、xAI）里，当天有可靠新闻的都至少收 1 条。确实没有新闻的，在汇报时说明“某某当天无重要动态”。
   - 如果可靠新闻不到 8 条（比如联网失败），**到此为止，不写任何文件**，告诉用户原因。

4b. **国内企业动态**（`corp`，5–8 条）：国内大企业过去 48 小时发生的事，**不限于 AI**。
   - 搜索：`<日期> 裁员`、`召回 <日期>`、`<日期> 罚款 OR 处罚 公司`、`<日期> 致歉 回应`、`新浪汽车热点小时报 <日期>`、`新浪科技热点小时报 <日期>`、`投资界24h <日期>`，以及点名搜大厂（华为、阿里、腾讯、字节、百度、美团、京东、拼多多、小米、比亚迪、蔚小理、宁德时代等）。
   - `kind`：`layoff` 裁员、`quality` 质量召回、`penalty` 监管处罚、`org` 组织人事、`business` 经营（财报、融资、销量）、`dispute` 争议（营销翻车、消费纠纷）。尽量多收前四类，经营类不超过 2 条。
   - 涉及事故、纠纷、指控的：**必须写企业或官方的回应**；说法有分歧的要把双方都写上，不下结论；只有网传、没有可靠出处的不收。
   - 可以和 AI 新闻部分重复的事件（比如大厂的 AI 投入），放在其中一边就行，不要两边都写。

4c. **工具推荐**（`apps`，8–12 个）：好用、免费（或有免费版）的 **Windows 软件**，不要求是新出的。
   - 来源：优先 GitHub 上活跃的开源项目（最近半年有提交），也可以是口碑好的免费闭源软件。可以搜 `awesome windows`、`best free windows apps <年份> github`、`GitHub trending`，以及 `<用途> 开源 windows`（数据库客户端、截图、PDF、组网、剪贴板、启动器、播放器等）。
   - 分类 `category`：`office` 办公、`coding` 编程、`system` 系统、`fun` 娱乐，每期至少覆盖 3 类，**每类都尽量有**。
   - **不能和往期重复**：先列出所有往期的 `apps[].name`，已推荐过的不再收（校验脚本也会检查）。
   - Star 数和安装包大小必须查实：用 `curl -s https://api.github.com/repos/<owner>/<repo>` 取 `stargazers_count`、`license.spdx_id`；用 `.../releases/latest` 取 Windows 安装包的 `size`。查不到大小就不写 `size`，不要估。
   - `url` 填 GitHub 仓库或官方下载页。`desc` 1–2 句，写清楚它解决什么问题、比同类好在哪。
   - 组网和远程访问只推荐正规工具（Tailscale、ZeroTier、WireGuard 这类），**不推荐翻墙工具**。

4d. **AI 落地观察**（`insights`，2–3 条）：哪些行业在用 AI、拿 AI 做什么、出现了哪些新职业或岗位变化。
   - `kind`：`industry` 行业应用、`usage` 怎么用 AI、`jobs` 职业变化。
   - 不要求是 48 小时内的消息，但要有数据或可靠出处（麦肯锡、斯坦福 AI Index、微软 Work Trend Index、人社部、招聘平台报告、媒体对具体公司的报道等）。`asOf` 填数据本身的时间（YYYY-MM），不是搜索的时间。
   - 和往期不要重复同一个话题；二手汇总要在 `source` 里注明原始数据来自哪里。

5. **写数据文件** `data/D.js`（同一天再次运行时直接覆盖）：

   ```js
   window.AI_DAILY = window.AI_DAILY || {};
   window.AI_DAILY["D"] = {
     date: "D",
     highlights: ["...", "...", "..."],   // 正好 3 条，每条一句话
     items: [
       { title: "...", summary: "...", category: "model", region: "intl", source: "...", url: "https://..." }
     ],
     corp: [
       { title: "...", summary: "...", kind: "quality", company: "...", source: "...", url: "https://..." }
     ],
     apps: [
       { name: "...", category: "system", desc: "...", license: "MIT", stars: 12345, size: "10 MB", url: "https://..." }
     ],
     insights: [
       { title: "...", summary: "...", kind: "jobs", source: "...", asOf: "2026-09", url: "https://..." }
     ]
   };
   ```

   - 标题不超过 30 字；新闻和企业动态的摘要 2–3 句，落地观察 2–4 句，工具说明 1–2 句，每句以“。”结尾。说清楚发生了什么、为什么值得关注，不写空话和营销腔。
   - 全部用简体中文；产品名、公司名保留原文。
   - 条目顺序：按重要性从高到低。

6. **更新 manifest** `data/manifest.js`：把 `D` 加到最前面，已有的就不再加，保持从新到旧排序：

   ```js
   window.AI_DAILY_MANIFEST = ["D", "..."];
   ```

7. **校验**：运行 `node scripts/validate.mjs data/D.js`。有报错就修改后重跑，直到通过为止。

7b. **翻译 AI 资讯标题**：把 `data/hot.js` 里 `kind: "news"` 且标题不含中文的条目翻译成中文，写入 `data/title-zh.js`（整个文件覆盖）：

   ```js
   // 由 /ai日报 生成：实时热点里 AI 资讯英文标题的中文翻译，键是原文链接
   window.AI_TITLE_ZH = {
     "https://原文链接": "中文标题"
   };
   ```

   - 键必须和 `hot.js` 里的 `url` 完全一致；只保留当前 `hot.js` 里还有的条目，不留旧的。
   - 意译成通顺的中文标题，产品名、公司名、人名保留原文；HTML 实体（如 `&#8217;`）按原意处理。去掉 Google News 标题末尾的“ - Anthropic”这类来源后缀。
   - 写完运行 `node -e "global.window={};require('./data/title-zh.js');console.log(Object.keys(window.AI_TITLE_ZH).length)"` 确认文件能正常加载。
   - 网页显示时有中文标题就用中文，英文原文以小字附在下方；没有翻译的条目照常显示英文。

8. **发布**：如果项目是 git 仓库且配置了远程：`git add data/` → `git commit -m "日报：D"` → `git pull --rebase` → `git push`。推送后 GitHub Actions 会自动更新网站。推送失败（比如网络问题）时告诉用户，文件已经保存在本地，之后再推送即可。

9. **汇报**：告诉用户：
   - 新闻共几条、国内外各几条，三条“今日看点”，各厂商分别收了几条（以及哪些头部厂商当天没有动态）；
   - 企业动态几条、各是哪几家；推荐了哪些工具；落地观察的标题；
   - 哪些内容只有单一来源或未经官方确认；
   - 是否已推送到 GitHub；提示可以打开网站，或双击本地 `index.html` 查看，往期工具在“工具库”里。
