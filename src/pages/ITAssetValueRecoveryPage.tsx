import React, { useEffect } from 'react';
import ITAssetValueRecovery from '../components/ITAssetValueRecovery';
import ContactLocation from '../components/ContactLocation';
import { Helmet } from 'react-helmet-async';

const ITAssetValueRecoveryPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.itassetsolutions.com/#organization",
        "name": "IT Asset Solutions",
        "url": "https://www.itassetsolutions.com",
        "logo": "https://www.itassetsolutions.com/it-asset-solutions-new-logo.webp",
        "priceRange": "$$"
      },
      {
        "@type": "WebPage",
        "@id": "https://www.itassetsolutions.com/services/it-asset-value-recovery/#webpage",
        "url": "https://www.itassetsolutions.com/services/it-asset-value-recovery",
        "name": "IT Asset Value Recovery & Remarketing | IT Asset Solutions",
        "description": "Maximize ROI on retired IT assets. Expert testing, refurbishment, and resale of corporate electronics in Michigan and nationwide.",
        "isPartOf": { "@id": "https://www.itassetsolutions.com/#website" },
        "breadcrumb": { "@id": "https://www.itassetsolutions.com/services/it-asset-value-recovery/#breadcrumb" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.itassetsolutions.com/services/it-asset-value-recovery/#breadcrumb",
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
            "name": "IT Asset Value Recovery",
            "item": "https://www.itassetsolutions.com/services/it-asset-value-recovery"
          }
        ]
      },
      {
        "@type": "Service",
        "serviceType": "IT Asset Remarketing",
        "provider": { "@id": "https://www.itassetsolutions.com/#organization" },
        "name": "IT Asset Value Recovery",
        "description": "Maximizing financial return on retired IT equipment through testing, refurbishment, and global resale channels.",
        "areaServed": [
          { "@type": "State", "name": "Michigan" },
          { "@type": "Country", "name": "United States" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Value Recovery Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Computer Remarketing" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Component Level Testing" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Revenue Share Programs" } }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do you determine the resale value of old IT equipment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Value is determined by age, cosmetic condition, specs, and current global market demand. We test every component to ensure maximum grading and resale price."
            }
          },
          {
            "@type": "Question",
            "name": "What happens if my equipment has no resale value?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Assets with no market value are routed to our R2-compliant recycling stream. We strip them for raw materials (metals/plastics) ensuring a zero-landfill policy."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>IT Asset Value Recovery & Remarketing | Farmington Hills, MI</title>
        <meta name="description" content="Unlock hidden value in your retired IT assets. Our remarketing services maximize ROI through expert testing, refurbishment, and global resale channels." />
        <meta name="keywords" content="IT asset remarketing, computer value recovery, IT asset liquidation, sell used servers Michigan, corporate buyback, ROI on IT assets" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.itassetsolutions.com/services/it-asset-value-recovery" />

        <meta property="og:title" content="IT Asset Value Recovery & Remarketing | Farmington Hills, MI" />
        <meta property="og:description" content="Turn your old IT equipment into capital. Secure remarketing and value recovery services." />
        <meta property="og:type" content="service" />
        <meta property="og:url" content="https://www.itassetsolutions.com/services/it-asset-value-recovery" />
        <meta property="og:image" content="https://www.itassetsolutions.com/it-asset-solutions-social-share.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IT Asset Value Recovery Services" />
        <meta name="twitter:description" content="Maximize return on retired IT assets. Audit, wipe, and resell." />
        <meta name="twitter:image" content="https://www.itassetsolutions.com/it-asset-solutions-social-share.jpg" />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <main id="main-content">
        <ITAssetValueRecovery />
        <ContactLocation />
      </main>
    </>
  );
};

export default ITAssetValueRecoveryPage;