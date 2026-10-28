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

4b. **大厂动态**（`corp`，国内 5–8 条 + 国外 0–3 条）：大企业过去 48 小时发生的事，**不限于 AI**。国外条目加 `region: "intl"`（苹果、Google、Meta、微软、亚马逊、英伟达、特斯拉、OpenAI 等的裁员、人事、财报、处罚），国内的 `region` 可省略。
   - 搜索：`<日期> 裁员`、`召回 <日期>`、`<日期> 罚款 OR 处罚 公司`、`<日期> 致歉 回应`、`新浪汽车热点小时报 <日期>`、`新浪科技热点小时报 <日期>`、`投资界24h <日期>`，以及点名搜大厂（华为、阿里、腾讯、字节、百度、美团、京东、拼多多、小米、比亚迪、蔚小理、宁德时代等）。
   - `kind`：`layoff` 裁员、`quality` 质量召回、`penalty` 监管处罚、`org` 组织人事、`business` 经营（财报、融资、销量）、`dispute` 争议（营销翻车、消费纠纷）。尽量多收前四类，经营类不超过 2 条。
   - 涉及事故、纠纷、指控的：**必须写企业或官方的回应**；说法有分歧的要把双方都写上，不下结论；只有网传、没有可靠出处的不收。
   - 可以和 AI 新闻部分重复的事件（比如大厂的 AI 投入），放在其中一边就行，不要两边都写。
   - 国外大厂搜：`<公司> layoffs <日期>`、`<公司> executive departs`、`<公司> fined OR lawsuit <日期>`。

4c. **工具推荐**（`apps`，12–16 个）：好用、免费（或有免费版）的 **Windows 软件**，不要求是新出的。
   - 来源：优先 GitHub 上活跃的开源项目（最近半年有提交），也可以是口碑好的免费闭源软件。可以搜 `awesome windows`、`best free windows apps <年份> github`、`GitHub trending`，以及 `<用途> 开源 windows`（数据库客户端、截图、PDF、组网、剪贴板、启动器、播放器等）。
   - 分类 `category`：`office` 办公、`coding` 编程、`system` 系统、`fun` 娱乐，**四类每期都要有**（校验脚本会检查）。
   - **不能和往期重复**：先列出所有往期的 `apps[].name`，已推荐过的不再收（校验脚本也会检查）。
   - Star 数和安装包大小必须查实：用 `curl -s https://api.github.com/repos/<owner>/<repo>` 取 `stargazers_count`、`license.spdx_id`；用 `.../releases/latest` 取 Windows 安装包的 `size`。查不到大小就不写 `size`，不要估。
   - `url` 填 GitHub 仓库或官方下载页。`desc` 1–2 句，写清楚它解决什么问题、比同类好在哪。
   - 组网和远程访问只推荐正规工具（Tailscale、ZeroTier、WireGuard 这类），**不推荐翻墙工具**。

4d. **AI 落地观察**（`insights`，2–3 条）：哪些行业在用 AI、拿 AI 做什么、出现了哪些新职业或岗位变化。
   - `kind`：`industry` 行业应用、`usage` 怎么用 AI、`jobs` 职业变化。
   - 不要求是 48 小时内的消息，但要有数据或可靠出处（麦肯锡、斯坦福 AI Index、微软 Work Trend Index、人社部、招聘平台报告、媒体对具体公司的报道等）。`asOf` 填数据本身的时间（YYYY-MM），不是搜索的时间。
   - 和往期不要重复同一个话题；二手汇总要在 `source` 里注明原始数据来自哪里。

