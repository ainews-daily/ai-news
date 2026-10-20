window.AI_DAILY = window.AI_DAILY || {};
window.AI_DAILY["2026-10-21"] = {
  date: "2026-10-21",
  highlights: [
    "《华尔街日报》看到 Anthropic 招股书草稿：上半年营收 163 亿美元，净亏损 807 亿美元，目标 11 月上市。",
    "DeepSeek 开源内部推理框架 DeepInfer，称单卡每小时收入 38 美元；同一天美国下令联邦文职机构全面移除 DeepSeek。",
    "Google 开源 TorchTPU，PyTorch 代码改一项配置就能跑在 TPU 上，紧跟亚马逊之后冲击英伟达的开发者生态。"
  ],
  items: [
    {
      title: "泄露招股书：Anthropic 上半年亏损 807 亿美元",
      summary: "据《华尔街日报》看到的 S-1 草稿，Anthropic 上半年营收 163 亿美元、净亏损 807 亿美元，其中大部分是非现金费用，第三季度营收据报环比增长 45%，目标 11 月上市。未来几年算力支出可能高达 7500 亿美元，AWS、Google、微软越来越把它当竞争对手，它正转向 Nscale 等第三方数据中心。消息来自 WSJ 单一来源，Anthropic 未回应。",
      category: "industry",
      region: "intl",
      source: "TechCrunch（转述《华尔街日报》）",
      url: "https://techcrunch.com/2026/10/20/anthropics-cloud-partnerships-are-getting-messy/"
    },
    {
      title: "DeepSeek 开源推理框架 DeepInfer",
      summary: "DeepSeek 以 Apache 2.0 协议开源内部大规模推理框架 DeepInfer，支持英伟达 SM100 和华为昇腾 950，首版只支持 V4.1 Flash 的离线推理，KV 缓存、PD 分离等核心模块暂未开源。技术报告称单一集群日均吞吐 155 万亿 Token，单卡每小时收入 38 美元。这个数字是收入而非利润，官方没有公布卡数和成本，外界无法验证。",
      category: "tools",
      region: "cn",
      source: "IT之家",
      url: "https://www.ithome.com/1/015/429.htm"
    },
    {
      title: "Google 开源 TorchTPU，冲击 CUDA 生态",
      summary: "Google 开源原生 PyTorch 后端 TorchTPU，现有 PyTorch 应用改一项配置就能迁到 TPU，Meta、Hugging Face、vLLM、SGLang 参与合作。Hugging Face 实测 Transformers 测试通过率 96.5%。前一天亚马逊刚发布 TorchNeuron，两家云厂商接连冲击英伟达的 CUDA 生态。",
      category: "tools",
      region: "intl",
      source: "TechCrunch",
      url: "https://techcrunch.com/2026/10/20/google-has-joined-amazon-in-attacking-nvidias-stronghold-with-ai-app-developers/"
    },
    {
      title: "美国令联邦文职机构移除 DeepSeek",
      summary: "美国国土安全部公开一项命令，要求联邦文职机构停止采购 DeepSeek 产品并从现有系统中移除，基于其技术开发的第三方产品也在范围内，机构可申请豁免。外交部发言人毛宁回应称，中方反对泛化国家安全概念、把科技经贸问题政治化。这是美国首次在整个联邦民用系统层面封禁一家中国大模型公司。",
      category: "industry",
      region: "cn",
      source: "IT之家",
      url: "https://www.ithome.com/1/015/434.htm"
    },
    {
      title: "OpenAI 收购 Orchestra Bio，加码生物医药",
      summary: "OpenAI 收购 Orchestra Bio，这家公司用 AI 智能体帮生物科技公司处理财务跟踪、临床试验排期等研发运营事务，此前融资约 2000 万美元，交易条款未披露。团队将并入 OpenAI 的生命科学模型 Rosalind 业务，Moderna、诺和诺德已是其客户。头部模型公司正在向垂直行业软件扩张。",
      category: "industry",
      region: "intl",
      source: "TechCrunch",
      url: "https://techcrunch.com/2026/10/20/openai-acquires-startup-orchestra-bio%e2%81%a0-to-beef-up-its-biotech-business/"
    },
    {
      title: "记忆张量开源记忆原生基座模型 MemT 1.0",
      summary: "记忆张量开源 MemT-1.0-Flash（288B 总参数、17B 激活）和 Nano（36B 总参数、3B 激活），在 Transformer 层里并联参数化记忆，生成时直接读写记忆，不必反复把历史塞进上下文。官方称 SWE-bench Verified 成功率从 66.07% 提高到约 69.7%，128K 历史下 Nano 推理速度约为完整上下文方案的 1.86 倍。数据均为厂商自测，官方称仍是预览版。",
      category: "model",
      region: "cn",
      source: "机器之心",
      url: "https://www.163.com/dy/article/L9N161QR0511AQHO.html"
    },
    {
      title: "Meta Muse 分享链接泄密，功能紧急暂停",
      summary: "安全研究人员发现，Muse 的分享链接会把对话标题写进子域名，通过公开的被动 DNS 记录就能批量查出 6800 多个分享，内容包括小企业贷款申请、内部营收复盘和部分银行账号。Meta 已暂停分享功能。泄露范围限于用户主动分享过的对话，这是继擅自发送卖家住址后 Muse 的又一起隐私问题。",
      category: "industry",
      region: "intl",
      source: "Engadget",
      url: "https://www.engadget.com/2292281/meta-suspends-muse-chats-sharing-feature-after-it-left-private-details-exposed/"
    },
    {
      title: "蚂蚁百灵开源 Ming-3.0 语音系列五款模型",
      summary: "蚂蚁百灵一次开源五款语音模型，覆盖语音合成、音频理解与对话、语音识别，包括 Ming-3.0-tts-0.5B 和 Ming-3.0-audio-flash 等。TTS 可以用文字描述设计音色，并指定情绪、重音和节奏，音频模型能直接处理长音频并输出结构化结果。官方没有公布评测数据，权重已放到 Hugging Face。",
      category: "model",
      region: "cn",
      source: "IT之家",
      url: "https://www.ithome.com/1/015/117.htm"
    },
    {
      title: "SpaceX 财报：AI 板块季度营收 75 亿美元",
      summary: "SpaceX 向 SEC 提交的第三季度文件显示，包含 Grok、Cursor 和算力云的“Super Intelligence”板块营收 75 亿美元，约占总营收的 52%，利润 4.31 亿美元。马斯克称 2027 年底年化经常性收入将达 5000 亿到 1 万亿美元，第四季度资本支出预计 350 亿到 400 亿美元。这是合并后的 xAI 业务首次单独披露规模。",
      category: "industry",
      region: "intl",
      source: "TechCrunch",
      url: "https://techcrunch.com/2026/10/20/spacexs-ai-business-is-beating-expectations/"
    },
    {
      title: "Mistral 发布 Voxtral 3 全套语音智能体",
      summary: "Mistral 发布 Voxtral 3，包括转写模型 Small、Mini 和延迟低于 500 毫秒的 Realtime，可克隆声音的语音合成 Speech 3，以及基于 LiveKit 的语音智能体 SDK。批量转写最低 0.0035 美元每分钟，支持欧洲托管或自行部署。同一天 ElevenLabs 也发布了实时语音对话模型，语音智能体成了新的竞争焦点。",
      category: "model",
      region: "intl",
      source: "Mistral 官方",
      url: "https://mistral.ai/news/voxtral-3/"
    },
    {
      title: "九章云极让 GLM-5.3 解码提速 3.41 倍",
      summary: "九章云极为 GLM-5.3 做了推测解码方案 Alaya-DFlash2，在 8 张 H200 上把单并发解码速度从每秒 84.5 个 Token 提高到 288.2 个。并发越高收益越小，64 并发时总吞吐只比原生高 44.9%。权重已在 Hugging Face 开放，目前只有厂商自测数据。",
      category: "research",
      region: "cn",
      source: "InfoQ",
      url: "https://www.infoq.cn/article/mJ5udryLFwjov1pk4Dsq"
    },
    {
      title: "Claude 设计出结合蝎毒的蛋白，17 个达标",
      summary: "Anthropic 让 Claude 针对五种蝎子神经毒素生成约 30 万个蛋白设计，挑出 211 个送实验室验证，17 个达到预设结合标准，其中 2 个对 Cn2 毒素的亲和力达到个位数纳摩尔级。Anthropic 说明这不是抗毒血清，还没做细胞中和或动物实验。全部设计和数据已公开。",
      category: "research",
      region: "intl",
      source: "Anthropic 官方",
      url: "https://www.anthropic.com/research/claude-scorpion-toxin-binder-design"
    },
    {
      title: "小红书 DoSA 把稀疏注意力首字延迟降近半",
      summary: "小红书 Dots 团队针对 DeepSeek-V3.2 式稀疏注意力的索引器做了无损加速，用数学上下界提前排除不可能进入 Top-K 的候选，结果和原方法完全一致。在约 100 万 Token 的上下文下，DeepSeek-V3.2 的首 Token 延迟降低约 48%，GLM-5.2 降低约 46%。代码已开源，目前只有机器之心一家报道。",
      category: "research",
      region: "cn",
      source: "机器之心",
      url: "https://www.163.com/dy/article/L9MBKTQB0511AQHO.html"
    },
    {
      title: "微软撤下文件资源管理器里 8 项 Copilot 操作",
      summary: "微软管理中心文档显示，Windows 11 右键菜单里依赖 OneDrive 的摘要、比较文件、解释图片等 8 项 Copilot 操作，将从 11 月中旬起陆续撤下，12 月前清空。这是微软自 3 月以来持续收缩 Windows 里 Copilot 入口的又一步。消息来自 Windows Latest 单一来源，微软没有单独发布公告。",
      category: "tools",
      region: "intl",
      source: "Windows Latest",
      url: "https://www.windowslatest.com/2026/10/21/microsoft-is-now-scaling-back-copilot-in-windows-11-amid-microslop-backlash-pulling-8-ai-actions-from-file-explorer-and-calling-it-simplifying/"
    },
    {
      title: "进迭时空发布 46 核 RISC-V 服务器 CPU",
      summary: "进迭时空在 RISC-V 中国峰会上发布服务器 CPU V100，由 6 个香山昆明湖性能核和 40 个自研能效核组成，支持 8 通道 DDR5 和 52 条 PCIe Gen5，双路可扩展到 92 核。厂商称这是首颗完整符合 RISC-V 服务器规范的通用芯片，配套智算服务器已验证昆仑芯等国产加速卡。性能和兼容性目前都是厂商说法。",
      category: "industry",
      region: "cn",
      source: "IT之家",
      url: "https://www.ithome.com/1/015/491.htm"
    },
    {
      title: "商汤大装置日均 Token 服务量达 6 万亿",
      summary: "商汤大装置 CTO 宣善明披露，平台日均 Token 服务量约 6 万亿，7 月 WAIC 时是 2.42 万亿，目标第四季度达到日均 10 万亿。商汤在临港建了万卡级异构推理集群，用国产卡做 Prefill、高端 GPU 做 Decode。推理需求的快速增长正在推动国产算力和海外 GPU 混合部署。",
      category: "industry",
      region: "cn",
      source: "量子位",
      url: "https://www.qbitai.com/2026/10/504188.html"
    }
  ],
  corp: [
    {
      title: "双 11 开售夜“淘宝崩了”，淘宝称已恢复",
      summary: "10 月 20 日晚天猫双 11 现货开售，大量用户反映淘宝 App 无法下单或付款，系统提示“平台优惠金额发生变化”，“淘宝崩了”登上热搜。淘宝相关负责人称“现已恢复”，客服称是大促活动火爆，建议稍后再试。官方没有说明原因和影响范围。",
      kind: "quality",
      company: "淘宝（阿里巴巴）",
      source: "新浪科技（转红星资本局）",
      url: "https://finance.sina.com.cn/tech/roll/2026-10-21/doc-inivwyqz7720861.shtml"
    },
    {
      title: "字节 Seed 模型评测负责人黄文灏离职",
      summary: "多家媒体 10 月 19 日确认，零一万物联合创始人、字节 Seed 模型评测负责人黄文灏已于近期离职，他在字节工作约两年。据界面新闻统计，过去一年 Seed 团队流失近 70 名技术人才。字节没有公开回应，黄文灏的去向尚无确切消息。",
      kind: "org",
      company: "字节跳动",
      source: "21世纪经济报道",
      url: "https://m.21jingji.com/article/20261020/herald/4d220dab0ccf72e0ac7338f42fbcbc6e.html"
    },
    {
      title: "汇源集团弃用“汇源”商标，北京汇源称无权切割",
      summary: "10 月 19 日，汇源集团宣布不再生产带“汇源”商标的果汁，终止相关代工合同，改推新品牌“咱家果源”，理由是重整投资人上海文盛未履行投资承诺。商标持有方北京汇源当晚声明，自己是“汇源”商标唯一合法权利人，汇源集团无权宣称“切割”。上海文盛拒绝接受采访。",
      kind: "dispute",
      company: "汇源集团、北京汇源",
      source: "21世纪经济报道",
      url: "https://www.21jingji.com/article/20261020/herald/eea58250ac0cc224aabb1c9c2a47e416.html"
    },
    {
      title: "宁德时代前三季度净利 645 亿元",
      summary: "宁德时代前三季度营收 4421.37 亿元、同比增长 56.19%，归母净利润 645.3 亿元、同比增长 31.6%，但第三季度净利增速 14.54%，是近两年最低。财报发布前，摩根大通把 H 股评级降至“中性”，H 股当天收跌 6.58%。公司同时推出 200 亿至 400 亿元的 A 股回购计划。",
      kind: "business",
      company: "宁德时代",
      source: "新浪财经",
      url: "https://finance.sina.com.cn/stock/hkstock/2026-10-20/doc-inivvxcr5779699.shtml"
    },
    {
      title: "小天才手表被指“封闭社交”，客服回应",
      summary: "“小天才手表封闭社交被质疑”10 月 20 日登上热搜，有家长称孩子不用小天才就加不进同学的社交圈，只能被迫购买。小天才客服回应称，不支持添加其他品牌手表为好友，但可以存为联系人正常通话，不装微信、QQ 是为了防诈骗。目前只有客服说法，公司没有发正式声明。",
      kind: "dispute",
      company: "小天才（步步高）",
      source: "澎湃新闻",
      url: "https://www.thepaper.cn/newsDetail_forward_34291495"
    },
    {
      title: "西班牙 Orange 要求华为写入“被禁就赔”条款",
      summary: "据西班牙《扩展报》报道，Orange España 要求在与华为的新合同中加入条款：若西班牙或欧盟禁用中国设备，华为须按账面净值返还需拆除设备的款项。背景是欧盟正在修订的《网络安全法案》草案拟限制“高风险供应商”，华为设备约占 Orange 移动网络的 43%。华为和 Orange 均未回应，中文报道都来自这一家原始来源。",
      kind: "dispute",
      company: "华为",
      source: "观察者网（凤凰网转载）",
      url: "https://news.ifeng.com/c/8xNPD52dHME"
    },
    {
      title: "坚朗五金创始人白宝鲲辞任，胞妹接棒",
      summary: "坚朗五金 10 月 20 日晚公告，创始人、实控人白宝鲲因身体原因辞去董事长、总裁等职务，转任名誉董事长，其妹白宝萍接任董事长兼总裁。公司市值已从 2021 年高点约 765 亿元跌到约 54 亿元，上半年亏损扩大。",
      kind: "org",
      company: "坚朗五金",
      source: "每日经济新闻",
      url: "https://www.nbd.com.cn/articles/2026-10-20/4610117.html"
    },
    {
      title: "理想推电池保障：自研电池自燃报废赔新车",
      summary: "理想汽车在 10 月 20 日的 Power Day 上发布“连山”电动技术体系，同时推出电池保障计划：因自研电池质量问题自燃导致报废的，赔付同配置新车。碰撞或底盘剐蹭起火导致报废的，补足车损险保额与实际赔付之间的差额。计划仅适用于首任车主的非营运车辆，还要求按时官方维保、足额投保车损险。",
      kind: "business",
      company: "理想汽车",
      source: "新浪汽车",
      url: "https://k.sina.com.cn/article_7879848900_1d5acf3c406803cf60.html"
    },
    {
      title: "高通内部信：11 月起全球按绩效裁员",
      summary: "路透社独家披露，高通 CEO 安蒙在内部备忘录中表示，公司将在年度绩效评估后进行全球裁员，11 月开始通知，目的是建立“更强的绩效文化”。裁员规模没有披露，消息目前只有路透一家来源。",
      kind: "layoff",
      region: "intl",
      company: "高通",
      source: "路透社（US News 转载）",
      url: "https://money.usnews.com/investing/news/articles/2026-10-20/exclusive-qualcomm-to-cut-jobs-worldwide-in-performance-focused-layoffs-internal-memo-shows"
    },
    {
      title: "SpaceX 和特斯拉成立特别委员会评估合并",
      summary: "马斯克在 SpaceX 三季度财报电话会上说，两家公司董事会已各自成立由独立董事组成的特别委员会，讨论合并的可能性。他本人因利益冲突不参与谈判，并表示交易不应被视为板上钉钉。任何交易都需要获得特斯拉全部流通股 50% 的支持。",
      kind: "org",
      region: "intl",
      company: "SpaceX、特斯拉",
      source: "TechCrunch",
      url: "https://techcrunch.com/2026/10/20/spacex-and-tesla-boards-form-special-committees-to-review-merger/"
    },
    {
      title: "谷歌云伦敦故障，英国多家银行服务中断",
      summary: "10 月 20 日，谷歌云伦敦区域发生故障，劳埃德、哈利法克斯、汇丰、Revolut 等银行的线上服务中断。谷歌云向受影响用户道歉，称服务正在恢复，Revolut 表示客户资金和数据安全。故障原因没有官方说明。",
      kind: "quality",
      region: "intl",
      company: "Google",
      source: "美联社（ABC News 转载）",
      url: "https://abcnews.com/Business/wireStory/google-cloud-outage-hits-uk-banks-137407567"
    }
  ],
  voices: [
    {
      title: "黄仁勋劝欧洲：别再对 AI 过度犹疑",
      summary: "黄仁勋在柏林与德国总理默茨讨论 AI 监管时说，“如果这个行业无法蓬勃发展，那没什么可监管的”，呼吁“给德国一个机会，给这个行业一个机会”。他还表示，德国这样技术顶尖的国家在 AI 上远远落后让他痛心，症结在于想得太多。",
      person: "黄仁勋",
      role: "英伟达 CEO",
      region: "intl",
      said: "2026-10-19",
      source: "IT之家",
      url: "https://www.ithome.com/1/015/603.htm"
    },
    {
      title: "皮查伊：谷歌决不放弃前沿，算力人人都缺",
      summary: "皮查伊在 Big Technology 播客上否认谷歌在收缩研究野心，说“我们非常坚定地要站在前沿，这在我们的 DNA 里”。他承认算力紧缺，“每个人都希望手里的算力是计划的两倍”，谷歌云也在为此牺牲短期收入。他还坦言“OpenAI 也推动了我们这家公司”。",
      person: "Sundar Pichai",
      role: "Google / Alphabet CEO",
      region: "intl",
      said: "2026-10-20",
      source: "Big Technology",
      url: "https://www.bigtechnology.com/p/sundar-pichai-googles-frontier-imperative"
    },
    {
      title: "马斯克：很多人会被超级智能“一击拿下”",
      summary: "马斯克在 X 上发帖：“So many people are going to get one-shotted by super persuasive super intelligences and I might be one of them”。“one-shotted”是游戏用语，指一击秒杀，这里指人会被极具说服力的超级智能瞬间说服，他认为自己也可能是其中之一。他没有进一步解释。",
      person: "埃隆·马斯克",
      role: "特斯拉、SpaceX CEO",
      region: "intl",
      said: "2026-10-19",
      source: "马斯克 X 帖子",
      url: "https://x.com/elonmusk/status/2112070071401238607"
    },
    {
      title: "Dylan Field：MCP 不是完美的协议",
      summary: "Figma 联合创始人 Dylan Field 在 Figma 印度 Config 大会的媒体吹风会上说，“MCP 不是完美的协议，还有大量改进空间”。他认为 MCP 对前沿 AI 实验室更有利，开放的数据越多，被滥用的风险越大。",
      person: "Dylan Field",
      role: "Figma 联合创始人兼 CEO",
      region: "intl",
      said: "2026-10-20",
      source: "TechCrunch",
      url: "https://techcrunch.com/2026/10/20/figma-co-founder-dylan-field-thinks-mcp-is-not-a-perfect-protocol/"
    },
    {
      title: "周小川：要预防 AI 投资失败引发金融危机",
      summary: "周小川在 2026 外滩年会“AI 与生产率变革”圆桌上说，AI 演进中必然有的投资成功、有的失败。他警告“一旦其中一部分失败，就可能引发金融动荡，并酿成危机”，主张“我们应当开展研究并做好预案”。",
      person: "周小川",
      role: "中国人民银行原行长",
      region: "cn",
      said: "2026-10-20",
      source: "界面新闻（新浪财经转载）",
      url: "https://finance.sina.com.cn/jjxw/2026-10-20/doc-inivwitp6441873.shtml"
    },
    {
      title: "周鸿祎：支持国产芯片，也要算清算力账",
      summary: "周鸿祎发视频回应“支持国产芯片”和“引进英伟达 H200”是否矛盾，称“中国AI，有笔帐必须算清楚”。他认为中国 AI 不能只靠热血，条件允许时应适度引进先进算力，同时坚持支持国产芯片。他还指出 AI 产业链的利润大多被英伟达、台积电和存储厂商拿走。",
      person: "周鸿祎",
      role: "360 集团创始人",
      region: "cn",
      said: "2026-10-20",
      source: "周鸿祎微博",
      url: "https://www.sina.cn/weibo/detail/5356062330848710.html"
    },
    {
      title: "尹同跃：奇瑞是“披着车企马甲”的 AI 公司",
      summary: "奇瑞董事长尹同跃在 2026 奇瑞全球创新大会上称，奇瑞是一家“披着车企马甲”的 AI 科技公司。他说“未来真正淘汰的是那些拒绝拥抱AI的人、不敢用AI重构自己的行业和企业”，并把当下比作当年面对第一台奔驰汽车的养马人和马车作坊老板。奇瑞同场发布了汽车垂域大模型 CheryMind。",
      person: "尹同跃",
      role: "奇瑞汽车董事长",
      region: "cn",
      said: "2026-10-20",
      source: "IT之家",
      url: "https://www.ithome.com/1/015/199.htm"
    }
  ],
  pricing: [
    {
      title: "Voxtral 3 定价：批量转写每分钟 0.0035 美元",
      summary: "Mistral 公布 Voxtral 3 价格：Mini 批量转写 0.0035 美元每分钟，Small 0.004 美元，实时转写 0.008 美元，语音合成 13 美元每百万字符。语音智能体 SDK 搭配 Mistral Small 4 是 0.04 美元每分钟，搭配其他推理模型是 0.08 美元。这是新产品定价，不影响老用户。",
      product: "Mistral Voxtral",
      change: "new",
      source: "Mistral 官方",
      url: "https://mistral.ai/news/voxtral-3/"
    },
    {
      title: "ElevenLabs 实时语音模型每分钟 0.08 美元",
      summary: "ElevenLabs 推出语音对语音模型 Eleven Realtime v1 Max 和 v1 Mini，按连接时长加 Token 计费，连接音频两款都是每分钟 0.08 美元，超出并发上限后每分钟 0.16 美元。Token 价格方面，Mini 输入 0.2 美元、输出 6 美元每百万，Max 输入 1.8 美元、输出 9 美元每百万。所有套餐的 Token 价相同。",
      product: "ElevenLabs",
      change: "new",
      source: "ElevenLabs 官方定价页",
      url: "https://elevenlabs.io/pricing/api"
    }
  ],
  design: [
    {
      title: "Lightroom 手机版一键让闭眼照片“睁眼”",
      summary: "Lightroom 手机版（iOS、iPadOS、安卓）新增 Open Eyes 快捷操作，能识别单人照或合影里闭眼的人，用生成式 AI 一键修复，并参考图库里同一人的其他照片匹配眼睛颜色和形状。免费用户可以试用两次，之后需要订阅。",
      kind: "trend",
      price: "免费试用 2 次",
      source: "Adobe 官方博客",
      url: "https://blog.adobe.com/en/publish/2026/10/19/give-your-photos-a-second-chance-with-open-eyes-in-lightroom-on-mobile"
    },
    {
      title: "MOSS-Image 开源：擅长中文文字和排版",
      summary: "OpenMOSS 开源 50 亿参数的文生图模型 MOSS-Image，主打中英文文字渲染，还能用 JSON 按坐标框排版，适合做海报和信息图。采用 Apache-2.0 协议，ComfyUI 首日支持。它没有 Windows 安装包，需要会用 ComfyUI 才能本地跑。",
      kind: "trend",
      price: "免费",
      stars: 1158,
      source: "GitHub",
      url: "https://github.com/OpenMOSS/MOSS-Image"
    },
    {
      title: "Blender 5.2 LTS：免费的 3D 全家桶",
      summary: "开源的 3D 建模、渲染、动画、剪辑一体化软件，5.2 是长期支持版，维护到 2028 年 7 月。新版加入实验性的几何节点物理（毛发、布料）和远程资产库，做产品渲染、图标立体化都够用。",
      kind: "tool",
      price: "免费",
      stars: 21111,
      source: "Blender 官方",
      url: "https://www.blender.org/download/"
    },
    {
      title: "Inkscape：开源的 Illustrator 替代",
      summary: "原生使用 SVG 格式的开源矢量软件，适合画图标、插画和印刷稿，导出的 SVG 可以直接给前端用。当前稳定版是 1.4.4，Windows 有安装包。",
      kind: "tool",
      price: "免费",
      source: "Inkscape 官方",
      url: "https://inkscape.org/release/"
    },
    {
      title: "Kdenlive：开源多轨视频剪辑",
      summary: "KDE 出品的非线性剪辑软件，有 Windows 安装包，自带字幕、调色和代理剪辑。做动效演示、作品集视频足够用，完全免费没有水印。",
      kind: "tool",
      price: "免费",
      source: "Kdenlive 官方",
      url: "https://kdenlive.org/download/"
    },
    {
      title: "OpenCut：浏览器里的开源剪映",
      summary: "MIT 协议的开源视频剪辑器，网页上就能用，素材留在本地不上传。还在早期，适合尝鲜，别直接用在正式项目，官方目前建议用 classic 版，新版正在重写。",
      kind: "tool",
      price: "免费",
      stars: 95491,
      source: "GitHub",
      url: "https://github.com/opencut-app/opencut"
    },
    {
      title: "Tabler Icons：5000 多个免费线性图标",
      summary: "MIT 协议的线性图标库，网页版可以直接搜索并复制 SVG，也提供 React、Vue 组件。风格统一，描边粗细可调，商用免费。",
      kind: "tool",
      price: "免费",
      stars: 22393,
      source: "Tabler",
      url: "https://tabler.io/icons"
    },
    {
      title: "Simple Icons：3000 多个品牌 Logo",
      summary: "收录 3000 多个知名品牌的 SVG 图标，每个都附官方品牌色值，做登录按钮、合作方墙时很省事。CC0 协议，商用不用署名。",
      kind: "tool",
      price: "免费",
      stars: 26046,
      source: "Simple Icons",
      url: "https://simpleicons.org"
    },
    {
      title: "Image Preview：VS Code 里代码旁直接看图",
      summary: "在 VS Code 行号旁显示代码里引用的图片缩略图，鼠标悬停可看大图，还原设计稿时不用来回切文件夹。VS Code 市场装机约 429 万，评分 4.83。",
      kind: "plugin",
      price: "免费",
      source: "VS Code 插件市场",
      url: "https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-gutter-preview"
    },
    {
      title: "SVG 插件：在 VS Code 里预览和编辑 SVG",
      summary: "为 SVG 文件提供实时预览、代码补全和导出 PNG，核对切图和图标时很方便。VS Code 市场装机约 251 万，评分 4.66。",
      kind: "plugin",
      price: "免费",
      source: "VS Code 插件市场",
      url: "https://marketplace.visualstudio.com/items?itemName=jock.svg"
    },
    {
      title: "LinkedIn 会员买 CC Pro 年付多送 2 个月",
      summary: "LinkedIn Premium 会员通过 LinkedIn 购买 12 个月 Creative Cloud Pro，可额外获得 2 个月。活动截至 2026 年 11 月 12 日，每人限一次，到期按当时价格自动续费。",
      kind: "deal",
      price: "多送 2 个月",
      source: "Adobe 官方活动条款",
      url: "https://www.adobe.com/cc-shared/fragments/terms-conditions-modals/campaigns/linkedin-ccsn-terms-condition"
    }
  ],
  apps: [
    { name: "RustDesk", category: "system", desc: "开源远程桌面，可替代 TeamViewer 和向日葵，免费使用没有商用弹窗。支持自建中继服务器，数据不经过第三方。", license: "AGPL-3.0", stars: 126441, size: "24.7 MB", url: "https://github.com/rustdesk/rustdesk" },
    { name: "PeaZip", category: "system", desc: "开源压缩软件，能打开 200 多种压缩格式，支持 AES 加密和安全删除。界面比 7-Zip 现代，有免安装版。", license: "LGPL-3.0", stars: 7996, size: "10.9 MB", url: "https://github.com/peazip/PeaZip" },
    { name: "LibreHardwareMonitor", category: "system", desc: "实时查看 CPU、显卡、硬盘的温度、频率和风扇转速，不用装厂商的全家桶。开源免费，还能当库给其他程序调用。", license: "MPL-2.0", stars: 9248, size: "6.3 MB", url: "https://github.com/LibreHardwareMonitor/LibreHardwareMonitor" },
    { name: "Mem Reduct", category: "system", desc: "一键清理系统内存缓存，也能设定阈值自动清理，适合内存小的老电脑。安装包不到 1 MB，常驻托盘几乎不占资源。", license: "GPL-3.0", stars: 10898, size: "0.4 MB", url: "https://github.com/henrypp/memreduct" },
    { name: "Starship", category: "coding", desc: "给 PowerShell、cmd、Bash 等终端换上信息丰富的提示符，直接显示 Git 分支、语言版本和命令耗时。Rust 写成，启动快，所有 shell 共用一份配置。", license: "ISC", stars: 60362, size: "5.7 MB", url: "https://github.com/starship/starship" },
    { name: "Oh My Posh", category: "coding", desc: "终端提示符美化工具，对 Windows 和 PowerShell 的原生支持最好。自带上百套主题，可以用 winget 一键安装。", license: "MIT", stars: 23613, size: "5.9 MB", url: "https://github.com/JanDeDobbeleer/oh-my-posh" },
    { name: "Clink", category: "coding", desc: "给 Windows 自带的 cmd 加上 Bash 那样的行编辑、历史搜索和 Tab 补全。不用换终端，老脚本照样能跑。", license: "GPL-3.0", stars: 5549, size: "2.7 MB", url: "https://github.com/chrisant996/clink" },
    { name: "Anki", category: "office", desc: "按间隔重复算法安排复习的记忆卡片软件，背单词、备考都能用。卡片支持图片、音频和公式，插件生态丰富，跨端同步免费。", license: "AGPL-3.0", stars: 32155, size: "191.9 MB", url: "https://github.com/ankitects/anki" },
    { name: "Pot", category: "office", desc: "划词翻译和截图 OCR 二合一，一个快捷键调出。可以同时对比多个翻译引擎和大模型的结果，比单一引擎的翻译工具灵活。", license: "GPL-3.0", stars: 19365, size: "32.5 MB", url: "https://github.com/pot-app/pot-desktop" },
    { name: "Text-Grab", category: "office", desc: "框选屏幕任意区域就能把文字复制出来，不用先截图再识别。调用 Windows 自带 OCR，离线可用，还能提取表格和二维码。", license: "MIT", stars: 5046, size: "91.8 MB", url: "https://github.com/TheJoeFin/Text-Grab" },
    { name: "GoldenDict-ng", category: "office", desc: "离线词典查询工具，能同时挂载 MDict、StarDict 等多种词库和在线词典。它是老 GoldenDict 的活跃延续版，支持划词取词。", license: "GPL-3.0", stars: 3101, size: "145.9 MB", url: "https://github.com/xiaoyifang/goldendict-ng" },
    { name: "RetroArch", category: "fun", desc: "一个前端统一管理几十种复古主机模拟器核心，存档、手柄、滤镜只需设置一次。比逐个安装单机模拟器省事得多。", license: "GPL-3.0", stars: 14388, url: "https://www.retroarch.com/?page=platforms" },
    { name: "PCSX2", category: "fun", desc: "PS2 模拟器，能把老游戏升到高分辨率并加宽屏补丁运行。兼容性在同类里最好，2.x 版换上了新界面。", license: "GPL-3.0", stars: 15872, size: "44.6 MB", url: "https://github.com/PCSX2/pcsx2" },
    { name: "Cemu", category: "fun", desc: "Wii U 模拟器，《塞尔达传说：旷野之息》等游戏在 PC 上能高帧率运行。开源后由社区持续维护，解压即用。", license: "MPL-2.0", stars: 10011, size: "25.2 MB", url: "https://github.com/cemu-project/Cemu" },
    { name: "Steam ROM Manager", category: "fun", desc: "把模拟器游戏批量加进 Steam 库并自动配好封面，之后用 Steam 大屏模式和手柄统一启动。和 RetroArch 搭配最顺手。", license: "GPL-3.0", stars: 2590, size: "121.1 MB", url: "https://github.com/SteamGridDB/steam-rom-manager" }
  ],
  insights: [
    {
      title: "人社部：新职业发布改为常态化，AI 是重点",
      summary: "人社部在 10 月 10 日国新办发布会上表示，将建立常态化的新职业征集发布机制，重点面向人工智能、数字经济、绿色低碳和现代服务业。“十五五”期间计划制定或修订 200 多个国家职业标准，职业院校要随之调整专业设置。“十四五”期间共发布 72 个新职业、近 100 个新工种，人工智能训练师等已纳入职业分类大典。",
      kind: "jobs",
      source: "科技日报（国新办发布会）",
      asOf: "2026-10",
      url: "https://www.stdaily.com/web/gdxw/2026-10/10/content_594029.html"
    },
    {
      title: "三家店的加盟商用 ChatGPT 对账省时 94%",
      summary: "美国新墨西哥州加盟商 Ted Taylor 经营三家 Schlotzsky's 和 Cinnabon 联名店，用 ChatGPT Work 处理月度现金对账，耗时减少 94%。定价分析从 5 天缩短到 1 至 2 小时，每次算工资节省 4 小时。小微餐饮也开始用通用 AI 做财务后台，但这些数据来自 OpenAI 自己发布的客户案例。",
      kind: "usage",
      source: "OpenAI 客户案例",
      asOf: "2026-10",
      url: "https://openai.com/index/ted-taylor-restaurant"
    }
  ]
};
