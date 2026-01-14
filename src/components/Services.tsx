import React, { useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, HardDrive, Truck, 
  Recycle, Server, Laptop, 
  Activity, ArrowRight,
  Globe, TrendingUp, Mail, 
  Lock, FileBarChart, CheckCircle2, Wrench,
  Database, Zap, Scale, BarChart3
} from 'lucide-react';

// Components
import ContactLocation from '../components/ContactLocation';
import SecureProcess from '../components/SecureProcess';
import MidPageLeadCapture from '../components/MidPageLeadCapture';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

const ServicesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: 'buy',
      icon: TrendingUp,
      title: 'We Buy IT Equipment',
      subtitle: 'Asset Value Recovery',
      description: 'Turn retired assets into working capital. We provide upfront cash offers for Servers, Laptops, and Data Center gear.',
      link: '/services/corporate-it-buyback', 
      color: 'blue',
      gradient: 'from-blue-500/10 to-cyan-400/10',
      iconColor: 'text-blue-600',
      borderColor: 'hover:border-blue-400'
    },
    {
      id: 'sell',
      icon: Mail,
      title: 'Wholesale Inventory',
      subtitle: 'Exclusive Email Broadcasts',
      description: 'We sell bulk enterprise hardware exclusively through our private email list to registered wholesale buyers.',
      link: '/wholesale-it-equipment',
      color: 'emerald',
      gradient: 'from-emerald-500/10 to-teal-400/10',
      iconColor: 'text-emerald-600',
      borderColor: 'hover:border-emerald-400'
    },
    {
      id: 'recycle',
      icon: Recycle,
      title: 'Enterprise ITAD',
      subtitle: 'Zero Landfill Recycling',
      description: 'Responsible recycling for end-of-life assets. We adhere to strict environmental standards to ensure compliance.',
      link: '/services/enterprise-itad',
      color: 'lime',
      gradient: 'from-lime-500/10 to-green-400/10',
      iconColor: 'text-lime-600',
      borderColor: 'hover:border-lime-400'
    },
    {
      id: 'data',
      icon: Lock,
      title: 'Data Destruction',
      subtitle: 'NIST 800-88 Compliant',
      description: 'Secure data wiping and physical shredding. We guarantee 100% data unrecoverability on all storage media.',
      link: '/services/secure-data-destruction',
      color: 'cyan',
      gradient: 'from-cyan-500/10 to-sky-400/10',
      iconColor: 'text-cyan-600',
      borderColor: 'hover:border-cyan-400'
    },
    {
      id: 'logistics',
      icon: Truck,
      title: 'Nationwide Logistics',
      subtitle: 'White-Glove Pickup',
      description: 'Secure chain-of-custody transport from any zip code in the USA to our Michigan processing hub.',
      link: '/services/secure-chain-of-custody-logistics',
      color: 'indigo',
      gradient: 'from-indigo-500/10 to-violet-400/10',
      iconColor: 'text-indigo-600',
      borderColor: 'hover:border-indigo-400'
    },
    {
      id: 'compliance',
      icon: FileBarChart,
      title: 'Auditing & Reporting',
      subtitle: 'Audit-Ready Documentation',
      description: 'Full serialized reporting and Certificates of Destruction provided for every job to satisfy legal audits.',
      link: '/services/auditing-compliance-reporting',
      color: 'sky',
      gradient: 'from-sky-500/10 to-blue-400/10',
      iconColor: 'text-sky-600',
      borderColor: 'hover:border-sky-400'
    }
  ];

  return (
    <>
      <Helmet>
        <title>ITAD Services & Data Destruction | IT Asset Solutions</title>
        <meta name="description" content="Explore our full suite of IT Asset Disposition services: Enterprise ITAD, Secure Data Destruction, Value Recovery, and Logistics." />
        <link rel="canonical" href="https://www.itassetsolutions.com/services" />
      </Helmet>

      <main className="w-full overflow-x-hidden bg-white">
        
        {/* --- STUNNING HERO SECTION --- */}
        <section className="relative min-h-[90vh] lg:h-screen flex flex-col justify-center bg-[#050B14] text-white overflow-hidden pt-32 lg:pt-0">
          
          {/* Background FX */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-[#050B14] to-[#050B14]"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>
          
          {/* Animated Grid Lines */}
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
              
              {/* Left Column: Text */}
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-8 font-grotesk">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  Comprehensive IT Solutions
                </div>
                
                {/* UPDATED FONT & SIZE */}
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 font-grotesk tracking-tight">
                  Lifecycle <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                    Reimagined.
                  </span>
                </h1>
                
                <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-xl border-l-2 border-indigo-500/50 pl-6">
                  We don't just dispose of electronics. We secure data, recover value, and protect your brand through a seamless suite of IT lifecycle services.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:-translate-y-1 font-grotesk"
                  >
                    Start Recovery Process
                  </Link>
                  <a 
                    href="#core-services" 
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-300 border border-slate-700 rounded-xl hover:bg-slate-800 hover:text-white transition-all font-grotesk"
                  >
                    Explore Services
                  </a>
                </div>
              </motion.div>

              {/* Right Column: Floating Service Nodes */}
              <div className="relative h-[500px] w-full hidden lg:flex items-center justify-center">
                {/* Central Hub */}
                <div className="absolute z-20 w-32 h-32 bg-slate-900 rounded-full border-4 border-indigo-500/30 flex items-center justify-center shadow-[0_0_60px_rgba(99,102,241,0.2)]">
                  <div className="text-center">
                    <Activity className="w-10 h-10 text-indigo-400 mx-auto mb-1" />
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest font-grotesk">Core<br/>Hub</span>
                  </div>
                </div>

                {/* Orbiting Nodes */}
                <motion.div animate={{ y: [-15, 15, -15] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-10 left-10 z-10 bg-slate-800/80 backdrop-blur-md p-4 rounded-2xl border border-slate-700 shadow-xl w-48">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-blue-500/20 rounded-lg"><ShieldCheck className="w-5 h-5 text-blue-400" /></div>
                    <div className="text-sm font-bold text-white font-grotesk">Data Security</div>
                  </div>
                  <div className="h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-blue-500 animate-pulse"></div>
                  </div>
                  <div className="flex justify-between mt-1 text-[10px] text-slate-400">
                    <span>NIST 800-88</span>
                    <span>ACTIVE</span>
                  </div>
                </motion.div>

                <motion.div animate={{ y: [20, -20, 20] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-20 right-0 z-10 bg-slate-800/80 backdrop-blur-md p-4 rounded-2xl border border-slate-700 shadow-xl w-48">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-green-500/20 rounded-lg"><Truck className="w-5 h-5 text-green-400" /></div>
                    <div className="text-sm font-bold text-white font-grotesk">Logistics</div>
                  </div>
                   <div className="text-[10px] text-slate-300 bg-slate-700/50 p-1.5 rounded mb-1">
                      <span className="text-green-400">●</span> Transit: MI Hub
                   </div>
                </motion.div>

                {/* Connectivity Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                  <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="#6366f1" strokeWidth="1" strokeDasharray="5,5" />
                  <line x1="50%" y1="50%" x2="80%" y2="70%" stroke="#6366f1" strokeWidth="1" strokeDasharray="5,5" />
                </svg>
              </div>

            </div>
          </div>
        </section>

        {/* --- CORE SERVICES GRID --- */}
        <section id="core-services" className="py-24 bg-white relative overflow-hidden z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-6 font-grotesk">
                <Globe className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">Complete Lifecycle Solutions</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-grotesk">
                Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">Services</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                From purchasing your retired hardware to secure data destruction and final recycling, we handle every step of the process nationwide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group relative flex flex-col h-full bg-white border border-slate-200 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl ${service.borderColor} hover:-translate-y-1`}
                >
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className={`relative w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-slate-50 group-hover:bg-white group-hover:shadow-sm transition-all ${service.iconColor}`}>
                    <service.icon className="w-7 h-7" />
                  </div>
                  <div className="relative">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 font-grotesk">{service.title}</h3>
                    <p className={`text-xs font-bold uppercase tracking-wider mb-4 ${service.iconColor} font-grotesk`}>{service.subtitle}</p>
                    <p className="text-slate-600 mb-8 leading-relaxed text-sm">{service.description}</p>
                    <Link to={service.link} className={`inline-flex items-center font-bold text-sm ${service.iconColor} hover:opacity-80 transition-opacity font-grotesk`}>
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- CIRCULAR ECONOMY VISUAL --- */}
        <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
           <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
             <div className="grid lg:grid-cols-2 gap-16 items-center">
               <div>
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-900/50 border border-green-500/50 text-green-400 text-xs font-bold uppercase tracking-wider mb-6 font-grotesk">
                    <Recycle className="w-4 h-4" /> Sustainable Impact
                 </div>
                 <h2 className="text-4xl font-bold mb-6 font-grotesk">The Lifecycle Approach</h2>
                 <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                   We view IT disposal not as an end, but as a new beginning. By prioritizing reuse over recycling, we help companies reduce their carbon footprint while recovering residual value.
                 </p>
                 <div className="space-y-6">
                   <div className="flex gap-4">
                     <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center flex-shrink-0 text-green-400 font-bold text-xl font-grotesk">1</div>
                     <div><h4 className="font-bold text-lg font-grotesk">Assess & Recover</h4><p className="text-slate-400 text-sm">We audit assets to identify high-value units for refurbishment.</p></div>
                   </div>
                   <div className="flex gap-4">
                     <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center flex-shrink-0 text-blue-400 font-bold text-xl font-grotesk">2</div>
                     <div><h4 className="font-bold text-lg font-grotesk">Sanitize & Refurbish</h4><p className="text-slate-400 text-sm">Data is wiped, and hardware is repaired for a second life.</p></div>
                   </div>
                   <div className="flex gap-4">
                     <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center flex-shrink-0 text-purple-400 font-bold text-xl font-grotesk">3</div>
                     <div><h4 className="font-bold text-lg font-grotesk">Responsible Recycling</h4><p className="text-slate-400 text-sm">End-of-life material is shredded and separated for raw material recovery.</p></div>
                   </div>
                 </div>
               </div>
               {/* Visual Diagram Placeholder */}
               <div className="relative h-[400px] bg-slate-800/50 rounded-full border border-slate-700 flex items-center justify-center">
                  <div className="absolute inset-0 animate-[spin_10s_linear_infinite] rounded-full border border-dashed border-slate-600"></div>
                  <div className="text-center">
                    <Recycle className="w-24 h-24 text-green-500 mx-auto mb-4 opacity-80" />
                    <div className="text-2xl font-bold font-grotesk">Circular<br/>Economy</div>
                  </div>
               </div>
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