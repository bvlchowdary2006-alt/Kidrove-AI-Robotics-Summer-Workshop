import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = false,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`flex flex-col gap-5 ${
        centered ? 'items-center text-center' : ''
      } ${className}`}
    >
      <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-[#111827] leading-[1.15] tracking-tight text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-[#64748B] max-w-[640px] leading-relaxed text-balance">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
