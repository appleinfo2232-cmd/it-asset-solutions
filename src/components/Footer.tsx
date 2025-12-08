import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { COMPANY_INFO, SOCIAL_LINKS } from '../utils/constants';
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
  ExternalLink,
  Clock,
  Users,
  Building,
  Star,
  Zap,
  CheckCircle,
  Globe,
  Heart,
  TrendingUp,
  Lock,
  DollarSign,
  RefreshCw,
  Truck,
  ShoppingCart,
  Recycle,
  FileText,
  Home,
  Send,
  HandCoins,
  Boxes,
  Sparkles
} from 'lucide-react';
import { useState } from 'react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your newsletter service
    console.log('Subscribing email:', email);
    setIsSubscribed(true);
    setEmail('');
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  // Core services list (only 4 main services)
  const coreServices = [
    { name: 'Enterprise IT Asset Disposition (ITAD)', href: '/services/enterprise-itad', icon: Shield },
    { name: 'Value Recovery & Asset Remarketing', href: '/services/it-asset-value-recovery', icon: Award },
    { name: 'Secure Chain-of-Custody Logistics', href: '/services/secure-chain-of-custody-logistics', icon: Truck },
    { name: 'Guaranteed Data Destruction', href: '/services/secure-data-destruction', icon: Lock },
    { name: 'Auditing & Compliance Reporting', href: '/services/auditing-compliance-reporting', icon: FileText },
    { name: 'Wholesale IT Equipment', href: '/wholesale-it-equipment', icon: ShoppingCart }
  ];

  // Quick links with proper routing
  const quickLinks = [
    { name: 'Home', href: '/', icon: ArrowRight },
    { name: 'About Us', href: '/about', icon: ArrowRight },
    { name: 'Contact', href: '/contact', icon: ArrowRight },
    { name: 'Wholesale Equipment', href: '/wholesale-it-equipment', icon: ArrowRight },
  ];

  // Social links
  const socialLinks = [
    { 
      icon: Facebook, 
      href: 'https://www.facebook.com/people/It-Asset-Solutions/100083165808782/', 
      label: 'Facebook'
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/company/it-asset-solutions', 
      label: 'LinkedIn'
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden w-full">
      {/* Subtle background elements */}
      <motion.div 
        className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-curious-blue/30 to-mountain-meadow/30 rounded-full blur-3xl will-change-transform"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-java/30 to-tradewind/30 rounded-full blur-3xl will-change-transform"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Back to top button */}
      <div className="relative z-20">
        <motion.button
          onClick={scrollToTop}
          className="absolute right-8 -top-6 bg-gradient-to-r from-curious-blue to-java p-4 rounded-full shadow-xl text-white hover:shadow-2xl"
          whileHover={{ y: -3, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        {/* Three-column Footer Layout with Better Spacing */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-16">
          
          {/* Column 1: Company Information - Wider */}
          <div className="lg:col-span-1">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link to="/" className="block mb-6" aria-label="Home">
                <img
                  src="/it-asset-solutions-new-logo.webp"
                  alt="IT Asset Solutions Logo"
                  className="w-auto h-16 object-contain"
                />
              </Link>

              <motion.div
                className="relative mb-10"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative bg-gradient-to-r from-gray-800/40 to-gray-800/40 border-l-4 border-curious-blue rounded-lg pl-6 pr-4 py-5 shadow-lg">
                  <p className="text-gray-100 font-semibold text-lg leading-relaxed tracking-wide">
                    Transforming retired technology into strategic value.
                  </p>
                  <div className="mt-3 h-px bg-gradient-to-r from-curious-blue via-mountain-meadow to-transparent"></div>
                </div>
              </motion.div>

              {/* Contact Info with Better Spacing */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-curious-blue/20 p-3 rounded-lg flex-shrink-0">
                    <MapPin className="w-6 h-6 text-curious-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg mb-1">Our Location</h4>
                    <span className="text-gray-300 text-base leading-relaxed">{COMPANY_INFO.address}</span>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-mountain-meadow/20 p-3 rounded-lg flex-shrink-0">
                    <Phone className="w-6 h-6 text-mountain-meadow" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg mb-1">Call Us</h4>
                    <a href="tel:+1{COMPANY_INFO.phone.replace(/\D/g, '')}" className="text-gray-300 hover:text-mountain-meadow transition-colors text-base">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-java/20 p-3 rounded-lg flex-shrink-0">
                    <Mail className="w-6 h-6 text-java" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg mb-1">Email Us</h4>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-gray-300 hover:text-java transition-colors text-base">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-tradewind/20 p-3 rounded-lg flex-shrink-0">
                    <Clock className="w-6 h-6 text-tradewind" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg mb-1">Business Hours</h4>
                    <span className="text-gray-300 text-base">{COMPANY_INFO.hours}</span>
                  </div>
                </div>
              </div>

              {/* Social Links with Better Spacing */}
              <div className="pt-6">
                <h4 className="font-semibold text-white text-lg mb-4">Follow Us</h4>
                <div className="flex items-center space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-xl bg-gray-800 text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-curious-blue hover:to-java transition-all duration-300 border border-curious-blue/30 hover:border-curious-blue/60"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Column 2: Services & Quick Links */}
          <div className="lg:col-span-1 space-y-12">
            {/* Quick Links */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 border-b border-gray-700 pb-4">Quick Links</h3>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-gray-300 hover:text-curious-blue transition-colors duration-300 flex items-center space-x-3 group text-lg"
                    >
                      <link.icon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 text-curious-blue" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 border-b border-gray-700 pb-4">Our Services</h3>
              <div className="space-y-4">
                {coreServices.map((service) => (
                  <Link 
                    key={service.name}
                    to={service.href} 
                    className="text-gray-300 hover:text-mountain-meadow transition-colors duration-300 flex items-start space-x-3 group"
                  >
                    <service.icon className="w-5 h-5 mt-1 group-hover:scale-110 transition-transform duration-300 text-mountain-meadow flex-shrink-0" />
                    <span className="text-base font-medium leading-relaxed">{service.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          {/* Column 3: Newsletter & Trust Indicators */}
          <div className="lg:col-span-1 space-y-12">
            {/* Newsletter Signup */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 border-b border-gray-700 pb-4">Stay Informed</h3>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">Subscribe to our newsletter for the latest updates on IT asset management best practices and industry news.</p>
              
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="w-full px-5 py-4 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-curious-blue focus:border-transparent text-base"
                  />
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-curious-blue to-java text-white px-6 py-4 rounded-xl font-semibold hover:from-java hover:to-mountain-meadow transition-all duration-300 flex items-center justify-center space-x-3 text-lg shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubscribed}
                >
                  {isSubscribed ? (
                    <>
                      <CheckCircle className="w-6 h-6" />
                      <span>Subscribed!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6" />
                      <span>Subscribe</span>
                    </>
                  )}
                </motion.button>
              </form>
              <p className="text-gray-400 text-sm mt-4 leading-relaxed">We respect your privacy and will never share your information.</p>
            </div>

            {/* Trust Indicators */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 border-b border-gray-700 pb-4">Trusted by Industry</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800/50 rounded-xl p-4 text-center border border-gray-700">
                  <div className="text-2xl font-bold text-curious-blue mb-1">675+</div>
                  <div className="text-sm font-medium text-gray-300">Enterprise Clients</div>
                </div>
                <div className="bg-gray-800/50 rounded-xl p-4 text-center border border-gray-700">
                  <div className="text-2xl font-bold text-mountain-meadow mb-1">$12.5M+</div>
                  <div className="text-sm font-medium text-gray-300">Value Recovered</div>
                </div>
                <div className="bg-gray-800/50 rounded-xl p-4 text-center border border-gray-700">
                  <div className="text-2xl font-bold text-java mb-1">100%</div>
                  <div className="text-sm font-medium text-gray-300">Compliance Rate</div>
                </div>
                <div className="bg-gray-800/50 rounded-xl p-4 text-center border border-gray-700">
                  <div className="text-2xl font-bold text-tradewind mb-1">15+</div>
                  <div className="text-sm font-medium text-gray-300">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance & Standards Section with Better Spacing */}
        <div className="border-t border-gray-700 pt-12 pb-12">
          <div className="text-center relative">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-800/50 to-transparent opacity-30"
              animate={{ opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <h3 className="text-2xl font-bold text-white mb-6 relative">
              <span className="bg-gradient-to-r from-curious-blue to-mountain-meadow text-transparent bg-clip-text">Compliance & Standards</span>
            </h3>
            <p className="text-gray-300 mb-10 max-w-4xl mx-auto relative text-lg leading-relaxed">Our processes are designed in accordance with leading industry and regulatory standards.</p>
            
            <div className="flex flex-wrap justify-center gap-8 relative">
              <motion.div 
                className="bg-gradient-to-br from-gray-800/80 to-gray-700/80 px-8 py-6 rounded-xl text-gray-300 hover:text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(24,169,223,0.3)] border border-gray-700 hover:border-curious-blue/30 group"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center space-x-4">
                  <Shield className="w-6 h-6 text-curious-blue group-hover:text-white transition-colors" />
                  <span className="font-medium text-lg">NIST 800-88 & DoD 5220.22-M</span>
                </div>
              </motion.div>
              <motion.div 
                className="bg-gradient-to-br from-gray-800/80 to-gray-700/80 px-8 py-6 rounded-xl text-gray-300 hover:text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(32,195,110,0.3)] border border-gray-700 hover:border-mountain-meadow/30 group"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center space-x-4">
                  <Heart className="w-6 h-6 text-mountain-meadow group-hover:text-white transition-colors" />
                  <span className="font-medium text-lg">HIPAA/HITECH Compliance</span>
                </div>
              </motion.div>
              <motion.div 
                className="bg-gradient-to-br from-gray-800/80 to-gray-700/80 px-8 py-6 rounded-xl text-gray-300 hover:text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(23,178,177,0.3)] border border-gray-700 hover:border-java/30 group"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center space-x-4">
                  <FileText className="w-6 h-6 text-java group-hover:text-white transition-colors" />
                  <span className="font-medium text-lg">SOX & GLBA Compliance</span>
                </div>
              </motion.div>
              <motion.div 
                className="bg-gradient-to-br from-gray-800/80 to-gray-700/80 px-8 py-6 rounded-xl text-gray-300 hover:text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(75,180,180,0.3)] border border-gray-700 hover:border-tradewind/30 group"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center space-x-4">
                  <Leaf className="w-6 h-6 text-tradewind group-hover:text-white transition-colors" />
                  <span className="font-medium text-lg">EPA Regulations</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Footer with Better Spacing */}
        <div className="border-t border-gray-700 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-base">
              © 2025 IT Asset Solutions. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-8 text-base">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms-and-conditions" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
              <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;