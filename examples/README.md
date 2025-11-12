# 0xLens 页面组件示例 / Page Component Examples

## 📁 目录结构 / Directory Structure

```
examples/
├── components/              # 业务组件 / Business Components
│   ├── AIDigestCard.tsx        # AI 摘要卡片
│   ├── ConsensusGauge.tsx      # 共识度仪表盘
│   ├── TraderOpinionCard.tsx   # 交易员观点卡片
│   └── WhaleTrackerPanel.tsx   # 鲸鱼追踪面板
├── layout/                 # 布局组件 / Layout Components
│   └── Header.tsx              # 顶部导航栏
├── pages/                  # 页面组件 / Page Components
│   ├── Home.tsx                # 首页
│   └── StrategyEditor.tsx      # 策略编辑器页面
└── README.md               # 本文件 / This file
```

---

## 🎨 设计系统集成 / Design System Integration

这些示例组件完全遵循 `DESIGN_SPEC.md` 中定义的设计规范：

These example components fully comply with the design specifications defined in `DESIGN_SPEC.md`:

### 色彩系统 / Color System
- 主色调：霓虹青色 `#00f0ff` / Primary: Neon Cyan
- 辅助色：紫色 `#7b61ff` / Secondary: Purple
- 功能色：成功绿 `#00ff87`、错误红 `#ff3864`
- CSS 变量命名：`var(--color-primary)`, `var(--bg-primary)` 等

### 组件样式 / Component Styles
- **毛玻璃卡片**：使用 `.glass-card` 类
- **霓虹文字**：使用 `.neon-text` 类
- **渐变文字**：使用 `.gradient-text` 类
- **动画**：使用 `duration-150`, `duration-250` 等

### 响应式设计 / Responsive Design
- 移动端：`<640px`（单列布局）
- 平板端：`640px - 1023px`（双列布局）
- 桌面端：`≥1024px`（三列布局）

---

## 📦 组件说明 / Component Documentation

### 1. ConsensusGauge（共识度仪表盘）

**用途 / Purpose:**
展示交易员的市场共识度，带动画效果的进度条。

**Props:**
```typescript
interface ConsensusGaugeProps {
  value: number;      // 0-100 的共识度值
  label: string;      // 标签文本
  className?: string; // 可选的额外样式
}
```

**使用示例 / Example:**
```tsx
<ConsensusGauge
  value={65}
  label="交易员共识 / Trader Consensus"
/>
```

**特性 / Features:**
- ✅ 自动根据数值变化颜色（>60 绿色、<40 红色、中间黄色）
- ✅ 加载时带动画效果（500ms 缓动）
- ✅ 显示市场情绪文本（偏多/偏空/分歧）

---

### 2. TraderOpinionCard（交易员观点卡片）

**用途 / Purpose:**
展示单个交易员的观点、交易逻辑和置信度。

**Props:**
```typescript
interface TraderOpinionCardProps {
  name: string;                              // 交易员名称
  avatar: string;                            // 头像 URL
  opinion: 'bullish' | 'bearish' | 'neutral'; // 观点
  logic: string;                             // 交易逻辑
  confidence: number;                        // 置信度 0-100
  timeframe: string;                         // 时间
}
```

**使用示例 / Example:**
```tsx
<TraderOpinionCard
  name="CryptoWhale"
  avatar="https://example.com/avatar.jpg"
  opinion="bullish"
  logic="技术面突破关键阻力，链上数据显示大户持续建仓"
  confidence={85}
  timeframe="2小时前 / 2h ago"
/>
```

**特性 / Features:**
- ✅ 根据观点类型自动变化卡片颜色边框
- ✅ 悬停时卡片上浮效果（-4px translateY）
- ✅ 置信度进度条带发光效果

---

### 3. WhaleTrackerPanel（鲸鱼追踪面板）

**用途 / Purpose:**
展示 Hyperliquid 上的鲸鱼钱包大额委托单。

**Props:**
```typescript
interface WhaleOrder {
  wallet: string;  // 钱包地址
  type: 'bid' | 'ask'; // 买单/卖单
  price: string;   // 价格
  size: string;    // 数量
  timestamp: string; // 时间戳
}

interface WhaleTrackerPanelProps {
  orders: WhaleOrder[];
  title?: string;
}
```

**使用示例 / Example:**
```tsx
<WhaleTrackerPanel
  orders={[
    {
      wallet: '0x1234...5678',
      type: 'bid',
      price: '44,000',
      size: '2.5M USDT',
      timestamp: '2025-11-12 14:30 UTC'
    }
  ]}
/>
```

**特性 / Features:**
- ✅ 买单显示绿色、卖单显示红色
- ✅ 钱包地址自动截断显示
- ✅ 悬停时订单卡片缩放效果（scale 1.02）

---

### 4. AIDigestCard（AI 摘要卡片）

**用途 / Purpose:**
展示 AI 生成的每日 BTC 行情摘要、关键价位和交易建议。

**Props:**
```typescript
interface AIDigestCardProps {
  consensus: number;                  // 共识度
  keyLevels: {
    resistance: string[];             // 阻力位
    support: string[];                // 支撑位
  };
  recommendation: {
    action: 'long' | 'short' | 'neutral'; // 建议操作
    confidence: number;                   // 置信度
    position: string;                     // 仓位
    entry: string;                        // 入场价
    stopLoss: string;                     // 止损价
  };
  updateTime: string;                 // 更新时间
  detailedAnalysis?: string;          // 详细分析（可选）
}
```

