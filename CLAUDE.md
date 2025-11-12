# 0xLens - 项目上下文 / Project Context

**项目名称 / Project Name:** 0xLens
**项目类型 / Type:** AI-Powered BTC Trading Intelligence Platform
**当前阶段 / Current Phase:** 初始化 / Initialization (MVP 规划中)
**最后更新 / Last Updated:** 2025-11-12

---

## 📖 项目概述 / Project Overview

0xLens 是一个专注于 BTC 的 AI 驱动交易情报聚合平台。通过分析：
- 📱 Twitter/B站 KOL 的社交情绪
- 🐋 Hyperliquid 鲸鱼钱包的委托单
- 📊 价格指标和价格走势

为加密货币交易者提供**量化的交易建议和市场洞察**。

0xLens is an AI-driven trading intelligence platform focused on BTC. By analyzing social sentiment from Twitter/Bilibili KOLs, Hyperliquid whale order books, and on-chain data, it provides quantified trading suggestions and market insights for crypto traders.

### 核心差异化 / Key Differentiators

- 🎯 **垂直深度**：仅专注 BTC，深度分析而非广度覆盖
- 🤖 **AI 优先**：AI 作为主角，直接输出可执行建议（非辅助工具）
- 🐋 **链上实时**：结合 Hyperliquid 鲸鱼委托单分析
- 🎨 **Web3 原生**：赛博朋克设计风格，极简化图表

---

## 🏗️ 技术架构 / Technical Architecture

### 技术栈 / Tech Stack

```yaml
前端 / Frontend:
  框架 / Framework: Next.js 14 (App Router)
  样式 / Styling: TailwindCSS + Framer Motion
  状态管理 / State: Zustand
  UI 组件 / Components: Headless UI + Radix UI
  图表 / Charts: Recharts (轻量级)

后端 / Backend:
  API: Next.js API Routes + Express (可选)
  定时任务 / Cron: node-cron
  AI:
    - OpenAI GPT-4 (情绪分析 + 摘要生成)
    - LangChain (Agent 编排)

数据库 / Database:
  结构化 / Structured: PostgreSQL (Supabase)
  非结构化 / Unstructured: MongoDB Atlas
  缓存 / Cache: Redis (Upstash)

数据源 / Data Sources:
  - Twitter API v2
  - Hyperliquid API
  - Binance API (价格数据)
  - Dune Analytics API (链上指标)

部署 / Deployment:
  - Vercel (前端 + API Routes)
  - Railway/Render (后端服务)
```

### 项目结构 / Project Structure

```
0xLens/
├── src/
│   ├── app/                    # Next.js 14 App Router
│   │   ├── page.tsx           # 主页：AI 每日摘要
│   │   ├── kol/               # KOL 情绪面板
│   │   ├── whale/             # 鲸鱼追踪
│   │   └── api/               # API Routes
│   │       ├── sentiment/     # 社交情绪 API
│   │       ├── whale/         # 鲸鱼数据 API
│   │       └── digest/        # AI 摘要 API
│   │
│   ├── components/            # React 组件
│   │   ├── ui/               # 通用 UI 组件
│   │   ├── sentiment/        # 情绪分析相关
│   │   ├── whale/            # 鲸鱼追踪相关
│   │   └── digest/           # AI 摘要相关
│   │
│   ├── lib/                   # 核心逻辑库
│   │   ├── ai/               # AI 分析逻辑
│   │   │   ├── sentiment.ts  # 情绪分析
│   │   │   ├── digest.ts     # 摘要生成
│   │   │   └── prompts/      # GPT 提示词模板
│   │   │
│   │   ├── data/             # 数据采集
│   │   │   ├── twitter.ts    # Twitter 爬虫
│   │   │   ├── hyperliquid.ts # Hyperliquid API
│   │   │   └── binance.ts    # Binance API
│   │   │
│   │   ├── db/               # 数据库操作
│   │   │   ├── postgres.ts   # PostgreSQL
│   │   │   ├── mongodb.ts    # MongoDB
│   │   │   └── redis.ts      # Redis 缓存
│   │   │
│   │   └── utils/            # 工具函数
│   │
│   ├── types/                # TypeScript 类型定义
│   ├── styles/               # 全局样式
│   └── config/               # 配置文件
│
├── scripts/                   # 脚本工具
│   ├── seed-kols.ts          # 初始化 KOL 列表
│   └── test-apis.ts          # 测试 API 连接
│
├── public/                    # 静态资源
│
├── docs/                      # 项目文档
│   └── api/                  # API 文档
│
├── .env.local                # 环境变量（不提交）
├── .env.example              # 环境变量示例
├── PRD.md                    # 产品需求文档
├── CLAUDE.md                 # 本文件：项目上下文
├── README.md                 # 项目说明
└── package.json
```

