import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, ArrowLeft, Mail, Phone, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicyPage: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    // 2026 SPEED: Use requestIdleCallback for non-critical scroll logic
    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(() => window.scrollTo(0, 0));
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Privacy Policy | IT Asset Solutions</title>
        <meta name="description" content="Read the privacy policy for IT Asset Solutions. Learn how we collect, use, and protect your personal information when you use our services and website." />
        <link rel="canonical" href="https://www.itassetsolutions.com/privacy-policy" />
        
        {/* SEO UPDATE: 'index' allows Google to verify your business legitimacy */}
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="Privacy Policy | IT Asset Solutions" />
        <meta property="og:description" content="Learn how IT Asset Solutions collects, uses, and protects your personal information." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.itassetsolutions.com/privacy-policy" />
        <meta property="og:image" content="https://www.itassetsolutions.com/it-asset-solutions-new-logo.avif" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="IT Asset Solutions" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Privacy Policy | IT Asset Solutions" />
        <meta name="twitter:description" content="Learn how IT Asset Solutions collects, uses, and protects your personal information." />
        <meta name="twitter:image" content="https://www.itassetsolutions.com/it-asset-solutions-new-logo.avif" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Privacy Policy",
            "description": "The official privacy policy for IT Asset Solutions LLC services and website usage",
            "publisher": {
              "@type": "Organization",
              "name": "IT Asset Solutions",
              // 2026 MANDATE: AVIF Logo
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.itassetsolutions.com/it-asset-solutions-new-logo.avif"
              }
            },
            "license": "https://www.itassetsolutions.com/privacy-policy",
            "datePublished": "2024-01-01",
            "dateModified": "2026-01-15"
          })}
        </script>
      </Helmet>

      {/* Styled Background matching your Site Theme */}
      <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {/* Back Button */}
            <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-8 font-medium group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </Link>
            
            {/* Header Section */}
            <div className="flex items-center mb-8">
              <div className="bg-white p-3 rounded-full mr-4 shadow-sm border border-slate-200">
                <Shield className="w-8 h-8 text-emerald-600" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Privacy Policy</h1>
                <p className="text-slate-500 mt-1">Transparency regarding your data security.</p>
              </div>
            </div>
            
            {/* Content Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
              <div className="prose prose-lg max-w-none text-slate-600">
                
                <div className="border-b border-slate-100 pb-8 mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Privacy Policy of IT Asset Solutions LLC</h2>
                  <p className="text-sm text-slate-400">Last Updated: January 15, 2026</p>
                </div>
                
                <p>This Privacy Policy describes the policies and procedures of IT Asset Solutions LLC ("We", "Us", or "Our") on the collection, use, and disclosure of Your information when You use Our Service. It also outlines Your privacy rights and how the law protects You.</p>
                
                <p>By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.</p>
                
                <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">Interpretation and Definitions</h3>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">Interpretation</h4>
                <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
                
                <h4 className="text-lg font-semibold text-slate-800 mb-2">Definitions</h4>
                <p>For the purposes of this Privacy Policy:</p>
                
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to IT Asset Solutions LLC, 23985 Industrial Park Dr, Farmington Hills, MI 48335.</li>
                  <li><strong>Country</strong> refers to: Michigan, United States.</li>
                  <li><strong>Equipment</strong> refers to all used IT assets, hardware, computers, laptops, servers, and related technology products sold or processed by the Company.</li>
                  <li><strong>Service</strong> refers to the Website and all IT asset management services provided by the Company.</li>
                  <li><strong>Website</strong> refers to IT Asset Solutions, accessible from https://www.itassetsolutions.com/.</li>
                  <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
                  <li><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>
                </ul>
                
                <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">Collecting and Using Your Personal Data</h3>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">Types of Data Collected</h4>
                <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Contact Information:</strong> Including first name and last name, email address, phone number, and mailing address.</li>
                  <li><strong>Business Information:</strong> Including company name, job title, and other details related to your business entity.</li>
                  <li><strong>Transactional Information:</strong> Details of your orders, purchases, and payment information (such as bank account details for wire transfers or ACH transfers).</li>
                  <li><strong>Usage Data:</strong> We may also collect information that your browser sends whenever you visit our Website. This Usage Data may include information such as Your device's Internet Protocol address (e.g., IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, and other diagnostic data.</li>
                </ul>
                
                <h4 className="text-lg font-semibold text-slate-800 mb-2">How We Use Your Information</h4>
                <p>The Company uses Personal Data for the following purposes:</p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>To provide and maintain our Service: including to monitor the usage of our Service.</li>
                  <li>To manage Your orders: to process your requests for quotation, order acceptance, and payment.</li>
                  <li>To manage Your account: to manage Your registration as a user of the Service.</li>
                  <li>To contact You: To contact You by email, telephone calls, or other equivalent forms of electronic communication.</li>
                  <li>For our business purposes: such as data analysis, identifying usage trends, and to evaluate and improve our Service.</li>
                  <li>To comply with legal obligations: to respond to law enforcement requests and as required by applicable law.</li>
                </ul>

                <h4 className="text-lg font-semibold text-slate-800 mb-2">Data from Used IT Equipment</h4>
                {/* Safe Language Block: Emphasizes Security without falsely claiming Certification */}
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg my-6">
                  <div className="flex items-start gap-3">
                    <Lock className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                    <p className="text-sm text-blue-800 m-0">
                      <strong>Security Commitment:</strong> As a core part of our business involves the handling of used IT assets, we are committed to data security. Any data-bearing Equipment that we process is handled in a secure manner. We offer data sanitization and destruction services and will perform these services as agreed upon with our clients.
                    </p>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">Sharing Your Information</h3>
                <p>We do not sell or rent Your Personal Data to third parties. We may share Your information in the following situations:</p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>With Service Providers: We may share Your personal information with service providers to monitor and analyze the use of our Service.</li>
                  <li>For Business Transfers: We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition.</li>
                  <li>With Your consent: We may disclose Your personal information for any other purpose with Your consent.</li>
                </ul>
                
                <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">Data Security</h3>
                <p>The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.</p>
                
                <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">Links to Other Websites</h3>
                <p>Our Service may contain links to other websites that are not operated by Us. If You click on a third-party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.</p>
                
                <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">Changes to this Privacy Policy</h3>
                <p>We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.</p>
                
                <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">Contact Us</h3>
                <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-4 not-prose">
                  <div className="flex items-center space-x-3 mb-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <span className="text-slate-700 font-medium">admin@itassetsolutions.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span className="text-slate-700 font-medium">(248) 602-3832</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;