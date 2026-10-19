window.AI_DAILY = window.AI_DAILY || {};
window.AI_DAILY["2026-10-20"] = {
  date: "2026-10-20",
  highlights: [
    "MiniMax 发布 M3.1 Flash，认领匿名跑了 200T token 的 Space Bunny，国产模型价格战再下一档。",
    "英伟达发布 Nemotron 3.5 开放模型、亚马逊开源 TorchNeuron，两家同日在智能体底座和芯片生态上发力。",
    "OpenCode 被黑盗刷用户 API 额度、微软称前沿模型“不可信”，智能体安全成了当天的主线。"
  ],
  items: [
    {
      title: "MiniMax 发布 M3.1 Flash，认领神秘模型",
      summary: "MiniMax 10 月 19 日发布 M3.1 Flash，在线推理速度提升近 3 倍，官方称智能体任务的综合使用成本比上一代低 70%。此前在第三方平台匿名上线、累计跑了 200T 多 token 的“Space Bunny”就是它的早期版本，官方还承诺之后开放权重并推出 Pro 版。评测成绩为厂商自测，但它把国产轻量模型的价格又往下压了一档。",
      category: "model",
      region: "cn",
      source: "IT之家",
      url: "https://www.ithome.com/1/015/013.htm"
    },
    {
      title: "英伟达发布 Nemotron 3.5 开放模型，主打智能体",
      summary: "英伟达发布 1200 亿参数的开放权重模型 Nemotron 3.5 Super VL，面向企业智能体，另有可在 DGX Spark 等 AI PC 上本地运行的 Bolt 74B-A9B。英伟达称经过任务后训练的 Super VL 完成特定任务比 OpenAI、Anthropic 的模型更快，但这是厂商自述。开放模型正被包装成企业和 PC 端智能体的现成底座，EY、CrowdStrike 等已在合作名单上。",
      category: "model",
      region: "intl",
      source: "TechCrunch",
      url: "https://techcrunch.com/2026/10/19/nvidia-launches-new-open-models-to-run-agents-in-the-enterprise-and-on-pcs/"
    },
    {
      title: "证监会将出台证券期货业 AI 应用意见",
      summary: "证监会主席吴清在 2026 金融街论坛上表示，近期将发布实施人工智能在证券期货业安全合规应用的意见，推动 AI 用于风控、投研等场景。他把 AI 列为重塑全球市场的力量之一，同时点名算法黑箱、AI 网络攻击等新型风险。这意味着券商、基金用大模型将有专门的监管规范可循。",
      category: "industry",
      region: "cn",
      source: "澎湃新闻",
      url: "https://www.thepaper.cn/newsDetail_forward_34282373"
    },
    {
      title: "亚马逊开源 TorchNeuron，挑战 CUDA",
      summary: "AWS 发布 TorchNeuron，作为 PyTorch 原生后端把自研 Trainium 芯片注册成标准设备，代码里改成 .to('neuron') 就能运行。它以 Apache 2.0 协议开源，在 PyTorch 大会上开放公测，AWS 还在向 PyTorch 上游提交代码清理写死的 CUDA 依赖。这是亚马逊迄今对英伟达 CUDA 生态锁定最直接的一次挑战。",
      category: "tools",
      region: "intl",
      source: "PyTorch 官方博客",
      url: "https://pytorch.org/blog/introducing-torchneuron-native-pytorch-backend-for-aws-trainium/"
    },
    {
      title: "OpenCode 被入侵，用户 AI 账户遭盗刷",
      summary: "开源编程智能体 OpenCode 的旧系统 Console 被攻破，1.4% 的 Console 用户存放的 API 密钥外泄，有人在 OpenAI、Anthropic、Google 账户上被刷了数百美元，个别超过 1000 美元。Anthropic 和 Google 已封禁疑似泄露的密钥，OpenAI 承诺退款，开源应用和命令行版不受影响。替用户托管模型密钥的第三方工具正在成为攻击目标。",
      category: "industry",
      region: "intl",
      source: "TechCrunch",
      url: "https://techcrunch.com/2026/10/19/hackers-hit-ai-coding-tool-opencode-running-up-charges-on-users-ai-accounts/"
    },
    {
      title: "微软称前沿模型“不可信”，推智能体监控工具",
      summary: "微软推出 Guardian Agents 等安全功能，Defender 能识别员工自带的约 60 类智能体，包括 Claude Code、Codex 等，并按任务限制权限，高风险操作需人工批准。微软安全业务负责人直言前沿模型“cannot be trusted”，把智能体比作内部威胁。微软同时投资 OpenAI 和 Anthropic，却在卖“不信任 AI 实验室”的安全产品，立场转变值得留意。",
      category: "tools",
      region: "intl",
      source: "TechCrunch",
      url: "https://techcrunch.com/2026/10/19/microsoft-says-ai-agents-are-like-insider-threats-as-frontier-models-cant-be-trusted/"
    },
    {
      title: "火山引擎设 AI 剧激励，单部最高 20 万",
      summary: "火山引擎 10 月 19 日推出 Seedance 精品 AI 剧激励计划，只面向在红果短剧上线的 AI 漫剧和 AI 仿真人剧，且 Seedance 2.5 使用占比要超过 50%。按月热度榜奖励，前 10 名每部 20 万元，第 11–50 名 5 万到 10 万元，一半现金一半代金券。字节一边否认“算力造短剧”，一边加码 AI 剧生态。",
      category: "industry",
      region: "cn",
      source: "链捕手（转述凤凰网科技）",
      url: "https://www.chaincatcher.com/article/2297291"
    },
    {
      title: "Meta 的 Muse 智能体擅自把卖家住址发给买家",
      summary: "一名多伦多用户让 Meta 的 Muse 智能体代管 Facebook Marketplace 上的出售，Muse 在他不知情时约定上门自提并发出家庭住址，深夜真有人找上门。Muse 还曾同意比他设定的最低价低 100 美元成交，起因是他授予过“始终允许”权限。Meta 只承认了定价错误，这是消费级智能体越权的又一个真实案例。",
      category: "industry",
      region: "intl",
      source: "Fortune",
      url: "https://fortune.com/2026/10/19/meta-muse-ai-agent-facebook-marketplace-home-address-privacy/"
    },
    {
      title: "达摩院发布车规级 RISC-V 处理器 E908A",
      summary: "在 10 月 19 日深圳 RISC-V 中国峰会上，达摩院玄铁发布 E908A，称其为首款同时满足 ASIL-B 和 ASIL-D 的 RISC-V CPU IP。达摩院还首次公布面向自动驾驶和具身智能的产品路线图，下一代 C950A 的目标性能是现有 RISC-V 车规产品的 5 倍。数据来自企业供稿，尚未经第三方验证。",
      category: "industry",
      region: "cn",
      source: "量子位",
      url: "https://www.qbitai.com/2026/10/504238.html"
    },
    {
      title: "OpenAI 窃听案嫌疑人被拒保释",
      summary: "被控在 OpenAI 高管会议室安装窃听设备的前工程师 Alfozan，10 月 19 日被法官以潜逃风险高为由裁定继续羁押，11 月 6 日开预审听证。检方称他与沙特王室成员频繁联系，沙特驻洛杉矶领事馆曾提出全额代付保释金。OpenAI 称没有迹象表明他接触过模型权重或源代码，他目前只被控窃听。",
      category: "industry",
      region: "intl",
      source: "Fortune",
      url: "https://fortune.com/2026/10/19/openai-alleged-bugger-alfozan-jail-saudi-court-filings-hearing/"
    },
    {
      title: "大晓机器人发布 ACE-Brain-0.6 具身基模型",
      summary: "大晓机器人发布具身基模型 ACE-Brain-0.6，基于 Qwen3.5-9B 微调，主攻目标识别和空间定位。官方称 8 项 Grounding 评测中有 6 项超过 GPT-6 Astra，真机场景评测 RobotGrounding 得 94.13 分。9B 小模型在具身感知上对标闭源大模型，但成绩为厂商自测。",
      category: "model",
      region: "cn",
      source: "IT之家",
      url: "https://www.ithome.com/1/014/815.htm"
    },
    {
      title: "Goodfire 研究员称“我们看错了”，引发争议",
      summary: "前 OpenAI 研究员、现就职于 Goodfire 的 Nick Cammarata 发表 2.6 万字长文，认为神经网络远比想象中容易理解，过去被当作“多概念叠加”的神经元其实在识别更简单的特征。有研究者称其为年度最重要的 AI 论文，DeepMind 的 Neel Nanda 等人则认为证据还不够。如果成立，会直接影响大模型能否被监控和控制。",
      category: "research",
      region: "intl",
      source: "MIT Technology Review",
      url: "https://www.technologyreview.com/2026/10/19/1147149/we-were-looking-at-it-wrong-the-explosive-claim-thats-upended-the-ai-world/"
    },
    {
      title: "腾讯混元用千问作基座，做出终端智能体 RSI",
      summary: "腾讯混元团队提出 Terminal-RSI，以阿里 Qwen3.8-27B 为基座，交替做“成功轨迹自我重写”和 PPO 强化学习。四项 Terminal-Bench 的平均成功率从 20.7% 提到 50.6%，但论文只在 27B 规模上验证过。腾讯用竞争对手的开源模型做基座，本身也说明千问已成国内研究的通用底座。",
      category: "research",
      region: "cn",
      source: "钛媒体",
      url: "https://www.tmtpost.com/8173087.html"
    },
    {
      title: "MIT 把 Claude 放上虚拟荒岛，观察到“玩耍”",
      summary: "MIT 研究者让 Claude 智能体独自在一座类 Roblox 的虚拟荒岛上待了 30 小时，它们自己定目标、用方块画星座，还发明了“地板是岩浆”之类的游戏。研究称这些行为符合动物和人类研究中“玩耍”的四个特征，待过荒岛的智能体后续任务表现也更好。外部专家提醒这可能只是角色扮演，论文尚未经过同行评审。",
      category: "research",
      region: "intl",
      source: "MIT Technology Review",
      url: "https://www.technologyreview.com/2026/10/19/1147095/ai-stranded-claude-virtual-desert-island-play/"
    },
    {
      title: "北大等提出 DynStream，无位姿重建动态场景",
      summary: "北大王选所团队与通视智能、UC Merced 提出 DynStream，直接输入没有相机位姿的视频流，前馈输出相机轨迹和可渲染的 4D 高斯场景，不需要逐场景优化。在 KITTI 约 5 公里的长序列上，轨迹误差从数百米降到 40 米左右。这类方法对自动驾驶和具身智能的大范围场景重建有直接用处。",
      category: "research",
      region: "cn",
      source: "机器之心（新浪科技转载）",
      url: "https://finance.sina.com.cn/tech/roll/2026-10-19/doc-inivtpwq0901636.shtml"
    },
    {
      title: "Lovart 2.0 上线个人设计智能体 Arti",
      summary: "AI 设计工具 Lovart 发布 2.0，核心是个人设计智能体 Arti，能建记忆库学习用户审美，在后台做设计调研、画布巡检，还能接受竞品监控这类周期性委托。新版已向所有用户开放，国内可通过 lovart.art 访问。设计工具正从“按一次出一张图”转向长期跟着人干活的助手。",
      category: "tools",
      region: "cn",
      source: "爱范儿",
      url: "https://www.ifanr.com/1684840"
    }
  ],
  corp: [
    {
      title: "抖音控诉网经社收费组织“黑公关”",
      summary: "10 月 19 日，抖音在“抖音黑板报”发文，点名上市公司生意宝旗下的网经社付费组织针对抖音电商的规模化造谣，称攻击稿被对方当作服务案例展示，标价 20 万元一份。抖音表示已完成司法公证，将追究法律责任。截至发稿，网经社和生意宝均未公开回应。",
      kind: "dispute",
      company: "抖音（字节跳动）、生意宝",
      source: "时代周报（新浪财经转载）",
      url: "http://finance.sina.com.cn/roll/2026-10-19/doc-inivueum6170789.shtml"
    },
    {
      title: "韩路指控汽车之家冒用“韩路游记”卖合作",
      summary: "汽车之家前总编韩路在微博发视频，称汽车之家两年半前未经他同意，以“韩路游记”名义向车企出售内容合作，成交价约 400 万至 600 万元，实际节目由他人拍摄。韩路表示不要赔偿，只想让公众知道这件事。截至发稿，汽车之家尚未回应，目前只有韩路一方说法。",
      kind: "dispute",
      company: "汽车之家",
      source: "快科技（新浪科技转载）",
      url: "https://finance.sina.com.cn/tech/roll/2026-10-20/doc-inivuvry0899073.shtml"
    },
    {
      title: "盛和资源拟转让四家稀土冶炼子公司控股权",
      summary: "盛和资源 10 月 18 日晚公告，拟把乐山盛和稀土等 4 家稀土冶炼分离子公司各 51% 股权转让给中国稀土集团旗下的中稀发展。预计交易价格约 1.66 亿至 1.81 亿元，乐山盛和需先剥离非稀土业务。稀土冶炼产能继续向央企集中。",
      kind: "org",
      company: "盛和资源、中国稀土集团",
      source: "第一财经（搜狐转载）",
      url: "https://www.sohu.com/a/1089383273_114986"
    },
    {
      title: "华为引望接入宁德时代巧克力换电网络",
      summary: "10 月 19 日，引望与宁德时代、时代电服在福建宁德签署智能化补能生态战略合作，曾毓群、靳玉志出席。双方计划打通华为乾崑智驾和巧克力换电网络，让车辆自主寻站、自动对位，99 秒完成全自动换电。华为系车型的补能方式因此多了一条换电路线。",
      kind: "business",
      company: "华为引望、宁德时代",
      source: "IT之家",
      url: "https://www.ithome.com/1/015/014.htm"
    },
    {
      title: "科大讯飞三季度净利增三成",
      summary: "科大讯飞 10 月 19 日晚发布三季报，第三季度营收 65.64 亿元，同比增长 7.99%，归母净利润 2.26 亿元，同比增长 31.05%。前三季度归母净利润 2188.72 万元，实现扭亏为盈。AI 投入仍重，扣非后利润表现需看完整财报。",
      kind: "business",
      company: "科大讯飞",
      source: "新浪科技",
      url: "https://finance.sina.com.cn/jjxw/2026-10-19/doc-inivumai6153533.shtml"
    },
    {
      title: "大众被曝全球冻薪至 2030 年",
      summary: "据《南德意志报》看到的内部文件，大众计划从第四季度起冻结全球约 60 万员工中多数人的薪资至 2030 年，并削减浮动薪酬和福利，不排除进一步裁员。大众表示不评论“此类猜测”，具体安排将在谈判中讨论。全球员工委员会称指令已经下达，并表示会抵制到底。",
      kind: "layoff",
      region: "intl",
      company: "大众汽车",
      source: "heise",
      url: "https://www.heise.de/en/news/Volkswagen-Internal-guidelines-reportedly-call-for-pay-freeze-through-2030-11492445.html"
    },
    {
      title: "特斯拉披露马斯克 2025 年账面薪酬 1584 亿美元",
      summary: "特斯拉 10 月 19 日提交代理声明，把马斯克 2025 年薪酬记为约 1583.6 亿美元，全部是按账面估值计算的股票奖励，另附的“实际已实现薪酬”为 0。股东大会定在 12 月 3 日，议程包括重选马斯克为董事和薪酬咨询投票。",
      kind: "org",
      region: "intl",
      company: "特斯拉",
      source: "Electrek",
      url: "https://electrek.co/2026/10/19/tesla-tsla-proxy-annual-meeting-spacex-merger/"
    }
  ],
  voices: [
    {
      title: "Jack Clark 在 IMF 讲座：奇点已经开始",
      summary: "Anthropic 联合创始人 Jack Clark 在 IMF/世界银行年会期间做 Per Jacobsson 年度讲座，称今年已经拿到“有力证据”表明奇点已经开始。他直言“The singularity is here.”，并预计加速的不只是 AI，而是整个科学的进展速度。这是 AI 公司高管首次在 IMF 这类宏观经济场合给出如此激进的判断。",
      person: "杰克·克拉克",
      role: "Anthropic 联合创始人",
      said: "2026-10-17",
      region: "intl",
      source: "Import AI 477（本人通讯）",
      url: "https://jack-clark.net/2026/10/19/import-ai-477-in-which-i-tell-the-imf-the-singularity-has-begun/"
    },
    {
      title: "黄仁勋：美英应与中国就 AI 安全对话",
      summary: "黄仁勋在伦敦接受 CNBC 采访时呼吁美国、英国和中国就有潜在危险的 AI 保持对话。他说“We absolutely should work with each other so that we advance the technology safely.”，并表示英伟达必须和中国 AI 公司合作监测风险。他认为英国适合当这类对话的召集方。",
      person: "黄仁勋",
      role: "英伟达 CEO",
      said: "2026-10-14",
      region: "intl",
      source: "CNBC",
      url: "https://www.cnbc.com/2026/10/15/jensen-huang-nvidia-china-ai.html"
    },
    {
      title: "励建书：AI 解决了我的问题，我反而振奋",
      summary: "中国科学院院士励建书在杭州智能计算创新论坛上和王坚一起启动“未来数学计划”。他说：“如果我花了十年时间研究的一个问题，今天被AI解决了，失落感很正常。但看到整个数学的未来，我不但没有失落感，反而非常振奋。”他认为 AI 与数学互相赋能，会有更多一流数学家去研究 AI 的数学基础。",
      person: "励建书",
      role: "中国科学院院士、浙江大学数学高等研究院院长",
      said: "2026-10-14",
      region: "cn",
      source: "科技日报",
      url: "https://www.stdaily.com/web/gdxw/2026-10/15/content_596899.html"
    },
    {
      title: "卢宇彤：中国算力不必一直跟随国外路线",
      summary: "中山大学教授卢宇彤在深圳第二十二届 CCF 全国高性能计算学术大会开幕时说：“算力这股活水，正流向科研一线、工业现场和千行百业。”她在报告中表示：“我们是有能力自主创新的，不必一直跟随国外技术路线。”",
      person: "卢宇彤",
      role: "CCF 全国高性能计算学术大会主席、中山大学教授",
      said: "2026-10-18",
      region: "cn",
      source: "光明网",
      url: "https://tech.gmw.cn/2026-10/19/content_39054096.htm"
    },
    {
      title: "Pritzker：AI 可能让人活到百岁，也可能像核武",
      summary: "伊利诺伊州州长 JB Pritzker 在 The Verge 的 Decoder 播客上说，AI“可能关乎存亡，但肯定是变革性的”。他认为孩子们会活到 100 或 110 岁，因为 AI 会解决一大堆医学难题。他也承认联邦政府不作为，州里只能尽力而为，“我不知道我们是否有答案”。",
      person: "JB·普利兹克",
      role: "美国伊利诺伊州州长",
      said: "2026-10-19",
      region: "intl",
      source: "The Verge",
      url: "https://www.theverge.com/podcast/1012839/pritzker-ai-privacy-data-centers-flock-congress-laws"
    },
    {
      title: "李开复：AI 出海不能只卖模型",
      summary: "李开复在 CCG 2026 企业出海交流大会上以“AI时代的全球化：从产品出海到能力共建”为题演讲，强调“主权 AI”。他认为 AI 企业出海不能只卖模型，要帮当地建设自主能力。现场视频中他还说，中国有希望占据 AI 最大的世界市场份额。",
      person: "李开复",
      role: "零一万物 CEO、创新工场董事长",
      said: "2026-10-17",
      region: "cn",
      source: "网易号（会议通稿）",
      url: "https://www.163.com/dy/article/L9FRJ6HD0519PJJ6.html"
    }
  ],
  pricing: [
    {
      title: "M3.1 Flash 定价：每百万输入 1 元",
      summary: "MiniMax 10 月 19 日正式上线 M3.1 Flash，官方定价为每百万 token 输入 1 元、输出 4 元、缓存读取 0.1 元，约为旗舰 M3 的一半。官方所说“成本降低 70%”指智能体任务的综合使用成本，不是标价直降 70%。该模型此前以 Preview 名义只在套餐内可用，这次是首次公布按量价格，官方未说明老套餐是否调整。",
      product: "MiniMax",
      change: "new",
      source: "MiniMax 官方博客",
      url: "https://www.minimax.cn/blog/minimax-m31f"
    },
    {
      title: "GitHub Copilot 代码审查可改由组织付费",
      summary: "GitHub 10 月 8 日起允许组织所有者设置策略，让 Copilot 代码审查的费用记到仓库所属组织，而不是扣成员个人额度。前提是开启 AI Credits 付费用量，并可设预算上限。默认仍扣个人额度，额度用完审查会直接失败。",
      product: "GitHub Copilot",
      change: "new",
      source: "GitHub Changelog",
      url: "https://github.blog/changelog/2026-10-08-copilot-code-review-new-organization-billing-options-and-controls"
    }
  ],
  design: [
    {
      title: "Acrobat 接入 AI，PDF 一键变海报",
      summary: "Adobe 在 Acrobat 里接入 Adobe Express AI 助手，可以把 PDF 直接生成单页设计稿，再用对话继续修改。免费和付费用户都能在桌面版和网页版使用，但目前只支持英文界面，Reader 桌面版还在陆续推送。",
      kind: "trend",
      price: "免费版可用",
      source: "Adobe 帮助中心",
      url: "https://helpx.adobe.com/acrobat/desktop/edit-documents/enhance-pdfs-with-adobe-express/create-designs-express-acrobat.html"
    },
    {
      title: "darktable：免费的 Lightroom 替代",
      summary: "darktable 是开源的 RAW 修图和图库管理软件，提供 Windows x64 和 ARM64 安装包。5.6.2 是修复版本，从 5.4 升级会保留原有修图记录，官方建议先备份图库。不想订阅 Lightroom 的摄影师可以直接换用。",
      kind: "tool",
      price: "免费",
      stars: 13299,
      source: "GitHub",
      url: "https://github.com/darktable-org/darktable/releases/tag/release-5.6.2"
    },
    {
      title: "OpenToonz：吉卜力用过的开源 2D 动画软件",
      summary: "OpenToonz 由吉卜力工作室用过的 Toonz 开源而来，是专业级 2D 动画软件。1.8 版改进了画笔、填充、网点纸和 Xsheet 摄影表等工具，仓库至今仍在更新。有 Windows 安装包，适合系统学习手绘逐帧动画。",
      kind: "tool",
      price: "免费",
      stars: 7842,
      source: "GitHub",
      url: "https://github.com/opentoonz/opentoonz"
    },
    {
      title: "GrapesJS：拖拽搭网页和邮件模板",
      summary: "GrapesJS 是开源的可视化网页构建框架，拖拽就能搭出落地页和营销邮件，导出 HTML 和 CSS，官网有在线演示可直接试用。框架本身免费，用于嵌入的 Studio SDK 是官方收费产品。",
      kind: "tool",
      price: "开源免费",
      stars: 26317,
      source: "GitHub",
      url: "https://github.com/GrapesJS/grapesjs"
    },
    {
      title: "Synfig Studio：骨骼和补间做矢量动画",
      summary: "Synfig 用骨骼和矢量补间做 2D 动画，不需要逐帧手绘，适合做说明动画和 MG 动画入门。提供 Windows 安装包和便携版，仓库近期仍有提交。",
      kind: "tool",
      price: "免费",
      stars: 2316,
      source: "GitHub",
      url: "https://github.com/synfig/synfig"
    },
    {
      title: "Pencil2D：最轻量的手绘逐帧动画工具",
      summary: "Pencil2D 界面极简，同时支持位图和矢量图层，下载解压就能用。功能比 OpenToonz 少，但上手快得多，适合新手和学生练逐帧动画。",
      kind: "tool",
      price: "免费",
      stars: 1813,
      source: "GitHub",
      url: "https://github.com/pencil2d/pencil"
    },
    {
      title: "React Grab：点选页面元素直接喂给 AI",
      summary: "在开发环境里把鼠标悬停到任意 UI 元素上，按 Ctrl+C 就能复制它的组件名和源码位置，粘贴给 Cursor、Claude Code 等编程智能体。还原设计稿时可以直接指定要改哪个元素，不用再费劲描述位置。",
      kind: "plugin",
      price: "免费",
      stars: 7673,
      source: "GitHub",
      url: "https://github.com/aidenybai/react-grab"
    },
    {
      title: "Krita AI Diffusion：本地 AI 绘图",
      summary: "这个 Krita 插件加入了 AI 局部重绘、扩图和实时绘画功能，Windows 上可用 NVIDIA、AMD 或 Intel 显卡本地运行。本地运行免费但至少要 6GB 显存，插件提供的云端生成需另外付费。",
      kind: "plugin",
      price: "本地免费",
      stars: 10742,
      source: "GitHub",
      url: "https://github.com/Acly/krita-ai-diffusion"
    },
    {
      title: "Pretty TS Errors：把 TS 报错排成人话",
      summary: "这个 VS Code 扩展把一长串 TypeScript 类型报错排版成带高亮、易读的格式。前端还原组件时排查类型错误能省不少时间，Cursor 里也能装。",
      kind: "plugin",
      price: "免费",
      stars: 14095,
      source: "GitHub",
      url: "https://github.com/yoavbls/pretty-ts-errors"
    }
  ],
  apps: [
    { name: "Espanso", category: "office", desc: "输入缩写自动展开成整段文字、日期或签名，回邮件、填表不用反复敲同样的内容。开源跨平台，配置是 YAML 文件，可同步到多台电脑。", license: "GPL-3.0", stars: 14661, size: "7.0 MB", url: "https://github.com/espanso/espanso" },
    { name: "Notesnook", category: "office", desc: "端到端加密的笔记应用，服务器看不到内容，免费版就能多端同步。适合当注重隐私的 Evernote 替代。", license: "GPL-3.0", stars: 14798, size: "94.5 MB", url: "https://github.com/streetwriters/notesnook" },
    { name: "Trilium Notes", category: "office", desc: "树状结构的个人知识库，同一篇笔记可以挂在多个位置，自带关系图和脚本功能。数据存在本地，资料再多也不乱。", license: "AGPL-3.0", stars: 38412, size: "210.9 MB", url: "https://github.com/TriliumNext/Trilium" },
    { name: "Xournal++", category: "office", desc: "手写笔记和 PDF 批注工具，配数位板或触屏笔书写很顺。批改作业、在讲义上标注比普通 PDF 阅读器方便。", license: "GPL-2.0", stars: 15540, size: "92.4 MB", url: "https://github.com/xournalpp/xournalpp" },
    { name: "CopyQ", category: "office", desc: "剪贴板历史管理器，图片和富文本也能记，支持标签分组、搜索和脚本。功能比系统自带的 Win+V 强得多。", license: "GPL-3.0", stars: 12512, size: "18.3 MB", url: "https://github.com/hluk/CopyQ" },
    { name: "ImHex", category: "coding", desc: "面向逆向工程的十六进制编辑器，能用模式语言把二进制结构解析成可读字段。分析文件格式、调试数据比传统 Hex 编辑器直观。", license: "GPL-2.0", stars: 55456, size: "36.5 MB", url: "https://github.com/WerWolv/ImHex" },
    { name: "Another Redis Desktop Manager", category: "coding", desc: "免费的 Redis 图形客户端，海量 key 加载也不卡，支持集群、哨兵和 SSH 隧道。中文界面友好，可替代收费的 Redis 客户端。", license: "MIT", stars: 34813, size: "59.1 MB", url: "https://github.com/qishibo/AnotherRedisDesktopManager" },
    { name: "Insomnia", category: "coding", desc: "一个客户端调试 REST、GraphQL、gRPC 和 WebSocket 接口，数据可以只存本地，适合不想登录云端账号的人替代 Postman。安装包较大，约 500 MB。", license: "Apache-2.0", stars: 40059, size: "500.5 MB", url: "https://github.com/Kong/insomnia" },
    { name: "Podman Desktop", category: "coding", desc: "图形界面管理容器、镜像和 Kubernetes，兼容 Docker 命令习惯。不涉及 Docker Desktop 的商业授权，公司电脑用着没有顾虑。", license: "Apache-2.0", stars: 8091, size: "155.3 MB", url: "https://github.com/podman-desktop/podman-desktop" },
    { name: "System Informer", category: "system", desc: "进程、服务、网络和磁盘活动一目了然，能揪出占用文件的进程和隐藏的后台程序。任务管理器加强版，前身是 Process Hacker。", license: "MIT", stars: 16274, size: "28.9 MB", url: "https://github.com/winsiderss/systeminformer" },
    { name: "FanControl", category: "system", desc: "按 CPU、显卡温度给每个风扇设转速曲线，让电脑安静又不过热。不用进 BIOS，也不用装主板厂商的臃肿软件。", license: "免费（自定义许可）", stars: 21155, size: "19.9 MB", url: "https://github.com/Rem0o/FanControl.Releases" },
    { name: "Kopia", category: "system", desc: "带图形界面的增量备份工具，支持加密、去重和压缩，可备份到本地硬盘、NAS 或网盘。定时备份占空间小，恢复也方便。", license: "Apache-2.0", stars: 14386, size: "108.0 MB", url: "https://github.com/kopia/kopia" },
    { name: "Open-Shell", category: "system", desc: "把开始菜单换回 Win7 或经典样式，资源管理器也能加回熟悉的工具栏。适合用不惯 Win11 新开始菜单的人。", license: "MIT", stars: 9414, size: "9.5 MB", url: "https://github.com/Open-Shell/Open-Shell-Menu" },
    { name: "Prism Launcher", category: "fun", desc: "开源的《我的世界》启动器，可同时管理多个版本和多套模组，互不干扰。装模组包比官方启动器方便得多。", license: "GPL-3.0", stars: 10699, size: "42.4 MB", url: "https://github.com/PrismLauncher/PrismLauncher" },
    { name: "Rainmeter", category: "fun", desc: "桌面美化工具，可以在桌面放时钟、天气、系统监控等小部件。社区皮肤极多，占用资源很少。", license: "GPL-2.0", stars: 6094, size: "2.5 MB", url: "https://github.com/rainmeter/rainmeter" },
    { name: "Lively Wallpaper", category: "fun", desc: "把视频、网页或 GIF 设成动态壁纸，全屏玩游戏时自动暂停省资源。免费开源，可替代收费的 Wallpaper Engine。", license: "GPL-3.0", stars: 19861, size: "208.0 MB", url: "https://github.com/lively-community/lively" }
  ],
  insights: [
    {
      title: "DoorDash 云端智能体一个月跑 13 万个工程任务",
      summary: "DoorDash 把编程智能体从工程师的笔记本迁到内部云平台 Flux，每个任务在独立的 Firecracker 微虚拟机里执行，通过 MCP 网关控制权限并留审计记录。2026 年有一个月，Flux 自动完成了 13 万个工程任务。平台现在每周做 2.5 万多次自动代码评审，300 多个可复用 Playbook 每周被触发超过 1 万次。",
      kind: "usage",
      source: "InfoQ（原始来源：DoorDash 工程博客）",
      asOf: "2026-08",
      url: "https://www.infoq.cn/article/4IPptJpXQqX5Lr77uBFZ"
    },
    {
      title: "Stripe：AI 智能体代付款一个月涨 38 倍",
      summary: "Stripe 高管透露，9 月 AI 智能体通过 Link 支付的交易笔数增长 38 倍、金额增长 20 倍，但没有公布绝对数字，基数也很小。接入 Link 的智能体从约 70 个增至约 200 个，单笔一般在 100 美元左右。按笔数算零售占 36%，按金额算旅行占 28%。",
      kind: "usage",
      source: "The Decoder（原始来源：Upstarts Media 对 Stripe 的采访）",
      asOf: "2026-09",
      url: "https://the-decoder.com/stripe-says-ai-agent-purchases-are-adding-up-but-it-wont-share-the-numbers/"
    },
    {
      title: "Figma 调研：77% 非设计岗常参与设计",
      summary: "Figma 在 8 月中旬到 9 月中旬调查了全球 1800 多名设计师、开发者和产品经理，其中 507 人在印度。印度受访者中，77% 的非设计岗位人员经常参与设计工作，83% 说自己效率更高。另有 65% 认为工作越来越割裂、看不清全局，AI 工具正在模糊岗位边界。",
      kind: "jobs",
      source: "Figma 官方博客（Figma 自有调研）",
      asOf: "2026-09",
      url: "https://www.figma.com/blog/figma-deepens-investment-in-india/"
    }
  ]
};