---

## 🎯 核心功能模块 / Core Feature Modules

### 1. 社交情绪分析引擎 / Social Sentiment Engine

**文件位置 / File Location:** `src/lib/ai/sentiment.ts`

**功能 / Features:**
- 实时爬取 10-20 个 BTC KOL 的推文
- GPT-4 分析推文情绪（看多/看空/中性）
- 提取关键信息：价格位、仓位建议、止损位
- 聚合生成市场共识指数（0-100）

**数据流 / Data Flow:**
```
Twitter API → 原始推文 (MongoDB)
           → GPT-4 分析 → 结构化数据 (PostgreSQL)
           → Redis 缓存 → API 返回
```

### 2. Hyperliquid 鲸鱼追踪 / Whale Tracking

**文件位置 / File Location:** `src/lib/data/hyperliquid.ts`

**功能 / Features:**
- 监控 Top 10 鲸鱼钱包委托单
- 分析大额买单/卖单价格分布
- 识别关键价格区间（支撑/阻力）
- 检测异常大单和撤单行为

**输出 / Output:**
- 委托单价格热力图数据
- 买单墙 vs 卖单墙统计
- 鲸鱼行为模式（累积/分发）

### 3. 每日 AI 摘要 / Daily AI Digest

**文件位置 / File Location:** `src/lib/ai/digest.ts`

**功能 / Features:**
- 每天 3 次定时生成（UTC 00:00, 08:00, 16:00）
- 综合社交情绪 + 链上数据 + 价格走势
- 输出：
  - 市场情绪指数
  - 关键压力位/支撑位
  - 做多/做空建议
  - 仓位大小和止损位
  - 风险评分

**AI 提示词模板位置 / Prompt Location:** `src/lib/ai/prompts/digest.ts`

---

## 🔑 关键技术决策 / Key Technical Decisions

### 决策 1: 为什么选择 Next.js 14 App Router？

**理由 / Rationale:**
- ✅ SSR + SSG 混合渲染，提升首屏加载速度
- ✅ API Routes 可以快速搭建后端 API
- ✅ Server Components 减少客户端 JS 体积
- ✅ Vercel 部署简单，适合快速迭代

### 决策 2: 为什么同时使用 PostgreSQL + MongoDB？

**理由 / Rationale:**
- **PostgreSQL**: 存储结构化数据
  - KOL 列表（固定字段）
  - 历史 AI 摘要（需要查询和聚合）
  - 用户配置

- **MongoDB**: 存储非结构化数据
  - 推文原始 JSON（字段不固定）
  - 委托单快照（嵌套结构复杂）
  - 灵活性高，便于后期扩展

### 决策 3: 为什么使用 GPT-4 而非 GPT-3.5？

**理由 / Rationale:**
- ✅ GPT-4 对复杂推文的理解更准确
- ✅ 能更好地提取隐含的交易信号
- ✅ 减少误判，提升用户信任
- ⚠️ 成本更高，但可用 GPT-3.5 做预筛选降低成本

### 决策 4: 为什么极简化图表？

**理由 / Rationale:**
- 🎯 目标用户需要的是"行动建议"而非"数据分析"
- 🧠 AI 已经完成了复杂分析，用户只需要看结果
- 🎨 符合 Web3 简洁设计美学
- 📱 移动端显示更友好

---

## 🎨 设计规范 / Design Guidelines

### 配色方案 / Color Scheme

```css
/* 主色调 / Primary */
--bg-primary: #0a0e27;         /* 深蓝黑 */
--bg-secondary: #141b3d;       /* 卡片背景 */
--accent-cyan: #00f0ff;        /* 霓虹青 */
--accent-purple: #7b61ff;      /* 紫色 */

/* 状态色 / Status */
--success: #00ff87;            /* 做多 */
--danger: #ff3864;             /* 做空 */

/* 文字 / Text */
--text-primary: #e8e8e8;
--text-secondary: #8a8fa8;
```

### UI 组件规范 / Component Guidelines

1. **卡片 / Card**
   - 使用毛玻璃效果（backdrop-blur）
   - 微妙的霓虹边框（1px, opacity 0.3）
   - 圆角：12px

2. **按钮 / Button**
   - 主要按钮：青色渐变 + 发光效果
   - 次要按钮：半透明背景
   - 悬停：增强发光

3. **数据展示 / Data Display**
   - 大数字：粗体 + 状态色
   - 百分比：进度条 + 数值
   - 趋势：箭头 + 颜色编码

