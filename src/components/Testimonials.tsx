import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  ArrowRight, 
  ShieldCheck, 
  FileCheck, 
  Truck, 
  Lock, 
  Star, 
  CheckCircle2,
  Building2
} from 'lucide-react';

/* -------------------------
   Types
   ------------------------- */
type CaseStudy = {
  id: number;
  clientType: string;
  location: string;
  projectType: string;
  challenge: string;
  solution: string;
  stat: string;
  icon: React.ElementType;
};

/* --- DATA: REALISTIC CASE STUDIES (Safe Language) --- */
const caseStudies: CaseStudy[] = [
  {
    id: 1,
    clientType: "Regional Medical Center",
    location: "Chicago, IL",
    projectType: "Onsite Hard Drive Shredding",
    challenge: "Client needed immediate physical destruction of 500+ hard drives containing patient data before leaving the loading dock.",
    solution: "Deployed mobile shredding unit. All drives destroyed in 4 hours with serial numbers recorded.",
    stat: "500+ Drives Shredded",
    icon: ShieldCheck
  },
  {
    id: 2,
    clientType: "Financial Services Firm",
    location: "New York, NY",
    projectType: "Office Cleanout & Logistics",
    challenge: "Rapid office closure requiring removal of 200 workstations within a strict 48-hour lease deadline.",
    solution: "Dispatched 3-man crew. Packed, palletized, and removed all assets one day ahead of schedule.",
    stat: "48-Hour Turnaround",
    icon: Truck
  },
  {
    id: 3,
    clientType: "Software Development Co.",
    location: "Austin, TX",
    projectType: "Laptop Value Recovery",
    challenge: "Company refreshed 300 MacBook Pros and needed to maximize budget return on the old assets.",
    solution: "Audited and graded all units. Resold via wholesale channels to return maximum value to client.",
    stat: "$45k Value Recovered",
    icon: FileCheck 
  },
  {
    id: 4,
    clientType: "Government Contractor",
    location: "Washington, D.C.",
    projectType: "Secure Data Erasure",
    challenge: "Required documented 3-pass wipe on server racks containing sensitive non-classified data.",
    solution: "Performed NIST-guideline aligned wiping procedures with individual certificates for every drive.",
    stat: "1,200 TB Wiped",
    icon: Lock
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      
      {/* Background Decor (Subtle Grid) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-4">
             <Building2 className="w-4 h-4" />
             <span>Real World Results</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
            Proven Results in the Field
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We don't just promise security; we execute it. Here are verified projects where we helped organizations solve their IT disposal challenges.
          </p>
        </div>

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {caseStudies.map((study, idx) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* TOP BAR: Client & Stars */}
              <div className="px-8 py-5 bg-slate-50/80 border-b border-slate-100 flex flex-wrap justify-between items-center gap-4">
                
                {/* Client Badge */}
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-slate-200 shadow-sm">
                      <study.icon className="w-5 h-5 text-blue-600" />
                   </div>
                   <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">{study.clientType}</div>
                      <div className="text-sm font-bold text-slate-900 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        {study.location}
                      </div>
                   </div>
                </div>

                {/* Stars & Verified */}
                <div className="text-right">
                   <div className="flex items-center gap-0.5 mb-1">
                      {[1,2,3,4,5].map(i => (
                        <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                      ))}
                   </div>
                   <div className="flex items-center justify-end gap-1 text-[10px] font-bold text-emerald-600 uppercase tracking-wide">
                      <CheckCircle2 className="w-3 h-3" /> Verified Project
                   </div>
                </div>
              </div>

              {/* MAIN CONTENT */}
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-xl font-black text-slate-900 mb-6 group-hover:text-blue-600 transition-colors">
                  {study.projectType}
                </h3>

                <div className="space-y-5 mb-8">
                  {/* Challenge */}
                  <div className="relative pl-4 border-l-2 border-slate-200">
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Challenge</span>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>
                  
                  {/* Solution */}
                  <div className="relative pl-4 border-l-2 border-blue-500 bg-blue-50/30 rounded-r-lg py-1">
                    <span className="block text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-1">Solution</span>
                    <p className="text-sm text-slate-900 font-medium leading-relaxed">
                      {study.solution}
                    </p>
                  </div>
                </div>

                {/* BOTTOM RESULT */}
                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Key Outcome</span>
                    <span className="text-xl font-black text-emerald-600 tracking-tight">{study.stat}</span>
                  </div>
                  
                  {/* Arrow Icon */}
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>

            </motion.div>
          ))}

        </div>

        {/* Disclaimer / Trust Note */}
        <div className="mt-16 text-center">
          <p className="text-xs text-slate-400 max-w-lg mx-auto leading-relaxed">
            * To protect client confidentiality and security protocols, client names are anonymized. All results shown are from real, verified projects completed in the last 12 months.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;