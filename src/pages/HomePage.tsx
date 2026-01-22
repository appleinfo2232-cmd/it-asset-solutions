import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// --- COMPONENT IMPORTS ---
import Hero from '../components/Hero';
import CommitmentNumbers from '../components/CommitmentNumbers';
import MissionStatement from '../components/MissionStatement';
import RealRisks from '../components/RealRisks';
import CoreServices from '../components/CoreServices';
import ROICalculator from '../components/ROICalculator';
import MidPageLeadCapture from '../components/MidPageLeadCapture';
import LiabilityShield from '../components/LiabilityShield';
import SecureProcess from '../components/SecureProcess';
import CertificationsCompliance from '../components/CertificationsCompliance';
import BuiltForScale from '../components/BuiltForScale';
import WhatWeProcess from '../components/WhatWeProcess';
import MichiganIndustries from '../components/MichiganIndustries';
import ITADComparison from '../components/ITADComparison';
import Testimonials from '../components/Testimonials';
import ResourcesSection from '../components/ResourcesSection';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import ProgressIndicator from '../components/ProgressIndicator';
import StructuredData from '../components/StructuredData';

// --- 2026 OPTIMIZATION: INP (Interaction to Next Paint) ---
const safeScrollToSection = (sectionId: string) => {
  if (typeof window === 'undefined' || !sectionId) return;

  const performScroll = () => {
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

  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(() => performScroll());
  } else {
    setTimeout(performScroll, 50);
  }
};

const HomePage: React.FC = () => {
  const location = useLocation();
  const userRole = typeof window !== 'undefined' 
    ? new URLSearchParams(location.search).get('role') ?? undefined 
    : undefined;

  const handledHashRef = useRef<string | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const hash = location.hash || '';
    const id = hash.replace('#', '');

    if (id) {
      safeScrollToSection(id);
      handledHashRef.current = id;
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    handledHashRef.current = null;
  }, [location.pathname, location.hash]);

  return (
    <div className="relative min-h-screen bg-slate-50">
      <Helmet>
        <title>Enterprise ITAD & Data Destruction Michigan | NIST 800-88 Aligned</title>
        
        <meta name="description" content="Secure IT Asset Disposition (ITAD) and data destruction services in Michigan. We adhere to NIST 800-88 standards, providing full liability transfer, serialized auditing, and value recovery for enterprise electronics." />
        
        {/* Removed "R2 Guidelines" to avoid misinterpretation of certification status */}
        <meta name="keywords" content="Enterprise ITAD, Secure Data Destruction, Corporate Laptop Recycling, IT Asset Disposition, ESG Reporting, Data Center Decommissioning, Liability Transfer" />

        {/* 2026 SPEED UPDATE: Preload the Hero AVIF image for fast LCP scores */}
        {/* Updated to point to the correct file path you provided earlier */}
        <link rel="preload" as="image" href="https://www.itassetsolutions.com/it-asset-solutions-new-logo.avif" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content="IT Asset Solutions | Secure Enterprise ITAD Partner" />
        <meta property="og:description" content="Transforming retired corporate technology into strategic value. 100% Audit Success Rate with full liability protection." />
        <meta property="og:url" content="https://www.itassetsolutions.com/" />
        {/* AVIF Image Reference */}
        <meta property="og:image" content="https://www.itassetsolutions.com/it-asset-solutions-new-logo.avif" />
        <meta property="og:site_name" content="IT Asset Solutions" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IT Asset Solutions | Enterprise ITAD Services" />
        <meta name="twitter:description" content="Michigan's trusted ITAD partner. Secure, Audited, Profitable." />
        <meta name="twitter:image" content="https://www.itassetsolutions.com/it-asset-solutions-new-logo.avif" />

        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="theme-color" content="#020617" />
        <link rel="canonical" href="https://www.itassetsolutions.com/" />
      </Helmet>

      {/* Structured Data Component handles Schema to avoid duplication */}
      <StructuredData />
      <ProgressIndicator />

      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02]" />
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-emerald-100/40 rounded-full blur-[120px]" />
      </div>

      <main id="main-content" className="relative z-10 w-full overflow-x-hidden selection:bg-blue-600 selection:text-white">
        
        <section id="home" aria-label="Introduction">
          <Hero userRole={userRole} />
        </section>

        <section id="mission" aria-label="Our Mission">
          <MissionStatement />
        </section>

        <section id="numbers" aria-label="Company Statistics">
          <CommitmentNumbers />
        </section>

        <section id="risks" aria-label="Data Security Risks">
          <RealRisks />
        </section>

        <section id="services" aria-label="ITAD Services">
          <CoreServices />
        </section>

        <section id="calculator" aria-label="ROI Calculator">
          <ROICalculator />
        </section>

        <section id="estimate" aria-label="Get an Estimate">
          <MidPageLeadCapture />
        </section>

        <section id="liability" aria-label="Liability Protection">
          <LiabilityShield />
        </section>

        <section id="process" aria-label="Our Process">
          <SecureProcess />
        </section>

        {/* RENAMED ID: 'compliance' instead of 'certifications' to align with reality */}
        <section id="compliance" aria-label="Compliance Standards">
          <CertificationsCompliance />
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

        <section id="comparison" aria-label="Why Choose Us">
          <ITADComparison />
        </section>

        <section id="testimonials" aria-label="Client Success Stories">
          <Testimonials />
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
    </div>
  );
};

export default HomePage;