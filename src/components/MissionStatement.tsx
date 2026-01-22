import React from 'react';
import { motion } from 'framer-motion';
import { Target, CheckCircle, Globe } from 'lucide-react';

const MissionStatement: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6">
              <Target className="w-4 h-4" />
              <span>Our Mission</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
              Transforming Retired Technology into <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">Strategic Value</span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {/* UPDATED: "compliant" -> "standards-aligned" for legal safety */}
              We deliver secure, <strong>standards-aligned</strong> IT asset disposition solutions that protect your data, maximize financial recovery, and directly support your corporate ESG goals.
            </p>

            <div className="space-y-4">
              {[
                { title: "Secure Data Destruction", desc: "NIST 800-88 aligned sanitization with audit trails." },
                { title: "ESG & Circular Economy", desc: "Environmentally responsible zero-landfill disposal." },
                { title: "Maximum Value Recovery", desc: "Global remarketing to unlock hidden asset value." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1 bg-emerald-100 p-1 rounded-full h-fit">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Image Area */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white h-[500px] group">
              {/* High-Tech Value Recovery Image */}
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" 
                alt="High Value Technology Recovery" 
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlay Gradient for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/20 flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">Global Reach</p>
                  <p className="text-slate-900 font-bold">Serving Clients Nationwide</p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-[-20px] right-[-20px] w-full h-full border-2 border-slate-200 rounded-3xl"></div>
            <div className="absolute -z-20 bottom-[-40px] left-[-40px] w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default MissionStatement;