import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { TIMELINE } from '../constants/data';

export const Timeline = () => {
  return (
    <section id="curriculum" className="py-16 sm:py-20">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-10">
        <SectionHeading
          title="Curriculum Timeline"
          subtitle="A structured 4-week journey from AI fundamentals to building your own smart project."
          centered
          className="mb-14"
        />

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#14B8A6] via-[#0D9488] to-[#115E59]" />

          <div className="space-y-10">
            {TIMELINE.map((item, index) => (
              <motion.div
                key={item.week}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-16"
              >
                <div
                  className="absolute left-[18px] top-1 w-[18px] h-[18px] rounded-full border-[3px] border-white shadow-sm ring-2"
                  style={{ backgroundColor: item.color, ringColor: item.color }}
                />

                <div className="bg-white rounded-[20px] border border-[#E5E7EB] p-6 sm:p-7 hover:shadow-lg transition-shadow duration-300">
                  <span
                    className="inline-block text-xs font-bold uppercase tracking-wider mb-2"
                    style={{ color: item.color }}
                  >
                    {item.week}
                  </span>
                  <h3 className="text-xl font-bold text-[#111827] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
