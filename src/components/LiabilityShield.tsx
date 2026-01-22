import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Shield, Umbrella, FileCheck, CheckCircle2 } from 'lucide-react';

const LiabilityShield: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor: Subtle Legal Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6"
          >
            <Scale className="w-4 h-4" />
            <span>Risk Indemnification</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-slate-900 mb-6"
          >
            The "Ironclad" <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">Liability Shield</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            Certifications are badges; <strong>Contracts are law.</strong> We provide more than just disposal; we provide total risk indemnification via binding legal agreements.
          </motion.p>
        </div>

        {/* The 3 Pillars of Protection */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Card 1: Legal Indemnification */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group relative bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Shield className="w-24 h-24 text-blue-600 rotate-12" />
            </div>
            
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
              <Shield className="w-7 h-7" />
            </div>
            
            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
              01. Legal Indemnification
            </h3>
            <p className="text-slate-500 leading-relaxed text-sm mb-6">
              Upon chain-of-custody transfer, we legally assume 100% liability for data privacy and environmental impact.
            </p>
            
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-2 rounded-lg w-fit">
              <CheckCircle2 className="w-4 h-4" /> Binding Agreement
            </div>
          </motion.div>

          {/* Card 2: Errors & Omissions */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="group relative bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-indigo-300 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Umbrella className="w-24 h-24 text-indigo-600 rotate-12" />
            </div>

            <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
              <Umbrella className="w-7 h-7" />
            </div>
            
            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-700 transition-colors">
              02. Errors & Omissions
            </h3>
            <p className="text-slate-500 leading-relaxed text-sm mb-6">
              Our operations are backed by comprehensive E&O insurance policies protecting your firm against breach fallout.
            </p>

            <div className="flex items-center gap-2 text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-2 rounded-lg w-fit">
              <CheckCircle2 className="w-4 h-4" /> Fully Insured
            </div>
          </motion.div>

          {/* Card 3: Defensible Audit */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="group relative bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-cyan-300 transition-all duration-300"
          >
             <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <FileCheck className="w-24 h-24 text-cyan-600 rotate-12" />
            </div>

            <div className="w-14 h-14 bg-cyan-50 rounded-xl flex items-center justify-center text-cyan-600 mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
              <FileCheck className="w-7 h-7" />
            </div>
            
            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-cyan-700 transition-colors">
              03. Defensible Audit
            </h3>
            <p className="text-slate-500 leading-relaxed text-sm mb-6">
              Serialized reporting provides the exact timestamp, method, and technician ID for every destroyed drive.
            </p>

            <div className="flex items-center gap-2 text-xs font-bold text-cyan-600 bg-cyan-50 px-3 py-2 rounded-lg w-fit">
              <CheckCircle2 className="w-4 h-4" /> Audit Ready
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default LiabilityShield;