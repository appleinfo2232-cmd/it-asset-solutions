import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Recycle, Truck, 
  HardDrive, FileBarChart, ShoppingCart, 
  ArrowRight
} from 'lucide-react';

const CoreServices: React.FC = () => {
  
  // Helper to handle image errors
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.style.display = 'none';
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">Complete Lifecycle Management</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-3 mb-6">
            Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Services</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
             Comprehensive, customized solutions for managing large-scale technology retirement projects with precision and security.
          </p>
        </div>

        {/* PREMIUM BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[350px]">
          
          {/* CARD 1: Enterprise ITAD (Large Span) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 relative group overflow-hidden rounded-[2rem] shadow-lg bg-slate-900"
          >
            {/* Background Image: SERVERS.WEBP */}
            <div className="absolute inset-0">
              <img 
                src="/images/servers.webp" 
                alt="Enterprise Data Center Equipment" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60"
                onError={handleImageError}
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
            </div>
            
            <div className="absolute bottom-0 left-0 p-8 md:p-12 z-10">
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mb-4 text-white shadow-lg shadow-blue-900/20">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Enterprise ITAD</h3>
              <p className="text-slate-300 mb-6 max-w-lg">
                Comprehensive solutions for decommissioning data centers. We manage servers, racks, and networking gear at scale.
              </p>
              <Link to="/services/enterprise-itad" className="inline-flex items-center gap-2 text-white font-bold hover:text-blue-400 transition-colors">
                Explore Solutions <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* CARD 2: Wholesale IT (Tall) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="relative group overflow-hidden rounded-[2rem] shadow-lg bg-amber-950"
          >
             {/* Background Image: WAREHOUSE.WEBP */}
             <div className="absolute inset-0">
              <img 
                src="/images/warehouse.webp" 
                alt="Bulk IT Hardware Warehouse" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-50"
                onError={handleImageError}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/90 via-slate-900/40 to-transparent"></div>
            </div>
            
            <div className="absolute bottom-0 left-0 p-8 z-10">
              <div className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center mb-4 text-white shadow-lg shadow-amber-900/20">
                <ShoppingCart className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Wholesale IT</h3>
              <p className="text-slate-300 mb-6 text-sm">
                Bulk lots of tested laptops, servers, and components available for resellers.
              </p>
              <Link to="/wholesale-it-equipment" className="inline-flex items-center gap-2 text-white font-bold hover:text-amber-400 transition-colors">
                View Inventory <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* CARD 3: Data Destruction (Tall - No Image Change Needed) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="relative group overflow-hidden rounded-[2rem] shadow-lg bg-white border border-slate-200"
          >
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>
             
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <HardDrive className="w-32 h-32 text-rose-600" />
            </div>
            
            <div className="absolute bottom-0 left-0 p-8 z-10">
              <div className="w-12 h-12 bg-rose-600 rounded-2xl flex items-center justify-center mb-4 text-white shadow-lg shadow-rose-900/20">
                <HardDrive className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Data Destruction</h3>
              <p className="text-slate-600 mb-6 text-sm">
                100% guaranteed destruction adhering to NIST 800-88 standards. Forensically unrecoverable.
              </p>
              <Link to="/services/secure-data-destruction" className="inline-flex items-center gap-2 text-slate-900 font-bold hover:text-rose-600 transition-colors">
                View Standards <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* CARD 4: ESG & Recycling (Large Span) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 relative group overflow-hidden rounded-[2rem] shadow-lg bg-emerald-950"
          >
            {/* Background Image: RECYCLING.WEBP */}
            <div className="absolute inset-0">
              <img 
                src="/images/recycling.webp" 
                alt="Electronic Circuit Recycling" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-50"
                onError={handleImageError}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/95 via-emerald-900/60 to-transparent"></div>
            </div>
            
            <div className="absolute bottom-0 left-0 p-8 md:p-12 z-10">
              <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center mb-4 text-white shadow-lg shadow-emerald-900/20">
                <Recycle className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">ESG & Circular Economy</h3>
              <p className="text-slate-200 mb-6 max-w-lg">
                Strict zero-landfill recycling processes. that support your corporate sustainability reporting and Zero-Landfill goals.
              </p>
              <Link to="/services/it-asset-value-recovery" className="inline-flex items-center gap-2 text-white font-bold hover:text-emerald-400 transition-colors">
                Sustainability Goals <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

        </div>

        {/* ROW 3: Secondary Services */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
           
           {/* Logistics Card */}
           <div className="flex gap-6 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all group relative overflow-hidden">
               <div className="absolute right-[-20px] top-[-20px] opacity-[0.03] rotate-12 pointer-events-none">
                 <Truck className="w-40 h-40" />
               </div>
               
               <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 shrink-0 group-hover:scale-110 transition-transform z-10">
                  <Truck className="w-7 h-7" />
               </div>
               <div className="z-10">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Secure Logistics</h3>
                  <p className="text-slate-600 mb-3 text-sm">
                    Secure chain-of-custody transport for data centers, offices, and remote employee retrieval.
                  </p>
                  <Link to="/services/secure-chain-of-custody-logistics" className="text-sm font-bold text-indigo-600 hover:underline inline-flex items-center gap-1">
                    Logistics Details <ArrowRight className="w-3 h-3" />
                  </Link>
               </div>
           </div>

           {/* Auditing Card */}
           <div className="flex gap-6 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all group relative overflow-hidden">
               <div className="absolute right-[-20px] top-[-20px] opacity-[0.03] rotate-12 pointer-events-none">
                 <FileBarChart className="w-40 h-40" />
               </div>

               <div className="w-14 h-14 bg-cyan-50 rounded-2xl flex items-center justify-center text-cyan-600 shrink-0 group-hover:scale-110 transition-transform z-10">
                  <FileBarChart className="w-7 h-7" />
               </div>
               <div className="z-10">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Auditing & Compliance</h3>
                  <p className="text-slate-600 mb-3 text-sm">
                    Receive detailed, transparent reports for every asset, including Certificates of Destruction.
                  </p>
                  <Link to="/services/auditing-compliance-reporting" className="text-sm font-bold text-cyan-600 hover:underline inline-flex items-center gap-1">
                    View Sample Report <ArrowRight className="w-3 h-3" />
                  </Link>
               </div>
           </div>

        </div>

      </div>
    </section>
  );
};

export default CoreServices;