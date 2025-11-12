import { ButtonHTMLAttributes, forwardRef } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'success' | 'error';
  size?: 'sm' | 'default' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'default', size = 'default', children, ...props }, ref) => {
    const baseStyles = 'rounded-lg font-medium transition-all duration-150 cursor-pointer';

    const variantStyles = {
      default: 'bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 neon-border',
      outline: 'bg-transparent text-[var(--text-secondary)] border border-[var(--border-default)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]',
      success: 'bg-[var(--color-success)] text-[var(--bg-primary)] hover:opacity-90',
      error: 'bg-[var(--color-error)] text-[var(--bg-primary)] hover:opacity-90',
    };

    const sizeStyles = {
      sm: 'px-3 py-1.5 text-sm',
      default: 'px-6 py-2 text-base',
      lg: 'px-8 py-3 text-lg',
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
