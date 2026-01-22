import React, { lazy, Suspense, useEffect } from 'react'; // Added useEffect
import { Routes, Route, useLocation } from 'react-router-dom';
import ReactGA from "react-ga4"; // NEW: Import GA4
import Header from './components/Header';
import Footer from './components/Footer';
import ContactPage from './pages/ContactPage'; 
import SvgLoader from './components/SvgLoader';
import CookieConsent from './components/CookieConsent';

// --- 1. GOOGLE ANALYTICS INITIALIZATION ---
// Initialize with your Measurement ID once, outside the component
ReactGA.initialize("G-KBFZQR4J97");

// Lazy load page components for performance
const TermsAndConditionsPage = lazy(() => import('./pages/TermsAndConditionsPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const CookiePolicyPage = lazy(() => import('./pages/CookiePolicyPage'));
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage')); // NEW: Restored 404 Page

// --- NEW: Corporate Commitment Pages (Hidden from Menu) ---
const SustainabilityPage = lazy(() => import('./pages/SustainabilityPage'));
const SocialImpactPage = lazy(() => import('./pages/SocialImpactPage'));
const CulturePage = lazy(() => import('./pages/CulturePage'));

// Main Services Overview Page
const ServicesPage = lazy(() => import('./pages/ServicesPage'));

// Core Service Sub-Pages
const EnterpriseITADPage = lazy(() => import('./pages/EnterpriseITADPage'));
const SecureDataDestructionPage = lazy(() => import('./pages/SecureDataDestructionPage'));
const ITAssetValueRecoveryPage = lazy(() => import('./pages/ITAssetValueRecoveryPage'));
const CorporateITBuybackPage = lazy(() => import('./pages/CorporateITBuybackPage'));
const WholesaleITEquipmentPage = lazy(() => import('./pages/WholesaleITEquipmentPage'));
const AuditingComplianceReportingPage = lazy(() => import('./pages/AuditingComplianceReportingPage'));
const SecureChainOfCustodyLogisticsPage = lazy(() => import('./pages/SecureChainOfCustodyLogisticsPage'));

// Blog Components
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogPost = lazy(() => import('./pages/BlogPost')); 

// Loading fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <SvgLoader className="w-36 h-36 mx-auto mb-4" />
    </div>
  </div>
);

function App() {
  const location = useLocation();

  // --- 2. GOOGLE ANALYTICS TRACKING ---
  // Automatically sends a "pageview" to Google whenever the URL changes
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);

  // SEO: Automatically scroll to top when changing pages
  useEffect(() => {
    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(() => window.scrollTo(0, 0));
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-slate-900">
      <Header />
      
      <div className="flex-grow">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            
            {/* --- NEW: Corporate Commitment Routes --- */}
            {/* These pages are live but not linked in the Header menu */}
            <Route path="/sustainability" element={<SustainabilityPage />} />
            <Route path="/social-impact" element={<SocialImpactPage />} />
            <Route path="/culture" element={<CulturePage />} />

            {/* Main Services Route */}
            <Route path="/services" element={<ServicesPage />} />

            {/* Blog Routes */}
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPost />} />

            {/* Core Services Sub-Routes */}
            <Route path="/services/enterprise-itad" element={<EnterpriseITADPage />} />
            <Route path="/services/secure-data-destruction" element={<SecureDataDestructionPage />} />
            <Route path="/services/it-asset-value-recovery" element={<ITAssetValueRecoveryPage />} />
            <Route path="/services/corporate-it-buyback" element={<CorporateITBuybackPage />} />
            <Route path="/services/auditing-compliance-reporting" element={<AuditingComplianceReportingPage />} />
            <Route path="/services/secure-chain-of-custody-logistics" element={<SecureChainOfCustodyLogisticsPage />} />
            
            {/* Wholesale Page */}
            <Route path="/wholesale-it-equipment" element={<WholesaleITEquipmentPage />} />
            
            {/* Support Pages */}
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/cookie-policy" element={<CookiePolicyPage />} />
            
            {/* --- 3. 404 CATCH-ALL ROUTE --- */}
            {/* This ensures your custom 404 page shows instead of a blank screen */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>

      <Footer />
      <CookieConsent />
    </div>
  );
}

export default App;