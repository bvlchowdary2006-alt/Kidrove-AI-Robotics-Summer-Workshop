import React from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  Cpu,
  Lightbulb,
  Sparkles,
  Rocket,
  Globe,
  LucideIcon,
} from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { Card } from './ui/Card';
import { OUTCOMES } from '../constants/data';

const iconMap: Record<string, LucideIcon> = {
  Brain,
  Cpu,
  Lightbulb,
  Sparkles,
  Rocket,
  Globe,
};

export const LearningOutcomes = () => {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <SectionHeading
          title="What Your Child Will Learn"
          subtitle="A comprehensive curriculum designed to inspire and educate young minds in AI and robotics."
          centered
          className="mb-14"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {OUTCOMES.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Card hoverable padding="lg" className="h-full group">
                  <div className="flex flex-col gap-4">
                    <div className="w-11 h-11 rounded-[14px] bg-gradient-to-br from-[#14B8A6]/10 to-[#0D9488]/10 flex items-center justify-center group-hover:from-[#14B8A6] group-hover:to-[#0D9488] transition-all duration-300">
                      {Icon && <Icon size={22} className="text-[#14B8A6] group-hover:text-white transition-colors duration-300" />}
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
      </div>
    </section>
  );
};