**使用示例 / Example:**
```tsx
<AIDigestCard
  consensus={65}
  keyLevels={{
    resistance: ['45,200', '46,500'],
    support: ['43,800', '42,000']
  }}
  recommendation={{
    action: 'long',
    confidence: 72,
    position: '20%',
    entry: '43,800',
    stopLoss: '42,500'
  }}
  updateTime="08:00 UTC"
  detailedAnalysis="根据当前市场数据..."
/>
```

**特性 / Features:**
- ✅ 可展开/收起详细分析
- ✅ 根据建议操作自动变化边框颜色
- ✅ 集成 ConsensusGauge 组件显示共识度
- ✅ 悬停时卡片上浮效果

---

### 5. Header（顶部导航栏）

**用途 / Purpose:**
提供网站的主导航和通知功能。

**特性 / Features:**
- ✅ 响应式设计（桌面端/移动端自适应）
- ✅ 活动链接高亮显示
- ✅ 通知按钮带未读数量徽章
- ✅ 移动端折叠菜单
- ✅ 毛玻璃背景（backdrop-blur）

---

### 6. Home（首页）

**用途 / Purpose:**
展示平台的核心数据和功能入口。

**特性 / Features:**
- ✅ 网格布局（响应式）
- ✅ 加载骨架屏动画
- ✅ 整合所有业务组件
- ✅ 包含用户自定义策略展示区

**主要区域 / Main Sections:**
1. Hero 区域 - 平台标题和描述
2. AI 摘要 + 鲸鱼追踪（2:1 布局）
3. 交易员观点区（共识统计 + 观点卡片）
4. 自定义策略分析区

---

### 7. StrategyEditor（策略编辑器）

**用途 / Purpose:**
允许用户通过 Pine Script 或自然语言创建自定义交易策略。

**特性 / Features:**
- ✅ 双模式切换（Pine Script / 自然语言）
- ✅ 代码编辑器（带语法高亮占位符）
- ✅ 策略解析状态展示（解析中/成功/失败）
- ✅ 回测结果展示（胜率、盈亏比、最大回撤）
- ✅ 加载示例策略功能
- ✅ 保存和应用策略功能

**主要功能流程 / Main Flow:**
1. 选择输入模式
2. 输入策略代码或描述
3. 点击"解析策略"
4. 解析成功后点击"运行回测"
5. 查看回测结果
6. 保存或应用策略

---

## 🚀 如何使用这些示例 / How to Use These Examples

### 方案 1：直接集成到项目 / Option 1: Direct Integration

当您创建 React 项目后，可以将这些组件直接复制到对应目录：

```bash
# 创建项目后
npm create vite@latest 0xLens -- --template react-ts
cd 0xLens

# 创建目录结构
mkdir -p src/components/business src/components/layout src/pages

# 复制组件
cp examples/components/* src/components/business/
cp examples/layout/* src/components/layout/
cp examples/pages/* src/pages/
```

### 方案 2：作为参考学习 / Option 2: Learning Reference

您可以打开这些文件，学习：
- 如何使用设计系统的 CSS 变量
- 如何实现响应式布局
- 如何添加动画和过渡效果
- 如何组织组件结构

### 方案 3：逐步迁移 / Option 3: Gradual Migration

先实现基础样式系统，然后逐个迁移组件：

1. 配置 Tailwind CSS（参考 DESIGN_SPEC.md 第 7.2 节）
2. 添加全局样式（参考 DESIGN_SPEC.md 第 7.3 节）
3. 安装 shadcn/ui 组件
4. 逐个迁移业务组件

---

## 📝 注意事项 / Notes

### 依赖项 / Dependencies

这些示例需要以下依赖（在实际项目中安装）：

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "typescript": "^5.0.0"
  }
}
```

### 样式系统 / Styling System

示例中使用的 CSS 变量需要在全局样式中定义：

```css
:root {
  --color-primary: #00f0ff;
  --bg-primary: #0a0e27;
  --bg-secondary: #141b3d;
  --text-primary: #e8e8e8;
  /* ... 更多变量见 DESIGN_SPEC.md */
}
```

### 图片资源 / Image Assets

示例中使用的头像采用了 [DiceBear API](https://dicebear.com/)，这是一个免费的头像生成服务。在生产环境中，请替换为实际的图片资源。

---

## 🎯 下一步建议 / Next Steps

1. **阅读设计规范** - 查看 `DESIGN_SPEC.md` 了解完整设计系统
2. **阅读产品需求** - 查看 `PRD.md` 了解产品功能
3. **创建 React 项目** - 使用 Vite 创建项目并配置开发环境
4. **安装依赖** - 按照 DESIGN_SPEC.md 第 7 章安装所有必需依赖
5. **集成组件** - 将示例组件集成到您的项目中
6. **实现 API** - 连接后端 API，替换 Mock 数据
7. **测试和优化** - 测试各个功能并进行性能优化

---

## 📚 相关文档 / Related Documentation

- **DESIGN_SPEC.md** - 完整设计规范文档
- **PRD.md** - 产品需求文档
- **CLAUDE.md** - 项目上下文和技术决策

---

## 💡 提示 / Tips

**对于初学者 / For Beginners:**
- 先从简单的组件开始（如 ConsensusGauge）
- 逐步理解 React 组件的 Props 和 State
- 学习如何使用 CSS 变量实现主题系统

**对于有经验的开发者 / For Experienced Developers:**
- 可以直接查看 Home.tsx 和 StrategyEditor.tsx 了解页面结构
- 考虑添加状态管理（Zustand）
- 考虑添加路由（React Router）
- 考虑添加 API 层（Axios 或 Fetch）

---

**文档创建日期 / Created:** 2025-11-12
**最后更新 / Last Updated:** 2025-11-12
**作者 / Author:** Claude (AI Assistant)
