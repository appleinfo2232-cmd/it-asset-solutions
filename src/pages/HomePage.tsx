import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import MissionStatement from '../components/MissionStatement';
import RealRisks from '../components/RealRisks';
import CoreServices from '../components/CoreServices';
import ITADComparison from '../components/ITADComparison';
import CertificationsCompliance from '../components/CertificationsCompliance';
import SecureProcess from '../components/SecureProcess';
import BuiltForScale from '../components/BuiltForScale';
import WhatWeProcess from '../components/WhatWeProcess';
import MichiganIndustries from '../components/MichiganIndustries';
import CommitmentNumbers from '../components/CommitmentNumbers';
import Testimonials from '../components/Testimonials';
import ResourcesSection from '../components/ResourcesSection';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import ProgressIndicator from '../components/ProgressIndicator';
import MidPageLeadCapture from '../components/MidPageLeadCapture';
import StructuredData from '../components/StructuredData';
import { handleScrollOnLoad } from '../utils/navigation';

const HomePage: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const userRole = queryParams.get('role');

  useEffect(() => {
    handleScrollOnLoad();
  }, []);

  return (
    <>
      <Helmet>
        {/* GOOGLE OPTIMIZED TITLE: < 60 Characters to prevent cutting off on mobile */}
        <title>Enterprise ITAD & Data Destruction Michigan | IT Asset Solutions</title>
        
        {/* CLICK-THROUGH OPTIMIZED DESCRIPTION: Keywords front-loaded */}
        <meta name="description" content="Secure NIST 800-88 data destruction & R2-certified IT recycling in Michigan. Maximize value recovery for enterprise IT assets. Get a free assessment." />
        
        {/* SEMANTIC KEYWORDS: Matches "User Intent" for B2B Services */}
        <meta name="keywords" content="Enterprise ITAD Michigan, Secure Data Destruction, Corporate Laptop Recycling, R2 Certified Recycler, IT Asset Disposition, Remote Workforce Logistics, ESG Reporting" />
        
        {/* SOCIAL CARDS (Open Graph) - Crucial for LinkedIn Sharing */}
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content="IT Asset Solutions | Secure Enterprise ITAD Partner" />
        <meta property="og:description" content="Transforming retired corporate technology into strategic value. Trusted by 675+ enterprise clients for secure data destruction and asset value recovery." />
        <meta property="og:url" content="https://www.itassetsolutions.com/" />
        <meta property="og:image" content="https://www.itassetsolutions.com/social-share-card.jpg" />
        <meta property="og:site_name" content="IT Asset Solutions" />

        {/* TWITTER CARD - For B2B networking */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IT Asset Solutions | Enterprise ITAD Services" />
        <meta name="twitter:description" content="Michigan's trusted ITAD partner. 100% Audit Success Rate. NIST 800-88 Compliant." />
        <meta name="twitter:image" content="https://www.itassetsolutions.com/social-share-card.jpg" />
        
        {/* TECHNICAL DIRECTIVES */}
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="theme-color" content="#0ea5e9" />
        <link rel="canonical" href="https://www.itassetsolutions.com/" />
      </Helmet>

      {/* INJECTS SCHEMA MARKUP (The "Language" of Google Bots) */}
      <StructuredData />
      
      <ProgressIndicator />

      {/* LAYOUT STABILITY: Locks horizontal scroll to improve Core Web Vitals (CLS) */}
      <main className="w-full overflow-x-hidden selection:bg-[#0ea5e9] selection:text-white">
        
        {/* Semantic Sections with ARIA Labels for Accessibility/SEO */}
        <section id="home" aria-label="Introduction">
          <Hero userRole={userRole || undefined} />
        </section>

        <section id="mission" aria-label="Our Mission">
          <MissionStatement />
        </section>

        <section id="risks" aria-label="Data Security Risks">
          <RealRisks />
        </section>

        <section id="services" aria-label="ITAD Services">
          <CoreServices />
        </section>

        <section id="testimonials" aria-label="Client Success Stories">
          <Testimonials />
        </section>

        <section id="comparison" aria-label="Why Choose Us">
          <ITADComparison />
        </section>

        <section aria-label="Get an Estimate">
          <MidPageLeadCapture />
        </section>

        <section id="certifications" aria-label="Certifications and Compliance">
          <CertificationsCompliance />
        </section>

        <section id="process" aria-label="Our Process">
          <SecureProcess />
        </section>

        <section id="scale" aria-label="Enterprise Capabilities">
          <BuiltForScale />
        </section>

        <section id="equipment" aria-label="Accepted Equipment">
          <WhatWeProcess />
        </section>

        <section id="industries" aria-label="Industries We Serve">
          <MichiganIndustries />
        </section>

        <section id="numbers" aria-label="Company Statistics">
          <CommitmentNumbers />
        </section>

        <section id="resources" aria-label="Resources">
          <ResourcesSection />
        </section>

        <section id="faq" aria-label="Frequently Asked Questions">
          <FAQ />
        </section>

        <section id="contact" aria-label="Contact Us">
          <Contact />
        </section> 

      </main>
    </>
  );
};

export default HomePage;