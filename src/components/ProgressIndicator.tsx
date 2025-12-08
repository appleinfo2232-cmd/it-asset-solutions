import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  Shield,
  Briefcase,
  Star,
  Award,
  Lock,
  Building,
  TrendingUp,
  MapPin,
  Users,
  Book,
  Zap,
  HelpCircle,
  Mail
} from 'lucide-react';

const ProgressIndicator: React.FC = () => {
  const [activeSection, setActiveSection] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const sections = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'risks', label: 'Risks', icon: Shield },
    { id: 'services', label: 'Services', icon: Briefcase },
    { id: 'testimonials', label: 'Reviews', icon: Star },
    { id: 'comparison', label: 'Compare', icon: Award },
    { id: 'certifications', label: 'Compliance', icon: Lock },
    { id: 'process', label: 'Process', icon: TrendingUp },
    { id: 'scale', label: 'Scale', icon: Building },
    { id: 'equipment', label: 'Equipment', icon: Zap },
    { id: 'industries', label: 'Industries', icon: MapPin },
    { id: 'numbers', label: 'Stats', icon: Users },
    { id: 'resources', label: 'Resources', icon: Book },
    { id: 'getting-started', label: 'Get Started', icon: Zap },
    { id: 'faq', label: 'FAQ', icon: HelpCircle },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollProgress(progress);

      const heroElement = document.getElementById('home');
      const heroHeight = heroElement ? heroElement.offsetHeight : windowHeight;
      setIsVisible(scrollTop > heroHeight * 0.7);

      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      }));

      for (const section of sectionElements) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
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
          {/* Progress Bar */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-[60]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-curious-blue via-mountain-meadow to-java"
              style={{ width: `${scrollProgress}%` }}
              transition={{ duration: 0.1 }}
            />
          </motion.div>

          {/* Floating Navigation Dots */}
          <motion.div
            className="fixed right-4 top-48 z-[55] hidden xl:block max-h-[calc(100vh-14rem)] overflow-y-auto custom-scrollbar"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white/95 backdrop-blur-xl rounded-full shadow-2xl border border-gray-200 p-3 space-y-2">
              {sections.map((section, index) => {
                const Icon = section.icon;
                const isActive = activeSection === section.id;

                return (
                  <motion.button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`group relative flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-curious-blue to-java'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                    aria-label={`Navigate to ${section.label}`}
                  >
                    <Icon
                      className={`w-4 h-4 transition-colors duration-300 ${
                        isActive ? 'text-white' : 'text-gray-600 group-hover:text-gray-800'
                      }`}
                      strokeWidth={2}
                      style={{ flexShrink: 0 }}
                    />

                    {/* Tooltip */}
                    <motion.div
                      className="absolute right-12 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none"
                      initial={{ opacity: 0, x: 10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                    >
                      {section.label}
                      <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900" />
                    </motion.div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Mobile Progress Indicator */}
          <motion.div
            className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 xl:hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white/95 backdrop-blur-xl rounded-full shadow-2xl border border-gray-200 px-6 py-3 flex items-center space-x-3">
              <div className="text-sm font-semibold text-gray-700">
                {Math.round(scrollProgress)}%
              </div>
              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-curious-blue via-mountain-meadow to-java"
                  style={{ width: `${scrollProgress}%` }}
                  transition={{ duration: 0.1 }}
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
