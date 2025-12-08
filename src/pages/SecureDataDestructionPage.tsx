import React, { useEffect } from 'react';
import SecureDataDestruction from '../components/SecureDataDestruction';
import ContactLocation from '../components/ContactLocation';
import { Helmet } from 'react-helmet-async';

const SecureDataDestructionPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RecyclingCenter",
        "@id": "https://www.itassetsolutions.com/#organization",
        "name": "IT Asset Solutions",
        "url": "https://www.itassetsolutions.com",
        "logo": "https://www.itassetsolutions.com/it-asset-solutions-new-logo.webp",
        "image": "https://www.itassetsolutions.com/it-asset-solutions-new-logo.webp",
        "priceRange": "$$",
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
          "latitude": "42.4734", 
          "longitude": "-83.4245"
        },
        "telephone": "+1-248-602-3832"
      },
      {
        "@type": "WebPage",
        "@id": "https://www.itassetsolutions.com/services/secure-data-destruction/#webpage",
        "url": "https://www.itassetsolutions.com/services/secure-data-destruction",
        "name": "Secure Data Destruction Services | Hard Drive Shredding MI",
        "description": "NIST 800-88 Compliant Data Destruction. On-site hard drive shredding and secure data wiping services in Farmington Hills, Michigan.",
        "isPartOf": { "@id": "https://www.itassetsolutions.com/#website" },
        "breadcrumb": { "@id": "https://www.itassetsolutions.com/services/secure-data-destruction/#breadcrumb" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.itassetsolutions.com/services/secure-data-destruction/#breadcrumb",
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
            "name": "Secure Data Destruction",
            "item": "https://www.itassetsolutions.com/services/secure-data-destruction"
          }
        ]
      },
      {
        "@type": "Service",
        "serviceType": "Data Destruction Service",
        "provider": { "@id": "https://www.itassetsolutions.com/#organization" },
        "name": "Secure Data Destruction & Hard Drive Shredding",
        "description": "Irreversible data erasure and physical destruction of hard drives, SSDs, and tapes. Compliant with HIPAA, NIST 800-88, and DoD standards.",
        "areaServed": [
          { "@type": "State", "name": "Michigan" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Destruction Options",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "On-Site Hard Drive Shredding" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "NIST 800-88 Data Wiping" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Degaussing Services" } }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do you offer on-site hard drive shredding?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, our mobile shred trucks can come to your location in Michigan to physically destroy hard drives while you watch, providing immediate peace of mind."
            }
          },
          {
            "@type": "Question",
            "name": "Is your data destruction NIST compliant?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. We strictly adhere to NIST 800-88 Guidelines for Media Sanitization, ensuring data is irretrievable."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Secure Data Destruction Services | Hard Drive Shredding MI</title>
        <meta name="description" content="NIST 800-88 compliant data destruction. On-site hard drive shredding and secure wiping in Michigan. HIPAA & DoD compliant. Get a Certificate of Destruction." />
        <meta name="keywords" content="secure data destruction, hard drive shredding Michigan, data wiping service, NIST 800-88, on-site shredding, HIPAA compliant destruction, Farmington Hills data security" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.itassetsolutions.com/services/secure-data-destruction" />

        <meta property="og:title" content="Secure Data Destruction Services | Michigan" />
        <meta property="og:description" content="Irreversible data destruction for corporate risk management. Shredding and wiping services." />
        <meta property="og:type" content="service" />
        <meta property="og:url" content="https://www.itassetsolutions.com/services/secure-data-destruction" />
        <meta property="og:image" content="https://www.itassetsolutions.com/it-asset-solutions-social-share.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hard Drive Shredding & Data Destruction" />
        <meta name="twitter:description" content="Secure, certified data destruction for Michigan businesses." />
        <meta name="twitter:image" content="https://www.itassetsolutions.com/it-asset-solutions-social-share.jpg" />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <main id="main-content">
        <SecureDataDestruction />
        <ContactLocation />
      </main>
    </>
  );
};

export default SecureDataDestructionPage;