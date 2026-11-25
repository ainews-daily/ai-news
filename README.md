# AI 新鲜事

每天看看 AI 圈和国内大厂发生了什么。网站分三块：

- **精选日报**：由 Claude 生成并逐条核实的中文日报，包括 AI 新闻、国内企业动态、Windows 工具推荐、AI 落地观察。
- **实时热点**：GitHub Actions 每 3 小时自动抓取一次，来源是国内热榜、国内外 AI 资讯和 GitHub 新项目，再按关注词分组。不经过 AI 处理。
- **工具库**：往期推荐过的所有工具。

纯静态页面，没有框架，也不用打包。双击 `index.html` 可以在本地打开，部署后发布到 Cloudflare Pages（`aifresh.pages.dev`，需在仓库 Secrets 里配置 `CLOUDFLARE_API_TOKEN` 和 `CLOUDFLARE_ACCOUNT_ID`）。

## 日常使用

| 做什么 | 怎么做 |
|---|---|
| 生成今天的精选日报 | 在本目录打开 Claude Code，输入 `/ai日报`。生成完成后会自动推送，网站随之更新 |
| 手动抓一次实时热点 | `node scripts/crawl.mjs` |
| 调整关注词 | 编辑 `config/topics.json` |
| 增删数据源 | 编辑 `config/sources.json` |
| 跑测试 | `node --test "scripts/**/*.test.mjs"` |
| 校验某期日报 | `node scripts/validate.mjs data/2026-10-14.js` |
| 生成 RSS 和 JSON Feed | `node scripts/build-feed.mjs _site`（发布流程会自动执行） |
| 检查自动日报登录状态 | `powershell -NoProfile -ExecutionPolicy Bypass -File scripts/daily.ps1 -CheckOnly` |

订阅地址为 [RSS](https://aifresh.pages.dev/feed.xml) 和 [JSON Feed](https://aifresh.pages.dev/feed.json)，包含最近 10 期日报。历史日报菜单仅展示北京时间当月的日报，旧文件仍保留供工具库等功能使用。

自动日报在本机通过 Windows 任务计划运行，依赖 Claude Code 登录。日志提示认证失败时，先运行 `claude auth login` 完成登录，再执行上面的登录检查。脚本会从本机 CLI 和 VS Code 扩展中选择较新的版本；检查失败会给出该版本的登录命令。确认登录检查通过后，在任务计划程序中检查“AI新鲜事-每日日报”是否启用。

## 目录

```
index.html                 页面（模板 + 样式 + 脚本）
data/manifest.js           日报日期列表
data/YYYY-MM-DD.js         每期日报
data/hot.js                实时热点（自动生成）
config/                    数据源和关注词
scripts/crawl.mjs          热点爬虫（Node 22，零依赖）
scripts/validate.mjs       日报数据校验
scripts/build-feed.mjs     RSS / JSON Feed 生成
.claude/skills/ai日报/     生成日报的步骤说明
.github/workflows/         定时抓取和发布
```

## 致谢

- 国内热榜数据来自 [newsnow](https://github.com/ourongxing/newsnow) 的公开接口，调用方式参考了 [TrendRadar](https://github.com/sansan0/TrendRadar)。本项目没有使用 TrendRadar 的代码。
- AI 资讯源清单参考了 [AI-Search](https://github.com/Jackychen-12/AI-Search)（MIT 协议）。
