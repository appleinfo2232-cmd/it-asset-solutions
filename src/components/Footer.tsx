import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { COMPANY_INFO, SOCIAL_LINKS } from '../utils/constants';
import { sendEmail } from '../utils/emailService'; 
import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Facebook,
  Shield,
  Award,
  Leaf,
  ArrowUp,
  ArrowRight,
  Clock,
  CheckCircle,
  Lock,
  Truck,
  ShoppingCart,
  FileText,
  Send,
  Heart,
  Loader,
  FileCheck 
} from 'lucide-react';

// --- CUSTOM X ICON (Twitter Replacement) ---
const XIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    aria-hidden="true" 
    className={className} 
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return;
    }

    setStatus('loading');

    try {
      const emailData = {
        form_type: 'Newsletter Subscription',
        email: email, 
        subject: 'New Newsletter Subscriber',
        message: `New subscriber: ${email}`,
        to_email: 'admin@itassetsolutions.com', 
        from_name: 'Website Footer',
        full_name: 'Subscriber', 
        company_name: 'N/A',
        phone_number: 'N/A'
      };

      const success = await sendEmail(emailData);

      if (success) {
        setStatus('success');
        setEmail('');
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      console.error('Subscription error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const coreServices = [
    { name: 'Enterprise IT Asset Disposition', href: '/services/enterprise-itad', icon: Shield },
    { name: 'Value Recovery', href: '/services/it-asset-value-recovery', icon: Award },
    { name: 'Secure Logistics', href: '/services/secure-chain-of-custody-logistics', icon: Truck },
    { name: 'Data Destruction', href: '/services/secure-data-destruction', icon: Lock },
    { name: 'Regulatory Reporting', href: '/services/auditing-compliance-reporting', icon: FileText }, 
    { name: 'Wholesale IT Equipment', href: '/wholesale-it-equipment', icon: ShoppingCart }
  ];

  const quickLinks = [
    { name: 'Home', href: '/', icon: ArrowRight },
    { name: 'About Us', href: '/about', icon: ArrowRight },
    { name: 'Contact', href: '/contact', icon: ArrowRight },
    { name: 'Wholesale Equipment', href: '/wholesale-it-equipment', icon: ArrowRight },
  ];

  const socialLinks = [
    { 
      icon: Linkedin, 
      href: SOCIAL_LINKS?.linkedin || 'https://linkedin.com', 
      label: 'LinkedIn'
    },
    { 
      icon: Facebook, 
      href: SOCIAL_LINKS?.facebook || 'https://facebook.com', 
      label: 'Facebook'
    },
    { 
      icon: XIcon, 
      href: SOCIAL_LINKS?.twitter || 'https://twitter.com/ITAssetSols', 
      label: 'X (Twitter)'
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden w-full">
      
      {/* Background Blobs */}
      <motion.div 
        className="absolute top-20 left-10 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 right-20 w-80 h-80 bg-emerald-500/20 rounded-full blur-[100px] pointer-events-none"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Back to top button */}
      <div className="relative z-20">
        <motion.button
          onClick={scrollToTop}
          className="absolute right-8 -top-6 bg-gradient-to-r from-blue-600 to-emerald-500 p-4 rounded-full shadow-xl text-white hover:shadow-2xl transition-all hover:-translate-y-1"
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-16">
          
          {/* Column 1: Company Info */}
          <div className="lg:col-span-1 space-y-8">
            <Link to="/" className="block mb-6" aria-label="Home" onClick={scrollToTop}>
               <img
                 src="/it-asset-solutions-new-logo.webp"
                 alt="IT Asset Solutions Logo"
                 className="w-auto h-20 object-contain" 
               />
            </Link>

            <div className="relative bg-slate-800/40 border-l-4 border-blue-500 rounded-r-lg p-5 shadow-lg backdrop-blur-sm">
              <p className="text-slate-200 font-semibold text-lg leading-relaxed">
                Transforming retired technology into strategic value.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500/20 p-3 rounded-lg flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-lg mb-1">Our Location</h4>
                  <span className="text-slate-300 text-base leading-relaxed">{COMPANY_INFO.address}</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-emerald-500/20 p-3 rounded-lg flex-shrink-0">
                  <Phone className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-lg mb-1">Call Us</h4>
                  <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`} className="text-slate-300 hover:text-emerald-400 transition-colors text-base">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-indigo-500/20 p-3 rounded-lg flex-shrink-0">
                  <Mail className="w-6 h-6 text-indigo-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-lg mb-1">Email Us</h4>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-slate-300 hover:text-indigo-400 transition-colors text-base">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-cyan-500/20 p-3 rounded-lg flex-shrink-0">
                  <Clock className="w-6 h-6 text-cyan-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-lg mb-1">Business Hours</h4>
                  <span className="text-slate-300 text-base">{COMPANY_INFO.hours}</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="font-semibold text-white text-lg mb-4">Follow Us</h4>
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-blue-600 transition-all duration-300 border border-slate-700 hover:border-blue-500"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Links & Services */}
          <div className="lg:col-span-1 space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 border-b border-slate-700 pb-4">Quick Links</h3>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-slate-300 hover:text-blue-400 transition-colors duration-300 flex items-center space-x-3 group text-lg"
                      onClick={scrollToTop}
                    >
                      <ArrowRight className="w-5 h-5 text-blue-500/50 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-8 border-b border-slate-700 pb-4">Our Services</h3>
              <div className="space-y-4">
                {coreServices.map((service) => (
                  <Link 
                    key={service.name}
                    to={service.href} 
                    className="text-slate-300 hover:text-emerald-400 transition-colors duration-300 flex items-start space-x-3 group"
                    onClick={scrollToTop}
                  >
                    <service.icon className="w-5 h-5 mt-1 text-emerald-500/70 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                    <span className="text-base font-medium leading-relaxed">{service.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          {/* Column 3: Newsletter & Trust Indicators */}
          <div className="lg:col-span-1 space-y-12">
            
            {/* Newsletter */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 border-b border-slate-700 pb-4">Stay Informed</h3>
              <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                Subscribe to our newsletter for the latest updates on IT asset management best practices.
              </p>
              
              <form onSubmit={handleSubscribe} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full px-5 py-4 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base focus:outline-none"
                />
                
                <motion.button
                  type="submit"
                  className={`w-full px-6 py-4 rounded-xl font-semibold flex items-center justify-center space-x-3 text-lg shadow-lg transition-all
                    ${status === 'success' 
                      ? 'bg-emerald-600 text-white cursor-default' 
                      : (status === 'error' ? 'bg-red-600 text-white' : 'bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-emerald-600 hover:to-blue-600 text-white')
                    }
                    ${status === 'loading' ? 'opacity-80 cursor-wait' : ''}
                  `}
                  disabled={status === 'loading' || status === 'success'}
                  whileHover={status === 'idle' ? { scale: 1.02 } : {}}
                  whileTap={status === 'idle' ? { scale: 0.98 } : {}}
                >
                  <AnimatePresence mode='wait'>
                    {status === 'loading' && (
                      <motion.div 
                        key="loading"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <Loader className="w-6 h-6 animate-spin" />
                        <span>Processing...</span>
                      </motion.div>
                    )}

                    {status === 'success' && (
                      <motion.div 
                        key="success"
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle className="w-6 h-6" />
                        <span>Subscribed!</span>
                      </motion.div>
                    )}

                    {status === 'error' && (
                      <motion.div 
                        key="error"
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2"
                      >
                        <span>Error. Try Again.</span>
                      </motion.div>
                    )}

                    {status === 'idle' && (
                      <motion.div 
                        key="idle"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        className="flex items-center gap-2"
                      >
                        <Send className="w-6 h-6" />
                        <span>Subscribe</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </form>
              <p className="text-slate-400 text-sm mt-4 leading-relaxed">We respect your privacy and will never share your information.</p>
            </div>

            {/* Trust Indicators Grid */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 border-b border-slate-700 pb-4">Trusted by Industry</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700">
                  <div className="text-2xl font-bold text-blue-500 mb-1">675+</div>
                  <div className="text-sm font-medium text-slate-300">Enterprise Clients</div>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700">
                  <div className="text-2xl font-bold text-emerald-500 mb-1">$12.5M+</div>
                  <div className="text-sm font-medium text-slate-300">Value Recovered</div>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700">
                  <div className="text-2xl font-bold text-indigo-500 mb-1">100%</div>
                  <div className="text-sm font-medium text-slate-300">Process Adherence</div>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700">
                  <div className="text-2xl font-bold text-cyan-500 mb-1">15+</div>
                  <div className="text-sm font-medium text-slate-300">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MODIFIED: Regulatory Standards Section */}
        <div className="border-t border-slate-700 pt-12 pb-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text">
                Regulatory Standards & Protocols
              </span>
            </h3>
            <p className="text-slate-300 mb-10 max-w-4xl mx-auto text-lg leading-relaxed">
              Our workflows are strictly aligned with leading federal and industry frameworks, ensuring full audit readiness and data security.
            </p>
            
            <div className="flex flex-wrap justify-center gap-8">
              {[
                { name: 'NIST 800-88 Protocols', icon: Shield, color: 'text-blue-500', border: 'hover:border-blue-500/50' },
                { name: 'HIPAA Security Standards', icon: Heart, color: 'text-rose-500', border: 'hover:border-rose-500/50' },
                { name: 'Corporate Audit Trails', icon: FileCheck, color: 'text-amber-500', border: 'hover:border-amber-500/50' },
                { name: 'EPA Regulatory Standards', icon: Leaf, color: 'text-emerald-500', border: 'hover:border-emerald-500/50' },
              ].map((badge) => (
                <motion.div 
                  key={badge.name}
                  className={`bg-slate-800/80 px-8 py-6 rounded-xl text-slate-300 hover:text-white transition-all duration-300 hover:shadow-lg border border-slate-700 ${badge.border} group`}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="flex items-center space-x-4">
                    <badge.icon className={`w-6 h-6 ${badge.color} group-hover:text-white transition-colors`} />
                    <span className="font-medium text-lg">{badge.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-700 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-base">
            <div className="text-slate-400">
              © {new Date().getFullYear()} IT Asset Solutions. All rights reserved.
            </div>

            <div className="flex items-center space-x-8">
              <Link to="/privacy-policy" className="text-slate-400 hover:text-white transition-colors" onClick={scrollToTop}>Privacy Policy</Link>
              <Link to="/terms-and-conditions" className="text-slate-400 hover:text-white transition-colors" onClick={scrollToTop}>Terms of Service</Link>
              {/* CORRECT SITEMAP LINK */}
              <a href="/sitemap.xml" className="text-slate-400 hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;