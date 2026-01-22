import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Leaf, FileCheck, Award, Lock, CheckCircle2 } from 'lucide-react';

const CertificationsCompliance: React.FC = () => {
  const certs = [
    {
      title: "NIST 800-88 & DoD",
      desc: "The gold standard for data sanitation. We adhere to Department of Defense guidelines for total data erasure.",
      icon: Lock,
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-100"
    },
    {
      title: "Environmental Responsibility",
      desc: "Zero-landfill policy. All e-waste is recycled downstream via R2v3 certified partners to ensure environmental safety.",
      icon: Leaf,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-100"
    },
    {
      title: "HIPAA / HITECH",
      desc: "Strict chain-of-custody protocols designed for healthcare providers protecting sensitive patient data (PHI).",
      icon: Shield,
      color: "text-rose-600",
      bg: "bg-rose-50",
      border: "border-rose-100"
    },
    {
      title: "SOX & GLBA",
      desc: "Full auditable reporting for financial institutions requiring Sarbanes-Oxley and Gramm-Leach-Bliley compliance.",
      icon: FileCheck,
      color: "text-purple-600",
      bg: "bg-purple-50",
      border: "border-purple-100"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: Image & Audit Visuals */}
          <motion.div 
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-50 h-[650px] group bg-slate-100">
              
              {/* IMAGE: Compliance / Auditing Context */}
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" 
                alt="ITAD Compliance Auditing" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>

              {/* Floating Badge: Audit Success */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Award className="w-5 h-5 text-amber-500" />
                      <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Audit Record</span>
                    </div>
                    <div className="text-2xl font-black text-slate-900">100% Success</div>
                    <div className="text-sm text-slate-500">Zero data breaches. Zero fines.</div>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                     <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute -z-10 top-[-20px] left-[-20px] w-full h-full border-2 border-slate-100 rounded-3xl"></div>
            <div className="absolute -z-10 bottom-1/4 left-[-60px] w-64 h-64 bg-emerald-50 rounded-full blur-3xl"></div>
          </motion.div>

          {/* RIGHT: Content & Cards */}
          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-xs font-bold uppercase tracking-wider mb-6">
              <Shield className="w-4 h-4" />
              <span>Regulatory Adherence</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
              Exceeding Industry <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Compliance Standards</span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-10">
              Your data security is non-negotiable. We operate under the strictest regulatory frameworks to ensure your organization is audit-ready and legally protected.
            </p>

            {/* Certification Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {certs.map((cert, idx) => (
                <div 
                  key={idx} 
                  className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 group"
                >
                  <div className={`w-12 h-12 rounded-xl ${cert.bg} ${cert.border} border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <cert.icon className={`w-6 h-6 ${cert.color}`} />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{cert.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {cert.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-slate-100">
               <p className="text-sm font-medium text-slate-400 text-center italic">
                 "We provide full Certificates of Destruction (COD) and Transfer of Liability for every asset."
               </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CertificationsCompliance;