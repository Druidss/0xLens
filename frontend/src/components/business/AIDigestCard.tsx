import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/Card';
import { ConsensusGauge } from './ConsensusGauge';

interface KeyLevel {
  resistance: string[];
  support: string[];
}

interface AIRecommendation {
  action: 'long' | 'short' | 'neutral';
  confidence: number;
  position: string;
  entry: string;
  stopLoss: string;
}

export interface AIDigestCardProps {
  consensus: number;
  keyLevels: KeyLevel;
  recommendation: AIRecommendation;
  updateTime: string;
  detailedAnalysis?: string;
}

export function AIDigestCard({
  consensus,
  keyLevels,
  recommendation,
  updateTime,
  detailedAnalysis,
}: AIDigestCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const actionConfig = {
    long: {
      color: 'var(--color-success)',
      zh: '轻仓做多',
      en: 'Long',
      icon: '✅',
    },
    short: {
      color: 'var(--color-error)',
      zh: '轻仓做空',
      en: 'Short',
      icon: '⚠️',
    },
    neutral: {
      color: 'var(--color-warning)',
      zh: '观望',
      en: 'Neutral',
      icon: '⏸️',
    },
  };

  const config = actionConfig[recommendation.action];

  return (
    <Card
      className="transition-all duration-250 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
      onClick={() => detailedAnalysis && setIsExpanded(!isExpanded)}
    >
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="flex items-center gap-2 text-2xl">
            🤖 AI 每日摘要
          </CardTitle>
          <div className="text-right">
            <CardDescription className="mb-0">更新时间 / Updated</CardDescription>
            <p className="text-sm text-[var(--text-secondary)]">{updateTime}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="mb-4">
          <ConsensusGauge value={consensus} label="交易员共识 / Trader Consensus" />
        </div>

        <div className="mb-4 p-3 bg-[var(--bg-secondary)] rounded-lg">
          <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-2">
            关键价位 / Key Levels
          </h4>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="text-xs text-[var(--text-muted)] mb-1">📈 阻力 / Resistance</p>
              {keyLevels.resistance.map((level, index) => (
                <p key={index} className="text-sm font-mono text-[var(--color-error)]">
                  ${level}
                </p>
              ))}
            </div>

            <div>
              <p className="text-xs text-[var(--text-muted)] mb-1">📉 支撑 / Support</p>
              {keyLevels.support.map((level, index) => (
                <p key={index} className="text-sm font-mono text-[var(--color-success)]">
                  ${level}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="p-4 rounded-lg border-2" style={{ borderColor: config.color }}>
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-semibold text-[var(--text-primary)]">
              AI 建议 / AI Recommendation
            </h4>
            <div
              className="px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1"
              style={{
                backgroundColor: `${config.color}20`,
                color: config.color,
              }}
            >
              <span>{config.icon}</span>
              <span>{config.zh} / {config.en}</span>
              <span className="ml-1">({recommendation.confidence}%)</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 text-sm">
            <div>
              <p className="text-xs text-[var(--text-muted)] mb-1">💰 仓位 / Position</p>
              <p className="font-semibold text-[var(--text-primary)]">
                {recommendation.position}
              </p>
            </div>
            <div>
              <p className="text-xs text-[var(--text-muted)] mb-1">🎯 入场 / Entry</p>
              <p className="font-mono font-semibold text-[var(--text-primary)]">
                ${recommendation.entry}
              </p>
            </div>
            <div>
              <p className="text-xs text-[var(--text-muted)] mb-1">🛑 止损 / Stop Loss</p>
              <p className="font-mono font-semibold text-[var(--text-primary)]">
                ${recommendation.stopLoss}
              </p>
            </div>
          </div>
        </div>

        {detailedAnalysis && (
          <button
            className="w-full mt-4 py-2 text-sm text-primary hover:text-primary-light transition-colors duration-150 flex items-center justify-center gap-1"
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
          >
            <span>{isExpanded ? '收起详细分析' : '查看详细分析'}</span>
            <span className={`transition-transform duration-250 ${isExpanded ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>
        )}

        {isExpanded && detailedAnalysis && (
          <div className="mt-4 p-4 bg-[var(--bg-secondary)] rounded-lg">
            <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-2">
              详细分析 / Detailed Analysis
            </h4>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              {detailedAnalysis}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
