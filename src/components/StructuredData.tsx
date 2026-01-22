import React from 'react';
import { Helmet } from 'react-helmet-async';
// Ensure this path matches your project structure, or replace values below with strings
import { COMPANY_INFO } from '../utils/constants';

const StructuredData: React.FC = () => {
  const graphSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        // CORE IDENTITY: The Universal ITAD Partner
        "@type": "RecyclingCenter",
        "@id": "https://www.itassetsolutions.com/#organization",
        "name": "IT Asset Solutions",
        "alternateName": [
          "IT Asset Solutions LLC", 
          "Michigan Industrial Electronics Recycling", // MANUFACTURING
          "Legal Data Destruction Services",           // LEGAL
          "Telecom Network Decommissioning",           // TELECOM
          "Corporate IT Liquidation Services"
        ],
        "url": "https://www.itassetsolutions.com",
        
        // 2026 MANDATE: AVIF Logo for Fast-Fetch
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.itassetsolutions.com/it-asset-solutions-new-logo.avif"
        },
        "image": "https://www.itassetsolutions.com/it-asset-solutions-new-logo.avif",
        
        // SOCIAL PROOF (Critical for Knowledge Graph)
        "sameAs": [
          "https://www.linkedin.com/company/it-asset-solutions",
          "https://twitter.com/ITAssetSols", // ✅ UPDATED: Your new correct handle
          "https://www.facebook.com/people/It-Asset-Solutions/100083165808782/", // ✅ UPDATED: Correct specific profile link
          "https://www.crunchbase.com/organization/it-asset-solutions"
        ],

        // DESCRIPTION: Covering ALL major verticals
        // SAFE LANGUAGE: "Aligned" usage implied by context
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
          "latitude": "42.463",
          "longitude": "-83.398"
        },
        "telephone": COMPANY_INFO?.phone || "+1-248-602-3832",
        "email": COMPANY_INFO?.email || "admin@itassetsolutions.com",
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
          "HIPAA Aligned Disposal",
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
                // SAFE LANGUAGE: "aligned"
                "description": "GLBA and SOX aligned destruction for law firms and banks. On-site shredding available for maximum chain-of-custody control.",
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
        "@id": "https://www.itassetsolutions.com/#website",
        "url": "https://www.itassetsolutions.com",
        "name": "IT Asset Solutions",
        "publisher": {
          "@id": "https://www.itassetsolutions.com/#organization"
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