4e. **大佬观点**（`voices`，8–12 条，尽量写满 10 条以上）：AI 领域人物最近 7 天公开说的新观点、新判断。`region` 填 `cn` 或 `intl`，**国内至少 3 条**（校验脚本允许 4–12 条、至少 1 条国内；凑不够 8 条或国内不够 3 条时，在汇报里说明搜过哪些人）。页面按 `said` 从新到旧分组显示，顺序不用自己排。
   - 重点人物：黄仁勋、Sam Altman、Dario Amodei、Demis Hassabis、Satya Nadella、Sundar Pichai、扎克伯格、马斯克、李飞飞、Yann LeCun、Hinton，以及梁文锋、杨植麟、王小川、李彦宏、马化腾、雷军等国内人物。不限于名单，有分量的研究者、投资人也可以。
   - 搜索：`<人名> interview <日期>`、`<人名> says <月份 年份>`、`<人名> 专访 OR 演讲 <日期>`，也看播客、发布会、财报电话会、X 上的长帖。
   - 国内人物要单独搜，不能只靠综合搜索：周鸿祎、李彦宏、马化腾、雷军、杨植麟、王小川、李开复、张亚勤、王坚、何小鹏、梁文锋、吴泳铭等，以及当周国内 AI 大会（WAIC、世界互联网大会、各地人工智能产业大会、钛媒体/极客公园/量子位的活动和播客）上的具名发言。
   - **必须有原始出处**：采访、演讲、本人帖子，或可靠媒体对原话的报道；只有二手转述、找不到原始场合的不收。写清楚在什么场合说的，关键句尽量引原话；`said` 填说话的日期，不是报道日期。
   - 只写他说了什么，不替他引申；同一个人的同一观点往期写过就不再收。

4f. **AI 价格动态**（`pricing`，0–8 条，尽量 4 条以上）：订阅价、API 价、免费额度、附送额度、套餐档位、购买方式的变化。
   - 必查的热门产品：国外 ChatGPT、Claude、Gemini、Grok、Microsoft Copilot、GitHub Copilot、Cursor、Perplexity；国内 DeepSeek、Kimi、智谱、MiniMax、豆包 / 火山方舟、通义 / 阿里云百炼、腾讯混元、文心。国内国外都要搜。
   - 收录：最近 14 天公布的变化，或 14 天内即将生效、之前没报道过的变化。往期已经报道过的同一变化不再收。**没有可靠来源就少收，不要硬凑**；一条都没有时写空数组 `[]`，网页会自动隐藏这一栏。
   - `change`：`up` 涨价、`down` 降价、`new` 新套餐、`free` 免费开放、`limit` 额度或权限调整。`product` 填产品名（如 `ChatGPT`、`Claude`）。
   - 价格数字以官方定价页、官方博客或帮助中心为准；第三方价格汇总站只当线索，不能当来源。写清楚生效日期和是否影响老用户。

