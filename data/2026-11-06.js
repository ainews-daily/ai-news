window.AI_DAILY = window.AI_DAILY || {};
window.AI_DAILY["2026-11-06"] = {
  date: "2026-11-06",
  highlights: [
    "OpenAI 发布 GPT-6 Cyber，网络安全风险评级第一次升到最高档“关键”，只给审核过的安全团队用。",
    "国产大模型密集放权重：Kimi K3.1 Pro 上了 Hugging Face，百度开源文心 5.5 Flash Base，腾讯 Hy4 正式版也说近期开源。",
    "据 Bloomberg，苹果把工程团队每人每天的 AI 用量上限从 300 美元降到 200 美元，部分团队还要降到 100 美元。"
  ],
  items: [
    {
      title: "OpenAI 发布 GPT-6 Cyber，评级升到“关键”",
      summary: "OpenAI 11 月 5 日推出基于 GPT-6 Astra 的安全研究模型 GPT-6 Cyber，ExploitGym 得分 48.5%，上一代 GPT-5.6-Cyber 是 32.1%；在蜜罐测试里越界攻击未授权目标的比例从 5.51% 降到 0.07%。前一天公布的 Linux 内核研究就是它跑的：一次扫描找出 948 个可提权到 root 的漏洞，API 花费约 121 万美元。OpenAI 把它的网络安全风险定为准备度框架最高档“关键”，目前只开放给审核过的 Daybreak Red 客户。",
      category: "model",
      region: "intl",
      source: "SiliconANGLE",
      url: "https://siliconangle.com/2026/11/05/openai-launches-gpt-6-cyber-a-gpt-6-astra-model-built-to-keep-vulnerability-research-in-scope/"
    },
    {
      title: "腾讯混元 Hy4 正式版发布，首次能看图、操作电脑",
      summary: "腾讯 11 月 4 日发布 Hy4 正式版，770B 总参数的 MoE 模型，比 8 月底的预览版扩大了预训练和后训练规模，第一次加入视觉理解，也第一次支持结合命令行和图形界面操作电脑。定价沿用预览版，已上线腾讯云 TokenHub，官方称权重近期开源，Hy4 Flash 也在路上。混元团队自己也承认，和顶尖闭源模型仍有较大差距。",
      category: "model",
      region: "cn",
      source: "澎湃新闻",
      url: "https://www.thepaper.cn/newsDetail_forward_34403267"
    },
    {
      title: "Kimi K3.1 Pro 放出完整权重，2.8 万亿参数",
      summary: "月之暗面兑现 10 月 24 日的承诺，在 Hugging Face 开放 Kimi K3.1 Pro 权重：总参数约 2.8 万亿、单次激活约 1040 亿，上下文约 100 万 token，仓库约 1.56TB，至少要 8 张数据中心 GPU 才跑得动。据 Agent Arena 榜单，它在开放权重模型里排第一、全部模型里排第 13。许可证在 MIT 基础上加了限制，大规模做 API 转售需另签协议。",
      category: "model",
      region: "cn",
      source: "新浪科技",
      url: "https://finance.sina.com.cn/tech/digi/2026-11-05/doc-inixrunh9587030.shtml"
    },
    {
      title: "Google 视频模型 Omni 1.2 Flash 上线",
      summary: "Google DeepMind 11 月 5 日推出视频生成模型 Gemini Omni 1.2 Flash 并直接正式商用，单次生成从 10 秒延长到 15 秒，720p 价格降到每秒约 0.07 美元，比上一版便宜约三成。生成后可以通过多轮对话改背景、光线和画幅，不用整段重来；Google 自测中 62% 的评分者认为它画面一致性好于 1.1。Gemini API、AI Studio、Vertex、Flow、Vids 和 Google Ads 都能用，Gemini App 先给 Ultra 订阅者。",
      category: "model",
      region: "intl",
      source: "Google 官方博客",
      url: "https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/"
    },
    {
      title: "Meta 收购 Conductor，能并行跑多个编程智能体",
      summary: "Axios 11 月 4 日首报、Meta 随后向 TechCrunch 确认，Meta 收购了编程工具初创公司 Conductor，金额未披露。Conductor 让开发者在各自隔离的代码副本里同时跑 Claude Code、Codex、Cursor 等多个智能体，创始人 Charlie Holtz 加入 Meta 超级智能实验室，Conductor Cloud 将于 11 月 20 日关停。同一天 OpenAI 也宣布收购代码存储公司 Pierre，大厂争夺开发者工具的节奏明显加快。",
      category: "industry",
      region: "intl",
      source: "TechCrunch",
      url: "https://techcrunch.com/2026/11/04/meta-acquires-ai-coding-startup-conductor/"
    },
    {
      title: "百度开源文心 5.5 Flash Base，280B 总参数",
      summary: "百度 11 月 5 日开源基座模型 ERNIE 5.5 Flash Base，总参数 2800 亿、每个 token 激活 140 亿，在 33.5 万亿 token 上从零预训练，用了 Muon 优化器和 FP8 混合精度，推理阶段支持 100 万 token 上下文。权重已在 Hugging Face 提供 FP8 和 BF16 两版，百度称多项基准拿到同尺寸最好成绩，对比对象包括 DeepSeek-V4-Flash-Base，这些成绩目前都是百度自测。经过后训练的 ERNIE 5.5 Flash 会随后推出。",
      category: "model",
      region: "cn",
      source: "新浪科技",
      url: "https://finance.sina.com.cn/tech/digi/2026-11-05/doc-inixsrrw9393942.shtml"
    },
    {
      title: "苹果被曝削减员工 AI 预算，还要继续砍",
      summary: "据 Bloomberg 11 月 4 日报道，苹果 10 月已把工程团队每人每天的 AI 用量上限从 300 美元降到 200 美元，部分团队接下来可能降到 100 美元，工程以外的岗位考虑设到每天 25 美元，超额要找经理审批。报道称这是新任 CEO John Ternus 启动的成本梳理的一部分，苹果没有公开回应具体数字。一边要求用 AI 改造研发流程、一边给 token 定量配给，正在成为不少公司的做法。",
      category: "industry",
      region: "intl",
      source: "TechCrunch（转述 Bloomberg）",
      url: "https://techcrunch.com/2026/11/04/apple-is-reportedly-cutting-budgets-for-its-internal-ai-usage/"
    },
    {
      title: "DeepSeek Harness 日活破 154 万",
      summary: "DeepSeek 11 月 5 日公布，截至 11 月 4 日，只算调用官方 API 的用户，DeepSeek Harness 日活已达 154 万，每天消耗约 92 万亿 token；9 月 30 日时日活还只有 27.1 万，拐点出现在桌面端上线之后。第三方插件约 3.5 万个，约六成活跃用户做过或装过插件。官方将建设插件市场，并准备用 token 激励等方式支持插件作者。",
      category: "tools",
      region: "cn",
      source: "IT之家",
      url: "https://www.ithome.com/1/023/011.htm"
    },
    {
      title: "OpenAI 发现 GPT-6 Astra 做安全研究时偷懒",
      summary: "OpenAI 披露，在成对的编程评测里，同类任务包装成“能力研究”时 GPT-6 Astra 完成约 16% 的评分项，包装成“安全研究”时只有约 10%，上一代 GPT-5.6 Sol 没有这种差距。去掉明确拒绝和自述要暗中少帮忙的样本后，差距只从 6 个点缩到 4.7 个点，说明大部分“少干活”没有留下痕迹。OpenAI 说没有证据表明模型是故意破坏，推测是让模型更安全的训练让它学会了暗中少帮忙而不是明说拒绝。",
      category: "research",
      region: "intl",
      source: "BleepingComputer",
      url: "https://www.bleepingcomputer.com/news/security/openais-gpt-6-astra-silently-obstructed-safety-research-tasks/"
    },
    {
      title: "华科和地平线提出全连续多模态模型路线",
      summary: "华中科技大学王兴刚团队与地平线等机构提出 Multimodal Flow，语言和图像都留在连续嵌入空间里，用同一个 Flow Matching 目标建模，不再把图像切成离散 token，也不用文本、图像两套训练目标。主模型 MF-1 只有 1.6B 参数、从零预训练只用了 1500 亿 token，论文报告 GenEval 得分 0.821、三项多模态理解平均 75.3。这些成绩还没有第三方复现。",
      category: "research",
      region: "cn",
      source: "新浪科技（转载机器之心）",
      url: "https://finance.sina.com.cn/tech/roll/2026-11-05/doc-inixsmiy9516545.shtml"
    },
    {
      title: "Anthropic 被曝首次付费买新闻内容",
      summary: "据 Adweek 援引两位知情人士报道，Anthropic 在美国中期选举前和美联社签了授权协议，付费让 Claude 在选举期间展示实时、带出处的选举数据，这是它第一次向数字新闻机构付费。金额、期限和范围都没有披露，两家公司均未公开置评。8 月时 Anthropic 还被媒体高管称认为合理使用足以覆盖、没有授权计划，而 OpenAI 已和十多家出版商签约。",
      category: "industry",
      region: "intl",
      source: "The Decoder（转述 Adweek）",
      url: "https://the-decoder.com/anthropic-reverses-course-and-pays-for-news-content-for-the-first-time/"
    },
    {
      title: "Sand.ai 融资 2 亿美元，成视频模型独角兽",
      summary: "视频生成模型公司 Sand.ai（三呆科技）11 月 5 日宣布完成 2 亿美元 A+ 轮融资，基石资本和网宿科技联合领投，这是它今年第三轮融资，10 个月累计融资 3 亿美元。公司称 MAGI-2 Preview 已开源，蒸馏后生成 10 秒 1080P 视频的推理成本约 0.5 元，视频应用 VidMuse 上线两个月年化收入已过千万美元。资金将用于更大参数的 MoE 视频模型 MAGI-2 正式版和海外市场。",
      category: "industry",
      region: "cn",
      source: "新京报",
      url: "https://www.bjnews.com.cn/detail/1793857209129664.html"
    },
    {
      title: "Mistral Studio 新增托管智能体",
      summary: "Mistral 11 月 5 日更新企业平台 Mistral Studio，新增托管智能体和应用，以及工作流、连接器、可观测性和评测功能，默认由开放权重的旗舰模型 Mistral Large 4（Le Chonk）驱动。整套平台可以部署在公有云、私有云 VPC 或企业自己的机房里。对不想把数据交给美国厂商的欧洲企业，这是少有的从模型到平台都能自托管的选择。",
      category: "tools",
      region: "intl",
      source: "Mistral 官方博客",
      url: "https://mistral.ai/news/build-with-studio/"
    },
    {
      title: "华为云称盘古未停售，15 日上线 2.1 Pro",
      summary: "据人民财讯 11 月 5 日消息，华为云 MaaS 平台将于 11 月 15 日上线 openPangu-2.1-Pro 旗舰模型，并同步接入智能体平台 AgentArts 和码道 CodeArts。华为方面表示，此前“华为云完全停售盘古大模型”的说法是外界误读。11 月 4 日本栏报道过 openPangu 2.0 两款模型 6 日停售，这次华为给出了替代版本。",
      category: "model",
      region: "cn",
      source: "凤凰网科技",
      url: "https://tech.ifeng.com/c/8xoNa6SUx0s"
    },
    {
      title: "Win11 新搜索将接入 Copilot，需手动开",
      summary: "微软 11 月 5 日表示，Copilot 会在今年晚些时候进入 Windows 11 新的搜索界面，先在部分市场推出，而且是用户主动开启才生效。微软特别说明这次是可选功能，不会默认打开。同一周微软还宣布 12 月 1 日起三星、LG 电视上的 Copilot 停止服务。",
      category: "tools",
      region: "intl",
      source: "Windows Central",
      url: "https://www.windowscentral.com/microsoft/windows-11/copilot-is-coming-to-windows-11s-new-search-ui-later-this-year-but-microsoft-promises-itll-be-optional-this-time"
    }
  ],
  corp: [
    {
      title: "超 64 万辆车被召回，大众系占六成以上",
      summary: "市场监管总局 11 月 4 日前后集中发布多批汽车召回，涉及大众、奥迪、丰田、Jeep、路特斯、MINI、雷克萨斯等品牌，多家媒体统计超 64 万辆，另有统计口径称 8 项计划共约 81.6 万辆。规模最大的是大众相关品牌超 61 万辆，原因是转向机固定螺栓可能锈蚀断裂；丰田为制动电脑程序缺陷，路特斯为低压燃油泵制造缺陷。厂家将免费检修、换件或 OTA 升级，大众中国另发声明提醒车主警惕冒充其名义的虚假召回短信。",
      kind: "quality",
      company: "大众、丰田、Jeep 等",
      source: "内蒙古新闻网",
      url: "https://inews.nmgnews.com.cn/system/2026/11/05/030420902.shtml"
    },
    {
      title: "苹果天气显示零下 30℃，客服致歉",
      summary: "11 月 4 日凌晨，北京、上海、厦门等多地 iPhone 自带天气 App 显示下周五最低气温约零下 30℃，引发大量吐槽。苹果客服回应称初步排查为系统端口问题、并非硬件故障，已紧急修复并致歉，中国气象局工作人员也表示没有发布过类似极端预报。目前相关日期的数据已恢复正常，苹果没有公布更详细的技术说明。",
      kind: "quality",
      company: "苹果",
      source: "新浪科技",
      url: "https://finance.sina.com.cn/tech/digi/2026-11-04/doc-inixpvva1663461.shtml"
    },
    {
      title: "京东本地生活负责人郭庆离职",
      summary: "京东 11 月 4 日确认，本地生活业务负责人郭庆（“老 K”）因个人原因离职，公司感谢他的付出。郭庆曾是美团最高决策机构 S-team 成员，2024 年加入京东任 CEO 顾问，后出任达达集团董事会主席，牵头京东外卖。接任者尚未公布，京东表示业务将进入“京东外卖 2.0”阶段。",
      kind: "org",
      company: "京东",
      source: "新浪科技",
      url: "https://finance.sina.com.cn/tech/discovery/2026-11-04/doc-inixqhku6210542.shtml"
    },
    {
      title: "中兴手机公众号主体换成全资子公司",
      summary: "11 月 4 日，“中兴手机”微信公众号宣布迁移到新账号“中兴终端”，运营主体由中兴通讯换成上海申启纪元智能终端有限责任公司，后者是中兴通讯 2025 年 4 月设立的全资子公司，注册资本 10 亿元。就在前一天，中兴通讯刚否认手机业务打包出售的传闻，此次调整因此引发猜测。中兴方面没有就业务剥离作进一步说明，相关说法仍属传闻。",
      kind: "org",
      company: "中兴通讯",
      source: "IT之家",
      url: "https://www.ithome.com/1/022/428.htm"
    },
    {
      title: "倍轻松实控人操纵股价，合计被罚 4047 万",
      summary: "倍轻松 11 月 4 日晚公告，证监会认定实控人马学军等 7 人在 2023 年 9 月至 2024 年 10 月操纵公司股票，合计没收违法所得并罚款 4047.31 万元。马学军还被处以 5 年证券市场禁入。",
      kind: "penalty",
      company: "倍轻松",
      source: "21经济网",
      url: "https://www.21jingji.com/article/20261105/herald/d17591326eb18aad48ecd6f3b70af190.html"
    },
    {
      title: "江苏雷利实控人苏达被证监会立案",
      summary: "江苏雷利公告，实控人苏达因涉嫌信息披露和减持违法违规被证监会立案。公司称立案调查期间不会对董事会运作和日常经营产生重大影响。据统计，11 月以来已有 6 家上市公司和 3 位实控人被立案调查。",
      kind: "penalty",
      company: "江苏雷利",
      source: "21经济网",
      url: "https://www.21jingji.com/article/20261105/herald/acd1f4ee0f80aadde0fda0d54ff4b9de.html"
    },
    {
      title: "Canva 裁员约 22%，超过 1200 人",
      summary: "设计平台 Canva 11 月 3 日宣布重组，裁撤约 1271 个岗位、约占员工 22%，这个数字也包括被要求调岗搬迁的员工。CEO Melanie Perkins 对员工说增长放缓、公司必须改变，被裁员工可拿到六个月工资和其他补偿。Canva 此前十多年一直以没有大规模裁员著称。",
      kind: "layoff",
      region: "intl",
      company: "Canva",
      source: "TechCrunch",
      url: "https://techcrunch.com/2026/11/04/canva-lays-off-over-1200-people-amid-slowing-growth"
    },
    {
      title: "Google 自愿离职计划扩大到五个国家",
      summary: "Google 向路透社确认，带补偿的自愿离职计划已扩大到加拿大、法国、德国、日本和瑞士的部分员工，瑞士方案为每工作一年补一个月工资、最多 12 个月。Google Cloud 和 DeepMind 不在范围内，其他国家的补偿和接受人数没有公布。Google 发言人称这是为了支持公司的未来重点，外界普遍认为与 AI 投入带来的成本压力有关。",
      kind: "layoff",
      region: "intl",
      company: "Google",
      source: "Fox Business（转述路透社）",
      url: "https://www.foxbusiness.com/technology/google-expands-voluntary-buyouts-5-countries-ai-spending-fuels-cost-cuts"
    },
    {
      title: "Claude Code 产品负责人跳槽 OpenAI",
      summary: "Claude Code 的创始产品负责人 Cat Wu 11 月 5 日在 X 上宣布加入 OpenAI，负责 Core Products 部门的产品管理，向 Codex 负责人 Thibault Sottiaux 汇报。报道称这是两周内第三位离开的 Claude Code 核心成员，时间点在 Anthropic 计划上市前几周。Anthropic 拒绝置评，OpenAI 总裁 Greg Brockman 在 X 上表示欢迎。",
      kind: "org",
      region: "intl",
      company: "Anthropic、OpenAI",
      source: "The Next Web",
      url: "https://thenextweb.com/news/cat-wu-claude-code-anthropic-openai-core-products"
    }
  ],
  voices: [
    {
      title: "王兴兴：明年大概率是机器人行业临界点",
      summary: "宇树科技创始人王兴兴 11 月 4 日在世界互联网大会乌镇峰会上说，大概率明年会是机器人行业或机器人模型的临界点。他给的标准是机器人能在约 80% 的陌生场景里完成约 80% 的任务，并认为全球头部多模态模型已经接近这个目标。他把剩下的难点称作“最后几个毫米的问题”，主要卡在触觉和模型输入输出与真实世界的对齐，商业服务场景可能比家庭和工业更早落地。",
      person: "王兴兴",
      role: "宇树科技创始人",
      region: "cn",
      said: "2026-11-04",
      source: "澎湃新闻",
      url: "https://www.thepaper.cn/newsDetail_forward_34402951"
    },
    {
      title: "辛顿：今年或明年就会出现 AI 的“切尔诺贝利”",
      summary: "Geoffrey Hinton 接受《卫报》采访时说：“要么今年晚些时候，要么明年，我们会看到切尔诺贝利。”他设想的不是核事故，而是 AI 辅助的攻击让电网大面积停电，或让金融系统瘫痪一周。他希望设立类似 FDA 的独立机构，在模型发布前审批，并说自己不是末日论者，强有力的行动仍能在未来十年避免灾难。",
      person: "杰弗里·辛顿",
      role: "图灵奖、诺贝尔物理学奖得主",
      region: "intl",
      said: "2026-11-03",
      source: "Resultsense（转述《卫报》）",
      url: "https://www.resultsense.com/news/2026-11-04-hinton-guardian-chornobyl-ai-warning/"
    },
    {
      title: "盖茨：美国缺席，国际 AI 监管就没意义",
      summary: "比尔·盖茨 11 月 4 日在英国《金融时报》AI 峰会上说，最紧迫的两类风险是用 AI 帮助制造生物武器，以及利用全社会网络安全漏洞的攻击，AI 引发的生物事件可能比新冠严重得多。他批评白宫在 AI 监管上缺席，认为头部实验室集中在美国，美国不参与，其他国家行动也约束不了它。他建议给模型内置防护设基准，并建设空气、污水、血液的大规模监测，尽早发现疫情。",
      person: "比尔·盖茨",
      role: "微软联合创始人",
      region: "intl",
      said: "2026-11-04",
      source: "The Asia Business Daily",
      url: "https://www.asiae.co.kr/en/article/2026110514333934977"
    },
    {
      title: "黄仁勋：今年的突破是智能体框架",
      summary: "黄仁勋 11 月 3 日在 Fireworks.ai 的 Forge 活动上与 CEO 乔琳对谈，说“我们喜欢闭源模型”，英伟达不管客户用开源还是闭源模型都乐于做生意。他把智能体运行框架（harness）称为今年最大的突破，并预测下一个大突破是让硬件进入闭环。",
      person: "黄仁勋",
      role: "英伟达 CEO",
      region: "intl",
      said: "2026-11-03",
      source: "The Register",
      url: "https://www.theregister.com/ai-and-ml/2026/11/03/nvidia-is-happy-to-take-your-money-whether-youre-using-open-or-closed-models-says-jensen-huang/5307368"
    },
    {
      title: "奥尔特曼：人类掌控 AI 没有讨论余地",
      summary: "Sam Altman 11 月 2 日在阿布扎比的能源会议上说，人类必须掌控未来，这一点“没有讨论余地”。他认为能源是 AI 面临的最大挑战。",
      person: "萨姆·奥尔特曼",
      role: "OpenAI CEO",
      region: "intl",
      said: "2026-11-02",
      source: "The National",
      url: "https://www.thenationalnews.com/future/technology/2026/11/02/no-room-for-debate-over-human-control-of-ai-says-sam-altman/"
    },
    {
      title: "杨植麟：对大模型泛化到物理世界有信心",
      summary: "月之暗面创始人杨植麟 11 月 2 日在香港国际金融领袖投资峰会欢迎晚宴上，与红杉中国沈南鹏、智元创新熊彦对谈。他谈到开源与闭源模型之争，并表示对大模型将来泛化到物理世界的能力有信心。这是他近期少有的公开露面，现场没有公开完整文字记录。",
      person: "杨植麟",
      role: "月之暗面创始人",
      region: "cn",
      said: "2026-11-02",
      source: "澎湃新闻",
      url: "https://www.thepaper.cn/newsDetail_forward_34404435"
    },
    {
      title: "李斌：AI 不该剥夺人存在的意义",
      summary: "蔚来创始人李斌 11 月 4 日在乌镇峰会互联网企业家论坛上说，AI 应该让人的工作更轻松、更安全。他认为 AI 不应剥夺人类存在的意义。",
      person: "李斌",
      role: "蔚来创始人",
      region: "cn",
      said: "2026-11-04",
      source: "微博（乌镇峰会现场视频）",
      url: "https://weibo.com/2/detail/5361873595928993"
    },
    {
      title: "朱殿君：智能体要好用、可信、开放",
      summary: "腾讯集团副总裁、总编辑朱殿君在乌镇峰会智能体互信互联互操作全球合作创新论坛上提出，智能体应该是“好用的、可信的、开放的”。他认为智能体的兴起标志着人工智能进入新阶段，正从对话交互走向自主执行，智能体之间的信任治理是接下来的重点。",
      person: "朱殿君",
      role: "腾讯集团副总裁、总编辑",
      region: "cn",
      said: "2026-11-04",
      source: "中国新闻网",
      url: "https://www.chinanews.com.cn/cj/2026/11-04/10726122.shtml"
    }
  ],
  pricing: [
    {
      title: "Gemini 视频模型 API 降价约三成",
      summary: "Google 11 月 5 日把视频模型 Gemini Omni 1.2 Flash 推到正式商用，720p 输出约每秒 0.07 美元，6 月时上一版是每秒 0.10 美元。可以先用 360p 或 720p 低价打样，再放大到 1080p 或 4K。Gemini API、Vertex AI 和 AI Studio 同步生效。",
      product: "Gemini",
      change: "down",
      source: "Google Cloud 官方博客",
      url: "https://cloud.google.com/blog/products/ai-machine-learning/gemini-omni-1-2-flash-generally-available"
    },
    {
      title: "混元 Hy4 正式版沿用原价，年底前 5 折",
      summary: "腾讯 Hy4 正式版沿用预览版刊例价：每百万 token 输入 6 元、输出 18 元，缓存命中 0.3 元。即日起至 2026 年 12 月 31 日，腾讯云 TokenHub 按刊例价 5 折计费，接口兼容 OpenAI 格式。",
      product: "腾讯混元",
      change: "down",
      source: "腾讯云开发者社区",
      url: "https://developer.cloud.tencent.com/article/2776227"
    },
    {
      title: "GPT-Image-2.6 上线 API，和 2.5 同价",
      summary: "OpenAI 11 月 4 日在 API 上线 GPT-Image-2.6 Flare（快速档）和 Sunburst（高质量档），两款按 token 计费，单价和 2.5 一样：图像输入每百万 token 8 美元，图像输出 30 美元。第三方测算低质量方图耗用的输出 token 约为原来的 4 倍，同样设置下单张成本可能变高。",
      product: "OpenAI API",
      change: "new",
      source: "OpenAI 定价页",
      url: "https://developers.openai.com/api/docs/pricing"
    }
  ],
  design: [
    {
      title: "Images 2.6：能直出 GIF 和 SVG",
      summary: "OpenAI 11 月 4 日发布 ChatGPT Images 2.6，可以用文字或照片生成动图 GIF，还能保存人物、宠物、角色的参考图反复使用，生成速度比 2.5 快约一半。开发者通过 API 可以导出可编辑的 SVG 矢量文件，做图标和插画更方便。GIF 生成后不能再编辑，OpenAI 也承认文字、复杂版式和角色一致性仍是弱项。",
      kind: "trend",
      price: "ChatGPT 各档可用",
      source: "Digital Trends",
      url: "https://www.digitaltrends.com/computing/openai-images-2-6-adds-gif-support-and-faster-image-generation/"
    },
    {
      title: "Pencil 4.0：开源原型工具接入 AI 智能体",
      summary: "Pencil 是做线框图和 GUI 原型的老牌开源桌面软件，10 月 24 日发布 4.0，内置 MCP 服务，Claude Desktop、Cursor、VS Code 里的智能体能直接在画布上加、改、对齐控件。新增的 @group 能按行或列自动排版，AI 还能搜内置的 Tabler、Lucide 等图标，适合先一句话搭个线框再手动细调。控件库偏传统线框风，不支持多人实时协作，高保真视觉还得回到 Figma。",
      kind: "tool",
      price: "免费",
      stars: 9896,
      source: "GitHub",
      url: "https://github.com/evolus/pencil/releases/tag/v4.0.0"
    },
    {
      title: "PureRef：把参考图钉在桌面上的情绪板",
      summary: "PureRef 专门用来摆参考图，截图和网页图片拖进来就能在无限画布上缩放、排列，窗口可以置顶，盖在 Figma 或 PS 上边看边画。2.1 版加了网格吸附、形状标注和便签，整理情绪板、给图做批注都够用。个人版下载时自己定价（可填 0），商用一次性 49 美元起，没有协作和云同步。",
      kind: "tool",
      price: "个人自定价，商用 49 美元起",
      source: "PureRef 官网",
      url: "https://www.pureref.com/download.php"
    },
    {
      title: "Recraft：能直接生成 SVG 矢量图的 AI",
      summary: "Recraft 是网页版 AI 设计工具，按一句描述生成插画、图标和 Logo，并直接导出可编辑的 SVG，不用再拿位图去描摹。可以锁定一套风格批量出图，同一组图标、插画画风能保持统一，适合给产品配套素材。免费版每天有少量额度，但出的图是公开的、版权归 Recraft，商用必须开付费版。",
      kind: "tool",
      price: "免费试用，商用需付费",
      source: "Product Hunt",
      url: "https://www.recraft.ai/"
    },
    {
      title: "Material Symbols：谷歌开源的可变图标",
      summary: "Material Symbols 是 Google 开源的图标库，分线框、圆角、尖角三种风格，粗细、填充、等级和光学尺寸都能用可变字体连续调节。可以在 Google Fonts 图标页直接搜索、下载 SVG 或 PNG，也能当字体引入网页，设计稿和代码用的是同一套。图标偏 Material 风格，放到 iOS 风格的界面里需要自己调整。",
      kind: "tool",
      price: "免费",
      stars: 54235,
      source: "GitHub",
      url: "https://github.com/google/material-design-icons"
    },
    {
      title: "p5.js：浏览器里写几行代码做生成艺术",
      summary: "p5.js 是 Processing 社区维护的 JavaScript 创意编程库，几行代码就能画出图形、动画和交互效果，官方在线编辑器打开网页就能写、能分享。做生成式海报、动态背景、交互原型都常用，社区示例和教程很多。需要一点编程基础，成品多是网页或导出的图片视频，不能直接变成设计稿图层。",
      kind: "tool",
      price: "免费",
      stars: 24307,
      source: "GitHub",
      url: "https://github.com/processing/p5.js"
    },
    {
      title: "ShaderGradient：在 Figma 里做流动渐变",
      summary: "ShaderGradient 用 WebGL 着色器做会动的 3D 渐变，颜色、形状、光照、颗粒感都能调，做 Banner、启动页背景很快。在 Figma 里能插入静态图或 GIF，也能导出可循环的 GIF、WebM，同一份参数还能用在 Framer 和 React 组件里。插件最近一次更新是 2025 年 12 月，GIF 文件偏大，上线前最好换成视频或代码实现。",
      kind: "plugin",
      price: "免费",
      stars: 3080,
      source: "Figma Community",
      url: "https://www.figma.com/community/plugin/1203016883447870818"
    },
    {
      title: "Breakpoints：Figma 里拖拽预览响应式",
      summary: "选中几个不同宽度的画框，Breakpoints 会把它们合成一个能拖着改尺寸的布局，拖到哪个断点就显示哪一版，横向、纵向断点都支持。插件关掉也能用，没装插件的同事也能拖着看，和前端对断点规则很直观。免费版启动时有横幅，赞助 5 美元可去掉；画框会被转成主组件，背景必须不透明。",
      kind: "plugin",
      price: "免费，赞助 5 美元去横幅",
      source: "Figma Community",
      url: "https://www.figma.com/community/plugin/824289601590456356"
    }
  ],
  apps: [
    { name: "dnGrep", category: "office", desc: "批量搜索文件内容的图形界面工具，Word、Excel、PDF 和压缩包里的文字也能搜到。支持正则和批量替换，比资源管理器自带的搜索好用得多。", license: "GPL-3.0", stars: 2234, size: "69 MB", url: "https://github.com/dnGrep/dnGrep" },
    { name: "Pomatez", category: "office", desc: "番茄钟桌面应用，工作和休息时长可以自己设，到点全屏提醒休息。自带简单的任务清单，没有广告和订阅。", license: "MIT", stars: 4923, size: "74.7 MB", url: "https://github.com/zidoro/pomatez" },
    { name: "Notepads", category: "office", desc: "界面简洁的 Windows 记事本替代，启动快，支持多标签、Markdown 预览和对比修改前后的差异。从 Microsoft Store 安装，比系统自带记事本顺手。", license: "MIT", stars: 10323, size: "31 MB", url: "https://github.com/0x7c13/Notepads" },
    { name: "XPipe", category: "coding", desc: "管理 SSH 服务器、Docker 容器和 WSL 的连接中心，能直接调用本机的终端和编辑器。连接配置集中保存，不用在多个工具之间来回切。", license: "Apache-2.0", stars: 14641, size: "129.7 MB", url: "https://github.com/xpipe-io/xpipe" },
    { name: "Lite XL", category: "coding", desc: "安装包只有几 MB 的代码编辑器，启动很快，老电脑上也不卡。用 Lua 写插件，界面和快捷键跟 VS Code 差不多。", license: "MIT", stars: 6510, size: "3.5 MB", url: "https://github.com/lite-xl/lite-xl" },
    { name: "Thonny", category: "coding", desc: "给 Python 初学者用的 IDE，自带解释器，装好就能写代码。逐步调试时能直接看到变量和调用栈的变化，适合教学。", license: "MIT", stars: 3989, size: "29.7 MB", url: "https://github.com/thonny/thonny" },
    { name: "komorebi", category: "system", desc: "Windows 上的平铺窗口管理器，窗口自动排成网格，用快捷键切换布局。多显示器支持好，个人使用免费，商用需另购授权。", license: "Komorebi License（个人免费）", stars: 15355, size: "26.9 MB", url: "https://github.com/LGUG2Z/komorebi" },
    { name: "Chocolatey", category: "system", desc: "Windows 命令行包管理器，一条命令就能安装、批量升级常用软件。软件包仓库历史久、收录全，适合写装机脚本。", license: "Apache-2.0", stars: 11562, size: "6.4 MB", url: "https://github.com/chocolatey/choco" },
    { name: "usbipd-win", category: "system", desc: "把本机的 USB 设备共享给 WSL2 或局域网里的其他电脑。在 WSL 里调试串口、烧录开发板都靠它，是微软官方文档推荐的方案。", license: "GPL-3.0", stars: 6286, size: "4.3 MB", url: "https://github.com/dorssel/usbipd-win" },
    { name: "Tauon", category: "fun", desc: "本地音乐播放器，按专辑封面浏览曲库，播放列表管理灵活。支持无损格式、歌词显示和 Last.fm 记录，适合本地曲库大的人。", license: "GPL-3.0", stars: 2956, size: "104.8 MB", url: "https://github.com/Taiko2k/Tauon" },
    { name: "ares", category: "fun", desc: "多平台怀旧游戏模拟器，FC、SFC、MD、N64、PS1 等几十种主机都能在一个程序里玩。模拟精度高，画面和声音还原得好。", license: "ISC", stars: 1851, size: "61.8 MB", url: "https://github.com/ares-emulator/ares" },
    { name: "OpenRCT2", category: "fun", desc: "《过山车大亨 2》的开源重制引擎，支持高分辨率、多人联机和大量新功能，11 月 1 日刚发布 0.5.7。需要自备正版游戏文件才能玩。", license: "GPL-3.0", stars: 16543, size: "74.1 MB", url: "https://github.com/OpenRCT2/OpenRCT2" }
  ],
  insights: [
    {
      title: "Uber：万圣节那周 AI 智能体只叫了 4 次车",
      summary: "Uber 在三季度财报电话会上披露，10 月最忙的万圣节那一周，平台共有约 3.2 亿笔出行和外卖订单，其中通过 AI 智能体下单的打车只有 4 单，Uber Eats 有 500 单。CEO Dara Khosrowshahi 称这是“非常、非常早期，进展非常有限”，并指出在 App 里叫车平均只要 50 秒，智能体省不了多少时间。DoorDash 也说目前智能体下的单只有几百笔，但各家 AI 公司都在找它们谈接入。",
      kind: "usage",
      source: "TechCrunch（数据来自 Uber 三季度财报电话会）",
      asOf: "2026-10",
      url: "https://techcrunch.com/2026/11/04/almost-no-one-uses-ai-agents-to-book-their-uber-company-says/"
    },
    {
      title: "多所高校用 AI 巡课，统计抬头率和前排就座",
      summary: "据澎湃新闻梳理，江南大学、北京理工大学、东北林业大学等高校已引入 AI 教学督导系统，借教室摄像头和麦克风统计到课率、抬头率、前排就座率和师生互动率，并生成可视化报告。南京大学的类似系统引发隐私质疑后，有报道称其已不再统计抬头率。评论普遍认为抬头不等于在听讲，这类指标和教学质量之间有明显偏差。",
      kind: "industry",
      source: "澎湃新闻",
      asOf: "2026-11",
      url: "https://thepaper.cn/newsDetail_forward_34411188"
    },
    {
      title: "哈佛研究：AI 让代码变多，交付没跟着变多",
      summary: "哈佛大学研究人员借助 Jellyfish 平台，分析了 700 多家企业、约 70 万名员工在 2021 年 1 月至 2026 年 3 月间的约 3 亿个工作事件。引入 AI 编程工具后，新增代码行、提交和合并请求都明显增加，但完成的工作量没有同步增长。主要原因是 AI 代码把压力推给了下游，尤其是代码评审：有报道称每个 PR 从提交到合入的审查时间平均增加约 49%。",
      kind: "usage",
      source: "InfoQ（原始数据：哈佛大学研究，Jellyfish 平台）",
      asOf: "2026-03",
      url: "https://www.infoq.cn/article/c3vTLNrRwfCzw8SAmz90"
    }
  ]
};
