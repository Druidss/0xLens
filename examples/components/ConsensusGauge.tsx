/**
 * ConsensusGauge - 共识度仪表盘组件
 * Consensus Gauge Component
 *
 * 用于展示交易员的市场共识度，带动画效果的进度条
 * Display trader consensus with animated progress bar
 */

import { useEffect, useState } from 'react';

interface ConsensusGaugeProps {
  value: number; // 0-100
  label: string;
  className?: string;
}

export function ConsensusGauge({ value, label, className = '' }: ConsensusGaugeProps) {
  const [displayValue, setDisplayValue] = useState(0);

  // 动画效果：组件加载后逐渐填充到实际值
  // Animation: gradually fill to actual value after component loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayValue(value);
    }, 100);

    return () => clearTimeout(timer);
  }, [value]);

  // 根据共识度判断颜色
  // Determine color based on consensus value
  const getColor = () => {
    if (value > 60) return 'var(--color-success)'; // 偏多 / Bullish
    if (value < 40) return 'var(--color-error)';   // 偏空 / Bearish
    return 'var(--color-warning)';                 // 分歧 / Neutral
  };

  // 获取市场情绪文本
  // Get market sentiment text
  const getSentiment = () => {
    if (value > 60) return { zh: '市场偏多', en: 'Bullish' };
    if (value < 40) return { zh: '市场偏空', en: 'Bearish' };
    return { zh: '市场分歧', en: 'Neutral' };
  };

  const sentiment = getSentiment();

  return (
    <div className={`space-y-2 ${className}`}>
      {/* 标签和百分比 / Label and Percentage */}
      <div className="flex justify-between text-sm">
        <span className="text-[var(--text-secondary)]">{label}</span>
        <span className="font-semibold text-primary neon-text">{value}%</span>
      </div>

      {/* 进度条 / Progress Bar */}
      <div className="h-2 bg-[var(--bg-secondary)] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500 ease-out"
          style={{
            width: `${displayValue}%`,
            backgroundColor: getColor(),
            boxShadow: `0 0 10px ${getColor()}`,
          }}
        />
      </div>

      {/* 情绪文本 / Sentiment Text */}
      <p className="text-xs text-[var(--text-muted)]">
        {sentiment.zh} / {sentiment.en}
      </p>
    </div>
  );
}
