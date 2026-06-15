import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  isLoading?: boolean;
  as?: 'button' | 'a';
  href?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      isLoading = false,
      as = 'button',
      href,
      className = '',
      ...props
    },
    ref
  ) => {
    const base =
      'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 select-none';

    const variants = {
      primary:
        'bg-[#14B8A6] hover:bg-[#0D9488] text-white shadow-sm hover:shadow-md',
      secondary:
        'bg-[#111827] hover:bg-[#1E293B] text-white shadow-sm hover:shadow-md',
      outline:
        'border-2 border-[#14B8A6] text-[#14B8A6] hover:bg-[#14B8A6] hover:text-white',
      ghost:
        'text-[#64748B] hover:text-[#111827] hover:bg-[#F1F5F9]',
    };

    const sizes = {
      sm: 'px-5 py-2.5 text-sm rounded-xl',
      md: 'px-7 py-3 text-base rounded-xl',
      lg: 'px-9 py-4 text-lg rounded-2xl',
    };

    const cls = `${base} ${variants[variant]} ${sizes[size]} ${
      fullWidth ? 'w-full' : ''
    } ${isLoading ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'} ${className}`;

    const content = isLoading ? (
      <>
        <span className="inline-block h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        <span>Processing...</span>
      </>
    ) : (
      children
    );

    if (as === 'a' && href) {
      return (
        <motion.a
          href={href}
          className={cls}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {content}
        </motion.a>
      );
    }

    return (
      <motion.button
        ref={ref}
        disabled={isLoading}
        className={cls}
        whileHover={isLoading ? {} : { scale: 1.02 }}
        whileTap={isLoading ? {} : { scale: 0.98 }}
        {...(props as any)}
      >
        {content}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
