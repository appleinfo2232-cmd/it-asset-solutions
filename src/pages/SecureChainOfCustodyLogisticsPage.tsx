import React, { useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Truck, MapPin, Shield, FileText, Lock, 
  AlertTriangle, Navigation, Radio, Clipboard, UserCheck, 
  ArrowRight, ChevronDown, Map, ShieldCheck
} from 'lucide-react';
import ContactLocation from '../components/ContactLocation';

// --- 1. SGE OPTIMIZATION: CONTEXTUAL DEFINITIONS ---
const SGE_CONTENT = {
  definition: {
    question: "What is Secure Chain-of-Custody Logistics?",
    answer: "Secure Chain-of-Custody Logistics is a specialized IT transport process that utilizes tamper-evident sealing, GPS geofencing, and serialized hand-off logs to document the possession and security status of assets from pickup to final disposition."
  },
  keyFeatures: [
    "GPS Geofenced Routes",
    "Tamper-Evident Seals",
    "Serialized Manifest Handoffs",
    "Point-to-Point Direct Transport"
  ]
};

const SecureChainOfCustodyLogisticsPage: React.FC = () => {
  useEffect(() => {
    // 2026 SPEED: Use requestIdleCallback for non-critical scroll logic
    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(() => window.scrollTo(0, 0));
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  // --- 2. ADVANCED STRUCTURED DATA (JSON-LD) ---
  const structuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.itassetsolutions.com/services/secure-chain-of-custody-logistics",
        "name": "Secure Chain-of-Custody Logistics",
        "provider": { 
            "@id": "https://www.itassetsolutions.com/#organization",
            "name": "IT Asset Solutions",
            // 2026 MANDATE: AVIF Logo
            "logo": "https://www.itassetsolutions.com/it-asset-solutions-new-logo.avif",
            "image": "https://www.itassetsolutions.com/it-asset-solutions-new-logo.avif"
        },
        "description": "GPS-tracked secure logistics for IT asset transportation. Complete chain-of-custody documentation, sealed trucks, and background-checked specialists.",
        "areaServed": { "@type": "Country", "name": "United States" },
        "serviceType": "Secure Logistics",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Logistics Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "GPS Tracked Transport" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "White Glove Pickup" } }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do you track assets during transport?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We utilize a triple-verification system: real-time cellular GPS tracking on vehicles, distinct barcode scanning at every hand-off point, and manual visual verification logs."
            }
          },
          {
            "@type": "Question",
            "name": "What happens if an asset goes missing during transit?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We have a zero-loss history. However, we carry comprehensive cyber and liability insurance that specifically covers data breach liability during transit, ensuring you are protected."
            }
          }
        ]
      }
    ]
  }), []);

  return (
    <>
      <Helmet>
        {/* UPDATED: Brand Name First + "Secure Logistics" Keyword */}
        <title>IT Asset Solutions | Secure Chain-of-Custody Logistics</title>
        
        {/* UPDATED: Injected "IT asset solution" (singular) + "GPS Tracked" */}
        <meta name="description" content="The secure IT asset solution for transport. GPS-tracked logistics, locked trucks, and 100% chain-of-custody documentation for Michigan businesses." />
        
        {/* UPDATED: Added Brand Name & Competitor Variations */}
        <meta name="keywords" content="IT Asset Solutions, IT Asset Solution, secure IT logistics, chain of custody tracking, GPS IT transport, secure data transport Michigan, IT asset pickup service" />
        
        <link rel="canonical" href="https://www.itassetsolutions.com/services/secure-chain-of-custody-logistics" />
        {/* 2026 SPEED: Preconnect to Maps API */}
        <link rel="preconnect" href="https://maps.googleapis.com" />
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
                <div className="inline-flex items-center space-x-2 bg-blue-900/50 border border-blue-500/30 px-4 py-2 rounded-full mb-6">
                  <Shield className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-bold text-blue-100 font-grotesk tracking-wide uppercase">Zero Breaches Since Inception</span>
                </div>
                
                {/* Font Size Optimized */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-grotesk">
                  The Most Vulnerable Part of Data Security is <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">The Truck Ride.</span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Standard couriers don't understand data liability. We do. 
                  We provide <strong>high-security logistics</strong> for your IT assets, ensuring that from the moment it leaves your dock to the moment it's sanitized, it never leaves our sight.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30 font-grotesk"
                  >
                    Schedule Secure Pickup
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <a 
                    href="#process" 
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-gray-300 border border-gray-600 rounded-full hover:bg-gray-800 transition-all font-grotesk"
                  >
                    View Our Protocol
                  </a>
                </div>
              </motion.div>

              {/* Right Visual: Live Tracking Card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hidden lg:block relative"
              >
                <div className="bg-slate-800/80 backdrop-blur-md p-8 rounded-2xl border border-slate-700 shadow-2xl relative overflow-hidden">
                  
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-8 relative z-10">
                    <div>
                      <h3 className="text-lg font-bold text-white font-grotesk">Live Transport Status</h3>
                      <p className="text-xs text-slate-400">Fleet ID: TRK-8829-X</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-mono text-green-400">ACTIVE GPS</span>
                    </div>
                  </div>

                  {/* Compact Timeline */}
                  <div className="space-y-0 relative z-10">
                    {/* Step 1 */}
                    <div className="flex gap-4 relative pb-8">
                       <div className="flex flex-col items-center">
                          <div className="w-4 h-4 bg-blue-500 rounded-full z-10 border-2 border-slate-800"></div>
                          <div className="w-0.5 h-full bg-slate-600 absolute top-2"></div>
                       </div>
                       <div>
                          <p className="text-xs text-slate-400 font-mono">08:00 AM</p>
                          <p className="font-bold text-white text-sm">Seals Applied & Verified</p>
                          <p className="text-xs text-slate-400">Client Site (Detroit, MI)</p>
                       </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex gap-4 relative pb-8">
                       <div className="flex flex-col items-center">
                          <div className="w-4 h-4 bg-blue-500 rounded-full z-10 border-2 border-slate-800"></div>
                          <div className="w-0.5 h-full bg-slate-600 absolute top-2"></div>
                       </div>
                       <div>
                          <p className="text-xs text-slate-400 font-mono">08:45 AM</p>
                          <p className="font-bold text-white text-sm">GPS Geofence Entry</p>
                          <p className="text-xs text-slate-400">I-96 Corridor</p>
                       </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex gap-4 relative">
                       <div className="flex flex-col items-center">
                          <div className="w-4 h-4 bg-green-500 rounded-full z-10 border-2 border-slate-800 shadow-[0_0_10px_#22c55e]"></div>
                       </div>
                       <div>
                          <p className="text-xs text-slate-400 font-mono">09:30 AM</p>
                          <p className="font-bold text-white text-sm">Secure Arrival</p>
                          <p className="text-xs text-slate-400">Farmington Hills Hub</p>
                       </div>
                    </div>
                  </div>

                  {/* Background Decoration */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-600/20 blur-[60px] rounded-full z-0"></div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* --- 3. SGE DEFINITION SNIPPET --- */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="bg-blue-50 rounded-3xl p-8 border border-blue-100">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest font-grotesk mb-2 block">Core Definition</span>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-grotesk">{SGE_CONTENT.definition.question}</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {SGE_CONTENT.definition.answer}
              </p>
              
              <div className="border-t border-blue-200/50 pt-6">
                <h3 className="text-sm font-bold text-blue-800 mb-3 font-grotesk">Security Protocols:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {SGE_CONTENT.keyFeatures.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-blue-900">
                      <ShieldCheck className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </section>

        {/* --- 4. THE PROTOCOL --- */}
        <section id="process" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 font-grotesk">The "Lock-Down" Protocol</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We don't just "move" equipment. We secure it. Our 4-stage logistics process is designed to eliminate the possibility of human error or theft.
              </p>
            </div>

            {/* AI Image Trigger */}
            

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {[
                { 
                  icon: Lock, 
                  title: "1. Seal & Sign", 
                  desc: "Before the truck moves, assets are inventoried, crates are locked, and tamper-evident serialized seals are applied. You sign off on the seal numbers." 
                },
                { 
                  icon: Navigation, 
                  title: "2. GPS Geofencing", 
                  desc: "Our trucks are GPS monitored. If a vehicle deviates from the pre-planned route by even a mile, our security center is alerted immediately." 
                },
                { 
                  icon: UserCheck, 
                  title: "3. Direct Transport", 
                  desc: "No stopping at hubs. No transferring to third-party carriers. Your assets stay on one secure vehicle from your dock to ours." 
                },
                { 
                  icon: FileText, 
                  title: "4. Verification", 
                  desc: "Upon arrival at our Farmington Hills hub, seals are inspected for integrity. We verify seal numbers against the pickup manifest before opening." 
                }
              ].map((step, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                    <step.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-grotesk">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 5. RISK & COMPLIANCE --- */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Text */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 font-grotesk">Why General Couriers are a Liability</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Using a standard moving company or freight carrier for IT assets is a compliance violation waiting to happen. They treat servers like furniture. We treat them like bank vaults.
                </p>
                <ul className="space-y-4">
                  {[
                    "No background checks on temporary drivers",
                    "Assets left unattended in unlocked parking lots",
                    "Co-mingling your data with other freight",
                    "Zero chain-of-custody documentation"
                  ].map((risk, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{risk}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Right Visual Card */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-3xl transform rotate-3 opacity-20"></div>
                <div className="bg-blue-900 text-white p-10 rounded-3xl relative overflow-hidden border border-blue-800">
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-6 font-grotesk">Our Security Guarantee</h3>
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-blue-800 rounded-lg">
                          <Radio className="w-6 h-6 text-green-400" />
                        </div>
                        <div>
                          <p className="font-bold">Real-Time Visibility</p>
                          <p className="text-sm text-blue-200">Know exactly where your assets are, 24/7.</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-blue-800 rounded-lg">
                          <Clipboard className="w-6 h-6 text-green-400" />
                        </div>
                        <div>
                          <p className="font-bold">Audit-Ready Paperwork</p>
                          <p className="text-sm text-blue-200">Instant access to manifests for HIPAA/SOX audits.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Card Decoration */}
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500 rounded-full blur-[50px] opacity-30"></div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- 6. FAQ SECTION --- */}
        <section className="py-20 bg-gray-50 border-t border-gray-200">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 font-grotesk text-gray-900">Logistics FAQ</h2>
            <div className="space-y-4">
              {[
                { q: "Do you serve states outside of Michigan?", a: "Yes. While our secure processing hub is in Farmington Hills, MI, we offer nationwide logistics via our secure dedicated fleet partners for enterprise bulk pickups." },
                { q: "How do you handle loose hard drives?", a: "Loose drives are scanned individually into our system on-site, then placed in locked, foam-lined transport cases that are sealed before being loaded onto the truck." },
                { q: "Can we track the truck ourselves?", a: "Yes. For sensitive loads, we can provide a tracking link that allows your security team to monitor the transport vehicle's progress in real-time." }
              ].map((faq, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-blue-300 transition-colors">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center justify-between font-grotesk text-lg">
                    {faq.q}
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 7. FINAL CTA --- */}
        <section className="py-24 bg-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <Truck className="w-12 h-12 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-grotesk">Secure Your Chain of Custody Today</h2>
            <p className="text-xl text-gray-600 mb-10">
              Don't risk a data breach during the last mile. Get the logistics partner trusted by Michigan's top healthcare and financial firms.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-green-600 rounded-full hover:bg-green-700 transition-all shadow-xl hover:shadow-green-500/30 font-grotesk transform hover:-translate-y-1">
                Request Logistics Quote
              </Link>
              <Link to="/services/secure-data-destruction" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition-all font-grotesk">
                View Destruction Process
              </Link>
            </div>
          </div>
        </section>

        <ContactLocation />
      </main>
    </>
  );
};

export default SecureChainOfCustodyLogisticsPage;