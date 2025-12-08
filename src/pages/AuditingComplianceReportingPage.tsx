import React, { useEffect } from 'react';
import AuditingComplianceReporting from '../components/AuditingComplianceReporting';
import ContactLocation from '../components/ContactLocation';
import { Helmet } from 'react-helmet-async';

const AuditingComplianceReportingPage: React.FC = () => {
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
        "@id": "https://www.itassetsolutions.com/services/auditing-compliance-reporting/#webpage",
        "url": "https://www.itassetsolutions.com/services/auditing-compliance-reporting",
        "name": "IT Asset Auditing & Compliance Reporting | IT Asset Solutions",
        "description": "Serialized IT auditing and compliance reporting. Certificates of Destruction and ESG reports for NIST, HIPAA, and SOX compliance.",
        "isPartOf": { "@id": "https://www.itassetsolutions.com/#website" },
        "breadcrumb": { "@id": "https://www.itassetsolutions.com/services/auditing-compliance-reporting/#breadcrumb" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.itassetsolutions.com/services/auditing-compliance-reporting/#breadcrumb",
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
            "name": "Auditing & Compliance Reporting",
            "item": "https://www.itassetsolutions.com/services/auditing-compliance-reporting"
          }
        ]
      },
      {
        "@type": "Service",
        "serviceType": "IT Compliance Auditing",
        "provider": { "@id": "https://www.itassetsolutions.com/#organization" },
        "name": "Auditing & Compliance Reporting",
        "description": "Serialized asset tracking and legal documentation for IT disposition. Meets HIPAA, GLBA, and SOX requirements.",
        "areaServed": { "@type": "Country", "name": "United States" },
        "audience": {
          "@type": "BusinessAudience",
          "audienceType": ["Compliance Officers", "Risk Managers", "IT Directors"]
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Reporting Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Serialized Asset Inventory" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Certificate of Destruction (COD)" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ESG & Sustainability Reports" } }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Are your reports audit-ready for HIPAA/SOX?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Our reports provide a serialized chain-of-custody and definite proof of data destruction, satisfying external auditors for HIPAA, SOX, GLBA, and FACTA."
            }
          },
          {
            "@type": "Question",
            "name": "How long do you retain compliance records?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We retain all compliance records, certificates, and audit trails in our secure portal for a minimum of 7 years, accessible to you 24/7."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Auditing & Compliance Reporting | NIST & HIPAA Documentation</title>
        <meta name="description" content="Serialized IT asset auditing and compliance reporting. Get Certificates of Destruction and ESG reports. Audit-ready documentation for HIPAA, SOX, and R2." />
        <meta name="keywords" content="IT asset auditing, compliance reporting, certificate of destruction, ITAD documentation, HIPAA audit trail, ESG reporting Michigan, serialized asset tracking" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.itassetsolutions.com/services/auditing-compliance-reporting" />

        <meta property="og:title" content="Auditing & Compliance Reporting | IT Asset Solutions" />
        <meta property="og:description" content="Audit-proof your IT disposition. Serialized tracking and legal certificates for every asset." />
        <meta property="og:type" content="service" />
        <meta property="og:url" content="https://www.itassetsolutions.com/services/auditing-compliance-reporting" />
        <meta property="og:image" content="https://www.itassetsolutions.com/it-asset-solutions-social-share.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ITAD Auditing & Compliance Services" />
        <meta name="twitter:description" content="Serialized tracking and Certificates of Destruction for enterprise compliance." />
        <meta name="twitter:image" content="https://www.itassetsolutions.com/it-asset-solutions-social-share.jpg" />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <main id="main-content">
        <AuditingComplianceReporting />
        <ContactLocation />
      </main>
    </>
  );
};

export default AuditingComplianceReportingPage;