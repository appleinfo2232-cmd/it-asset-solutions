import React, { useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Globe, Package, Container, Truck,
  Laptop, Monitor, Server, HardDrive, Wifi,
  ArrowRight, ShieldCheck, Mail, FileText,
  Anchor, Layers, Scale, ChevronDown,
  Cpu, Plane, Ship, Factory,
  Box, Zap, Leaf, Recycle,
  GraduationCap, Stethoscope, Briefcase,
  FileSpreadsheet, Download, BadgeCheck,
  CheckCircle2, ClipboardList, Timer, CreditCard,
  XCircle, BarChart3, Users, Microscope, ClipboardCheck, History
} from 'lucide-react';
import ContactLocation from '../components/ContactLocation';

// --- 1. SGE OPTIMIZATION: CONTEXTUAL DEFINITIONS ---
// Optimized for AI bots to scrape "What is Wholesale ITAD?"
const SGE_CONTENT = {
  definition: {
    question: "What is Wholesale IT Asset Disposition (ITAD)?",
    answer: "Wholesale ITAD is the B2B process of aggregating, auditing, and reselling bulk quantities of retired enterprise hardware. Unlike retail, it focuses on container-load volumes of graded laptops, servers, and monitors sold directly to global resellers and refurbishers."
  },
  keyFeatures: [
    "Grade A/B/C Cosmetic Standards",
    "NIST-Compliant Data Wiping",
    "International Container Shipping",
    "Serialized Audit Manifests"
  ]
};

const WholesaleITEquipmentPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // --- 2. ADVANCED STRUCTURED DATA (JSON-LD) ---
  const structuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WholesaleStore",
        "@id": "https://www.itassetsolutions.com/wholesale-it-equipment",
        "name": "Global Wholesale IT Equipment Supplier",
        "provider": { "@id": "https://www.itassetsolutions.com/#organization" },
        "description": "Export-ready bulk used IT equipment. Laptops, desktops, and monitors for global resellers. Located in Farmington Hills, MI, shipping worldwide.",
        "areaServed": { "@type": "World" },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Farmington Hills",
          "addressRegion": "MI",
          "addressCountry": "US"
        },
        "priceRange": "$$$",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Wholesale Inventory",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Mixed Laptop Pallets" } },
            { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Bulk LCD Monitors" } },
            { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Used Desktop Towers" } },
            { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Server & Networking Lots" } }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do you ship internationally from Michigan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Our Farmington Hills facility is equipped for global export. We load 20ft/40ft containers and arrange air freight for buyers in Europe, Asia, Latin America, and the Middle East."
            }
          }
        ]
      }
    ]
  }), []);

  return (
    <>
      <Helmet>
        <title>Global Wholesale IT Equipment | Bulk Used Laptops & Monitors MI</title>
        <meta name="description" content="Direct source for bulk used IT equipment in Farmington Hills, MI. We supply Grade A/B laptops, desktops, and monitors to global resellers. Pallet and container shipping available worldwide." />
        <meta name="keywords" content="wholesale laptops Michigan, bulk used computers, export IT equipment, used monitors bulk, ITAD reseller, refurbished laptops wholesale, global IT supplier" />
        <link rel="canonical" href="https://www.itassetsolutions.com/wholesale-it-equipment" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <main className="w-full overflow-x-hidden bg-white">

        {/* --- HERO SECTION: PRESERVED STYLE --- */}
        <section className="relative w-full bg-[#050B14] text-white overflow-hidden flex flex-col lg:h-screen min-h-[600px] pt-20 lg:pt-0">
          
          {/* Background Effects */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/40 via-[#050B14] to-[#050B14]"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
          
          {/* Main Content Area */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full h-full py-8 lg:py-0">

              {/* Left Content */}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6 w-fit font-grotesk">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  Live Inventory Source: Michigan, USA
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight font-grotesk">
                  The Global Engine for <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">
                    Bulk IT Hardware.
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-400 mb-8 leading-relaxed max-w-xl border-l-2 border-indigo-500/50 pl-6">
                  Direct access to audit-verified enterprise assets. We supply <strong>Resellers & Wholesalers</strong> with container-load inventory daily. No brokers. No fluff.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] font-grotesk"
                  >
                    Subscribe to Daily List
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <a href="#inventory" className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-slate-300 border border-slate-800 bg-slate-900/50 rounded-lg hover:bg-slate-800 hover:text-white transition-all backdrop-blur-sm font-grotesk">
                    Browse Categories
                  </a>
                </div>

                <div className="flex flex-wrap gap-6 text-sm font-medium text-slate-500">
                  <div className="flex items-center gap-2"><Container className="w-5 h-5 text-indigo-500" /> Container Ready</div>
                  <div className="flex items-center gap-2"><Layers className="w-5 h-5 text-indigo-500" /> Palletized Freight</div>
                  <div className="flex items-center gap-2"><Globe className="w-5 h-5 text-indigo-500" /> Ships to 50+ Countries</div>
                </div>
              </motion.div>

              {/* Right Visual: Flat Technical Manifest */}
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="hidden lg:flex items-center justify-center h-full max-h-[500px]">
                <div className="relative w-full rounded-2xl bg-[#0F172A] border border-slate-800 p-1 shadow-2xl shadow-indigo-500/10">
                  <div className="bg-[#1E293B] px-4 py-3 rounded-t-xl flex items-center justify-between border-b border-slate-700">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                    </div>
                    <div className="text-xs font-mono text-slate-400">LIVE_MANIFEST_VIEWER.exe</div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-end border-b border-slate-800 pb-4">
                      <div>
                        <div className="text-xs text-indigo-400 font-bold mb-1 font-grotesk tracking-wide">CURRENT LOT</div>
                        <div className="text-2xl font-bold text-white font-grotesk">Mixed Laptops - Grade A</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-slate-500 mb-1 font-grotesk tracking-wide">TOTAL UNITS</div>
                        <div className="text-2xl font-bold text-green-400 font-grotesk">450</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="grid grid-cols-4 text-[10px] uppercase text-slate-500 font-bold tracking-wider px-2 font-grotesk">
                        <span>SKU</span>
                        <span>Product</span>
                        <span>Spec</span>
                        <span className="text-right">Qty</span>
                      </div>
                      {[
                        { sku: "DL-7490-A", name: "Dell Latitude 7490", spec: "i7-8650U / 16GB", qty: 150 },
                        { sku: "HP-840-G6", name: "HP EliteBook 840", spec: "i5-8365U / 8GB", qty: 210 },
                        { sku: "LN-T480", name: "Lenovo T480", spec: "i5-8250U / 16GB", qty: 90 },
                      ].map((item, i) => (
                        <div key={i} className="grid grid-cols-4 text-xs p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors border border-transparent hover:border-slate-700 items-center">
                          <span className="font-mono text-indigo-300">{item.sku}</span>
                          <span className="text-white font-medium">{item.name}</span>
                          <span className="text-slate-400">{item.spec}</span>
                          <span className="text-right font-mono text-green-400">{item.qty}</span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-4 flex gap-3">
                      <div className="flex-1 bg-indigo-900/20 border border-indigo-500/30 rounded p-3 text-center">
                        <div className="text-[10px] text-indigo-300 uppercase font-grotesk tracking-wide">Audit Status</div>
                        <div className="text-sm font-bold text-white flex items-center justify-center gap-2 font-grotesk">
                          <CheckCircle2 className="w-3 h-3 text-green-500" /> Passed
                        </div>
                      </div>
                      <div className="flex-1 bg-slate-800/50 border border-slate-700 rounded p-3 text-center">
                        <div className="text-[10px] text-slate-400 uppercase font-grotesk tracking-wide">Location</div>
                        <div className="text-sm font-bold text-white font-grotesk">Farmington Hills, MI</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- 3. SGE DEFINITION SNIPPET --- */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="bg-indigo-50 rounded-3xl p-8 border border-indigo-100">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest font-grotesk mb-2 block">Industry Terminology</span>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-grotesk">{SGE_CONTENT.definition.question}</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {SGE_CONTENT.definition.answer}
              </p>
              <div className="border-t border-indigo-200/50 pt-6">
                <h3 className="text-sm font-bold text-indigo-800 mb-3 font-grotesk">Wholesale Standards:</h3>
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

        {/* --- STATS BAR --- */}
        <div className="bg-slate-900 border-b border-slate-800 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-800/50">
              {[
                { label: "Assets Processed", val: "15k+", sub: "Monthly" },
                { label: "Active Buyers", val: "500+", sub: "Globally" },
                { label: "Inventory Cycle", val: "24h", sub: "Turnover" },
                { label: "Countries Served", val: "50+", sub: "Worldwide" },
              ].map((stat, i) => (
                <div key={i} className="text-center px-4">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-1 font-grotesk">{stat.val}</div>
                  <div className="text-sm font-bold text-indigo-400 uppercase tracking-wider font-grotesk">{stat.label}</div>
                  <div className="text-xs text-slate-500 mt-1">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- BRAND MARQUEE --- */}
        <div className="w-full bg-slate-50 border-y border-gray-200 py-8 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 font-grotesk">Inventory from Top Manufacturers</p>
            <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="text-2xl font-black text-slate-700 font-grotesk">DELL</span>
              <span className="text-2xl font-black text-slate-700 font-grotesk">HP</span>
              <span className="text-2xl font-black text-slate-700 font-grotesk">Lenovo</span>
              <span className="text-2xl font-black text-slate-700 font-grotesk">Apple</span>
              <span className="text-2xl font-black text-slate-700 font-grotesk">Microsoft</span>
              <span className="text-2xl font-black text-slate-700 font-grotesk">Samsung</span>
            </div>
          </div>
        </div>

        {/* --- SOURCING PROCESS STEPS --- */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-grotesk">How to Source Inventory</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                A streamlined process designed for high-volume buyers.
              </p>
            </div>
            
            {/* Visual Search: Sourcing Flow */}
            <div className="sr-only"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative mt-12">
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-indigo-200 to-transparent"></div>
              {[
                { icon: Mail, title: "1. Subscribe", desc: "Join our daily email list to get notified the moment inventory is processed." },
                { icon: FileSpreadsheet, title: "2. Review Manifest", desc: "Download the Excel file containing models, specs, and grades." },
                { icon: Zap, title: "3. Secure Lot", desc: "Reply instantly. Inventory is sold on a first-come, first-serve basis." },
                { icon: Ship, title: "4. Global Ship", desc: "We arrange freight or load your container for immediate export." }
              ].map((step, i) => (
                <div key={i} className="relative flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-50 flex items-center justify-center mb-6 z-10 shadow-xl shadow-indigo-500/10">
                    <step.icon className="w-10 h-10 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 font-grotesk">{step.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- DAILY DROPS --- */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6 font-grotesk">
                  <FileSpreadsheet className="w-4 h-4" /> Exclusive Access
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-grotesk">Daily Drops (Mon - Fri)</h2>
                <p className="text-lg text-gray-600 mb-8">
                  We don't post inventory on public marketplaces. Every weekday morning, we broadcast our latest processed lots via a private Excel manifest to our registered buyers.
                </p>
                
                {/* Visual Search: Manifest File */}
                <div className="sr-only"></div>

                <div className="space-y-6 mt-8">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 flex-shrink-0 shadow-sm"><Mail /></div>
                    <div>
                      <h4 className="font-bold text-gray-900 font-grotesk">Direct to Inbox</h4>
                      <p className="text-slate-600 text-sm">No login portals. Just a clean, sortable spreadsheet sent directly to you every morning.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-green-600 flex-shrink-0 shadow-sm"><Zap /></div>
                    <div>
                      <h4 className="font-bold text-gray-900 font-grotesk">Speed is Key</h4>
                      <p className="text-slate-600 text-sm">The best lots sell out quickly. Being on the daily list is the only way to access this stock.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3 text-white bg-blue-600 rounded-lg font-bold hover:bg-blue-700 transition-all font-grotesk">
                    Sign Up for Daily Lists
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-3xl transform rotate-3 opacity-10"></div>
                <div className="bg-white rounded-3xl p-8 text-slate-900 relative shadow-2xl border border-slate-100">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                    <div className="flex items-center gap-2"><FileSpreadsheet className="text-green-600" /><span className="font-mono text-sm font-bold">Daily_Inventory_List.xlsx</span></div>
                    <Download className="text-slate-400 w-4 h-4" />
                  </div>
                  <div className="space-y-2 font-mono text-xs">
                    <div className="grid grid-cols-4 text-slate-400 uppercase tracking-widest mb-2 font-grotesk"><span>Model</span><span>Spec</span><span>Grade</span><span>Qty</span></div>
                    <div className="grid grid-cols-4 border-b border-slate-50 pb-2"><span className="text-slate-900 font-bold">Dell 7490</span><span className="text-slate-500">i7/16/512</span><span className="text-green-600">A</span><span>150</span></div>
                    <div className="grid grid-cols-4 border-b border-slate-50 pb-2"><span className="text-slate-900 font-bold">HP 840 G6</span><span className="text-slate-500">i5/8/256</span><span className="text-blue-600">B</span><span>320</span></div>
                    <div className="grid grid-cols-4 border-b border-slate-50 pb-2"><span className="text-slate-900 font-bold">Lenovo T480</span><span className="text-slate-500">i5/16/256</span><span className="text-green-600">A</span><span>85</span></div>
                    <div className="grid grid-cols-4 border-b border-slate-50 pb-2 opacity-50"><span className="text-slate-900">iPad 9th</span><span className="text-slate-500">64GB WF</span><span className="text-yellow-600">C</span><span>200</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- LOGISTICS MASTERCLASS --- */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-12 translate-x-20"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-4 font-grotesk">
                <Globe className="w-4 h-4" /> Global Fulfillment
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-grotesk">Logistics Without Borders</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Our logistics team handles the complexity of international freight. We know how to pack, document, and ship to get your hardware through customs smoothly.
              </p>
            </div>
            
            {/* Visual Search: Container Loading */}
            <div className="sr-only"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {/* Air Freight */}
              <div className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <Plane className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-grotesk">Priority Air Cargo</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                  Best for high-value laptops and urgent restocks. We coordinate palletized air shipments to major hubs in UAE, UK, and Asia.
                </p>
                <div className="flex items-center text-xs font-bold text-blue-600 uppercase tracking-wider font-grotesk">
                  <Zap className="w-3 h-3 mr-2" /> 3-5 Day Transit
                </div>
              </div>
              {/* Ocean Freight */}
              <div className="group bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl hover:-translate-y-1 transition-all">
                <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-500 transition-colors">
                  <Ship className="w-8 h-8 text-indigo-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-grotesk">Ocean Containers</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  Maximize your margin with 20ft and 40ft HQ containers. Ideal for bulk desktops, monitors, and mixed pallets.
                </p>
                <div className="flex items-center text-xs font-bold text-indigo-400 uppercase tracking-wider font-grotesk">
                  <Container className="w-3 h-3 mr-2" /> Max Volume
                </div>
              </div>
              {/* Domestic Trucking */}
              <div className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all">
                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
                  <Truck className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-grotesk">Domestic LTL/FTL</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                  Shipping within the USA? We offer competitive LTL rates and same-day pickup for full truckload orders from our MI docks.
                </p>
                <div className="flex items-center text-xs font-bold text-green-600 uppercase tracking-wider font-grotesk">
                  <Truck className="w-3 h-3 mr-2" /> Coast to Coast
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- RECENT DEALS --- */}
        <section className="py-16 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <History className="text-slate-400 w-5 h-5" />
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest font-grotesk">Recent Bulk Transactions</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { dest: "Dubai, UAE", item: "500x Dell Latitude 7490", type: "Air Freight" },
                { dest: "Toronto, CA", item: "26 Pallets LCD Monitors", type: "LTL Truck" },
                { dest: "Rotterdam, NL", item: "40ft HC Container Mixed", type: "Ocean Freight" },
                { dest: "Texas, USA", item: "150x HP EliteBook 840", type: "Domestic Ground" },
              ].map((deal, i) => (
                <div key={i} className="bg-white p-4 rounded-lg border border-slate-200 flex items-start gap-4">
                  <div className="mt-1">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono mb-1">{deal.dest}</div>
                    <div className="text-sm font-bold text-slate-900 font-grotesk">{deal.item}</div>
                    <div className="text-xs text-indigo-600 mt-1 font-medium">{deal.type}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- THE QUALITY LAB --- */}
        <section className="py-24 bg-[#0B1120] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-900/30 border border-green-500/30 text-green-400 text-xs font-bold uppercase tracking-wider mb-6 font-grotesk">
                  <ClipboardCheck className="w-4 h-4" /> Quality Control
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 font-grotesk">Inside Our Audit Lab</h2>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  "Used" doesn't have to mean "Risky." Every asset that enters our facility passes through a strict chain of custody and a 3-stage technical audit before it's cleared for sale.
                </p>
                
                {/* Visual Search: Audit Lab */}
                <div className="sr-only"></div>

                <div className="space-y-6 mt-8">
                  {[
                    { title: "Data Sanitization", desc: "NIST 800-88 compliant wiping for all storage media.", icon: ShieldCheck },
                    { title: "Component Stress Test", desc: "Automated testing of CPU, RAM, Battery health, and Ports.", icon: Microscope },
                    { title: "Cosmetic Grading", desc: "Human inspection under standardized lighting conditions.", icon: Scale },
                  ].map((step, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0 border border-slate-700">
                        <step.icon className="w-6 h-6 text-indigo-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white font-grotesk">{step.title}</h4>
                        <p className="text-slate-400 text-sm">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-2xl opacity-20"></div>
                <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 relative">
                  <div className="flex justify-between items-center border-b border-slate-800 pb-4 mb-4">
                    <div className="text-sm font-mono text-slate-400">AUDIT_LOG_SAMPLE</div>
                    <div className="px-2 py-1 bg-green-900/50 text-green-400 text-xs rounded border border-green-800">PASSED</div>
                  </div>
                  <div className="space-y-3 font-mono text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Device ID:</span>
                      <span className="text-white">XYZ-9982-QA</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">LCD Test:</span>
                      <span className="text-green-400">OK (No Dead Pixels)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Battery Health:</span>
                      <span className="text-white">88% Capacity</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Keyboard/Trackpad:</span>
                      <span className="text-green-400">Functional</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Data Wipe:</span>
                      <span className="text-green-400">Verified (3-Pass)</span>
                    </div>
                    <div className="h-px bg-slate-800 my-2"></div>
                    <div className="flex justify-between items-center">
                      <span className="text-indigo-400 font-bold">FINAL GRADE</span>
                      <span className="text-xl font-bold text-white border border-white/20 px-3 py-1 rounded">GRADE A</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- INVENTORY CATEGORIES --- */}
        <section id="inventory" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 font-grotesk">Bulk Inventory Categories</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We process thousands of assets monthly. Here is what you can expect to find on our wholesale list.
              </p>
            </div>
            
            {/* Visual Search: Bulk Pallets */}
            <div className="sr-only"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {[
                { icon: Laptop, title: "Laptops", desc: "Business-class ultrabooks. Dell, HP, Lenovo.", detail: "Units per Pallet: ~150-200" },
                { icon: Monitor, title: "LCD Monitors", desc: "Matched lots of 24\" IPS displays.", detail: "Units per Pallet: ~40-60" },
                { icon: Cpu, title: "Desktop Towers", desc: "SFF/Micro i5/i7 processors.", detail: "Units per Pallet: ~60-80" },
                { icon: Server, title: "Enterprise Servers", desc: "1U/2U Rack servers. PowerEdge & ProLiant.", detail: "Units per Pallet: ~15-20" },
                { icon: Wifi, title: "Networking", desc: "Cisco switches, routers, firewalls.", detail: "Sold by: Box or Pallet" },
                { icon: HardDrive, title: "Components", desc: "Sorted RAM, CPUs, and wiped SSDs.", detail: "Sold by: Master Carton" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-indigo-400 hover:shadow-lg transition-all group">
                  <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 text-indigo-600 shadow-sm group-hover:scale-110 transition-transform">
                    <item.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-grotesk">{item.title}</h3>
                  <p className="text-gray-600 mb-4 h-12">{item.desc}</p>
                  <div className="pt-4 border-t border-gray-100 flex items-center text-sm font-semibold text-slate-500">
                    <Package className="w-4 h-4 mr-2" />
                    {item.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- INDUSTRIES WE POWER --- */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-grotesk">Industries We Power</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our consistent supply chain supports specialized resellers across multiple verticals globally.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600"><GraduationCap size={32} /></div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-grotesk">Education Resellers</h3>
                <p className="text-gray-600 text-sm">Supplying rugged Chromebooks and budget-friendly Windows laptops for K-12 and University districts.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600"><Briefcase size={32} /></div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-grotesk">MSPs & VARs</h3>
                <p className="text-gray-600 text-sm">Providing Grade A business laptops for "Hardware-as-a-Service" deployments and temporary staffing needs.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 text-purple-600"><Stethoscope size={32} /></div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-grotesk">Emerging Markets</h3>
                <p className="text-gray-600 text-sm">Exporting high-volume, tested i5/i7 desktops and monitors to Internet Cafes and Call Centers abroad.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- DETAILED GRADING MATRIX --- */}
        <section className="py-24 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-900/50 border border-green-500/50 text-green-400 text-sm font-bold mb-4 font-grotesk">
                <Scale className="w-4 h-4" /> Industry Standard Grading
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-grotesk">Transparent Grading Standards</h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                We utilize standard industry functional (F) and cosmetic (C) codes to describe inventory, ensuring you know exactly what you are buying.
              </p>
            </div>

            <div className="bg-slate-800 rounded-3xl border border-slate-700 overflow-hidden shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-950 text-slate-400 text-sm uppercase tracking-wider font-grotesk">
                      <th className="p-6 border-b border-slate-700">Retail Grade</th>
                      <th className="p-6 border-b border-slate-700 hidden md:table-cell">Functional Code</th>
                      <th className="p-6 border-b border-slate-700 hidden md:table-cell">Cosmetic Code</th>
                      <th className="p-6 border-b border-slate-700">Description</th>
                      <th className="p-6 border-b border-slate-700 hidden lg:table-cell">Use Case</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700 text-sm">
                    {/* New Sealed */}
                    <tr className="hover:bg-slate-700/30 transition-colors">
                      <td className="p-6 font-bold text-white font-grotesk">New Sealed</td>
                      <td className="p-6 text-green-400 font-mono hidden md:table-cell">F6</td>
                      <td className="p-6 text-green-400 font-mono hidden md:table-cell">C9</td>
                      <td className="p-6 text-slate-300">New, factory sealed in original packaging. Unused.</td>
                      <td className="p-6 text-slate-400 hidden lg:table-cell">Retail Resale</td>
                    </tr>
                    {/* New Open Box */}
                    <tr className="hover:bg-slate-700/30 transition-colors">
                      <td className="p-6 font-bold text-white font-grotesk">New Open Box</td>
                      <td className="p-6 text-green-400 font-mono hidden md:table-cell">F6</td>
                      <td className="p-6 text-green-400 font-mono hidden md:table-cell">C7-C8</td>
                      <td className="p-6 text-slate-300">New condition; packaging opened. Minimal or no use.</td>
                      <td className="p-6 text-slate-400 hidden lg:table-cell">Display Units / Returns</td>
                    </tr>
                    {/* Grade A */}
                    <tr className="hover:bg-slate-700/30 transition-colors bg-green-900/10">
                      <td className="p-6 font-bold text-white flex items-center gap-2 font-grotesk">
                        <span className="w-3 h-3 rounded-full bg-green-500 ring-2 ring-green-900"></span> Grade A
                      </td>
                      <td className="p-6 text-blue-400 font-mono hidden md:table-cell">F5</td>
                      <td className="p-6 text-blue-400 font-mono hidden md:table-cell">C5-C6</td>
                      <td className="p-6 text-slate-300">Fully tested. Minimal signs of use. No screen scratches.</td>
                      <td className="p-6 text-slate-400 hidden lg:table-cell">Direct to End-User</td>
                    </tr>
                    {/* Grade B */}
                    <tr className="hover:bg-slate-700/30 transition-colors bg-blue-900/10">
                      <td className="p-6 font-bold text-white flex items-center gap-2 font-grotesk">
                        <span className="w-3 h-3 rounded-full bg-blue-500 ring-2 ring-blue-900"></span> Grade B
                      </td>
                      <td className="p-6 text-blue-400 font-mono hidden md:table-cell">F5</td>
                      <td className="p-6 text-blue-400 font-mono hidden md:table-cell">C4-C5</td>
                      <td className="p-6 text-slate-300">Fully tested. Moderate wear (scratches/scuffs). Screen clear.</td>
                      <td className="p-6 text-slate-400 hidden lg:table-cell">Schools / Call Centers</td>
                    </tr>
                    {/* Grade C */}
                    <tr className="hover:bg-slate-700/30 transition-colors bg-yellow-900/10">
                      <td className="p-6 font-bold text-white flex items-center gap-2 font-grotesk">
                        <span className="w-3 h-3 rounded-full bg-yellow-500 ring-2 ring-yellow-900"></span> Grade C
                      </td>
                      <td className="p-6 text-blue-400 font-mono hidden md:table-cell">F5</td>
                      <td className="p-6 text-blue-400 font-mono hidden md:table-cell">C3-C4</td>
                      <td className="p-6 text-slate-300">Fully functional. Heavy wear or noticeable marks.</td>
                      <td className="p-6 text-slate-400 hidden lg:table-cell">Refurbishment Projects</td>
                    </tr>
                    {/* Parts */}
                    <tr className="hover:bg-slate-700/30 transition-colors bg-red-900/10">
                      <td className="p-6 font-bold text-white flex items-center gap-2 font-grotesk">
                        <span className="w-3 h-3 rounded-full bg-red-500 ring-2 ring-red-900"></span> For Parts
                      </td>
                      <td className="p-6 text-red-400 font-mono hidden md:table-cell">F2-F3</td>
                      <td className="p-6 text-red-400 font-mono hidden md:table-cell">C1-C3</td>
                      <td className="p-6 text-slate-300">Non-functional or missing parts. Significant damage.</td>
                      <td className="p-6 text-slate-400 hidden lg:table-cell">Harvesting / Repair</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-slate-950 p-4 text-center text-xs text-slate-500 border-t border-slate-800">
                * All data-bearing devices are wiped in accordance with NIST 800-88 standards regardless of cosmetic grade.
              </div>
            </div>
          </div>
        </section>

        {/* --- GLOBAL LOGISTICS MAP --- */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-grotesk">International Shipping Capabilities</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
              We know how to get hardware through customs. Our logistics team handles the complexity for you.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { icon: Truck, title: "Domestic Freight", desc: "LTL & FTL trucking to any US state." },
                { icon: Anchor, title: "Ocean Freight", desc: "20ft & 40ft container loading for export." },
                { icon: FileText, title: "Customs Docs", desc: "Commercial invoices & packing lists provided." },
                { icon: ShieldCheck, title: "Insured Shipments", desc: "Full value coverage during transit." }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center p-6 border border-gray-100 rounded-2xl hover:shadow-lg transition-all">
                  <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mb-4 text-indigo-600"><item.icon size={32} /></div>
                  <h3 className="font-bold text-gray-900 mb-2 font-grotesk">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- SUSTAINABILITY IMPACT --- */}
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 font-grotesk">Circular Economy Partner</h2>
              <p className="text-gray-600 mb-6">
                Buying used IT isn't just about profit margin; it's about sustainability. 
                By choosing refurbished over new, you extend the lifecycle of electronics and reduce e-waste. 
                We provide environmental impact estimates for our partners.
              </p>
              <div className="flex gap-4">
                <div className="flex items-center gap-2 text-green-600 font-bold font-grotesk"><Leaf className="w-5 h-5" /> Reduced Carbon</div>
                <div className="flex items-center gap-2 text-green-600 font-bold font-grotesk"><Recycle className="w-5 h-5" /> Zero Landfill</div>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-64 h-64 bg-green-50 rounded-full flex items-center justify-center border-4 border-green-100 shadow-xl">
                <Globe size={100} className="text-green-500" />
              </div>
            </div>
          </div>
        </section>

        {/* --- FAQ --- */}
        <section className="py-20 bg-gray-50 border-t border-gray-200">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 font-grotesk">Wholesale FAQ</h2>
            <div className="space-y-4">
              {[
                { 
                  q: "What countries do you ship to?", 
                  a: "We ship to most non-sanctioned countries. Major markets include UAE, Canada, Mexico, European Union, and Southeast Asia." 
                }, 
                { 
                  q: "What are your payment terms?", 
                  a: "For new international clients, we typically require wire transfer (T/T) before shipping. Domestic clients may qualify for terms after a credit check." 
                },
                {
                  q: "Are you R2 or e-Stewards certified?",
                  a: "We are not currently certified. However, our internal processes are strictly aligned with recognized industry standards (R2v3, ISO 14001) to ensure responsible recycling and data security."
                },
                {
                  q: "Do you provide data-wipe certificates?",
                  a: "Yes. Serialized data-sanitization records are available for all data-bearing assets upon request."
                },
                {
                  q: "Can you handle large multi-pallet or container orders?",
                  a: "Yes. We routinely fulfill multi-pallet and full-container load orders for domestic and international buyers."
                }
              ].map((faq, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"><h3 className="font-bold text-gray-900 mb-2 flex items-center justify-between font-grotesk">{faq.q} <ChevronDown className="w-4 h-4 text-gray-400" /></h3><p className="text-gray-600 text-sm">{faq.a}</p></div>
              ))}
            </div>
          </div>
        </section>

        {/* --- FINAL CTA --- */}
        <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6 font-grotesk">Access Global Inventory Today</h2>
            <p className="text-xl text-blue-100 mb-10">
              Our inventory moves fast. Join our email list to get the spreadsheet daily before it's gone.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4"><Link to="/contact" className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-blue-700 bg-white rounded-full hover:bg-gray-100 transition-all shadow-xl hover:shadow-blue-500/30 font-grotesk">Subscribe to Inventory List</Link></div>
            <p className="mt-6 text-sm text-white opacity-80">* Verification required. We sell to registered businesses only.</p>
          </div>
        </section>

        <ContactLocation />
      </main>
    </>
  );
};

export default WholesaleITEquipmentPage;