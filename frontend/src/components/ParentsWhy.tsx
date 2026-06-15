import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Layers, Users as UsersIcon, LucideIcon } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { Card } from './ui/Card';
import { FEATURES, STATS } from '../constants/data';

const iconMap: Record<string, LucideIcon> = {
  MessageCircle,
  Layers,
  Users: UsersIcon,
};

export const ParentsWhy = () => {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <SectionHeading
          title="Why Parents Choose Kidrove"
          subtitle="We believe in quality education that combines innovation with care."
          centered
          className="mb-14"
        />

        <div className="grid sm:grid-cols-3 gap-5 mb-14">
          {FEATURES.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card hoverable padding="lg" className="h-full">
                  <div className="flex flex-col gap-4">
                    <div className="w-11 h-11 rounded-[14px] bg-gradient-to-br from-[#14B8A6]/10 to-[#0D9488]/10 flex items-center justify-center">
                      {Icon && <Icon size={22} className="text-[#14B8A6]" />}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#111827] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#64748B] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-3 gap-5 sm:gap-8">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#14B8A6] to-[#0D9488] bg-clip-text text-transparent mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-[#64748B] font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
