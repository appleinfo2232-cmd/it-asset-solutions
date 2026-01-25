import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consented = localStorage.getItem('cookieConsent');
    if (!consented) {
      // Delay showing slightly for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'false');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-4 left-0 right-0 z-50 px-4 md:px-6"
        >
          <div className="max-w-7xl mx-auto">
            <div className="bg-[#0f172a] text-white p-4 md:p-5 rounded-xl shadow-2xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
              
              {/* Left Side: Icon & Inline Text */}
              <div className="flex items-center gap-4 flex-1">
                {/* Icon - Hidden on very small screens to save space */}
                <div className="hidden md:flex bg-indigo-500/10 p-2.5 rounded-full shrink-0">
                  <Cookie className="w-5 h-5 text-indigo-400" />
                </div>
                
                <div className="text-sm text-slate-300 leading-relaxed">
                  {/* Title is now inline with a span for the 'Single Line' look */}
                  <span className="font-bold text-white text-base mr-2 block sm:inline mb-1 sm:mb-0">
                    We value your privacy.
                  </span>
                  We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. 
                  <Link to="/cookie-policy" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2 ml-1 transition-colors">
                    Read Policy
                  </Link>
                </div>
              </div>

              {/* Right Side: Buttons Side-by-Side */}
              <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
                <button
                  onClick={handleDecline}
                  className="flex-1 md:flex-none px-5 py-2.5 rounded-lg border border-slate-600 text-slate-300 font-medium hover:bg-slate-800 hover:text-white transition-colors text-sm"
                >
                  Decline
                </button>
                <button
                  onClick={handleAccept}
                  className="flex-1 md:flex-none px-6 py-2.5 rounded-lg bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/20 text-sm whitespace-nowrap"
                >
                  Accept All
                </button>
              </div>

            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;