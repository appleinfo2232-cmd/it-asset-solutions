import React from 'react';
import { motion } from 'framer-motion';
import {
  Truck,
  ShieldCheck,
  Recycle,
  FileCheck,
  Clock,
  CheckCircle2,
  Workflow,
  Shield,
  Lock
} from 'lucide-react';

const SecureProcess: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Secure Pickup & Logistics",
      desc: "GPS-tracked fleets and secure chain-of-custody transfer from your facility to ours.",
      icon: Truck,
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-100"
    },
    {
      num: "02",
      title: "Audit & Data Destruction",
      desc: "Every asset is scanned. Data is destroyed via NIST 800-88 wiping or physical shredding.",
      icon: ShieldCheck,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      border: "border-indigo-100"
    },
    {
      num: "03",
      title: "Value Recovery & Recycling",
      desc: "Marketable assets are resold for ROI. Obsolete gear is recycled (Zero-Landfill / EPA aligned).",
      icon: Recycle,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-100"
    },
    {
      num: "04",
      title: "Reporting & Certification",
      desc: "Receive serialized Certificates of Destruction and a full ESG impact report.",
      icon: FileCheck,
      color: "text-purple-600",
      bg: "bg-purple-50",
      border: "border-purple-100"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT: PROCESS STEPS */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6">
              <Workflow className="w-4 h-4" />
              Chain of Custody
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
              A Secure, Transparent <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                4-Step Process
              </span>
            </h2>

            <p className="text-lg text-slate-600 mb-10">
              From the moment we touch your assets, you have total visibility.
              Our documented process ensures security and accountability at every stage.
            </p>

            <div className="relative space-y-8">
              {/* Vertical Line */}
              <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-slate-200" />

              {steps.map((step, idx) => (
                <div key={idx} className="relative flex items-start gap-6 group">
                  <div
                    className={`relative z-10 w-16 h-16 rounded-2xl ${step.bg} border-2 ${step.border}
                    flex items-center justify-center shrink-0
                    group-hover:scale-110 transition-transform duration-300 shadow-sm`}
                  >
                    <step.icon className={`w-7 h-7 ${step.color}`} />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-white border border-slate-200 rounded-full
                      flex items-center justify-center text-[10px] font-bold text-slate-500 shadow-sm">
                      {step.num}
                    </div>
                  </div>

                  <div className="pt-2">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-slate-500 mt-2 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: ABSTRACT SECURITY VISUAL (No Image) */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative h-[650px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white group bg-[#0F172A]">
              
              {/* Abstract Tech Background */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-[#0F172A] to-[#0F172A]"></div>
              
              {/* Grid Pattern */}
              <div className="absolute inset-0 opacity-10" 
                style={{ 
                  backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
                  backgroundSize: '40px 40px' 
                }}>
              </div>

              {/* Animated Glow Orb */}
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] animate-pulse"></div>

              {/* Center "Vault" Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 z-10">
                
                {/* Shield Icon in Glass Circle */}
                <div className="relative w-24 h-24 bg-white/5 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 mb-8 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                   <div className="absolute inset-0 rounded-full border border-blue-500/30 animate-[spin_10s_linear_infinite]"></div>
                   <ShieldCheck className="w-10 h-10 text-blue-400" />
                </div>

                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
                  Secure Processing
                </h3>
                <p className="text-slate-400 max-w-sm leading-relaxed text-sm">
                  Our facility operates under strict NIST 800-88 guidelines. 
                  Every byte of data is destroyed, verified, and certified.
                </p>

                {/* Status Indicator Pill */}
                <div className="mt-8 flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">System Secure</span>
                </div>
              </div>

              {/* Bottom Stats Card */}
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-white/10">
                  <div className="grid grid-cols-2 gap-4 divide-x divide-white/10">
                    <div className="flex items-center gap-4 pr-4">
                      <div className="p-3 bg-blue-500/10 rounded-xl">
                        <Clock className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <div className="text-2xl font-black text-white">7 Days</div>
                        <div className="text-xs font-bold text-slate-400 uppercase">
                          Turnaround
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 pl-4">
                      <div className="p-3 bg-emerald-500/10 rounded-xl">
                        <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                      </div>
                      <div>
                        <div className="text-2xl font-black text-white">99.8%</div>
                        <div className="text-xs font-bold text-slate-400 uppercase">
                          Success Rate
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Blob Behind Container */}
            <div className="absolute -z-10 top-1/4 right-[-50px] w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />
            <div className="absolute -z-10 bottom-[-20px] left-[-20px] w-full h-full border-2 border-slate-200 rounded-[2.5rem]" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SecureProcess;