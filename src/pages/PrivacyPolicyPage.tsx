import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, ArrowLeft, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicyPage: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Privacy Policy | IT Asset Solutions</title>
        <meta name="description" content="Read the privacy policy for IT Asset Solutions. Learn how we collect, use, and protect your personal information when you use our services and website." />
        <link rel="canonical" href="https://www.itassetsolutions.com/privacy-policy" />
        <meta name="robots" content="noindex, follow" />

        <meta property="og:title" content="Privacy Policy | IT Asset Solutions" />
        <meta property="og:description" content="Learn how IT Asset Solutions collects, uses, and protects your personal information." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.itassetsolutions.com/privacy-policy" />
        <meta property="og:image" content="https://www.itassetsolutions.com/it-asset-solutions-new-logo.webp" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="IT Asset Solutions" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Privacy Policy | IT Asset Solutions" />
        <meta name="twitter:description" content="Learn how IT Asset Solutions collects, uses, and protects your personal information." />
        <meta name="twitter:image" content="https://www.itassetsolutions.com/it-asset-solutions-new-logo.webp" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Privacy Policy",
              "description": "The official privacy policy for IT Asset Solutions LLC services and website usage",
              "publisher": {
                "@type": "Organization",
                "name": "IT Asset Solutions",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.itassetsolutions.com/TRans.png"
                }
              },
              "license": "https://www.itassetsolutions.com/privacy-policy"
            }
          `}
        </script>
      </Helmet>

      <div className="pt-24 pb-16 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link to="/" className="inline-flex items-center text-curious-blue hover:text-java transition-colors mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span>Back to Home</span>
            </Link>
            
            <div className="flex items-center mb-6">
              <div className="bg-mountain-meadow/10 p-3 rounded-full mr-4">
                <Shield className="w-6 h-6 text-mountain-meadow" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Privacy Policy</h1>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <div className="prose prose-lg max-w-none">
                <h1 className="text-2xl font-bold mb-6">Privacy Policy of IT Asset Solutions LLC</h1>
                <p className="mb-8">Last Updated: July 15, 2025</p>
                
                <p className="mb-8">This Privacy Policy describes the policies and procedures of IT Asset Solutions LLC ("We", "Us", or "Our") on the collection, use, and disclosure of Your information when You use Our Service. It also outlines Your privacy rights and how the law protects You.</p>
                
                <p className="mb-8">By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.</p>
                
                <h2 className="text-xl font-bold mt-10 mb-4">Interpretation and Definitions</h2>
                <h3 className="text-lg font-bold mb-2">Interpretation</h3>
                
                <p className="mb-6">The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
                
                <h3 className="text-lg font-bold mb-2">Definitions</h3>
                
                <p className="mb-4">For the purposes of this Privacy Policy:</p>
                
                <ul className="list-disc pl-6 mb-6 space-y-4">
                  <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to IT Asset Solutions LLC, 23985 Industrial Park Dr, Farmington Hills, MI 48335.</li>
                  
                  <li><strong>Country</strong> refers to: Michigan, United States.</li>
                  
                  <li><strong>Equipment</strong> refers to all used IT assets, hardware, computers, laptops, servers, and related technology products sold or processed by the Company.</li>
                  
                  <li><strong>Service</strong> refers to the Website and all IT asset management services provided by the Company.</li>
                  
                  <li><strong>Website</strong> refers to IT Asset Solutions, accessible from https://www.itassetsolutions.com/.</li>
                  
                  <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
                
                  <li><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>
                </ul>
                
                <h2 className="text-xl font-bold mt-10 mb-4">Collecting and Using Your Personal Data</h2>
                <h3 className="text-lg font-bold mb-2">Types of Data Collected</h3>
                
                <p className="mb-6">While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
                
                <p className="mb-6"><strong>Contact Information:</strong> Including first name and last name, email address, phone number, and mailing address.</p>
                
                <p className="mb-6"><strong>Business Information:</strong> Including company name, job title, and other details related to your business entity.</p>
                
                <p className="mb-6"><strong>Transactional Information:</strong> Details of your orders, purchases, and payment information (such as bank account details for wire transfers or ACH transfers).</p>
                
                <p className="mb-6"><strong>Communications:</strong> Records and copies of your correspondence if you contact us, including for RMA requests.</p>
                
                <p className="mb-6"><strong>Usage Data:</strong> We may also collect information that your browser sends whenever you visit our Website. This Usage Data may include information such as Your device's Internet Protocol address (e.g., IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, and other diagnostic data.</p>
                
                <h3 className="text-lg font-bold mb-2">How We Use Your Information</h3>
                
                <p className="mb-6">The Company uses Personal Data for the following purposes:</p>
                
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>To provide and maintain our Service: including to monitor the usage of our Service.</li>
                  <li>To manage Your orders: to process your requests for quotation, order acceptance, and payment.</li>
                  <li>To manage Your account: to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</li>
                  <li>To contact You: To contact You by email, telephone calls, or other equivalent forms of electronic communication, regarding updates or informative communications related to the functionalities, products, or contracted services.</li>
                  <li>For our business purposes: such as data analysis, identifying usage trends, and to evaluate and improve our Service, products, services, marketing, and your experience.</li>
                  <li>To comply with legal obligations: to respond to law enforcement requests and as required by applicable law, court order, or governmental regulations.</li>
                </ul>
                
                <h3 className="text-lg font-bold mb-2">Sharing Your Information</h3>
                
                <p className="mb-6">We do not sell or rent Your Personal Data to third parties. We may share Your information in the following situations:</p>
                
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>With Service Providers: We may share Your personal information with service providers to monitor and analyze the use of our Service, for payment processing, and to assist us in providing the Service.</li>
                  <li>For Business Transfers: We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of our business to another company.</li>
                  <li>With Your consent: We may disclose Your personal information for any other purpose with Your consent.</li>
                </ul>
                
                <h3 className="text-lg font-bold mb-2">Data from Used IT Equipment</h3>
                <p className="mb-6">As a core part of our business involves the handling of used IT assets, we are committed to data security. Any data-bearing Equipment that we process is handled in a secure manner. We offer data sanitization and destruction services and will perform these services as agreed upon with our clients. However, the Company is not responsible for data left on Equipment that is purchased "As-Is" without a specific agreement for data destruction services.</p>
                
                <h3 className="text-lg font-bold mb-2">Data Security</h3>
                <p className="mb-6">The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.</p>
                
                <h3 className="text-lg font-bold mb-2">Children's Privacy</h3>
                <p className="mb-6">Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.</p>
                
                <h3 className="text-lg font-bold mb-2">Links to Other Websites</h3>
                <p className="mb-6">Our Service may contain links to other websites that are not operated by Us. If You click on a third-party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.</p>
                
                <p className="mb-6">We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p>
                
                <h3 className="text-lg font-bold mb-2">Changes to this Privacy Policy</h3>
                <p className="mb-6">We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.</p>
                
                <p className="mb-6">You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
                
                <h3 className="text-lg font-bold mb-2">Contact Us</h3>
                <p className="mb-4">If you have any questions about this Privacy Policy, please contact us at:</p>
                
                <div className="flex items-center space-x-2 mb-2">
                  <Mail className="w-5 h-5 text-gray-600" />
                  <span>Email: admin@itassetsolutions.com</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-gray-600" />
                  <span>Phone: (248) 602-3832</span>
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