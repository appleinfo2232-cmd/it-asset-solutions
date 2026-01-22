import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Contact from '../components/Contact';
import ContactLocation from '../components/ContactLocation';

const ContactPage: React.FC = () => {
  useEffect(() => {
    // 2026 SPEED: Use requestIdleCallback for non-critical scroll logic
    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(() => window.scrollTo(0, 0));
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  // --- 1. ORGANIZATION SCHEMA (The Parent) ---
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.itassetsolutions.com/#organization",
    "name": "IT Asset Solutions",
    "url": "https://www.itassetsolutions.com",
    // 2026 MANDATE: AVIF Logo for Fast-Fetch
    "logo": "https://www.itassetsolutions.com/it-asset-solutions-new-logo.avif",
    "image": "https://www.itassetsolutions.com/it-asset-solutions-new-logo.avif",
    // UPDATED: "Aligned" with NIST/EPA (Safe language)
    "description": "Enterprise ITAD partner and Public Electronics Recycling Center in Farmington Hills, MI. Operations aligned with NIST 800-88 and EPA guidelines.",
    "telephone": "+1-248-602-3832",
    "email": "admin@itassetsolutions.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "23985 Industrial Park Dr",
      "addressLocality": "Farmington Hills",
      "addressRegion": "MI",
      "postalCode": "48335",
      "addressCountry": "US"
    },
    // ENTITY SIGNAL: Connecting to Social Proof
    "sameAs": [
      "https://www.linkedin.com/company/it-asset-solutions",
      "https://www.facebook.com/ITAssetSolutions"
    ]
  };

  // --- 2. LOCAL BUSINESS SCHEMA (For Google Maps / Residents) ---
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "RecyclingCenter", // Specific Type for Google Maps
    "@id": "https://www.itassetsolutions.com/#localbusiness",
    "name": "IT Asset Solutions - Electronics Recycling Drop-off",
    "image": "https://www.itassetsolutions.com/it-asset-solutions-new-logo.avif",
    "url": "https://www.itassetsolutions.com",
    "telephone": "+1-248-602-3832",
    "email": "admin@itassetsolutions.com",
    "priceRange": "$",
    "publicAccess": true, // Signals public can visit
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "23985 Industrial Park Dr",
      "addressLocality": "Farmington Hills",
      "addressRegion": "MI",
      "postalCode": "48335",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 42.463,
      "longitude": -83.398
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      }
    ],
    // LOCAL SEO: Listing neighboring cities boosts local rank
    "areaServed": [
      { "@type": "City", "name": "Farmington Hills" },
      { "@type": "City", "name": "Novi" },
      { "@type": "City", "name": "Detroit" },
      { "@type": "City", "name": "Southfield" },
      { "@type": "City", "name": "Livonia" }
    ]
  };

  // --- 3. CONTACT PAGE SCHEMA ---
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://www.itassetsolutions.com/contact#webpage",
    "url": "https://www.itassetsolutions.com/contact",
    "name": "Contact IT Asset Solutions | Quotes & Drop-off Info",
    "description": "Get a quote for Corporate ITAD or find hours for residential electronics recycling drop-off in Farmington Hills.",
    "mainEntity": {
      "@id": "https://www.itassetsolutions.com/#organization"
    }
  };

  // --- 4. CONTACT POINTS (Splitting B2B and B2C) ---
  const contactPointSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "IT Asset Solutions",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+1-248-602-3832",
        "contactType": "sales",
        "areaServed": "US",
        "availableLanguage": "English",
        "name": "Corporate ITAD Sales"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+1-248-602-3832",
        "contactType": "customer service",
        "areaServed": "MI",
        "availableLanguage": "English",
        "name": "Public Recycling Drop-off"
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.itassetsolutions.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact",
        "item": "https://www.itassetsolutions.com/contact"
      }
    ]
  };

  return (
    <>
      <Helmet>
        {/* HYBRID TITLE: Hits both "Quote" (B2B) and "Drop Off" (Local) */}
        <title>Contact IT Asset Solutions | Business ITAD Quotes & Public Drop-Off</title>
        
        {/* DESCRIPTION: Updated "compliant"/"adherent" -> "aligned" */}
        <meta name="description" content="Contact us for a Corporate ITAD Quote or visit our Farmington Hills facility for Residential Electronics Recycling. Secure, EPA-aligned, and local." />
        
        {/* KEYWORDS: Mixing high-value B2B with local B2C */}
        <meta name="keywords" content="ITAD Quote Michigan, Business Computer Disposal, Residential Electronics Drop Off, Farmington Hills Recycling Center, Contact IT Asset Solutions" />
        
        {/* 2026 SPEED: Preconnect to Maps API to speed up ContactLocation loading */}
        <link rel="preconnect" href="https://maps.googleapis.com" />
        
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.itassetsolutions.com/contact" />

        {/* OPEN GRAPH */}
        <meta property="og:title" content="Contact IT Asset Solutions | Quotes & Recycling Info" />
        <meta property="og:description" content="Get a free assessment for corporate IT assets or find drop-off hours for personal electronics." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.itassetsolutions.com/contact" />
        {/* NOTE: OpenGraph images can stay as WebP/JPG for broad compatibility */}
        <meta property="og:image" content="https://www.itassetsolutions.com/it-asset-solutions-new-logo.avif" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="IT Asset Solutions" />

        {/* TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact IT Asset Solutions" />
        <meta name="twitter:description" content="Corporate ITAD Quotes & Public Recycling Drop-off info." />
        <meta name="twitter:image" content="https://www.itassetsolutions.com/it-asset-solutions-new-logo.avif" />

        {/* GEO TAGS (Crucial for Local SEO) */}
        <meta name="geo.region" content="US-MI" />
        <meta name="geo.placename" content="Farmington Hills" />
        <meta name="geo.position" content="42.463;-83.398" /> 
        <meta name="ICBM" content="42.463, -83.398" />

        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(contactPageSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(contactPointSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      
      {/* Simplified Layout without Hero */}
      <div className="pt-24 bg-slate-50 min-h-screen">
        <Contact />
        <ContactLocation />
      </div>
    </>
  );
};

export default ContactPage;