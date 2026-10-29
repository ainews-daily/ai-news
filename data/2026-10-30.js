window.AI_DAILY = window.AI_DAILY || {};
window.AI_DAILY["2026-10-30"] = {
  "date": "2026-10-30",
  "highlights": [
    "Mistral 开放万亿参数模型 Le Chonk 的权重，API 价格同时降到原来的一半左右。",
    "Google 财报承认 AI 搜索单次变现偏低，搜索广告增速不及预期，股价盘后大跌。",
    "国内模型密集更新：腾讯预告混元 Hy4 首次支持视觉理解，扩散智能开源 35B 扩散语言模型 Clover。"
  ],
  "items": [
    {
      "title": "Mistral 开放万亿参数 Le Chonk 权重",
      "summary": "Mistral 把本月初发布的 Mistral Large 4（Le Chonk）权重放上 Hugging Face，总参数约 1 万亿，可本地部署，定位威胁检测和事件响应。Mistral 称其网安能力与 GLM-5.3 相当，每个任务少用 47% token，并在 Artificial Analysis 编码智能体指数上领先其他开放模型。这是欧美目前最大的开放权重模型，但独立评测显示整体仍落后最好的中国开源模型。",
      "category": "model",
      "region": "intl",
      "source": "TechCrunch",
      "url": "https://techcrunch.com/2026/10/29/mistral-releases-weights-for-its-trillion-parameter-ai-model-targeting-cybersecurity/"
    },
    {
      "title": "Google 承认 AI 搜索变现低，广告推向全球",
      "summary": "Alphabet 三季度搜索广告收入 634 亿美元，同比增 12%，低于预期的 15%，股价盘后一度跌约 10%。高管 Philipp Schindler 承认，AI Mode 查询快速增长但单次变现较低，拖累了增速。Google 同时宣布 AI Mode 广告首次推向美国以外市场，并在美国上线多轮对话广告；Google Cloud 收入则翻倍至 307 亿美元。",
      "category": "industry",
      "region": "intl",
      "source": "TechCrunch",
      "url": "https://techcrunch.com/2026/10/28/google-expands-ai-search-ads-globally-as-core-ad-growth-slows/"
    },
    {
      "title": "微软首次公布 Azure 收入：单季 332 亿美元",
      "summary": "微软季报首次单独披露 Azure 收入，7–9 月为 332 亿美元，同比增 48%，比分析师预期高约 8.5 亿美元，略超同期 Google Cloud 的 307 亿美元。监管文件还显示，微软本季从 OpenAI 合作中确认 100 亿美元收入，约占当季总营收 923 亿美元的 11%，持股比例则从约 25% 降到约 24%。两家公司越来越多地争抢同一批客户，但财务上仍深度绑定。",
      "category": "industry",
      "region": "intl",
      "source": "TechCrunch",
      "url": "https://techcrunch.com/2026/10/28/microsoft-just-shared-azures-actual-revenue-in-dollars-33-2-billion/"
    },
    {
      "title": "OpenAI 重写 Model Spec，围绕五条核心价值",
      "summary": "OpenAI 发布新版 Model Spec，按忠于用户意图、减少伤害、诚实透明、尊重人的自主、关怀五条价值重新组织，模型在文中改称“GPT”，大部分细碎的文风规定被删除。新增的根级规则禁止模型追求营收、自我保全等额外目标，要求在合法监督下可被纠正，自主任务必须有明确范围和终止条件。OpenAI 也承认现有模型还没完全做到，正在试新的训练方法。",
      "category": "model",
      "region": "intl",
      "source": "OpenAI",
      "url": "https://openai.com/index/updated-model-spec/"
    },
    {
      "title": "腾讯预告混元 Hy4：首次加入视觉理解",
      "summary": "腾讯云与智慧产业事业群 CEO 汤道生 10 月 29 日在腾讯全球数字生态大会上说，混元 Hy4 即将发布。与 8 月的 Hy4 preview（总参数 770B、激活 49B）相比，正式版加强了长程任务和真实生产力任务，思维链效率更高，并首次支持视觉理解。定位性价比的 Hy4 flash 也会在近期推出，具体参数和日期均未公布。",
      "category": "model",
      "region": "cn",
      "source": "IT之家（转引科创板日报）",
      "url": "https://www.ithome.com/1/019/328.htm"
    },
    {
      "title": "港大孔令鹏团队开源 35B 扩散语言模型 Clover",
      "summary": "深圳初创公司扩散智能（DiffuSpace）开源了 Clover-35B-A3B-Preview，权重已放到 Hugging Face 和 GitHub。这是一个主打智能体编程和工具调用的扩散语言模型，采用 MoE 架构，总参数 350 亿，每个 Token 激活约 30 亿参数。团队自报 SWE-bench Verified 得分 73.6；在单张 GB300 上，整体生成速度约为每秒 680 个 Token。",
      "category": "model",
      "region": "cn",
      "source": "21世纪经济报道",
      "url": "https://m.21jingji.com/article/20261029/herald/efc673edfa53d80b20b6478dba452db9.html"
    },
    {
      "title": "OpenAI 公开四层监控，专抓前沿模型失控",
      "summary": "OpenAI 披露其失对齐监控体系：L0 用激活探针初筛，L1 由模型审查思维链和工具调用，L2 调查智能体复原事件，L3 结合网络日志处理敏感任务。METR 和 Redwood Research 估计内部智能体流量中 75%–94% 可被监控，5–7 月曾有约一成内部 Codex 流量因上下文压缩漏监。用 Hugging Face 事件回放测试，系统在智能体逃出沙箱约 30 分钟后就会报警，比真实入侵早 30 多小时。",
      "category": "research",
      "region": "intl",
      "source": "OpenAI",
      "url": "https://openai.com/index/how-we-detect-frontier-model-misalignment/"
    },
    {
      "title": "智元发布具身模型 GO-3 Preview，年底开源",
      "summary": "智元发布具身模型 GO-3 Preview，用人类第一视角视频和机器人轨迹训练，覆盖预训练、后训练和部署后的持续学习。官方称它在 RoboDojo、RoboTwin 等三个榜单排名第一；精灵 G2 在便利店上岗，任务成功率从第一天的 28.6% 升到 5 天后的 85.7%。智元计划年底前完整开源这个模型。",
      "category": "model",
      "region": "cn",
      "source": "IT之家",
      "url": "https://www.ithome.com/1/019/806.htm"
    },
    {
      "title": "Android 开发向第三方 AI 智能体开放",
      "summary": "Google 在 Android 开发者峰会上推出 Android Studio “自带智能体”功能，通过开放的 ACP 协议接入 Claude Agent、Codex、Antigravity 等 40 多种编码智能体，Android CLI 也做成了 Claude Code 等工具的插件。应用侧新增基于 Gemini Nano 4 的端侧 Agentic API，以及以 MCP 为调用层的 AppFunctions API，让应用把功能暴露给系统级智能体。Google 称已有 Adobe、Peloton 等 50 多家应用接入 Gemini。",
      "category": "tools",
      "region": "intl",
      "source": "The Decoder",
      "url": "https://the-decoder.com/google-opens-android-development-to-third-party-ai-agents-and-unveils-new-gemini-apis/"
    },
    {
      "title": "豆包工作向企业开放 Kimi、GLM、DeepSeek 模型",
      "summary": "字节的豆包工作向团队版和企业版客户开放第三方模型，第一批包括 Kimi 3.1 Pro、GLM 5.3 和 DeepSeek V4.1 Flash 等系列。企业不用再分别向模型厂商采购，调用费用从现有 AI 积分中扣除。管理员可以按成员、部门或全公司分配使用权限。",
      "category": "tools",
      "region": "cn",
      "source": "IT之家",
      "url": "https://www.ithome.com/1/019/733.htm"
    },
    {
      "title": "Meta 智能体 Muse 上线新加坡，首进东南亚",
      "summary": "Meta 的个人 AI 智能体 Muse 在新加坡上线，这是它在美加之外的第一站，也是首次进入东南亚。新加坡用户可连接 Gmail、Google 日历和 Instagram，Meta 还接入了 Shopee、Lazada、Grab、新加坡航空等本地服务。扎克伯格在财报电话会上说，购物是 Muse 最常见用途，超过 25% 的用户用它找优惠或下单，平均客单价超过 200 美元。",
      "category": "tools",
      "region": "intl",
      "source": "Social Media Today",
      "url": "https://www.socialmediatoday.com/news/metas-muse-ai-agents-are-now-available-to-users-in-singapore/873131/"
    },
    {
      "title": "Kimi 接入 Gmail、谷歌云端硬盘和日历",
      "summary": "月之暗面在海外宣布，Kimi 在插件页面上线 Gmail、Google Drive 和 Google 日历三个插件。启用后，Kimi 可以总结邮件往来、查找云端硬盘里的文件，也能根据日历安排每天的行程。所有授权都通过 OAuth 完成，开放范围和是否收费暂未说明。",
      "category": "tools",
      "region": "cn",
      "source": "IT之家",
      "url": "https://www.ithome.com/1/019/782.htm"
    },
    {
      "title": "首个昇腾 950DT 千卡超节点集群在武汉上线",
      "summary": "湖北科投投资建设的昇腾 950DT 超节点集群 10 月 28 日在武汉上线，从立项到开机约用了一个月。集群单节点有 1024 张 NPU，FP8 算力 1 EFLOPS，统一内存 256TB，计算柜和互联柜全部液冷。它主要用于万亿参数大模型训练和智能体推理，补上湖北本地高端算力的缺口。",
      "category": "industry",
      "region": "cn",
      "source": "IT之家",
      "url": "https://www.ithome.com/1/019/419.htm"
    },
    {
      "title": "Claude for Legal 上线现成法律工具",
      "summary": "Anthropic 为 Claude for Legal 上线约 18 个现成的交互式工具，覆盖案件受理、表格审阅、法规追踪、多法域调研和引注核查，用户可以改造或自建。后续还会推出 12 个按执业领域划分的插件和 60 多个法律平台连接器，Goodwin Procter、Harvey、普华永道等合作方也在发布自己的工具。负责人 Robert Mahari 说，律师需要的是比空白聊天框更容易上手的东西。",
      "category": "tools",
      "region": "intl",
      "source": "ABA Journal",
      "url": "https://www.abajournal.com/news/article/anthropic-raises-the-bar-with-claude-for-legal-artifacts-law-specific-interactive-tools"
    },
    {
      "title": "拓元智慧开源 4D 世界动作模型 E0.5",
      "summary": "X-Era AI 拓元智慧开源了世界动作模型 E0.5，论文和代码已经公开。它以三维基础模型为核心，预测动作结束时的三维状态，推理时不需要生成未来视频。在 Piper 双臂机器人和 H1 人形机器人上共做了 480 次真机试验，平均成功率为 85.0% 和 88.3%，分别比 π0.5 高 13.3 和 26.7 个百分点。",
      "category": "research",
      "region": "cn",
      "source": "机器之心（新浪科技转载）",
      "url": "https://finance.sina.com.cn/tech/roll/2026-10-29/doc-iniwwiey2826216.shtml"
    },
    {
      "title": "文远知行孵化的景烁科技首轮融资数千万美元",
      "summary": "文远知行旗下子公司景烁科技完成数千万美元 pre-A 轮融资，投资方为嘉御资本、香港科技园和天狼星资本。公司为物理 AI 提供数据和模型基础设施，产品包括 WorldEngine 平台、GENESIS-Robotics 世界模型和 EGOK 第一视角采集设备。公司自称在手订单达数十亿元，这一数字没有经过独立核实。",
      "category": "industry",
      "region": "cn",
      "source": "量子位",
      "url": "https://www.qbitai.com/2026/10/506281.html"
    }
  ],
  "corp": [
    {
      "title": "百度集团副总裁吴甜离职，在百度任职20年",
      "summary": "10月29日，百度公关经理在朋友圈确认，集团副总裁、百度研究院副院长吴甜已结束在百度的任职，并称百度的技术工作仍在推进。吴甜2006年加入百度，长期负责飞桨和文心大模型，今年5月已卸任基础模型研发部负责人，该部门7月起由1997年出生的孙天祥接管。离职原因和去向未披露，百度未发正式公告。",
      "kind": "org",
      "company": "百度",
      "source": "快科技/新浪科技",
      "url": "https://finance.sina.com.cn/tech/roll/2026-10-29/doc-iniwwtux5243993.shtml"
    },
    {
      "title": "理想i6订购系统卡顿崩溃，产品线负责人致歉",
      "summary": "2026款理想i6于10月28日上市，指导价24.98万元起，开放订购后理想APP出现崩溃、卡顿和支付异常。理想汽车产品线负责人李昕旸当晚在微博致歉，称发布前已增加不少服务器资源，但“还是低估了大家抢购的热情”。报道未提到致歉之外的其他补救措施。",
      "kind": "quality",
      "company": "理想汽车",
      "source": "电动知家/新浪财经",
      "url": "https://finance.sina.com.cn/roll/2026-10-29/doc-iniwwtux5239463.shtml"
    },
    {
      "title": "讯飞回应高管涨薪质疑：董事长总裁主动降薪",
      "summary": "有投资者在互动平台质疑科大讯飞高管薪酬集体上涨。讯飞回应称，按薪酬制度测算，董事长刘庆峰与总裁吴晓如2025年应发年薪合计2795.69万元，但两人主动降薪，实际分别领取410万元和300万元，各少领2000万元以上。公司称这样做是考虑到发展阶段，也为了更好地奖励A类优秀员工；2025年董事和高管薪酬合计1860.85万元，高于2024年的1722.6万元。",
      "kind": "dispute",
      "company": "科大讯飞",
      "source": "快科技/新浪科技",
      "url": "https://finance.sina.com.cn/tech/roll/2026-10-29/doc-iniwwyas2789322.shtml"
    },
    {
      "title": "霸王茶姬、奈雪门店撤下“消费入座”提示牌",
      "summary": "星巴克中国10月22日起在全国施行“消费入座”后，有消费者发现霸王茶姬、奈雪的茶部分门店也摆了同类提示牌。10月29日记者致电核实，霸王茶姬山东一家门店和奈雪成都一家门店都说提示牌已撤下。霸王茶姬称摆放属门店自主行为，执行会按现场情况灵活调整；奈雪客服称总部没有摆放要求，门店可自行决定。",
      "kind": "dispute",
      "company": "霸王茶姬、奈雪的茶",
      "source": "红星资本局/新浪",
      "url": "http://k.sina.com.cn/article_6105713761_16bedcc6102002egow.html"
    },
    {
      "title": "*ST卓然四年财报造假，实控人拟被罚1950万",
      "summary": "据上海证监局的行政处罚事先告知书，*ST卓然2021至2022年度虚增利润总额，2023至2024年度年报虚增营业收入和利润总额。公司拟被警告并罚款1250万元，实控人张锦红拟被罚1950万元并被实施10年证券市场禁入。公司股票10月29日起停牌，将成为科创板首只因市值过低退市的股票；这仍是事先告知，尚未作出最终处罚决定，报道中也没有公司对处罚的回应。",
      "kind": "penalty",
      "company": "*ST卓然",
      "source": "澎湃新闻",
      "url": "https://www.thepaper.cn/newsDetail_forward_34357308"
    },
    {
      "title": "阿维塔临时取消发布会，“内部会议”视频遭质疑",
      "summary": "阿维塔10月28日深夜宣布取消原定次日举行的07L Max纯电版线上发布会，称为了以更有诚意的价格上市，团队对配置和价格做了多轮权衡，“发布会可以不办，但产品的诚意不能少”。网上流传的内部会议视频里，几位高管在激烈讨论预算和老车主等问题，有网友因为多机位和化妆痕迹质疑视频是摆拍。阿维塔表示公开这段视频是为了展示这次上市决策的背景，新车当晚公布限时权益价21.59万元。",
      "kind": "dispute",
      "company": "阿维塔",
      "source": "界面新闻/新浪财经",
      "url": "https://finance.sina.com.cn/jjxw/2026-10-29/doc-iniwwpnz5346032.shtml"
    },
    {
      "title": "Dropbox全球裁员约9%，CTO将于11月离职",
      "summary": "Dropbox于10月28日向美国证交会提交8-K文件，宣布全球员工裁减约9%，称是为了让投入和团队结构对准最重要的产品和增长方向。公司预计相关现金支出为2700万至3300万美元，主要是遣散费和福利。首席技术官Ali Dasdan将于11月18日离职，公司同时预计第三季度业绩达到或超过此前指引。",
      "kind": "layoff",
      "region": "intl",
      "company": "Dropbox",
      "source": "Dropbox 8-K 文件（SEC）",
      "url": "https://www.sec.gov/Archives/edgar/data/0001467623/000146762326000052/dbx-20261028.htm"
    },
    {
      "title": "美司法部问询英伟达129亿美元收购Hugging Face",
      "summary": "据路透社援引知情人士报道，美国司法部正在问询英伟达以约129亿美元收购Hugging Face的交易，关注收购后英伟达是否会掌控AI的一个基础分发渠道，并借此打压对手。这次问询属于一项持续多年的反垄断调查，调查还涉及英伟达的销售做法、投资和以往收购。英伟达拒绝置评，Hugging Face未回复；英伟达此前表示，交易完成后Hugging Face将继续对各家芯片、云和软件开放，预计2027年上半年完成交易。",
      "kind": "penalty",
      "region": "intl",
      "company": "英伟达",
      "source": "The Next Web（援引路透社）",
      "url": "https://thenextweb.com/news/doj-nvidia-hugging-face-deal-antitrust-inquiry"
    }
  ],
  "voices": [
    {
      "title": "奥特曼：宁要许多略超人类的 AI，不要单一超级智能",
      "summary": "在 Stripe 联合创始人 John Collison 主持的播客 Cheeky Pint 上，奥特曼说，直觉上他更希望“一万亿个略微超人智能的 AI 加入社会”，而不是一个集中的超级智能。他认为社会虽有种种深层缺陷，但“极其稳健”。谈到安全，他说沙箱只能管用到一定程度，监控能再往前一点，对远比顶尖安全研究员聪明的模型，很难真正信任沙箱。他还估计，一年后用约百分之一的成本就能重做 Navier-Stokes 那项工作。",
      "person": "Sam Altman",
      "role": "OpenAI CEO",
      "region": "intl",
      "said": "2026-10-29",
      "source": "Cheeky Pint 播客",
      "url": "https://cheekypint.substack.com/p/why-sam-altman-is-against-a-single"
    },
    {
      "title": "Palantir CTO：靠 AI 裁员的客户几乎都没达标",
      "summary": "在 Stratechery 的访谈中，Palantir CTO Shyam Sankar 说，以削减人数为目标上 AI 的客户“几乎全都没能达成目标”，以增长为目标的客户反而做得更好。他认为行业太专注于造更聪明的模型，在加快技术扩散上投入严重不足，价值要靠让整条业务流程可衡量地提效来获得。他还批评 AI 实验室谈安全时“完全缺乏系统工程的方法”。",
      "person": "Shyam Sankar",
      "role": "Palantir CTO",
      "region": "intl",
      "said": "2026-10-29",
      "source": "Stratechery",
      "url": "https://stratechery.com/2026/an-interview-with-palantir-cto-shyam-sankar-about-the-ai-religious-war/"
    },
    {
      "title": "Mosseri：对 AI 的负面情绪只会越来越糟",
      "summary": "Instagram 负责人 Adam Mosseri 在 Colin and Samir 播客上谈到大学毕业典礼上学生嘘科技公司 CEO 的现象，承认很多人真的不喜欢 AI。他说：“不仅在变糟，而且会继续变糟。”他预计未来几年会出现更多沮丧和愤怒，“有的有道理，有的没道理”，波及面也不止创作者。他还承认平台上既有很好的 AI 内容，也有大量 AI 垃圾内容。",
      "person": "Adam Mosseri",
      "role": "Instagram 负责人",
      "region": "intl",
      "said": "2026-10-28",
      "source": "Colin and Samir 播客（The Verge 报道）",
      "url": "https://www.theverge.com/ai-artificial-intelligence/1021644/adam-mosseri-instagram-ai-negativity"
    },
    {
      "title": "纳德拉：企业 AI 普及是十年的事",
      "summary": "在微软 2027 财年第一财季财报电话会上，伯恩斯坦分析师问 Azure AI 增长来自企业还是 AI 原生公司，纳德拉回答说企业采用才刚开始，“这是一件十年的事，也是我一直在等的”。他表示宁可建立广泛的客户基础，也不愿依赖少数大买家。他在开场发言中还把 Copilot 称为“新的工作操作系统”。",
      "person": "萨提亚·纳德拉",
      "role": "微软 CEO",
      "region": "intl",
      "said": "2026-10-28",
      "source": "微软 FY27 Q1 财报电话会",
      "url": "https://www.fool.com/earnings/call-transcripts/2026/10/29/microsoft-msft-q1-2027-earnings-call-transcript/"
    },
    {
      "title": "皮查伊：智能体将成为谷歌产品的统一层",
      "summary": "在 Alphabet 第三季度财报电话会上，皮查伊说“智能体将作为统一层贯穿我们的产品”，相关体验会延伸到 Chrome、Android 和 Workspace。他表示，随着 AI 开始代表人们行动，“信任和安全比以往任何时候都重要”。谈到搜索，他说谷歌的顺序是先做出最好的用户体验，再考虑变现。",
      "person": "Sundar Pichai",
      "role": "谷歌及 Alphabet CEO",
      "region": "intl",
      "said": "2026-10-28",
      "source": "Alphabet Q3 2026 财报电话会（谷歌官方博客发言稿）",
      "url": "https://blog.google/company-news/inside-google/message-ceo/alphabet-earnings-q3-2026/"
    },
    {
      "title": "拉福格：AI 会做证明，数学家的位置仍无可替代",
      "summary": "10 月 28 日在复旦大学浦江科学大师讲坛演讲并接受《文汇报》专访时，拉福格说，数学家们对 AI 在给出数学证明方面的进展“感到非常惊讶”，但“数学依旧是纯粹的”。他认为“数学家的位置无可替代，数学的本质也从未发生改变”。他还说，AI 不会减少人们在学习上需要投入的努力，真正理解并内化知识“是AI无法替人完成的课题”。",
      "person": "洛朗·拉福格",
      "role": "菲尔兹奖得主、法国科学院院士",
      "region": "intl",
      "said": "2026-10-28",
      "source": "复旦大学浦江科学大师讲坛／《文汇报》专访（新浪科技转载）",
      "url": "https://finance.sina.com.cn/tech/discovery/2026-10-29/doc-iniwvwri5434794.shtml"
    },
    {
      "title": "曹旭东：大模型定义芯片，才可能规模化 L4",
      "summary": "在 10 月 29 日新芯航途 X7 Ultra 芯片发布会上，Momenta CEO 曹旭东首次公开公司的第三个洞察“大模型定义芯片”。他认为通用芯片难以同时兼顾功耗、车规可靠性和成本，是“不可能三角”，而规模化 L4 需要百亿到千亿参数的模型。按他的说法，从大模型需求出发定义的芯片，性能可比通用芯片提升约 10 倍。",
      "person": "曹旭东",
      "role": "Momenta CEO",
      "region": "cn",
      "said": "2026-10-29",
      "source": "新芯航途 XHEART 发布会（IT之家／新浪科技）",
      "url": "https://finance.sina.com.cn/tech/digi/2026-10-29/doc-iniwwtuu2783999.shtml"
    },
    {
      "title": "彭志辉：机器人上岗才算物理 AI 的胜利",
      "summary": "在 10 月 29 日上海举行的 2026 智元创新日上，智元联合创始人、总裁兼 CTO 彭志辉发布了衡量物理 AI 价值的指标 Worken（有效智能工时）。他说“机器人开机8小时，并不意味着它创造了8小时的价值”，又说“万台下线只是制造业的胜利，万台能够上岗才是物理AI的胜利”。他还判断，物理 AI 类似 ChatGPT 的节点可能出现在第三阶段，“我觉得会很快到来”。",
      "person": "彭志辉",
      "role": "智元联合创始人、总裁兼 CTO",
      "region": "cn",
      "said": "2026-10-29",
      "source": "2026 智元创新日（21世纪经济报道）",
      "url": "https://m.21jingji.com/article/20261029/herald/9545e6ab06dc6ad677340a7c4ff80e9e.html"
    },
    {
      "title": "汤道生：员工用 AI 提效已是必选题",
      "summary": "在 10 月 29 日深圳举行的 2026 腾讯全球数字生态大会上，腾讯高级执行副总裁汤道生说，企业落地 Agent 最大的问题不是模型不够强，而是断点太多。他说：“员工使用AI提效，已经是必选题……否则不进则退。”谈到腾讯开放 WorkBuddy，他说：“选什么模型、接什么Agent、用什么IM，选择权都在企业手里。”",
      "person": "汤道生",
      "role": "腾讯高级执行副总裁、CSIG CEO",
      "region": "cn",
      "said": "2026-10-29",
      "source": "2026 腾讯全球数字生态大会（新浪科技／央广网）",
      "url": "https://finance.sina.com.cn/tech/roll/2026-10-29/doc-iniwwpnx8834651.shtml"
    },
    {
      "title": "启元田华：AI 正从屏幕走进现实",
      "summary": "在 10 月 29 日 2026 腾讯全球数字生态大会上，启元机器人 CEO 田华说：“AI不再局限于屏幕内的文字输入输出，而是走入现实，完成‘感、思、随、行’。”他认为从数字 AI 迈向物理 AI，需要机器人本体、人工智能和产业生态协同演进。他还说，个人机器人要走进家庭，得跨过本体量产、智能大脑和生态开发三道关。",
      "person": "田华",
      "role": "启元机器人 CEO",
      "region": "cn",
      "said": "2026-10-29",
      "source": "2026 腾讯全球数字生态大会（新浪）",
      "url": "http://k.sina.com.cn/article_5953189932_162d6782c067052fx6.html"
    }
  ],
  "pricing": [
    {
      "title": "ChatGPT Pro 和商业版每月送 API 额度",
      "summary": "OpenAI 10 月 28 日宣布，符合条件的 ChatGPT Pro 订阅按档位每月可领 100、200 或 500 美元 API 额度，Business 每个 Standard 席位 20 美元、Premium 席位 100 美元，每个工作区合计最多 500 美元。老用户同样适用，但订阅需满 7 天，额度要绑定到本人拥有的 API 组织，在 ChatGPT 账单页领取。额度当期不用完作废，不能抵扣 ChatGPT 或登录态 Codex 的用量，Plus 不在范围内。",
      "product": "ChatGPT",
      "change": "new",
      "source": "OpenAI API 更新日志 / OpenAI 开发者社区公告",
      "url": "https://developers.openai.com/api/docs/changelog"
    },
    {
      "title": "Mistral Large 4 开放权重，API 价降约一半",
      "summary": "Mistral 10 月 29 日开放 Large 4 权重，同时把 API 价定为每百万输入 0.7 美元、缓存输入 0.07 美元、输出 2.1 美元，当天生效。此前首发优惠结束后的价格是 1.36/4.18 美元，新价约为其一半，和首发优惠价基本持平。发布当天官网定价页和 OpenRouter 仍显示旧价，按量计费用户可留意账单。",
      "product": "Mistral",
      "change": "down",
      "source": "Mistral 官方博客 / BenchLM",
      "url": "https://mistral.ai/news/mistral-large-4-oss/"
    },
    {
      "title": "OpenAI API 新增 12 小时提示缓存",
      "summary": "10 月 20 日起，GPT-5.6 及之后的模型在 Responses API 里可把缓存最短保留期设为 12 小时，写入按未缓存输入价的 2.5 倍计费，默认 30 分钟档是 1.25 倍。缓存读取价不变，仍为输入价的 0.1 倍，GPT-6.1 Sol 和 Terra 为 0.05 倍。隔几个小时才复用的长系统提示用它更划算，会话内频繁复用的内容用默认档更省。",
      "product": "OpenAI API",
      "change": "new",
      "source": "OpenAI API 文档",
      "url": "https://developers.openai.com/api/docs/guides/prompt-caching"
    }
  ],
  "design": [
    {
      "title": "Figma 披露自研改稿模型，撤销操作少六成",
      "summary": "Figma 10 月 29 日发文介绍 Figma agent 背后的自研编辑模型，最新版基于 Qwen 3.8 27B 后训练，尚未上线，在内部改稿评测中得分 77.8%。官方称自 beta 以来常规任务快了约 20%，用户评分高 33%，撤销 agent 操作的次数少 60%。图像、矢量生成仍交给第三方模型，文字重叠、元素被裁切等错误也还会出现。",
      "kind": "trend",
      "source": "Figma 官方博客",
      "url": "https://www.figma.com/blog/training-a-figma-fluent-editing-model/"
    },
    {
      "title": "Figma agent 可接入团队组件库和规范",
      "summary": "在 agent 对话框里选择“Libraries”就能连接已发布的组件库，agent 会优先使用库里的组件和变量。组件库还可以附上文字规范文件，启用该库时会自动带进每次提示。官方承认修改现有设计稿时规范执行还不够稳定，agent 面向 Professional 及以上计划的 Full 席位，Starter 计划只能有限使用。",
      "kind": "trend",
      "source": "Figma 官方博客",
      "url": "https://www.figma.com/blog/how-to-put-your-design-system-to-work-with-the-figma-agent/"
    },
    {
      "title": "Framer CMS 支持多人光标同时编辑",
      "summary": "Framer 10 月 27 日更新后，CMS 富文本字段和画布上都能看到协作者光标并同时编辑，画布光标改得更小、对比度更高。富文本插入菜单新增网页嵌入和 Vimeo 视频，CMS 集合可以按引用和多引用字段筛选。官方没有说明适用哪些计划。",
      "kind": "trend",
      "source": "Framer 更新日志",
      "url": "https://www.framer.com/updates/"
    },
    {
      "title": "Figma 教育版：师生免费用，含 AI 功能",
      "summary": "Figma 和 FigJam 对学生、老师和学校免费，包括 Figma Make 等 AI 功能，个人认证后拿到的是 Professional 档。13 岁以上的高中、大学、培训营学员和老师可在官网自助申请并验证身份，13 岁以下需由学校签约，K-12 学区给 Enterprise 档。页面没写有效期和续期规则，需要时可邮件问官方。",
      "kind": "deal",
      "price": "免费",
      "source": "Figma 官网",
      "url": "https://www.figma.com/education/"
    },
    {
      "title": "Responsively：多设备同屏预览网页",
      "summary": "开源桌面浏览器，可以同时用多种手机、平板和桌面尺寸打开同一个页面，滚动和点击会同步到所有窗口，适合检查响应式还原。有 Windows 安装包，最新正式版 1.18.0 发布于 2026 年 2 月，代码 10 月仍有提交。它用的是 Chromium 内核，不能代替真机检查 Safari 渲染。",
      "kind": "tool",
      "price": "免费",
      "stars": 25501,
      "source": "GitHub / 官网",
      "url": "https://responsively.app"
    },
    {
      "title": "Caesium：批量压缩图片的桌面工具",
      "summary": "开源图片压缩软件，支持 JPG、PNG、WebP 和 TIFF，可以批量处理，压缩时也能顺带缩小分辨率。Windows 有安装版和便携版，适合不想把图片传到网页上压缩的场景。最新正式版 2.8.5 发布于 2025 年 5 月，仓库 10 月仍在提交。",
      "kind": "tool",
      "price": "免费",
      "stars": 6450,
      "source": "GitHub / 官网",
      "url": "https://saerasoft.com/caesium"
    },
    {
      "title": "Stability Matrix：一键装本地 AI 绘图",
      "summary": "本地 AI 绘图的包管理器，可以一键安装和切换 ComfyUI、Forge、InvokeAI、SwarmUI 等界面，并直接从 Civitai、Hugging Face 下载模型。Windows 版是解压即用的 zip 包，10 月 21 日发布了 2.16.5。显卡和显存门槛取决于具体界面和模型，它本身不降低硬件要求。",
      "kind": "tool",
      "price": "免费",
      "stars": 8969,
      "source": "GitHub",
      "url": "https://github.com/LykosAI/StabilityMatrix"
    },
    {
      "title": "Rive：做可交互动画的设计工具",
      "summary": "在编辑器里画动画，再用状态机定义点击、悬停等交互，导出后由各平台运行时播放，常用来做 App 和网页里的动态图标、加载动画。免费版能用编辑器，但导出带 Rive 启动画面，只能建 1 个项目，单个导入素材不超过 10MB。去掉启动画面要付费，9 美元/席位/月起。",
      "kind": "tool",
      "price": "有免费版",
      "source": "Rive 官网",
      "url": "https://rive.app/pricing"
    },
    {
      "title": "Spline：在浏览器里做 3D 网页素材",
      "summary": "在浏览器里搭 3D 场景、加交互，做好后可以嵌入网页。免费版能做基础编辑，但网页导出带水印，也不含 AI 智能体、AI 3D 生成和贴图生成。要用 AI 功能需订阅 Hobby，每月 15 美元起，含 2000 积分，积分不结转。",
      "kind": "tool",
      "price": "核心免费，AI 收费",
      "source": "Spline 官网",
      "url": "https://spline.design/pricing"
    },
    {
      "title": "Fluent Emoji：微软开源的表情素材库",
      "summary": "微软开源的表情符号素材，MIT 协议，可以商用，每个表情都有 3D、彩色、扁平、高对比几种风格。可以从仓库直接下载 PNG 或 SVG 放进设计稿。素材已经比较完整，仓库最近一次提交在 8 月，更新不频繁。",
      "kind": "tool",
      "price": "免费",
      "stars": 10187,
      "source": "GitHub",
      "url": "https://github.com/microsoft/fluentui-emoji"
    }
  ],
  "apps": [
    {
      "name": "Folo",
      "category": "office",
      "desc": "把 RSS、公众号、播客、视频频道等订阅收进一个时间线里看，还能用 AI 给长文出摘要和翻译。比传统 RSS 阅读器界面新、上手快，订阅源可以在社区里直接搜。",
      "license": "AGPL-3.0",
      "stars": 39194,
      "size": "158.2 MB",
      "url": "https://github.com/RSSNext/Folo"
    },
    {
      "name": "Stretchly",
      "category": "office",
      "desc": "按设定间隔提醒你起身、看远处、做拉伸，全屏遮挡防止一直盯屏幕。可以自定义休息时长和跳过规则，开会全屏时会自动暂停。",
      "license": "BSD-2-Clause",
      "stars": 6620,
      "size": "155.3 MB",
      "url": "https://github.com/hovancik/stretchly"
    },
    {
      "name": "JabRef",
      "category": "office",
      "desc": "开源的 BibTeX/BibLaTeX 文献管理器，适合写 LaTeX 论文的人管理参考文献。能按 DOI、ISBN 自动抓取条目，查重、改引用键都很方便，比 Zotero 更贴近 LaTeX 工作流。",
      "license": "MIT",
      "stars": 4858,
      "size": "196 MB",
      "url": "https://github.com/JabRef/jabref"
    },
    {
      "name": "Visual Studio Code",
      "category": "coding",
      "desc": "微软出品的免费代码编辑器，插件生态是同类里最全的，几乎任何语言装个扩展就能写。内置 Git、终端和调试器，Copilot 等 AI 助手也最先适配它。",
      "license": "MIT",
      "stars": 194350,
      "url": "https://github.com/microsoft/vscode"
    },
    {
      "name": "Ghidra",
      "category": "coding",
      "desc": "美国国家安全局开源的逆向工程套件，能把 exe、dll 和固件反汇编、反编译成近似 C 的伪代码。功能接近收费的 IDA Pro，支持多人协作分析和脚本扩展。",
      "license": "Apache-2.0",
      "stars": 95861,
      "size": "543.3 MB",
      "url": "https://github.com/NationalSecurityAgency/ghidra"
    },
    {
      "name": "Microsoft Edit",
      "category": "coding",
      "desc": "微软新做的命令行文本编辑器，在终端里输入 edit 就能打开，支持鼠标、菜单和查找替换。不用记 Vim 快捷键，远程改配置文件很顺手，安装包只有 1 MB 左右。",
      "license": "MIT",
      "stars": 14741,
      "size": "1.1 MB",
      "url": "https://github.com/microsoft/edit"
    },
    {
      "name": "Wave Terminal",
      "category": "coding",
      "desc": "把终端、文件预览、网页和 AI 对话放进可拖拽分块的同一个窗口里。远程 SSH 时也能直接预览图片、Markdown 和编辑文件，不用来回切窗口。",
      "license": "Apache-2.0",
      "stars": 22621,
      "size": "156.2 MB",
      "url": "https://github.com/wavetermdev/waveterm"
    },
    {
      "name": "Gopeed",
      "category": "system",
      "desc": "开源的多线程下载器，支持 HTTP、BT 和磁力链接，Windows、手机和浏览器都有客户端。可以装扩展解析更多网站，没有广告，界面比老牌下载器清爽。",
      "license": "GPL-3.0",
      "stars": 27245,
      "size": "25.2 MB",
      "url": "https://github.com/GopeedLab/gopeed"
    },
    {
      "name": "Duplicati",
      "category": "system",
      "desc": "把电脑文件定时加密备份到本地硬盘、NAS 或 S3、OneDrive、Google Drive 等网盘。支持增量和去重，备份前在本机先加密，云端看不到明文。",
      "license": "MIT",
      "stars": 15170,
      "size": "104.5 MB",
      "url": "https://github.com/duplicati/duplicati"
    },
    {
      "name": "Portmaster",
      "category": "system",
      "desc": "开源的应用级防火墙，能看到每个程序连了哪些域名，并按程序单独拦截联网。自带广告和追踪域名过滤，比 Windows 自带防火墙直观得多。",
      "license": "GPL-3.0",
      "stars": 13999,
      "url": "https://github.com/safing/portmaster"
    },
    {
      "name": "MuseScore Studio",
      "category": "fun",
      "desc": "免费的打谱软件，能写五线谱、吉他谱和鼓谱，写完直接回放试听。可以导入 MIDI、MusicXML，也能导出 PDF 和音频，社区里有大量现成乐谱。",
      "license": "GPL-3.0",
      "stars": 15324,
      "size": "128.8 MB",
      "url": "https://github.com/musescore/MuseScore"
    },
    {
      "name": "Unciv",
      "category": "fun",
      "desc": "开源复刻的《文明 5》式回合制策略游戏，体积小、老电脑也跑得动。支持多人联机和大量玩家自制模组，更新很勤。",
      "license": "MPL-2.0",
      "stars": 11500,
      "size": "85.9 MB",
      "url": "https://github.com/yairm210/Unciv"
    },
    {
      "name": "Vita3K",
      "category": "fun",
      "desc": "PS Vita 模拟器，能在 Windows 上运行不少 Vita 游戏。持续每日构建，兼容列表在官网公开，可以先查再玩。",
      "license": "GPL-2.0",
      "stars": 5908,
      "size": "36.1 MB",
      "url": "https://github.com/Vita3K/Vita3K"
    },
    {
      "name": "Cataclysm: Dark Days Ahead",
      "category": "fun",
      "desc": "开源的末日生存 Roguelike 游戏，从搜刮、建造到改装车辆，系统细到每件衣服的保暖值。有贴图版可选，不必对着纯字符界面玩。",
      "license": "CC-BY-SA-3.0",
      "stars": 13429,
      "size": "188.7 MB",
      "url": "https://github.com/CleverRaven/Cataclysm-DDA"
    }
  ],
  "insights": [
    {
      "title": "小红书 AI 助理 Seal：3 天出内测版，月余覆盖全员",
      "summary": "小红书基于开源项目 OpenClaw 改出企业 AI 助理 Seal，3 人用 3 天做出内测版，首批 200 个名额，春节后 2000 个公测名额约 5 分钟被抢完，3 月中旬覆盖全员。内部技能市场一个多月沉淀了 9000 多个 Skill，销售用它写投流方案，HR 每天定时初筛简历，财务搭了 GPU 预算管理平台。按任务难度自动选模型后，70% 以上日常任务用便宜模型就够，模型成本比全用高级模型省约 69%。",
      "kind": "usage",
      "source": "InfoQ（小红书 AI Coding 及企业内部 AI 应用负责人孟洪进分享）",
      "asOf": "2026-10",
      "url": "https://www.infoq.cn/article/eOqH5GJ5R6UuZGtlhL53"
    },
    {
      "title": "近八成电商商家用 AI 做素材，测款缩到 48 小时",
      "summary": "淘天集团商家平台等发布的《2026 中国电商 AI 应用白皮书》显示，76.95% 的受访商家已在用 AI 生成商品素材。比音勒芬用 AI 测图测款后，试错周期从 1 到 2 周缩到 48 小时内，多个主推商品支付转化率提升 14% 到 45%。双十一期间女装店铺大量换用 AI 模特图，真人模特日薪要几千元，AI 生图单张只要几毛钱，但也引来消费者对图片失真的不满。",
      "kind": "industry",
      "source": "蓝鲸新闻（淘天集团《2026 中国电商 AI 应用白皮书》）",
      "asOf": "2026-10",
      "url": "https://www.lanjinger.com/d/1792589505074540706"
    },
    {
      "title": "Anthropic 一团队取消编程面试，改看候选人原型",
      "summary": "Anthropic 工程经理 Felix Rieseberg 本月在自己团队取消了编程面试，理由是 Claude 已能做好这类题，测试结果不再能区分工程师水平，现在改为看简历和作品集里的小型原型。Anthropic 性能团队的居家测试约 1000 人做过，Claude Opus 4.5 在 2 小时限制下已追平最强人类候选人，题目被迫重出。Karat 调查 400 名工程负责人发现，美国 38% 的企业允许现场技术面试用 AI，中国为 68%。",
      "kind": "jobs",
      "source": "InfoQ（Felix Rieseberg 博客及 X 帖、Karat《2026 工程面试趋势》）",
      "asOf": "2026-10",
      "url": "https://www.infoq.cn/news/EQTckj5GQQymiQES22Bo"
    }
  ]
};
