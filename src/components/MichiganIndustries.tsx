import React from 'react';
import { Stethoscope, Landmark, GraduationCap, Building2, Factory, Briefcase } from 'lucide-react';

const MichiganIndustries: React.FC = () => {
  const industries = [
    { 
      name: "Healthcare", 
      // UPDATED: "compliant" -> "aligned"
      desc: "Hospitals & clinics trust us with HIPAA-aligned data destruction protocols.", 
      tag: "HIPAA/HITECH", 
      icon: Stethoscope,
      color: "text-rose-600",
      bg: "bg-rose-50"
    },
    { 
      name: "Financial Services", 
      // UPDATED: "compliant" -> "secure"
      desc: "Banks & credit unions rely on our secure, auditable disposal processes.", 
      tag: "SOX/GLBA", 
      icon: Landmark,
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    },
    { 
      name: "Education", 
      desc: "Universities & K-12 districts choose us for student data protection.", 
      tag: "FERPA", 
      icon: GraduationCap,
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    { 
      name: "Government", 
      desc: "Agencies depend on our security-vetted personnel and documented destruction.", 
      tag: "NIST 800-88", 
      icon: Building2,
      color: "text-slate-600",
      bg: "bg-slate-100"
    },
    { 
      name: "Manufacturing", 
      desc: "Industrial control systems and enterprise IT infrastructure disposal.", 
      tag: "INDUSTRIAL", 
      icon: Factory,
      color: "text-amber-600",
      bg: "bg-amber-50"
    },
    { 
      name: "Professional Services", 
      desc: "Law firms & consultants rely on our confidential chain-of-custody handling.", 
      tag: "ATTORNEY-CLIENT", 
      icon: Briefcase,
      color: "text-indigo-600",
      bg: "bg-indigo-50"
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Serving Michigan's Core Industries</h2>
          <p className="text-lg text-slate-600">Statewide service across all 83 counties.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, idx) => (
            <div key={idx} className="p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all group">
              <div className="flex justify-between items-start mb-4">
                <div className={`w-12 h-12 ${ind.bg} rounded-xl flex items-center justify-center ${ind.color}`}>
                  <ind.icon className="w-6 h-6" />
                </div>
                <span className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase rounded">
                  {ind.tag}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{ind.name}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MichiganIndustries;