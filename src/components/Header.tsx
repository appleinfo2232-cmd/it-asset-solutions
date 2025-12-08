import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Menu, X, ChevronDown, Phone, Mail, 
  Linkedin, Facebook, Shield, Award, Truck, 
  Lock, FileText, ShoppingCart, HandCoins 
} from 'lucide-react';
import { COMPANY_INFO, SOCIAL_LINKS } from '../utils/constants';
import { scrollToSection } from '../utils/navigation';

interface DropdownItem {
  name: string;
  href: string;
  icon: React.ElementType;
  type: 'link' | 'scroll';
}

interface NavItem {
  name: string;
  href: string;
  type: 'link' | 'scroll';
  icon?: React.ElementType;
  dropdown?: DropdownItem[];
  highlight?: boolean;
}

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > 50 && latest > previous) {
      setIsHidden(true); 
    } else {
      setIsHidden(false); 
    }
    setIsScrolled(latest > 20);
  });

  const handleNavigation = (href: string, type: 'link' | 'scroll') => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    if (type === 'scroll') {
      const sectionId = href.replace('#', '');
      scrollToSection(sectionId, '/');
    }
  };

  const navItems: NavItem[] = [
    { name: 'Home', href: '/', type: 'link' },
    {
      name: 'Services',
      href: '#services',
      type: 'scroll',
      dropdown: [
        { name: 'Enterprise ITAD', href: '/services/enterprise-itad', icon: Shield, type: 'link' },
        { name: 'Asset Value Recovery', href: '/services/it-asset-value-recovery', icon: Award, type: 'link' },
        { name: 'Secure Logistics', href: '/services/secure-chain-of-custody-logistics', icon: Truck, type: 'link' },
        { name: 'Data Destruction', href: '/services/secure-data-destruction', icon: Lock, type: 'link' },
        { name: 'Compliance Reporting', href: '/services/auditing-compliance-reporting', icon: FileText, type: 'link' },
        { name: 'Wholesale Sales', href: '/wholesale-it-equipment', icon: ShoppingCart, type: 'link' }
      ]
    },
    { name: 'IT Buyback', href: '/services/corporate-it-buyback', type: 'link', icon: HandCoins, highlight: true },
    { name: 'About', href: '/about', type: 'link' },
    { name: 'Contact', href: '/contact', type: 'link' },
  ];

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-[#0ea5e9] focus:text-white focus:rounded-lg focus:shadow-2xl focus:font-bold">
        Skip to main content
      </a>

      <motion.div
        className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-[#0ea5e9] via-[#16c77d] to-[#22c55e] text-white h-10 shadow-sm"
        variants={{ visible: { y: 0 }, hidden: { y: -40 } }}
        animate={isHidden ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8 h-full flex items-center justify-between text-[11px] sm:text-xs font-medium">
          <div className="flex items-center gap-4 sm:gap-6">
            <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
              <Phone className="w-3.5 h-3.5" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <a href={`mailto:${COMPANY_INFO.email}`} className="hidden xs:flex items-center gap-1.5 hover:opacity-80 transition-opacity">
              <Mail className="w-3.5 h-3.5" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:scale-110 transition-transform opacity-90 hover:opacity-100">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:scale-110 transition-transform opacity-90 hover:opacity-100">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>
      </motion.div>

      <motion.header
        className={`fixed left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-slate-100' : 'bg-white border-transparent'
        }`}
        variants={{ 
          top: { top: 40 }, 
          scrolled: { top: 0 } 
        }}
        animate={isHidden ? "scrolled" : "top"}
        transition={{ duration: 0.3 }}
      >
        <nav className="max-w-7xl mx-auto px-4 lg:px-8" role="navigation" aria-label="Main">
          <div className="flex items-center justify-between h-20">
            
            <Link to="/" className="flex-shrink-0 group" aria-label="Go to Homepage">
              <img
                src="/it-asset-solutions-new-logo.webp"
                alt="IT Asset Solutions - Enterprise ITAD Services"
                className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
                width="200"
                height="48"
                // Fixed: Changed fetchPriority to fetchpriority (lowercase) to fix React warning
                fetchpriority="high"
              />
            </Link>

            <ul className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navItems.map((item) => (
                <li key={item.name} className="relative group">
                  {item.dropdown ? (
                    <div
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                      className="h-20 flex items-center"
                    >
                      <Link
                        to={item.type === 'link' ? item.href : '#'}
                        onClick={(e) => {
                          if (item.type === 'scroll') {
                            e.preventDefault();
                            handleNavigation(item.href, 'scroll');
                          }
                        }}
                        className={`flex items-center gap-1 px-3 py-2 text-sm font-bold transition-colors rounded-lg cursor-pointer
                          ${activeDropdown === item.name ? 'text-[#0ea5e9] bg-blue-50' : 'text-slate-700 hover:text-[#0ea5e9] hover:bg-slate-50'}`}
                        aria-expanded={activeDropdown === item.name}
                        aria-haspopup="true"
                      >
                        {item.name}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                      </Link>

                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.98 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-[80%] left-1/2 -translate-x-1/2 w-72 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden ring-1 ring-black/5"
                          >
                            <ul className="py-2">
                              {item.dropdown.map((subItem) => (
                                <li key={subItem.name}>
                                  <Link
                                    to={subItem.type === 'link' ? subItem.href : '#'}
                                    onClick={(e) => {
                                      if (subItem.type === 'scroll') {
                                        e.preventDefault();
                                        handleNavigation(subItem.href, 'scroll');
                                      }
                                    }}
                                    className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition-colors group/item"
                                  >
                                    <div className="p-2 bg-slate-100 text-[#0ea5e9] rounded-lg group-hover/item:bg-[#0ea5e9] group-hover/item:text-white transition-colors">
                                      <subItem.icon className="w-4 h-4" />
                                    </div>
                                    <span className="text-sm font-medium text-slate-700 group-hover/item:text-[#0ea5e9]">
                                      {subItem.name}
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.type === 'link' ? item.href : '#'}
                      onClick={(e) => {
                        if (item.type === 'scroll') {
                          e.preventDefault();
                          handleNavigation(item.href, 'scroll');
                        }
                      }}
                      className={`flex items-center gap-2 px-3 py-2 text-sm font-bold rounded-lg transition-all duration-200
                        ${item.highlight 
                          ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5e9] to-[#22c55e] hover:opacity-80' 
                          : 'text-slate-700 hover:text-[#0ea5e9] hover:bg-slate-50'
                        }`}
                    >
                      {item.icon && <item.icon className={`w-4 h-4 ${item.highlight ? 'text-[#0ea5e9]' : ''}`} />}
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-[#0ea5e9] border-2 border-[#0ea5e9]/20 bg-transparent rounded-xl hover:border-[#0ea5e9] hover:bg-[#0ea5e9]/5 transition-all active:scale-95"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
              <button
                onClick={() => handleNavigation('contact', 'scroll')}
                className="px-6 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-[#0ea5e9] to-[#22c55e] rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all active:scale-95"
              >
                Get Quote
              </button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]"
              aria-label="Toggle Menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden bg-white border-t border-slate-100 overflow-hidden shadow-xl"
            >
              <div className="px-4 py-6 space-y-2 max-h-[85vh] overflow-y-auto">
                {navItems.map((item) => (
                  <div key={item.name} className="border-b border-slate-50 last:border-0 pb-2 last:pb-0">
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                          className="flex items-center justify-between w-full py-3 text-base font-bold text-slate-800"
                        >
                          {item.name}
                          <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.ul
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="pl-4 space-y-1 bg-slate-50/50 rounded-lg mb-2"
                            >
                              <li>
                                <Link
                                    to={item.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavigation(item.href, 'scroll');
                                    }}
                                    className="flex items-center gap-3 py-3 text-sm font-bold text-[#0ea5e9]"
                                >
                                    View All Services
                                </Link>
                              </li>
                              {item.dropdown.map((subItem) => (
                                <li key={subItem.name}>
                                  <Link
                                    to={subItem.type === 'link' ? subItem.href : '#'}
                                    onClick={(e) => {
                                      if (subItem.type === 'scroll') {
                                        e.preventDefault();
                                        handleNavigation(subItem.href, 'scroll');
                                      } else {
                                        setIsMobileMenuOpen(false);
                                      }
                                    }}
                                    className="flex items-center gap-3 py-3 text-sm font-medium text-slate-600 hover:text-[#0ea5e9]"
                                  >
                                    <subItem.icon className="w-4 h-4 text-[#0ea5e9]" />
                                    {subItem.name}
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.type === 'link' ? item.href : '#'}
                        onClick={(e) => {
                          if (item.type === 'scroll') {
                            e.preventDefault();
                            handleNavigation(item.href, 'scroll');
                          } else {
                            setIsMobileMenuOpen(false);
                          }
                        }}
                        className={`flex items-center gap-2 py-3 text-base font-bold ${item.highlight ? 'text-[#0ea5e9]' : 'text-slate-800'}`}
                      >
                        {item.icon && <item.icon className="w-5 h-5" />}
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}

                <div className="pt-6 space-y-3">
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="flex items-center justify-center gap-2 w-full py-3.5 font-bold text-[#0ea5e9] border-2 border-[#0ea5e9]/20 rounded-xl active:bg-blue-50"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
                  <button
                    onClick={() => handleNavigation('contact', 'scroll')}
                    className="w-full py-3.5 font-bold text-white bg-gradient-to-r from-[#0ea5e9] to-[#22c55e] rounded-xl shadow-lg"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;