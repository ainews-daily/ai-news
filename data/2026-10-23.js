window.AI_DAILY = window.AI_DAILY || {};
window.AI_DAILY["2026-10-23"] = {
  date: "2026-10-23",
  highlights: [
    "据彭博社报道，DeepSeek 已完成约 150 亿美元（约 1000 亿元）融资，宁德时代、腾讯在投资方之列。",
    "“决策模型”成了新战场：OpenAI 全面开放 Decisions API，蚂蚁数科和中国电信同一天发布同类模型。",
    "微软 MAI-DxO 研究登上《科学》，在复杂病例模拟测试中诊断准确率 83%，独立看诊的医生为 36%。"
  ],
  items: [
    {
      title: "DeepSeek 据报完成约 150 亿美元融资",
      summary: "TechCrunch 援引彭博社报道，DeepSeek 完成约 150 亿美元（约 1000 亿元人民币）融资，宁德时代、腾讯等机构参与，这是国内 AI 行业最大的一笔融资。10 月中旬已有媒体报道它“拟融资”，现在报道说已经完成，距离美国要求联邦机构移除 DeepSeek 只隔了两天。DeepSeek 未回应置评请求，估值也没有披露。",
      category: "industry", region: "cn", source: "TechCrunch（援引彭博社）",
      url: "https://techcrunch.com/2026/10/22/deepseek-reportedly-raises-15b-days-after-us-restrictions/"
    },
    {
      title: "OpenAI 全面开放决策模型 Decisions API",
      summary: "Decisions API 9 月底在开发者日上公布，10 月 22 日起对所有客户开放：给它一组选项，它会快速选出一个并给出置信度。它由 ChatGPT Luna 改造而来，响应时间从 1–3 秒降到 100–180 毫秒，Box、Datadog、Ramp、Speak 参与了试用。这个领域原本是 TypeSafe 的 Jev 领先，OpenAI 进场后竞争会更激烈。",
      category: "model", region: "intl", source: "OpenAI",
      url: "https://openai.com/index/decisions-api"
    },
    {
      title: "微软 MAI-DxO 登《科学》：复杂病例准确率 83%",
      summary: "微软 AI 的诊断系统 MAI-DxO 让多个智能体分工问诊、开检查、讨论诊断。在《新英格兰医学杂志》复杂病例的模拟测试中，它的准确率为 83%，独立查资料的初级保健和内科医生为 36%，但对比组里没有专科医生，急诊病例上的提升也有限。微软接下来会和梅奥诊所训练医疗基础模型，并到真实临床环境中做评估。",
      category: "research", region: "intl", source: "TechCrunch",
      url: "https://techcrunch.com/2026/10/22/microsofts-mustafa-suleyman-says-its-ai-outperforms-doctors-on-hard-cases-as-he-chases-medical-superintelligence/"
    },
    {
      title: "蚂蚁数科发布决策模型 LingDT-Decision-1.0",
      summary: "蚂蚁数科 10 月 22 日发布面向结构化决策的 LingDT-Decision-1.0，有 4B 和 27B 两个版本，支持多选和按顺序做多步决策。官方称在客服、风控、金融场景中，它比大语言模型少用 90% 以上的 Token，响应快 10 倍。模型已上线 DTMaaS 平台限时免费体验，评测数据都来自厂商自己。",
      category: "model", region: "cn", source: "IT之家",
      url: "https://www.ithome.com/1/016/633.htm"
    },
    {
      title: "中国电信开源意图理解模型 Xing4.0-Intent",
      summary: "中国电信人工智能研究院的星辰实验室发布 Xing4.0-29B-Intent，能做意图分类、实体和事件抽取，也能在给定选项里做决策，推理延迟低于 200 毫秒。模型权重、约 275 万条训练语料和推理镜像都开源了，代码采用 Apache 2.0 许可。官方自测的决策分数是 70，高于 Jev 的 56，这个结果还没有第三方复现。",
      category: "model", region: "cn", source: "量子位",
      url: "https://www.qbitai.com/2026/10/504832.html"
    },
    {
      title: "OpenAI 用数千个智能体 32 分钟分析小鼠脑数据",
      summary: "OpenAI 和 PerturbAI、Scripps Research 合作，让数千个基于 GPT-Rosalind 的智能体各自分析一个基因扰动，处理了数百万个小鼠脑细胞的 CRISPR 图谱。整个分析只用了 32 分钟，团队估计人工要几个月到一年，结果里出现了胆固醇调节和神经退行性变可能相关等新线索。论文已发在 bioRxiv，这些线索还要回到实验室验证。",
      category: "research", region: "intl", source: "OpenAI",
      url: "https://openai.com/index/scaling-ai-research-for-complex-biological-data"
    },
    {
      title: "Google 给每个智能体配一台隔离虚机",
      summary: "Google Cloud 推出 Agent Compute Engine，给每个 AI 智能体分配一台由 Titanium 芯片隔离的微型虚拟机，空闲时自动暂停，在 20 万个智能体的测试中暂停和恢复不到 500 毫秒。同时开源的 Kubernetes 运行时 Agent Substrate 号称单台服务器能多放 10 倍智能体。这套系统已经在支撑 Gemini，未来几个月开放预览。",
      category: "tools", region: "intl", source: "Google Cloud",
      url: "https://cloud.google.com/blog/topics/ai-infrastructure/agent-compute-engine-deep-dive"
    },
    {
      title: "Anthropic 将 Agent Skills 捐给基金会",
      summary: "Anthropic 10 月 22 日宣布把 Agent Skills 标准捐给 Linux 基金会旗下的 Agentic AI Foundation，和之前捐出的 MCP 放在同一个中立机构下。Anthropic 说要让这个标准保持开放、由社区驱动、不偏向任何厂商。各家智能体以后共用同一种技能格式的可能性更大了。",
      category: "industry", region: "intl", source: "Anthropic",
      url: "https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation"
    },
    {
      title: "米哈游等开源 GameScaling 游戏模型",
      summary: "米哈游崩坏 AI 团队和清华、北大、港大等高校开源 GameScaling 系列，基于 Qwen3.5 视觉语言模型继续预训练，有 0.8B 到 27B 共 8 个检查点。模型看画面和操作历史，直接输出键盘鼠标指令，覆盖 Minecraft、DOOM 和密室解谜，训练用了约 1600 小时游戏数据。代码和权重采用 Apache 2.0 许可，研究的是游戏场景里的规模定律。",
      category: "research", region: "cn", source: "IT之家",
      url: "https://www.ithome.com/1/016/575.htm"
    },
    {
      title: "宇树设世界物理 AI 大赛，每年拿出数千万元奖金",
      summary: "王兴兴在 10 月 22 日的世界物理 AI 大会上宣布，宇树每年拿出数千万元，办面向全球团队和个人的世界物理 AI 大赛，设格斗、灵巧操作、康养等八个赛道。他还提出三个布局方向：大规模量产、自研物理 AI 小模型、建设超大规模算力集群。宇树同天启动“宇创计划”，打算五年孵化 200 多家生态企业。",
      category: "industry", region: "cn", source: "IT之家（证券时报）",
      url: "https://www.ithome.com/1/016/514.htm"
    },
    {
      title: "英伟达推出 AI 工厂运维平台 Minerva",
      summary: "英伟达在柏林 GTC 期间发布 Minerva，把 GPU、网卡、交换机和训练任务的遥测数据汇成知识图谱，用来提前预测故障、把大量告警归并成可能的根因。IREN 已经在用，IBM、Lambda、Tesla 等计划部署，戴尔、联想、超微会把它放进自己的运维产品。大集群里一次故障就会浪费大量 GPU 时间，这类运维工具正在变成刚需。",
      category: "tools", region: "intl", source: "NVIDIA",
      url: "https://blogs.nvidia.com/blog/minerva-platform-infrastructure/"
    },
    {
      title: "Meta 修好漏洞，恢复 Muse 分享功能",
      summary: "Meta 前几天因为 Muse 的分享链接能通过公开 DNS 记录被搜到而暂停了分享，10 月 22 日修复后恢复。修复后旧链接全部失效，之前分享过的用户需要重新发送链接。问题出在链接地址里带着对话标题，安全公司此前找到了 6800 多个可被发现的分享页面。",
      category: "industry", region: "intl", source: "The Verge",
      url: "https://www.theverge.com/tech/1017066/meta-muse-sharing-back-on-artifiacts"
    },
    {
      title: "商务部将出台智能产品消费应用工作方案",
      summary: "商务部在 10 月 22 日的国新办发布会上表示，将出台《加快智能产品在消费领域应用工作方案》，给新兴产业拓展市场。此前今年 1 月已有七部门对手机、智能手表、智能眼镜等产品的购新给予补贴。AI 手机、AI 眼镜这类终端可能会得到更多政策支持。",
      category: "industry", region: "cn", source: "IT之家",
      url: "https://www.ithome.com/1/016/743.htm"
    },
    {
      title: "1Password 让 AI 智能体代登录，但看不到密码",
      summary: "1Password 推出 1Password for Agents：智能体要登录时先向 1Password 出示自己的数字密钥，用户确认后由 1Password 代填凭证，智能体始终拿不到密码。首批支持 Claude Duet、OpenAI Dots、Grok Bot、Meta Muse 等智能体。美国大银行最近正在封禁直接拿用户密码登录的 AI 智能体，这类代登录方案正好补上缺口。",
      category: "tools", region: "intl", source: "TechCrunch",
      url: "https://techcrunch.com/2026/10/22/1password-launches-a-way-for-ai-agents-to-log-in-on-your-behalf-without-seeing-your-password/"
    },
    {
      title: "小鹏 IRON 机器人能预判人 6 秒内的动作",
      summary: "小鹏人形机器人 IRON 升级到第二代 VLA 大模型，每 0.2 秒根据画面重新推理一次，可以预测人在 6 秒内的动作变化。演示里它能握手、碰拳、击掌，人临时变招时也能跟着调整。这还是演示视频，离真实场景里稳定使用还有距离。",
      category: "research", region: "cn", source: "IT之家",
      url: "https://www.ithome.com/1/016/667.htm"
    }
  ],
  corp: [
    {
      title: "山姆召回“好健康”牡蛎精胶囊，仅退款",
      summary: "山姆会员商店 10 月 22 日下架并召回“好健康”牡蛎精胶囊的部分批次，报道称海关检出污染物，具体是什么污染物没有公布。山姆客服称是应海关风险提示下架、应品牌方要求召回，已经启动退款；品牌方说是为了配合海关检测主动召回，方案为仅退款。",
      kind: "quality", company: "山姆会员商店（沃尔玛中国）", source: "新浪财经",
      url: "http://finance.sina.com.cn/wm/2026-10-22/doc-iniwamir5916149.shtml"
    },
    {
      title: "奥迪中国迎来首位中国籍总裁张俊",
      summary: "奥迪宣布前奇瑞国际副总裁兼 CEO 张俊 11 月 1 日起出任奥迪中国总裁，是第一位中国籍总裁；现任总裁 Johannes Roscheck 回德国总部。奥迪 CEO Gernot Döllner 说中国是奥迪最重要的市场之一，这次任命是为了应对快速变化的中国市场。",
      kind: "org", company: "奥迪", source: "IT之家",
      url: "https://www.ithome.com/1/016/484.htm"
    },
    {
      title: "一汽、广汽成立联合工作组",
      summary: "10 月 22 日，中国一汽董事长邱现东和广汽集团董事长冯兴亚在广汽总部出席联合工作组启动会，推进重点合作项目落地。双方 9 月 29 日签了战略合作框架协议，10 月 8 日又和丰田签了三方协议，两大国有车企的合作正在从协议走向具体项目。",
      kind: "org", company: "中国一汽、广汽集团", source: "IT之家",
      url: "https://www.ithome.com/1/016/748.htm"
    },
    {
      title: "小鹏产品经理为发布会“老登”说法道歉",
      summary: "小鹏 MONA L05 预售发布会上，00 后产品经理 Etta 多次用“老登”一词，呼吁拒绝“登味审美”，被部分网友批评用贬低一个群体来博关注。她 10 月 22 日发视频道歉，说这是团队平时开玩笑的词、没有恶意，但确实让人不适，会认真反思；小鹏公司没有单独发声明。",
      kind: "dispute", company: "小鹏汽车", source: "IT之家",
      url: "https://www.ithome.com/1/016/698.htm"
    },
    {
      title: "哈啰顺风车被曝有人借订单留招嫖暗语",
      summary: "有车主反映，在哈啰顺风车接到一笔以送货为名的订单，订单留言疑似招嫖。哈啰回应称这是利用平台发布暗语引流的新型灰产，已封禁相关账号、紧急排查所有风险点，并把固定的线索移交主管部门。",
      kind: "dispute", company: "哈啰", source: "IT之家（澎湃新闻）",
      url: "https://www.ithome.com/1/016/509.htm"
    },
    {
      title: "华为据报获 150 亿元离岸银团贷款",
      summary: "彭博社报道，华为从中国银行、建设银行、工商银行等六家中资银行拿到 150 亿元离岸人民币贷款，期限 7 年，用于一般企业用途。这是华为 2020 年以来第一次拿到离岸银团贷款。华为和三家银行都没有立即回应。",
      kind: "business", company: "华为", source: "IT之家（彭博社）",
      url: "https://www.ithome.com/1/016/687.htm"
    },
    {
      title: "宝马裁 8000 白领，4 万人查补偿挤崩系统",
      summary: "宝马计划在 2027 年底前削减约 8000 个白领岗位，主要是德国的研发和非生产岗，部分员工补偿最高可达 65 万欧元。方案公布后约 4 万名员工登录人力系统查补偿，系统几小时内崩溃，公司已暂停接收新申请。宝马说这是用一次性支出换长期成本下降，预计 2028 年起每年省约 10 亿欧元。",
      kind: "layoff", region: "intl", company: "宝马", source: "澎湃新闻",
      url: "https://thepaper.cn/newsDetail_forward_34307264"
    },
    {
      title: "微软关停运营 17 年的 Garage 创新平台",
      summary: "GeekWire 根据微软内部文件报道，微软不再以集中职能的方式运营 The Garage，全球多处创客空间关闭或调整，部分最早 10 月 23 日关闭，官网已重定向到微软主页。微软说以后把实验和跨团队协作放进各业务团队的日常工作，全球黑客马拉松正在“重新构想”；报道没有提到裁员。",
      kind: "org", region: "intl", company: "微软", source: "IT之家（GeekWire）",
      url: "https://www.ithome.com/1/016/764.htm"
    },
    {
      title: "卡普空 1177 万会员信息泄露并致歉",
      summary: "卡普空 10 月 22 日发表声明，会员系统 19 日被第三方入侵，全球约 1177 万个账号的邮箱等信息泄露，至少 196 个账号的密码被改。公司称支付信息没有受影响，向用户致歉，并提醒大家警惕可疑邮件。",
      kind: "quality", region: "intl", company: "卡普空", source: "新浪财经（日本广播协会）",
      url: "http://finance.sina.com.cn/roll/2026-10-22/doc-iniwcafi5974831.shtml"
    }
  ],
  voices: [
    {
      title: "黄仁勋：新云厂商缺的是营运资金",
      summary: "黄仁勋 10 月 22 日在柏林 GTC 期间说，AI 各个领域的需求都十分旺盛，“目前中间缺失的环节，是推动这些企业增长所需的营运资金”。他认为“新云”厂商的扩张正被资本短缺卡住，而不是需求不足。",
      person: "黄仁勋", role: "英伟达 CEO", region: "intl", said: "2026-10-22", source: "财联社",
      url: "https://www.cls.cn/detail/2512629"
    },
    {
      title: "盖茨：要为 AI 带来的二十年颠覆做好准备",
      summary: "比尔·盖茨接受 The Verge 采访时说，人们要为 AI 带来的二十年颠覆性变革做好准备。他认为这段时期可能会非常痛苦，甚至会把社会分裂成两派，人们必须找到掌控局面的方法。对于突破什么时候到来，他说谁也说不准。",
      person: "比尔·盖茨", role: "微软联合创始人、盖茨基金会主席", region: "intl", said: "2026-10-22", source: "IT之家（The Verge）",
      url: "https://www.ithome.com/1/016/742.htm"
    },
    {
      title: "Suleyman：医疗 AI 两三年内会大幅进步",
      summary: "微软 AI CEO Mustafa Suleyman 在介绍 MAI-DxO 时，把这项成果称为迈向“medical superintelligence”的一步。他说“We're just true believers”，并预计医疗 AI 模型的能力会在未来 24 到 36 个月里大幅提升。",
      person: "Mustafa Suleyman", role: "微软 AI CEO", region: "intl", said: "2026-10-22", source: "TechCrunch",
      url: "https://techcrunch.com/2026/10/22/microsofts-mustafa-suleyman-says-its-ai-outperforms-doctors-on-hard-cases-as-he-chases-medical-superintelligence/"
    },
    {
      title: "王兴兴：物理 AI 已看到被击穿的苗头",
      summary: "王兴兴 10 月 22 日在世界物理 AI 大会上说：“目前物理AI已经看到被击穿的苗头。”他判断具身智能迈过“ChatGPT 时刻”很可能就在最近 1–2 年或 2–3 年，核心难点是让 AI 模型的输入输出和真实机器人对齐。他还认为商业服务场景会比家庭和工业更早落地。",
      person: "王兴兴", role: "宇树科技创始人", region: "cn", said: "2026-10-22", source: "财联社（科创板日报）",
      url: "http://finance.sina.com.cn/roll/2026-10-22/doc-iniwamir5882469.shtml"
    },
    {
      title: "刘庆峰：国产算力落后约两代，终会并跑",
      summary: "刘庆峰 10 月 22 日在科大讯飞 1024 全球开发者节上说，国产算力“对标全球虽然还有两代左右的差距”，但进步很快，“一定会有并跑甚至领跑的一天”。他还提到国内真正投入大模型训练的公司很少，未来会有更多人参与。",
      person: "刘庆峰", role: "科大讯飞董事长", region: "cn", said: "2026-10-22", source: "IT之家",
      url: "https://www.ithome.com/1/016/493.htm"
    },
    {
      title: "赵非：2027 年 L3 量产，2028 年 L4 商业化",
      summary: "长安汽车董事长赵非 10 月 21 日在世界智能网联汽车大会上预计，“2027 年行业实现 L3 级量产、2028 年实现 L4 级商业化运营”。他同时呼吁行业以安全为底线，拒绝虚假宣传和“伪创新”。",
      person: "赵非", role: "长安汽车董事长", region: "cn", said: "2026-10-21", source: "IT之家",
      url: "https://www.ithome.com/1/016/683.htm"
    }
  ],
  pricing: [
    {
      title: "WorkBuddy 教育公益版：老师每月领 2000 积分",
      summary: "腾讯 SSV 和 WorkBuddy 团队 10 月 19 日上线教育公益版，全国教师通过“腾讯SSV”公众号认证后，每月可领 2000 积分，连续领 12 个月，不限地区和学段。积分每月 1 日补满，用完后还能继续用免费模型；截至 10 月 22 日已有超过 10 万名老师申领。",
      product: "腾讯 WorkBuddy", change: "free", source: "IT之家",
      url: "https://www.ithome.com/1/016/690.htm"
    }
  ],
  design: [
    {
      title: "Canva 发布首个自研图像模型 Craft",
      summary: "Canva 推出自研图像生成模型 Canva Craft，先规划元素位置、比例和文字，再生成最高 2K 的图片，支持约 30 种宽高比，文字清晰，还能只改局部。它用 Canva 模板库里的人工设计稿训练，生成的图可以用 Magic 功能转成分层设计稿。所有用户都能在 Dream Lab 里用，定价和免费额度官方暂未说明。",
      kind: "trend", source: "TechCrunch",
      url: "https://techcrunch.com/2026/10/22/canva-releases-its-first-image-generation-model/"
    },
    {
      title: "苹果 Keynote、Pages 加入 AI 智能助理",
      summary: "苹果 iWork 15.4.1 给 Pages、Numbers、Keynote 加入智能助理，可以用自然语言生成和润色内容、搜索最新信息放进文档。目前是测试版，只支持美式英语，需要 iOS 27 或 iPadOS 27 的 Apple Intelligence 设备，并且要订阅 Apple Creator Studio。",
      kind: "trend", price: "需订阅 Apple Creator Studio", source: "IT之家",
      url: "https://www.ithome.com/1/016/762.htm"
    },
    {
      title: "ComfyUI：节点式本地 AI 出图工作台",
      summary: "用拖节点、连线的方式搭 Stable Diffusion、FLUX 等模型的出图流程，局部重绘、放大、控制姿势都能组合，工作流还能存成文件分享给别人。GitHub 超过 14 万 Star，更新非常频繁，Windows 有便携包可以直接用。上手门槛比普通修图软件高，需要显存足够的显卡，模型要另外下载。",
      kind: "tool", price: "开源免费", stars: 142009, source: "GitHub",
      url: "https://github.com/Comfy-Org/ComfyUI"
    },
    {
      title: "InvokeAI：更像修图软件的本地 AI 绘图",
      summary: "在本地跑 Stable Diffusion 和 FLUX 一类模型，提供统一画布、局部重绘、扩图和图层，用法比节点式工具更接近修图软件。项目已到 6.x 版本，有 Windows 启动器安装包。需要一块显存足够的 NVIDIA 显卡，模型文件比较占硬盘。",
      kind: "tool", price: "开源免费", stars: 28818, source: "GitHub",
      url: "https://github.com/invoke-ai/InvokeAI"
    },
    {
      title: "Onlook：在 React 代码上直接拖拽改设计",
      summary: "像用 Figma 一样拖拽修改样式和布局，改动直接写回 Next.js 加 Tailwind 项目的代码，也能用 AI 对话生成页面。Windows 桌面版还停在 0.2.32，主力开发已经转向网页版，还在早期，适合尝鲜，别直接用在正式项目。自己部署免费，官方托管的云版要付费。",
      kind: "tool", price: "开源免费（托管版付费）", stars: 26981, source: "GitHub",
      url: "https://github.com/onlook-dev/onlook"
    },
    {
      title: "Blockbench：低多边形 3D 建模和贴图",
      summary: "专做方块风格和低多边形 3D 模型，能建模、画贴图、做动画，可以导出 glTF、OBJ 等通用格式。比 Blender 好上手得多，已到 5.x 版本，相当成熟，也有网页版。不适合写实或高精度建模。",
      kind: "tool", price: "开源免费", stars: 6083, source: "GitHub",
      url: "https://github.com/JannisX11/blockbench"
    },
    {
      title: "Material Maker：用节点生成 PBR 材质",
      summary: "用节点图生成可以无缝平铺的 PBR 材质贴图，也能直接在 3D 模型上绘制，思路类似 Substance Designer。基于 Godot 引擎开发，1.7 版功能已够日常使用。界面和文档主要是英文，复杂节点图对显卡有一定要求。",
      kind: "tool", price: "开源免费", stars: 6014, source: "GitHub",
      url: "https://github.com/RodZill4/material-maker"
    },
    {
      title: "UnoCSS 插件：原子类补全和样式预览",
      summary: "给用 UnoCSS 的项目提供类名自动补全，悬停就能看到生成的 CSS，颜色和图标也能直接预览，照着设计稿还原样式时不用来回翻文档。插件和 UnoCSS 主仓库同步发版，VS Code 商店安装量约 43 万。只对 UnoCSS 项目有用，Tailwind 项目用不上。",
      kind: "plugin", price: "开源免费", stars: 18984, source: "VS Code Marketplace",
      url: "https://marketplace.visualstudio.com/items?itemName=antfu.unocss"
    }
  ],
  apps: [
    { name: "PDFsam Basic", category: "office", desc: "专门做 PDF 合并、拆分、旋转、按页抽取和交叉混排，离线运行，文件不用上传到网页。功能单一但稳定，批量处理大量 PDF 比在线工具省心。", license: "AGPL-3.0", stars: 4639, size: "92.5 MB", url: "https://github.com/torakiki/pdfsam" },
    { name: "PDF4QT", category: "office", desc: "开源 PDF 阅读和编辑器，能批注、改页面、对比两份 PDF 的差异，还能做简单的签名和表单处理。比只能看的阅读器能干的事多，又比商业 PDF 编辑器轻。", license: "MIT", stars: 1504, size: "29.6 MB", url: "https://github.com/JakubMelka/PDF4QT" },
    { name: "Mailspring", category: "office", desc: "在一个窗口里收发 Gmail、Outlook、QQ 等多个 IMAP 邮箱，支持统一收件箱和快捷键。界面比 Thunderbird 清爽，基础功能免费，已读回执、稍后发送等属于付费 Pro 功能。", license: "GPL-3.0", stars: 17939, size: "232.5 MB", url: "https://github.com/Foundry376/Mailspring" },
    { name: "QOwnNotes", category: "office", desc: "把笔记存成本地 Markdown 文件，可以配合 Nextcloud 或任意网盘同步。启动快、不锁格式，以后换软件笔记直接就能用。", license: "GPL-2.0", stars: 5921, size: "51.5 MB", url: "https://github.com/pbek/QOwnNotes" },
    { name: "SourceGit", category: "coding", desc: "跨平台的 Git 图形客户端，提交历史图、交互式变基、冲突合并、工作树都能可视化操作。体积小、响应快，中文界面完善，免费用起来接近 Fork 这类付费客户端。", license: "MIT", stars: 6219, size: "26.4 MB", url: "https://github.com/sourcegit-scm/sourcegit" },
    { name: "Notepad4", category: "coding", desc: "Notepad2 一系的轻量文本编辑器，绿色版约 1 MB，大文件秒开，支持几十种语言的语法高亮。拿来替代系统记事本看日志、改配置，比开 IDE 快得多。", license: "BSD-3-Clause", stars: 5064, size: "1.1 MB", url: "https://github.com/zufuliu/notepad4" },
    { name: "DB Browser for SQLite", category: "coding", desc: "用图形界面打开、查询、编辑 SQLite 数据库文件，建表、导入导出 CSV、执行 SQL 都很方便。只做 SQLite 一种数据库，比通用数据库客户端上手快，最新正式版是 2024 年的 3.13.1，仓库仍在持续提交。", license: "MPL-2.0 / GPL-3.0", stars: 24733, size: "18.9 MB", url: "https://github.com/sqlitebrowser/sqlitebrowser" },
    { name: "Alacritty", category: "coding", desc: "用 GPU 渲染的终端，滚动大量输出、跑全屏终端程序时明显更顺。配置全靠一个 TOML 文件，没有标签页，适合搭配 tmux 或 Zellij 用。", license: "Apache-2.0", stars: 66021, size: "2.3 MB", url: "https://github.com/alacritty/alacritty" },
    { name: "Magpie", category: "system", desc: "把任意窗口实时放大到全屏，并用 FSR、Anime4K 等算法做超分辨率，老游戏和低分辨率程序在高分屏上不再糊。比游戏自带的缩放清晰，版本还是 0.x，个别游戏可能不兼容。", license: "GPL-3.0", stars: 16016, size: "9.6 MB", url: "https://github.com/Blinue/Magpie" },
    { name: "Kando", category: "system", desc: "按一个快捷键就在鼠标位置弹出饼状菜单，用来启动程序、发送快捷键、打开网址。比记一堆组合键直观，数位板用户尤其顺手。", license: "MIT", stars: 6511, size: "170.9 MB", url: "https://github.com/kando-menu/kando" },
    { name: "AltSnap", category: "system", desc: "按住 Alt 键就能在窗口任意位置拖动和缩放窗口，不用去找标题栏和边框。安装包只有约 0.2 MB，常驻占用很低。", license: "GPL-3.0", stars: 5327, size: "0.2 MB", url: "https://github.com/RamonUnch/AltSnap" },
    { name: "WinUtil", category: "system", desc: "Chris Titus 维护的 Windows 工具箱，在一个界面里批量装软件、关遥测、调系统设置、修复更新。所有改动都能看到源码，但部分调整比较激进，建议先建还原点再用。", license: "MIT", stars: 64794, size: "0.9 MB", url: "https://github.com/ChrisTitusTech/winutil" },
    { name: "Stellarium", category: "fun", desc: "桌面版天文馆，输入地点和时间就能看到当时的真实星空、行星位置，还能模拟日食月食。星表数据和渲染都很专业，天文爱好者常用它规划观测。", license: "GPL-2.0", stars: 10101, size: "466.4 MB", url: "https://github.com/Stellarium/stellarium" },
    { name: "Luanti", category: "fun", desc: "原名 Minetest 的开源体素沙盒游戏，可以联机建造，也能装社区做的各种游戏模组。完全免费、配置要求很低，适合想玩“我的世界”类游戏又不想付费的人。", license: "LGPL-2.1-or-later", stars: 13760, size: "11.6 MB", url: "https://github.com/luanti-org/luanti" },
    { name: "Kodi", category: "fun", desc: "开源家庭影音中心，把本地或 NAS 上的电影、剧集、音乐整理成海报墙，支持遥控器和电视大屏操作。插件生态成熟，适合把旧电脑改成客厅播放机。", license: "GPL-2.0-or-later", stars: 21371, size: "74 MB", url: "https://github.com/xbmc/xbmc" }
  ],
  insights: [
    {
      title: "Gartner：只有 13% 的企业从 AI 拿到大回报",
      summary: "Gartner 调查了 2002 名 CIO 和技术负责人，只有 13% 说 AI 带来了重大或变革性的回报。58% 的 CIO 被要求用 AI 省钱，但 51% 预计 AI 反而会推高技术栈的总运营成本。尽管如此，75% 的 CEO 仍计划增加技术投入。",
      kind: "usage", source: "The Decoder（数据来自 Gartner IT Symposium 发布的调查）", asOf: "2026-10",
      url: "https://the-decoder.com/only-13-percent-of-companies-see-real-returns-from-ai-gartner-survey-finds/"
    },
    {
      title: "Uber 给全部 3 万员工开通 ChatGPT Work",
      summary: "Uber 先让 1000 名员工试用 ChatGPT Work，约 80% 的早期用户不是工程师，分布在财务、运营、产品等部门。他们用它分析运营数据、把培训材料本地化成多种语言、给自己搭交互式仪表板。Uber 还组了 30 人的 AI 工程师小组，和各团队一起花两周把部分工作自动化。",
      kind: "usage", source: "TechCrunch", asOf: "2026-10",
      url: "https://techcrunch.com/2026/10/22/uber-puts-all-30000-employees-on-chatgpt-work/"
    },
    {
      title: "Anthropic 平台工程团队代码已全由 Claude 写",
      summary: "Anthropic 平台工程负责人 Katelyn Lesse 在 Grafana 的 ObservabilityCON 上说，团队系统的代码“全部”由 Claude 编写。工程师的工作重心转到系统设计、验证和代码质量把关，比如在 Python 迁移到 Rust 的项目里专门设计验证机制。团队已允许智能体无人干预地修复测试，管理层对让它直接改代码库仍比较谨慎。",
      kind: "jobs", source: "IT之家（ObservabilityCON 现场发言）", asOf: "2026-10",
      url: "https://www.ithome.com/1/016/660.htm"
    }
  ]
};
