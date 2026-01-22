import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Lock, FileWarning, ShieldAlert } from 'lucide-react';

const RealRisks: React.FC = () => {
  const risks = [
    {
      icon: Lock,
      title: "Data Breaches",
      desc: "A single lost drive can expose millions of records, leading to lawsuits and brand collapse.",
      color: "text-rose-500",
      bg: "bg-rose-50"
    },
    {
      icon: FileWarning,
      title: "Compliance Fines",
      desc: "HIPAA & GLBA violations can cost up to $50,000 per record found on improper media.",
      color: "text-amber-500",
      bg: "bg-amber-50"
    },
    {
      icon: ShieldAlert,
      title: "Environmental Liability",
      desc: "Improper e-waste dumping creates legal liability that tracks back to the original asset owner.",
      color: "text-orange-500",
      bg: "bg-orange-50"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: Image Visualization */}
          <motion.div 
            className="order-2 lg:order-1 relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white h-[600px]">
              <img 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop" 
                alt="Data Security Risk" 
                className="w-full h-full object-cover"
              />
              {/* Dark Red Overlay for "Risk" Vibe */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-rose-600/20 backdrop-blur-md border border-rose-500/30 p-6 rounded-2xl">
                  <div className="flex items-center gap-3 mb-2">
                    <AlertTriangle className="w-6 h-6 text-rose-500" />
                    <h4 className="text-white font-bold text-lg">Critical Warning</h4>
                  </div>
                  <p className="text-slate-200 text-sm">
                    40% of used hard drives sold online still contain personally identifiable information (PII). Don't be a statistic.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Background Decor */}
            <div className="absolute -z-10 top-10 left-[-20px] w-full h-full border-2 border-rose-200/50 rounded-3xl"></div>
          </motion.div>

          {/* RIGHT: Content */}
          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-100 text-rose-600 text-xs font-bold uppercase tracking-wider mb-6">
              <AlertTriangle className="w-4 h-4" />
              <span>Risk Assessment</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
              The Real Cost of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-orange-500">Improper Disposal</span>
            </h2>

            <p className="text-lg text-slate-600 mb-10">
              Cutting corners with an uncertified recycler isn't savings—it's a liability. We eliminate these risks through forensic data destruction and audited chain of custody.
            </p>

            <div className="space-y-6">
              {risks.map((risk, idx) => (
                <div key={idx} className="flex gap-5 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className={`w-12 h-12 rounded-xl ${risk.bg} flex items-center justify-center shrink-0`}>
                    <risk.icon className={`w-6 h-6 ${risk.color}`} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">{risk.title}</h4>
                    <p className="text-slate-500 text-sm mt-1 leading-relaxed">{risk.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default RealRisks;