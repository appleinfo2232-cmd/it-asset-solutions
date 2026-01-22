import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Clock, 
  Navigation,
  ShieldCheck,
  Copy,
  Check,
  Loader
} from 'lucide-react';

const ContactLocation: React.FC = () => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [copied, setCopied] = useState(false);

  const address = "23985 Industrial Park Dr, Farmington Hills, MI 48335";
  const encodedAddress = encodeURIComponent(address);
  
  // Standard Google Maps structure for live, up-to-date data.
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=m&z=15&ie=UTF8&iwloc=&output=embed`;
  
  // Direct secure link for navigation
  const directionsUrl = `https://www.google.com/maps/dir//${encodedAddress}`;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-100/40 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="font-bold text-slate-700 tracking-wide text-xs uppercase">Now Accepting Drop-offs</span>
            </div>
            
            {/* UPDATED TITLE: Replaced "Operations Center" with "Secure Facility" */}
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">Secure Facility</span>
            </h2>
            
            {/* UPDATED DESCRIPTION: Generic, professional content */}
            <p className="text-xl text-slate-600 leading-relaxed font-light">
              Conveniently located in the Farmington Hills industrial corridor. We provide a central location for efficient asset processing and management.
            </p>
          </motion.div>
        </div>

        {/* Map Container */}
        <div className="relative w-full rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-200 overflow-hidden bg-white">
          
          <div className="relative h-[500px] lg:h-[600px] w-full group">
            
            {/* Loading Skeleton */}
            {!isMapLoaded && (
              <div className="absolute inset-0 bg-slate-100 animate-pulse flex items-center justify-center z-10">
                <div className="flex flex-col items-center gap-3 text-slate-400">
                  <Loader className="w-8 h-8 animate-spin text-blue-500" />
                  <span className="text-sm font-medium">Loading Map...</span>
                </div>
              </div>
            )}

            {/* Google Map Iframe */}
            <iframe 
              src={mapEmbedUrl}
              className={`absolute inset-0 w-full h-full border-0 transition-opacity duration-700 ${isMapLoaded ? 'opacity-100' : 'opacity-0'}`}
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              onLoad={() => setIsMapLoaded(true)}
              title="IT Asset Solutions Facility Location"
            ></iframe>

            {/* Desktop Overlay Gradient */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/5 to-transparent pointer-events-none lg:block hidden"></div>
          
            {/* INFO CARD - Desktop Position */}
            <div className="hidden lg:block absolute bottom-8 left-8 z-20 w-96">
               <LocationCard 
                 address={address} 
                 directionsUrl={directionsUrl} 
                 handleCopy={handleCopyAddress} 
                 copied={copied} 
               />
            </div>
          </div>
          
          {/* INFO CARD - Mobile Position (Below Map) */}
          <div className="lg:hidden p-4 bg-white border-t border-slate-100">
             <LocationCard 
                address={address} 
                directionsUrl={directionsUrl} 
                handleCopy={handleCopyAddress} 
                copied={copied} 
                mobile
             />
          </div>

        </div>
      </div>
    </section>
  );
};

// Reusable Card Component
interface LocationCardProps {
  address: string;
  directionsUrl: string;
  handleCopy: () => void;
  copied: boolean;
  mobile?: boolean;
}

const LocationCard: React.FC<LocationCardProps> = ({ address, directionsUrl, handleCopy, copied, mobile }) => {
  return (
    <motion.div 
      initial={mobile ? {} : { opacity: 0, y: 20 }}
      animate={mobile ? {} : { opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className={`
        bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-xl
        ${mobile ? 'w-full shadow-none border-0 bg-transparent p-2' : ''}
      `}
    >
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-slate-900">Farmington Hills</h3>
          {/* UPDATED: Generic label */}
          <p className="text-sm text-emerald-600 font-semibold flex items-center gap-1.5 mt-1">
            <ShieldCheck className="w-4 h-4" />
            Processing Facility
          </p>
        </div>
        
        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-400 hover:text-blue-600 relative group"
          title="Copy Address"
        >
          {copied ? <Check className="w-5 h-5 text-emerald-500" /> : <Copy className="w-5 h-5" />}
          
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {copied ? 'Copied!' : 'Copy Address'}
          </span>
        </button>
      </div>

      <div className="space-y-6">
        <div className="flex gap-4 group">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            <MapPin className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <p className="text-slate-500 text-xs uppercase font-bold tracking-wider mb-1">Address</p>
            <p className="text-slate-700 text-sm font-medium leading-relaxed">
              {address.split(',')[0]}<br />
              {address.split(',').slice(1).join(',')}
            </p>
          </div>
        </div>

        <div className="flex gap-4 group">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            <Clock className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <p className="text-slate-500 text-xs uppercase font-bold tracking-wider mb-1">Receiving Hours</p>
            <p className="text-slate-700 text-sm font-medium">Mon - Fri: 8:00 AM – 5:00 PM</p>
            <p className="text-slate-400 text-xs mt-0.5">Appt. Required for Drop-offs</p>
          </div>
        </div>

        <a 
          href={directionsUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 active:scale-[0.98] group mt-2"
        >
          <Navigation className="w-4 h-4 group-hover:-rotate-45 transition-transform duration-300" />
          <span>Get Directions</span>
        </a>
      </div>
    </motion.div>
  );
};

export default ContactLocation;