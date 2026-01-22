import React, { useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  DollarSign, TrendingUp, ArrowRight, Zap, Star, 
  Building2, Clock, FileText, Truck, Laptop, Server, 
  Monitor, HardDrive, Package, RefreshCw, ShieldCheck, 
  CreditCard, ListChecks, Banknote, Calculator, CheckCircle2,
  Lock, Smartphone
} from 'lucide-react';
import ContactLocation from '../components/ContactLocation';

// --- 1. SGE OPTIMIZATION: CONTEXTUAL DEFINITIONS ---
const SGE_CONTENT = {
  definition: {
    question: "How does Corporate IT Buyback work?",
    answer: "Corporate IT Buyback is an asset recovery process where businesses sell retired hardware to a specialized partner. Instead of paying for disposal, the company receives a cash payment or credit based on the secondary market value of the assets, maximizing ROI on depreciating infrastructure."
  },
  keyFeatures: [
    "Upfront Cash Offers",
    "Nationwide Logistics Handling",
    "NIST-Aligned Data Wiping",
    "Detailed Audit Reporting"
  ]
};

const CorporateITBuybackPage: React.FC = () => {
  useEffect(() => {
    // 2026 INP Optimization
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
        "@id": "https://www.itassetsolutions.com/services/corporate-it-buyback",
        "name": "Corporate IT Asset Buyback Program",
        "provider": { "@id": "https://www.itassetsolutions.com/#organization" },
        "description": "We buy used IT equipment from businesses. Sell your retired laptops, servers, monitors, and hard drives for cash. Nationwide pickup available.",
        "areaServed": { "@type": "Country", "name": "United States" },
        "serviceType": "Asset Recovery",
        "offers": {
          "@type": "Offer",
          "description": "Get a free valuation for your bulk IT assets."
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Equipment We Buy",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Used Enterprise Servers" } },
            { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Business Laptops (Dell, HP, Lenovo)" } },
            { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Bulk LCD Monitors" } },
            { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Hard Drives & SSDs" } }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What IT equipment do you buy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We buy almost all enterprise IT hardware including laptops, desktops, servers, storage arrays, networking gear, monitors, and loose components like CPUs and RAM."
            }
          },
          {
            "@type": "Question",
            "name": "Do you buy old or broken equipment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. While newer equipment yields higher payouts, we purchase older or non-functional assets for parts harvesting or scrap value as part of a bulk lot."
            }
          }
        ]
      }
    ]
  }), []);

  return (
    <>
      <Helmet>
        <title>Sell IT Equipment | Corporate Buyback for Laptops & Servers</title>
        <meta name="description" content="Turn retired IT assets into cash. We buy used laptops, servers, monitors, and hard drives from businesses nationwide. Get a fast, free valuation today." />
        <meta name="keywords" content="Sell IT equipment, corporate laptop buyback, sell used servers, IT asset recovery, bulk computer buyers, hard drive buyback, monitor recycling payout" />
        <link rel="canonical" href="https://www.itassetsolutions.com/services/corporate-it-buyback" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <main className="w-full overflow-x-hidden bg-white">
        
        {/* --- IMPROVED HERO SECTION --- */}
        <section className="relative pt-32 lg:pt-40 pb-24 bg-[#020617] text-white overflow-hidden min-h-[90vh] flex items-center">
          
          {/* Background Grid & Noise */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
          
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* LEFT: The Pitch */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center space-x-2 bg-green-900/30 border border-green-500/30 px-4 py-1.5 rounded-full mb-8">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-xs font-bold text-green-400 uppercase tracking-wider font-grotesk">Actively Buying: Servers, Laptops, Components</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-grotesk">
                  Maximum Value for <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">Retired Enterprise IT.</span>
                </h1>
                
                <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl">
                  Don't let depreciation eat your assets. We provide <strong>upfront cash offers</strong> and <strong>secure nationwide logistics</strong> for your bulk IT inventory.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-green-600 rounded-xl hover:bg-green-700 transition-all shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:shadow-[0_0_40px_rgba(34,197,94,0.5)] font-grotesk"
                  >
                    <Calculator className="w-5 h-5 mr-2" />
                    Get Free Valuation
                  </Link>
                  <a 
                    href="#what-we-buy" 
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-300 border border-slate-700 rounded-xl hover:bg-slate-800 hover:text-white transition-all font-grotesk"
                  >
                    View Accepted List
                  </a>
                </div>

                {/* Mini Trust Signals */}
                <div className="flex items-center gap-6 text-xs font-semibold text-slate-500 uppercase tracking-widest">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-blue-500" /> NIST 800-88 Aligned
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-green-500" /> Nationwide Pickup
                  </div>
                </div>
              </motion.div>

              {/* RIGHT: The Visual Hook (Fixed Height Container) */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative hidden lg:block h-[500px] w-full"
              >
                {/* Floating Glass Cards */}
                <div className="relative z-10 w-full h-full">
                  {/* Card 1: Server */}
                  <motion.div 
                    animate={{ y: [0, -10, 0] }} 
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-10 right-0 w-72 bg-slate-800/80 backdrop-blur-md border border-slate-600/50 rounded-2xl p-4 shadow-2xl"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="p-2 bg-indigo-500/20 rounded-lg"><Server className="w-6 h-6 text-indigo-400" /></div>
                      <span className="text-green-400 font-bold font-grotesk">+$850.00</span>
                    </div>
                    <div className="text-sm font-bold text-white font-grotesk">Dell PowerEdge R740</div>
                    <div className="text-xs text-slate-400">Qty: 15 Units • Grade A</div>
                  </motion.div>

                  {/* Card 2: Laptop */}
                  <motion.div 
                    animate={{ y: [0, 15, 0] }} 
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-40 right-12 w-72 bg-slate-800/80 backdrop-blur-md border border-slate-600/50 rounded-2xl p-4 shadow-2xl z-20"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="p-2 bg-blue-500/20 rounded-lg"><Laptop className="w-6 h-6 text-blue-400" /></div>
                      <span className="text-green-400 font-bold font-grotesk">+$12,400.00</span>
                    </div>
                    <div className="text-sm font-bold text-white font-grotesk">Lenovo ThinkPad X1</div>
                    <div className="text-xs text-slate-400">Qty: 50 Units • Bulk Lot</div>
                  </motion.div>

                  {/* Card 3: Total Quote */}
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="absolute top-72 right-0 w-80 bg-green-600 text-white rounded-2xl p-6 shadow-2xl z-30"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-green-100 text-sm font-bold font-grotesk tracking-wide">ESTIMATED PAYOUT</div>
                      <Zap className="w-5 h-5 text-green-200 fill-current" />
                    </div>
                    <div className="text-4xl font-bold font-grotesk tracking-tight">$42,850.00</div>
                    <div className="mt-4 pt-4 border-t border-green-500 flex items-center justify-between text-xs text-green-100">
                      <span>Status: Ready to Wire</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </motion.div>
                </div>

                {/* Decorative Elements behind cards */}
                <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-tr from-green-500/20 to-blue-500/20 rounded-full blur-3xl -z-10" />
              </motion.div>

            </div>
          </div>
        </section>

        {/* --- 3. SGE "FEATURED SNIPPET" OPTIMIZATION --- */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="bg-green-50 rounded-3xl p-8 border border-green-100">
              <span className="text-xs font-bold text-green-600 uppercase tracking-widest font-grotesk mb-2 block">Core Definition</span>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-grotesk">{SGE_CONTENT.definition.question}</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {SGE_CONTENT.definition.answer}
              </p>
              
              <div className="border-t border-green-200/50 pt-6">
                <h3 className="text-sm font-bold text-green-800 mb-3 font-grotesk">Program Benefits:</h3>
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

        {/* --- 5. WHAT WE BUY (Expanded List) --- */}
        <section id="what-we-buy" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4 font-grotesk">
                Inventory We Accept
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mb-4 font-grotesk">We Buy It All</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From data center infrastructure to employee workstations, if it has value, we make an offer.
              </p>
            </div>
            
            {/* AI Image Trigger */}
            

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {[
                { 
                  title: "Laptops & Notebooks", 
                  desc: "Dell Latitude, HP EliteBook, Lenovo ThinkPad, Apple MacBook Pro/Air.", 
                  icon: Laptop,
                  color: "text-blue-600",
                  bg: "bg-blue-50"
                },
                { 
                  title: "Enterprise Servers", 
                  desc: "Dell PowerEdge, HP ProLiant, Cisco UCS, Rack & Tower Servers.", 
                  icon: Server,
                  color: "text-indigo-600",
                  bg: "bg-indigo-50"
                },
                { 
                  title: "LCD Monitors", 
                  desc: "Bulk 24\"+ Business Monitors (Dell, HP, Samsung, LG).", 
                  icon: Monitor,
                  color: "text-cyan-600",
                  bg: "bg-cyan-50"
                },
                { 
                  title: "Components & Parts", 
                  desc: "CPUs (Intel/AMD), RAM (DDR4/5), SSDs, Hard Drives (Wiped).", 
                  icon: HardDrive,
                  color: "text-emerald-600",
                  bg: "bg-emerald-50"
                },
                { 
                  title: "Networking Gear", 
                  desc: "Cisco Switches, Routers, Firewalls, Wireless Access Points.", 
                  icon: Zap,
                  color: "text-orange-600",
                  bg: "bg-orange-50"
                },
                { 
                  title: "Tablets & Mobile", 
                  desc: "iPads, Samsung Galaxy Tabs, Enterprise Handheld Scanners.", 
                  icon: Smartphone, // Updated to Smartphone icon for better context
                  color: "text-purple-600",
                  bg: "bg-purple-50"
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-all hover:-translate-y-1">
                  <div className={`w-14 h-14 ${item.bg} rounded-xl flex items-center justify-center mb-6 ${item.color}`}>
                    <item.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-grotesk">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 6. THE PROCESS (Speed Focused) --- */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 font-grotesk">Sell in 3 Simple Steps</h2>
                <p className="text-gray-600 mb-8 text-lg">
                  We stripped away the complexity. No auctions, no waiting for consignments. Just a direct purchase offer.
                </p>
                
                {/* AI Diagram Trigger */}
                

                <div className="space-y-8 mt-8">
                  {[
                    { title: "1. Send Your List", desc: "Upload a spreadsheet or simply email us a list of your equipment.", icon: ListChecks },
                    { title: "2. Get an Offer", desc: "We analyze market data and send you a firm purchase offer within 48 hours.", icon: Calculator },
                    { title: "3. Ship & Get Paid", desc: "We arrange the truck. Once verified, we wire the funds.", icon: CreditCard }
                  ].map((step, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 text-green-700 font-bold">
                        <step.icon size={20} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 font-grotesk">{step.title}</h4>
                        <p className="text-gray-600">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <Link to="/contact" className="text-green-600 font-bold flex items-center hover:gap-2 transition-all text-lg font-grotesk">
                    Submit Your List Now <ArrowRight className="w-5 h-5 ml-1" />
                  </Link>
                </div>
              </div>
              
              {/* Visual Trust Indicator */}
              <div className="relative bg-slate-900 rounded-3xl p-8 text-white h-full flex flex-col justify-between overflow-hidden border border-slate-700">
                <div className="absolute top-0 right-0 p-8 opacity-20">
                  <TrendingUp size={120} />
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-2 font-grotesk">Our Purchase Guarantee</h3>
                  <p className="text-slate-400">We don't cherry-pick. We bid on the whole lot.</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-8 relative z-10">
                  <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                    <p className="text-2xl font-bold text-green-400 font-grotesk">$12M+</p>
                    <p className="text-xs text-slate-300">Paid to Clients</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                    <p className="text-2xl font-bold text-blue-400 font-grotesk">48 Hr</p>
                    <p className="text-xs text-slate-300">Quote Turnaround</p>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-slate-700 relative z-10">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-6 h-6 text-green-500" />
                    <span className="text-sm font-medium">Includes NIST 800-88 Data Wipe</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 7. FAQ --- */}
        <section className="py-20 bg-gray-50 border-t border-gray-200">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 font-grotesk">Buyback FAQ</h2>
            <div className="space-y-4">
              {[
                { 
                  q: "Is there a minimum quantity?", 
                  a: "Yes. For a pickup, we typically require at least 10-20 assets (laptops/desktops) or fewer if they are high-value servers. Contact us to check eligibility." 
                },
                { 
                  q: "What if the equipment is locked (BIOS/iCloud)?", 
                  a: "We can often unlock BIOS-locked commercial units. However, iCloud-locked Apple devices have significantly reduced value." 
                },
                { 
                  q: "Do you pay for shipping?", 
                  a: "Yes. For qualifying bulk lots, we cover 100% of the logistics and shipping costs. The offer you see is the net amount you get." 
                }
              ].map((faq, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-green-200 transition-colors">
                  <h3 className="font-bold text-gray-900 mb-2 font-grotesk">{faq.q}</h3>
                  <p className="text-gray-600 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 8. FINAL CTA --- */}
        <section className="py-24 bg-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-grotesk">Ready to Sell?</h2>
            <p className="text-xl text-gray-600 mb-10">
              Get the highest recovery value for your used IT assets. Fast quotes, secure pickup, and prompt payment.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-green-600 rounded-full hover:bg-green-700 transition-all shadow-lg hover:shadow-green-500/30 font-grotesk">
                Get Your Offer Now
              </Link>
            </div>
          </div>
        </section>

        <ContactLocation />
      </main>
    </>
  );
};

export default CorporateITBuybackPage;