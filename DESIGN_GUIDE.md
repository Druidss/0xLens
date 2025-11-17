# 0xLens 设计指南 / Design Guide

**版本 / Version:** v2.0
**创建日期 / Created:** 2025-11-17
**风格 / Style:** 黑绿赛博朋克 / Black & Green Cyberpunk

---

## 📋 目录 / Table of Contents

1. [视觉系统](#1-视觉系统)
2. [核心组件规范](#2-核心组件规范)
3. [页面布局](#3-页面布局)
4. [设计原则](#4-设计原则)

---

## 1. 视觉系统

### 1.1 色彩系统 / Color System

```css
/* 主题色板 / Theme Swatches */
--swatch--dark: #0a0a0a;                    /* 深黑背景 */
--swatch--dark-secondary: #1a1a1a;          /* 次级黑背景 */
--swatch--dark-border: rgba(229, 255, 93, 0.15);  /* 边框色 */

--swatch--brand: #e5ff5d;                   /* 荧光黄绿 */
--swatch--light: #ffffff;                   /* 白色文字 */

/* 功能色 / Functional Colors */
--color-long: #BDFE30;                      /* 做多 - 荧光绿 */
--color-short: #FC46AB;                     /* 做空 - 荧光红 */
--color-neutral: #ffd600;                   /* 中性 - 黄色 */

/* 主题变量 / Theme Variables */
--theme--background: var(--swatch--dark);
--theme--text: var(--swatch--light);
--theme--border: var(--swatch--dark-border);
--theme--card: var(--swatch--dark-secondary);

/* 按钮样式 / Button Styles */
--button--background: var(--swatch--brand);
--button--text: var(--swatch--dark);
--button--border: var(--swatch--brand);

--button--background-hover: var(--swatch--light);
--button--text-hover: var(--swatch--dark);
--button--border-hover: var(--swatch--light);

/* 次级按钮 / Secondary Button */
--button-secondary--background: var(--swatch--dark-secondary);
--button-secondary--text: var(--swatch--light);
--button-secondary--border: var(--swatch--dark-secondary);

--button-secondary--background-hover: var(--swatch--brand);
--button-secondary--text-hover: var(--swatch--dark);
--button-secondary--border-hover: var(--swatch--brand);
```

**色彩使用规则 / Color Usage:**

| 场景 / Scenario | 颜色 / Color | 用途 / Usage |
|---|---|---|
| 页面背景 | `#0a0a0a` | 全局背景 |
| 卡片背景 | `#1a1a1a` | 内容容器 |
| 主要文字 | `#ffffff` | 标题、正文 |
| 品牌强调 | `#e5ff5d` 荧光黄绿 | Logo、CTA、重要按钮 |
| 做多信号 | `#00ff87` 荧光绿 | 上涨、买入、看涨 |
| 做空信号 | `#ff3864` 荧光红 | 下跌、卖出、看跌 |
| 中性/警告 | `#ffd600` 黄色 | 警告、中性观点 |

### 1.2 字体系统 / Typography

```css
/* 字体家族 / Font Family */
--font--primary-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font--mono: 'JetBrains Mono', 'Courier New', monospace;

/* 字号 / Font Sizes */
--size--0-5rem: 0.5rem;      /* 8px */
--size--0-75rem: 0.75rem;    /* 12px */
--size--1rem: 1rem;          /* 16px */
--size--1-25rem: 1.25rem;    /* 20px */
--size--1-5rem: 1.5rem;      /* 24px */
--size--2rem: 2rem;          /* 32px */
--size--2-5rem: 2.5rem;      /* 40px */
--size--3-5rem: 3.5rem;      /* 56px */
--size--5rem: 5rem;          /* 80px */
--size--7rem: 7rem;          /* 112px */

/* 标题 / Headings */
--display--font-size: var(--size--7rem);          /* 超大标题 */
--h1--font-size: var(--size--5rem);               /* 一级标题 */
--h2--font-size: var(--size--3-5rem);             /* 二级标题 */
--h3--font-size: var(--size--2rem);               /* 三级标题 */
--h4--font-size: var(--size--1-5rem);             /* 四级标题 */
--h5--font-size: var(--size--1rem);               /* 五级标题 */
--h6--font-size: var(--size--0-75rem);            /* 六级标题 */

/* 正文 / Body Text */
--text-main--font-size: var(--size--1rem);
--text-small--font-size: var(--size--0-75rem);

/* 行高 / Line Height */
--line-height--1em: 1em;
--line-height--1-1em: 1.1em;
--line-height--1-3em: 1.3em;
--line-height--0-9em: 0.9em;

/* 字间距 / Letter Spacing */
--letter-spacing--0em: 0em;
--letter-spacing--0-02em: 0.02em;
```

**字体层级 / Typography Hierarchy:**

| 类型 / Type | 字号 / Size | 用途 / Usage |
|---|---|---|
| Display | 7rem (112px) | Hero 区域超大标题 |
| H1 | 5rem (80px) | 页面主标题 |
| H2 | 3.5rem (56px) | 区块标题 |
| H3 | 2rem (32px) | 卡片标题 |
| H4 | 1.5rem (24px) | 子标题 |
| Body | 1rem (16px) | 正文 |
| Small | 0.75rem (12px) | 辅助信息、标签 |

### 1.3 间距系统 / Spacing System

```css
--space--extra-small: var(--size--1rem);      /* 16px */
--space--small: var(--size--1-5rem);          /* 24px */
--space--medium: var(--size--2-5rem);         /* 40px */
--space--large: var(--size--4rem);            /* 64px */
```

**间距应用 / Spacing Application:**

- **组件内边距 / Component Padding:** 16px - 24px
- **卡片间距 / Card Gap:** 24px - 40px
- **区块间距 / Section Gap:** 40px - 64px

### 1.4 圆角与边框 / Radius & Border

```css
/* 圆角 / Border Radius */
--radius--small: var(--size--0-5rem);         /* 8px - 小圆角 */
--radius--main: var(--size--1-25rem);         /* 20px - 标准圆角 */
--radius--round: 100vw;                       /* 完全圆形 */

/* 边框 / Border */
--border-width--main: 1.5px;
--theme--border: var(--swatch--dark-border);  /* rgba(229, 255, 93, 0.15) */
```

### 1.5 特殊效果 / Special Effects

#### 毛玻璃效果 / Glassmorphism

```css
/* 卡片毛玻璃效果 */
.glass-card {
  background: color-mix(in srgb, var(--theme--card) 40%, transparent);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  border: var(--border-width--main) solid var(--theme--border);
  border-radius: var(--radius--main);
}
```

**使用场景 / Use Cases:**
- 主要内容卡片
- 悬浮面板
- 模态对话框

#### 荧光发光效果 / Neon Glow

**品牌黄绿发光 / Brand Glow:**
```css
box-shadow: 0 0 20px rgba(229, 255, 93, 0.3);
```

**做多绿色发光 / Long Glow:**
```css
box-shadow: 0 0 20px rgba(0, 255, 135, 0.4);
```

**做空红色发光 / Short Glow:**
```css
box-shadow: 0 0 20px rgba(255, 56, 100, 0.4);
```

---

## 2. 核心组件规范

### 2.1 按钮 / Buttons

#### 主要按钮 / Primary Button

**外观 / Appearance:**
- 背景色: 荧光黄绿 (`#e5ff5d`)
- 文字色: 深黑 (`#0a0a0a`)
- 圆角: 100vw (完全圆形)
- 内边距: 12px 24px

**状态 / States:**
- **默认 / Default:** 黄绿背景 + 黄绿边框
- **悬停 / Hover:** 变为白色背景 + 白色边框
- **按下 / Active:** 轻微缩放效果
- **禁用 / Disabled:** 透明度 50%

#### 做多按钮 / Long Button

**外观 / Appearance:**
- 背景色: 荧光绿 (`#00ff87`)
- 文字色: 深黑
- 发光效果: 绿色光晕

#### 做空按钮 / Short Button

**外观 / Appearance:**
- 背景色: 荧光红 (`#ff3864`)
- 文字色: 白色
- 发光效果: 红色光晕

#### 次要按钮 / Secondary Button

**外观 / Appearance:**
- 背景色: 深黑次级 (`#1a1a1a`)
- 文字色: 白色
- 边框: 深黑次级
- **悬停 / Hover:** 变为黄绿背景

### 2.2 卡片 / Cards

#### 标准卡片 / Standard Card

**结构 / Structure:**
- 毛玻璃背景 (40% 不透明度)
- 模糊度: 10px
- 边框: 1.5px 黄绿半透明边框
- 圆角: 20px
- 内边距: 24px - 48px

**悬停效果 / Hover:**
- 边框亮度增加
- 轻微上浮 (translateY -4px)
- 增强发光效果

#### 数据卡片 / Data Card

**特征 / Features:**
- 大号数字展示
- 状态色编码 (绿色=涨, 红色=跌)
- 等宽字体显示数字

### 2.3 进度条与指示器 / Progress & Indicators

#### 共识度指示器 / Consensus Gauge

**视觉呈现 / Visual:**
- 进度条背景: 深黑次级
- 填充色:
  - > 60%: 荧光绿 (看涨)
  - < 40%: 荧光红 (看跌)
  - 40-60%: 黄色 (中性)
- 高度: 8px
- 圆角: 完全圆形

#### 仓位指示 / Position Indicator

**颜色映射 / Color Mapping:**
- 做多 / Long: 荧光绿
- 做空 / Short: 荧光红
- 观望 / Neutral: 灰色

### 2.4 标签与徽章 / Tags & Badges

**类型 / Types:**

| 类型 / Type | 背景色 / BG | 文字色 / Text | 用途 / Usage |
|---|---|---|---|
| 看多 / Bullish | `#00ff87` | 深黑 | 做多信号 |
| 看空 / Bearish | `#ff3864` | 白色 | 做空信号 |
| 中性 / Neutral | `#ffd600` | 深黑 | 中性观点 |
| 品牌 / Brand | `#e5ff5d` | 深黑 | 重要标记 |

**样式 / Style:**
- 圆角: 100vw (胶囊形)
- 内边距: 4px 12px
- 字号: 12px
- 字重: 中等 (500)

---

## 3. 页面布局

### 3.1 首页布局 / Homepage Layout

```
┌─────────────────────────────────────────────────┐
│  [0xLens Logo]           [AI摘要] [鲸鱼] [交易员]│
├─────────────────────────────────────────────────┤
│                                                 │
│  ████ 0xLens                                    │
│  AI 驱动的 BTC 交易情报                          │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│  ┌───────────┐  ┌───────────┐  ┌───────────┐  │
│  │ AI 摘要    │  │ 鲸鱼追踪   │  │ 交易员观点 │  │
│  │           │  │           │  │           │  │
│  │ 共识: 65% │  │ 大单监控   │  │ 看多: 8人  │  │
│  │ [荧光绿条] │  │           │  │ 看空: 3人  │  │
│  │           │  │ 买单墙显示 │  │           │  │
│  │ 建议: 做多 │  │ 卖单墙显示 │  │ 关键价位   │  │
│  │ [绿色徽章] │  │           │  │           │  │
│  │           │  │           │  │           │  │
│  └───────────┘  └───────────┘  └───────────┘  │
│                                                 │
└─────────────────────────────────────────────────┘
```

**响应式断点 / Breakpoints:**
- **桌面 / Desktop (≥1024px):** 3列布局
- **平板 / Tablet (640-1023px):** 2列布局
- **移动 / Mobile (<640px):** 单列布局

### 3.2 卡片网格 / Card Grid

**布局规则 / Grid Rules:**
- 间距: 24px
- 每个卡片等高
- 卡片宽度自适应

### 3.3 页面结构 / Page Structure

```
Header (固定顶部, 60px 高)
   ↓
Hero Section (可选)
   ↓
Main Content Area
  ├─ Section 1: AI 摘要
  ├─ Section 2: 鲸鱼追踪
  ├─ Section 3: 交易员观点
  └─ Section 4: 自定义策略
   ↓
Footer (最小化)
```

---

## 4. 设计原则

### 4.1 核心理念 / Core Philosophy

1. **极简主义 / Minimalism**
   - 减少视觉噪音
   - 只展示关键信息
   - 简洁的层级结构

2. **赛博朋克美学 / Cyberpunk Aesthetics**
   - 黑色主导
   - 荧光强调色
   - 毛玻璃与模糊效果
   - 发光边框

3. **数据为先 / Data-First**
   - 清晰的数据层级
   - 数字优先展示
   - 颜色编码辅助理解

4. **即时反馈 / Instant Feedback**
   - 明确的状态指示
   - 流畅的过渡动画
   - 视觉反馈及时

### 4.2 交互原则 / Interaction Principles

**状态清晰 / Clear States:**
- 所有交互元素都有明确的悬停、激活、禁用状态
- 使用颜色和动画提供视觉反馈

**层级明确 / Clear Hierarchy:**
- 主要操作: 荧光黄绿按钮
- 次要操作: 灰色背景按钮
- 危险操作: 红色警告

**信息优先级 / Information Priority:**
1. AI 建议 (最高优先级)
2. 关键数据 (价格、共识度)
3. 详细信息 (可展开查看)

### 4.3 可访问性 / Accessibility

**对比度 / Contrast:**
- 白色文字 (#ffffff) on 黑色背景 (#0a0a0a): 21:1 (AAA 级)
- 荧光色使用适当,避免刺眼

**字体大小 / Font Size:**
- 最小字号: 12px (辅助信息)
- 标准字号: 16px (正文)
- 数字使用更大字号和等宽字体

**触摸目标 / Touch Targets:**
- 所有按钮最小 40px 高度
- 移动端增加触摸区域

### 4.4 性能优化 / Performance

**图像处理 / Images:**
- 优先使用 SVG 图标
- 避免大尺寸背景图
- 延迟加载非关键图像

**动画 / Animations:**
- 使用 CSS transitions 而非 JavaScript
- 避免过度动画
- 尊重用户的减少动画偏好

**加载状态 / Loading States:**
- 骨架屏而非 Spinner
- 渐进式内容加载
- 关键数据优先显示

---

## 5. 设计资产 / Design Assets

### 5.1 Logo 规范 / Logo Guidelines

**主 Logo / Primary Logo:**
- 文字: "0xLens"
- 颜色: 荧光黄绿 (#e5ff5d)
- 字体: 粗体无衬线
- 可选: 添加六边形或透镜图形

**使用规则 / Usage Rules:**
- 最小尺寸: 100px 宽
- 周围留白: 至少 16px
- 深色背景使用黄绿色
- 浅色背景使用深黑色

### 5.2 图标系统 / Icon System

**推荐图标库 / Recommended:**
- Lucide Icons (简洁现代)
- Heroicons (开源免费)

**图标规范 / Icon Specs:**
- 线宽: 1.5px
- 尺寸: 16px, 20px, 24px
- 颜色: 继承父元素或使用品牌色

### 5.3 插图风格 / Illustration Style

**风格特征 / Style:**
- 几何形状
- 等距视角 (Isometric)
- 线条插画
- 荧光色点缀

**使用场景 / Use Cases:**
- 空状态
- 引导页面
- 功能说明

---

## 6. 组件清单 / Component Checklist

### 必需组件 / Essential Components

- [x] Button (主要、次要、做多、做空)
- [x] Card (毛玻璃效果)
- [x] Badge (状态标签)
- [x] Progress Bar (共识度指示)
- [x] Alert (提示信息)
- [x] Skeleton (加载状态)
- [x] Toast (消息通知)

### 可选组件 / Optional Components

- [ ] Dialog (模态框)
- [ ] Dropdown (下拉菜单)
- [ ] Table (数据表格)
- [ ] Tabs (标签切换)
- [ ] Avatar (用户头像)

---

## 7. 品牌色板速查 / Color Palette Quick Reference

```
█ #0a0a0a    深黑背景
█ #1a1a1a    次级背景
█ #e5ff5d    荧光黄绿 (品牌色)
█ #BDFE30    荧光绿 (做多)
█ #FC46AB    荧光红 (做空)
█ #ffd600    黄色 (中性/警告)
█ #ffffff    白色 (文字)
```

---

**文档状态 / Status:** ✅ 完成 / Completed

**使用说明 / Instructions:**
1. 本文档为精简版设计指南,专注于视觉系统和核心规范
2. 所有 CSS 变量可直接应用于项目
3. 设计原则适用于所有新功能开发
4. 保持黑绿赛博朋克风格的一致性

**更新日志 / Changelog:**
- 2025-11-17: 创建精简版设计指南
- 重新定义为黑绿主题
- 移除复杂交互描述和代码实现
