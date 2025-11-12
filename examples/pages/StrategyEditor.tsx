/**
 * StrategyEditor - 策略编辑器页面
 * Strategy Editor Page Component
 *
 * 支持用户通过 Pine Script 或自然语言输入自定义交易策略
 * Support custom trading strategies via Pine Script or natural language
 */

import { useState } from 'react';
import { Header } from '../layout/Header';

type EditorMode = 'pine' | 'natural';
type ParseStatus = 'idle' | 'parsing' | 'success' | 'error';

interface BacktestResult {
  winRate: number;
  riskReward: string;
  maxDrawdown: number;
  totalTrades: number;
  profitableTrades: number;
}

export function StrategyEditor() {
  const [mode, setMode] = useState<EditorMode>('pine');
  const [strategyInput, setStrategyInput] = useState('');
  const [parseStatus, setParseStatus] = useState<ParseStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [backtestResult, setBacktestResult] = useState<BacktestResult | null>(null);

  // 默认 Pine Script 示例
  const defaultPineScript = `//@version=5
strategy("双均线交叉", overlay=true)

// 参数设置 / Parameters
fastLength = input.int(20, "快速均线 / Fast MA")
slowLength = input.int(50, "慢速均线 / Slow MA")

// 计算均线 / Calculate MAs
fastMA = ta.sma(close, fastLength)
slowMA = ta.sma(close, slowLength)

// 交易逻辑 / Trading Logic
if ta.crossover(fastMA, slowMA)
    strategy.entry("Long", strategy.long)
if ta.crossunder(fastMA, slowMA)
    strategy.close("Long")

// 绘制均线 / Plot MAs
plot(fastMA, color=color.blue, title="Fast MA")
plot(slowMA, color=color.red, title="Slow MA")`;

  // 解析策略
  // Parse strategy
  const handleParseStrategy = async () => {
    if (!strategyInput.trim()) {
      setErrorMessage('请输入策略内容 / Please enter strategy content');
      setParseStatus('error');
      return;
    }

    setParseStatus('parsing');
    setErrorMessage('');

    // 模拟 API 调用
    // Simulate API call
    setTimeout(() => {
      // 这里应该调用实际的 API 来解析策略
      // Here should call actual API to parse strategy
      setParseStatus('success');
    }, 1500);
  };

  // 运行回测
  // Run backtest
  const handleRunBacktest = async () => {
    if (parseStatus !== 'success') {
      setErrorMessage('请先解析策略 / Please parse strategy first');
      return;
    }

    // 模拟回测
    // Simulate backtest
    setTimeout(() => {
      setBacktestResult({
        winRate: 62,
        riskReward: '1:1.8',
        maxDrawdown: 8.5,
        totalTrades: 45,
        profitableTrades: 28,
      });
    }, 2000);
  };

  // 加载示例策略
  // Load example strategy
  const handleLoadExample = () => {
    setStrategyInput(defaultPineScript);
    setParseStatus('idle');
    setBacktestResult(null);
    setErrorMessage('');
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header / 页面标题 */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <button
              onClick={() => window.history.back()}
              className="p-2 hover:bg-[var(--bg-secondary)] rounded-lg transition-colors duration-150"
            >
              <span className="text-xl">←</span>
            </button>
            <div>
              <h1 className="text-3xl font-bold gradient-text">
                策略编辑器 / Strategy Editor
              </h1>
              <p className="text-sm text-[var(--text-muted)] mt-1">
                创建您的自定义交易策略，AI 将基于此策略提供个性化建议
              </p>
              <p className="text-xs text-[var(--text-muted)]">
                Create your custom trading strategy, AI will provide personalized suggestions
              </p>
            </div>
          </div>
        </div>

        {/* Editor Container / 编辑器容器 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Editor Panel / 左侧：编辑器面板 */}
          <div className="lg:col-span-2 space-y-6">
            {/* Mode Selector / 模式选择器 */}
            <div className="glass-card p-6 rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                <button
                  onClick={() => setMode('pine')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-150 ${
                    mode === 'pine'
                      ? 'bg-primary/10 text-primary border-2 border-primary/50'
                      : 'bg-[var(--bg-secondary)] text-[var(--text-secondary)] border-2 border-transparent hover:border-[var(--border-default)]'
                  }`}
                >
                  Pine Script
                </button>
                <button
                  onClick={() => setMode('natural')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-150 ${
                    mode === 'natural'
                      ? 'bg-primary/10 text-primary border-2 border-primary/50'
                      : 'bg-[var(--bg-secondary)] text-[var(--text-secondary)] border-2 border-transparent hover:border-[var(--border-default)]'
                  }`}
                >
                  自然语言 / Natural Language
                </button>
                <button
                  onClick={handleLoadExample}
                  className="ml-auto px-3 py-2 text-sm text-[var(--text-secondary)] hover:text-primary transition-colors duration-150"
                >
                  加载示例 / Load Example
                </button>
              </div>

              {/* Code Editor / 代码编辑器 */}
              <div className="relative">
                <div className="absolute top-2 right-2 text-xs text-[var(--text-muted)] bg-[var(--bg-primary)] px-2 py-1 rounded">
                  {mode === 'pine' ? 'Pine Script' : '自然语言 / Natural Language'}
                </div>
                <textarea
                  value={strategyInput}
                  onChange={(e) => setStrategyInput(e.target.value)}
                  placeholder={
                    mode === 'pine'
                      ? '// 在此输入 Pine Script 代码\n// Enter Pine Script code here\n\n//@version=5\nstrategy("My Strategy", overlay=true)\n\n// Your strategy logic...'
                      : '请用自然语言描述您的交易策略，例如：\n\n"当 20 日均线上穿 50 日均线时做多，下穿时平仓。"\n\nDescribe your trading strategy in natural language, for example:\n\n"Go long when 20-day MA crosses above 50-day MA, close position when crosses below."'
                  }
                  className="w-full h-96 p-4 bg-[var(--bg-primary)] border border-[var(--border-default)] rounded-lg font-mono text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-primary/50 resize-none"
                  spellCheck={false}
                />
              </div>

              {/* Error Message / 错误信息 */}
              {parseStatus === 'error' && errorMessage && (
                <div className="mt-4 p-3 bg-[var(--color-error)]/10 border border-[var(--color-error)]/30 rounded-lg">
                  <p className="text-sm text-[var(--color-error)] font-semibold">
                    ❌ 策略解析失败 / Parse Failed
                  </p>
                  <p className="text-xs text-[var(--color-error)]/80 mt-1">{errorMessage}</p>
                </div>
              )}

              {/* Success Message / 成功信息 */}
              {parseStatus === 'success' && (
                <div className="mt-4 p-3 bg-[var(--color-success)]/10 border border-[var(--color-success)]/30 rounded-lg">
                  <p className="text-sm text-[var(--color-success)] font-semibold">
                    ✅ 策略解析成功 / Parse Successful
                  </p>
                  <p className="text-xs text-[var(--color-success)]/80 mt-1">
                    策略已成功解析，您可以运行回测来查看表现。
                  </p>
                </div>
              )}

              {/* Action Buttons / 操作按钮 */}
              <div className="flex gap-3 mt-4">
                <button
                  onClick={handleParseStrategy}
                  disabled={parseStatus === 'parsing'}
                  className="px-6 py-2 bg-primary/10 text-primary hover:bg-primary/20 rounded-lg font-medium transition-all duration-150 border border-primary/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {parseStatus === 'parsing' ? (
                    <>
                      <span className="animate-spin">◐</span>
                      <span>解析中... / Parsing...</span>
                    </>
                  ) : (
                    <>
                      <span>🔍</span>
                      <span>解析策略 / Parse Strategy</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleRunBacktest}
                  disabled={parseStatus !== 'success' || backtestResult !== null}
                  className="px-6 py-2 bg-[var(--color-success)]/10 text-[var(--color-success)] hover:bg-[var(--color-success)]/20 rounded-lg font-medium transition-all duration-150 border border-[var(--color-success)]/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  <span>▶</span>
                  <span>运行回测 / Run Backtest</span>
                </button>

                <button
                  onClick={() => {
                    setStrategyInput('');
                    setParseStatus('idle');
                    setBacktestResult(null);
                    setErrorMessage('');
                  }}
                  className="px-4 py-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-150"
                >
                  清空 / Clear
                </button>
              </div>
            </div>
          </div>

          {/* Right: Results Panel / 右侧：结果面板 */}
          <div className="lg:col-span-1 space-y-6">
            {/* Backtest Results / 回测结果 */}
            {backtestResult ? (
              <div className="glass-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold gradient-text mb-4">
                  回测结果 / Backtest Results
                </h3>

                <div className="space-y-4">
                  {/* Win Rate / 胜率 */}
                  <div className="p-4 bg-[var(--bg-secondary)] rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-[var(--text-muted)]">
                        ✅ 胜率 / Win Rate
                      </span>
                      <span className="text-2xl font-bold text-[var(--color-success)]">
                        {backtestResult.winRate}%
                      </span>
                    </div>
                    <div className="text-xs text-[var(--text-muted)]">
                      {backtestResult.profitableTrades} / {backtestResult.totalTrades} 笔盈利
                    </div>
                  </div>

                  {/* Risk/Reward / 盈亏比 */}
                  <div className="p-4 bg-[var(--bg-secondary)] rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-[var(--text-muted)]">
                        📊 盈亏比 / Risk/Reward
                      </span>
                      <span className="text-2xl font-bold text-primary">
                        {backtestResult.riskReward}
                      </span>
                    </div>
                    <div className="text-xs text-[var(--text-muted)]">平均盈利 / 平均亏损</div>
                  </div>

                  {/* Max Drawdown / 最大回撤 */}
                  <div className="p-4 bg-[var(--bg-secondary)] rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-[var(--text-muted)]">
                        📉 最大回撤 / Max Drawdown
                      </span>
                      <span className="text-2xl font-bold text-[var(--color-error)]">
                        {backtestResult.maxDrawdown}%
                      </span>
                    </div>
                    <div className="text-xs text-[var(--text-muted)]">峰值到谷底的最大跌幅</div>
                  </div>
                </div>

                {/* Action Buttons / 操作按钮 */}
                <div className="mt-6 space-y-2">
                  <button className="w-full px-4 py-2 bg-primary text-[var(--bg-primary)] hover:bg-primary-light rounded-lg font-medium transition-colors duration-150">
                    💾 保存策略 / Save Strategy
                  </button>
                  <button className="w-full px-4 py-2 bg-[var(--color-success)]/10 text-[var(--color-success)] hover:bg-[var(--color-success)]/20 rounded-lg font-medium transition-colors duration-150 border border-[var(--color-success)]/30">
                    ✅ 应用到 AI 摘要 / Apply to AI Digest
                  </button>
                </div>
              </div>
            ) : (
              <div className="glass-card p-6 rounded-lg text-center">
                <div className="text-6xl mb-4">📊</div>
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                  等待回测结果
                </h3>
                <p className="text-sm text-[var(--text-muted)]">
                  解析策略后运行回测，查看策略表现
                </p>
                <p className="text-xs text-[var(--text-muted)] mt-1">
                  Parse strategy and run backtest to see performance
                </p>
              </div>
            )}

            {/* Tips Card / 提示卡片 */}
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
                💡 使用提示 / Tips
              </h3>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Pine Script 模式支持 TradingView 标准语法</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>自然语言模式使用 GPT-4 智能解析</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>回测基于过去 30 天的 BTC 历史数据</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>保存的策略将用于生成个性化 AI 建议</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
