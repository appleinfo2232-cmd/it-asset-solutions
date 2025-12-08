import React, { useEffect } from 'react';
import WholesaleITEquipment from '../components/WholesaleITEquipment';
import ContactLocation from '../components/ContactLocation';
import { Helmet } from 'react-helmet-async';

const WholesaleITEquipmentPage: React.FC = () => {
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
        "@id": "https://www.itassetsolutions.com/wholesale-it-equipment/#webpage",
        "url": "https://www.itassetsolutions.com/wholesale-it-equipment",
        "name": "Wholesale IT Equipment Michigan | Refurbished Computers & Servers",
        "description": "Buy bulk refurbished IT equipment at 50-70% off retail. Wholesale laptops, desktops, servers, and networking gear for Michigan businesses. Warranty included.",
        "isPartOf": { "@id": "https://www.itassetsolutions.com/#website" },
        "breadcrumb": { "@id": "https://www.itassetsolutions.com/wholesale-it-equipment/#breadcrumb" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.itassetsolutions.com/wholesale-it-equipment/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.itassetsolutions.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Wholesale IT Equipment",
            "item": "https://www.itassetsolutions.com/wholesale-it-equipment"
          }
        ]
      },
      {
        "@type": "Service",
        "serviceType": "Wholesale IT Equipment Sales",
        "provider": { "@id": "https://www.itassetsolutions.com/#organization" },
        "name": "Refurbished IT Equipment Wholesale",
        "description": "Bulk sales of professionally refurbished enterprise IT assets including laptops, servers, and networking hardware.",
        "areaServed": [
          { "@type": "State", "name": "Michigan" },
          { "@type": "Country", "name": "United States" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "IT Equipment Inventory",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Bulk Business Laptops (Dell, HP, Lenovo)" },
            { "@type": "ListItem", "position": 2, "name": "Refurbished Rack & Tower Servers" },
            { "@type": "ListItem", "position": 3, "name": "Cisco & Juniper Networking Gear" },
            { "@type": "ListItem", "position": 4, "name": "Desktop Computer Lots" }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What brands of wholesale IT equipment do you stock?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We stock major enterprise brands including Dell, HP, Lenovo, Cisco, and Apple. Our inventory rotates weekly with off-lease and surplus corporate assets."
            }
          },
          {
            "@type": "Question",
            "name": "Is there a minimum order for wholesale pricing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While we specialize in bulk B2B sales, we can accommodate various order sizes. Significant volume discounts apply to pallet-level purchases."
            }
          },
          {
            "@type": "Question",
            "name": "Do you ship wholesale computers nationwide?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we ship securely throughout the United States from our Farmington Hills, MI facility. Local pickup is also available."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Wholesale IT Equipment Michigan | Refurbished Laptops & Servers Bulk</title>
        <meta name="description" content="Save 50-70% on bulk IT equipment. Wholesale refurbished laptops, servers, and computers in Michigan. Tested, warrantied, and ready for business deployment." />
        <meta name="keywords" content="wholesale laptops Michigan, bulk refurbished computers, used servers for sale, wholesale IT equipment, business computer liquidation, Farmington Hills IT sales" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.itassetsolutions.com/wholesale-it-equipment" />

        <meta property="og:type" content="business.business" />
        <meta property="og:url" content="https://www.itassetsolutions.com/wholesale-it-equipment" />
        <meta property="og:title" content="Wholesale IT Equipment | 50-70% Off Retail | IT Asset Solutions" />
        <meta property="og:description" content="Source quality refurbished IT hardware for your business. Laptops, desktops, and servers available in bulk with warranty." />
        <meta property="og:image" content="https://www.itassetsolutions.com/it-asset-solutions-new-logo.webp" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Wholesale Refurbished IT Equipment Michigan" />
        <meta name="twitter:description" content="Enterprise-grade IT hardware at wholesale prices. Serving MI businesses." />
        <meta name="twitter:image" content="https://www.itassetsolutions.com/it-asset-solutions-new-logo.webp" />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main id="main-content">
        <WholesaleITEquipment />
        <ContactLocation />
      </main>
    </>
  );
};

export default WholesaleITEquipmentPage;