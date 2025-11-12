import { useEffect, useState } from 'react';

export interface ConsensusGaugeProps {
  value: number;
  label: string;
  className?: string;
}

export function ConsensusGauge({ value, label, className = '' }: ConsensusGaugeProps) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayValue(value);
    }, 100);

    return () => clearTimeout(timer);
  }, [value]);

  const getColor = () => {
    if (value > 60) return 'var(--color-success)';
    if (value < 40) return 'var(--color-error)';
    return 'var(--color-warning)';
  };

  const getSentiment = () => {
    if (value > 60) return { zh: '市场偏多', en: 'Bullish' };
    if (value < 40) return { zh: '市场偏空', en: 'Bearish' };
    return { zh: '市场分歧', en: 'Neutral' };
  };

  const sentiment = getSentiment();

  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex justify-between text-sm">
        <span className="text-[var(--text-secondary)]">{label}</span>
        <span className="font-semibold text-primary neon-text">{value}%</span>
      </div>

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

      <p className="text-xs text-[var(--text-muted)]">
        {sentiment.zh} / {sentiment.en}
      </p>
    </div>
  );
}
