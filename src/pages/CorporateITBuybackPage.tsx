import React, { useEffect } from 'react';
import CorporateITBuyback from '../components/CorporateITBuyback';
import ContactLocation from '../components/ContactLocation';
import { Helmet } from 'react-helmet-async';

const CorporateITBuybackPage: React.FC = () => {
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
        "logo": "https://www.itassetsolutions.com/it-asset-solutions-new-logo.webp"
      },
      {
        "@type": "WebPage",
        "@id": "https://www.itassetsolutions.com/services/corporate-it-buyback/#webpage",
        "url": "https://www.itassetsolutions.com/services/corporate-it-buyback",
        "name": "Corporate IT Buyback Program | Sell IT Equipment | IT Asset Solutions",
        "description": "Sell your used corporate IT equipment for fair market value. We buy bulk laptops, servers, and networking gear in Michigan and nationwide.",
        "isPartOf": { "@id": "https://www.itassetsolutions.com/#website" },
        "breadcrumb": { "@id": "https://www.itassetsolutions.com/services/corporate-it-buyback/#breadcrumb" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.itassetsolutions.com/services/corporate-it-buyback/#breadcrumb",
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
            "name": "Corporate IT Buyback",
            "item": "https://www.itassetsolutions.com/services/corporate-it-buyback"
          }
        ]
      },
      {
        "@type": "Service",
        "serviceType": "Corporate IT Buyback",
        "provider": { "@id": "https://www.itassetsolutions.com/#organization" },
        "name": "IT Equipment Buyback Program",
        "description": "We purchase retired business IT assets including laptops, desktops, and data center equipment, offering immediate payment or credit.",
        "areaServed": [
          { "@type": "State", "name": "Michigan" },
          { "@type": "Country", "name": "United States" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "We Buy",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bulk Laptop Purchase" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Server & Storage Buyback" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Networking Equipment Liquidation" } }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What IT equipment do you buy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We buy business-class laptops, desktops, servers, storage arrays, and networking gear from brands like Dell, HP, Lenovo, Cisco, and Apple. Generally equipment 5 years old or newer."
            }
          },
          {
            "@type": "Question",
            "name": "How fast is the payment process?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Once equipment is received and audited at our facility (usually 3-5 days), we issue payment via check, ACH, or credit towards future services."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Corporate IT Buyback Program | Sell Used IT Assets Michigan</title>
        <meta name="description" content="Turn your old office equipment into capital. We buy bulk laptops, servers, and computers. Fast quotes, secure pickup, and fair market value offers." />
        <meta name="keywords" content="sell used IT equipment, corporate buyback program, IT liquidation Michigan, sell business laptops, server buyback, computer recycling payment" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.itassetsolutions.com/services/corporate-it-buyback" />

        <meta property="og:title" content="Corporate IT Buyback Program | Sell Used IT Assets" />
        <meta property="og:description" content="Get a competitive offer for your retired corporate IT assets. We handle logistics and data destruction." />
        <meta property="og:type" content="service" />
        <meta property="og:url" content="https://www.itassetsolutions.com/services/corporate-it-buyback" />
        <meta property="og:image" content="https://www.itassetsolutions.com/it-asset-solutions-social-share.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sell Your Used Corporate IT Equipment" />
        <meta name="twitter:description" content="We buy bulk laptops and servers. Fast, fair, and secure." />
        <meta name="twitter:image" content="https://www.itassetsolutions.com/it-asset-solutions-social-share.jpg" />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <main id="main-content">
        <CorporateITBuyback />
        <ContactLocation />
      </main>
    </>
  );
};

export default CorporateITBuybackPage;