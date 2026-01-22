import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

const CommitmentNumbers: React.FC = () => {
  const stats = [
    {
      id: 1,
      icon: TrendingUp,
      value: "$12.5M+",
      label: "Value Returned",
      subtext: "Revenue generated for clients via remarketing",
      color: "text-emerald-400",
      bg: "bg-emerald-400/10",
      border: "group-hover:border-emerald-500/50",
      shadow: "group-hover:shadow-emerald-900/20"
    },
    {
      id: 2,
      icon: Users,
      value: "675+",
      label: "Enterprise Clients",
      subtext: "Trusted by Fortune 500s & Healthcare Systems",
      color: "text-blue-400",
      bg: "bg-blue-400/10",
      border: "group-hover:border-blue-500/50",
      shadow: "group-hover:shadow-blue-900/20"
    },
    {
      id: 3,
      icon: ShieldCheck,
      value: "100%",
      label: "Audit Success Rate",
      subtext: "Zero data breaches or compliance violations",
      color: "text-indigo-400",
      bg: "bg-indigo-400/10",
      border: "group-hover:border-indigo-500/50",
      shadow: "group-hover:shadow-indigo-900/20"
    },
    {
      id: 4,
      icon: Clock,
      value: "7 Days",
      label: "Avg. Turnaround",
      subtext: "From pickup to final settlement report",
      color: "text-amber-400",
      bg: "bg-amber-400/10",
      border: "group-hover:border-amber-500/50",
      shadow: "group-hover:shadow-amber-900/20"
    }
  ];

  return (
    <section className="py-24 bg-[#0B1120] relative overflow-hidden">
      
      {/* Background Elements for Depth */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold uppercase tracking-wider mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            Live Metrics
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight"
          >
            Our Impact <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">By The Numbers</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Transparency is at our core. These figures represent our dedication to security, financial recovery, and operational excellence.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group relative p-6 rounded-2xl bg-[#0f172a] border border-slate-800 hover:border-slate-600 transition-all duration-300 hover:-translate-y-1 ${stat.shadow}`}
            >
              {/* Top Row: Icon & Sparkline effect */}
              <div className="flex justify-between items-start mb-6">
                <div className={`p-3 rounded-xl ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                {/* Decorative dots to look like a chart/menu */}
                <div className="flex gap-1">
                   <div className="w-1 h-1 rounded-full bg-slate-700"></div>
                   <div className="w-1 h-1 rounded-full bg-slate-700"></div>
                   <div className="w-1 h-1 rounded-full bg-slate-700"></div>
                </div>
              </div>

              {/* Main Number */}
              <div className={`text-4xl font-bold text-white mb-2 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all`}>
                {stat.value}
              </div>

              {/* Labels */}
              <div className="text-sm font-bold text-slate-300 uppercase tracking-wide mb-2">
                {stat.label}
              </div>
              
              {/* Context Subtext (Adds Realism) */}
              <div className="text-xs text-slate-500 font-medium leading-relaxed border-t border-slate-800 pt-3 mt-3">
                {stat.subtext}
              </div>

              {/* Animated Glow Border on Hover */}
              <div className={`absolute inset-0 rounded-2xl border-2 border-transparent ${stat.border} opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`}></div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center flex items-center justify-center gap-2 text-slate-500 text-sm"
        >
          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          <span>Data verified by third-party compliance audits (FY 2024-2025)</span>
        </motion.div>
      </div>
    </section>
  );
};

export default CommitmentNumbers;