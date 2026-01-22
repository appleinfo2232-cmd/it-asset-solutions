import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { 
  ShieldCheck, Truck, Recycle, 
  ArrowRight, Globe, TrendingUp, 
  Mail, Lock, FileBarChart, 
  CheckCircle2, Clock, FileCheck, 
  Scale, Building2, Stethoscope, 
  Landmark, GraduationCap, HardDrive, 
  Server, Leaf, XCircle, Database
} from 'lucide-react';

// Imported Components
import Contact from '../components/Contact';
import FAQ from '../components/FAQ';

const ServicesPage: React.FC = () => {
  useEffect(() => {
    // 2026 SPEED: Use requestIdleCallback for non-critical scroll logic
    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(() => window.scrollTo(0, 0));
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // --- DATA CONFIGURATION ---

  const services = [
    {
      id: 'itad',
      icon: Recycle,
      title: 'Enterprise ITAD',
      subtitle: 'Zero-Landfill Policy',
      description: 'Responsible recycling for end-of-life assets. We strictly adhere to EPA guidelines and R2v3 aligned workflows.',
      link: '/services/enterprise-itad',
      color: 'text-emerald-600',
      gradient: 'from-emerald-500/10 to-teal-400/10',
      borderColor: 'hover:border-emerald-400'
    },
    {
      id: 'recovery',
      icon: TrendingUp,
      title: 'Asset Value Recovery',
      subtitle: 'Corporate IT Buyback',
      description: 'Turn retired assets into working capital. We provide upfront offers for Servers, Laptops, and Data Center gear.',
      link: '/services/it-asset-value-recovery',
      color: 'text-blue-600',
      gradient: 'from-blue-500/10 to-cyan-400/10',
      borderColor: 'hover:border-blue-400'
    },
    {
      id: 'logistics',
      icon: Truck,
      title: 'Secure Logistics',
      subtitle: 'Chain of Custody',
      description: 'White-glove pickup and GPS-tracked transport from any zip code in the USA to our secure processing hub.',
      link: '/services/secure-chain-of-custody-logistics',
      color: 'text-indigo-600',
      gradient: 'from-indigo-500/10 to-violet-400/10',
      borderColor: 'hover:border-indigo-400'
    },
    {
      id: 'data',
      icon: Lock,
      title: 'Data Destruction',
      subtitle: 'NIST 800-88 Aligned',
      description: 'Secure data wiping and physical shredding. We ensure data unrecoverability on all storage media types.',
      link: '/services/secure-data-destruction',
      color: 'text-rose-600',
      gradient: 'from-rose-500/10 to-pink-400/10',
      borderColor: 'hover:border-rose-400'
    },
    {
      id: 'compliance',
      icon: FileBarChart,
      title: 'Compliance Reporting',
      subtitle: 'Audit-Ready Docs',
      description: 'Serialized inventory lists and Certificates of Destruction (COD) provided for every job to satisfy internal audits.',
      link: '/services/auditing-compliance-reporting',
      color: 'text-sky-600',
      gradient: 'from-sky-500/10 to-blue-400/10',
      borderColor: 'hover:border-sky-400'
    },
    {
      id: 'wholesale',
      icon: Mail,
      title: 'Wholesale Sales',
      subtitle: 'Exclusive Inventory',
      description: 'We sell bulk enterprise hardware exclusively through our private email list to registered wholesale buyers.',
      link: '/wholesale-it-equipment',
      color: 'text-amber-600',
      gradient: 'from-amber-500/10 to-orange-400/10',
      borderColor: 'hover:border-amber-400'
    },
  ];

  const steps = [
    { num: "01", title: "Secure Pickup", desc: "GPS-tracked fleet collects your assets directly from your loading dock." },
    { num: "02", title: "Audit & Sort", desc: "Items are weighed, tagged, and assessed for resale vs. recycling." },
    { num: "03", title: "Data Wipe", desc: "NIST 800-88 sanitization removes all data permanently." },
    { num: "04", title: "Report", desc: "You receive a Certificate of Destruction and Settlement Report." }
  ];

  const industries = [
    { icon: Stethoscope, name: "Healthcare", desc: "HIPAA-aligned disposal for hospitals." },
    { icon: Landmark, name: "Finance", desc: "Secure destruction for banking firms." },
    { icon: Building2, name: "Enterprise", desc: "Scalable ITAD for Fortune 500s." },
    { icon: GraduationCap, name: "Education", desc: "Volume processing for Universities." },
  ];

  // --- RENDER ---
  return (
    <>
      <Helmet>
        <title>ITAD Services & Data Destruction | IT Asset Solutions</title>
        <meta name="description" content="Explore our full suite of IT Asset Disposition services: Enterprise ITAD, Asset Value Recovery, Secure Data Destruction, and Logistics." />
        <link rel="canonical" href="https://www.itassetsolutions.com/services" />
      </Helmet>

      <main className="w-full overflow-x-hidden bg-[#050B14]">
        
        {/* --- 1. HERO SECTION --- */}
        <section className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden pt-32 lg:pt-0">
          
          {/* Hero Background */}
          <div className="absolute inset-0 bg-[#020617]">
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.15]"></div>
             <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-20%,#1e1b4b,transparent)]"></div>
             <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#020617] to-transparent"></div>
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center w-full">
              
              {/* Hero Text */}
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 backdrop-blur-md text-blue-400 text-xs font-bold uppercase tracking-wider mb-8 shadow-lg shadow-blue-900/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  Nationwide IT Logistics
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-bold leading-[1.1] mb-6 tracking-tight text-white font-sans">
                  Secure ITAD for the <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                    Modern Enterprise
                  </span>
                </h1>
                
                <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-xl border-l-4 border-blue-500 pl-6">
                  Protect your data, maximize asset value, and meet ESG goals with a single, secure logistics partner.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <Link 
                    to="/contact" 
                    className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-all shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:shadow-[0_0_60px_rgba(37,99,235,0.6)] hover:-translate-y-1 overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">Start Recovery <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"/></span>
                    <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>
                  </Link>
                  <a 
                    href="#core-services" 
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('core-services')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-300 border border-slate-700 bg-slate-900/50 backdrop-blur-sm rounded-xl hover:bg-slate-800 hover:text-white transition-all hover:border-blue-500/50 cursor-pointer"
                  >
                    View Services
                  </a>
                </div>

                {/* Trust Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-800/60">
                    <div>
                        <div className="text-2xl font-bold text-white">500k+</div>
                        <div className="text-xs text-slate-500 uppercase tracking-wide">Assets Processed</div>
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-white">100%</div>
                        <div className="text-xs text-slate-500 uppercase tracking-wide">Data Security</div>
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-white">50</div>
                        <div className="text-xs text-slate-500 uppercase tracking-wide">States Covered</div>
                    </div>
                </div>
              </motion.div>

              {/* Hero Visual Animation */}
              <div className="relative h-[600px] w-full hidden lg:flex items-center justify-center perspective-[1000px]">
                
                {/* Orbit Rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[500px] h-[500px] border border-blue-500/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
                    <div className="absolute w-[400px] h-[400px] border border-dashed border-indigo-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                </div>

                {/* Central Shield */}
                <div className="relative z-20 w-44 h-44 bg-slate-900 rounded-2xl border border-blue-500/50 flex items-center justify-center shadow-[0_0_80px_rgba(59,130,246,0.4)] backdrop-blur-xl overflow-hidden">
                   <div className="relative z-10 flex flex-col items-center">
                      <ShieldCheck className="w-16 h-16 text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.8)]" strokeWidth={1.5} />
                      <span className="text-[10px] font-bold text-white uppercase tracking-widest mt-2">Secure Core</span>
                   </div>
                   <div className="absolute inset-0 w-full h-1 bg-blue-400/50 blur-sm animate-[scan_3s_ease-in-out_infinite] top-0 shadow-[0_0_15px_rgba(59,130,246,1)]"></div>
                   <div className="absolute inset-0 bg-blue-500/10 rounded-2xl"></div>
                </div>

                {/* Floating Elements */}
                <motion.div animate={{ y: [-20, 20, -20] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-20 right-10 z-30">
                   <div className="bg-slate-800/90 backdrop-blur-md p-3 pr-6 rounded-xl border border-slate-700 shadow-2xl flex items-center gap-3">
                      <div className="p-2 bg-indigo-500/20 rounded-lg"><Server className="w-5 h-5 text-indigo-400" /></div>
                      <div>
                         <div className="text-xs font-bold text-white">Data Center</div>
                         <div className="text-[10px] text-green-400">● Decommissioning</div>
                      </div>
                   </div>
                </motion.div>

                <motion.div animate={{ x: [-15, 15, -15] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-32 left-0 z-30">
                   <div className="bg-slate-800/90 backdrop-blur-md p-3 pr-6 rounded-xl border border-slate-700 shadow-2xl flex items-center gap-3">
                      <div className="p-2 bg-rose-500/20 rounded-lg"><HardDrive className="w-5 h-5 text-rose-400" /></div>
                      <div>
                         <div className="text-xs font-bold text-white">Drive Shred</div>
                         <div className="text-[10px] text-slate-400">NIST 800-88</div>
                      </div>
                   </div>
                </motion.div>

                <motion.div animate={{ y: [15, -15, 15] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute top-10 left-20 z-10">
                   <div className="bg-slate-800/90 backdrop-blur-md p-3 pr-6 rounded-xl border border-slate-700 shadow-2xl flex items-center gap-3">
                      <div className="p-2 bg-emerald-500/20 rounded-lg"><Leaf className="w-5 h-5 text-emerald-400" /></div>
                      <div>
                         <div className="text-xs font-bold text-white">Sustainability</div>
                         <div className="text-[10px] text-emerald-400">● Carbon Credits</div>
                      </div>
                   </div>
                </motion.div>
              </div>
            </div>
          </div>
          
          <style>{`
            @keyframes scan {
              0%, 100% { top: 0%; opacity: 0; }
              10% { opacity: 1; }
              90% { opacity: 1; }
              100% { top: 100%; opacity: 0; }
            }
          `}</style>
        </section>

        {/* --- 2. CORE SERVICES GRID --- */}
        <section id="core-services" className="py-24 bg-slate-50 relative overflow-hidden z-20 scroll-mt-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 mb-6 font-sans">
                <Globe className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                  Complete Lifecycle Solutions
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-sans">
                Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">Services</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group relative flex flex-col h-full bg-white border border-slate-200 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl ${service.borderColor} hover:-translate-y-1`}
                >
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                  <div className={`relative w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-slate-50 group-hover:bg-white group-hover:shadow-sm transition-all ${service.color}`}>
                    <service.icon className="w-7 h-7" />
                  </div>

                  <div className="relative flex-grow">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 font-sans">
                      {service.title}
                    </h3>
                    <p className={`text-xs font-bold uppercase tracking-wider mb-4 ${service.color} font-sans`}>
                      {service.subtitle}
                    </p>
                    
                    <p className="text-slate-600 mb-8 leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>

                  <div className="relative mt-auto">
                    <Link 
                      to={service.link}
                      className={`inline-flex items-center font-bold text-sm ${service.color} hover:opacity-80 transition-opacity font-sans`}
                    >
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 3. THE SECURITY STANDARD --- */}
        <section className="py-24 bg-[#0B1221] border-t border-slate-800">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">The Security Standard</h2>
                  <p className="text-slate-400 mb-8">We don't just delete files; we eliminate risk. Our data sanitization methods align strictly with NIST 800-88 guidelines.</p>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                       <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center shrink-0">
                          <Database className="w-6 h-6 text-blue-400" />
                       </div>
                       <div>
                          <h4 className="text-lg font-bold text-white">Cryptographic Erasure</h4>
                          <p className="text-sm text-slate-400">Software-based wiping that overwrites data across all sectors.</p>
                       </div>
                    </div>
                    <div className="flex gap-4">
                       <div className="w-12 h-12 bg-rose-500/10 rounded-lg flex items-center justify-center shrink-0">
                          <HardDrive className="w-6 h-6 text-rose-400" />
                       </div>
                       <div>
                          <h4 className="text-lg font-bold text-white">Physical Destruction</h4>
                          <p className="text-sm text-slate-400">Hard drive shredding for absolute peace of mind.</p>
                       </div>
                    </div>
                  </div>
                </div>
                <div className="relative h-80 bg-slate-800/50 rounded-2xl border border-slate-700 flex items-center justify-center overflow-hidden">
                   <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:20px_20px] opacity-[0.2]"></div>
                   <div className="text-center z-10">
                      <div className="text-5xl font-bold text-white mb-2">NIST</div>
                      <div className="text-xl text-blue-400 tracking-[0.3em]">800-88</div>
                   </div>
                </div>
             </div>
           </div>
        </section>

        {/* --- 4. INDUSTRIES WE SERVE --- */}
        <section className="py-20 bg-white border-y border-slate-100">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-12 font-sans">Specialized Solutions by Industry</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {industries.map((ind, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all group">
                    <div className="w-12 h-12 mx-auto bg-white rounded-full flex items-center justify-center mb-4 text-slate-600 group-hover:text-blue-600 shadow-sm">
                      <ind.icon className="w-6 h-6"/>
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">{ind.name}</h3>
                    <p className="text-xs text-slate-500">{ind.desc}</p>
                  </div>
                ))}
              </div>
           </div>
        </section>

        {/* --- 5. THE PROFESSIONAL DIFFERENCE (TABLE) --- */}
        <section className="py-24 bg-slate-50">
           <div className="max-w-4xl mx-auto px-4">
              <div className="text-center mb-12">
                 <h2 className="text-3xl font-bold text-slate-900">The Professional Difference</h2>
                 <p className="text-slate-600 mt-2">Why enterprises choose IT Asset Solutions over local recyclers.</p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200 overflow-x-auto">
                 <div className="min-w-[600px] grid grid-cols-3 bg-[#1e293b] text-white p-4 font-bold text-sm uppercase tracking-wider">
                    <div></div>
                    <div className="text-center text-blue-400">IT Asset Solutions</div>
                    <div className="text-center text-slate-400">Local Recycler</div>
                 </div>
                 
                 <div className="min-w-[600px]">
                   {[
                     { feature: "Data Liability Insurance", us: true, them: false },
                     { feature: "NIST 800-88 Wiping", us: true, them: false },
                     { feature: "Serialized Reporting", us: true, them: false },
                     { feature: "Nationwide Logistics", us: true, them: false },
                     { feature: "Asset Value Payment", us: true, them: "Scrap Only" },
                   ].map((row, i) => (
                      <div key={i} className="grid grid-cols-3 p-4 border-b border-slate-100 last:border-0 hover:bg-slate-50 items-center">
                         <div className="font-bold text-slate-700 text-sm md:text-base">{row.feature}</div>
                         <div className="flex justify-center">
                            {row.us === true ? <CheckCircle2 className="w-6 h-6 text-emerald-500" /> : <span>{row.us}</span>}
                         </div>
                         <div className="flex justify-center text-slate-400">
                            {row.them === false ? <XCircle className="w-6 h-6 text-slate-300" /> : <span className="text-sm font-medium">{row.them}</span>}
                         </div>
                      </div>
                   ))}
                 </div>
              </div>
           </div>
        </section>

        {/* --- 6. TRANSPARENT PROCESS --- */}
        <section className="py-24 bg-white">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                 <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-sans">A Transparent Process</h2>
                 <p className="text-slate-600 max-w-2xl mx-auto mb-8">Complete visibility from pickup to report. You always know where your assets are.</p>
                 
                 {/* Visual Diagram Trigger */}
                 
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                 {steps.map((step, idx) => (
                    <div key={idx} className="relative p-6 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                       <div className="text-5xl font-bold text-slate-200 mb-4 font-sans absolute top-4 right-4">{step.num}</div>
                       <div className="relative z-10">
                          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 text-blue-600 border border-slate-100 shadow-sm">
                             {idx === 0 ? <Truck className="w-6 h-6"/> : idx === 1 ? <Scale className="w-6 h-6"/> : idx === 2 ? <ShieldCheck className="w-6 h-6"/> : <FileCheck className="w-6 h-6"/>}
                          </div>
                          <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                          <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* --- 7. FOUNDATION OF TRUST --- */}
        <section className="py-24 bg-slate-50 border-t border-slate-200">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                 <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-6">
                       <ShieldCheck className="w-4 h-4" /> Foundation of Trust
                    </div>
                    <h2 className="text-4xl font-bold text-slate-900 mb-6 font-sans">Risk Mitigation First</h2>
                    <p className="text-lg text-slate-600 mb-8">We built our entire operation around protecting your liability. Every asset is tracked, every byte is destroyed.</p>
                    
                    <ul className="space-y-4">
                       <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                          <div>
                             <span className="font-bold text-slate-900">100% Data Destruction Guarantee</span>
                             <p className="text-sm text-slate-500">Zero data leaks. Guaranteed.</p>
                          </div>
                       </li>
                       <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                          <div>
                             <span className="font-bold text-slate-900">Zero-Landfill Commitment</span>
                             <p className="text-sm text-slate-500">Every ounce of e-waste is recycled or reused.</p>
                          </div>
                       </li>
                    </ul>
                 </div>
                 <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-emerald-400 rounded-3xl rotate-3 opacity-20"></div>
                    <div className="relative bg-[#050B14] rounded-3xl p-8 md:p-12 text-white overflow-hidden shadow-2xl">
                       <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                       <h3 className="text-2xl font-bold mb-2">Audit-Ready Reporting</h3>
                       <p className="text-slate-400 mb-8">We provide the documentation your compliance team needs.</p>
                       <div className="space-y-3">
                          <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                             <FileCheck className="w-5 h-5 text-emerald-400" /> <span className="font-mono text-sm text-slate-300">Certificate_of_Destruction.pdf</span>
                          </div>
                          <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                             <FileBarChart className="w-5 h-5 text-blue-400" /> <span className="font-mono text-sm text-slate-300">Asset_Settlement_Report.xlsx</span>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* --- 8. FAQ SECTION --- */}
        <FAQ />

        {/* --- 9. LIMITED TIME OFFER --- */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
           <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-blue-100 text-xs font-bold uppercase tracking-wider mb-6">
                 <Clock className="w-4 h-4" /> Limited Time Offer
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 font-sans">Free Logistics for New Enterprise Clients</h2>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                 Have more than 50 assets? Schedule your first pickup this month, and we'll waive 100% of the logistics fees.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <Link to="/contact" className="px-8 py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg">
                    Claim Free Pickup
                 </Link>
              </div>
              <p className="text-xs text-blue-200 mt-6">*Valid for new corporate accounts in the continental US with 50+ qualifying assets.</p>
           </div>
        </section>

        <Contact />
      </main>
    </>
  );
};

export default ServicesPage;