/**
 * WhaleTrackerPanel - 鲸鱼追踪面板
 * Whale Tracker Panel Component
 *
 * 展示 Hyperliquid 上的鲸鱼钱包大额委托单
 * Display whale wallet large orders on Hyperliquid
 */

interface WhaleOrder {
  wallet: string;
  type: 'bid' | 'ask';
  price: string;
  size: string;
  timestamp: string;
}

interface WhaleTrackerPanelProps {
  orders: WhaleOrder[];
  title?: string;
}

export function WhaleTrackerPanel({
  orders,
  title = '🐋 鲸鱼追踪 / Whale Tracking',
}: WhaleTrackerPanelProps) {
  return (
    <div className="glass-card p-6 rounded-lg">
      {/* Header / 标题 */}
      <div className="flex items-center gap-2 mb-4">
        <h3 className="text-xl font-semibold gradient-text">{title}</h3>
        <div className="px-2 py-0.5 rounded text-xs bg-primary/10 text-primary border border-primary/30">
          实时 / Live
        </div>
      </div>

      {/* Orders List / 订单列表 */}
      <div className="space-y-3">
        {orders.length === 0 ? (
          <div className="text-center py-8 text-[var(--text-muted)]">
            <p>暂无鲸鱼动向</p>
            <p className="text-sm">No whale activities</p>
          </div>
        ) : (
          orders.map((order, index) => (
            <WhaleOrderItem key={index} order={order} />
          ))
        )}
      </div>

      {/* View More Button / 查看更多按钮 */}
      {orders.length > 0 && (
        <button className="w-full mt-4 py-2 text-sm text-primary hover:text-primary-light transition-colors duration-150 flex items-center justify-center gap-1 group">
          <span>查看更多 / View More</span>
          <span className="transition-transform duration-150 group-hover:translate-x-1">→</span>
        </button>
      )}
    </div>
  );
}

/**
 * WhaleOrderItem - 单个鲸鱼订单项
 * Individual Whale Order Item
 */
function WhaleOrderItem({ order }: { order: WhaleOrder }) {
  const isBid = order.type === 'bid';

  return (
    <div
      className={`p-3 rounded-lg border transition-all duration-150 hover:scale-[1.02] ${
        isBid
          ? 'bg-[var(--color-success)]/10 border-[var(--color-success)]/30 hover:border-[var(--color-success)]/50'
          : 'bg-[var(--color-error)]/10 border-[var(--color-error)]/30 hover:border-[var(--color-error)]/50'
      }`}
    >
      <div className="flex justify-between items-start mb-2">
        {/* Left: Type and Wallet / 左侧：类型和钱包 */}
        <div>
          <div
            className="inline-block px-2 py-0.5 rounded text-xs font-semibold mb-1"
            style={{
              backgroundColor: isBid
                ? 'var(--color-success)'
                : 'var(--color-error)',
              color: 'var(--bg-primary)',
            }}
          >
            {isBid ? '买单 / Bid' : '卖单 / Ask'}
          </div>
          <p className="text-xs text-[var(--text-muted)] font-mono">
            {order.wallet.slice(0, 8)}...{order.wallet.slice(-6)}
          </p>
        </div>

        {/* Right: Price and Size / 右侧：价格和数量 */}
        <div className="text-right">
          <p className="text-lg font-bold font-mono text-[var(--text-primary)]">
            ${order.price}
          </p>
          <p className="text-sm text-[var(--text-secondary)] font-mono">
            {order.size}
          </p>
        </div>
      </div>

      {/* Timestamp / 时间戳 */}
      <p className="text-xs text-[var(--text-muted)]">
        ⏰ {order.timestamp}
      </p>
    </div>
  );
}
