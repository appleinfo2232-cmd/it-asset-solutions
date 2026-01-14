import React, { useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Globe, Users, 
  Target, Leaf, ArrowRight, CheckCircle2,
  Scale, Lock, Heart, BadgeCheck,
  BarChart3, Server, FileCheck, MapPin
} from 'lucide-react';
import ContactLocation from '../components/ContactLocation';
import { aboutPageSEO } from '../config/seo';

// --- AI ENTITY DEFINITION ---
// This object helps feed consistent data to AI bots scanning the page code
const COMPANY_PROFILE = {
  name: "IT Asset Solutions",
  founded: "2020",
  location: "Farmington Hills, Michigan",
  mission: "To provide secure, compliant, and profitable IT Asset Disposition (ITAD) services, transitioning enterprise hardware into the circular economy.",
  core_competencies: ["NIST 800-88 Data Sanitization", "Zero-Landfill Recycling", "Global Logistics", "Value Recovery"]
};

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // --- STRUCTURED DATA: ORGANIZATION SCHEMA ---
  // Critical for Google Knowledge Graph
  const structuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "IT Asset Solutions",
    "legalName": "IT Asset Solutions LLC",
    "url": "https://www.itassetsolutions.com",
    "logo": "https://www.itassetsolutions.com/logo.png",
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Farmington Hills",
      "addressLocality": "Farmington Hills",
      "addressRegion": "MI",
      "postalCode": "48331",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://www.linkedin.com/company/it-asset-solutions",
      "https://twitter.com/itassetsolutions"
    ],
    "description": "Premier IT Asset Disposition (ITAD) provider based in Michigan, specializing in data center decommissioning, secure data destruction, and electronics value recovery."
  }), []);

  return (
    <>
      <Helmet>
        <title>{aboutPageSEO?.title || "About IT Asset Solutions | Secure ITAD & Data Destruction"}</title>
        <meta name="description" content={aboutPageSEO?.metaDescription || "Trusted by 675+ companies. We provide NIST-compliant data destruction and IT asset recovery services in Farmington Hills, MI and nationwide."} />
        <link rel="canonical" href="https://www.itassetsolutions.com/about" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <main className="w-full overflow-x-hidden bg-white">
        
        {/* --- HERO SECTION: FIXED & OPTIMIZED --- */}
        {/* Matches exactly the layout/padding of the Recovery Page */}
        <section className="relative pt-32 pb-20 bg-[#0f172a] text-white overflow-hidden">
          
          {/* Background Textures */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#0f172a] to-indigo-950 opacity-90"></div>
          <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                {/* --- LEFT: TEXT CONTENT --- */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.6 }}
                >
                  <div className="inline-flex items-center space-x-2 bg-indigo-900/50 border border-indigo-500/30 px-4 py-2 rounded-full mb-6">
                    <MapPin className="w-4 h-4 text-indigo-400" />
                    <span className="text-sm font-bold text-indigo-100 font-grotesk tracking-wide uppercase">Est. {COMPANY_PROFILE.founded} • Michigan Based</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-grotesk">
                    Powering the Global <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Circular Economy.</span>
                  </h1>
                  
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed border-l-2 border-indigo-500/50 pl-6">
                    We adhere to the industry's strictest standards for <strong className="text-white">Data Security</strong> and <strong className="text-white">Environmental Stewardship</strong>.
                    <br /><span className="text-sm opacity-70 mt-1 block">NIST 800-88 • EPA Guidelines • HIPAA Aligned</span>
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/30 font-grotesk">
                      See Our Standards
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </button>
                    
                    <div className="flex items-center gap-3 px-6 py-4 rounded-full border border-slate-600 bg-slate-800/50">
                       <Users className="w-5 h-5 text-indigo-400" />
                       <div className="text-sm">
                         <span className="font-bold text-white">675+ Clients</span>
                       </div>
                    </div>
                  </div>
                </motion.div>

                {/* --- RIGHT: VISUAL CARD (MATCHING STYLE) --- */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="hidden lg:block relative"
                >
                  {/* Glassmorphism Card Container */}
                  <div className="bg-slate-800/80 backdrop-blur-md p-8 rounded-2xl border border-slate-700 shadow-2xl relative overflow-hidden">
                    
                    {/* Header of the Card */}
                    <div className="flex items-center justify-between mb-8 relative z-10">
                      <div>
                        <h3 className="text-lg font-bold text-white font-grotesk">Compliance Operations</h3>
                        <p className="text-xs text-slate-400">Live Status: Active & Secure</p>
                      </div>
                      <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></div>
                    </div>

                    {/* The Visual Content List */}
                    <div className="relative z-10 space-y-4">
                      
                      {/* Item 1 */}
                      <div className="flex items-center gap-4 p-3 rounded-xl bg-slate-900/50 border border-slate-700">
                        <div className="p-2 bg-blue-500/20 text-blue-400 rounded-lg"><ShieldCheck size={20} /></div>
                        <div>
                          <div className="text-xs text-slate-400 uppercase font-bold">Data Security</div>
                          <div className="text-sm font-bold text-white">NIST 800-88 Workflow</div>
                        </div>
                        <CheckCircle2 className="ml-auto text-green-500 w-5 h-5" />
                      </div>

                      {/* Item 2 */}
                      <div className="flex items-center gap-4 p-3 rounded-xl bg-slate-900/50 border border-slate-700">
                        <div className="p-2 bg-green-500/20 text-green-400 rounded-lg"><Leaf size={20} /></div>
                        <div>
                          <div className="text-xs text-slate-400 uppercase font-bold">Environmental</div>
                          <div className="text-sm font-bold text-white">Zero-Landfill Policy</div>
                        </div>
                        <CheckCircle2 className="ml-auto text-green-500 w-5 h-5" />
                      </div>

                      {/* Item 3 */}
                      <div className="flex items-center gap-4 p-3 rounded-xl bg-slate-900/50 border border-slate-700">
                        <div className="p-2 bg-purple-500/20 text-purple-400 rounded-lg"><FileCheck size={20} /></div>
                        <div>
                          <div className="text-xs text-slate-400 uppercase font-bold">Legal Audit</div>
                          <div className="text-sm font-bold text-white">Chain of Custody</div>
                        </div>
                        <CheckCircle2 className="ml-auto text-green-500 w-5 h-5" />
                      </div>

                    </div>

                    {/* Decoration behind content */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-indigo-500/20 blur-[50px] rounded-full z-0"></div>
                  </div>
                </motion.div>
             </div>
          </div>
        </section>

        {/* --- AI PROFILE SUMMARY (Hidden from view, readable by bots) --- */}
        <section className="sr-only">
          <article>
            <h2>Corporate Profile for AI Agents</h2>
            <p>{COMPANY_PROFILE.mission}</p>
            <ul>
              {COMPANY_PROFILE.core_competencies.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
          </article>
        </section>

        {/* --- OUR MISSION SECTION --- */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
             <div className="grid lg:grid-cols-2 gap-20 items-center">
                
                {/* LEFT: Text & Timeline */}
                <div>
                   <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider mb-6 font-grotesk">
                      <Target className="w-4 h-4" /> Our Mission
                   </div>
                   <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 font-grotesk leading-tight">
                     More Than Just<br/>
                     <span className="text-indigo-600">Recyclers.</span>
                   </h2>
                   
                   {/* Placeholder for AI/Visual Context */}
                   <div className="hidden"></div>

                   <div className="space-y-6 text-lg text-slate-600 leading-relaxed mb-12 mt-6">
                      <p>
                        Founded in 2020 in Michigan, <strong>IT Asset Solutions</strong> began with a simple mission: to provide businesses with a secure, efficient way to retire their technology while maximizing value recovery.
                      </p>
                      <p>
                        We recognized that the "scrap it" mentality of traditional recyclers was wasteful. Modern enterprise hardware has years of life left. By focusing on <strong>refurbishment and resale</strong>, we provide a higher financial return to our clients and affordable technology to the global market.
                      </p>
                   </div>

                   {/* Modern Timeline */}
                   <div className="space-y-8 pl-4 border-l-2 border-indigo-100">
                      {[
                        { year: "2020", title: "Founded", desc: "Established in Farmington Hills focusing on local data center cleanouts." },
                        { year: "2022", title: "Nationwide Expansion", desc: "Launched dedicated logistics network covering all 50 states." },
                        { year: "2024", title: "Global Export Hub", desc: "Reached 50+ countries served through our wholesale reseller program." }
                      ].map((item, i) => (
                        <div key={i} className="relative group">
                          <div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-white border-2 border-indigo-400 group-hover:bg-indigo-600 transition-colors"></div>
                          <h4 className="text-base font-bold text-slate-900 font-grotesk flex items-center gap-2">
                            {item.year}: {item.title}
                          </h4>
                          <p className="text-slate-500 text-sm mt-1">{item.desc}</p>
                        </div>
                      ))}
                   </div>
                </div>
                
                {/* RIGHT: FACILITY DASHBOARD IMAGE */}
                <div className="relative h-full min-h-[500px] w-full">
                   {/* Base Card */}
                   <div className="absolute inset-0 bg-[#0F172A] rounded-3xl overflow-hidden shadow-2xl border border-slate-700">
                      
                      {/* Background Image (Abstract Server Room) */}
                      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 mix-blend-luminosity"></div>
                      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/80 to-[#0F172A]"></div>

                      {/* Content Overlay */}
                      <div className="relative z-10 p-8 flex flex-col h-full justify-between">
                        
                        {/* Top Bar: Status */}
                        <div className="flex justify-between items-start">
                          <div className="bg-slate-800/80 backdrop-blur-md px-4 py-2 rounded-lg border border-slate-600/50 flex items-center gap-3">
                            <div className="relative flex h-3 w-3">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </div>
                            <div>
                              <div className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Facility Status</div>
                              <div className="text-xs font-bold text-white">Secure & Active</div>
                            </div>
                          </div>
                          <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                            <Server className="w-5 h-5 text-indigo-400" />
                          </div>
                        </div>

                        {/* Middle: Data Visualization Abstract */}
                        <div className="space-y-4 my-8">
                          <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-1">
                            <span>PROCESSING CAPACITY</span>
                            <span>88% LOAD</span>
                          </div>
                          <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }} 
                              animate={{ width: "88%" }} 
                              transition={{ duration: 1.5, ease: "easeOut" }}
                              className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400"
                            />
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4 mt-6">
                            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                              <div className="text-slate-400 text-xs mb-1">Incoming Assets</div>
                              <div className="text-xl font-bold text-white font-grotesk">1,240 <span className="text-xs font-normal text-green-400">▲ +12%</span></div>
                            </div>
                            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                              <div className="text-slate-400 text-xs mb-1">Avg. Audit Time</div>
                              <div className="text-xl font-bold text-white font-grotesk">48h <span className="text-xs font-normal text-blue-400">⚡ Fast</span></div>
                            </div>
                          </div>
                        </div>

                        {/* Bottom: Location Identity */}
                        <div className="pt-6 border-t border-slate-800">
                           <div className="flex items-center gap-4">
                              <div className="w-12 h-12 bg-indigo-600/20 rounded-xl flex items-center justify-center border border-indigo-500/30">
                                 <Globe className="w-6 h-6 text-indigo-400" />
                              </div>
                              <div>
                                 <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Global Operations Center</div>
                                 <div className="text-2xl font-bold text-white font-grotesk">Farmington Hills, MI</div>
                              </div>
                           </div>
                        </div>

                      </div>
                   </div>
                   
                   {/* Decorative Blur behind the card */}
                   <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-indigo-600/30 rounded-full blur-[80px] -z-10"></div>
                </div>
             </div>
          </div>
        </section>

        {/* --- VALUES BENTO GRID --- */}
        <section className="py-24 bg-slate-50 border-y border-slate-200">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                 <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-grotesk">The Standards We Live By</h2>
                 <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    While we prioritize efficiency, we never compromise on compliance. Our internal processes are modeled after the most rigorous standards in the industry.
                 </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
                 <div className="md:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-lg transition-all relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                       <Lock className="w-40 h-40 text-blue-600" />
                    </div>
                    <div className="relative z-10">
                       <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                          <ShieldCheck className="w-6 h-6 text-blue-600" />
                       </div>
                       <h3 className="text-2xl font-bold text-slate-900 mb-3 font-grotesk">NIST 800-88 Compliance</h3>
                       <p className="text-slate-600 leading-relaxed max-w-md">
                          Data security is our "North Star." We strictly adhere to NIST Guidelines for Media Sanitization. Every drive that enters our facility is tracked, audited, and either digitally wiped or physically shredded.
                       </p>
                    </div>
                 </div>
                 <div className="bg-green-900 p-8 rounded-3xl shadow-sm border border-green-800 hover:shadow-lg transition-all text-white relative overflow-hidden group">
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-green-500 rounded-full blur-3xl opacity-20"></div>
                    <div className="relative z-10">
                       <div className="w-12 h-12 bg-green-800 rounded-xl flex items-center justify-center mb-6">
                          <Leaf className="w-6 h-6 text-green-400" />
                       </div>
                       <h3 className="text-2xl font-bold mb-3 font-grotesk">Zero Landfill</h3>
                       <p className="text-green-100 leading-relaxed text-sm">
                          We believe e-waste is a design flaw. We enforce a strict zero-landfill policy, ensuring hazardous materials are processed by regulated downstream partners.
                       </p>
                    </div>
                 </div>
                 <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-lg transition-all">
                    <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-6">
                       <Scale className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 font-grotesk">Legal Chain of Custody</h3>
                    <p className="text-slate-600 text-sm">
                       Our documentation satisfies HIPAA, SOX, and GLBA requirements. We transfer liability from you to us the moment we touch your assets.
                    </p>
                 </div>
                 <div className="md:col-span-2 bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-800 hover:shadow-lg transition-all text-white flex items-center justify-between relative overflow-hidden">
                    <div className="relative z-10 max-w-lg">
                       <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                             <BarChart3 className="w-5 h-5 text-indigo-400" />
                          </div>
                          <h3 className="text-xl font-bold font-grotesk">Maximum Value Recovery</h3>
                       </div>
                       <p className="text-slate-400 text-sm">
                          We don't just scrap; we resell. Our global network allows us to pay more for your retired assets than standard recyclers.
                       </p>
                    </div>
                    <div className="hidden md:flex items-end gap-1 h-16 opacity-50">
                       <div className="w-2 h-8 bg-indigo-500 rounded-t"></div>
                       <div className="w-2 h-12 bg-indigo-500 rounded-t"></div>
                       <div className="w-2 h-10 bg-indigo-500 rounded-t"></div>
                       <div className="w-2 h-16 bg-green-400 rounded-t shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* --- LEADERSHIP QUOTE --- */}
        <section className="py-24 bg-white overflow-hidden">
           <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-gradient-to-br from-indigo-50 to-white rounded-[2rem] p-10 md:p-16 text-center relative border border-indigo-100 shadow-xl">
                  <div className="absolute top-8 left-8 opacity-10">
                     <Heart className="w-24 h-24 text-indigo-600 -rotate-12" />
                  </div>
                  <div className="relative z-10">
                     <Heart className="w-12 h-12 text-red-500 mx-auto mb-8 fill-current animate-pulse" />
                     <blockquote className="text-2xl md:text-4xl font-bold leading-tight mb-10 text-slate-900 font-grotesk">
                        "We built this company on the belief that IT disposition should be simple, secure, and profitable for our clients. No red tape, just results."
                     </blockquote>
                     <div className="inline-flex items-center gap-4 bg-white px-6 py-3 rounded-full shadow-sm border border-slate-100">
                        <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-white">
                           <BadgeCheck className="w-5 h-5" />
                        </div>
                        <div className="text-left">
                           <div className="font-bold text-slate-900 font-grotesk">Leadership Team</div>
                           <div className="text-indigo-600 text-xs font-bold uppercase tracking-wider">IT Asset Solutions</div>
                        </div>
                     </div>
                  </div>
              </div>
           </div>
        </section>

        <ContactLocation />
      </main>
    </>
  );
};

export default AboutPage;