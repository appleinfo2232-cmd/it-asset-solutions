import React, { useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Lock, Globe, Users, 
  Target, Leaf, ArrowRight, CheckCircle2,
  Scale, Heart, Star,
  BarChart3, Server, FileText, MapPin,
  Building2, Stethoscope, Landmark, GraduationCap, HardDrive, Truck,
  ShieldAlert, Laptop, Tag, ShoppingCart, RefreshCw, HelpCircle
} from 'lucide-react';
import ContactLocation from '../components/ContactLocation';
import { aboutPageSEO } from '../config/seo';

// --- AI ENTITY DEFINITION ---
const COMPANY_PROFILE = {
  name: "IT Asset Solutions",
  founded: "2020",
  location: "Farmington Hills, Michigan",
  mission: "To provide secure, NIST-aligned, and profitable IT Asset Disposition (ITAD) services, transitioning enterprise hardware into the circular economy.",
  core_competencies: ["NIST 800-88 Data Sanitization", "IT Asset Remarketing", "Global Logistics", "Value Recovery"]
};

const AboutPage: React.FC = () => {
  useEffect(() => {
    // 2026 INP Optimization
    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(() => window.scrollTo(0, 0));
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  // --- STRUCTURED DATA ---
  const structuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "IT Asset Solutions",
    "legalName": "IT Asset Solutions LLC",
    "url": "https://www.itassetsolutions.com",
    "logo": "https://www.itassetsolutions.com/it-asset-solutions-new-logo.avif",
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "23985 Industrial Park Dr",
      "addressLocality": "Farmington Hills",
      "addressRegion": "MI",
      "postalCode": "48335",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "sales",
      "telephone": "+1-248-602-3832",
      "areaServed": "US",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://www.linkedin.com/company/it-asset-solutions",
      "https://www.facebook.com/people/It-Asset-Solutions/100083165808782/",
      "https://www.crunchbase.com/organization/it-asset-solutions",
      "https://twitter.com/ITAssetSols"
    ],
    "knowsAbout": [
      { "@type": "Thing", "name": "IT Asset Disposition", "sameAs": "https://www.wikidata.org/wiki/Q1655079" },
      { "@type": "Thing", "name": "Refurbishment", "sameAs": "https://www.wikidata.org/wiki/Q1503932" }
    ],
    "description": "Premier IT Asset Disposition (ITAD) provider based in Michigan, specializing in data center decommissioning, secure data destruction, and wholesale IT remarketing."
  }), []);

  return (
    <>
      <Helmet>
        <title>{aboutPageSEO?.title || "About IT Asset Solutions | Secure ITAD & Remarketing"}</title>
        <meta name="description" content={aboutPageSEO?.metaDescription || "Trusted by 675+ companies. We provide NIST-aligned data destruction and wholesale IT remarketing services in Farmington Hills, MI and nationwide."} />
        <link rel="canonical" href="https://www.itassetsolutions.com/about" />
        <link rel="preload" as="image" href="https://grainy-gradients.vercel.app/noise.svg" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <main className="w-full overflow-x-hidden bg-white">
        
        {/* --- HERO SECTION (UPDATED BACKGROUND) --- */}
        <section className="relative pt-32 pb-20 bg-[#0f172a] text-white overflow-hidden">
          {/* Layer 1: Base Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#0f172a] to-indigo-950 opacity-90 z-0"></div>
          
          {/* Layer 2: Real-Time Database Server Image Overlay */}
          <div 
            className="absolute inset-0 opacity-40 bg-cover bg-center mix-blend-overlay z-0"
            style={{ 
              // Updated to a high-tech, glowing server room image
              backgroundImage: `url("https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=2000")` 
            }} 
          ></div>
          
          {/* Layer 3: Noise Texture */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-0"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
                  
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed border-l-2 border-indigo-500/50 pl-6 mt-6">
                    We secure your data and <strong className="text-white">maximize your return</strong> by refurbishing and remarketing retired assets.
                    <br /><span className="text-sm opacity-70 mt-1 block">NIST 800-88 Aligned • Wholesale Remarketing • Global Export</span>
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button onClick={() => window.location.href = '/contact'} className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/30 font-grotesk">
                      Start Recovery
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

                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="hidden lg:block relative"
                >
                  <div className="bg-slate-800/80 backdrop-blur-md p-8 rounded-2xl border border-slate-700 shadow-2xl relative overflow-hidden">
                    <div className="flex items-center justify-between mb-8 relative z-10">
                      <div>
                        <h3 className="text-lg font-bold text-white font-grotesk">Asset Recovery Ops</h3>
                        <p className="text-xs text-slate-400">Status: Processing for Resale</p>
                      </div>
                      <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></div>
                    </div>

                    <div className="relative z-10 space-y-4">
                      <div className="flex items-center gap-4 p-3 rounded-xl bg-slate-900/50 border border-slate-700">
                        <div className="p-2 bg-blue-500/20 text-blue-400 rounded-lg"><Lock size={20} /></div>
                        <div>
                          <div className="text-xs text-slate-400 uppercase font-bold">Step 1: Sanitize</div>
                          <div className="text-sm font-bold text-white">NIST 800-88 Aligned</div>
                        </div>
                        <CheckCircle2 className="ml-auto text-green-500 w-5 h-5" />
                      </div>

                      <div className="flex items-center gap-4 p-3 rounded-xl bg-slate-900/50 border border-slate-700">
                        <div className="p-2 bg-purple-500/20 text-purple-400 rounded-lg"><RefreshCw size={20} /></div>
                        <div>
                          <div className="text-xs text-slate-400 uppercase font-bold">Step 2: Refurbish</div>
                          <div className="text-sm font-bold text-white">Testing & Grading</div>
                        </div>
                        <CheckCircle2 className="ml-auto text-green-500 w-5 h-5" />
                      </div>

                      <div className="flex items-center gap-4 p-3 rounded-xl bg-slate-900/50 border border-slate-700">
                        <div className="p-2 bg-green-500/20 text-green-400 rounded-lg"><Tag size={20} /></div>
                        <div>
                          <div className="text-xs text-slate-400 uppercase font-bold">Step 3: Remarket</div>
                          <div className="text-sm font-bold text-white">Global Resale Channels</div>
                        </div>
                        <CheckCircle2 className="ml-auto text-green-500 w-5 h-5" />
                      </div>
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-indigo-500/20 blur-[50px] rounded-full z-0"></div>
                  </div>
                </motion.div>
             </div>
          </div>
        </section>

        {/* --- NEW SECTION: ASSET REMARKETING & WHOLESALE --- */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-6 font-grotesk">
                  <ShoppingCart className="w-4 h-4" /> Wholesale & Retail
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-grotesk">
                  IT Asset Remarketing:<br />
                  <span className="text-slate-500">Premium Used Equipment</span>
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  We bridge the gap between corporate disposal and the secondary market. By rigorously testing and refurbishing retired assets, we provide high-quality used technology to schools, businesses, and wholesale buyers globally.
                </p>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0 text-slate-700">
                      <Laptop className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">Used Corporate Laptops</h4>
                      <p className="text-slate-600 text-sm">Dell Latitude, Lenovo ThinkPad, and HP EliteBook fleets. Grade A/B units available in bulk.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0 text-slate-700">
                      <Server className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">Enterprise Servers & Storage</h4>
                      <p className="text-slate-600 text-sm">Refurbished Dell PowerEdge and HP ProLiant servers, tested for data center redeployment.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0 text-slate-700">
                      <RefreshCw className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">Testing & Grading</h4>
                      <p className="text-slate-600 text-sm">Every device undergoes a multi-point inspection. We clearly define cosmetic grades so you know exactly what you are buying.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <button onClick={() => window.location.href = '/contact'} className="inline-flex items-center text-indigo-600 font-bold hover:text-indigo-700 transition-colors">
                    Request Wholesale Inventory List <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-slate-900 to-indigo-950 rounded-3xl p-1 overflow-hidden shadow-2xl">
                  <div className="bg-slate-900/50 backdrop-blur-sm rounded-[22px] p-8 h-full">
                    <div className="flex items-center justify-between mb-8 border-b border-slate-700 pb-4">
                      <span className="text-white font-bold text-lg">Current Inventory Categories</span>
                      <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-bold">In Stock</span>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-4">
                      <div className="bg-slate-800 p-4 rounded-xl flex items-center justify-between group cursor-pointer hover:bg-slate-700 transition-colors">
                        <div className="flex items-center gap-4">
                          <Laptop className="w-8 h-8 text-indigo-400" />
                          <div>
                            <div className="text-white font-bold">Business Laptops</div>
                            <div className="text-slate-400 text-xs">Core i5/i7, 16GB RAM</div>
                          </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-white" />
                      </div>

                      <div className="bg-slate-800 p-4 rounded-xl flex items-center justify-between group cursor-pointer hover:bg-slate-700 transition-colors">
                        <div className="flex items-center gap-4">
                          <Server className="w-8 h-8 text-indigo-400" />
                          <div>
                            <div className="text-white font-bold">Rack Servers</div>
                            <div className="text-slate-400 text-xs">Gen 9/10/14, 2U, 4U</div>
                          </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-white" />
                      </div>

                      <div className="bg-slate-800 p-4 rounded-xl flex items-center justify-between group cursor-pointer hover:bg-slate-700 transition-colors">
                        <div className="flex items-center gap-4">
                          <HardDrive className="w-8 h-8 text-indigo-400" />
                          <div>
                            <div className="text-white font-bold">Networking Gear</div>
                            <div className="text-slate-400 text-xs">Switches, Firewalls, APs</div>
                          </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-white" />
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-700 text-center">
                      <p className="text-slate-400 text-xs mb-4">All equipment is wiped to NIST 800-88 standards before sale.</p>
                      <button onClick={() => window.location.href = '/contact'} className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold transition-colors">
                        Contact Sales Team
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- INDUSTRIES WE PROTECT --- */}
        <section className="py-24 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-grotesk">Industries We Serve</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Specialized compliance workflows for regulated sectors where data security failure is not an option.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg hover:border-indigo-100 transition-all group">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                  <Stethoscope className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 font-grotesk">Healthcare</h3>
                <p className="text-slate-600 text-sm mb-4">HIPAA-aligned destruction of PHI on medical devices, tablets, and hospital servers.</p>
                <span className="text-blue-600 text-xs font-bold uppercase tracking-wider">Patient Privacy</span>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg hover:border-indigo-100 transition-all group">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-100 transition-colors">
                  <Landmark className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 font-grotesk">Financial</h3>
                <p className="text-slate-600 text-sm mb-4">GLBA & SOX protocol adherence for banking data centers and branch closures.</p>
                <span className="text-green-600 text-xs font-bold uppercase tracking-wider">Audit Trails</span>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg hover:border-indigo-100 transition-all group">
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-100 transition-colors">
                  <Building2 className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 font-grotesk">Enterprise</h3>
                <p className="text-slate-600 text-sm mb-4">Scalable logistics for Fortune 500 tech refreshes involving 10,000+ assets.</p>
                <span className="text-purple-600 text-xs font-bold uppercase tracking-wider">Bulk Logistics</span>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg hover:border-indigo-100 transition-all group">
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-100 transition-colors">
                  <GraduationCap className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 font-grotesk">Education</h3>
                <p className="text-slate-600 text-sm mb-4">FERPA-aligned recycling for K-12 districts and university computer labs.</p>
                <span className="text-orange-600 text-xs font-bold uppercase tracking-wider">Student Safety</span>
              </div>
            </div>
          </div>
        </section>

        {/* --- 4-STEP CHAIN OF CUSTODY --- */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-6 font-grotesk">
                  <Lock className="w-4 h-4" /> Chain of Custody
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-grotesk">
                  Secure Workflow:<br />
                  <span className="text-slate-500">From Your Dock to Final Audit</span>
                </h2>
                <div className="space-y-8 mt-8">
                  <div className="flex gap-6 relative">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xl relative z-10">1</div>
                    <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-slate-200 -z-0"></div>
                    <div className="pb-8">
                      <h4 className="font-bold text-xl text-slate-900">Secure Logistics</h4>
                      <p className="text-slate-600 mt-2">Assets are scanned onto our manifest at your location. Transported via GPS-tracked fleet to our Farmington Hills facility.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 relative">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xl relative z-10">2</div>
                    <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-slate-200 -z-0"></div>
                    <div className="pb-8">
                      <h4 className="font-bold text-xl text-slate-900">NIST 800-88 Sanitization</h4>
                      <p className="text-slate-600 mt-2">Data-bearing devices undergo a 3-pass forensic wipe. Failed drives are physically shredded onsite.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 relative">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cyan-600 text-white flex items-center justify-center font-bold text-xl relative z-10">3</div>
                    <div className="pb-2">
                      <h4 className="font-bold text-xl text-slate-900">Audit & Certification</h4>
                      <p className="text-slate-600 mt-2">You receive a serialized Certificate of Destruction and a Settlement Report for value recovery.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                      <Truck className="w-10 h-10 text-slate-400 mb-3" />
                      <span className="font-bold text-slate-900">Logistics</span>
                      <span className="text-xs text-slate-500 mt-1">GPS Tracked</span>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                      <HardDrive className="w-10 h-10 text-slate-400 mb-3" />
                      <span className="font-bold text-slate-900">Wiping</span>
                      <span className="text-xs text-slate-500 mt-1">NIST Protocol</span>
                    </div>
                    <div className="col-span-2 bg-indigo-600 p-6 rounded-2xl text-white flex items-center justify-between">
                      <div>
                        <div className="font-bold text-lg">Final Report</div>
                        <div className="text-indigo-200 text-sm">Transfer of Liability Complete</div>
                      </div>
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-indigo-50 rounded-3xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* --- FAQ SECTION --- */}
        <section className="py-24 bg-slate-50 border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 font-grotesk">Common Questions</h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl border border-slate-200">
                <h3 className="font-bold text-lg text-slate-900 mb-2 flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-indigo-600" />
                  How do I know my data is truly secure?
                </h3>
                <p className="text-slate-600 pl-8">
                  Security is our top priority. We use NIST 800-88 aligned data sanitization methods and provide serialized Certificates of Destruction for every data-bearing asset. Our chain of custody is secure and documented from pickup to final processing.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200">
                <h3 className="font-bold text-lg text-slate-900 mb-2 flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-indigo-600" />
                  Do you sell used equipment to individuals?
                </h3>
                <p className="text-slate-600 pl-8">
                  We primarily serve wholesale B2B buyers (bulk orders of 5+ units). However, we can direct individual buyers to our specific retail partner channels upon request.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200">
                <h3 className="font-bold text-lg text-slate-900 mb-2 flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-indigo-600" />
                  What types of used IT equipment do you sell?
                </h3>
                <p className="text-slate-600 pl-8">
                  Our inventory constantly rotates but typically includes business-class laptops (Dell Latitude, Lenovo ThinkPad), desktops, monitors, rack servers, and enterprise networking gear (Cisco, Ubiquiti).
                </p>
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
                           <Star className="w-5 h-5 text-yellow-400 fill-current" />
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

// Helper component for the inventory list arrow
const ChevronRight = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m9 18 6-6-6-6"/></svg>
);

export default AboutPage;