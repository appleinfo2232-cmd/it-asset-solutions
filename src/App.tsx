import React, { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactPage from './pages/ContactPage'; 
import SvgLoader from './components/SvgLoader';

// Lazy load page components for performance
const TermsAndConditionsPage = lazy(() => import('./pages/TermsAndConditionsPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const EnterpriseITADPage = lazy(() => import('./pages/EnterpriseITADPage'));
const SecureDataDestructionPage = lazy(() => import('./pages/SecureDataDestructionPage'));
const ITAssetValueRecoveryPage = lazy(() => import('./pages/ITAssetValueRecoveryPage'));
const CorporateITBuybackPage = lazy(() => import('./pages/CorporateITBuybackPage'));
const WholesaleITEquipmentPage = lazy(() => import('./pages/WholesaleITEquipmentPage'));
const AuditingComplianceReportingPage = lazy(() => import('./pages/AuditingComplianceReportingPage'));
const SecureChainOfCustodyLogisticsPage = lazy(() => import('./pages/SecureChainOfCustodyLogisticsPage'));

// Add import
const BlogPage = lazy(() => import('./pages/BlogPage'));

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

  // SEO: Automatically scroll to top when changing pages
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    // Flex-col ensures footer stays at the bottom
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <div className="flex-grow">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            
            {/* Blog Page */}
            <Route path="/blog" element={<BlogPage />} />

            {/* Core Services */}
            <Route path="/services/enterprise-itad" element={<EnterpriseITADPage />} />
            <Route path="/services/secure-data-destruction" element={<SecureDataDestructionPage />} />
            <Route path="/services/it-asset-value-recovery" element={<ITAssetValueRecoveryPage />} />
            <Route path="/services/corporate-it-buyback" element={<CorporateITBuybackPage />} />
            <Route path="/services/auditing-compliance-reporting" element={<AuditingComplianceReportingPage />} />
            <Route path="/services/secure-chain-of-custody-logistics" element={<SecureChainOfCustodyLogisticsPage />} />
            
            {/* Wholesale Page - Matches Sitemap URL */}
            <Route path="/wholesale-it-equipment" element={<WholesaleITEquipmentPage />} />
            
            {/* Support Pages */}
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          </Routes>
        </Suspense>
      </div>

      <Footer />
    </div>
  );
}

export default App;
