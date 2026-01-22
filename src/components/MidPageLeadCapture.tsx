import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Sparkles,
  Mail,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Loader,
  ShieldCheck,
  TrendingUp,
  Zap,
  Building2
} from 'lucide-react';
import { sendEmail } from '../utils/emailService';

const MidPageLeadCapture: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setErrorMessage('Email is required');
      setSubmitStatus('error');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMessage('Please enter a valid email address');
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const emailData = {
        form_type: 'Quick ITAD Assessment Request',
        full_name: 'Lead Capture',
        company_name: companyName || 'Not provided',
        email: email,
        phone_number: 'Not provided',
        subject: 'Free ITAD Assessment Request',
        message: `Lead captured from mid-page form. Company: ${companyName || 'Not provided'}`,
        to_email: 'admin@itassetsolutions.com',
        from_name: companyName || email,
        reply_to: email
      };

      const success = await sendEmail(emailData);

      if (success) {
        setSubmitStatus('success');
        setEmail('');
        setCompanyName('');
      } else {
        setSubmitStatus('error');
        setErrorMessage('Failed to send request. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setErrorMessage('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // SUCCESS STATE VIEW (light theme)
  if (submitStatus === 'success') {
    return (
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Subtle background accents */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
          <div className="absolute top-[-6%] right-[-10%] w-[520px] h-[520px] bg-emerald-100/40 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
          >
            <div className="w-24 h-24 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-emerald-200/60">
              <CheckCircle2 className="w-12 h-12 text-white" />
            </div>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Request Received
          </motion.h2>

          <motion.p
            className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            Thanks — our team is reviewing your request. Expect a personalized assessment in your inbox within 24 hours.
          </motion.p>

          <motion.button
            onClick={() => setSubmitStatus('idle')}
            className="inline-flex items-center gap-2 text-emerald-700 font-semibold hover:text-emerald-600 underline underline-offset-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            Send another request
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </section>
    );
  }

  // DEFAULT FORM VIEW (light theme)
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-4" />
        <div className="absolute top-[-8%] right-[-8%] w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-8%] left-[-8%] w-[600px] h-[600px] bg-indigo-50 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: Value Proposition */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-blue-500" />
              <span className="text-blue-700 text-xs font-bold uppercase tracking-wider">Free Consultation</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
              Unlock the Hidden Value
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                In Your Retired IT
              </span>
            </h2>

            <p className="text-base text-slate-600 mb-8">
              Don't let old assets become a liability. Get a free, no-obligation assessment of your equipment's remarketing potential today.
            </p>

            <div className="space-y-5">
              {[
                { icon: ShieldCheck, title: 'Compliance Check', desc: 'Verify NIST 800-88 alignment.' },
                { icon: TrendingUp, title: 'Value Appraisal', desc: 'Real-time market valuation.' },
                { icon: Zap, title: 'Logistics Plan', desc: 'Custom pickup strategy included.' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center shrink-0 border border-slate-200">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1,2,3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-xs text-slate-700 font-semibold shadow-sm">
                    <Building2 className="w-4 h-4 text-slate-500" />
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-600 font-medium">Trusted by <span className="text-slate-900 font-bold">500+ Enterprises</span> nationwide.</p>
            </div>
          </motion.div>

          {/* Right: Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="bg-white border border-slate-100 rounded-2xl p-8 lg:p-10 shadow-lg relative"
          >
            {/* Form Header */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-1">Get Your Assessment</h3>
              <p className="text-sm text-slate-500">Fill out the form below to start your free evaluation.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-100 rounded-lg p-3 flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  <p className="text-sm text-red-600">{errorMessage || 'Failed to send request.'}</p>
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Work Email <span className="text-blue-600">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 outline-none transition-all text-slate-900 placeholder-slate-400"
                    placeholder="name@company.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="companyName" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Company Name <span className="text-slate-500 text-[11px] normal-case tracking-normal ml-1">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="companyName"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 outline-none transition-all text-slate-900 placeholder-slate-400"
                  placeholder="Acme Corp, Inc."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-3 rounded-lg font-semibold text-base hover:from-blue-700 hover:to-indigo-700 active:scale-95 transition-all shadow-md disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin text-white/90" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <span>Start Free Assessment</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-500 mt-3">
                <ShieldCheck className="w-3 h-3 text-slate-500" />
                <span>Your data is secure. No spam, ever.</span>
              </div>
            </form>

            {/* Decorative Glow */}
            <div className="absolute -top-8 -right-8 w-36 h-36 bg-blue-50 rounded-full blur-2xl pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MidPageLeadCapture;
