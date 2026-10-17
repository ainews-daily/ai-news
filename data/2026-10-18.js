window.AI_DAILY = window.AI_DAILY || {};
window.AI_DAILY["2026-10-18"] = {
  date: "2026-10-18",
  highlights: [
    "DeepSeek 把 V4.1 Flash 升级到 1017 版，价格不变、Agent 能力更强，同时开放自研搜索 API。",
    "Replit 把默认模型从 Claude 换成 OpenAI，Anthropic 同时被曝私下向国会推销一份前沿 AI 安全法案草案。",
    "国家气象中心的 AI 集合预报系统“风清”投入业务运行，AI 气象从研究走进国家级预报。"
  ],
  items: [
    {
      title: "DeepSeek 升级 V4.1 Flash，价格不变",
      summary: "DeepSeek 于 10 月 17 日把 V4.1 Flash 升级为 V4.1-Flash-1017，网页端、App 和 API 同步切换，API 沿用 deepseek-flash 名称，价格不变。官方称新版代码和 Agent 任务能力提升，任务运行时间和输出长度同时下降，权重已上架 Hugging Face 和 ModelScope。不涨价就提升性能并减少 token 消耗，会继续压低同档模型的价格预期。",
      category: "model",
      region: "cn",
      source: "量子位",
      url: "https://www.qbitai.com/2026/10/504067.html"
    },
    {
      title: "Replit 默认模型由 Claude 换成 OpenAI",
      summary: "Replit CEO Amjad Masad 在 TechCrunch Disrupt 上表示，Replit Agent 的默认模型已从 Anthropic 的 Claude 改为 OpenAI，理由是成本、合作关系和内部基准表现，Claude 仍可手动选用。Anthropic 此前是 Replit 前五大供应商之一，而大多数用户不会改默认设置，这次调整可能明显减少 Anthropic 在 Replit 的收入。另有知情人士对 TechCrunch 称双方合作仍在，说法存在出入。",
      category: "industry",
      region: "intl",
      source: "TechCrunch",
      url: "https://techcrunch.com/2026/10/17/replit-is-no-longer-working-with-anthropic-ceo-says/"
    },
    {
      title: "Anthropic 被曝私下推销前沿 AI 安全法案",
      summary: "据 Politico 取得的草案，Anthropic 正私下向国会议员推销一份联邦前沿 AI 安全法案，只有在存在超过 10 亿美元损失或 50 人以上伤亡的迫近风险时，政府才能叫停模型。叫停须由商务部向华盛顿特区联邦法院申请，草案还会优先于部分州的 AI 安全法律。Anthropic 发言人只表示法案反映了公司的框架，外界关注它是否在为头部实验室设定较宽松的监管门槛。",
      category: "industry",
      region: "intl",
      source: "Politico（Yahoo News 转载）",
      url: "https://www.yahoo.com/news/politics/articles/anthropic-quietly-pitches-own-ai-214514987.html"
    },
    {
      title: "AI 集合预报系统“风清”投入业务运行",
      summary: "国家气象中心牵头研制的“风清”AI 全球短中期集合预报系统通过业务化评审，已投入全国气象业务运行，数据、模型和算力均为国产。系统把视觉 Transformer 与气象物理约束结合，全球有效预报时效约 11 天，报道称多项指标优于 ECMWF 最新的 AI 集合预报系统。这是 AI 气象模型从研究走进国家级业务预报的一个实例。",
      category: "research",
      region: "cn",
      source: "IT之家",
      url: "https://www.ithome.com/1/014/289.htm"
    },
    {
      title: "Claude 半小时查清 NSA 椭圆曲线种子来源",
      summary: "Anthropic Frontier Red Team 发文称，其内部模型用不到 30 分钟查明了 NIST P-256 等 ECDSA 曲线种子的生成方式：它们来自以 1997 至 1998 年间 Unix 时间戳初始化的 lrand48 随机数生成器，而不是此前猜测的哈希输出。这个问题困扰密码学界约 25 年，结论降低了“NSA 植入后门”说法的可信度。相关的 3.6864 万美元悬赏金将捐给 ISRG。",
      category: "research",
      region: "intl",
      source: "Anthropic",
      url: "https://www.anthropic.com/research/ecdsa-curve-origins"
    },
    {
      title: "智谱发布法律模型 GLM-Legal",
      summary: "智谱于 10 月 17 日发布法律专用模型 GLM-Legal，以 GLM-5.3-Flash 为底座，先做法律语料中期训练，再在数万个法律任务环境中做强化学习。在 Vals AI 评测中，它的 Harvey LAB 全通过率为 19.2%，LegalBench 准确率为 86.23%，两项都排开放权重模型第一。目前处于 Beta 邀测阶段，19.2% 的通过率也说明它离独立完成法律工作还有距离。",
      category: "model",
      region: "cn",
      source: "量子位",
      url: "https://www.qbitai.com/2026/10/503965.html"
    },
    {
      title: "新进展：Meta 删除可抓取新闻站的条款",
      summary: "Meta 已从商业服务条款中删除一项允许其使用企业账户关联网站内容训练 AI 的条款，法律专家此前警告这可能让 Meta 免费抓取新闻出版商的网站。Meta 称这次更新从未改变其爬虫行为，相关条款只适用于广告和商业产品。出版商的集体施压在这件事上起了作用。",
      category: "industry",
      region: "intl",
      source: "TechCrunch",
      url: "https://techcrunch.com/2026/10/17/meta-removes-language-that-raised-scraping-and-ai-training-concerns/"
    },
    {
      title: "腾讯混元开源 Hy Memory 2.0 记忆框架",
      summary: "腾讯混元于 10 月 16 日开源智能体记忆方案 Hy Memory 2.0，分专用模型、记忆框架和本地应用 MemHub 三层，覆盖聊天、工作和代码三类记忆。其中 Hy-Memory-30B-A3B 约激活 3B 参数，腾讯自报综合得分 55.49%，略高于 Claude Opus 5 的 54.62%。长期记忆是 Agent 落地的常见短板，这套方案提供 SDK 可直接接入，但成绩尚未经第三方复现。",
      category: "tools",
      region: "cn",
      source: "IT之家",
      url: "https://www.ithome.com/1/014/108.htm"
    },
    {
      title: "学界质疑 OpenAI 的 Navier-Stokes 证明",
      summary: "据《科学美国人》报道，多组数学家认为 OpenAI 9 月公布的 166 页 Lean 形式化 Navier-Stokes 证明，与它自称沿用的 Córdoba 团队思路只有表面相似。NYU 数学家 Buckmaster 还指 OpenAI 借用了他与 Anthropic 研究员的成果，OpenAI 予以否认。OpenAI 研究员 Noam Brown 也承认说不清智能体集群到底贡献了什么，AI 数学成果的归属和可解释性再次受到关注。",
      category: "research",
      region: "intl",
      source: "The Decoder（转述《科学美国人》）",
      url: "https://the-decoder.com/mathematicians-say-openai-doesnt-understand-its-own-navier-stokes-proof/"
    },
    {
      title: "微软 Copilot Studio 智能体获独立账号",
      summary: "微软通过 Frontier 早期计划为 Copilot Studio 推出智能体账号、业务流程记忆和触发器，智能体可以拥有自己的 Microsoft 365 身份，在 Teams、Outlook 和 Office 批注里被直接调用，也能由邮件或定时任务自动启动。企业智能体由此从个人助手变成组织所有的常驻角色。预览版中共享记忆无法关闭，跨用户的隐私边界值得留意。",
      category: "tools",
      region: "intl",
      source: "Microsoft Copilot Blog",
      url: "https://www.microsoft.com/en-us/copilot/blog/copilot-studio/delegate-shared-business-processes-to-agents-that-are-more-persistent-and-proactive-with-microsoft-copilot-studio/"
    },
    {
      title: "清华等开源智能体系统 PilotDeck 2.0",
      summary: "清华 THUNLP 联合面壁智能、OpenBMB 开源智能体操作系统 PilotDeck 2.0，用独立工作舱隔离项目，记忆过程可查看、修改和回滚，并支持后台常驻执行长任务。它让强模型做规划、轻量模型做执行，团队称复杂长任务成本最高可降约 83%。项目采用 AGPL-3.0 协议，支持三大桌面系统和 Docker 部署。",
      category: "tools",
      region: "cn",
      source: "量子位",
      url: "https://www.qbitai.com/2026/10/503935.html"
    },
    {
      title: "四个 Gemini 智能体 27 小时通关《我的世界》",
      summary: "一篇新论文显示，4 个基于 Gemini 4 Argon 的智能体在没有分配角色、没有人工编写游戏逻辑的情况下，靠游戏内聊天和共享记忆协作，自行编写了 2783 个程序。它们用 27 小时 14 分钟击败末影龙，期间共死亡 605 次。作者称这是 AI 首次端到端自主通关《我的世界》，但实验只跑了一次，而且是简单难度。",
      category: "research",
      region: "intl",
      source: "arXiv",
      url: "https://arxiv.org/abs/2610.22319"
    },
    {
      title: "信通院报告：具身智能泡沫风险积聚",
      summary: "中国信通院联合清华电子系于 10 月 16 日发布《具身智能发展报告 2026》，认为行业冷热两极分化、泡沫风险积聚，未来两到三年将完成首轮出清。报告援引数据称，今年上半年国内具身智能融资 322 起、约 935 亿元，但多数企业的基座模型落后前沿约两代，出货主要流向科研教育和展示场景。在融资热潮里，这是来自官方研究机构的降温信号。",
      category: "industry",
      region: "cn",
      source: "金融界",
      url: "https://finance.jrj.com.cn/2026/10/17201258765385.shtml"
    },
    {
      title: "Vercel：Jev 成采用最快的 AI 模型",
      summary: "Vercel AI Gateway 数据显示，TypeSafe AI 推出的轻量决策模型 Jev 上线两周就被 35% 的付费团队使用，覆盖面接近第二名 Sonnet 5.5 的两倍。Jev 只在少量预设输出中做选择，比通用大模型更快更便宜，Vercel 已用它替换 GPT-6 Luna 来识别有害命令。数据还显示经该网关的 token 中开源模型占七成以上，小模型和专用模型正在分走大量日常调用。",
      category: "model",
      region: "intl",
      source: "TechCrunch",
      url: "https://techcrunch.com/2026/10/16/jev-is-vercels-fastest-adopted-ai-model-ever/"
    },
    {
      title: "微信鸿蒙版接入小艺，可语音发消息",
      summary: "微信鸿蒙版于 10 月 17 日上线小艺语音操作，用户唤醒小艺后可以直接用语音发微信文字、打语音和视频通话。遇到联系人重名或指令不清时，小艺会先追问确认再执行。头部超级 App 把核心操作开放给系统级智能体，是手机跨应用 Agent 落地的具体进展。",
      category: "tools",
      region: "cn",
      source: "IT之家",
      url: "https://www.ithome.com/1/014/401.htm"
    },
    {
      title: "紫金山实验室发布智能体互联平台 AXP",
      summary: "紫金山实验室联合中国移动等单位，于 10 月 16 日在第十届未来网络发展大会上发布基于确定性网络的智能体互联平台 AXP，能统一转换异构智能体协议。平台宣称支持百万级智能体注册接入和十万级同时在线运行，跨域任务端到端耗时可降低 20% 以上。目前处于多场景联合测试阶段。",
      category: "industry",
      region: "cn",
      source: "IT之家",
      url: "https://www.ithome.com/1/014/259.htm"
    }
  ],
  corp: [
    {
      title: "智界进入工信部准入公示，内部称计划上市",
      summary: "工信部第 412 批公告将安徽智界新能源汽车有限公司列入拟新准入车辆生产企业名单，公示期至 10 月 23 日。其生产地址为奇瑞同批申请注销的芜湖经开区厂区，相当于产能从奇瑞划转给智界。智界内部人士向第一财经确认公司计划独立上市，暂无时间表。",
      kind: "org",
      company: "智界汽车",
      source: "第一财经",
      url: "https://www.yicai.com/news/103397676.html"
    },
    {
      title: "*ST动力等 4 家 A 股公司同日领罚单",
      summary: "10 月 16 日盘后，*ST动力因未披露关联关系被河北证监局对公司及 5 名当事人合计罚款 2580 万元，两名责任人被市场禁入 4 年。ST佳缘因招股书及年报虚假记载被证监会合计罚款 1450 万元，*ST广糖因子公司跨期确认收入被合计罚款 930 万元。泰格医药两名实控人因权益变动未及时披露各被罚 50 万元。",
      kind: "penalty",
      company: "*ST动力、ST佳缘、*ST广糖、泰格医药",
      source: "每日经济新闻",
      url: "https://www.nbd.com.cn/articles/2026-10-16/4607174.html"
    },
    {
      title: "曝宁德时代乘用车业务换帅，杨峻接替韩伟",
      summary: "据 36氪报道，宁德时代换电业务负责人、时代电服 CEO 杨峻接替韩伟，兼任市场体系联席总裁，韩伟回归商用车业务。报道援引知情人士称，国内乘用车业务副总裁王慧负责的业务由乘用车 CTO 高焕接手。宁德时代暂未公开回应。",
      kind: "org",
      company: "宁德时代",
      source: "IT之家（援引 36氪）",
      url: "https://www.ithome.com/1/013/724.htm"
    },
    {
      title: "阿里云虚拟数字人退市，11 月底停止新购",
      summary: "阿里云虚拟数字人产品将于 11 月 30 日停止新购，2027 年 5 月 31 日停止续订和版本更新，2027 年 11 月 30 日全面停服。接近阿里云的人士对证券时报表示，这属于战略调整和产品迭代的正常下架，并建议用户迁移到蚂蚁灵境等同类产品。",
      kind: "org",
      company: "阿里云",
      source: "IT之家（援引证券时报）",
      url: "https://www.ithome.com/1/014/058.htm"
    },
    {
      title: "申通快递未履行安全管理责任被罚 6 万元",
      summary: "国家邮政局行政处罚决定显示，申通快递有限公司未严格督促相关企业落实安全风险管控，也未深入排查整治事故隐患，被处罚款 6 万元。处罚决定于 10 月 9 日作出，10 月 18 日经媒体报道。",
      kind: "penalty",
      company: "申通快递",
      source: "IT之家",
      url: "https://www.ithome.com/1/014/412.htm"
    },
    {
      title: "康佳获准主动退市，5 个交易日内摘牌",
      summary: "*ST康佳 10 月 16 日公告收到深交所终止上市决定，A 股和 B 股将在 5 个交易日内摘牌。此次为股东大会通过的主动退市，不设退市整理期，退市后股票转入股转系统退市板块。公开报道显示公司连续 4 年累计亏损约 203 亿元。",
      kind: "business",
      company: "康佳",
      source: "IT之家",
      url: "https://www.ithome.com/1/014/212.htm"
    },
    {
      title: "蔚来称三季度终端销量超过奔驰宝马奥迪",
      summary: "蔚来总裁秦力洪称，蔚来公司第三季度终端销量为 111638 台，首次同时超过宝马的 107210 台、奔驰的 99592 台和奥迪的 94597 台。数据来自威尔森的终端上险口径，比较的是在华终端销量。",
      kind: "business",
      company: "蔚来",
      source: "IT之家",
      url: "https://www.ithome.com/1/014/415.htm"
    },
    {
      title: "英国 CMA 拟认定微软商业软件具战略地位",
      summary: "据路透社 10 月 16 日报道，英国竞争与市场管理局初步认定微软在商业软件领域具有战略市场地位，若最终通过，可干预其捆绑销售 Excel、Teams 和 Copilot 等做法，最终决定将在 2027 年 2 月前作出。微软表示不认同这一结论，称其产品均为开放设计，可与竞争对手的服务互通。",
      kind: "penalty",
      region: "intl",
      company: "微软",
      source: "IT之家（援引路透社）",
      url: "https://www.ithome.com/1/014/200.htm"
    },
    {
      title: "苹果从 Meta 挖来诉讼主管，法务团队重组",
      summary: "据彭博社古尔曼报道，Meta 副总法律顾问兼诉讼主管斯科特·塔克将加入苹果，出任新设的全球诉讼与金融服务副总裁。苹果同时把法律与政府事务团队合并，统一归总法律顾问纽斯特德管理。苹果与 Meta 均拒绝置评。",
      kind: "org",
      region: "intl",
      company: "苹果",
      source: "IT之家（援引彭博社）",
      url: "https://www.ithome.com/1/014/215.htm"
    }
  ],
  voices: [
    {
      title: "黄仁勋：AI 市场震荡“这一切都会过去”",
      summary: "10 月 16 日，英伟达 CEO 黄仁勋在欧洲行程的柏林站谈到近期 AI 板块抛售，说“All of this is going to pass”，即“这一切都会过去”。他称 AI 将是变革性的技术，“毫无疑问它会继续下去，而我们才刚刚开始”。这番话出现在英伟达市值连续下跌、美股 AI 股集体承压的时候。",
      person: "黄仁勋",
      role: "英伟达创始人兼 CEO",
      region: "intl",
      said: "2026-10-16",
      source: "财联社（援引彭博社）",
      url: "https://www.cls.cn/detail/2507382"
    },
    {
      title: "Hassabis：AI 智能体入侵事件是早期警告",
      summary: "Demis Hassabis 在都柏林举行的 International AI Summit 上，把近期 AI 智能体发起的入侵事件称为“early warning shots for us that systems aren't that powerful yet”。他说如果行业、企业和政府不在安全上多下功夫，这类事件明年和之后几年可能变得严重。他还表示需要借鉴生物、核等领域的安全做法，最终可能要有国际标准机构。",
      person: "Demis Hassabis",
      role: "Google DeepMind 联合创始人",
      region: "intl",
      said: "2026-10-14",
      source: "GMA News（援引路透社）",
      url: "https://www.gmanetwork.com/news/scitech/technology/1005925/google-deepmind-s-hassabis-calls-ai-hacks-early-warning-shots/story/"
    },
    {
      title: "潘功胜：AI 资产估值回调风险加剧金融脆弱性",
      summary: "中国人民银行行长潘功胜在曼谷出席今年第三次 G20 财长和央行行长会议时发言。他指出，一些国家国债市场大幅波动，以及人工智能相关资产估值回调的风险，加剧了金融脆弱性。他还强调，金融监管现代化不等于放松监管。",
      person: "潘功胜",
      role: "中国人民银行行长",
      region: "cn",
      said: "2026-10-15",
      source: "第一财经（新华社通稿）",
      url: "https://www.yicai.com/news/103395401.html"
    },
    {
      title: "侯晓楠：文学改编可用 AI，文学本身不能是 AI",
      summary: "阅文集团 CEO 侯晓楠在杭州举行的 2026 阅文创作大会上说，“文学的改编可以用AI，但文学本身不能是AI”，并提出“让AI回归工具本质，让创作回归人文本源”。他还说，一个创作者搭配 IP 资源和 AI 工具就能独立完成漫剧创作全流程，这就是正在兴起的“一人公司”模式。",
      person: "侯晓楠",
      role: "阅文集团 CEO 兼总裁",
      region: "cn",
      said: "2026-10-16",
      source: "红星新闻（新浪转载）",
      url: "http://k.sina.com.cn/article_6105713761_16bedcc6102002dabg.html"
    },
    {
      title: "前英伟达机器人负责人：机器人还没到 ChatGPT 时刻",
      summary: "Techable VC 创始人 Amulya Vishwanath 在 TechCrunch Equity 播客中说，机器人还没有迎来自己的 ChatGPT 时刻。她认为执行器、灵巧手、软件和安全标准等基础部件仍在重建，行业像处在“乐高时代”。她还说物理 AI 不只是机器人，也包括“a molecule, a material, a medicine”。",
      person: "Amulya Vishwanath",
      role: "Techable VC 创始人，曾在英伟达负责机器人平台产品营销",
      region: "intl",
      said: "2026-10-16",
      source: "TechCrunch Equity 播客",
      url: "https://techcrunch.com/video/a-nvidia-insider-turned-vc-on-why-robotics-hasnt-hit-its-chatgpt-moment-yet/"
    }
  ],
  pricing: [
    {
      title: "DeepSeek 搜索 API 上线，千次调用 5 元",
      summary: "DeepSeek 10 月 17 日开放自研搜索引擎的 Search 和 Fetch 两个接口，两者同价，每千次成功请求 5 元，失败、超时和空结果不计费。按次计费从北京时间 11 月 1 日开始，在此之前通过 DeepSeek Harness、Claude Code 或 Codex 的服务端工具调用暂时免费。官方称索引了千亿级网页，并过滤 SEO 作弊和低质量 AI 生成内容。",
      product: "DeepSeek",
      change: "new",
      source: "澎湃新闻",
      url: "https://www.thepaper.cn/newsDetail_forward_34271084"
    },
    {
      title: "Google AI Plus 将不再含 Gemini Pro",
      summary: "据 9to5Google 报道，Google 已开始给 AI Plus（每月 4.99 美元）订阅者发邮件，通知自 11 月 13 日起 Gemini Pro 模型只对 Google AI Pro 及以上订阅开放。此后 Plus 用户只能用 Flash 和 Flash-Lite，现有订阅者同样受影响，Pro 和 Ultra 不变。",
      product: "Gemini",
      change: "limit",
      source: "9to5Google",
      url: "https://9to5google.com/2026/10/14/gemini-ai-plus-loses-pro-november/"
    }
  ],
  design: [
    {
      title: "Figma Make 接入 Gemini 4 Argon",
      summary: "Figma 更新日志显示，Google 的 Gemini 4 Argon 已经在 Figma Make 上线，所有套餐都能在模型选择器里选用。官方提醒非默认模型可能出现意外报错，生成时间也更长。不同模型每个任务消耗的积分差别明显，具体用量要去积分记录里看。",
      kind: "trend",
      source: "Figma 帮助中心",
      url: "https://help.figma.com/hc/en-us/articles/36400680326551-Select-an-AI-model-to-use-in-Figma-Make"
    },
    {
      title: "Adobe Firefly 将接入可灵 Kling 4.0",
      summary: "可灵 AI 10 月 16 日在全球发布 Kling 4.0，Adobe 产品营销高级总监在发布稿里说，Kling 4.0 和 Kling 4.0 Flash 很快会加入 Firefly。目前只公布了计划，上线时间和积分消耗都还没说。",
      kind: "trend",
      source: "Manila Times（可灵新闻稿）",
      url: "https://www.manilatimes.net/2026/10/16/tmt-newswire/plentisoft/kling-ai-launches-kling-40-globally-with-professional-grade-output-stable-motion-and-multimodal-control/2447625/amp"
    },
    {
      title: "Excalidraw：手绘风白板画线框草图",
      summary: "开源的手绘风白板，打开 excalidraw.com 就能画线框图、流程图和讲解草图，支持多人协作，可导出 PNG 和 SVG。基础功能免费，云端团队空间和 AI 生成图表放在付费的 Excalidraw+ 里。仓库 10 月中旬仍有提交，正式版还停在 0.18.1。",
      kind: "tool",
      price: "免费，Excalidraw+ 付费",
      stars: 134060,
      source: "GitHub",
      url: "https://github.com/excalidraw/excalidraw"
    },
    {
      title: "draw.io 桌面版：离线画流程图和架构图",
      summary: "draw.io 的桌面客户端有 Windows 安装包，不联网也能画流程图、用户旅程图和信息架构图，文件存在本地。10 月 9 日刚发布 v32.4.1，更新一直很勤。完全免费，不过界面偏工程风，不适合做精细的视觉稿。",
      kind: "tool",
      price: "免费",
      stars: 63539,
      source: "GitHub",
      url: "https://github.com/jgraph/drawio-desktop"
    },
    {
      title: "tldraw：在线无限画布白板",
      summary: "tldraw.com 是可以直接用的无限画布白板，适合头脑风暴、低保真草图和评审标注。项目 10 月 2 日发布 v5.5.2，10 月 16 日仍有提交。白板本身免费，但要把它的 SDK 集成进商业产品需要单独申请授权。",
      kind: "tool",
      price: "网页版免费",
      stars: 50963,
      source: "GitHub",
      url: "https://github.com/tldraw/tldraw"
    },
    {
      title: "GIMP 3.2.6：免费修图软件稳定更新",
      summary: "开源修图软件 GIMP 9 月发布 3.2.6，层组上可以直接剪切，数位笔支持笔杆旋转输入，字体加载更快，还修复了大量文件导入相关的安全漏洞。有 Windows 安装包，完全免费，但操作习惯和 Photoshop 差别不小，需要时间适应。",
      kind: "tool",
      price: "免费",
      stars: 6522,
      source: "GIMP 官方",
      url: "https://www.gimp.org/news/2026/09/10/gimp-3-2-6-released/"
    },
    {
      title: "Lucide 图标：Figma 插件和代码同一套",
      summary: "Lucide 是开源线性图标库，有 1600 多个 SVG 图标，采用 ISC 许可证，可以商用。官方提供 Figma 插件，也有 React、Vue、Svelte 等代码包，设计稿和前端用的是同一套图标，交付时不容易对不上。仓库 10 月 17 日刚发布 1.59.0。",
      kind: "plugin",
      price: "免费",
      stars: 25110,
      source: "Lucide 官方",
      url: "https://lucide.dev/guide/"
    },
    {
      title: "html.to.design：网页一键转成 Figma 图层",
      summary: "这个 Figma 插件输入网址就能把现成网页导入成可编辑的 Figma 图层，适合做竞品分析，或者把线上页面还原成设计稿。开发方称用户超过 25 万，曾是 Figma 社区点赞最多的插件。免费版每月导入次数有限，Pro 版年付每人每月 12 美元。",
      kind: "plugin",
      price: "免费版限次，Pro 每月 12 美元起",
      source: "html.to.design 官方文档",
      url: "https://html.to.design/docs/free-features"
    },
    {
      title: "Firefly Pro Plus 首年 7 折，21 日截止",
      summary: "Adobe 官方价格页显示，Firefly Pro Plus 首年从每月 49.99 美元降到 34.97 美元，每月 1 万生成积分，Premium 档同样首年 7 折。优惠 10 月 21 日结束，第二年起按原价续费。生成积分每期清零、不能结转，购买前先估算自己的用量。",
      kind: "deal",
      price: "首年 7 折",
      source: "Adobe 官方",
      url: "https://www.adobe.com/products/firefly/plans.html"
    },
    {
      title: "Creative Cloud Pro 新用户前三个月半价",
      summary: "Adobe 官方套餐页显示，个人新订阅 Creative Cloud Pro 前 3 个月每月 34.99 美元，之后恢复每月 69.99 美元。只限新订阅用户，页面没有写截止日期。学生和教师走另一套首年优惠，两者不能叠加。",
      kind: "deal",
      price: "前三个月 5 折",
      source: "Adobe 官方",
      url: "https://www.adobe.com/creativecloud/plans.html"
    }
  ],
  apps: [
    { name: "KeePassXC", category: "office", desc: "本地离线的密码管理器，密码库是一个加密的 .kdbx 文件，可以放进任意网盘自己同步。比云端密码管理器更可控，还自带浏览器自动填充和 TOTP 两步验证码。", license: "GPL-2.0/GPL-3.0", stars: 29280, size: "34 MB", url: "https://github.com/keepassxreboot/keepassxc" },
    { name: "Syncthing", category: "system", desc: "点对点的文件夹同步工具，电脑、手机、NAS 之间直接互传，不经过云服务器。没有容量限制也不用注册账号，适合替代网盘同步私人资料。", license: "MPL-2.0", stars: 89477, size: "11.4 MB", url: "https://github.com/syncthing/syncthing" },
    { name: "Zotero", category: "office", desc: "免费的文献管理工具，浏览器插件一键抓取论文题录和 PDF，在 Word 里插入引用并自动排参考文献格式。内置 PDF 阅读和批注，比 EndNote 轻便，而且完全免费。", license: "AGPL-3.0", stars: 15637, url: "https://www.zotero.org/download/" },
    { name: "Hoppscotch", category: "coding", desc: "开源的 API 调试工具，支持 REST、GraphQL、WebSocket 等协议。界面比 Postman 清爽，桌面版启动快，不登录也能用，团队需要时还可以自己部署服务端。", license: "MIT", stars: 80638, size: "45 MB", url: "https://github.com/hoppscotch/hoppscotch" },
    { name: "Sandboxie-Plus", category: "system", desc: "把程序关进沙盒里运行，它对文件和注册表的改动都被隔离，删掉沙盒就恢复原样。适合试用来路不明的软件，或者同一个程序同时开多个实例。", license: "GPL-3.0", stars: 19709, size: "23.8 MB", url: "https://github.com/sandboxie-plus/Sandboxie" },
    { name: "Sunshine", category: "fun", desc: "自建的游戏串流服务端，配合 Moonlight 客户端，就能在平板、电视或笔记本上低延迟地玩台式机里的游戏。支持 N 卡、A 卡和 Intel 核显的硬件编码，不像 GeForce Experience 那样只认 N 卡。", license: "GPL-3.0", stars: 42322, size: "32.1 MB", url: "https://github.com/LizardByte/Sunshine" },
    { name: "Calibre", category: "office", desc: "一站式电子书管理工具，整理书库、编辑元数据、在 EPUB、MOBI、AZW3、PDF 等格式之间互转都能做。还能把书直接推送到 Kindle 等阅读器。", license: "GPL-3.0", stars: 26170, size: "228 MB", url: "https://github.com/kovidgoyal/calibre" },
    { name: "HandBrake", category: "fun", desc: "老牌的开源视频转码工具，内置各种设备和平台的预设，选好就能把大体积视频压成 H.265 或 AV1。支持批量队列和显卡硬件加速，比在线转码更快，也不用担心隐私泄露。", license: "GPL-2.0", stars: 24698, size: "24.2 MB", url: "https://github.com/HandBrake/HandBrake" },
    { name: "TrafficMonitor", category: "system", desc: "在任务栏上实时显示网速、CPU 和内存占用的国产小工具，体积不到 2 MB。还能通过插件显示温度、天气等信息，比打开任务管理器直观得多。", license: "Anti-996 License", stars: 46597, size: "1.4 MB", url: "https://github.com/zhongyang219/TrafficMonitor" },
    { name: "AutoHotkey", category: "coding", desc: "Windows 上的自动化脚本语言，几行代码就能实现自定义快捷键、文本扩展、窗口操作和重复点击。社区现成脚本很多，日常的重复操作都可以交给它。", license: "GPL-2.0", stars: 13304, size: "2.9 MB", url: "https://github.com/AutoHotkey/AutoHotkey" },
    { name: "Shotcut", category: "fun", desc: "跨平台的开源视频剪辑软件，支持多轨时间线、滤镜、转场和 4K 素材，原生兼容几乎所有格式，不用先转码。没有水印也没有付费墙，入门剪辑够用。", license: "GPL-3.0", stars: 15441, size: "145.8 MB", url: "https://github.com/mltframework/shotcut" },
    { name: "WinSCP", category: "coding", desc: "Windows 上经典的 SFTP、FTP、S3 图形客户端，左右双栏拖拽就能在本地和服务器之间传文件。可以直接打开并编辑远程文件、同步目录，还能和 PuTTY 配合使用。", license: "GPL-3.0", stars: 3888, url: "https://winscp.net/eng/download.php" },
    { name: "EarTrumpet", category: "system", desc: "替代系统自带音量托盘的小工具，可以分别调节每个程序的音量，并一键切换输出设备。界面和 Windows 11 风格一致，比系统的音量合成器顺手。", license: "MIT（附排除条款）", stars: 11454, url: "https://github.com/File-New-Project/EarTrumpet" },
    { name: "GitHub Desktop", category: "coding", desc: "GitHub 官方的图形化 Git 客户端，提交、分支、拉取和解决冲突都能点鼠标完成。适合刚接触 Git 的人，或者想快速看改动差异的开发者。", license: "MIT", stars: 21975, size: "226 MB", url: "https://github.com/desktop/desktop" }
  ],
  insights: [
    {
      title: "Anthropic 内部初级技术岗占比骤降",
      summary: "Anthropic 10 月 16 日发布报告《How Employment is Changing at Anthropic》，新招技术岗中初级员工占比从 2025 年初的 27% 降到 2026 年的 9%，技术部门初级员工占比从 21% 降到 14%。技术岗占总人数的比例从 61% 降到 56%，人均开会时间同比增加约 20%。报告还称，员工指挥的 AI 智能体在 8 月的工作时长约为员工本人的 6 倍。",
      kind: "jobs",
      source: "Anthropic 报告（TechCrunch 等报道）",
      asOf: "2026-08",
      url: "https://techcrunch.com/2026/10/17/anthropic-says-its-workforce-has-become-less-junior-and-is-spending-more-time-in-meetings/"
    },
    {
      title: "美国大行集体限制 AI 智能体接入客户账户",
      summary: "花旗、美国银行、摩根大通相继限制第三方 AI 智能体登录客户账户或代为交易，美银 CEO Moynihan 主张转账授权必须有人参与。银行担心 AI 助手把利率约 0.1% 的活期存款自动转去收益 3.3% 至 5% 的产品。摩根大通、美银、富国合计约 1.6 万亿美元无息存款，若要付 3% 利息，每年将多出约 470 亿美元成本。",
      kind: "industry",
      source: "华尔街见闻（原始来源：FT、CNBC 对 Moynihan 的采访、摩根大通三季度业绩会、阿波罗 Torsten Slok 的研究）",
      asOf: "2026-10",
      url: "https://wallstreetcn.com/articles/3783836"
    },
    {
      title: "Itaú 把生成式 AI 助手推向全体客户",
      summary: "巴西 Itaú Unibanco 用对话助手 ia.i 和治理平台 IARA 推进 AI First 战略，覆盖客户和员工。ia.i 第一阶段覆盖约 30 万客户，目标是 2026 年底覆盖全部客户。OpenAI 的案例称，相关部门流程效率提升 20% 至 80%。",
      kind: "usage",
      source: "OpenAI 客户案例（数据来自 Itaú）",
      asOf: "2026-10",
      url: "https://openai.com/index/itau-generative-ai"
    }
  ]
};
