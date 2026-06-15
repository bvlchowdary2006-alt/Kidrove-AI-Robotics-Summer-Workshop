import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Check, Shield, Zap, Users } from 'lucide-react';
import { Button } from './ui/Button';
import { WORKSHOP } from '../constants/data';

export const Hero = () => {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#14B8A6]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#14B8A6]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#14B8A6]/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-[#E5E7EB] rounded-full text-sm font-medium text-[#64748B] mb-6 shadow-sm"
            >
              <span className="w-1.5 h-1.5 bg-[#14B8A6] rounded-full animate-pulse" />
              {WORKSHOP.tagline}
              <span className="px-2 py-0.5 bg-[#14B8A6]/10 rounded-full text-xs font-semibold text-[#14B8A6] ml-1">
                Enrolling Now
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-4xl sm:text-5xl lg:text-[3.75rem] font-bold text-[#111827] leading-[1.05] tracking-tight mb-6 text-balance"
            >
              AI & Robotics Summer
              <br />
              Workshop for Curious{' '}
              <span className="bg-gradient-to-r from-[#14B8A6] to-[#0D9488] bg-clip-text text-transparent">
                Young Innovators
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-[#64748B] leading-relaxed mb-8 max-w-[540px] text-balance"
            >
              {WORKSHOP.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10"
            >
              <Button as="a" href="#register" size="lg">
                Reserve a Seat
                <ArrowRight size={18} />
              </Button>
              <Button variant="outline" size="lg" as="a" href="#curriculum">
                View Curriculum
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-5"
            >
              {WORKSHOP.trustIndicators.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#14B8A6]/10 flex items-center justify-center">
                    <Check size={12} className="text-[#14B8A6]" />
                  </div>
                  <span className="text-sm font-medium text-[#64748B]">
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            className="relative"
          >
            <div className="relative bg-white rounded-[24px] border border-[#E5E7EB] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden">
              <div className="flex items-center gap-1.5 px-5 py-3 border-b border-[#E5E7EB] bg-[#FAF8F5]/50">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                <span className="ml-4 text-xs text-[#94A3B8]">workshop-demo.kidrove.ai</span>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-[#14B8A6] to-[#0D9488] flex items-center justify-center text-white text-xs font-bold border-2 border-white"
                      >
                        {['A', 'B', 'C'][i - 1]}
                      </div>
                    ))}
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold text-[#111827]">24 Students Enrolled</p>
                    <p className="text-xs text-[#94A3B8]">Only 6 spots left</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[
                    { icon: Zap, label: 'Hands-on Learning', color: 'bg-amber-50 text-amber-600 border-amber-200' },
                    { icon: Shield, label: 'Live Mentorship', color: 'bg-emerald-50 text-emerald-600 border-emerald-200' },
                    { icon: Sparkles, label: 'AI Projects', color: 'bg-violet-50 text-violet-600 border-violet-200' },
                    { icon: Users, label: 'Small Batches', color: 'bg-blue-50 text-blue-600 border-blue-200' },
                  ].map((item) => (
                    <div key={item.label} className={`flex items-center gap-2 px-3 py-2.5 rounded-xl border ${item.color}`}>
                      <item.icon size={14} />
                      <span className="text-xs font-semibold">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                <div className="bg-gradient-to-r from-[#14B8A6]/5 to-[#0D9488]/5 rounded-xl border border-[#14B8A6]/20 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">Program Progress</span>
                    <span className="text-xs text-[#14B8A6] font-bold">85%</span>
                  </div>
                  <div className="h-2.5 bg-[#E5E7EB] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '85%' }}
                      transition={{ duration: 1.5, delay: 0.8, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-[#14B8A6] to-[#0D9488] rounded-full"
                    />
                  </div>
                  <div className="flex justify-between mt-1.5">
                    <span className="text-[10px] text-[#94A3B8]">Week 1</span>
                    <span className="text-[10px] text-[#94A3B8]">Week 4</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-[#14B8A6]/5 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-4 -left-4 w-48 h-48 bg-[#14B8A6]/5 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
