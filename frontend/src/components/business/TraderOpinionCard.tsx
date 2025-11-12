import { Card, CardHeader, CardContent } from '../ui/Card';

export interface TraderOpinionCardProps {
  name: string;
  avatar: string;
  opinion: 'bullish' | 'bearish' | 'neutral';
  logic: string;
  confidence: number;
  timeframe: string;
}

export function TraderOpinionCard({
  name,
  avatar,
  opinion,
  logic,
  confidence,
  timeframe,
}: TraderOpinionCardProps) {
  const opinionConfig = {
    bullish: {
      color: 'var(--color-success)',
      zh: '看多',
      en: 'Bullish',
      icon: '📈',
    },
    bearish: {
      color: 'var(--color-error)',
      zh: '看空',
      en: 'Bearish',
      icon: '📉',
    },
    neutral: {
      color: 'var(--color-warning)',
      zh: '中性',
      en: 'Neutral',
      icon: '➖',
    },
  };

  const config = opinionConfig[opinion];

  return (
    <Card className="hover:border-primary/40 hover:-translate-y-1 cursor-pointer">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/30">
            <img src={avatar} alt={name} className="w-full h-full object-cover" />
          </div>

          <div className="flex-1">
            <p className="font-medium text-[var(--text-primary)]">{name}</p>
            <p className="text-xs text-[var(--text-muted)]">{timeframe}</p>
          </div>

          <div
            className="px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1"
            style={{
              backgroundColor: `${config.color}20`,
              color: config.color,
              border: `1px solid ${config.color}40`,
            }}
          >
            <span>{config.icon}</span>
            <span>{config.zh} / {config.en}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="mb-3">
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            <strong className="text-[var(--text-primary)]">交易逻辑 / Logic:</strong>{' '}
            {logic}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-[var(--text-muted)] whitespace-nowrap">
            置信度 / Confidence:
          </span>
          <div className="flex-1 h-1.5 bg-[var(--bg-secondary)] rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${confidence}%`,
                backgroundColor: config.color,
                boxShadow: `0 0 8px ${config.color}`,
              }}
            />
          </div>
          <span className="text-xs font-semibold text-primary">{confidence}%</span>
        </div>
      </CardContent>
    </Card>
  );
}
