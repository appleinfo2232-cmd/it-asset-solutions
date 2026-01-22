import React, { useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, Globe, BarChart3, CheckCircle2, 
  DollarSign, ArrowRight, Wrench, Search, 
  PieChart, LineChart, ChevronDown, ShieldCheck, 
  Recycle, Cpu 
} from 'lucide-react';
import ContactLocation from '../components/ContactLocation';

// --- 1. SGE & AI OPTIMIZATION: CONTEXTUAL DEFINITIONS ---
const SGE_CONTENT = {
  definition: {
    question: "What is IT Asset Value Recovery?",
    answer: "IT Asset Value Recovery is a specialized ITAD (IT Asset Disposition) process that captures residual financial value from retired enterprise hardware. Unlike basic recycling, it involves rigorous testing, component-level repair, and cosmetic refurbishment to resell assets as 'Grade A' stock in secondary markets."
  },
  keyTakeaways: [
    "Monetizes retired servers, laptops, and networking gear.",
    // UPDATED: "compliant" -> "aligned" (Safe Language)
    "Data is destroyed via NIST 800-88 aligned wiping before resale.",
    "Extends product lifecycles, reducing e-waste.",
    "Offers Revenue Share or Direct Buyout financial models."
  ]
};

const ITAssetValueRecoveryPage: React.FC = () => {
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
        "@id": "https://www.itassetsolutions.com/services/it-asset-value-recovery",
        "name": "IT Asset Value Recovery & Remarketing",
        "provider": { 
            "@id": "https://www.itassetsolutions.com/#organization",
            "name": "IT Asset Solutions",
            // 2026 MANDATE: AVIF Logo
            "logo": "https://www.itassetsolutions.com/it-asset-solutions-new-logo.avif",
            "image": "https://www.itassetsolutions.com/it-asset-solutions-new-logo.avif"
        },
        "description": "Enterprise service to test, repair, and resell retired IT hardware. Maximizes ROI through direct buyout or revenue sharing.",
        "areaServed": { "@type": "Country", "name": "United States" },
        "serviceType": "IT Asset Disposition",
        "category": "Business > IT Services",
        "audience": {
          "@type": "BusinessAudience",
          "audienceType": "CTOs, IT Managers, Procurement Officers"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Value Recovery Tiers",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Direct Hardware Buyout" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Consignment / Revenue Share" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Component Harvesting" } }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How is IT asset value calculated?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Value is determined by the secondary market demand, cosmetic condition (Grade A/B/C), hardware specifications (RAM/CPU/Storage), and functional health. We utilize real-time global pricing indexes."
            }
          },
          {
            "@type": "Question",
            "name": "Is data safe during value recovery?",
            "acceptedAnswer": {
              "@type": "Answer",
              // UPDATED: "compliant" -> "aligned"
              "text": "Yes. Before any value assessment or resale occurs, all storage media undergoes NIST 800-88 aligned data sanitization. Drives that cannot be wiped are physically shredded."
            }
          }
        ]
      }
    ]
  }), []);

  return (
    <>
      <Helmet>
        <title>IT Asset Value Recovery | Remarketing & Revenue Share ITAD</title>
        {/* UPDATED: "compliant" -> "aligned" */}
        <meta name="description" content="Turn retired IT assets into capital. Our Value Recovery process tests, refurbishes, and resells your hardware. NIST-aligned data safety. Get a quote today." />
        <meta name="keywords" content="IT asset value recovery, ITAD revenue share, sell used enterprise servers, laptop remarketing, corporate computer recycling ROI" />
        <link rel="canonical" href="https://www.itassetsolutions.com/services/it-asset-value-recovery" />
        {/* 2026 SPEED: Preconnect to Maps API */}
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <main className="w-full overflow-x-hidden bg-white">
        
        {/* --- HERO SECTION: VALUE PROPOSITION --- */}
        <section className="relative pt-32 pb-20 bg-[#0f172a] text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#0f172a] to-emerald-950 opacity-90"></div>
          {/* Noise texture for modern aesthetic */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center space-x-2 bg-emerald-900/50 border border-emerald-500/30 px-4 py-2 rounded-full mb-6">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm font-bold text-emerald-100 font-grotesk tracking-wide uppercase">ROI-Focused ITAD</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-grotesk">
                  Don't Just Recycle. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Recover Capital.</span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Your retired IT assets are a financial resource. We extend the lifecycle of your hardware through professional <strong>refurbishment and remarketing</strong>, returning budget to your organization.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-emerald-600 rounded-full hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-500/30 font-grotesk"
                    aria-label="Request a valuation quote for your IT assets"
                  >
                    Get Valuation Quote
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <a 
                    href="#how-it-works" 
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-gray-300 border border-gray-600 rounded-full hover:bg-gray-800 transition-all font-grotesk"
                  >
                    View Process
                  </a>
                </div>
              </motion.div>

              {/* VISUAL CHART: ROI COMPARISON */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hidden lg:block relative"
              >
                <div className="bg-slate-800/80 backdrop-blur-md p-8 rounded-2xl border border-slate-700 shadow-2xl">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h3 className="text-lg font-bold text-white font-grotesk">The Remarketing Advantage</h3>
                      <p className="text-xs text-slate-400">Recovery Value vs. Scrap Value</p>
                    </div>
                    <BarChart3 className="w-8 h-8 text-emerald-500" />
                  </div>
                  
                  {/* AI Diagram Trigger: Value Comparison */}
                  

                  <div className="space-y-6 mt-4">
                    {/* Visual representation of data for easy scanning */}
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-slate-300">Scrap Recycler (Raw Materials)</span>
                        <span className="text-slate-400 font-grotesk font-bold">~10% Return</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-3">
                        <div className="bg-slate-500 h-3 rounded-full w-[10%]"></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-white font-bold">Our Value Recovery</span>
                        <span className="text-emerald-400 font-bold font-grotesk">Up to 60% Return</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-3">
                        <div className="bg-gradient-to-r from-emerald-500 to-teal-400 h-3 rounded-full w-[60%] shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>
                      </div>
                    </div>
                  </div>

                    
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* --- 3. SGE "FEATURED SNIPPET" OPTIMIZATION --- */}
        {/* This section allows AI to easily grab the "What is this?" definition */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="bg-emerald-50 rounded-3xl p-8 border border-emerald-100">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest font-grotesk mb-2 block">Core Definition</span>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-grotesk">{SGE_CONTENT.definition.question}</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {SGE_CONTENT.definition.answer}
              </p>
              
              <div className="border-t border-emerald-200/50 pt-6">
                <h3 className="text-sm font-bold text-emerald-800 mb-3 font-grotesk">Key Benefits:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {SGE_CONTENT.keyTakeaways.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-emerald-900">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </section>

        {/* --- 4. THE PROCESS (Visual & Logical) --- */}
        <section id="how-it-works" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 font-grotesk">Maximizing Value: The Workflow</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We utilize a standardized audit process to identify assets with resale potential versus those requiring environmentally safe recycling.
              </p>
            </div>
            
            {/* AI Diagram Trigger: Workflow */}
            

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {[
                { 
                  icon: Search, 
                  title: "1. Audit & Triage", 
                  desc: "Assets are logged, and specs are verified. We separate 'Grade A/B' resale units from 'End-of-Life' recycling units." 
                },
                { 
                  icon: ShieldCheck, 
                  title: "2. Data Sanitization", 
                  // UPDATED: "compliant" -> "guidelines"
                  desc: "Before any repairs, data is wiped according to NIST 800-88 guidelines. Failed drives are physically destroyed." 
                },
                { 
                  icon: Wrench, 
                  title: "3. Refurbishment", 
                  desc: "We perform cosmetic repairs, battery replacements, and component upgrades to increase the resale grade." 
                },
                { 
                  icon: Globe, 
                  title: "4. Multi-Channel Sales", 
                  desc: "Inventory is listed across global B2B and retail channels to secure the highest market price." 
                }
              ].map((step, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1 group">
                  <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <step.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-grotesk">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 5. FINANCIAL MODELS (Transparency) --- */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Column: Text */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 font-grotesk">Flexible Payout Models</h2>
                <p className="text-gray-600 mb-8 text-lg">
                  Every organization has different capital requirements. We offer two distinct models to align with your financial goals.
                </p>
                
                <div className="space-y-6">
                  <div className="flex gap-4 p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:border-blue-200 transition-colors">
                    <div className="p-3 bg-blue-100 rounded-full h-fit text-blue-600"><DollarSign size={24} /></div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg font-grotesk">Direct Buyout (Upfront Cash)</h4>
                      <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                        We purchase your inventory outright after a preliminary audit.
                        <br /><span className="text-blue-600 font-semibold text-xs">Best for: Immediate cash flow, zero risk, simple accounting.</span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 p-6 rounded-2xl border border-emerald-100 bg-emerald-50/50 shadow-sm hover:border-emerald-300 transition-colors">
                    <div className="p-3 bg-emerald-100 rounded-full h-fit text-emerald-600"><PieChart size={24} /></div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg font-grotesk">Revenue Share (Consignment)</h4>
                      <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                        We refurbish and sell the assets, then split the net profit with you.
                        <br /><span className="text-emerald-600 font-semibold text-xs">Best for: Maximizing total ROI (typically 20-30% higher return).</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column: Visual Checklist */}
              <div className="relative">
                 
                <div className="bg-slate-900 text-white p-10 rounded-3xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-6 opacity-10"><LineChart size={140} /></div>
                  
                  <h3 className="text-2xl font-bold mb-6 relative z-10 font-grotesk">Factors Influencing Value</h3>
                  <p className="text-slate-400 text-sm mb-6 relative z-10">To get the maximum quote, ensure your assets meet these criteria where possible:</p>
                  
                  <ul className="space-y-4 relative z-10">
                    {[
                      "BIOS/Cloud Locks Removed (Essential)",
                      "Functional Batteries (>80% Health)",
                      "Original Power Adapters Included",
                      "Screen Grade (No pressure marks/scratches)",
                      "Cosmetic Grade (No dents in chassis)"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
                        <span className="text-slate-200 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- 6. TARGETED FAQ FOR SGE --- */}
        <section className="py-20 bg-gray-50 border-t border-gray-200">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 font-grotesk">Frequently Asked Questions</h2>
            <p className="text-center text-gray-500 mb-12">Common questions regarding the remarketing process.</p>
            
            <div className="space-y-4">
              {[
                { 
                  q: "What types of equipment hold the most value?", 
                  a: "Generally, enterprise-grade laptops (Dell Latitude, Lenovo ThinkPad, HP EliteBook) and servers (Dell PowerEdge, HPE ProLiant) manufactured within the last 4-5 years hold significant value. Consumer-grade electronics typically depreciate faster." 
                },
                { 
                  q: "Do I need to list the specs of every machine?", 
                  a: "Not necessarily. For the initial quote, a general list of models and quantities is sufficient. Our team performs a detailed audit upon receipt to determine exact configurations and grades." 
                },
                { 
                  q: "What happens to equipment with no resale value?", 
                  a: "Assets deemed 'End-of-Life' (EOL) are channeled into our recycling stream. We strictly adhere to a zero-landfill policy, breaking down units into raw commodities (plastic, steel, copper) for reuse." 
                }
              ].map((faq, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-gray-300 transition-colors">
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

        {/* --- 7. FINAL CALL TO ACTION --- */}
        <section className="py-24 bg-white text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <div className="inline-block p-3 rounded-full bg-emerald-100 text-emerald-700 mb-6">
              <Recycle size={24} />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-grotesk">Stop Leaving Capital on the Shelf</h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Technology depreciates daily. The sooner you audit your retired inventory, the higher your return will be.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-emerald-600 rounded-full hover:bg-emerald-700 transition-all shadow-xl hover:shadow-emerald-500/30 font-grotesk transform hover:-translate-y-1">
                Start Your Audit
              </Link>
              <Link to="/services" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition-all font-grotesk">
                Explore Other Services
              </Link>
            </div>
          </div>
        </section>

        <ContactLocation />
      </main>
    </>
  );
};

export default ITAssetValueRecoveryPage;