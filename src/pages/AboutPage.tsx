import React from 'react';
import About from '../components/About';
import CertificationsCompliance from '../components/CertificationsCompliance';
import ContactLocation from '../components/ContactLocation';
import { Helmet } from 'react-helmet-async';
import { aboutPageSEO } from '../config/seo';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <html lang={aboutPageSEO.additionalTags?.language || 'en-US'} />
        <meta charSet={aboutPageSEO.additionalTags?.charset || 'UTF-8'} />
        <meta name="viewport" content={aboutPageSEO.additionalTags?.viewport || 'width=device-width, initial-scale=1.0'} />
        <meta name="theme-color" content={aboutPageSEO.additionalTags?.themeColor || '#0a2540'} />

        <title>{aboutPageSEO.title}</title>
        <meta name="description" content={aboutPageSEO.metaDescription} />
        {aboutPageSEO.metaKeywords && (
          <meta name="keywords" content={aboutPageSEO.metaKeywords.join(', ')} />
        )}
        <meta name="robots" content={aboutPageSEO.robots || 'index, follow'} />
        <link rel="canonical" href={aboutPageSEO.canonicalUrl} />

        <meta property="og:title" content={aboutPageSEO.openGraph.title} />
        <meta property="og:description" content={aboutPageSEO.openGraph.description} />
        <meta property="og:type" content={aboutPageSEO.openGraph.type} />
        <meta property="og:url" content={aboutPageSEO.openGraph.url} />
        <meta property="og:image" content={aboutPageSEO.openGraph.image} />
        <meta property="og:locale" content={aboutPageSEO.openGraph.locale || 'en_US'} />
        <meta property="og:site_name" content={aboutPageSEO.openGraph.siteName || 'IT Asset Solutions'} />

        <meta name="twitter:card" content={aboutPageSEO.twitterCard.card} />
        {aboutPageSEO.twitterCard.site && (
          <meta name="twitter:site" content={aboutPageSEO.twitterCard.site} />
        )}
        <meta name="twitter:title" content={aboutPageSEO.twitterCard.title} />
        <meta name="twitter:description" content={aboutPageSEO.twitterCard.description} />
        <meta name="twitter:image" content={aboutPageSEO.twitterCard.image} />

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {aboutPageSEO.structuredData && aboutPageSEO.structuredData.map((schema, index) => (
          <script key={`schema-${index}`} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
      </Helmet>
      <About />
      <CertificationsCompliance />
      <ContactLocation />
    </>
  );
};

export default AboutPage;