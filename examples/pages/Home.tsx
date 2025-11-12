/**
 * Home - 首页
 * Home Page Component
 *
 * 展示 AI 摘要、鲸鱼追踪和交易员观点的核心数据
 * Display core data: AI digest, whale tracking and trader opinions
 */

import { useState, useEffect } from 'react';
import { Header } from '../layout/Header';
import { AIDigestCard } from '../components/AIDigestCard';
import { WhaleTrackerPanel } from '../components/WhaleTrackerPanel';
import { TraderOpinionCard } from '../components/TraderOpinionCard';
import { ConsensusGauge } from '../components/ConsensusGauge';

export function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // 模拟数据加载
  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Mock data - AI 摘要数据
  const aiDigestData = {
    consensus: 65,
    keyLevels: {
      resistance: ['45,200', '46,500'],
      support: ['43,800', '42,000'],
    },
    recommendation: {
      action: 'long' as const,
      confidence: 72,
      position: '20%',
      entry: '43,800',
      stopLoss: '42,500',
    },
    updateTime: '08:00 UTC',
    detailedAnalysis:
      '根据当前市场数据，交易员普遍看好 BTC 短期走势。技术面显示价格在 43,800 附近获得支撑，MACD 金叉形成，建议在该价位附近轻仓做多。风险方面需注意 42,000 的强支撑位，若跌破需及时止损。',
  };

  // Mock data - 鲸鱼订单
  const whaleOrders = [
    {
      wallet: '0x1234567890abcdef1234567890abcdef12345678',
      type: 'bid' as const,
      price: '44,000',
      size: '2.5M USDT',
      timestamp: '2025-11-12 14:30 UTC',
    },
    {
      wallet: '0xabcdef1234567890abcdef1234567890abcdef12',
      type: 'ask' as const,
      price: '45,200',
      size: '1.8M USDT',
      timestamp: '2025-11-12 14:15 UTC',
    },
    {
      wallet: '0x9876543210fedcba9876543210fedcba98765432',
      type: 'bid' as const,
      price: '43,500',
      size: '3.2M USDT',
      timestamp: '2025-11-12 13:45 UTC',
    },
  ];

  // Mock data - 交易员观点
  const traderOpinions = [
    {
      name: 'CryptoWhale',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=whale',
      opinion: 'bullish' as const,
      logic: '技术面突破关键阻力，链上数据显示大户持续建仓，预计短期内将测试 46,000 美元。',
      confidence: 85,
      timeframe: '2小时前 / 2h ago',
    },
    {
      name: 'TradeMaster',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=master',
      opinion: 'bullish' as const,
      logic: '双均线金叉，成交量放大，RSI 未超买，建议 43,800-44,200 区间分批建仓。',
      confidence: 78,
      timeframe: '4小时前 / 4h ago',
    },
    {
      name: 'BearKing',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=bear',
      opinion: 'bearish' as const,
      logic: '上方压力较大，45,200 附近存在大量套牢盘，短期可能回调至 42,000 附近。',
      confidence: 62,
      timeframe: '5小时前 / 5h ago',
    },
  ];

  // Mock data - 交易员共识统计
  const traderConsensusData = {
    bullish: 8,
    bearish: 3,
    neutral: 1,
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section / 主标题区 */}
        <div className="text-center mb-12 py-8">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            0xLens - AI 驱动的 BTC 交易情报平台
          </h1>
          <p className="text-xl text-[var(--text-secondary)] mb-2">
            AI-Powered BTC Trading Intelligence Platform
          </p>
          <p className="text-sm text-[var(--text-muted)]">
            实时监控 · 智能分析 · 精准建议
          </p>
        </div>

        {isLoading ? (
          <LoadingSkeleton />
        ) : (
          <>
            {/* Main Content Grid / 主内容网格 */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {/* AI Digest Card - Spans 2 columns on large screens */}
              <div className="lg:col-span-2">
                <AIDigestCard {...aiDigestData} />
              </div>

              {/* Whale Tracker Panel */}
              <div className="lg:col-span-1">
                <WhaleTrackerPanel orders={whaleOrders} />
              </div>
            </div>

            {/* Trader Opinions Section / 交易员观点区 */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold gradient-text">
                  👥 交易员观点 / Trader Opinions
                </h2>
                <button className="text-sm text-primary hover:text-primary-light transition-colors duration-150">
                  查看全部 / View All →
                </button>
              </div>

              {/* Consensus Summary Card / 共识度汇总卡片 */}
              <div className="glass-card p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
                  共识度统计 / Consensus Statistics
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div
                      className="w-16 h-16 mx-auto mb-2 rounded-full flex items-center justify-center text-2xl"
                      style={{
                        backgroundColor: 'var(--color-success)20',
                        border: '2px solid var(--color-success)',
                      }}
                    >
                      📈
                    </div>
                    <p className="text-3xl font-bold text-[var(--color-success)] mb-1">
                      {traderConsensusData.bullish}
                    </p>
                    <p className="text-sm text-[var(--text-muted)]">看多 / Bullish</p>
                  </div>
                  <div className="text-center">
                    <div
                      className="w-16 h-16 mx-auto mb-2 rounded-full flex items-center justify-center text-2xl"
                      style={{
                        backgroundColor: 'var(--color-error)20',
                        border: '2px solid var(--color-error)',
                      }}
                    >
                      📉
                    </div>
                    <p className="text-3xl font-bold text-[var(--color-error)] mb-1">
                      {traderConsensusData.bearish}
                    </p>
                    <p className="text-sm text-[var(--text-muted)]">看空 / Bearish</p>
                  </div>
                  <div className="text-center">
                    <div
                      className="w-16 h-16 mx-auto mb-2 rounded-full flex items-center justify-center text-2xl"
                      style={{
                        backgroundColor: 'var(--color-warning)20',
                        border: '2px solid var(--color-warning)',
                      }}
                    >
                      ➖
                    </div>
                    <p className="text-3xl font-bold text-[var(--color-warning)] mb-1">
                      {traderConsensusData.neutral}
                    </p>
                    <p className="text-sm text-[var(--text-muted)]">中性 / Neutral</p>
                  </div>
                </div>

                <div className="mt-6">
                  <ConsensusGauge
                    value={Math.round(
                      (traderConsensusData.bullish /
                        (traderConsensusData.bullish +
                          traderConsensusData.bearish +
                          traderConsensusData.neutral)) *
                        100
                    )}
                    label="整体市场共识 / Overall Market Consensus"
                  />
                </div>
              </div>

              {/* Trader Opinion Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {traderOpinions.map((trader, index) => (
                  <TraderOpinionCard key={index} {...trader} />
                ))}
              </div>
            </div>

            {/* Custom Strategy Section / 自定义策略区 */}
            <div className="glass-card p-6 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold gradient-text">
                  📋 您的自定义策略分析 / Your Custom Strategy Analysis
                </h2>
                <button className="px-4 py-2 bg-primary/10 text-primary hover:bg-primary/20 rounded-lg text-sm font-medium transition-colors duration-150 border border-primary/30">
                  编辑策略 / Edit Strategy
                </button>
              </div>

              <div className="bg-[var(--bg-secondary)] p-6 rounded-lg">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-1">
                      双均线交叉策略 (用户口述)
                    </h3>
                    <p className="text-sm text-[var(--text-muted)]">
                      Dual MA Crossover (User Voice Input)
                    </p>
                  </div>
                  <div
                    className="px-3 py-1 rounded-full text-sm font-semibold"
                    style={{
                      backgroundColor: 'var(--color-success)20',
                      color: 'var(--color-success)',
                      border: '1px solid var(--color-success)40',
                    }}
                  >
                    🟢 做多 / Long
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-[var(--text-secondary)] mb-2">
                    <strong>触发时间 / Triggered:</strong> 2025-11-10 14:30 UTC
                  </p>
                  <p className="text-sm text-[var(--text-secondary)]">
                    <strong>当前信号 / Signal:</strong> MA(20): $44,150 | MA(50): $43,800
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4 p-4 bg-[var(--bg-primary)] rounded-lg">
                  <div>
                    <p className="text-xs text-[var(--text-muted)] mb-1">✅ 胜率 / Win Rate</p>
                    <p className="text-2xl font-bold text-[var(--color-success)]">62%</p>
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-muted)] mb-1">
                      📊 盈亏比 / Risk/Reward
                    </p>
                    <p className="text-2xl font-bold text-primary">1:1.8</p>
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-muted)] mb-1">
                      📉 最大回撤 / Max Drawdown
                    </p>
                    <p className="text-2xl font-bold text-[var(--color-error)]">8.5%</p>
                  </div>
                </div>

                <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                  <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-2">
                    🤖 AI 个性化建议 / AI Personalized Recommendation
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    根据您的双均线策略，当前处于做多阶段。结合交易员观点和鲸鱼数据，建议在
                    $43,800-$44,200 区间加仓，止损设置在 $42,500 以控制风险。
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

/**
 * LoadingSkeleton - 加载骨架屏
 * Loading skeleton component
 */
function LoadingSkeleton() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 h-96 bg-[var(--bg-secondary)] rounded-lg animate-pulse" />
        <div className="h-96 bg-[var(--bg-secondary)] rounded-lg animate-pulse" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="h-64 bg-[var(--bg-secondary)] rounded-lg animate-pulse" />
        <div className="h-64 bg-[var(--bg-secondary)] rounded-lg animate-pulse" />
        <div className="h-64 bg-[var(--bg-secondary)] rounded-lg animate-pulse" />
      </div>
    </div>
  );
}
