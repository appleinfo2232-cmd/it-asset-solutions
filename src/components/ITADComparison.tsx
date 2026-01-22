import React from 'react';
import { motion } from 'framer-motion';
import { 
  X, 
  Check, 
  Shield, 
  Lock, 
  Truck, 
  Recycle, 
  FileText, 
  TrendingUp, 
  Gavel 
} from 'lucide-react';

// ==========================
// Data Configuration
// ==========================
const COMPARISON_DATA = [
  {
    id: 1,
    feature: "Data Security Standard",
    icon: Lock,
    // Background color for the box
    bgClass: "bg-blue-50/50 border-blue-100",
    iconBg: "bg-blue-100 text-blue-600",
    risk: {
      label: "Generic Recycler",
      desc: "Unknown / Random Wipe"
    },
    solution: {
      label: "IT Asset Solutions",
      desc: "NIST 800-88 Aligned",
      sub: "Guaranteed digital sanitization."
    }
  },
  {
    id: 2,
    feature: "Chain of Custody",
    icon: Truck,
    bgClass: "bg-slate-50 border-slate-200",
    iconBg: "bg-slate-200 text-slate-600",
    risk: {
      label: "Generic Recycler",
      desc: "Unsecured Transport"
    },
    solution: {
      label: "IT Asset Solutions",
      desc: "GPS-Tracked Logistics",
      sub: "Secure from your door to ours."
    }
  },
  {
    id: 3,
    feature: "Environmental Safety",
    icon: Recycle,
    bgClass: "bg-emerald-50/50 border-emerald-100",
    iconBg: "bg-emerald-100 text-emerald-600",
    risk: {
      label: "Generic Recycler",
      desc: "Landfill Risk"
    },
    solution: {
      label: "IT Asset Solutions",
      desc: "Eco-Friendly Process",
      sub: "Zero-landfill, eco-friendly process."
    }
  },
  {
    id: 4,
    feature: "Audit Documentation",
    icon: FileText,
    bgClass: "bg-cyan-50/50 border-cyan-100",
    iconBg: "bg-cyan-100 text-cyan-600",
    risk: {
      label: "Generic Recycler",
      desc: "Basic Receipt"
    },
    solution: {
      label: "IT Asset Solutions",
      desc: "Serialized Certificates",
      sub: "Full audit trail for legal compliance."
    }
  },
  {
    id: 5,
    feature: "Value Recovery",
    icon: TrendingUp,
    bgClass: "bg-amber-50/50 border-amber-100",
    iconBg: "bg-amber-100 text-amber-600",
    risk: {
      label: "Generic Recycler",
      desc: "Scrap Value Only"
    },
    solution: {
      label: "IT Asset Solutions",
      desc: "Revenue Share Program",
      sub: "We pay you for marketable assets."
    }
  },
  {
    id: 6,
    feature: "Liability Protection",
    icon: Gavel,
    bgClass: "bg-indigo-50/50 border-indigo-100",
    iconBg: "bg-indigo-100 text-indigo-600",
    risk: {
      label: "Generic Recycler",
      desc: "You Retain Risk"
    },
    solution: {
      label: "IT Asset Solutions",
      desc: "Full Liability Transfer",
      sub: "We take legal responsibility."
    }
  }
];

// ==========================
// Main Component
// ==========================
const ITADComparisonList: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider mb-4 border border-slate-200">
             <Shield className="w-3 h-3" />
             <span>Risk Comparison</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
            The Difference is <span className="text-blue-600">Clear</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            See exactly why leading organizations switch from generic recyclers to our secure, managed process.
          </p>
        </div>

        {/* COMPARISON GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPARISON_DATA.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              // Applying the specific background color class here
              className={`rounded-[2rem] p-8 border hover:shadow-xl transition-all duration-300 group ${item.bgClass}`}
            >
              
              {/* Card Header: Icon & Title */}
              <div className="flex items-center justify-between mb-8">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${item.iconBg}`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 text-right">
                  {item.feature}
                </h3>
              </div>

              {/* The "Bad" Option */}
              <div className="mb-6 relative pl-4 border-l-2 border-slate-300/50">
                <div className="flex items-center gap-2 mb-1 opacity-50">
                   <X className="w-4 h-4" />
                   <span className="text-[10px] font-bold uppercase tracking-widest">{item.risk.label}</span>
                </div>
                <div className="text-slate-500 font-medium line-through decoration-slate-400/50 decoration-2 text-sm">
                   {item.risk.desc}
                </div>
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-slate-200/60 mb-6"></div>

              {/* The "Good" Option */}
              <div className="relative pl-4 border-l-2 border-blue-500">
                <div className="flex items-center gap-2 mb-1 text-blue-700">
                   <div className="bg-blue-600 rounded-full p-0.5">
                     <Check className="w-3 h-3 text-white" />
                   </div>
                   <span className="text-[10px] font-bold uppercase tracking-widest">{item.solution.label}</span>
                </div>
                <div className="text-slate-900 font-bold text-lg leading-tight">
                   {item.solution.desc}
                </div>
                <div className="text-slate-500 text-xs mt-1">
                   {item.solution.sub}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-slate-900 border border-transparent rounded-full hover:bg-blue-600 hover:shadow-lg hover:-translate-y-1">
            Upgrade Your Standards
          </button>
        </div>

      </div>
    </section>
  );
};

export default ITADComparisonList;