import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  BarChart3,
  ShieldAlert,
  Briefcase,
  Calculator,
  Zap, // Used for the "Start/Estimate" section
  Scale,
  RefreshCw,
  Lock,
  Building,
  Server,
  MapPin,
  Award,
  Star,
  Target,
  Book,
  HelpCircle,
  Mail
} from 'lucide-react';

const ProgressIndicator: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // LOGIC: This array matches the exact order of sections in your new HomePage.tsx
  const sections = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'numbers', label: 'Impact', icon: BarChart3 },
    { id: 'risks', label: 'Risks', icon: ShieldAlert },
    { id: 'services', label: 'Services', icon: Briefcase },
    { id: 'calculator', label: 'Value', icon: Calculator },
    { id: 'estimate', label: 'Start', icon: Zap }, // Matches <section id="estimate">
    { id: 'liability', label: 'Liability', icon: Scale },
    { id: 'process', label: 'Process', icon: RefreshCw },
    { id: 'certifications', label: 'Standards', icon: Lock },
    { id: 'scale', label: 'Scale', icon: Building },
    { id: 'equipment', label: 'Equipment', icon: Server },
    { id: 'industries', label: 'Sectors', icon: MapPin },
    { id: 'comparison', label: 'Why Us', icon: Award },
    { id: 'testimonials', label: 'Reviews', icon: Star },
    { id: 'mission', label: 'Mission', icon: Target },
    { id: 'resources', label: 'Resources', icon: Book },
    { id: 'faq', label: 'FAQ', icon: HelpCircle },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // 1. Calculate Global Progress Bar
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      const totalScrollable = documentHeight - windowHeight;
      const progress = totalScrollable > 0 ? (scrollTop / totalScrollable) * 100 : 0;
      setScrollProgress(progress);

      // 2. Toggle Visibility (Hide on Hero section to avoid clutter)
      setIsVisible(scrollTop > 400);

      // 3. Determine Active Section (Center-Screen Logic)
      // This helps update the active dot based on what is currently in the middle of the viewport
      let currentSection = activeSection;
      let minDistance = Infinity;

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Calculate distance from the center of the element to the center of the viewport
          const elementCenter = rect.top + rect.height / 2;
          const viewportCenter = windowHeight / 2;
          const distance = Math.abs(viewportCenter - elementCenter);

          // If this section is closer to the center than the previous best match, select it
          if (distance < minDistance && distance < windowHeight * 0.6) {
             minDistance = distance;
             currentSection = section.id;
          }
        }
      });
      
      setActiveSection(currentSection);
    };

    // Passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Offset to account for the fixed header height
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* --- GLOBAL PROGRESS BAR (TOP) --- */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-1.5 bg-gray-200/50 z-[9999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-emerald-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
              style={{ width: `${scrollProgress}%` }}
              transition={{ ease: "linear", duration: 0.1 }}
            />
          </motion.div>

          {/* --- SIDEBAR NAVIGATION (DESKTOP) --- */}
          {/* xl:block ensures it appears on standard laptops (1280px+) */}
          <motion.div
            className="fixed right-3 top-1/2 transform -translate-y-1/2 z-[50] hidden xl:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.4 }}
          >
            <div className="bg-white/80 backdrop-blur-md rounded-full shadow-2xl border border-slate-200/60 p-1.5 space-y-1.5 max-h-[85vh] overflow-y-auto hide-scrollbar flex flex-col">
              {sections.map((section) => {
                const Icon = section.icon;
                const isActive = activeSection === section.id;

                return (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`group relative flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md scale-100'
                        : 'bg-transparent hover:bg-slate-100 scale-90'
                    }`}
                    aria-label={`Scroll to ${section.label}`}
                  >
                    <Icon
                      className={`w-3.5 h-3.5 transition-colors duration-300 ${
                        isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-600'
                      }`}
                      strokeWidth={isActive ? 2.5 : 2}
                    />

                    {/* Tooltip Label */}
                    <span className="absolute right-10 bg-slate-900 text-white px-2 py-1 rounded-md text-[10px] font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-xl border border-slate-700">
                      {section.label}
                      {/* Tooltip Arrow */}
                      <span className="absolute -right-1 top-1/2 transform -translate-y-1/2 rotate-45 w-2 h-2 bg-slate-900 border-r border-t border-slate-700" />
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* --- MOBILE/TABLET INDICATOR (BOTTOM) --- */}
          {/* xl:hidden ensures it hides when the sidebar appears */}
          <motion.div
            className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 xl:hidden pointer-events-none"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white/95 backdrop-blur-xl rounded-full shadow-2xl border border-slate-200 px-4 py-2 flex items-center gap-3 pointer-events-auto">
              <span className="text-xs font-bold text-slate-500 font-mono w-8 text-right">
                {Math.round(scrollProgress)}%
              </span>
              
              <div className="w-20 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 to-emerald-500"
                  style={{ width: `${scrollProgress}%` }}
                  transition={{ ease: "linear", duration: 0.1 }}
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProgressIndicator;