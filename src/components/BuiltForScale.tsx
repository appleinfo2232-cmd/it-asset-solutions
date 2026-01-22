import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Building2, Globe2, BarChart3, Clock, MapPin, Activity } from 'lucide-react';

const BuiltForScale: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      {/* Background World Map Pattern (Subtle) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://upload.wikimedia.org/wikipedia/commons/2/2c/World_map_blank_black_lines_4500px_monochrome.png')] bg-center bg-no-repeat bg-cover"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-6">
              <Building2 className="w-4 h-4" />
              <span>Enterprise Infrastructure</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
              Logistics Built for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">Massive Scale</span>
            </h2>

            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              We don't just pick up electronics; we orchestrate complex disposal projects. Whether you're decommissioning a hyperscale data center or refreshing 10,000 devices across 50 states, our network is ready.
            </p>

            {/* Premium Stats Grid */}
            <div className="grid grid-cols-2 gap-5">
              {[
                { label: "Annual Volume", value: "150K+", unit: "Assets", icon: BarChart3 },
                { label: "SLA Speed", value: "7 Days", unit: "Avg Turnaround", icon: Clock },
                { label: "Secure Fleet", value: "GPS", unit: "Real-Time Tracking", icon: Truck },
                { label: "Coverage", value: "50", unit: "States Served", icon: Globe2 },
              ].map((stat, idx) => (
                <div key={idx} className="group p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-indigo-100 transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 bg-slate-50 rounded-lg text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      <stat.icon className="w-5 h-5" />
                    </div>
                    {idx === 2 && <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>}
                  </div>
                  <div className="text-2xl font-black text-slate-900">{stat.value}</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wide mt-1">{stat.unit}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: High-Tech Image Visualization */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Main Image Container */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white h-[650px] group">
              
              {/* NEW IMAGE: Modern, High-Tech Logistics Facility / Data Center Hallway */}
              <img 
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop" 
                alt="Enterprise Scale Logistics Facility" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              
              {/* Blue Tech Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
              
              {/* Floating "Live Ops" Card (Top Right) */}
              <div className="absolute top-8 right-8 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-2xl w-48">
                <div className="flex items-center gap-2 border-b border-white/10 pb-3 mb-3">
                  <Activity className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-white uppercase">Live Ops</span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-xs">
                     <span className="text-slate-400">Active Fleets</span>
                     <span className="text-white font-mono">14</span>
                  </div>
                  <div className="flex justify-between text-xs">
                     <span className="text-slate-400">Processing</span>
                     <span className="text-emerald-400 font-mono">98%</span>
                  </div>
                </div>
              </div>

              {/* Floating "Network Map" Card (Bottom Left) */}
              <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20 max-w-xs">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-50 rounded-full shrink-0">
                     <MapPin className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Nationwide Network</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Our secure logistics chain covers all 50 states, ensuring safe transport from any facility.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Decorative Dots Pattern behind image */}
            <div className="absolute -z-10 top-10 right-[-20px] w-full h-full border-2 border-dashed border-indigo-200 rounded-[2.5rem]"></div>
            <div className="absolute -z-20 bottom-[-40px] left-[-40px] w-64 h-64 bg-indigo-600/5 rounded-full blur-3xl"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BuiltForScale;