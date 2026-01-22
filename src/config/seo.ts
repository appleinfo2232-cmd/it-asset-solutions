export interface SEOConfig {
  title: string;
  metaDescription: string;
  metaKeywords?: string[];
  canonicalUrl: string;
  robots?: string;
  openGraph: {
    title: string;
    description: string;
    type: string;
    url: string;
    image: string;
    locale?: string;
    siteName?: string;
  };
  twitterCard: {
    card: string;
    site?: string;
    title: string;
    description: string;
    image: string;
  };
  structuredData?: Array<Record<string, unknown>>;
  additionalTags?: {
    language?: string;
    viewport?: string;
    themeColor?: string;
    charset?: string;
  };
}

export const aboutPageSEO: SEOConfig = {
  // OPTIMIZATION: Added "Remarketing" to title to signal value recovery
  title: "IT Asset Solutions Michigan | Secure ITAD & Hardware Remarketing",
  
  // OPTIMIZATION: Highlights both disposal AND resale capability
  metaDescription: "Secure IT asset disposition and wholesale computer remarketing in Michigan. We buy and sell refurbished laptops, servers, and enterprise hardware with NIST-aligned data destruction.",
  
  metaKeywords: [
    // Core ITAD Keywords
    "IT asset disposition Michigan",
    "ITAD Michigan",
    "data destruction Michigan",
    "IT equipment recycling Farmington Hills",
    "secure IT lifecycle management",
    
    // NEW: Remarketing & Resale Keywords
    "wholesale used laptops Michigan",
    "refurbished enterprise servers",
    "bulk IT equipment sales",
    "IT asset remarketing services",
    "buy used corporate laptops",
    "used cisco networking equipment",
    "grade A refurbished computers"
  ],
  canonicalUrl: "https://www.itassetsolutions.com/about",
  robots: "index, follow",
  
  openGraph: {
    title: "IT Asset Solutions Michigan | Secure ITAD & Hardware Resale",
    description: "Michigan's trusted partner for secure data destruction and wholesale IT equipment remarketing.",
    type: "website",
    url: "https://www.itassetsolutions.com/about",
    image: "https://www.itassetsolutions.com/images/og-itad-michigan.jpg",
    locale: "en_US",
    siteName: "IT Asset Solutions"
  },
  
  twitterCard: {
    card: "summary_large_image",
    site: "@ITAssetSols", // UPDATED: Correct new handle
    title: "Secure ITAD & Refurbished Hardware in Michigan",
    description: "We help businesses retire assets securely and provide wholesale access to high-quality refurbished IT equipment.",
    image: "https://www.itassetsolutions.com/images/og-itad-michigan.jpg"
  },
  
  structuredData: [
    {
      "@context": "https://schema.org",
      "@type": "RecyclingCenter",
      "name": "IT Asset Solutions",
      "url": "https://www.itassetsolutions.com",
      "logo": "https://www.itassetsolutions.com/it-asset-solutions-new-logo.avif",
      "image": "https://www.itassetsolutions.com/images/office-farmington.jpg",
      "description": "IT Asset Solutions provides secure IT asset disposition, NIST-aligned data destruction, and wholesale refurbishment of electronics.",
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
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "42.4665",
        "longitude": "-83.3886"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "08:00",
          "closes": "17:00"
        }
      ],
      "foundingDate": "2020",
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Michigan"
      },
      "sameAs": [
        "https://www.linkedin.com/company/it-asset-solutions",
        "https://www.facebook.com/people/It-Asset-Solutions/100083165808782/", // ADDED: Facebook
        "https://www.crunchbase.com/organization/it-asset-solutions",
        "https://twitter.com/ITAssetSols" // UPDATED: Correct new handle
      ]
    }
  ],
  additionalTags: {
    language: "en-US",
    viewport: "width=device-width, initial-scale=1.0",
    themeColor: "#0a2540",
    charset: "UTF-8"
  }
};