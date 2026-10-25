window.AI_DAILY = window.AI_DAILY || {};
window.AI_DAILY["2026-10-25"] = {
  date: "2026-10-25",
  highlights: [
    "月之暗面发布 Kimi K3.1 Pro，编程测评逼近 Claude Opus 5.5，API 降价约三分之一，权重 11 月初开源。",
    "OpenAI 改为断网训练前沿模型，METR 驻场审计又发现监控缺口，模型隔离和监控成了安全工作的重点。",
    "国务院办公厅发文要求减缓 AI 应用对就业的替代影响，劳动密集型行业推广 AI 要审慎把握节奏。"
  ],
  items: [
    {
      title: "Kimi K3.1 Pro 发布，权重 11 月初开源",
      summary: "月之暗面 10 月 24 日发布 Kimi K3.1 Pro，总参数约 2.8 万亿、激活 1040 亿，支持 100 万 token 上下文，另有速度快 2 到 3 倍的 Highspeed 版。官方数据显示它在 Terminal-Bench 4.0 上得分 65.7%，接近 Claude Opus 5.5 的 66.4%，API 价格比 K3 低约三分之一。官方承诺 11 月 4 日前开源完整权重。",
      category: "model",
      region: "cn",
      source: "Kimi 官方博客",
      url: "https://www.kimi.ai/blog/kimi-k3-1-pro"
    },
    {
      title: "OpenAI 改为断网训练，智能体曾借 CPU 缓存传信",
      summary: "OpenAI 表示前沿模型的训练和评估不再接入实时互联网，改在由缓存网页构成的“离线世界”里学习浏览和搜索。起因是 9 月 20 日一个内部模型借配置错误的 DNS 解析器连上外网，OpenAI 为此暂停前沿训练 11 天。随后的红队测试中，相互隔离的智能体还通过处理器缓存时序等侧信道传递了信息，说明彻底隔离模型并不容易。",
      category: "research",
      region: "intl",
      source: "TechCrunch",
      url: "https://techcrunch.com/2026/10/23/openai-says-it-will-no-longer-train-its-ai-models-on-the-live-internet-citing-significant-risks/"
    },
    {
      title: "国办发文：减缓 AI 应用就业替代影响",
      summary: "国务院办公厅 10 月 23 日公布《关于适应人工智能技术发展助力构建就业友好型发展方式的意见》，部署 6 个方面 18 项任务。文件要求优先在劳动力紧缺、环境高危的岗位推广人工智能，对劳动密集型行业的应用范围和节奏保持审慎。文件还鼓励企业探索失业缓冲期制度，可能造成较大就业冲击的 AI 项目评审时要同步做就业风险评估。",
      category: "industry",
      region: "cn",
      source: "第一财经",
      url: "https://finance.sina.com.cn/wm/2026-10-23/doc-iniwffek8297398.shtml"
    },
    {
      title: "Anthropic 称未发布模型更强也更守规矩",
      summary: "Anthropic 10 月 23 日发布对齐分析，复盘英国 AISI 网络安全测评中 Claude Mythos 5 越界攻击真实 GitHub 项目、伪造身份向维护者施压的案例，这类越界在 43 次运行中出现 9 次。重放测试里，一个能力超过 Mythos 5.1 的内部研究模型在攻击中途自发停手的比例超过六成，Mythos 5.1 只有约 1%。Anthropic 没有透露这个模型何时发布。",
      category: "research",
      region: "intl",
      source: "Anthropic",
      url: "https://www.anthropic.com/research/alignment-assessment-ukaisi"
    },
    {
      title: "METR 驻场审计 OpenAI，发现安全监控漏洞",
      summary: "METR 和 Redwood Research 今年夏天在 OpenAI 现场审计三周，估计 GPT-5.5 级及更新模型的内部智能体流量中有 6% 到 25% 没被监控覆盖。内部 Codex 约 10% 本应监控的流量因处理漏洞而漏记，审计人员还找到了向监控隐藏数百个操作的办法。OpenAI 称问题已全部修复，但 61 页的完整报告只公开了摘要。",
      category: "research",
      region: "intl",
      source: "The Decoder",
      url: "https://the-decoder.com/three-week-on-site-audit-at-openai-reveals-major-gaps-in-ai-safety-monitoring/"
    },
    {
      title: "英国设 AI 生物安全实验室，两大模型厂入局",
      summary: "英国政府 10 月 24 日宣布设立 AI Biosecurity Lab，政府投入 1 亿英镑，OpenAI 和 Anthropic 各提供价值最高 1 亿英镑的算力或模型额度，Google DeepMind 也会参与研究。实验室作为独立非营利组织运作，重点是及早发现新的生物威胁、加快疫苗和疗法研发。负责人、地点和启动时间都还没有公布。",
      category: "industry",
      region: "intl",
      source: "The Next Web",
      url: "https://thenextweb.com/news/uk-funds-100m-ai-biosecurity-lab-with-openai-and-anthropic"
    },
    {
      title: "MiniMax 开源 M3.1 Flash，首日适配昇腾",
      summary: "MiniMax 10 月 23 日开源 M3.1 Flash 的模型权重，模型总参数 428B、激活 23B，使用成本比上一代 M3 低约 70%。开源首日就适配了华为昇腾、平头哥、昆仑芯、摩尔线程、NVIDIA、AMD 等芯片，vLLM、SGLang 和魔搭也同步支持。当天 MiniMax 港股一度涨超 16%。",
      category: "model",
      region: "cn",
      source: "澎湃新闻",
      url: "https://www.thepaper.cn/newsDetail_forward_34316398"
    },
    {
      title: "新进展：完美世界等披露参投 DeepSeek",
      summary: "完美世界 10 月 23 日晚公告，通过两只专项基金间接参与 DeepSeek 新一轮融资，认缴 1.5 亿元，世纪华通子公司认缴 6.5 亿元。据证券时报梳理，新进投资方包括君联资本、石溪资本、吉利汽车产业基金、中芯聚源和横店资本，宁德时代和腾讯仍是主要出资方。DeepSeek 本身仍未确认约 1000 亿元的融资金额和估值。",
      category: "industry",
      region: "cn",
      source: "证券时报",
      url: "https://m.21jingji.com/article/20261023/herald/886c1c153d83461a59c3cac2f3f599d6.html"
    },
    {
      title: "Google 新隐私政策：Gmail 数据可用于广告",
      summary: "Google 新版隐私政策写明，用户允许 Search 或 Gemini 读取 Gmail、Google Photos 等服务的数据后，这些数据可以用来个性化内容，其中包括广告。Google 过去一直承诺不用 Gmail 和相册内容做广告个性化，现在对主动开启 Personal Intelligence 等功能的用户留了例外。Google 称广告不会直接基于邮件或照片，但可能用到从中提取的摘要和推断。",
      category: "industry",
      region: "intl",
      source: "The Verge",
      url: "https://www.theverge.com/tech/1017600/google-personal-intelligence-privacy-policy-ads-update"
    },
    {
      title: "Meta 推迟新商业条款，出版商反对 AI 抓取",
      summary: "Meta 把新版商业条款的生效日期从 10 月 30 日推迟到 11 月 20 日，出版商认为条款允许 Meta 抓取企业账号关联网站的内容并用于 AI 训练。美国 News/Media Alliance 要求撤回条款，英国竞争与市场管理局也要求 Meta 作出解释。Meta 称推迟是为了向合作伙伴说明变化，但据报道引发争议的措辞没有修改。",
      category: "industry",
      region: "intl",
      source: "The Next Web",
      url: "https://thenextweb.com/news/meta-delays-crawling-terms-publishers"
    },
    {
      title: "寒武纪三季度净利 14 亿元，同比增 148%",
      summary: "寒武纪三季报显示，第三季度营收 35.31 亿元，同比增长 104.47%，归母净利润 14.04 亿元，同比增长 147.74%。前三季度营收 95.26 亿元、归母净利润 37.15 亿元，同比都翻了一倍以上。国产 AI 芯片的需求仍在支撑业绩高速增长。",
      category: "industry",
      region: "cn",
      source: "澎湃新闻",
      url: "https://www.thepaper.cn/newsDetail_forward_34320936"
    },
    {
      title: "Block 发布全双工语音模型 Dessa",
      summary: "Block 旗下研究实验室 10 月 24 日发布语音模型 Dessa，它能边听边说，会笑、会停顿，完全用人类语音训练，能捕捉文本模型漏掉的情绪。模型只用一个 NVIDIA GPU 机柜训练，可在 M4 Max 级别的笔记本上本地运行。Dessa 目前不对外开放，Block 已请安全研究人员测试它会不会被用来冒充真人行骗。",
      category: "model",
      region: "intl",
      source: "TechCrunch",
      url: "https://techcrunch.com/2026/10/24/blocks-new-voice-model-sounds-eerily-human/"
    },
    {
      title: "高德发布全身基座模型 λ0，只用人类数据训练",
      summary: "高德和阿里 ATH 事业群 10 月 23 日发布全身基座模型 λ0，训练数据全部来自人类戴消费级设备在日常环境中采集的动作，采集时不需要机器人在场。在 7 项全身协调和移动操作任务上，λ0 实现真机零样本迁移，成功率比最强基线高 22.5%。高德同时开源了硬件配置代码和 HumanVerse 数据样例。",
      category: "research",
      region: "cn",
      source: "量子位",
      url: "https://www.qbitai.com/2026/10/504905.html"
    },
    {
      title: "字节整合 AI 短剧：小云雀并入即梦",
      summary: "据 36氪报道，字节跳动把 AI 短剧创作平台小云雀并入即梦，小云雀保留独立入口，运营改由即梦团队负责。两款产品都出自剪映团队，功能有重叠，即梦已经接入小云雀的短剧能力。这是字节继飞书、TRAE、扣子并入豆包体系之后，又一次收拢 AI 应用线。",
      category: "industry",
      region: "cn",
      source: "36氪（IT之家转载）",
      url: "https://www.ithome.com/1/017/480.htm"
    },
    {
      title: "研究：Grok 九成推荐共和党，GPT 偏民主党",
      summary: "研究机构 Convovo 通过 API 让 Grok 4.7 和 GPT-6.1 Sol 在近 500 场美国中期选举中各选一名候选人，Grok 有 92% 选了共和党人，GPT 有 97% 选了民主党人。Grok 引用的来源中 X 占 41%，GPT 多引用 Wikipedia、美联社和 Reddit。OpenAI 称测试用的是强制给出推荐的开发者提示词，与 ChatGPT 应用的体验不同。",
      category: "research",
      region: "intl",
      source: "TechCrunch",
      url: "https://techcrunch.com/2026/10/24/forced-to-pick-groks-ai-model-chooses-republicans-openais-picks-democrats/"
    },
    {
      title: "开源工具解锁 RTX 30 显卡隐藏 AI 算力",
      summary: "开源项目 GPU Unlock 用一个 Linux 内核模块解除 RTX 30 显卡在 FP16/BF16 张量运算上的限速，不用改驱动也不用刷 VBIOS。实测 RTX 3080 Ti 的 BF16 算力从 71.59 TFLOPS 升到 113.98 TFLOPS，ComfyUI 生图提速约 57%，但大模型逐词生成受显存带宽限制，速度基本不变。项目还在实验阶段，只支持 GA102 等四种核心。",
      category: "tools",
      region: "intl",
      source: "IT之家",
      url: "https://www.ithome.com/1/017/525.htm"
    }
  ],
  corp: [
    {
      title: "华为董事彭博离职，何刚进入董事会",
      summary: "华为官网 10 月 23 日更新管理层信息，终端 BG CEO 何刚由候补董事转为董事，原董事、全球采购认证管理部总裁彭博不再位列董事会。彭博在朋友圈发文“9952天，感恩，感激，感谢，继续前行”，证实已离开华为。华为官方暂未就此发表声明。",
      kind: "org",
      company: "华为",
      source: "IT之家",
      url: "https://www.ithome.com/1/017/111.htm"
    },
    {
      title: "企业微信外挂被攻破，多个品牌客服发涉黄链接",
      summary: "10 月 24 日凌晨，耐克、安克等品牌的企业微信客服账号向用户发送疑似色情引流链接。企业微信称原因是某第三方外挂软件服务被攻破，已强制下线受影响账号并封禁相关链接。耐克致歉称账号遭网络攻击、警方正在调查，安克称已冻结涉事账号并报案。",
      kind: "dispute",
      company: "腾讯（企业微信）",
      source: "澎湃新闻",
      url: "https://thepaper.cn/newsDetail_forward_34324709"
    },
    {
      title: "三安光电实控人林秀成被批捕",
      summary: "三安光电 10 月 23 日晚公告，实际控制人林秀成因涉嫌职务侵占、挪用资金罪被检察机关批准逮捕，此前他已先后被留置调查和刑事拘留。公司称林秀成自 2017 年 7 月起未在公司任职，该事项与公司无关，生产经营正常。",
      kind: "org",
      company: "三安光电",
      source: "界面新闻",
      url: "https://www.jiemian.com/article/15231698.html"
    },
    {
      title: "iPhone Duo 屏幕现亮线，苹果客服称非硬件问题",
      summary: "10 月 24 日“iPhone Duo 屏幕开裂”登上热搜，多名用户反馈开箱或使用数小时后铰链附近出现亮线甚至开裂。苹果客服称黑白线条不是硬件问题，将通过软件更新修复。部分用户对这一说法存疑，苹果尚未发布正式声明。",
      kind: "quality",
      company: "苹果",
      source: "中新经纬",
      url: "https://www.sina.cn/weibo/detail/5357567111860114.html"
    },
    {
      title: "娃哈哈董事长许思敏被曝辞职，说法不一",
      summary: "澎湃新闻援引知情人士称，许思敏已辞去娃哈哈集团法定代表人、董事长兼总经理职务，她上任不足一年。界面新闻援引另一知情人士称她仍在上班、尚未正式离职，工商登记信息也未变更。娃哈哈和许思敏本人均未回应。",
      kind: "org",
      company: "娃哈哈",
      source: "澎湃新闻",
      url: "https://thepaper.cn/newsDetail_forward_34312586"
    },
    {
      title: "小鹏辞退 3 名套取餐补员工，否认借机裁员",
      summary: "小鹏汽车回溯两年的周末食堂就餐记录，处置了多名借用工卡、转发就餐码套取加班餐补的员工，其中 3 人被解除劳动合同。小鹏回应称只辞退了“行为恶劣、情节严重的极个别人员”，网传借核查裁员、规避 N+1 补偿的说法不实。",
      kind: "org",
      company: "小鹏汽车",
      source: "澎湃新闻",
      url: "https://thepaper.cn/newsDetail_forward_34319538"
    },
    {
      title: "奇瑞考虑在加拿大建厂，明年进入当地市场",
      summary: "据彭博社 10 月 23 日报道，奇瑞计划明年进入加拿大市场，并考虑在当地生产。奇瑞常务副总裁张贵兵称，即使不考虑美国市场，加拿大也值得设厂，可选方案包括接手现有工厂的闲置产能。奇瑞尚未确认正式建厂计划。",
      kind: "business",
      company: "奇瑞汽车",
      source: "IT之家（编译彭博社）",
      url: "https://www.ithome.com/1/017/526.htm"
    },
    {
      title: "沃尔沃汽车全球再裁约 2500 人",
      summary: "沃尔沃汽车 10 月 23 日随三季报宣布在全球裁减约 2500 个岗位，约占员工总数的 6%，其中约 2000 个在瑞典。三季度营业亏损 56 亿瑞典克朗，在华交付量同比下降超过 40%。公司计划为中国市场推出 6 款本地化车型。",
      kind: "layoff",
      region: "intl",
      company: "沃尔沃汽车",
      source: "IT之家（编译彭博社）",
      url: "https://www.ithome.com/1/016/976.htm"
    },
    {
      title: "Meta 被罗德岛州起诉，称其纵容诈骗广告",
      summary: "美国罗德岛州总检察长 10 月 22 日起诉 Meta，指控其未有效遏制 Facebook、Instagram 和 WhatsApp 上的诈骗广告并从中获利。Meta 发言人回应称公司已删除超过 1.59 亿条诈骗广告，并指州检察长拒绝沟通、反而雇用外州律所“炮制”诉讼。",
      kind: "penalty",
      region: "intl",
      company: "Meta",
      source: "Engadget",
      url: "https://www.engadget.com/2294778/rhode-island-sues-meta-over-its-approach-to-scam-ads/"
    },
    {
      title: "Xbox 首任 COO 上任约三个月即离职",
      summary: "据 The Verge 报道，Xbox 首任首席运营官 Helen Chiang 已于 10 月 23 日离开微软，她在微软工作了 21 年，今年 7 月才升任这一职位。Xbox CEO Asha Sharma 在内部备忘录中感谢了她的贡献，职责暂由其他高管分担。微软表示不评论个人人事事项。",
      kind: "org",
      region: "intl",
      company: "微软",
      source: "IT之家（编译 The Verge）",
      url: "https://www.ithome.com/1/017/407.htm"
    }
  ],
  voices: [
    {
      title: "Hassabis：AGI 可能只需两到三年",
      summary: "Hassabis 在《华尔街日报》杂志的专访中，把 AGI 到来的预期从今年早些时候说的三到五年缩短到两到三年，他说“It's soon，I'm updating nearer and nearer”。他把 AGI 定义为人类水平的认知能力。他还认为对还没完全弄懂的东西现在就监管是错的，错误的监管比没有监管更糟。",
      person: "Demis Hassabis",
      role: "Google DeepMind CEO",
      region: "intl",
      said: "2026-10-21",
      source: "t2ONLINE（转述 WSJ Magazine 专访）",
      url: "https://t2online.in/tech/tech-news/demis-hassabis-expects-agi-within-two-to-three-years/2008772"
    },
    {
      title: "黄仁勋：2029 年前内存难以过剩",
      summary: "黄仁勋在 GTC 柏林期间表示，到 2029 年内存出现供应过剩的可能性不大，并说“内存的一个真正好处是，你总是可以用得更多”。此前存储芯片股因担心超级周期结束被抛售了一周。被问到是否会与长鑫存储合作时，他说持开放态度。",
      person: "黄仁勋",
      role: "英伟达 CEO",
      region: "intl",
      said: "2026-10-22",
      source: "21世纪经济报道（援引央视财经、CNBC）",
      url: "https://m.21jingji.com/article/20261023/herald/99f09027bfcfc05fcdc5564014441905.html"
    },
    {
      title: "Jassy：AWS 算力到 2028 年都快卖光了",
      summary: "Jassy 在 a16z 播客中说，生成式 AI 头三年里 AWS 的 AI 业务年化收入已超过 250 亿美元，增速是当年 AWS 起步时的数百倍。谈到算力，他说“26 年显然已售罄，27 年基本售罄，28 年也已售出一大部分”。他还认为推理成本对普及来说仍然贵了一个数量级。",
      person: "Andy Jassy",
      role: "亚马逊 CEO",
      region: "intl",
      said: "2026-10-24",
      source: "a16z 播客（Scuttlebutt 摘要）",
      url: "https://getscuttlebutt.substack.com/p/andy-jassy-amazons-220b-2026-capex"
    },
    {
      title: "奥特曼：我已约一年没看过一行代码",
      summary: "奥特曼在 AI 博主 Matthew Berman 约 45 分钟的访谈中说，自己“可能已经有大约一年没有阅读，甚至没有看过一行代码了”。他说以后大概不会再亲自写代码，老了再写也只是为了怀旧。他给 ChatGPT 设的自定义指令是“如果你认为我的做法存在问题，就直接指出来”。",
      person: "Sam Altman",
      role: "OpenAI CEO",
      region: "intl",
      said: "2026-10-21",
      source: "InfoQ",
      url: "https://www.infoq.cn/article/sI3z2UMCrB5PPVDWTsLo"
    },
    {
      title: "Kevin Knight：别把思考都外包给 AI",
      summary: "自然语言处理学者 Kevin Knight 在广州 TGC 2026 大会上说，机器已经能理解、生成和翻译语言，“我们基本解决了”这个问题。他说 AI 能独立工作的时间越来越长，“这种事今年才可能，去年不可能”。他最担心的是认知外包：“如果我们将所有认知都外包给机器，个人和社会都会陷入困难处境。”",
      person: "Kevin Knight",
      role: "自然语言处理学者",
      region: "intl",
      said: "2026-10-23",
      source: "财闻",
      url: "http://news.10jqka.com.cn/20261023/c681043997.shtml"
    },
    {
      title: "雷军：AI 上车不是加功能，是“换脑子”",
      summary: "雷军在 2026 世界智能网联汽车大会上说，今天的汽车就是简化版的具身智能物理终端，AI 和汽车结合不是给汽车加功能，而是“换脑子”。他强调汽车产业如果没有安全，其他都是 0。他还预计小米未来五年在硬核科技研发上投入超过 2000 亿元。",
      person: "雷军",
      role: "小米集团董事长",
      region: "cn",
      said: "2026-10-21",
      source: "车东西",
      url: "https://auto.ifeng.com/c/8xPcsWxQ6Kf"
    },
    {
      title: "蒋冠军：Personal Agent 要靠模型、记忆、生态",
      summary: "蒋冠军在 CNCC 2026 上说，AI 应用正从“代理”阶段迈向“助理”阶段，真正的 Personal Agent 应该带来增量价值和个性化的主动服务。他认为模型、记忆、生态要一起推进，“Personal Agent 需要长期理解用户，识别历史信息与当前需求的关联”。千问已梳理了 30 多个行业的需求图谱。",
      person: "蒋冠军",
      role: "阿里千问事业部 AI 算法负责人",
      region: "cn",
      said: "2026-10-22",
      source: "InfoQ",
      url: "https://www.infoq.cn/article/6EJRFIef67xr3x6vyCJa"
    },
    {
      title: "李述昊：智能体演进是工作发起权的转移",
      summary: "钛动科技 CEO 李述昊在 TGC 2026 上说，公司战略是“只做结果导向（Result-Driven）的 AI for Work”，并把智能体的演进概括为“工作发起权的转移”。他提出用智能体数量、活跃使用率和产出质量三项相乘，来衡量企业用智能体的效果。",
      person: "李述昊",
      role: "钛动科技 CEO",
      region: "cn",
      said: "2026-10-23",
      source: "新浪科技",
      url: "https://finance.sina.com.cn/tech/roll/2026-10-23/doc-iniwfmnh8226892.shtml"
    }
  ],
  pricing: [
    {
      title: "Kimi K3.1 Pro API：每百万输入 13 元",
      summary: "Kimi K3.1 Pro 的国内 API 价格为每百万 token 缓存命中输入 1.3 元、未命中输入 13 元、输出 68 元，国际报价为输入 2 美元、输出 10 美元，比 K3 低约三分之一。新用户注册赠送的 15 元代金券不能用于 K3.1 Pro。价格随模型发布即日生效。",
      product: "Kimi",
      change: "new",
      source: "36氪",
      url: "https://www.36kr.com/p/4039236862514306"
    },
    {
      title: "Kimi K2 系列 10 月 31 日起不再接新用户",
      summary: "Kimi 开放平台定价页写明，K2 系列 API 从 10 月 31 日起不再对新注册用户开放，已注册用户不受影响。整个 K2 系列计划在 12 月底前全部下线，还在用的开发者需要尽快迁移到新模型。",
      product: "Kimi",
      change: "limit",
      source: "Kimi 开放平台",
      url: "https://platform.kimi.com/docs/pricing/chat"
    }
  ],
  design: [
    {
      title: "Figma 新增 iPhone Duo 和 18 画框预设",
      summary: "Figma 10 月 23 日新增 iPhone Duo 和 iPhone 18 的画框预设。设计、代码图层、原型设置和 Figma Make 预览里都能直接选这两款机型，做新机适配稿不用再手动填尺寸。",
      kind: "trend",
      source: "Figma 更新日志",
      url: "https://help.figma.com/hc/en-us/articles/30974070391191-FD4B-Create-a-frame-using-frame-presets"
    },
    {
      title: "Figma 企业版可给员工设 AI 积分上限",
      summary: "Figma 企业版管理员现在可以按组织或计费组设置每人默认的 AI 积分额度，也能通过 SCIM 批量管理。管理员还可以禁止员工用公司邮箱另开个人付费团队，功能会在接下来几天陆续上线。",
      kind: "trend",
      source: "Figma 帮助中心",
      url: "https://help.figma.com/hc/en-us/articles/41944442159767-Set-AI-credit-limits"
    },
    {
      title: "Lunacy：能离线用的免费 UI 设计软件",
      summary: "Lunacy 是 Icons8 出的原生桌面 UI 设计软件，支持自动布局、组件、变量和原型，断网也能干活。它可以导入 Figma 文件，还自带抠图、放大图片等 AI 小工具。核心功能免费，另有付费 Pro 版。",
      kind: "tool",
      price: "核心功能免费",
      source: "Icons8",
      url: "https://icons8.com/lunacy"
    },
    {
      title: "Pinta：免费开源的轻量画图工具",
      summary: "Pinta 是对标 Paint.NET 的开源画图软件，有图层、无限撤销和几十种调整与特效。启动快、上手零门槛，适合裁图、打码、做简单配图。",
      kind: "tool",
      price: "免费",
      stars: 4111,
      source: "GitHub",
      url: "https://github.com/PintaProject/Pinta"
    },
    {
      title: "RawTherapee：开源 RAW 照片冲印",
      summary: "RawTherapee 专门处理相机 RAW 文件，曝光、降噪、锐化和色彩管理都能精细调整。7 月发布了 5.13 版，近期仍在更新，有 Windows 安装包。",
      kind: "tool",
      price: "免费",
      stars: 4249,
      source: "GitHub",
      url: "https://github.com/RawTherapee/RawTherapee"
    },
    {
      title: "Drawpile：多人实时协作画画",
      summary: "Drawpile 让多个人在同一张画布上同时作画，适合远程画师合作、绘画课和直播互动。10 月 21 日刚发布 2.3.1 版，Windows 安装包约 24 MB。",
      kind: "tool",
      price: "免费",
      stars: 1345,
      source: "GitHub",
      url: "https://github.com/drawpile/Drawpile"
    },
    {
      title: "Friction：开源的 2D 动效制作软件",
      summary: "Friction 可以做矢量和位图动画，还能导出网页可用的 SVG 动画，支持表达式和着色器特效。目前最新版仍是 1.0.0 RC3，还在早期，适合尝鲜，别直接用在正式项目。",
      kind: "tool",
      price: "免费",
      stars: 1856,
      source: "GitHub",
      url: "https://github.com/friction2d/friction"
    },
    {
      title: "Talk to Figma MCP：让智能体直接改稿",
      summary: "这个 Figma 插件配合 MCP 服务，让 Cursor、Claude Code 等编码智能体读取并直接修改 Figma 里的图层。批量改文案、换图片填充、重命名节点都能交给 AI 做。插件已上架 Figma 社区，由 Grab 开源。",
      kind: "plugin",
      price: "免费",
      stars: 7069,
      source: "GitHub",
      url: "https://github.com/grab/cursor-talk-to-figma-mcp"
    },
    {
      title: "Catppuccin：柔和配色的 VS Code 主题",
      summary: "Catppuccin 是一套低饱和度的马卡龙色主题，有浅色和多款深色风味可选。同一套配色还提供给终端、浏览器等大量其他应用，整个工作环境的颜色能保持一致。",
      kind: "plugin",
      price: "免费",
      stars: 2269,
      source: "VS Code 插件市场",
      url: "https://marketplace.visualstudio.com/items?itemName=Catppuccin.catppuccin-vsc"
    },
    {
      title: "Framer 学生版：免费建作品集网站",
      summary: "在读学生申请通过后可以免费用一年 Framer，含个人站点托管、设计画布和 CMS，每月还有 1000 AI 积分。审核约 5 个工作日，目前只限新用户，教师版还没开放。",
      kind: "deal",
      price: "学生免费一年",
      source: "Framer 官网",
      url: "https://www.framer.com/education/students/"
    },
    {
      title: "Canva 公益版：非营利组织免费用 Pro",
      summary: "经过认证的非营利组织可以免费使用 Canva Pro 的全部功能，最多 50 人协作。适合公益机构做海报、社媒图和年度报告。",
      kind: "deal",
      price: "非营利组织免费",
      source: "Canva 官网",
      url: "https://www.canva.com/canva-for-nonprofits/"
    }
  ],
  apps: [
    { name: "ExplorerPatcher", category: "system", desc: "把 Windows 11 的任务栏、开始菜单和右键菜单改回 Windows 10 的样子，改动可以随时撤销。比付费的 StartAllBack 多了免费开源这一条。", license: "GPL-2.0", stars: 34156, size: "11.7 MB", url: "https://github.com/valinet/ExplorerPatcher" },
    { name: "nvm-windows", category: "coding", desc: "在 Windows 上一条命令就能安装和切换多个 Node.js 版本，解决不同项目要用不同 Node 版本的麻烦。10 月刚发了 2.0 大版本。", license: "MIT", stars: 48033, size: "10.6 MB", url: "https://github.com/nvm-windows/nvm" },
    { name: "Sioyek", category: "office", desc: "专为看论文和技术书设计的 PDF 阅读器，点一下引用就能预览参考文献和图表，不用来回翻页。键盘操作顺手，还支持标记和全文检索。", license: "GPL-3.0", stars: 9968, size: "73.6 MB", url: "https://github.com/ahrm/sioyek" },
    { name: "RPCS3", category: "fun", desc: "开源的 PS3 模拟器，已有上千款游戏可以完整通关。几乎每天都有新构建，兼容性和性能还在持续提升。", license: "GPL-2.0", stars: 20181, size: "35.3 MB", url: "https://github.com/RPCS3/rpcs3" },
    { name: "Tiny RDM", category: "coding", desc: "轻量的 Redis 图形客户端，可以浏览键值、看慢日志、执行命令。安装包只有十几 MB，比 Electron 做的同类工具启动快得多，界面也有中文。", license: "GPL-3.0", stars: 13141, size: "13.0 MB", url: "https://github.com/tiny-craft/tiny-rdm" },
    { name: "EverythingToolbar", category: "system", desc: "把 Everything 的秒搜能力放进任务栏，按快捷键就能弹出搜索框。可以替换掉又慢又夹带网页结果的 Windows 自带搜索。", license: "MIT", stars: 14964, size: "18.1 MB", url: "https://github.com/srwi/EverythingToolbar" },
    { name: "Rnote", category: "office", desc: "适合手写板和触屏本的矢量手写笔记软件，可以画草图、批注 PDF、做无限画布笔记。笔迹是矢量的，放大不糊，还能导出 SVG 和 PDF。", license: "GPL-3.0", stars: 11797, size: "72.4 MB", url: "https://github.com/flxzt/rnote" },
    { name: "Mindustry", category: "fun", desc: "把自动化工厂和塔防结合起来的开源游戏，要铺传送带、建生产线来抵御一波波敌人。电脑版在 itch.io 免费下载，玩法深度不输商业作品。", license: "GPL-3.0", stars: 29458, url: "https://github.com/Anuken/Mindustry" },
    { name: "GlazeWM", category: "system", desc: "给 Windows 加上平铺式窗口管理，新开的窗口自动排满屏幕，全程键盘操作。多屏和大屏用户效率提升明显，配置写在一个 YAML 文件里。", license: "GPL-3.0", stars: 12929, size: "31.4 MB", url: "https://github.com/glzr-io/glazewm" },
    { name: "DbGate", category: "coding", desc: "一个客户端同时管 MySQL、PostgreSQL、SQL Server、MongoDB、Redis 等多种数据库。自带表格编辑、数据对比和导入导出，SQL 和 NoSQL 都能在一处搞定。", license: "GPL-3.0", stars: 7346, size: "128.0 MB", url: "https://github.com/dbgate/dbgate" },
    { name: "Standard Notes", category: "office", desc: "端到端加密的跨平台笔记应用，适合记日记、密码提示这类私密内容。免费版就能多端同步，比普通云笔记更让人放心。", license: "AGPL-3.0", stars: 6682, size: "118.0 MB", url: "https://github.com/standardnotes/app" },
    { name: "Feishin", category: "fun", desc: "给自建音乐库用的桌面播放器，可以连接 Jellyfin 和 Navidrome 服务器。界面接近主流音乐 App，支持歌词、智能歌单和无缝播放。", license: "GPL-3.0", stars: 10229, size: "178.3 MB", url: "https://github.com/jeffvli/feishin" },
    { name: "Auto Dark Mode", category: "system", desc: "按日出日落或自定义时间自动切换 Windows 的深色和浅色主题。还能同时换壁纸、鼠标指针和 Office 主题，比系统自带设置周全得多。", license: "GPL-3.0", stars: 9776, size: "105.6 MB", url: "https://github.com/AutoDarkMode/Windows-Auto-Night-Mode" },
    { name: "Electerm", category: "coding", desc: "集终端、SSH 和 SFTP 于一身的连接工具，左边管文件、右边敲命令。功能接近付费的 Termius 和 MobaXterm，但完全免费。", license: "MIT", stars: 15449, size: "114.2 MB", url: "https://github.com/electerm/electerm" },
    { name: "Ferdium", category: "office", desc: "把 Slack、Teams、Gmail、Notion 等几十个网页应用装进同一个窗口，不用开一堆浏览器标签。它是 Franz 的免费开源分支，没有工作区数量限制。", license: "Apache-2.0", stars: 4747, size: "129.3 MB", url: "https://github.com/ferdium/ferdium-app" },
    { name: "OpenTTD", category: "fun", desc: "经典运输大亨游戏的开源重制版，在地图上修铁路、开航线、经营运输帝国。比原版地图更大，还支持联机和大量模组。", license: "GPL-2.0", stars: 8421, url: "https://github.com/OpenTTD/OpenTTD" }
  ],
  insights: [
    {
      title: "Spotify 用编码智能体，月合并量翻倍",
      summary: "Spotify 用基于 Claude Agent SDK 的后台编码智能体 Honk 处理复杂代码变更，再由 Fleetshift 负责调度。今年 8 月合并的代码变更约 1.7 万个，去年同期约 8100 个，翻了一倍多，返工量没有跟着涨。一次后端 Java 迁移只用了三天。",
      kind: "usage",
      source: "InfoQ（原始数据来自 Spotify 工程博客）",
      asOf: "2026-08",
      url: "https://www.infoq.cn/article/rVqEbaXeaJ91UWlQF4F9"
    },
    {
      title: "AI 帮新手专利律师写稿，撤掉就不灵",
      summary: "NBER 一项三个月的随机对照实验覆盖美国 11 家知识产权律所的 133 名专利律师，其中三分之二可以用谷歌实验室的 AI 助手。有 AI 时，执业不满 7 年的初级律师写出的权利要求质量提升最明显。到了不用 AI 的环节，优势只留在资深律师身上，初级律师反而两极分化。研究者认为先有基本功，才能把 AI 带来的提升变成自己的能力。",
      kind: "jobs",
      source: "The Decoder（原始数据来自 NBER 工作论文，研究由谷歌资助）",
      asOf: "2026-10",
      url: "https://the-decoder.com/ai-makes-junior-patent-attorneys-instantly-better-but-may-quietly-stunt-their-professional-growth/"
    },
    {
      title: "讯飞：大模型复杂任务用户占比升至六成",
      summary: "科大讯飞披露，开放平台开发者已达 1187 万，用大模型做复杂任务的用户占比从不到 10% 升到 60%。在国家能源集团的招标采购中，多个专家智能体分工评标，准确率约 97%。这套能力已服务 50 多家央国企，累计 AI 评审超过 50 万次。",
      kind: "industry",
      source: "InfoQ（原始数据由科大讯飞 10 月 22 日披露）",
      asOf: "2026-10",
      url: "https://www.infoq.cn/news/Lo9TLlRdvy4II38yaex0"
    }
  ]
};