4g. **设计专栏**（`design`，8–12 条，其中 `tool` 至少 3 条）：给 UI / 设计同学看。
   - `kind`：`tool` 设计工具（AI 设计、原型、图标、配色、字体等，可以是口碑好的老工具）、`plugin` 插件（Figma 插件、VS Code 里和前端还原相关的插件）、`deal` 优惠（Figma、Adobe、Canva 等的官方优惠、教育版、限时折扣）、`trend` 设计动态（Figma、Adobe、Google、Apple 等的设计产品发布、设计规范更新）。每期 `trend` 至少 1 条，四类尽量都有。
   - `trend` 和 `deal` 要求是近期的（`deal` 必须当前仍有效，只认官方页面，不收优惠码聚合站）；`tool` 和 `plugin` 不要求是新的，但不能和往期 `design` 重复。
   - 可选字段 `price`：价格或优惠信息的简短文字，如 `"免费"`、`"学生、教师免费"`、`"首年 5 折"`。
   - **`tool` 和 `plugin` 推荐前先评估，确实好用才收**：
     - 开源项目用 `curl -s https://api.github.com/repos/<owner>/<repo>` 查 `stargazers_count`、`pushed_at`、`open_issues_count`，把 Star 数填进可选字段 `stars`（整数）。门槛：Star ≥ 1000、最近 3 个月内有提交、有 Windows 安装包或网页版可以直接用。达不到的不收。
     - 闭源工具要有口碑依据：Product Hunt 当日或当周前列、知名设计媒体或设计师的正面评测、官方有免费版或试用，不收只有营销稿的新产品。
     - 摘要里如实写清楚成熟度和限制：早期版本（alpha、beta、0.x）写明"还在早期，适合尝鲜，别直接用在正式项目"；核心功能免费但 AI 功能收费的也要写出来。
     - 热门的"替代 Photoshop / Figma / Illustrator"一类开源项目优先评估，例如 PhotoCraft、Penpot、Krita、Graphite。
   - 搜索：`Figma new features <日期>`、`Adobe Firefly OR Photoshop update <日期>`、`AI design tool launch <月份 年份>`、`Product Hunt design tools`、`Figma plugin trending`、`VS Code extension frontend`、`Figma OR Adobe OR Canva discount official`。

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
       { title: "...", summary: "...", kind: "quality", company: "...", source: "...", url: "https://..." },
       { title: "...", summary: "...", kind: "layoff", region: "intl", company: "...", source: "...", url: "https://..." }
     ],
     voices: [
       { title: "...", summary: "...", person: "黄仁勋", role: "英伟达 CEO", said: "2026-10-14", source: "...", url: "https://..." }
     ],
     pricing: [   // 当天没有变化就写 []
       { title: "...", summary: "...", product: "ChatGPT", change: "limit", source: "...", url: "https://..." }
     ],
     design: [
       { title: "...", summary: "...", kind: "tool", price: "免费", source: "...", url: "https://..." }
     ],
     apps: [
       { name: "...", category: "system", desc: "...", license: "MIT", stars: 12345, size: "10 MB", url: "https://..." }
     ],
     insights: [
       { title: "...", summary: "...", kind: "jobs", source: "...", asOf: "2026-09", url: "https://..." }
     ]
   };
   ```

   - 标题不超过 30 字（空格也算字）；新闻、企业动态、价格动态、设计专栏的摘要 2–3 句，落地观察和大佬观点 2–4 句，工具说明 1–2 句，每句以“。”结尾。说清楚发生了什么、为什么值得关注，不写空话和营销腔。
   - 全部用简体中文；产品名、公司名保留原文。
   - 条目顺序：按重要性从高到低。

6. **更新 manifest** `data/manifest.js`：把 `D` 加到最前面，已有的就不再加，保持从新到旧排序：

   ```js
   window.AI_DAILY_MANIFEST = ["D", "..."];
   ```

7. **校验**：运行 `node scripts/validate.mjs data/D.js`。有报错就修改后重跑，直到通过为止。

7b. **翻译实时热点里的英文**：实时热点页的卡片要全部显示中文，大家主要看卡片。把 `data/hot.js` 里的英文翻译好，写入 `data/title-zh.js`（整个文件覆盖）：
   - `kind: "news"` 且标题不含中文的条目：翻译 `title`，写进 `AI_TITLE_ZH`；
   - `kind: "repo"` 且 `desc` 不含中文的条目：翻译 `desc`，写进 `AI_DESC_ZH`（仓库名 `title` 不翻）。

   ```js
   // 由 /ai日报 生成：实时热点里英文内容的中文翻译，键是原文链接
   // AI_TITLE_ZH：AI 资讯的标题；AI_DESC_ZH：GitHub 新项目的简介
   window.AI_TITLE_ZH = { "https://原文链接": "中文标题" };
   window.AI_DESC_ZH = { "https://github.com/owner/repo": "中文简介" };
   ```

   - 键必须和 `hot.js` 里的 `url` 完全一致；只保留当前 `hot.js` 里还有的条目，不留旧的。
   - 意译成通顺的中文，产品名、公司名、人名、命令保留原文；HTML 实体（如 `&#8217;`）按原意处理；去掉 Google News 标题末尾“ - Anthropic”这类来源后缀；简介被截断的按已有内容翻译，不要补编。
   - 写完运行 `node -e "global.window={};require('./data/title-zh.js');console.log(Object.keys(window.AI_TITLE_ZH).length, Object.keys(window.AI_DESC_ZH).length)"` 确认能正常加载。
   - 网页有翻译就只显示中文，英文原标题放在鼠标悬停提示里；没有翻译的照常显示英文。
   - GitHub Actions 每次抓取热点后，会用 `scripts/translate.mjs`（Cloudflare Workers AI）补翻新出现的英文，已有的翻译不动。这里人工翻的质量更好，照常整个覆盖即可。

8. **发布**：如果项目是 git 仓库且配置了远程：`git add data/` → `git commit -m "日报：D"` → `git pull --rebase` → `git push`。推送后 GitHub Actions 会自动更新网站。推送失败（比如网络问题）时告诉用户，文件已经保存在本地，之后再推送即可。

9. **汇报**：告诉用户：
   - 新闻共几条、国内外各几条，三条“今日看点”，各厂商分别收了几条（以及哪些头部厂商当天没有动态）；
   - 大厂动态几条（国内、国外各几条）、各是哪几家；推荐了哪些工具；落地观察的标题；
   - 大佬观点收了谁；价格动态有哪些（没有就说“当天无价格变化”）；设计专栏各条标题；
   - 哪些内容只有单一来源或未经官方确认；
   - 是否已推送到 GitHub；提示可以打开网站，或双击本地 `index.html` 查看，往期工具在“工具库”里。
