import React, { useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, FileText, Lock, Eye, 
  CheckCircle2, AlertTriangle, FileCheck, 
  Server, HardDrive, ScrollText, Scale, 
  Building2, Stethoscope, Landmark, BadgeCheck,
  Search, ArrowRight, Download, Printer,
  FileSpreadsheet, ClipboardCheck, ChevronDown
} from 'lucide-react';
import ContactLocation from '../components/ContactLocation';

// --- 1. SGE OPTIMIZATION: CONTEXTUAL DEFINITIONS ---
const SGE_CONTENT = {
  definition: {
    question: "What is Serialized IT Asset Auditing?",
    answer: "Serialized IT Asset Auditing is the process of documenting individual hardware assets by their unique serial numbers at every stage of disposition. It creates an unbroken chain of custody, ensuring that every specific hard drive or server can be traced from its origin point to its final method of destruction (shredding or wiping)."
  },
  keyFeatures: [
    "Serialized Certificates of Destruction",
    "Chain of Custody Transfer Logs",
    "ESG Waste Diversion Reporting",
    "HIPAA/SOX Compliance Documentation"
  ]
};

const AuditingComplianceReportingPage: React.FC = () => {
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
        "@id": "https://www.itassetsolutions.com/services/auditing-compliance-reporting",
        "name": "IT Asset Auditing & Compliance Reporting",
        "provider": { 
            "@id": "https://www.itassetsolutions.com/#organization",
            "name": "IT Asset Solutions",
            // 2026 MANDATE: AVIF Logo
            "logo": "https://www.itassetsolutions.com/it-asset-solutions-new-logo.avif",
            "image": "https://www.itassetsolutions.com/it-asset-solutions-new-logo.avif"
        },
        "description": "Serialized IT asset auditing and compliance reporting. Certificates of Destruction and ESG reports aligned with NIST, HIPAA, and SOX standards.",
        "areaServed": { "@type": "Country", "name": "United States" },
        "serviceType": "IT Compliance Auditing",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Auditing Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Serialized Inventory Audit" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Certificate of Destruction" } }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Are your reports audit-ready for HIPAA/SOX?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Our reports provide a serialized chain-of-custody and definite proof of data destruction, satisfying external auditors for HIPAA, SOX, GLBA, and FACTA."
            }
          }
        ]
      }
    ]
  }), []);

  return (
    <>
      <Helmet>
        {/* UPDATED: Brand Name First + "Auditing" Keyword */}
        <title>IT Asset Solutions | Auditing & Compliance Reporting</title>
        
        {/* UPDATED: Injected "IT asset solution" (singular) + "Serialized Audit" */}
        <meta name="description" content="Ensure compliance with IT Asset Solutions. Our serialized auditing provides the complete IT asset solution for HIPAA, SOX, and ESG reporting." />
        
        {/* UPDATED: Added Brand Name & Competitor Variations */}
        <meta name="keywords" content="IT Asset Solutions, IT Asset Solution, IT asset auditing, compliance reporting, certificate of destruction, ITAD documentation, HIPAA audit trail" />
        
        <link rel="canonical" href="https://www.itassetsolutions.com/services/auditing-compliance-reporting" />
        {/* 2026 SPEED: Preconnect to Maps API */}
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      
      <main className="w-full overflow-x-hidden bg-white">
        
        {/* --- HERO SECTION: PRESERVED STYLE --- */}
        <section className="relative min-h-[90vh] flex flex-col justify-center bg-[#0B1121] text-white overflow-hidden pt-20">
          {/* Abstract Security Grid */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full py-12">
              
              {/* Text Content */}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-900/30 border border-green-500/30 text-green-400 text-xs font-bold uppercase tracking-wider mb-6">
                  <ShieldCheck className="w-4 h-4" /> 
                  <span className="font-grotesk tracking-wide">Defensible Documentation</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight font-grotesk">
                  Audit-Proof Your <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                    IT Disposition.
                  </span>
                </h1>
                
                <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-xl border-l-2 border-green-500/50 pl-6">
                  In the world of data security, if it isn't documented, it didn't happen. We provide the <strong>serialized audit trails</strong> and <strong>Certificates of Destruction</strong> you need to satisfy regulators and internal compliance teams.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-green-600 rounded-lg hover:bg-green-700 transition-all shadow-lg hover:shadow-green-500/30 font-grotesk"
                  >
                    Request Sample Report
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <a 
                    href="#process" 
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-300 border border-slate-700 rounded-lg hover:bg-slate-800 hover:text-white transition-all font-grotesk"
                  >
                    View Audit Process
                  </a>
                </div>
              </motion.div>

              {/* Hero Visual: The Compliance Ledger */}
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="hidden lg:block relative">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/20 blur-[100px] rounded-full"></div>
                
                <div className="relative bg-slate-900 border border-slate-700 rounded-2xl p-6 shadow-2xl">
                  <div className="flex justify-between items-center border-b border-slate-800 pb-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-green-900/50 rounded text-green-400"><FileCheck className="w-6 h-6" /></div>
                      <div>
                        <div className="text-sm font-bold text-white font-grotesk">Certificate of Destruction</div>
                        <div className="text-xs text-slate-500 font-mono">ID: COD-2024-8842X</div>
                      </div>
                    </div>
                    <div className="px-3 py-1 bg-green-500/10 text-green-400 text-xs font-bold rounded-full border border-green-500/20 font-grotesk tracking-wide">
                      VERIFIED
                    </div>
                  </div>

                  <div className="space-y-3 font-mono text-sm">
                    <div className="flex justify-between py-2 border-b border-slate-800/50">
                      <span className="text-slate-500">Customer</span>
                      <span className="text-slate-200">Enterprise Healthcare Sys.</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-800/50">
                      <span className="text-slate-500">Service Date</span>
                      <span className="text-slate-200">Oct 24, 2023</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-800/50">
                      <span className="text-slate-500">Method</span>
                      <span className="text-slate-200">NIST 800-88 Purge</span>
                    </div>
                    
                    <div className="bg-slate-950 rounded p-3 mt-4">
                      <div className="text-[10px] text-slate-500 uppercase mb-2 font-grotesk">Asset Line Items</div>
                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between text-green-400">
                          <span>S/N: 8H29-9921-A</span>
                          <span>WIPE_PASS</span>
                        </div>
                        <div className="flex justify-between text-green-400">
                          <span>S/N: 7721-KK2L-9</span>
                          <span>SHRED_CONFIRMED</span>
                        </div>
                        <div className="flex justify-between text-green-400">
                          <span>S/N: MM21-0021-X</span>
                          <span>WIPE_PASS</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* --- 3. SGE "FEATURED SNIPPET" OPTIMIZATION --- */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="bg-green-50 rounded-3xl p-8 border border-green-100">
              <span className="text-xs font-bold text-green-600 uppercase tracking-widest font-grotesk mb-2 block">Standard Definition</span>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-grotesk">{SGE_CONTENT.definition.question}</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {SGE_CONTENT.definition.answer}
              </p>
              
              <div className="border-t border-green-200/50 pt-6">
                <h3 className="text-sm font-bold text-green-800 mb-3 font-grotesk">Documentation Includes:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {SGE_CONTENT.keyFeatures.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-green-900">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </section>

        {/* --- WHY IT MATTERS --- */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4 font-grotesk">Why Detailed Reporting Matters</h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                Regulatory fines for data breaches are rising. Your best defense is a complete, unbroken chain of custody.
              </p>
            </div>
            
            {/* Diagram: Benefits Visualization */}
            

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                { 
                  icon: AlertTriangle, 
                  color: "text-red-600",
                  bg: "bg-red-50",
                  title: "Mitigate Legal Risk", 
                  desc: "Without proof of destruction, a lost hard drive is a liability. Our certificates transfer that liability away from you."
                },
                { 
                  icon: Eye, 
                  color: "text-blue-600",
                  bg: "bg-blue-50",
                  title: "Satisfy Auditors", 
                  desc: "Whether it's an internal audit or an external regulatory review, our reporting packages provide the answers they need instantly."
                },
                { 
                  icon: ScrollText, 
                  color: "text-green-600",
                  bg: "bg-green-50",
                  title: "ESG Transparency", 
                  desc: "Prove your sustainability commitment. We provide weight-based diversion reports showing exactly what was recycled vs. resold."
                }
              ].map((card, i) => (
                <div key={i} className="p-8 rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl transition-all">
                  <div className={`w-14 h-14 ${card.bg} rounded-xl flex items-center justify-center mb-6`}>
                    <card.icon className={`w-7 h-7 ${card.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 font-grotesk">{card.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- THE AUDIT PROCESS TIMELINE --- */}
        <section id="process" className="py-24 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
                  <Search className="w-4 h-4" /> 
                  <span className="font-grotesk tracking-wide">Chain of Custody tracking</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-grotesk">Serialized Tracking from Start to Finish</h2>
                <p className="text-lg text-slate-600 mb-8">
                  We don't just "haul junk." We treat every asset as a data liability until it is proven sanitized. Here is how we maintain the chain of custody.
                </p>
                
                {/* Visual Diagram: Tracking Workflow */}
                

                <div className="space-y-8 relative mt-8">
                  {/* Vertical Line */}
                  <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-slate-200"></div>

                  {[
                    { step: "1", title: "On-Site Scan", desc: "Drivers scan serialized assets at pickup to initiate the chain of custody." },
                    { step: "2", title: "Secure Transport", desc: "GPS-tracked fleet transports assets directly to our secure processing facility." },
                    { step: "3", title: "Lab Audit", desc: "Technicians verify serial numbers against the pickup manifest for 100% accuracy." },
                    { step: "4", title: "Destruction/Wipe", desc: "Data is destroyed via NIST purge or physical shredding. Outcome is logged." },
                    { step: "5", title: "Certificate Issued", desc: "Final report and Certificate of Destruction are generated and emailed to you." }
                  ].map((item, i) => (
                    <div key={i} className="relative flex gap-6">
                      <div className="w-12 h-12 rounded-full bg-white border-2 border-blue-600 text-blue-600 font-bold flex items-center justify-center flex-shrink-0 z-10 shadow-sm font-grotesk">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 font-grotesk">{item.title}</h4>
                        <p className="text-slate-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Representation of Report */}
              <div className="relative">
                 <div className="bg-white p-8 rounded-2xl shadow-2xl border border-slate-100 rotate-1 hover:rotate-0 transition-transform duration-500">
                    <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-4">
                      <div className="flex items-center gap-2 text-slate-800 font-bold font-grotesk">
                        <FileCheck className="text-green-600" /> Master Audit Report
                      </div>
                      <Printer className="text-slate-400 w-5 h-5" />
                    </div>
                    
                    <div className="space-y-4">
                      <div className="grid grid-cols-4 text-xs font-bold text-slate-400 uppercase tracking-wider font-grotesk">
                        <span className="col-span-1">Asset Tag</span>
                        <span className="col-span-2">Serial Number</span>
                        <span className="col-span-1 text-right">Status</span>
                      </div>
                      
                      {[
                         { tag: "004392", sn: "5CD9192K1", status: "WIPED" },
                         { tag: "004393", sn: "88219-LL2", status: "SHREDDED" },
                         { tag: "004394", sn: "MXL11922", status: "WIPED" },
                         { tag: "004395", sn: "CN-0Y992", status: "RECYCLED" },
                         { tag: "004396", sn: "Unknown", status: "NON-DATA" },
                      ].map((row, idx) => (
                        <div key={idx} className="grid grid-cols-4 text-sm py-2 border-b border-slate-50">
                          <span className="col-span-1 text-slate-600 font-mono">{row.tag}</span>
                          <span className="col-span-2 text-slate-800 font-medium">{row.sn}</span>
                          <span className="col-span-1 text-right">
                            <span className={`text-[10px] px-2 py-1 rounded-full font-bold ${
                              row.status === 'WIPED' ? 'bg-blue-100 text-blue-700' : 
                              row.status === 'SHREDDED' ? 'bg-red-100 text-red-700' : 'bg-slate-100 text-slate-600'
                            }`}>
                              {row.status}
                            </span>
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 bg-slate-50 p-4 rounded-lg flex items-start gap-3">
                      <BadgeCheck className="text-green-600 w-6 h-6 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-bold text-slate-900 font-grotesk">Compliance Verified</p>
                        <p className="text-xs text-slate-500">This document certifies that all assets listed above have been processed in accordance with NIST 800-88 guidelines.</p>
                      </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- COMPLIANCE ECOSYSTEM --- */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 font-grotesk">Regulations We Help You Meet</h2>
            <p className="text-slate-600 max-w-3xl mx-auto mb-16">
              Our reporting structure is designed to satisfy the strict documentation requirements of heavily regulated industries.
            </p>

            {/* Visual Diagram: Compliance Standards */}
            

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {[
                { icon: Stethoscope, label: "HIPAA", desc: "For Healthcare Providers. Proof of patient data destruction." },
                { icon: Landmark, label: "SOX", desc: "For Public Companies. IT asset disposition controls." },
                { icon: Scale, label: "GLBA", desc: "For Financial Institutions. Customer information security." },
                { icon: Lock, label: "GDPR/CCPA", desc: "For Global Business. Consumer data privacy rights." }
              ].map((reg, i) => (
                <div key={i} className="p-6 border border-slate-200 rounded-xl hover:border-blue-500 transition-colors group">
                  <reg.icon className="w-10 h-10 text-slate-400 group-hover:text-blue-600 mx-auto mb-4 transition-colors" />
                  <h3 className="font-bold text-slate-900 mb-2 font-grotesk">{reg.label}</h3>
                  <p className="text-sm text-slate-500">{reg.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- FAQ SECTION --- */}
        <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 font-grotesk">Compliance FAQ</h2>
            <div className="space-y-4">
              {[
                { 
                  q: "Are your reports audit-ready for HIPAA/SOX?", 
                  a: "Yes. Our reports provide a serialized chain-of-custody and definite proof of data destruction, satisfying external auditors for HIPAA, SOX, GLBA, and FACTA." 
                },
                {
                   q: "Are you R2 or e-Stewards certified?",
                   a: "We operate in strict alignment with R2v3 and ISO 14001 methodologies for responsible recycling and data security, though we are not a certifying body. Our process provides the same level of downstream accountability and transparency."
                },
                { 
                  q: "How long do you retain compliance records?", 
                  a: "We retain all compliance records, certificates, and audit trails in our secure portal for a minimum of 7 years, accessible to you 24/7." 
                },
                { 
                  q: "Do you provide video evidence of destruction?", 
                  a: "Yes, upon request. For high-security clients, we can provide video files of the physical shredding process for specific lots." 
                }
              ].map((faq, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-blue-300 transition-colors">
                  <h3 className="font-bold text-slate-900 mb-2 font-grotesk flex items-center justify-between">
                    {faq.q}
                    <ChevronDown className="w-4 h-4 text-slate-400" />
                  </h3>
                  <p className="text-slate-600 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- FINAL CTA --- */}
        <section className="py-24 bg-slate-900 text-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6 font-grotesk">Ready to audit-proof your ITAD?</h2>
            <p className="text-xl text-slate-300 mb-10">
              Get the documentation you need to rest easy. Schedule a pickup today and see the difference a professional chain of custody makes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-slate-900 bg-white rounded-full hover:bg-slate-100 transition-all font-grotesk">
                Schedule Service
              </Link>
            </div>
          </div>
        </section>

        <ContactLocation />
      </main>
    </>
  );
};

export default AuditingComplianceReportingPage;