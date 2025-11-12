# 0xLens Frontend Demo

## 📖 项目介绍 / Project Introduction

**0xLens** 是一个 AI 驱动的 BTC 交易情报平台前端 Demo。

0xLens is an AI-powered BTC trading intelligence platform frontend demo.

### ✨ 特性 / Features

- 🤖 **AI 每日摘要** - 智能分析市场数据，提供交易建议
- 🐋 **鲸鱼追踪** - 实时监控大户钱包动向
- 👥 **交易员观点** - 聚合专业交易员的市场分析
- 🎨 **Web3 赛博朋克设计** - 霓虹青色主题，毛玻璃效果
- 📱 **响应式设计** - 完美适配桌面端、平板和移动端

---

## 🛠️ 技术栈 / Tech Stack

- **React 18** - UI 框架
- **TypeScript** - 类型安全
- **Vite** - 构建工具
- **Tailwind CSS** - 样式系统
- **CSS Variables** - 设计系统（基于 DESIGN_SPEC.md）

---

## 🚀 快速开始 / Quick Start

### 1. 安装依赖 / Install Dependencies

```bash
npm install
```

### 2. 启动开发服务器 / Start Development Server

```bash
npm run dev
```

项目将在 `http://localhost:5173` 启动。

The project will start at `http://localhost:5173`.

### 3. 构建生产版本 / Build for Production

```bash
npm run build
```

### 4. 预览生产构建 / Preview Production Build

```bash
npm run preview
```

---

## 📁 项目结构 / Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── ui/                    # 基础 UI 组件
│   │   │   ├── Button.tsx
│   │   │   └── Card.tsx
│   │   └── business/              # 业务组件
│   │       ├── AIDigestCard.tsx
│   │       ├── ConsensusGauge.tsx
│   │       ├── TraderOpinionCard.tsx
│   │       ├── WhaleTrackerPanel.tsx
│   │       └── Header.tsx
│   ├── pages/
│   │   └── Home.tsx               # 首页
│   ├── App.tsx                    # 应用入口
│   ├── main.tsx                   # 主文件
│   └── index.css                  # 全局样式
├── tailwind.config.js             # Tailwind 配置
├── postcss.config.js              # PostCSS 配置
└── package.json
```

---

## 🎨 设计系统 / Design System

本项目完全遵循 `../DESIGN_SPEC.md` 中定义的设计规范：

This project fully follows the design specifications defined in `../DESIGN_SPEC.md`:

### 色彩系统 / Color System

```css
--color-primary: #00f0ff;        /* 霓虹青色 / Neon Cyan */
--color-secondary: #7b61ff;      /* 紫色 / Purple */
--bg-primary: #0a0e27;           /* 深蓝背景 / Dark Blue BG */
--color-success: #00ff87;        /* 成功绿 / Success Green */
--color-error: #ff3864;          /* 错误红 / Error Red */
```

### 特殊效果 / Special Effects

- **毛玻璃卡片** - `.glass-card` 类
- **霓虹文字** - `.neon-text` 类
- **渐变文字** - `.gradient-text` 类
- **霓虹边框** - `.neon-border` 类

### 动画 / Animations

- 过渡时间：`duration-150` (快速), `duration-250` (正常)
- 缓动函数：`cubic-bezier(0, 0, 0.2, 1)`

---

## 📦 组件说明 / Component Documentation

### 基础组件 / Basic Components

#### Button
支持多种变体（default, outline, success, error）和尺寸（sm, default, lg）。

#### Card
毛玻璃效果的卡片容器，包含 CardHeader, CardTitle, CardDescription, CardContent 子组件。

### 业务组件 / Business Components

#### AIDigestCard
展示 AI 生成的每日行情摘要，包含：
- 交易员共识度
- 关键价位（阻力/支撑）
- AI 交易建议
- 详细分析（可展开）

#### ConsensusGauge
共识度仪表盘，自动根据数值变化颜色，带动画效果。

#### TraderOpinionCard
交易员观点卡片，展示交易员的观点、逻辑和置信度。

#### WhaleTrackerPanel
鲸鱼追踪面板，展示大户钱包的实时委托单。

#### Header
顶部导航栏，支持响应式设计和通知功能。

---

## 🖼️ 截图 / Screenshots

### 首页 / Homepage
- AI 摘要卡片 - 左侧大卡片（2列）
- 鲸鱼追踪面板 - 右侧卡片（1列）
- 交易员观点 - 底部网格布局
- 自定义策略分析 - 底部卡片

---

## 🌐 响应式设计 / Responsive Design

### 桌面端 (≥1024px)
- 3 列网格布局
- 完整导航栏

### 平板端 (640px - 1023px)
- 2 列网格布局
- 简化导航

### 移动端 (<640px)
- 单列堆叠布局
- 折叠菜单

---

## 📝 开发说明 / Development Notes

### Mock 数据
当前版本使用 Mock 数据，位于 `src/pages/Home.tsx`。

### API 集成
未来可以在以下位置集成真实 API：
- AI 摘要数据 - `aiDigestData`
- 鲸鱼订单 - `whaleOrders`
- 交易员观点 - `traderOpinions`

### 添加新页面
1. 在 `src/pages/` 创建新页面组件
2. 在 `src/App.tsx` 中配置路由（或使用 React Router）

---

## 🎯 下一步计划 / Next Steps

- [ ] 集成 React Router 实现多页面路由
- [ ] 添加策略编辑器页面
- [ ] 连接后端 API
- [ ] 添加状态管理（Zustand）
- [ ] 实现用户认证
- [ ] 添加更多交互动画

---

## 🐛 问题排查 / Troubleshooting

### Tailwind 样式不生效
确保 `tailwind.config.js` 的 content 路径配置正确：
```js
content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}']
```

### CSS 变量未定义
检查 `src/index.css` 是否正确导入 Tailwind 指令和 CSS 变量定义。

### 组件无法导入
确保组件路径正确，TypeScript 配置正确。

---

## 📚 相关文档 / Related Documentation

- **../DESIGN_SPEC.md** - 完整设计规范
- **../PRD.md** - 产品需求文档
- **../CLAUDE.md** - 项目技术上下文

---

## 📄 许可证 / License

MIT License

---

**创建日期 / Created:** 2025-11-12
**作者 / Author:** Claude (AI Assistant)
