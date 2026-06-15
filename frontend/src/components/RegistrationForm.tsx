import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle, ArrowRight, Sparkles, Users, Calendar, IndianRupee, Monitor } from 'lucide-react';
import { Button } from './ui/Button';
import { WORKSHOP } from '../constants/data';

const schema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name is too long'),
  email: z.string().email('Please enter a valid email address'),
  phone: z
    .string()
    .min(10, 'Phone number must be at least 10 digits')
    .max(15, 'Phone number is too long')
    .regex(/^[+]?[\d\s()-]+$/, 'Please enter a valid phone number'),
  parentName: z
    .string()
    .min(2, 'Parent name must be at least 2 characters')
    .max(50, 'Parent name is too long'),
  childAge: z
    .number({ invalid_type_error: 'Please enter your child\'s age' })
    .min(8, 'Minimum age is 8 years')
    .max(14, 'Maximum age is 14 years'),
});

type FormData = z.infer<typeof schema>;

const details = [
  { icon: Users, label: 'Age Group', value: WORKSHOP.ageGroup },
  { icon: Calendar, label: 'Duration', value: WORKSHOP.duration },
  { icon: Monitor, label: 'Mode', value: WORKSHOP.mode },
  { icon: IndianRupee, label: 'Fee', value: WORKSHOP.fee },
];

export const RegistrationForm = () => {
  const [submitState, setSubmitState] = React.useState<
    'idle' | 'loading' | 'success'
  >('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      parentName: '',
      childAge: undefined,
    },
  });

  const onSubmit = async (data: FormData) => {
    setSubmitState('loading');
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Failed to submit');
      setSubmitState('success');
      reset();
    } catch {
      setSubmitState('idle');
      alert('Something went wrong. Please try again.');
    }
  };

  const fieldClasses = (hasError: boolean) =>
    `w-full px-4 py-3.5 bg-white border rounded-xl text-sm text-[#111827] placeholder:text-[#94A3B8] transition-all duration-200 outline-none ${
      hasError
        ? 'border-[#EF4444] focus:border-[#EF4444] focus:ring-2 focus:ring-[#EF4444]/20'
        : 'border-[#E5E7EB] focus:border-[#14B8A6] focus:ring-2 focus:ring-[#14B8A6]/20'
    }`;

  const inputProps = (name: keyof FormData) => ({
    ...register(name, { valueAsNumber: name === 'childAge' }),
    className: fieldClasses(!!errors[name]),
  });

  if (submitState === 'success') {
    return (
      <section id="register" className="py-16 sm:py-20">
        <div className="max-w-lg mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-[24px] border border-[#E5E7EB] p-10 text-center shadow-soft"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#14B8A6] to-[#0D9488] flex items-center justify-center mx-auto mb-5 shadow-lg">
              <CheckCircle size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#111827] mb-2">
              Enquiry Submitted!
            </h3>
            <p className="text-[#64748B] text-sm leading-relaxed mb-6">
              Thank you for your interest! Our team will reach out to you
              within 24 hours with next steps.
            </p>
            <Button
              variant="outline"
              onClick={() => setSubmitState('idle')}
            >
              Submit Another Enquiry
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="register" className="py-16 sm:py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#14B8A6]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#14B8A6]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative">
        <div className="max-w-5xl mx-auto bg-white rounded-[24px] border border-[#E5E7EB] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)]">
          <div className="grid lg:grid-cols-5">
            <div className="lg:col-span-2 bg-gradient-to-br from-[#111827] via-[#1a1f2e] to-[#111827] p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#14B8A6]/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#14B8A6]/10 rounded-full blur-3xl" />
              </div>

              <div className="relative">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 border border-white/10 rounded-full text-xs font-medium text-white/80 mb-4">
                  <Sparkles size={12} />
                  Limited Spots Available
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 text-balance">
                  Reserve Your Child&apos;s Spot
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  Join our upcoming AI & Robotics workshop. Small batch sizes
                  ensure personalized attention for every student.
                </p>
              </div>

              <div className="mt-8 space-y-4 relative">
                <p className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-4">
                  Workshop Details
                </p>
                {details.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between border-b border-white/10 pb-3 last:border-0 last:pb-0"
                  >
                    <div className="flex items-center gap-2">
                      <item.icon size={14} className="text-[#14B8A6]" />
                      <span className="text-xs text-white/60">{item.label}</span>
                    </div>
                    <span className="text-xs font-semibold text-white">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3 p-8 sm:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#14B8A6] to-[#0D9488] flex items-center justify-center">
                  <Sparkles size={18} className="text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#111827]">
                    Fill in Your Details
                  </h4>
                  <p className="text-xs text-[#94A3B8]">All fields are required</p>
                </div>
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
                noValidate
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-[#64748B] mb-1.5 uppercase tracking-wider">
                      Child&apos;s Name
                    </label>
                    <input
                      {...inputProps('name')}
                      type="text"
                      placeholder="Aarav Sharma"
                    />
                    {errors.name && (
                      <p className="text-xs text-[#EF4444] mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#64748B] mb-1.5 uppercase tracking-wider">
                      Child&apos;s Age
                    </label>
                    <input
                      {...inputProps('childAge')}
                      type="number"
                      placeholder="10"
                      min={8}
                      max={14}
                    />
                    {errors.childAge && (
                      <p className="text-xs text-[#EF4444] mt-1">
                        {errors.childAge.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-[#64748B] mb-1.5 uppercase tracking-wider">
                      Parent&apos;s Name
                    </label>
                    <input
                      {...inputProps('parentName')}
                      type="text"
                      placeholder="Rajesh Sharma"
                    />
                    {errors.parentName && (
                      <p className="text-xs text-[#EF4444] mt-1">
                        {errors.parentName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#64748B] mb-1.5 uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      {...inputProps('email')}
                      type="email"
                      placeholder="parent@example.com"
                    />
                    {errors.email && (
                      <p className="text-xs text-[#EF4444] mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#64748B] mb-1.5 uppercase tracking-wider">
                    Phone Number
                  </label>
                  <input
                    {...inputProps('phone')}
                    type="tel"
                    placeholder="+91 98765 43210"
                  />
                  {errors.phone && (
                    <p className="text-xs text-[#EF4444] mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  fullWidth
                  size="lg"
                  isLoading={submitState === 'loading'}
                >
                  {submitState === 'loading' ? 'Submitting...' : 'Reserve My Seat'}
                  {submitState !== 'loading' && <ArrowRight size={18} />}
                </Button>

                <p className="text-[11px] text-center text-[#94A3B8]">
                  By submitting, you agree to our Terms of Service and Privacy
                  Policy. We respect your privacy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