---

## 🔐 环境变量 / Environment Variables

**文件位置 / File Location:** `.env.local` (不提交到 Git)

```bash
# Database
DATABASE_URL=postgresql://...        # Supabase PostgreSQL
MONGODB_URI=mongodb+srv://...        # MongoDB Atlas
REDIS_URL=redis://...                # Upstash Redis

# APIs
TWITTER_API_KEY=...
TWITTER_API_SECRET=...
TWITTER_BEARER_TOKEN=...

OPENAI_API_KEY=sk-...

HYPERLIQUID_API_KEY=...              # 如果需要认证

BINANCE_API_KEY=...                  # 可选
BINANCE_API_SECRET=...

DUNE_API_KEY=...                     # 可选

# App Config
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development

# Cron Jobs
ENABLE_CRON=true                     # 是否启用定时任务
CRON_SECRET=...                      # 防止外部调用
```

**示例文件 / Example:** `.env.example`

---

## 📝 开发规范 / Development Guidelines

### 代码风格 / Code Style

- **TypeScript**: 严格模式，所有类型必须明确定义
- **组件**: 优先使用函数组件 + Hooks
- **命名**:
  - 组件: PascalCase (`SentimentMeter`)
  - 函数: camelCase (`analyzeSentiment`)
  - 常量: UPPER_SNAKE_CASE (`API_BASE_URL`)
- **注释**: 中英双语
  ```tsx
  // 分析推文情绪并返回结构化数据
  // Analyze tweet sentiment and return structured data
  async function analyzeTweet(tweet: Tweet): Promise<SentimentResult> {
    // ...
  }
  ```

### Git 提交规范 / Git Commit Convention

使用 Conventional Commits:

```
feat: 新功能 / new feature
fix: 修复 bug / bug fix
docs: 文档更新 / documentation
style: 代码格式 / formatting
refactor: 重构 / refactoring
test: 测试 / testing
chore: 构建/工具 / build/tooling
```

示例:
```
feat: add Twitter sentiment analysis engine
fix: resolve Hyperliquid API timeout issue
docs: update PRD with new feature requirements
```

### 测试策略 / Testing Strategy

```
单元测试 / Unit Tests:
  - lib/ 下的核心逻辑必须有单元测试
  - 覆盖率目标: >80%
  - 工具: Jest + Testing Library

集成测试 / Integration Tests:
  - API Routes 端到端测试
  - 数据库操作测试
  - 工具: Playwright

手动测试 / Manual Testing:
  - UI/UX 体验测试
  - 不同设备适配测试
```

---

## 🚀 常用命令 / Common Commands

### 开发 / Development

```bash
# 安装依赖 / Install dependencies
npm install

# 启动开发服务器 / Start dev server
npm run dev

# 构建生产版本 / Build for production
npm run build

# 启动生产服务器 / Start production server
npm start

# 代码检查 / Lint
npm run lint

# 类型检查 / Type check
npm run type-check

# 运行测试 / Run tests
npm test
```

### 数据库 / Database

```bash
# 初始化数据库 Schema / Initialize DB schema
npm run db:init

# 数据库迁移 / Run migrations
npm run db:migrate

# 种子数据（KOL 列表等）/ Seed data
npm run db:seed

# 重置数据库 / Reset database
npm run db:reset
```

### 部署 / Deployment

```bash
# 部署到 Vercel / Deploy to Vercel
vercel --prod

# 查看日志 / View logs
vercel logs

# 环境变量管理 / Manage env vars
vercel env add
```

---

## 📊 数据模型 / Data Models

### PostgreSQL Schema

```sql
-- KOL 列表 / KOL List
CREATE TABLE kols (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  twitter_handle VARCHAR(50) UNIQUE NOT NULL,
  name VARCHAR(100),
  followers_count INT,
  influence_score INT,  -- 0-100
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- AI 摘要历史 / AI Digest History
CREATE TABLE ai_digests (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  sentiment_index INT,  -- 0-100
  consensus VARCHAR(20),  -- bullish/bearish/neutral
  resistance_levels JSONB,  -- ["$45200", "$46500"]
  support_levels JSONB,
  trading_suggestion JSONB,  -- {direction, confidence, ...}
  risk_score INT,  -- 0-100
  summary TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- 情绪分析记录 / Sentiment Records
CREATE TABLE sentiment_records (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  kol_id UUID REFERENCES kols(id),
  tweet_id VARCHAR(50) UNIQUE,
  sentiment VARCHAR(20),  -- bullish/bearish/neutral
  confidence INT,  -- 0-100
  key_levels JSONB,  -- {resistance: [...], support: [...]}
  position_advice TEXT,
  analyzed_at TIMESTAMP DEFAULT NOW()
);
```

