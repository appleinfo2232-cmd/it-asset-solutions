import React, { useEffect } from 'react';
import EnterpriseITAD from '../components/EnterpriseITAD';
import ContactLocation from '../components/ContactLocation';
import { Helmet } from 'react-helmet-async';

const EnterpriseITADPage: React.FC = () => {
  useEffect(() => {
    // 1. DYNAMIC TITLE: Hits the high-value "Managed" and "Remote" keywords
    document.title = 'Enterprise ITAD & Remote Workforce Logistics | IT Asset Solutions';
    
    // 2. DYNAMIC DESCRIPTION: Front-loads "ESG" and "Logistics" for CTOs
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Secure Enterprise ITAD, Remote Employee Laptop Retrieval, and ESG-compliant recycling. We manage data center decommissioning and corporate value recovery in MI & USA.');
    }

    // 3. CANONICAL LINK
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) {
      existingCanonical.setAttribute('href', 'https://www.itassetsolutions.com/services/enterprise-itad');
    } else {
      const canonical = document.createElement('link');
      canonical.rel = 'canonical';
      canonical.href = 'https://www.itassetsolutions.com/services/enterprise-itad';
      document.head.appendChild(canonical);
    }

    // 4. ENTERPRISE-GRADE SCHEMA
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "name": "IT Asset Solutions",
          "url": "https://www.itassetsolutions.com",
          "logo": "https://www.itassetsolutions.com/it-asset-solutions-new-logo.webp"
        },
        {
          "@type": "Service",
          "serviceType": "Enterprise IT Asset Disposition",
          "provider": {
            "@type": "Organization",
            "name": "IT Asset Solutions"
          },
          "name": "Enterprise ITAD & Remote Logistics",
          "description": "Comprehensive ITAD for Data Centers, Healthcare, and Remote Workforces. Includes NIST 800-88 data destruction, ESG reporting, and secure box-and-ship logistics.",
          "areaServed": {
            "@type": "Country",
            "name": "United States"
          },
          // TARGETING SPECIFIC B2B PAIN POINTS
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Corporate IT Services",
            "itemListElement": [
              { 
                "@type": "Offer", 
                "itemOffered": { 
                  "@type": "Service", 
                  "name": "Remote Employee Laptop Retrieval",
                  "description": "Secure box-and-ship service for returning WFH equipment."
                } 
              },
              { 
                "@type": "Offer", 
                "itemOffered": { 
                  "@type": "Service", 
                  "name": "Data Center Decommissioning",
                  "description": "On-site shredding and removal of server racks and infrastructure."
                } 
              },
              { 
                "@type": "Offer", 
                "itemOffered": { 
                  "@type": "Service", 
                  "name": "ESG & Sustainability Reporting",
                  "description": "Carbon offset data and R2-certified zero-landfill recycling."
                } 
              }
            ]
          }
        },
        {
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
              "name": "Services",
              "item": "https://www.itassetsolutions.com/services/"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Enterprise ITAD",
              "item": "https://www.itassetsolutions.com/services/enterprise-itad"
            }
          ]
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How do you handle remote employee equipment?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We offer a turnkey 'Box-and-Ship' program. We send shipping materials directly to your remote employees' homes, track the return, and perform secure data destruction upon receipt at our facility."
              }
            },
            {
              "@type": "Question",
              "name": "Do you provide ESG reporting for our sustainability goals?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Our reporting package includes environmental impact metrics, carbon diversion stats, and R2-compliant recycling certificates to support your corporate ESG initiatives."
              }
            }
          ]
        }
      ]
    };

    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.textContent = JSON.stringify(structuredData);
    } else {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    return () => {
      // Cleanup logic if needed
    };
  }, []);

  return (
    <>
      <Helmet>
        {/* HYBRID TITLE: Hits the key B2B search terms */}
        <title>Enterprise ITAD & Remote Workforce Logistics | IT Asset Solutions</title>
        
        <meta name="description" content="Secure ITAD for Data Centers, Healthcare & Remote Teams. We handle logistics, NIST data destruction, and ESG recycling in Michigan & Nationwide." />
        
        {/* KEYWORDS: Added "Remote Workforce", "Healthcare", "ESG" */}
        <meta name="keywords" content="Enterprise ITAD, Remote Workforce Logistics, Data Center Decommissioning, ESG Reporting, Corporate Laptop Recycling, Healthcare IT Disposal, NIST 800-88, Farmington Hills" />
        
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.itassetsolutions.com/services/enterprise-itad" />

        <meta property="og:title" content="Enterprise ITAD & Remote Logistics | IT Asset Solutions" />
        <meta property="og:description" content="Secure ITAD for the modern workforce. We manage remote laptop retrieval, data center cleanouts, and ESG reporting." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.itassetsolutions.com/services/enterprise-itad" />
        <meta property="og:image" content="https://www.itassetsolutions.com/it-asset-solutions-new-logo.webp" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="IT Asset Solutions" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Enterprise ITAD & Remote Logistics" />
        <meta name="twitter:description" content="Secure ITAD for the modern workforce. We manage remote laptop retrieval, data center cleanouts, and ESG reporting." />
        <meta name="twitter:image" content="https://www.itassetsolutions.com/it-asset-solutions-new-logo.webp" />
      </Helmet>
      
      <EnterpriseITAD />
      <ContactLocation />
    </>
  );
};

export default EnterpriseITADPage;