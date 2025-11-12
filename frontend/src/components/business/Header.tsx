import { useState } from 'react';

interface NavLink {
  label: string;
  labelEn: string;
  href: string;
  icon?: string;
}

const navLinks: NavLink[] = [
  { label: 'AI摘要', labelEn: 'AI Digest', href: '/', icon: '🤖' },
  { label: '鲸鱼追踪', labelEn: 'Whale Tracking', href: '/whale', icon: '🐋' },
  { label: '交易员观点', labelEn: 'Trader Opinions', href: '/traders', icon: '👥' },
  { label: '策略编辑器', labelEn: 'Strategy Editor', href: '/strategy', icon: '🔧' },
];

export function Header() {
  const [activeLink] = useState('/');
  const [notificationCount] = useState(3);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[var(--bg-primary)]/80 border-b border-[var(--border-default)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-lg shadow-lg shadow-primary/30">
              0x
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-text">0xLens</h1>
              <p className="text-xs text-[var(--text-muted)] hidden sm:block">
                AI Trading Intelligence
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 flex items-center gap-2 ${
                  activeLink === link.href
                    ? 'bg-primary/10 text-primary border border-primary/30'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]'
                }`}
              >
                <span>{link.icon}</span>
                <span className="hidden lg:inline">{link.label}</span>
                <span className="hidden lg:inline text-xs opacity-60">/ {link.labelEn}</span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button className="relative p-2 rounded-lg hover:bg-[var(--bg-secondary)] transition-colors duration-150">
              <span className="text-xl">🔔</span>
              {notificationCount > 0 && (
                <span className="absolute top-0 right-0 w-5 h-5 bg-[var(--color-error)] rounded-full text-white text-xs flex items-center justify-center font-semibold animate-pulse">
                  {notificationCount}
                </span>
              )}
            </button>

            <button className="md:hidden p-2 rounded-lg hover:bg-[var(--bg-secondary)] transition-colors duration-150">
              <span className="text-xl">☰</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
