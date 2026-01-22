import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';
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
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-7xl mx-auto">
            <div className="bg-slate-900/95 backdrop-blur-md text-white p-6 rounded-2xl shadow-2xl border border-slate-700 flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
              
              {/* Text Content */}
              <div className="flex gap-4">
                <div className="bg-blue-600/20 p-3 rounded-full h-fit shrink-0">
                  <Cookie className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 font-grotesk">We value your privacy</h3>
                  <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
                    We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. 
                    <Link to="/cookie-policy" className="text-blue-400 hover:text-blue-300 underline ml-1">Read Policy</Link>
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <button
                  onClick={handleDecline}
                  className="px-6 py-2.5 rounded-lg border border-slate-600 text-slate-300 font-medium hover:bg-slate-800 transition-colors text-sm"
                >
                  Decline
                </button>
                <button
                  onClick={handleAccept}
                  className="px-6 py-2.5 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20 text-sm whitespace-nowrap"
                >
                  Accept All
                </button>
              </div>

              {/* Close Icon (Optional, same as Decline) */}
              <button 
                onClick={handleDecline}
                className="absolute top-4 right-4 text-slate-500 hover:text-white md:hidden"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;