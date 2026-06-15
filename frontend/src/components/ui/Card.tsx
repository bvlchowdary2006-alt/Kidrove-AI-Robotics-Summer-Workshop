import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, className = '', hoverable = false, padding = 'md' }, ref) => {
    const paddings = {
      sm: 'p-5',
      md: 'p-7',
      lg: 'p-9',
    };

    const base = `bg-white border border-[#E5E7EB] rounded-[20px] transition-all duration-300 ${paddings[padding]}`;
    const hover = hoverable ? 'hover:shadow-lg hover:-translate-y-0.5' : '';

    return (
      <motion.div
        ref={ref}
        className={`${base} ${hover} ${className}`}
        whileHover={hoverable ? { y: -3 } : undefined}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = 'Card';
