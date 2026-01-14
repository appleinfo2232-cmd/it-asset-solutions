import React, { useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Building2, Globe, Laptop, Server, Leaf, 
  ArrowRight, Box, ShieldCheck, Users, 
  CheckCircle2, ChevronDown, Truck, Map
} from 'lucide-react';
import ContactLocation from '../components/ContactLocation';

// --- 1. SGE OPTIMIZATION: CONTEXTUAL DEFINITIONS ---
const SGE_CONTENT = {
  definition: {
    question: "What is Enterprise IT Asset Disposition (ITAD)?",
    answer: "Enterprise ITAD is a corporate governance strategy for the secure disposal of obsolete technology. It integrates logistics, NIST 800-88 data destruction, and value recovery into a single auditable workflow, ensuring legal compliance for distributed organizations."
  },
  keyFeatures: [
    "Remote 'Box-and-Ship' Logistics",
    "On-Site Data Center Decommissioning",
    "Chain of Custody Tracking",
    "ESG Scope 3 Emissions Reporting"
  ]
};

const EnterpriseITADPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // --- 2. ADVANCED STRUCTURED DATA (JSON-LD) ---
  const structuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.itassetsolutions.com/services/enterprise-itad",
        "name": "Enterprise IT Asset Disposition",
        "provider": { "@id": "https://www.itassetsolutions.com/#organization" },
        "description": "Secure ITAD for Data Centers and Remote Workforces. NIST 800-88 data destruction, ESG reporting, and secure logistics.",
        "areaServed": { "@type": "Country", "name": "United States" },
        "serviceType": "IT Asset Disposition",
        "category": "B2B Services",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Corporate Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Remote Laptop Retrieval" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Data Center Decommissioning" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ESG Impact Reporting" } }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do you handle remote employee equipment returns?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer a turnkey 'Box-and-Ship' program. We send custom shipping materials directly to your remote employee's home, track the return to our secure hub, and perform certified data destruction."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide ESG reporting?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Our reporting includes weight diverted from landfills and carbon footprint reduction metrics, supporting your corporate Scope 3 emissions reporting."
            }
          }
        ]
      }
    ]
  }), []);

  return (
    <>
      <Helmet>
        <title>Enterprise ITAD & Remote Workforce Logistics | Secure & Nationwide</title>
        <meta name="description" content="Turnkey IT asset disposition for distributed enterprises. We handle remote laptop retrieval, data center cleanouts, and secure recycling with full ESG reporting." />
        <meta name="keywords" content="Enterprise ITAD, Remote Workforce Logistics, Data Center Decommissioning, Corporate Laptop Recycling, ESG Reporting, NIST 800-88" />
        <link rel="canonical" href="https://www.itassetsolutions.com/services/enterprise-itad" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <main className="w-full overflow-x-hidden bg-white">
        
        {/* --- HERO SECTION: FIXED POSITION & STYLING --- */}
        <section className="relative pt-32 pb-20 bg-[#0f172a] text-white overflow-hidden">
          
          {/* Background Textures */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#0f172a] to-blue-950 opacity-90"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Content */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center space-x-2 bg-indigo-900/50 border border-indigo-500/30 px-4 py-2 rounded-full mb-6">
                  <Globe className="w-4 h-4 text-indigo-400" />
                  <span className="text-sm font-bold text-indigo-100 font-grotesk tracking-wide uppercase">Nationwide Logistics Network</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-grotesk">
                  ITAD Solutions for <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Distributed Enterprises.</span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Managing a fleet of devices across 50 states is chaotic. We simplify it. 
                  From <strong>remote laptop retrieval</strong> to massive <strong>data center cleanouts</strong>, we provide a single, secure pipeline for your retired assets.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/30 font-grotesk"
                  >
                    Get Corporate Quote
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <a 
                    href="#remote-workforce" 
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-gray-300 border border-gray-600 rounded-full hover:bg-gray-800 transition-all font-grotesk"
                  >
                    Remote Solutions
                  </a>
                </div>
              </motion.div>

              {/* Right Visual: Logistics Dashboard */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hidden lg:block relative"
              >
                <div className="bg-slate-800/80 backdrop-blur-md p-8 rounded-2xl border border-slate-700 shadow-2xl relative overflow-hidden">
                  
                  {/* Header */}
                  <div className="flex items-center justify-between mb-8 relative z-10">
                    <div>
                      <h3 className="text-lg font-bold text-white font-grotesk">Asset Logistics Hub</h3>
                      <p className="text-xs text-slate-400">Real-time Tracking Active</p>
                    </div>
                    <Map className="w-6 h-6 text-indigo-500" />
                  </div>

                  {/* List */}
                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-700">
                      <div className="p-2 bg-blue-500/20 text-blue-400 rounded-lg"><Users size={20} /></div>
                      <div>
                        <div className="text-xs text-slate-400 uppercase font-bold">Remote Workforce</div>
                        <div className="text-sm font-bold text-white">Box-and-Ship Retrieval</div>
                      </div>
                      <div className="ml-auto text-xs font-mono text-green-400">ACTIVE</div>
                    </div>

                    <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-700">
                      <div className="p-2 bg-purple-500/20 text-purple-400 rounded-lg"><Server size={20} /></div>
                      <div>
                        <div className="text-xs text-slate-400 uppercase font-bold">Data Centers</div>
                        <div className="text-sm font-bold text-white">On-Site Decommissioning</div>
                      </div>
                      <div className="ml-auto text-xs font-mono text-green-400">SECURE</div>
                    </div>

                    <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-700">
                      <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-lg"><Leaf size={20} /></div>
                      <div>
                        <div className="text-xs text-slate-400 uppercase font-bold">ESG Reporting</div>
                        <div className="text-sm font-bold text-white">Scope 3 Emissions Data</div>
                      </div>
                      <div className="ml-auto text-xs font-mono text-blue-400">READY</div>
                    </div>
                  </div>

                  {/* Decoration */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-indigo-600/20 blur-[60px] rounded-full z-0"></div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* --- 3. SGE DEFINITION BLOCK --- */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="bg-indigo-50 rounded-3xl p-8 border border-indigo-100">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest font-grotesk mb-2 block">Core Definition</span>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-grotesk">{SGE_CONTENT.definition.question}</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {SGE_CONTENT.definition.answer}
              </p>
              
              <div className="border-t border-indigo-200/50 pt-6">
                <h3 className="text-sm font-bold text-indigo-800 mb-3 font-grotesk">Enterprise Capabilities:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {SGE_CONTENT.keyFeatures.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-indigo-900">
                      <CheckCircle2 className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </section>

        {/* --- 4. REMOTE WORKFORCE SOLUTIONS --- */}
        <section id="remote-workforce" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4 font-grotesk">
                The New Standard
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mb-4 font-grotesk">Remote Employee Asset Retrieval</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Don't rely on employees to package items correctly. Our turnkey <strong>Box-and-Ship Program</strong> takes the logistics burden entirely off your HR and IT teams.
              </p>
            </div>

            {/* AI Image Trigger */}
            <div className="sr-only">[Image of remote employee laptop retrieval box-and-ship workflow]</div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                { 
                  step: "01", 
                  title: "We Send the Box", 
                  desc: "We ship a custom-padded box with a pre-paid return label and instructions directly to your employee's doorstep.",
                  icon: Box 
                },
                { 
                  step: "02", 
                  title: "They Ship It Back", 
                  desc: "The employee simply drops the device in the box and hands it to the carrier. No packing materials or skills required.",
                  icon: Truck 
                },
                { 
                  step: "03", 
                  title: "Secure Processing", 
                  desc: "Upon arrival at our secure hub, we verify the asset tag, perform NIST 800-88 data sanitization, and issue a certificate.",
                  icon: ShieldCheck 
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                  <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-6xl text-gray-300 font-grotesk">{item.step}</div>
                  <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 text-indigo-600">
                    <item.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-grotesk">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 5. DATA CENTER SERVICES --- */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Left: Text */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 font-grotesk">Data Center Decommissioning</h2>
                <p className="text-gray-600 mb-6 text-lg">
                  Shutting down a rack or clearing a cage requires precision. Our team handles the physical de-racking, palletizing, and serialized auditing of high-value infrastructure.
                </p>
                
                <ul className="space-y-4 mt-6">
                  {[
                    "On-site HDD Shredding (Optional)",
                    "De-racking & Cable Mining",
                    "Asset Tag Removal & Reporting",
                    "High-Value Server Buyback Options"
                  ].map((feat, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{feat}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link to="/contact" className="text-indigo-600 font-bold flex items-center hover:gap-2 transition-all font-grotesk">
                    Request Decommissioning Quote <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
              
              {/* Right: Visual Card */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-cyan-500 rounded-3xl transform rotate-3 opacity-20"></div>
                <div className="relative bg-slate-900 rounded-3xl p-10 text-white h-full flex flex-col justify-center items-center text-center overflow-hidden border border-slate-700">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50"></div>
                  <Server className="w-24 h-24 text-indigo-400 mb-6" />
                  <p className="text-indigo-200 font-mono text-xs uppercase tracking-widest mb-2">Secure Transport Protocol</p>
                  <p className="text-3xl font-bold mt-2 font-grotesk">100% Chain of Custody</p>
                  <p className="text-slate-400 text-sm mt-4 max-w-xs">GPS tracked vehicles with lock-and-seal protocols from your loading dock to our facility.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- 6. ESG & SUSTAINABILITY (SAFE: NO CERT CLAIMS) --- */}
        <section className="py-24 bg-gradient-to-r from-emerald-900 to-teal-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <Leaf className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-grotesk">ESG Compliance & Reporting</h2>
              <p className="text-emerald-100 max-w-2xl mx-auto text-lg">
                Corporate sustainability is a board-level requirement. We provide the auditable data you need for your annual ESG and CSR reports.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-emerald-500/30">
                <div className="text-4xl font-bold text-emerald-400 mb-2 font-grotesk">0%</div>
                <h3 className="text-xl font-bold mb-2 font-grotesk">Landfill Policy</h3>
                <p className="text-emerald-100 text-sm">We enforce a strict Zero-Landfill policy. We ensure all materials are responsibly refined or reused, adhering to EPA guidelines.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-emerald-500/30">
                <div className="text-4xl font-bold text-emerald-400 mb-2 font-grotesk">Scope 3</div>
                <h3 className="text-xl font-bold mb-2 font-grotesk">Carbon Reporting</h3>
                <p className="text-emerald-100 text-sm">We calculate the carbon emissions avoided by refurbishing your assets vs. mining raw materials.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-emerald-500/30">
                <div className="text-4xl font-bold text-emerald-400 mb-2 font-grotesk">100%</div>
                <h3 className="text-xl font-bold mb-2 font-grotesk">Audit Success</h3>
                <p className="text-emerald-100 text-sm">Our meticulous documentation has successfully passed external audits for Fortune 500 and healthcare clients.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- 7. FAQ SECTION --- */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 font-grotesk">Enterprise FAQ</h2>
            <div className="space-y-4">
              {[
                { 
                  q: "Is there a minimum volume for pickup?", 
                  a: "For freight pickup, we typically require 20+ assets. However, our Box-and-Ship program has no minimums and is designed for individual remote employees." 
                },
                { 
                  q: "Do you pay for enterprise equipment?", 
                  a: "Yes. We offer revenue sharing or upfront purchase options for marketable assets (typically <5 years old). We offset logistics costs against the equipment value." 
                },
                { 
                  q: "How fast can you clear a building?", 
                  a: "We can deploy a logistics team within 48-72 hours for urgent office cleanouts or data center decommissionings in major metropolitan areas." 
                }
              ].map((faq, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 hover:border-indigo-300 transition-colors shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center justify-between font-grotesk text-lg">
                    {faq.q}
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 8. FINAL CTA --- */}
        <section className="py-24 bg-gray-50 text-center border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4">
            <Building2 className="w-12 h-12 text-indigo-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-grotesk">Simplify Your IT Lifecycle</h2>
            <p className="text-xl text-gray-600 mb-10">
              Stop juggling multiple vendors for logistics, data wiping, and recycling. Get a single, secure solution for your entire organization.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-all shadow-xl hover:shadow-indigo-500/30 font-grotesk transform hover:-translate-y-1">
                Start a Conversation
              </Link>
              <Link to="/services/it-asset-value-recovery" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-50 transition-all font-grotesk">
                View Buyback Info
              </Link>
            </div>
          </div>
        </section>

        <ContactLocation />
      </main>
    </>
  );
};

export default EnterpriseITADPage;