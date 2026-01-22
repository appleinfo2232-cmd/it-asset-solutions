import React, { useMemo, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Recycle,
  FileBarChart,
  ShoppingCart,
  Truck,
  ArrowRight,
  DollarSign,
  RefreshCw,
  Layers,
  ChevronRight,
  Server
} from 'lucide-react';

/* ================= CONFIGURATION ================= */
const ORBIT_NODES = [
  {
    id: 'logistics',
    icon: Truck,
    title: 'Secure Logistics',
    tag: 'Nationwide Fleet',
    styles: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    position: 'top-[5%] left-1/2 -translate-x-1/2', 
    delay: 0.2
  },
  {
    id: 'data',
    icon: ShieldCheck,
    title: 'Data Security',
    tag: 'NIST 800-88', 
    styles: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    position: 'top-[20%] right-[2%] xl:right-[5%] translate-x-0', 
    delay: 0.4
  },
  {
    id: 'buy',
    icon: DollarSign,
    title: 'Asset Purchase',
    tag: 'Max Recovery',
    styles: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.2)]',
    isPrimary: true,
    position: 'bottom-[20%] right-[2%] xl:right-[5%] translate-x-0', 
    delay: 0.6
  },
  {
    id: 'sell',
    icon: RefreshCw,
    title: 'Remarketing',
    tag: 'Global Resale',
    styles: 'bg-teal-500/10 text-teal-400 border-teal-500/20',
    position: 'bottom-[5%] left-1/2 -translate-x-1/2', 
    delay: 0.8
  },
  {
    id: 'recycle',
    icon: Recycle,
    title: 'Zero Landfill',
    tag: 'R2v3 Standards', 
    styles: 'bg-lime-500/10 text-lime-400 border-lime-500/20',
    position: 'bottom-[20%] left-[2%] xl:left-[5%] translate-x-0', 
    delay: 1.0
  },
  {
    id: 'compliance',
    icon: FileBarChart,
    title: 'Reporting',
    tag: 'Audit Trail', 
    styles: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
    position: 'top-[20%] left-[2%] xl:left-[5%] translate-x-0', 
    delay: 1.2
  }
];

/* ================= NEW COMPONENT: SMART TECH GRID ================= */
const SmartGridBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      
      {/* 1. Base Fine Grid - Very subtle */}
      <div 
        className="absolute inset-0 h-full w-full"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(56, 189, 248, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(56, 189, 248, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px',
          maskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, #000 70%, transparent 110%)'
        }}
      />

      {/* 2. Structural Major Grid - Slightly more visible */}
      <div 
        className="absolute inset-0 h-full w-full"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(56, 189, 248, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(56, 189, 248, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px',
          maskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)'
        }}
      />

      {/* 3. Horizontal Scan Line Animation */}
      <motion.div
        className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
        initial={{ top: -100, opacity: 0 }}
        animate={{ top: ['0%', '100%'], opacity: [0, 1, 0] }}
        transition={{
          duration: 8,
          ease: "linear",
          repeat: Infinity,
          repeatDelay: 2
        }}
        style={{ boxShadow: '0 0 10px rgba(34, 211, 238, 0.2)' }}
      />
      
      {/* 4. Perspective Floor Grid (Optional 3D feel at bottom) */}
      <div 
        className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-[#020617] to-transparent z-10" 
      />
    </div>
  );
};

