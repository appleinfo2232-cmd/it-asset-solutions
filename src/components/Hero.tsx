import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  ShieldCheck,
  Recycle,
  Server,
  Truck,
  FileBarChart,
  Leaf,
  Laptop,
  Smartphone,
  Monitor,
  CheckCircle2,
  Star
} from 'lucide-react';
import { scrollToSection } from '../utils/navigation';

interface HeroProps {
  userRole?: 'cfo' | 'itdirector' | 'compliance' | string;
}

const Hero: React.FC<HeroProps> = ({ userRole }) => {
  const brandGradient = "bg-gradient-to-r from-[#0ea5e9] to-[#22c55e]";
  const textGradient = "bg-clip-text text-transparent bg-gradient-to-r from-[#0ea5e9] to-[#22c55e]";
  
  let headline = 'Secure, Compliant, and Profitable';
  let subline = 'Maximize value recovery and ensure data security with our EPA-compliant, NIST 800-88 aligned disposition process.';
  let ctaText = 'Get Free Assessment';

  if (userRole === 'cfo') {
    headline = 'Secure, Compliant, and Profitable';
    subline = 'Join 675+ enterprise clients who have recovered over $12.5M in residual value from retired IT assets.';
    ctaText = 'Calculate ROI';
  } else if (userRole === 'itdirector') {
    headline = 'Lifecycle Management, Simplified';
    subline = 'Streamline your hardware refresh cycles with secure logistics and automated reporting.';
    ctaText = 'Schedule Pickup';
  } else if (userRole === 'compliance') {
    headline = 'NIST 800-88 Secure Sanitization';
    subline = '100% compliance rate with defensible audit trails and serialized Certificates of Destruction.';
    ctaText = 'View Audit Sample';
  }

  return (
    <section 
      className="relative w-full overflow-hidden bg-slate-50 pt-12 lg:pt-20 pb-24 font-sans"
      aria-label="IT Asset Disposition Hero Section"
    >
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@700;800&family=Inter:wght@400;500;600;700&display=swap');
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
          @keyframes pulse-ring {
            0% { transform: scale(0.8); opacity: 0.5; }
            100% { transform: scale(1.2); opacity: 0; }
          }
          .animate-float { animation: float 6s ease-in-out infinite; }
          .animate-float-delayed-1 { animation: float 7s ease-in-out infinite; animation-delay: 1s; }
          .animate-float-delayed-2 { animation: float 8s ease-in-out infinite; animation-delay: 2s; }
          .animate-float-delayed-3 { animation: float 6.5s ease-in-out infinite; animation-delay: 3s; }
          .animate-pulse-slow { animation: pulse-ring 3s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        `}
      </style>

      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diagonal-pattern" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="20" stroke="currentColor" strokeWidth="1" className="text-slate-900" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal-pattern)" />
        </svg>
      </div>

      {/* Ambient Glows */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-[#0ea5e9]/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-[600px] h-[600px] bg-[#22c55e]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Content */}
          <div className="max-w-xl flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/20 shadow-[0_2px_8px_rgba(34,197,94,0.15)] transition-all hover:bg-[#22c55e]/20">
              <Star className="w-4 h-4 text-[#22c55e] fill-current" />
              <span className="text-xs sm:text-sm font-semibold text-emerald-800 tracking-wide font-['Inter']">
                Trusted Global ITAD Partner
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[4.2rem] font-extrabold leading-[1.1] tracking-tight mb-6 font-['Exo_2'] text-slate-900">
              {headline.split(',').slice(0, 2).join(',')}, <br />
              <span className={textGradient}>
                {headline.split(',').pop()}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-500 mb-8 sm:mb-10 leading-relaxed font-['Inter'] font-medium">
              {subline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto">
              <button
                onClick={() => scrollToSection('contact', '/')}
                className={`group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#0ea5e9]/20 transition-all hover:-translate-y-0.5 hover:shadow-xl ${brandGradient}`}
              >
                <span className="relative z-10 flex items-center gap-2 font-['Inter']">
                  {ctaText} <ArrowRight className="w-5 h-5" />
                </span>
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
              </button>
              
              <button
                 onClick={() => scrollToSection('services', '/')}
                 className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-8 py-4 text-base font-bold text-slate-700 hover:border-[#0ea5e9] hover:text-[#0ea5e9] transition-all font-['Inter']"
              >
                Our Process
              </button>
            </div>
            
            <div className="w-full">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-3 bg-white rounded-2xl p-2 pr-6 shadow-sm border border-slate-50 hover:-translate-y-1 transition-transform">
                  <div className="h-10 w-10 rounded-xl bg-[#0ea5e9]/10 flex items-center justify-center text-[#0ea5e9]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-bold text-[#0ea5e9] font-['Exo_2']">NIST 800-88</span>
                </div>
                <div className="flex items-center gap-3 bg-white rounded-2xl p-2 pr-6 shadow-sm border border-slate-50 hover:-translate-y-1 transition-transform">
                  <div className="h-10 w-10 rounded-xl bg-[#22c55e]/10 flex items-center justify-center text-[#22c55e]">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-bold text-[#22c55e] font-['Exo_2']">EPA Compliant</span>
                </div>
                <div className="flex items-center gap-3 bg-white rounded-2xl p-2 pr-6 shadow-sm border border-slate-50 hover:-translate-y-1 transition-transform">
                  <div className="h-10 w-10 rounded-xl bg-[#16c77d]/10 flex items-center justify-center text-[#16c77d]">
                    <Star className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-bold text-[#16c77d] font-['Exo_2']">675+ Clients</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Lifecycle */}
          
          {/* Mobile View: Vertical Stack */}
          <div className="lg:hidden w-full mt-8 flex flex-col gap-4">
             <div className="p-4 bg-white rounded-2xl shadow-md border border-slate-100 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-[#0ea5e9]/10 flex items-center justify-center text-[#0ea5e9]"><Truck className="w-6 h-6"/></div>
                <div><h3 className="font-bold text-slate-800">Logistics</h3><p className="text-xs text-slate-500 uppercase font-bold">Secure Chain</p></div>
             </div>
             <div className="p-4 bg-white rounded-2xl shadow-md border border-slate-100 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-[#16c77d]/10 flex items-center justify-center text-[#16c77d]"><ShieldCheck className="w-6 h-6"/></div>
                <div><h3 className="font-bold text-slate-800">Wipe</h3><p className="text-xs text-slate-500 uppercase font-bold">NIST 800-88</p></div>
             </div>
             <div className="p-4 bg-white rounded-2xl shadow-md border border-slate-100 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-[#0ea5e9]/10 flex items-center justify-center text-[#0ea5e9]"><FileBarChart className="w-6 h-6"/></div>
                <div><h3 className="font-bold text-slate-800">Report</h3><p className="text-xs text-slate-500 uppercase font-bold">Value Return</p></div>
             </div>
             <div className="p-4 bg-white rounded-2xl shadow-md border border-slate-100 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-[#22c55e]/10 flex items-center justify-center text-[#22c55e]"><Leaf className="w-6 h-6"/></div>
                <div><h3 className="font-bold text-slate-800">ESG Impact</h3><p className="text-xs text-slate-500 uppercase font-bold">Circular Economy</p></div>
             </div>
          </div>

          {/* Desktop View: Animated Circle */}
          <div className="hidden lg:flex relative justify-center items-center h-[500px] w-full -mr-12" role="img" aria-label="IT Asset Lifecycle Diagram">
            
            {/* Outer Ring */}
            <div className="absolute inset-0 flex items-center justify-center">
               <div className={`w-[420px] h-[420px] rounded-full p-[1.5px] ${brandGradient} opacity-60`}>
                  <div className="w-full h-full bg-slate-50 rounded-full" /> 
               </div>
            </div>
            
            {/* Inner Dashed Ring */}
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-[320px] h-[320px] rounded-full border border-dashed border-slate-200" />
            </div>
            
            {/* Core Hub */}
            <div className="relative z-10 flex flex-col items-center justify-center w-44 h-44 rounded-full bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-slate-50">
              <div className="absolute inset-0 rounded-full bg-[#0ea5e9]/5 animate-pulse-slow"></div>
              <Recycle className="w-12 h-12 text-[#0ea5e9] mb-3 relative z-10" strokeWidth={2} />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 font-['Inter'] relative z-10">
                Recovery
              </span>
            </div>

            {/* Satellite Icons */}
            <div className="absolute top-[6%] left-[14%] animate-float">
               <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.05)] border border-slate-50 text-[#0ea5e9]"><Laptop className="w-5 h-5" strokeWidth={1.5} /></div>
            </div>
            <div className="absolute top-[12%] right-[10%] animate-float-delayed-1">
               <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.05)] border border-slate-50 text-[#22c55e]"><Server className="w-5 h-5" strokeWidth={1.5} /></div>
            </div>
            <div className="absolute bottom-[10%] right-[12%] animate-float-delayed-2">
               <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.05)] border border-slate-50 text-[#16c77d]"><Monitor className="w-5 h-5" strokeWidth={1.5} /></div>
            </div>
            <div className="absolute bottom-[8%] left-[12%] animate-float-delayed-3">
               <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.05)] border border-slate-50 text-[#0ea5e9]"><Smartphone className="w-5 h-5" strokeWidth={1.5} /></div>
            </div>

            {/* Process Nodes */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 bg-white p-3 pr-6 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-slate-50 flex items-center gap-4 min-w-[170px] hover:scale-105 transition-transform cursor-default">
               <div className="h-10 w-10 bg-[#0ea5e9]/5 rounded-xl flex items-center justify-center text-[#0ea5e9] shrink-0"><Truck className="w-5 h-5" /></div>
               <div className="flex flex-col"><span className="text-sm font-bold text-slate-800 font-['Exo_2']">Logistics</span><span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider font-['Inter']">Secure Chain</span></div>
            </div>
            <div className="absolute top-1/2 right-0 translate-x-12 -translate-y-1/2 bg-white p-3 pr-6 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-slate-50 flex items-center gap-4 min-w-[170px] hover:scale-105 transition-transform cursor-default">
               <div className="h-10 w-10 bg-[#16c77d]/5 rounded-xl flex items-center justify-center text-[#16c77d] shrink-0"><ShieldCheck className="w-5 h-5" /></div>
               <div className="flex flex-col"><span className="text-sm font-bold text-slate-800 font-['Exo_2']">Wipe</span><span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider font-['Inter']">NIST 800-88</span></div>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-12 bg-white p-3 pr-6 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-slate-50 flex items-center gap-4 min-w-[170px] hover:scale-105 transition-transform cursor-default">
               <div className="h-10 w-10 bg-[#22c55e]/5 rounded-xl flex items-center justify-center text-[#22c55e] shrink-0"><Leaf className="w-5 h-5" /></div>
               <div className="flex flex-col">
                 <span className="text-sm font-bold text-slate-800 font-['Exo_2']">ESG Impact</span>
                 <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider font-['Inter']">Circular Economy</span>
               </div>
            </div>
            <div className="absolute top-1/2 left-0 -translate-x-12 -translate-y-1/2 bg-white p-3 pr-6 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-slate-50 flex items-center gap-4 min-w-[170px] hover:scale-105 transition-transform cursor-default">
               <div className="h-10 w-10 bg-[#0ea5e9]/5 rounded-xl flex items-center justify-center text-[#0ea5e9] shrink-0"><FileBarChart className="w-5 h-5" /></div>
               <div className="flex flex-col"><span className="text-sm font-bold text-slate-800 font-['Exo_2']">Report</span><span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider font-['Inter']">Value Return</span></div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;