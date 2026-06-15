import React from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Calendar,
  Monitor,
  IndianRupee,
  CalendarCheck,
  LucideIcon,
} from 'lucide-react';
import { Card } from './ui/Card';
import { HIGHLIGHTS } from '../constants/data';

const iconMap: Record<string, LucideIcon> = {
  Users,
  Calendar,
  Monitor,
  IndianRupee,
  CalendarCheck,
};

export const WorkshopHighlights = () => {
  return (
    <section id="workshops" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {HIGHLIGHTS.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Card
                  hoverable
                  padding="md"
                  className="h-full text-center"
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#14B8A6]/10 to-[#0D9488]/10 flex items-center justify-center">
                      {Icon && <Icon size={20} className="text-[#14B8A6]" />}
                    </div>
                    <div>
                      <p className="text-xs font-medium text-[#94A3B8] uppercase tracking-wider mb-1">
                        {item.label}
                      </p>
                      <p className="text-base sm:text-lg font-bold text-[#111827]">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
