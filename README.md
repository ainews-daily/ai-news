# AI 新鲜事

每天看看 AI 圈和国内大厂发生了什么。网站分三块：

- **精选日报**：由 Claude 生成并逐条核实的中文日报，包括 AI 新闻、国内企业动态、Windows 工具推荐、AI 落地观察。
- **实时热点**：GitHub Actions 每 3 小时自动抓取一次，来源是国内热榜、国内外 AI 资讯和 GitHub 新项目，再按关注词分组。不经过 AI 处理。
- **工具库**：往期推荐过的所有工具。

纯静态页面，没有框架，也不用打包。双击 `index.html` 可以在本地打开，部署后会发布到 GitHub Pages。

## 日常使用

| 做什么 | 怎么做 |
|---|---|
| 生成今天的精选日报 | 在本目录打开 Claude Code，输入 `/ai日报`。生成完成后会自动推送，网站随之更新 |
| 手动抓一次实时热点 | `node scripts/crawl.mjs` |
| 调整关注词 | 编辑 `config/topics.json` |
| 增删数据源 | 编辑 `config/sources.json` |
| 跑测试 | `node --test "scripts/**/*.test.mjs"` |
| 校验某期日报 | `node scripts/validate.mjs data/2026-10-14.js` |

## 目录

```
index.html                 页面（模板 + 样式 + 脚本）
data/manifest.js           日报日期列表
data/YYYY-MM-DD.js         每期日报
data/hot.js                实时热点（自动生成）
config/                    数据源和关注词
scripts/crawl.mjs          热点爬虫（Node 22，零依赖）
scripts/validate.mjs       日报数据校验
.claude/skills/ai日报/     生成日报的步骤说明
.github/workflows/         定时抓取和发布
```

## 致谢

- 国内热榜数据来自 [newsnow](https://github.com/ourongxing/newsnow) 的公开接口，调用方式参考了 [TrendRadar](https://github.com/sansan0/TrendRadar)。本项目没有使用 TrendRadar 的代码。
- AI 资讯源清单参考了 [AI-Search](https://github.com/Jackychen-12/AI-Search)（MIT 协议）。
