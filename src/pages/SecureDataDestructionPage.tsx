import React, { useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ShieldAlert, Lock, FileCheck, Truck, 
  Trash2, RefreshCw, CheckCircle2, 
  ArrowRight, ShieldCheck, ChevronDown, Database,
  FileText
} from 'lucide-react';
import ContactLocation from '../components/ContactLocation';

// --- 1. SGE OPTIMIZATION: CONTEXTUAL DEFINITIONS ---
const SGE_CONTENT = {
  definition: {
    question: "What is NIST 800-88 Data Destruction?",
    // UPDATED: "Compliant" -> "Proper" (Safe Language)
    answer: "NIST 800-88 is the US government standard for media sanitization. It defines three levels of security: 'Clear' (software wiping), 'Purge' (degaussing), and 'Destroy' (physical shredding). Proper execution ensures data is strictly unrecoverable and provides a legal safe harbor against data breach liability."
  },
  keyFeatures: [
    "Serialized Certificates of Destruction",
    "On-Site Physical Shredding",
    // UPDATED: "Compliant" -> "Aligned" (Safe Language)
    "DoD & HIPAA Aligned Wiping",
    "Audit-Ready Chain of Custody"
  ]
};

const SecureDataDestructionPage: React.FC = () => {
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
        "@id": "https://www.itassetsolutions.com/services/secure-data-destruction",
        "name": "Secure Data Destruction & Hard Drive Shredding",
        "provider": { 
            "@id": "https://www.itassetsolutions.com/#organization",
            "name": "IT Asset Solutions",
            // 2026 MANDATE: AVIF Logo
            "logo": "https://www.itassetsolutions.com/it-asset-solutions-new-logo.avif",
            "image": "https://www.itassetsolutions.com/it-asset-solutions-new-logo.avif"
        },
        // UPDATED: "Compliant" -> "Aligned"
        "description": "NIST 800-88 aligned data destruction. On-site hard drive shredding and secure data wiping services with serialized reporting.",
        "areaServed": { "@type": "Country", "name": "United States" },
        "serviceType": "Data Security",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Destruction Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "On-Site Hard Drive Shredding" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "NIST 800-88 Wipe" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Degaussing" } }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do you provide Certificates of Destruction?",
            "acceptedAnswer": {
              "@type": "Answer",
              // UPDATED: "Compliance" -> "Alignment"
              "text": "Yes. Every job includes a serialized Certificate of Destruction (COD) and an audit report listing every drive serial number processed, supporting your HIPAA and SOX alignment documentation."
            }
          },
          {
            "@type": "Question",
            "name": "Can you shred drives at our office?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We deploy mobile shredding trucks to your facility so you can witness the physical destruction of your media on-site."
            }
          }
        ]
      }
    ]
  }), []);

  return (
    <>
      <Helmet>
        <title>Secure Data Destruction | Hard Drive Shredding & NIST Wiping</title>
        <meta name="description" content="Audit-proof your IT disposal. We provide on-site hard drive shredding and NIST 800-88 data wiping with serialized Certificates of Destruction. Serving MI & USA." />
        {/* UPDATED: "Compliant" -> "Aligned" */}
        <meta name="keywords" content="hard drive shredding, NIST 800-88, data destruction certificate, on-site shredding Michigan, secure media destruction, HIPAA aligned disposal" />
        <link rel="canonical" href="https://www.itassetsolutions.com/services/secure-data-destruction" />
        {/* 2026 SPEED: Preconnect to Maps API */}
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <main className="w-full overflow-x-hidden bg-white">
        
        {/* --- HERO SECTION: FIXED & ALIGNED --- */}
        <section className="relative pt-32 pb-20 bg-[#0f172a] text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#0f172a] to-red-950 opacity-90"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center space-x-2 bg-red-900/30 border border-red-500/30 px-4 py-2 rounded-full mb-6">
                  <ShieldAlert className="w-4 h-4 text-red-400" />
                  <span className="text-sm font-bold text-red-100 font-grotesk tracking-wide uppercase">100% Guaranteed Unrecoverable</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-grotesk">
                  Bulletproof Data <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Destruction Services.</span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Deleting files isn't enough. We provide <strong>physical shredding</strong> and <strong>NIST 800-88 wiping</strong> to ensure your sensitive corporate data never resurfaces.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-red-600 rounded-full hover:bg-red-700 transition-all shadow-lg hover:shadow-red-500/30 font-grotesk"
                  >
                    Get Destruction Quote
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <a 
                    href="#methods" 
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-gray-300 border border-gray-600 rounded-full hover:bg-gray-800 transition-all font-grotesk"
                  >
                    Compare Methods
                  </a>
                </div>
              </motion.div>

              {/* Visual: The Certificate (The Product) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hidden lg:block relative"
              >
                <div className="bg-slate-800/80 backdrop-blur-md p-8 rounded-2xl border border-slate-700 shadow-2xl relative overflow-hidden transform rotate-2 hover:rotate-0 transition-all duration-500">
                  
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-6 border-b border-slate-700 pb-4">
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="w-8 h-8 text-green-500" />
                      <div>
                        <h3 className="font-bold text-lg uppercase tracking-wider font-grotesk text-white">Certificate of Destruction</h3>
                        <p className="text-xs text-slate-400">Official Legal Document</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-mono text-slate-500">REF: COD-2025-X99</p>
                      <p className="text-xs font-mono text-slate-500">DATE: {new Date().toLocaleDateString()}</p>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="space-y-3 font-mono text-sm bg-slate-900/50 p-4 rounded-lg border border-slate-700 text-slate-300">
                    <div className="flex justify-between"><span>Method:</span> <span className="font-bold text-white">Physical Shredding (15mm)</span></div>
                    <div className="flex justify-between"><span>Asset Type:</span> <span className="text-white">Server Hard Drives</span></div>
                    <div className="flex justify-between"><span>Quantity:</span> <span className="text-white">450 Units</span></div>
                    <div className="flex justify-between"><span>Standard:</span> <span className="text-blue-400">NIST 800-88 Purge</span></div>
                  </div>

                  {/* Stamp */}
                  <div className="mt-6 flex items-center gap-2 text-green-400 bg-green-500/10 p-3 rounded-lg text-xs font-bold justify-center border border-green-500/20">
                    <CheckCircle2 className="w-4 h-4" /> VERIFIED & SERIALIZED
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-red-600/20 blur-[60px] rounded-full z-0 pointer-events-none"></div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* --- 3. SGE "FEATURED SNIPPET" OPTIMIZATION --- */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="bg-red-50 rounded-3xl p-8 border border-red-100">
              <span className="text-xs font-bold text-red-600 uppercase tracking-widest font-grotesk mb-2 block">Compliance Standard</span>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-grotesk">{SGE_CONTENT.definition.question}</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {SGE_CONTENT.definition.answer}
              </p>
              
              <div className="border-t border-red-200/50 pt-6">
                <h3 className="text-sm font-bold text-red-800 mb-3 font-grotesk">Key Capabilities:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {SGE_CONTENT.keyFeatures.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-red-900">
                      <ShieldCheck className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </section>

        {/* --- 5. METHOD COMPARISON (Educational) --- */}
        <section id="methods" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 font-grotesk">Choose Your Level of Destruction</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Not all data needs to be shredded. We help you choose the right method to balance security with residual value recovery.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {/* Method 1: Wiping */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-2 h-full bg-blue-500"></div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-100 rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors"><RefreshCw size={32} /></div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 font-grotesk">Secure Wiping</h3>
                    <p className="text-sm text-blue-600 font-semibold">NIST "Clear" Level</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Software-based erasure that overwrites data sectors. This renders data unrecoverable while keeping the drive functional for resale.
                </p>
                {/* UPDATED: "Compliance" -> "Standards" */}
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 text-green-500" /> <strong>Best for:</strong> Laptops/PCs you want to sell.</li>
                  <li className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 text-green-500" /> <strong>Outcome:</strong> You get money back.</li>
                  <li className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 text-green-500" /> <strong>Standards:</strong> HIPAA, GDPR, SOC2.</li>
                </ul>
              </div>

              {/* Method 2: Shredding */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-2 h-full bg-red-500"></div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-red-100 rounded-lg text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors"><Trash2 size={32} /></div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 font-grotesk">Physical Shredding</h3>
                    <p className="text-sm text-red-600 font-semibold">NIST "Destroy" Level</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Drives are mechanically pulverized into 15mm metal shards. This is the ultimate level of security for highly sensitive data.
                </p>
                {/* UPDATED: "Compliance" -> "Standards" */}
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 text-green-500" /> <strong>Best for:</strong> End-of-life or Failed Drives.</li>
                  <li className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 text-green-500" /> <strong>Outcome:</strong> 100% Destruction (Recycled).</li>
                  <li className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 text-green-500" /> <strong>Standards:</strong> NSA, DoD, Classified.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* --- 6. ON-SITE VS OFF-SITE --- */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Left: Text */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 font-grotesk">We Come to You.</h2>
                <p className="text-gray-600 mb-6 text-lg">
                  For maximum chain-of-custody control, request our <strong>Mobile Shredding Unit</strong>. 
                  Watch your drives being destroyed in our truck at your loading dock.
                </p>
                
                <div className="space-y-6 mt-8">
                  <div className="flex gap-4 p-4 rounded-xl border border-gray-100 hover:border-indigo-200 transition-colors">
                    <Truck className="w-8 h-8 text-indigo-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 font-grotesk text-lg">On-Site Destruction</h4>
                      <p className="text-sm text-gray-500 mt-1">We park, you watch, we shred. Zero transit risk.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 rounded-xl border border-gray-100 hover:border-indigo-200 transition-colors">
                    <Lock className="w-8 h-8 text-indigo-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 font-grotesk text-lg">Secure Transport (Off-Site)</h4>
                      <p className="text-sm text-gray-500 mt-1">GPS-tracked sealed transport to our Farmington Hills hub for bulk processing.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right: Visual Card */}
              <div className="relative">
                 <div className="absolute inset-0 bg-gradient-to-tr from-slate-800 to-slate-900 rounded-3xl transform rotate-3 opacity-20"></div>
                 <div className="relative bg-slate-900 rounded-3xl p-10 text-white h-full flex flex-col justify-center items-center text-center border border-slate-700">
                  <Database className="w-20 h-20 text-slate-600 mx-auto mb-6" />
                  <div className="w-24 h-1 bg-red-500 mx-auto animate-pulse rounded-full"></div>
                  <p className="text-red-400 font-mono text-xs uppercase tracking-widest mt-4">Shredder Status: ACTIVE</p>
                  <p className="text-2xl font-bold mt-2 font-grotesk">Mobile Unit Available</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- 7. FAQ --- */}
        <section className="py-20 bg-gray-50 border-t border-gray-200">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 font-grotesk">Security FAQ</h2>
            <div className="space-y-4">
              {[
                { 
                  q: "What does the Certificate of Destruction include?", 
                  a: "The COD includes your company details, the date/time of destruction, the method used, and a line-item list of every serial number destroyed. It is your legal proof of proper disposal." 
                },
                { 
                  q: "Can you shred SSDs and backup tapes?", 
                  a: "Yes. Solid State Drives (SSDs) require a finer shred size (shred width) which our industrial shredders are equipped to handle. We also destroy tapes, CDs, and flash media." 
                },
                { 
                  q: "Is wiping really secure enough for HIPAA?", 
                  // UPDATED: "federally accepted for HIPAA compliance" -> "industry standards for data security"
                  a: "Yes, provided it is done correctly. NIST 800-88 'Clear' or 'Purge' methods are recognized industry standards for data security. However, for damaged drives that cannot be wiped, shredding is required." 
                }
              ].map((faq, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-red-200 transition-colors">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center justify-between font-grotesk text-lg">
                    {faq.q}
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 8. FINAL CTA --- */}
        <section className="py-24 bg-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <FileText className="w-12 h-12 text-red-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-grotesk">Protect Your Business Today</h2>
            <p className="text-xl text-gray-600 mb-10">
              Don't leave your data security to chance. Get the secure destruction service trusted by Michigan's top healthcare and financial firms.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-red-600 rounded-full hover:bg-red-700 transition-all shadow-xl hover:shadow-red-500/30 font-grotesk transform hover:-translate-y-1">
                Schedule Service
              </Link>
              <Link to="/services/secure-chain-of-custody-logistics" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition-all font-grotesk">
                View Logistics Protocol
              </Link>
            </div>
          </div>
        </section>

        <ContactLocation />
      </main>
    </>
  );
};

export default SecureDataDestructionPage;