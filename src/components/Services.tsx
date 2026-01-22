import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Truck, Recycle, 
  Activity, ArrowRight, TrendingUp, Mail, 
  Lock, FileBarChart,
  Database, RefreshCw, Globe
} from 'lucide-react';

// Components
import SecureProcess from '../components/SecureProcess';
import MidPageLeadCapture from '../components/MidPageLeadCapture';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

const ServicesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>ITAD Services & Data Destruction | IT Asset Solutions</title>
        <meta name="description" content="Enterprise IT Asset Disposition, Secure Data Destruction, and Value Recovery Services. Nationwide secure logistics and audit-ready reporting." />
        <link rel="canonical" href="https://www.itassetsolutions.com/services" />
      </Helmet>

      <main className="w-full overflow-x-hidden bg-white selection:bg-blue-500 selection:text-white">
        
        {/* --- 1. CINEMATIC HERO SECTION --- */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#020617]">
          
          {/* Background Image with Parallax Feel */}
          <div className="absolute inset-0 z-0">
             <img 
               src="https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=2070&auto=format&fit=crop" 
               alt="Secure Server Room" 
               className="w-full h-full object-cover opacity-20 scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#020617]/80 to-[#020617]"></div>
             {/* Tech Grid Overlay */}
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left: Typography */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-8 backdrop-blur-md">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  Nationwide Service
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
                  Protect Data. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                    Recover Value.
                  </span>
                </h1>
                
                <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-xl">
                  We provide a secure chain of custody for your retired IT assets. From logistics to final reporting, we handle the entire lifecycle with military-grade precision.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link 
                    to="/contact" 
                    className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-lg shadow-blue-900/40 hover:-translate-y-1"
                  >
                    Start Recovery
                  </Link>
                  <a 
                    href="#services-grid" 
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('services-grid')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold backdrop-blur-sm transition-all cursor-pointer"
                  >
                    View Services
                  </a>
                </div>
              </motion.div>

              {/* Right: Glass Card Visual */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hidden lg:block relative"
              >
                 <div className="relative z-10 bg-slate-900/60 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl transform rotate-[-3deg] hover:rotate-0 transition-transform duration-500">
                    <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="text-xs font-mono text-slate-500">SYS.STATUS: ONLINE</div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                         <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-400"><TrendingUp className="w-6 h-6"/></div>
                         <div>
                           <div className="text-white font-bold">Value Recovery</div>
                           <div className="text-slate-400 text-xs">$12.5M+ Returned to Clients</div>
                         </div>
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                         <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400"><ShieldCheck className="w-6 h-6"/></div>
                         <div>
                           <div className="text-white font-bold">Data Security</div>
                           <div className="text-slate-400 text-xs">100% Audit Success Rate</div>
                         </div>
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                         <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400"><Globe className="w-6 h-6"/></div>
                         <div>
                           <div className="text-white font-bold">Logistics</div>
                           <div className="text-slate-400 text-xs">50 States Covered</div>
                         </div>
                      </div>
                    </div>
                 </div>
                 {/* Decorative Glow behind card */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/20 blur-[100px] -z-10"></div>
              </motion.div>

            </div>
          </div>
        </section>


        {/* --- 2. PREMIUM SERVICE BENTO GRID --- */}
        <section id="services-grid" className="py-24 bg-slate-50 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-16">
              <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">Our Expertise</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-3 mb-6">
                Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">IT Solutions</span>
              </h2>
            </div>

            {/* BENTO GRID LAYOUT */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[350px]">
              
              {/* CARD 1: LARGE (Spans 2 cols) - BUYBACK */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="md:col-span-2 relative group overflow-hidden rounded-[2rem] shadow-lg cursor-pointer"
              >
                <Link to="/services/it-asset-value-recovery">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img 
                      src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop" 
                      alt="Laptop Technology" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 p-8 md:p-12">
                    <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mb-4 text-white shadow-lg shadow-blue-900/20">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">We Buy IT Equipment</h3>
                    <p className="text-slate-300 mb-6 max-w-lg">
                      Recover residual value from your retired assets. We provide competitive upfront cash offers for laptops, servers, and networking gear.
                    </p>
                    <div className="inline-flex items-center gap-2 text-white font-bold group-hover:text-blue-400 transition-colors">
                      Get an Offer <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* CARD 2: TALL - WHOLESALE */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="relative group overflow-hidden rounded-[2rem] shadow-lg bg-slate-900 cursor-pointer"
              >
                <Link to="/wholesale-it-equipment">
                   <div className="absolute inset-0">
                    <img 
                      src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop" 
                      alt="Wholesale Business" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 to-transparent"></div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 p-8">
                    <div className="w-12 h-12 bg-indigo-500 rounded-2xl flex items-center justify-center mb-4 text-white shadow-lg shadow-indigo-900/20">
                      <Mail className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Wholesale Inventory</h3>
                    <p className="text-slate-300 mb-6 text-sm">
                      Exclusive bulk hardware deals for registered buyers.
                    </p>
                    <div className="inline-flex items-center gap-2 text-white font-bold group-hover:text-indigo-400 transition-colors">
                      Join List <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* CARD 3: TALL - DATA DESTRUCTION */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="relative group overflow-hidden rounded-[2rem] shadow-lg bg-white border border-slate-200 cursor-pointer"
              >
                <Link to="/services/secure-data-destruction">
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Lock className="w-32 h-32 text-slate-900" />
                  </div>
                  
                  <div className="absolute bottom-0 left-0 p-8">
                    <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center mb-4 text-white shadow-xl">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Data Destruction</h3>
                    <p className="text-slate-600 mb-6 text-sm">
                      NIST 800-88 aligned wiping and physical shredding with full audit trails.
                    </p>
                    <div className="inline-flex items-center gap-2 text-slate-900 font-bold group-hover:text-blue-600 transition-colors">
                      View Standards <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* CARD 4: LARGE (Spans 2 cols) - RECYCLING */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="md:col-span-2 relative group overflow-hidden rounded-[2rem] shadow-lg cursor-pointer"
              >
                <Link to="/services/enterprise-itad">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img 
                      src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop" 
                      alt="Sustainable Recycling" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 via-emerald-900/40 to-transparent"></div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 p-8 md:p-12">
                    <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center mb-4 text-white shadow-lg shadow-emerald-900/20">
                      <Recycle className="w-6 h-6" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">Zero-Landfill Recycling</h3>
                    <p className="text-slate-200 mb-6 max-w-lg">
                      Environmentally responsible disposal. We adhere to EPA regulations to ensure all electronic waste is processed safely downstream.
                    </p>
                    <div className="inline-flex items-center gap-2 text-white font-bold group-hover:text-emerald-400 transition-colors">
                      Our Commitment <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>

            </div>
          </div>
        </section>

        {/* --- 3. SECONDARY SERVICES --- */}
        <section className="py-20 bg-white border-t border-slate-100">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                
                {/* Logistics */}
                <div className="flex gap-6 p-6 rounded-2xl hover:bg-slate-50 transition-colors group cursor-pointer border border-transparent hover:border-slate-100">
                   <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 shrink-0 group-hover:scale-110 transition-transform">
                      <Truck className="w-7 h-7" />
                   </div>
                   <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Secure Logistics</h3>
                      <p className="text-slate-600 mb-3 leading-relaxed">
                        Nationwide fleet management, GPS tracking, and secure chain-of-custody transfer from your door to ours.
                      </p>
                      <Link to="/services/secure-chain-of-custody-logistics" className="text-sm font-bold text-indigo-600 hover:underline inline-flex items-center gap-1">
                        Learn more <ArrowRight className="w-3 h-3" />
                      </Link>
                   </div>
                </div>

                {/* Reporting */}
                <div className="flex gap-6 p-6 rounded-2xl hover:bg-slate-50 transition-colors group cursor-pointer border border-transparent hover:border-slate-100">
                   <div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-600 shrink-0 group-hover:scale-110 transition-transform">
                      <FileBarChart className="w-7 h-7" />
                   </div>
                   <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Regulatory Reporting</h3>
                      <p className="text-slate-600 mb-3 leading-relaxed">
                        Receive serialized Certificates of Destruction (COD) and detailed ESG impact reports for every project.
                      </p>
                      <Link to="/services/auditing-compliance-reporting" className="text-sm font-bold text-sky-600 hover:underline inline-flex items-center gap-1">
                        Learn more <ArrowRight className="w-3 h-3" />
                      </Link>
                   </div>
                </div>

             </div>
           </div>
        </section>

        {/* --- 4. CIRCULAR ECONOMY (Dark Breaker) --- */}
        <section className="py-24 bg-[#0F172A] relative overflow-hidden">
           {/* Background Mesh */}
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
           <div className="absolute -right-20 top-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]"></div>

           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
             <div className="grid lg:grid-cols-2 gap-16 items-center">
               
               {/* Left: Text Content */}
               <motion.div
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
               >
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/30 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6">
                    <Recycle className="w-4 h-4" /> 
                    Sustainable Future
                 </div>
                 <h2 className="text-4xl font-bold text-white mb-6">The Circular Lifecycle</h2>
                 <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                   We view IT disposal not as an end, but as a new beginning. By prioritizing reuse over recycling, we help companies reduce their carbon footprint while recovering residual value.
                 </p>
                 
                 <div className="space-y-6">
                   {[
                     { title: "Audit & Assess", desc: "Identify high-value units for refurbishment.", icon: Activity },
                     { title: "Sanitize & Refurbish", desc: "Data wiped (NIST 800-88) & repaired.", icon: RefreshCw },
                     { title: "Material Recovery", desc: "End-of-life units shredded for raw materials.", icon: Database },
                   ].map((step, idx) => (
                      <div key={idx} className="flex gap-4 group">
                        <div className="w-12 h-12 bg-slate-800 rounded-xl border border-slate-700 flex items-center justify-center flex-shrink-0 text-emerald-400 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 transition-colors">
                          <step.icon className="w-6 h-6" />
                        </div>
                        <div>
                           <h4 className="font-bold text-lg text-white">{step.title}</h4>
                           <p className="text-slate-400 text-sm mt-1">{step.desc}</p>
                        </div>
                      </div>
                   ))}
                 </div>
               </motion.div>
               
               {/* Right: Modern Diagram Visualization */}
               <motion.div 
                 className="relative h-[450px] bg-slate-800/30 rounded-3xl border border-slate-700 flex items-center justify-center p-8 backdrop-blur-sm"
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8, delay: 0.2 }}
               >
                  {/* Animated Dashed Ring */}
                  <div className="absolute inset-8 rounded-full border-2 border-dashed border-slate-700 animate-[spin_30s_linear_infinite]"></div>
                  
                  {/* Central Node */}
                  <div className="relative z-10 text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_40px_rgba(16,185,129,0.3)] animate-pulse">
                       <Recycle className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white tracking-tight">Zero<br/>Landfill</div>
                  </div>

                  {/* Floating Labels */}
                  <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-slate-900 border border-slate-700 px-4 py-2 rounded-lg text-xs font-bold text-slate-300 shadow-xl">
                    Reuse First
                  </div>
                  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-slate-900 border border-slate-700 px-4 py-2 rounded-lg text-xs font-bold text-slate-300 shadow-xl">
                    Recycle Last
                  </div>
               </motion.div>

             </div>
           </div>
        </section>

        <SecureProcess />
        <MidPageLeadCapture />
        <FAQ />
        <Contact />
      </main>
    </>
  );
};

export default ServicesPage;