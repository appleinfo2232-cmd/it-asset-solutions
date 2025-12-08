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
  title: "IT Asset Solutions Michigan | Secure & Sustainable ITAD Partner",
  metaDescription: "Secure, compliant IT asset disposition in Michigan. Protect data, recover value, and recycle responsibly with IT Asset Solutions in Farmington Hills.",
  metaKeywords: [
    "IT asset disposition Michigan",
    "ITAD Michigan",
    "data destruction Michigan",
    "IT equipment recycling Michigan",
    "electronics recycling Farmington Hills",
    "secure IT lifecycle management",
    "IT hardware buyback Michigan",
    "secure IT asset management"
  ],
  canonicalUrl: "https://www.itassetsolutions.com/about",
  robots: "index, follow",
  openGraph: {
    title: "IT Asset Solutions Michigan | Secure & Sustainable ITAD Partner",
    description: "Michigan's trusted ITAD partner for secure data destruction, value recovery, and sustainable recycling.",
    type: "website",
    url: "https://www.itassetsolutions.com/about",
    image: "https://www.itassetsolutions.com/images/og-itad-michigan.jpg",
    locale: "en_US",
    siteName: "IT Asset Solutions"
  },
  twitterCard: {
    card: "summary_large_image",
    site: "@itassetsolutions",
    title: "Secure & Sustainable ITAD Partner in Michigan",
    description: "IT Asset Solutions helps Michigan businesses protect data, recover value, and recycle responsibly.",
    image: "https://www.itassetsolutions.com/images/og-itad-michigan.jpg"
  },
  structuredData: [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "IT Asset Solutions",
      "url": "https://www.itassetsolutions.com",
      "logo": "https://www.itassetsolutions.com/images/logo.png",
      "image": "https://www.itassetsolutions.com/images/office-farmington.jpg",
      "description": "IT Asset Solutions provides secure IT asset disposition, data destruction, and electronics recycling for Michigan businesses.",
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
        "https://www.linkedin.com/company/itasolutions",
        "https://www.facebook.com/itasolutions"
      ]
    },
    {
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
          "name": "About Us",
          "item": "https://www.itassetsolutions.com/about"
        }
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
