import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { FAQS } from '../constants/data';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-10">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Everything you need to know before enrolling your child."
          centered
          className="mb-12"
        />

        <div className="space-y-3">
          {FAQS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.3, delay: index * 0.06 }}
              className={`bg-white rounded-[20px] border border-[#E5E7EB] overflow-hidden transition-shadow duration-300 ${
                openIndex === index ? 'shadow-sm' : ''
              }`}
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="text-sm sm:text-base font-semibold text-[#111827]">
                  {item.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0"
                >
                  <ChevronDown
                    size={18}
                    className="text-[#64748B]"
                  />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: 'auto',
                      opacity: 1,
                      transition: { duration: 0.3, ease: 'easeOut' },
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: { duration: 0.2, ease: 'easeIn' },
                    }}
                  >
                    <div className="px-6 pb-5">
                      <p className="text-sm text-[#64748B] leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