/* ================= HERO COMPONENT ================= */
const Hero: React.FC<{ userRole?: string }> = ({ userRole }) => {
  const [mounted, setMounted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const content = useMemo(() => {
    switch (userRole) {
      case 'data-center':
        return {
          badge: 'Decommissioning Experts',
          headline: (
            <>
              Secure Data Center <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 animate-gradient-x">
                Value Recovery
              </span>
            </>
          ),
          sub: 'We specialize in onsite de-racking, physical drive destruction, and purchasing retired servers and storage arrays.',
        };
      case 'healthcare':
        return {
          badge: 'HIPAA Compliant Disposal',
          headline: (
            <>
              Healthcare IT Asset <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 animate-gradient-x">
                Security & Compliance
              </span>
            </>
          ),
          sub: 'Secure chain of custody for sensitive medical equipment. We buy retired workstations and tablets with guaranteed data sanitization.',
        };
      default:
        return {
          badge: 'End-to-End IT Asset Lifecycle Management',
          headline: (
            <>
              Enterprise IT Asset <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 animate-gradient-x">
                Disposition (ITAD)
              </span>
            </>
          ),
          sub: 'Turn retired IT inventory into capital. We purchase Servers, Laptops, and Components with secure logistics from all 50 states.',
        };
    }
  }, [userRole]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  return (
    <>
      <style>{`
        html, body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          width: 100%;
          background-color: #020617;
        }
        @keyframes scan {
          0% { background-position: 0% 0%; }
          100% { background-position: 100% 100%; }
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="relative w-full min-h-screen bg-[#020617] overflow-hidden flex items-start justify-center pt-32 pb-20 lg:pt-36 lg:pb-0">
        
        {/* === LAYER 1: GLOBAL NOISE === */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] pointer-events-none z-0" />

        {/* === LAYER 2: SMART TECH GRID (NEW) === */}
        <SmartGridBackground />

        {/* === LAYER 3: GLOW BLOBS === */}
        <div className="absolute top-0 right-0 w-[40vw] h-[40vh] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vh] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div 
            className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left"
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div variants={fadeInUp} className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/60 backdrop-blur-md shadow-lg shadow-cyan-900/10 mb-8 hover:bg-slate-800/80 transition-colors cursor-default">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
                </span>
                <span className="text-[11px] sm:text-xs font-bold tracking-widest text-cyan-400 uppercase">
                  {content.badge}
                </span>
              </div>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
              {content.headline}
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-base sm:text-lg text-slate-400 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0 border-t lg:border-t-0 lg:border-l border-slate-800 lg:border-slate-700 pt-6 lg:pt-0 lg:pl-6">
              {content.sub}
            </motion.p>

            <motion.div variants={fadeInUp} className="lg:hidden grid grid-cols-2 gap-3 mb-8">
              {ORBIT_NODES.slice(0, 4).map((node) => {
                const Icon = node.icon;
                return (
                  <div key={node.id} className="bg-slate-900/50 border border-slate-800 rounded-lg p-3 flex flex-col items-center gap-2">
                    <Icon className={`w-5 h-5 ${node.isPrimary ? 'text-emerald-400' : 'text-slate-400'}`} />
                    <span className="text-xs font-semibold text-slate-300">{node.title}</span>
                  </div>
                )
              })}
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
            >
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto flex-shrink-0 relative px-8 py-4 rounded-xl font-bold text-white shadow-xl shadow-blue-600/20 hover:scale-[1.02] hover:shadow-blue-600/30 transition-all duration-300 group overflow-hidden bg-blue-600 whitespace-nowrap"
              >
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
                <span className="relative z-10 flex items-center gap-2 justify-center">
                  Sell Your IT Equipment
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button 
                onClick={() => navigate('/contact')}
                className="w-full sm:w-auto flex-shrink-0 px-8 py-4 bg-slate-900/50 border border-slate-700 rounded-xl font-bold text-slate-300 hover:text-white hover:bg-slate-800 hover:border-slate-500 transition-all flex items-center justify-center gap-3 backdrop-blur-sm group whitespace-nowrap"
              >
                <ShoppingCart className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
                Buy Refurbished
                <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </button>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-12 pt-8 border-t border-slate-800/50 flex flex-wrap justify-center lg:justify-start items-center gap-x-8 gap-y-4 text-slate-500 text-xs font-bold uppercase tracking-wider">
              <div className="flex items-center gap-2.5 group cursor-help" title="NIST 800-88 Compliant">
                <div className="p-1.5 bg-cyan-500/10 rounded-md group-hover:bg-cyan-500/20 transition-colors"><ShieldCheck className="w-4 h-4 text-cyan-500" /></div>
                <span>Secure Wipe</span>
              </div>
              <div className="flex items-center gap-2.5 group cursor-help" title="EPA Compliant">
                <div className="p-1.5 bg-emerald-500/10 rounded-md group-hover:bg-emerald-500/20 transition-colors"><Layers className="w-4 h-4 text-emerald-500" /></div>
                <span>Green Standards</span>
              </div>
              <div className="flex items-center gap-2.5 group cursor-help" title="R2v3 Practices">
                <div className="p-1.5 bg-blue-500/10 rounded-md group-hover:bg-blue-500/20 transition-colors"><RefreshCw className="w-4 h-4 text-blue-500" /></div>
                <span>Zero Landfill</span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <div className={`hidden lg:flex relative items-center justify-center h-[500px] xl:h-[650px] w-full transition-all duration-1000 delay-300 transform ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            
            <div className="absolute inset-0 bg-radial-gradient from-blue-500/10 to-transparent blur-3xl opacity-30" />
            
            {/* Grid Overlay inside the visual area for extra tech feel */}
            <div className="absolute w-[600px] h-[600px] border border-slate-800/50 rounded-full opacity-30" 
                 style={{ backgroundImage: 'radial-gradient(circle, #334155 1px, transparent 1px)', backgroundSize: '30px 30px' }} 
            />

            <div className="absolute w-[450px] xl:w-[550px] h-[450px] xl:h-[550px] border border-slate-700/30 rounded-full" />
            <div className="absolute w-[300px] xl:w-[400px] h-[300px] xl:h-[400px] border border-slate-700/30 rounded-full border-dashed opacity-60 animate-[spin_60s_linear_infinite]" />

            <div className="relative w-36 h-36 xl:w-44 xl:h-44 bg-[#0B1120] rounded-full border border-slate-700 flex items-center justify-center shadow-2xl shadow-blue-500/10 z-10 group cursor-pointer" onClick={() => scrollToSection('contact')}>
              <div className="absolute inset-0 rounded-full border border-cyan-500/30 animate-ping opacity-20" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-slate-800/50 to-transparent opacity-50" />
              <div className="relative text-center z-10">
                <div className="w-14 h-14 mx-auto bg-slate-900 rounded-2xl flex items-center justify-center border border-slate-700 mb-2 group-hover:scale-110 group-hover:border-cyan-500/50 transition-all duration-300">
                  <Server className="w-7 h-7 text-cyan-400" />
                </div>
                <div className="text-xs font-black tracking-[0.2em] text-white">ITAD</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">Central Hub</div>
              </div>
            </div>

            <div className="absolute inset-0 w-full h-full pointer-events-none">
              {ORBIT_NODES.map((node) => {
                const Icon = node.icon; 
                return (
                  <div key={node.id} className={`absolute ${node.position} z-20 pointer-events-auto`}>
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: node.delay, duration: 0.5, type: "spring" }}
                      className={`
                        relative p-4 rounded-2xl flex items-center gap-3 min-w-[200px] backdrop-blur-md cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-1
                        bg-slate-900/60 border border-white/5 shadow-lg
                        ${node.isPrimary ? 'border-emerald-500/30 bg-slate-900/90' : 'hover:border-slate-600'}
                      `}
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center border border-white/5 ${node.styles}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className={`text-sm font-bold ${node.isPrimary ? 'text-emerald-400' : 'text-slate-200'}`}>
                          {node.title}
                        </div>
                        <div className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">
                          {node.tag}
                        </div>
                      </div>
                      {node.isPrimary && (
                        <span className="absolute -top-1.5 -right-1.5 flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border border-slate-900"></span>
                        </span>
                      )}
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;