### MongoDB Collections

```javascript
// tweets (推文原始数据)
{
  _id: ObjectId,
  tweet_id: "1234567890",
  kol_handle: "@trader_xyz",
  text: "BTC looking strong at $44K...",
  created_at: ISODate,
  raw_data: { /* Twitter API 原始响应 */ }
}

// order_book_snapshots (委托单快照)
{
  _id: ObjectId,
  wallet_address: "0x123...abc",
  timestamp: ISODate,
  bids: [
    { price: 44000, size: 2500000 },
    { price: 43800, size: 1800000 }
  ],
  asks: [
    { price: 45200, size: 1200000 },
    { price: 45500, size: 900000 }
  ]
}
```

---

## 🐛 已知问题 / Known Issues

### 技术债务 / Technical Debt

1. **Twitter API 限额处理**
   - 当前: 简单的重试机制
   - 需要: 实现指数退避 + 优先级队列

2. **AI 成本优化**
   - 当前: 所有推文都用 GPT-4
   - 需要: GPT-3.5 预筛选 → GPT-4 精细分析

3. **缓存策略**
   - 当前: 基础 Redis 缓存
   - 需要: 多层缓存 + 智能失效策略

### 待解决问题 / TODO

- [ ] 实现历史预测准确率追踪
- [ ] 添加 B 站视频分析（视频转文字）
- [ ] 移动端适配优化
- [ ] API 性能优化（目标 <300ms p95）

---

## 📚 重要文档链接 / Important Documentation

- **产品需求文档 / PRD:** `./PRD.md`
- **API 文档 / API Docs:** `./docs/api/`
- **设计稿 / Design:** 待添加 Figma 链接
- **部署文档 / Deployment:** 待添加

---

## 🤝 团队协作 / Team Collaboration

### 沟通原则 / Communication Principles

1. **所有重要决策必须记录在本文件或 PRD 中**
2. **代码审查必须在 24 小时内完成**
3. **每周五同步进度和计划**

### 角色分工 / Roles (待定)

- **产品 / Product:** Adrian
- **前端 / Frontend:** TBD
- **后端 / Backend:** TBD
- **AI / AI Engineering:** TBD
- **设计 / Design:** TBD

---

## 💡 开发建议 / Development Tips

### 给 Claude Code 的提示 / Tips for Claude Code

当你（Claude）在协助开发时，请注意：

1. **优先级顺序 / Priority Order:**
   - P0 功能 > P1 功能 > P2 功能
   - 核心功能 > 优化 > 新增功能

2. **代码质量 / Code Quality:**
   - 所有函数必须有 TypeScript 类型
   - 复杂逻辑必须添加注释（中英双语）
   - 避免过早优化，但要考虑扩展性

3. **AI 分析相关 / AI Analysis:**
   - GPT 提示词模板放在 `src/lib/ai/prompts/`
   - 每个提示词要有版本注释和测试结果
   - 优先使用 LangChain 而非直接调用 OpenAI API

4. **数据采集 / Data Collection:**
   - 所有外部 API 调用必须有错误处理
   - 实现重试机制（最多 3 次）
   - 记录失败日志到 MongoDB

5. **测试 / Testing:**
   - 新功能必须先写测试
   - API 变更必须更新文档
   - 部署前运行完整测试套件

---

## 📅 项目里程碑 / Project Milestones

### Phase 1: MVP (Week 1-6)

- [x] 项目初始化
- [x] PRD 和 CLAUDE.md 文档
- [ ] Week 1-2: 基础架构搭建
- [ ] Week 3-4: 核心功能开发
- [ ] Week 5-6: AI 摘要与优化
- [ ] Week 6: Beta 版本上线

### Phase 2: 功能增强 (Week 7-10)

- [ ] B 站视频分析
- [ ] 历史准确率追踪
- [ ] Telegram 推送
- [ ] 移动端优化

### Phase 3: 商业化 (Week 11-16)

- [ ] 支持 ETH
- [ ] 付费订阅功能
- [ ] 开放 API
- [ ] 社区功能

---

## 🔄 更新日志 / Changelog

- **2025-11-12**: 初始化项目，创建 PRD 和 CLAUDE.md
- 未来更新将在此记录...

---

**最后更新 / Last Updated:** 2025-11-12 by Adrian

*本文件是 0xLens 项目的核心上下文文档，Claude Code 在协助开发时会参考此文档。*

*This is the core context document for the 0xLens project. Claude Code will refer to this when assisting with development.*
