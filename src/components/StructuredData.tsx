import React from 'react';
import { Helmet } from 'react-helmet-async';
import { COMPANY_INFO } from '../utils/constants';

const StructuredData: React.FC = () => {
  const graphSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        // CORE IDENTITY: The Universal ITAD Partner
        "@type": "RecyclingCenter",
        "@id": "https://itassetsolutions.com/#organization",
        "name": "IT Asset Solutions",
        "alternateName": [
          "IT Asset Solutions LLC", 
          "Michigan Industrial Electronics Recycling", // MANUFACTURING
          "Legal Data Destruction Services",           // LEGAL
          "Telecom Network Decommissioning",           // TELECOM
          "Corporate IT Liquidation Services"
        ],
        "url": "https://itassetsolutions.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://itassetsolutions.com/it-asset-solutions-new-logo.webp"
        },
        "image": "https://itassetsolutions.com/it-asset-solutions-new-logo.webp",
        
        // DESCRIPTION: Covering ALL major verticals
        "description": "Comprehensive ITAD and electronics recycling for Manufacturing, Healthcare, Legal, Telecom, and Government sectors in Michigan & USA. Specialized secure disposal for industrial and corporate assets.",
        
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
        "telephone": COMPANY_INFO.phone,
        "email": COMPANY_INFO.email,
        "priceRange": "$$",
        "publicAccess": true,
        
        "areaServed": [
          { "@type": "State", "name": "Michigan" },
          { "@type": "Country", "name": "United States" }
        ],
        
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:00",
            "closes": "17:00"
          }
        ],
        
        // TARGET AUDIENCE: Explicitly naming the Decision Makers
        "audience": [
          {
            "@type": "BusinessAudience",
            "audienceType": "Healthcare Providers",
            "geographicArea": { "@type": "State", "name": "Michigan" }
          },
          {
            "@type": "BusinessAudience",
            "audienceType": "Manufacturing Plant Managers",
            "geographicArea": { "@type": "State", "name": "Michigan" }
          },
          {
            "@type": "BusinessAudience",
            "audienceType": "Law Firm Administrators",
            "geographicArea": { "@type": "Country", "name": "United States" }
          },
          {
            "@type": "BusinessAudience",
            "audienceType": "Data Center Managers",
            "geographicArea": { "@type": "Country", "name": "United States" }
          }
        ],

        // INDUSTRY SPECIFIC KEYWORDS (The "Long Tail" Strategy)
        "knowsAbout": [
          // Core
          "Enterprise ITAD",
          "Secure Data Destruction",
          // Healthcare
          "HIPAA Compliant Disposal",
          "Medical Device Recycling",
          // Manufacturing / Auto
          "Industrial IT Disposal",
          "Factory Equipment Liquidation",
          "Automotive R&D Destruction",
          // Legal
          "Legal Data Destruction",
          "Law Firm IT Recycling",
          // Telecom / Data Center
          "Server Room Decommissioning",
          "Network Switch Recycling",
          "Telecom Infrastructure Disposal",
          // Education
          "School Chromebook Recycling"
        ],

        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Industry Specific Solutions",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Manufacturing & Industrial ITAD",
                "description": "Secure disposal of factory floor PCs, rugged tablets, and proprietary R&D equipment for automotive and manufacturing sectors.",
                "serviceType": "IndustrialRecycling"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Legal & Financial Data Destruction",
                "description": "GLBA and SOX compliant destruction for law firms and banks. On-site shredding available for maximum chain-of-custody control.",
                "serviceType": "SecureDestruction"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Telecom & Data Center Decommissioning",
                "description": "Nationwide removal of server racks, switches, and telecom infrastructure with complete asset serialization.",
                "serviceType": "InfrastructureServices"
              }
            }
          ]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://itassetsolutions.com/#website",
        "url": "https://itassetsolutions.com",
        "name": "IT Asset Solutions",
        "publisher": {
          "@id": "https://itassetsolutions.com/#organization"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do you handle industrial or manufacturing IT equipment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We specialize in disposing of industrial controls, ruggedized laptops, and factory floor workstations, ensuring all proprietary R&D data is destroyed."
            }
          },
          {
            "@type": "Question",
            "name": "Can you provide on-site shredding for law firms?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. For legal and financial clients requiring strict chain-of-custody, our mobile shred trucks can destroy hard drives at your office location."
            }
          }
        ]
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(graphSchema)}
      </script>
    </Helmet>
  );
};

export default StructuredData;