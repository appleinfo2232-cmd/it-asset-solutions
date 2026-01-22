import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Menu, X, ChevronDown, Phone,
  Linkedin, Facebook, Shield, Award, Truck,
  Lock, FileText, ShoppingCart, HandCoins
} from 'lucide-react';
import { COMPANY_INFO, SOCIAL_LINKS } from '../utils/constants';

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

// --- INTERFACES ---
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

// --- UTILITY: SCROLL TO SECTION ---
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (!element) return;

  const headerOffset = 100;
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
};

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const { scrollY } = useScroll();
  const prevYRef = useRef<number>(0);
  const pendingScrollRef = useRef<string | null>(null);

  const navigate = useNavigate();
  const location = useLocation();

  // --- SCROLL LISTENER ---
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = prevYRef.current || 0;

    // Hide header on scroll down (>100px), show on scroll up
    if (latest > 100 && latest > previous) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }

    // Add glass effect immediately after scrolling starts
    setIsScrolled(latest > 10);

    prevYRef.current = latest;
  });

  // --- NAVIGATION LOGIC ---
  const handleInteraction = (href: string, type: 'link' | 'scroll', e?: React.MouseEvent) => {
    // Close mobile menu and any open dropdowns
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);

    if (type === 'scroll') {
      e?.preventDefault();
      const sectionId = href.replace('#', '');

      // If we're not on the homepage, navigate there and perform the scroll after navigation completes
      if (location.pathname !== '/') {
        pendingScrollRef.current = sectionId;
        navigate('/');
      } else {
        scrollToSection(sectionId);
      }

      return;
    }
  };

  // After navigation to home, if we have a pending section to scroll to, perform it
  useEffect(() => {
    if (location.pathname === '/' && pendingScrollRef.current) {
      // Give React a tick to render DOM
      setTimeout(() => {
        if (pendingScrollRef.current) scrollToSection(pendingScrollRef.current);
        pendingScrollRef.current = null;
      }, 0);
    }
  }, [location.pathname]);

  // --- NAV CONFIGURATION (services subpages verified) ---
  const navItems: NavItem[] = [
    { name: 'Home', href: '/', type: 'link' },
    {
      name: 'Services',
      href: '/services',
      type: 'link',
      dropdown: [
        { name: 'Enterprise ITAD', href: '/services/enterprise-itad', icon: Shield, type: 'link' },
        { name: 'Value Recovery', href: '/services/it-asset-value-recovery', icon: Award, type: 'link' },
        { name: 'Secure Logistics', href: '/services/secure-chain-of-custody-logistics', icon: Truck, type: 'link' },
        { name: 'Data Destruction', href: '/services/secure-data-destruction', icon: Lock, type: 'link' },
        { name: 'Auditing & Reporting', href: '/services/auditing-compliance-reporting', icon: FileText, type: 'link' },
        { name: 'Wholesale Sales', href: '/wholesale-it-equipment', icon: ShoppingCart, type: 'link' },
      ],
    },
    { name: 'IT Buyback', href: '/services/corporate-it-buyback', type: 'link', icon: HandCoins, highlight: true },
    { name: 'Blog', href: '/blog', type: 'link' },
    { name: 'About', href: '/about', type: 'link' },
    { name: 'Contact', href: '/contact', type: 'link' },
  ];

  // --- ACTIVE DETECTION ---
  const isActive = (item: NavItem) => {
    // If the item has dropdown children, check those first (they are more specific)
    if (item.dropdown && item.dropdown.some((sub) => location.pathname.startsWith(sub.href))) return true;

    // Exact root handling
    if (item.href === '/') return location.pathname === '/';

    // Generic startsWith match (so /services matches /services/*)
    if (item.href !== '/' && location.pathname.startsWith(item.href)) return true;

    return location.pathname === item.href;
  };

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-[#0ea5e9] focus:text-white focus:rounded-lg focus:shadow-2xl focus:font-bold"
      >
        Skip to main content
      </a>

      {/* MAIN HEADER */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-slate-100' : 'bg-white border-transparent'
        }`}
        variants={{
          visible: { y: 0 },
          hidden: { y: '-100%' },
        }}
        animate={isHidden ? 'hidden' : 'visible'}
        transition={{ duration: 0.28, ease: 'easeInOut' }}
      >
        <nav className="max-w-7xl mx-auto px-4 lg:px-8" role="navigation" aria-label="Main">
          <div className="flex items-center justify-between h-20">
            {/* LOGO */}
            <Link
              to="/"
              onClick={() => {
                setIsMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex-shrink-0 group relative z-50"
              aria-label="Go to Homepage"
            >
              <img
                src="/it-asset-solutions-new-logo.webp"
                alt="IT Asset Solutions - Enterprise ITAD Services"
                className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
                width={200}
                height={48}
              />
            </Link>

            {/* DESKTOP NAV - CENTERED */}
            <ul className="hidden xl:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.name} className="relative group">
                    {item.dropdown ? (
                      // --- DROPDOWN ITEM ---
                      <div
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                        className="h-20 flex items-center"
                      >
                        <Link
                          to={item.href}
                          aria-haspopup="menu"
                          aria-expanded={activeDropdown === item.name}
                          className={`flex items-center gap-1 px-3 py-2 text-sm font-bold transition-colors rounded-lg cursor-pointer
                          ${
                            activeDropdown === item.name || isActive(item)
                              ? 'text-[#0ea5e9] bg-blue-50'
                              : 'text-slate-700 hover:text-[#0ea5e9] hover:bg-slate-50'
                          }`}
                          onClick={(e) => handleInteraction(item.href, item.type, e)}
                        >
                          {item.name}
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                        </Link>

                        {/* Dropdown Content */}
                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div
                              key={`${item.name}-dropdown`}
                              initial={{ opacity: 0, y: 10, scale: 0.98 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 10, scale: 0.98 }}
                              transition={{ duration: 0.18 }}
                              className="absolute top-[80%] left-1/2 -translate-x-1/2 w-72 pt-4 z-50"
                            >
                              <div className="bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden ring-1 ring-black/5">
                                <ul className="py-2">
                                  {item.dropdown.map((subItem) => {
                                    const SubIcon = subItem.icon;
                                    return (
                                      <li key={subItem.name}>
                                        <Link
                                          to={subItem.href}
                                          onClick={(e) => handleInteraction(subItem.href, subItem.type, e)}
                                          className="flex w-full items-center gap-3 px-4 py-3 hover:bg-slate-50 transition-colors group/item text-left"
                                        >
                                          <div className="p-2 bg-slate-100 text-[#0ea5e9] rounded-lg group-hover/item:bg-[#0ea5e9] group-hover/item:text-white transition-colors">
                                            {SubIcon && <SubIcon className="w-4 h-4" />}
                                          </div>
                                          <span className="text-sm font-medium text-slate-700 group-hover/item:text-[#0ea5e9]">{subItem.name}</span>
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      // --- STANDARD ITEM ---
                      <Link
                        to={item.href}
                        onClick={(e) => handleInteraction(item.href, item.type, e)}
                        className={`flex items-center gap-2 px-3 py-2 text-sm font-bold rounded-lg transition-all duration-200
                        ${
                          item.highlight
                            ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5e9] to-[#22c55e] hover:opacity-80'
                            : isActive(item)
                            ? 'text-[#0ea5e9] bg-blue-50'
                            : 'text-slate-700 hover:text-[#0ea5e9] hover:bg-slate-50'
                        }`}
                      >
                        {Icon && <Icon className={`w-4 h-4 ${item.highlight ? 'text-[#0ea5e9]' : ''}`} />}
                        {item.name}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* ACTION AREA (Socials + Phone + Quote) */}
            <div className="hidden lg:flex items-center gap-4">
              {/* SOCIAL ICONS (Highlighted) */}
              <div className="flex items-center gap-3 pr-4 border-r border-slate-200">
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-[#0077b5]/10 text-[#0077b5]
                             hover:bg-[#0077b5] hover:text-white
                             shadow-sm hover:shadow-lg hover:scale-110 transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-[#1877F2]/10 text-[#1877F2]
                             hover:bg-[#1877F2] hover:text-white
                             shadow-sm hover:shadow-lg hover:scale-110 transition-all duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>

                {/* --- UPDATED TWITTER/X BUTTON --- */}
                <a
                  href={SOCIAL_LINKS.twitter || 'https://twitter.com/ITAssetSols'} 
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-slate-900/10 text-slate-900
                             hover:bg-black hover:text-white
                             shadow-sm hover:shadow-lg hover:scale-110 transition-all duration-200"
                  aria-label="X (Twitter)"
                >
                  <XIcon className="w-4 h-4" />
                </a>
                {/* ----------------------------- */}

              </div>

              {/* PHONE BUTTON */}
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-bold text-[#0ea5e9] border-2 border-[#0ea5e9]/20 bg-transparent rounded-xl hover:border-[#0ea5e9] hover:bg-[#0ea5e9]/5 transition-all active:scale-95 whitespace-nowrap"
              >
                <Phone className="w-4 h-4" />
                <span>{COMPANY_INFO.phone}</span>
              </a>

              {/* QUOTE BUTTON */}
              <Link
                to="/contact"
                className="px-6 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-[#0ea5e9] to-[#22c55e] rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all active:scale-95 whitespace-nowrap"
              >
                Get Quote
              </Link>
            </div>

            {/* MOBILE MENU TOGGLE */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]"
              aria-label="Toggle Menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* MOBILE MENU DROPDOWN */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* BACKDROP */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 xl:hidden"
                style={{ top: '80px' }}
              />

              {/* MENU PANEL */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="xl:hidden bg-white border-t border-slate-100 overflow-hidden shadow-xl absolute left-0 right-0 z-50"
              >
                <div className="px-4 py-6 space-y-2 max-h-[85vh] overflow-y-auto custom-scrollbar">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.name} className="border-b border-slate-50 last:border-0 pb-2 last:pb-0">
                        {item.dropdown ? (
                          <div>
                            <div className="flex items-center justify-between w-full">
                              <Link
                                to={item.href}
                                onClick={(e) => handleInteraction(item.href, item.type, e)}
                                className={`py-3 text-base font-bold ${isActive(item) ? 'text-[#0ea5e9]' : 'text-slate-800'}`}
                              >
                                {item.name}
                              </Link>
                              <button
                                onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                                className="p-3"
                                aria-expanded={activeDropdown === item.name}
                                aria-controls={`${item.name}-mobile-submenu`}
                              >
                                <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                              </button>
                            </div>

                            <AnimatePresence>
                              {activeDropdown === item.name && (
                                <motion.ul
                                  id={`${item.name}-mobile-submenu`}
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  className="pl-4 space-y-1 bg-slate-50/50 rounded-lg mb-2"
                                >
                                  {item.dropdown!.map((subItem) => {
                                    const SubIcon = subItem.icon;
                                    return (
                                      <li key={subItem.name}>
                                        <Link
                                          to={subItem.href}
                                          onClick={(e) => handleInteraction(subItem.href, subItem.type, e)}
                                          className="flex w-full items-center gap-3 py-3 text-sm font-medium text-slate-600 hover:text-[#0ea5e9]"
                                        >
                                          {SubIcon && <SubIcon className="w-5 h-5 text-[#0ea5e9]" />}
                                          {subItem.name}
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </motion.ul>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <Link
                            to={item.href}
                            onClick={(e) => handleInteraction(item.href, item.type, e)}
                            className={`flex w-full items-center gap-2 py-3 text-base font-bold ${
                              isActive(item) ? 'text-[#0ea5e9] bg-blue-50/50 px-2 rounded' : 'text-slate-800'
                            } ${item.highlight ? 'text-[#0ea5e9]' : ''}`}
                          >
                            {Icon && <Icon className="w-5 h-5" />}
                            {item.name}
                          </Link>
                        )}
                      </div>
                    );
                  })}

                  {/* MOBILE CTA & SOCIALS */}
                  <div className="pt-6 space-y-4">
                    {/* Socials in Mobile Menu (Highlighted) */}
                    <div className="flex justify-center gap-6 pb-4 border-b border-slate-100">
                      <a
                        href={SOCIAL_LINKS.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 rounded-2xl bg-[#0077b5]/10 text-[#0077b5]
                                   hover:bg-[#0077b5] hover:text-white
                                   hover:scale-110 shadow-md transition"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-6 h-6" />
                      </a>
                      <a
                        href={SOCIAL_LINKS.facebook}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 rounded-2xl bg-[#1877F2]/10 text-[#1877F2]
                                   hover:bg-[#1877F2] hover:text-white
                                   hover:scale-110 shadow-md transition"
                        aria-label="Facebook"
                      >
                        <Facebook className="w-6 h-6" />
                      </a>
                      
                      {/* --- UPDATED TWITTER/X MOBILE BUTTON --- */}
                      <a
                        href={SOCIAL_LINKS.twitter || 'https://twitter.com/ITAssetSols'} // Fallback
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 rounded-2xl bg-slate-900/10 text-slate-900
                                   hover:bg-slate-900 hover:text-white
                                   hover:scale-110 shadow-md transition"
                        aria-label="Twitter X"
                      >
                        <XIcon className="w-5 h-5" />
                      </a>
                      {/* ------------------------------------ */}
                    </div>

                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="flex items-center justify-center gap-2 w-full py-3.5 font-bold text-[#0ea5e9] border-2 border-[#0ea5e9]/20 rounded-xl active:bg-blue-50"
                    >
                      <Phone className="w-5 h-5" />
                      {COMPANY_INFO.phone}
                    </a>
                    <Link
                      to="/contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-center w-full py-3.5 font-bold text-white bg-gradient-to-r from-[#0ea5e9] to-[#22c55e] rounded-xl shadow-lg"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;