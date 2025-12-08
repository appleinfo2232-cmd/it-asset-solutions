import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileText, ArrowLeft, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsAndConditionsPage: React.FC = () => {
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
        <title>Terms and Conditions | IT Asset Solutions</title>
        <meta name="description" content="Please read the official Terms and Conditions for using the services and website of IT Asset Solutions, located in Farmington Hills, MI." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://www.itassetsolutions.com/terms-and-conditions" />

        <meta property="og:title" content="Terms and Conditions | IT Asset Solutions" />
        <meta property="og:description" content="Official Terms and Conditions for IT Asset Solutions services and website usage." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.itassetsolutions.com/terms-and-conditions" />
        <meta property="og:image" content="https://www.itassetsolutions.com/it-asset-solutions-new-logo.webp" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="IT Asset Solutions" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Terms and Conditions | IT Asset Solutions" />
        <meta name="twitter:description" content="Official Terms and Conditions for IT Asset Solutions services and website usage." />
        <meta name="twitter:image" content="https://www.itassetsolutions.com/it-asset-solutions-new-logo.webp" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Terms and Conditions",
              "url": "https://www.itassetsolutions.com/terms-and-conditions",
              "description": "Terms and conditions for IT Asset Solutions services and website usage",
              "publisher": {
                "@type": "Organization",
                "name": "IT Asset Solutions",
                "url": "https://www.itassetsolutions.com"
              }
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
              <div className="bg-curious-blue/10 p-3 rounded-full mr-4">
                <FileText className="w-6 h-6 text-curious-blue" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Terms and Conditions</h1>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <div className="prose max-w-none">
                <h1 className="text-2xl font-bold mb-6">Terms and Conditions</h1>
                
                <p className="mb-8">(Last Updated: July 15, 2025)</p>
                
                <p className="mb-8">Please read these terms and conditions carefully before using Our Service.</p>
                
                <h2 className="text-xl font-bold mt-10 mb-4">Interpretation and Definitions</h2>
                <h3 className="text-lg font-bold mb-2">Interpretation</h3>
                
                <p className="mb-6">The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
                
                <h3 className="text-lg font-bold mb-2">Definitions</h3>
                
                <p className="mb-4">For the purposes of these Terms and Conditions:</p>
                
                <ul className="list-disc pl-6 mb-6 space-y-4">
                  <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to IT Asset Solutions llc, 23985 Industrial Park Dr, Farmington Hills, MI 48335.</li>
                  
                  <li><strong>Country</strong> refers to: Michigan, United States.</li>
                  
                  <li><strong>Equipment</strong> refers to all used IT assets, hardware, computers, laptops, servers, and related technology products sold or processed by the Company.</li>
                  
                  <li><strong>Service</strong> refers to the Website and all IT asset management services provided by the Company.</li>
                  
                  <li><strong>Terms and Conditions</strong> (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service.</li>
                  
                  <li><strong>Website</strong> refers to It Asset Solutions, accessible from https://www.itassetsolutions.com/.</li>
                  
                  <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
                </ul>
                
                <h2 className="text-xl font-bold mt-10 mb-4">Acknowledgment</h2>
                <p className="mb-8">These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.</p>
                
                <p className="mb-8">Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Please read Our Privacy Policy carefully before using Our Service.</p>
                
                <h2 className="text-xl font-bold mt-10 mb-4">IT ASSET BUSINESS TERMS</h2>
                <h3 className="text-lg font-bold mb-2">Sales & Service Terms</h3>
                <h4 className="font-bold mb-2">Order Acceptance & Pricing</h4>
                
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>All orders for the purchase of used IT Equipment are subject to IT Asset Solutions' approval.</li>
                  
                  <li>All price quotes are firm for a period of 2 days from the date of issuance.</li>
                  
                  <li>All equipment quantities are subject to availability.</li>
                  
                  <li>Items are sold as per the provided specifications list in the quote or invoice.</li>
                </ul>
                
                <h4 className="font-bold mb-2">Payment Requirements</h4>
                
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>100% payment is required in advance for all equipment purchase orders before any Equipment is released for shipment.</li>
                  
                  <li>Upon order confirmation, payment must be received within 1-2 business days to secure the inventory.</li>
                  
                  <li>Failure to remit payment within this timeframe may result in the cancellation of the order without notice, and the Equipment may be released to other buyers.</li>
                  
                  <li>Accepted Payment Methods: Wire Transfer (preferred) and ACH Transfer.</li>
                  
                  <li>All payments must be made in US Dollars (USD).</li>
                  
                  <li>The buyer is responsible for paying any and all bank charges or fees associated with the transaction.</li>
                </ul>
                
                <h3 className="text-lg font-bold mb-2">Equipment Grading, Warranty & Returns</h3>
                <h4 className="font-bold mb-2">Equipment Grading System</h4>
                
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Grade A: Excellent cosmetic condition, fully functional.</li>
                  
                  <li>Grade B: Good cosmetic condition, fully functional, minor cosmetic flaws.</li>
                  
                  <li>Grade C: Fair cosmetic condition, fully functional, noticeable cosmetic wear.</li>
                </ul>
                
                <h4 className="font-bold mb-2">Warranty Policy:</h4>
                
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>No warranty is expressed or implied on any used Equipment unless explicitly stated on your final sales invoice. The terms and duration of any applicable warranty will be clearly defined on the invoice for the specific Equipment it covers.</li>
                  
                  <li>For Equipment sold "As-Is," no warranty is provided, and all sales are final.</li>
                  
                  <li>Any stated warranty is immediately void if the product has been abused, mishandled, modified, subjected to static or electrical charges, or used outside its intended operation.</li>
                </ul>
                
                <h4 className="font-bold mb-2">RMA (Return Merchandise Authorization) Policy</h4>
                
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Immediate Reporting Required: For warranted items, you must notify IT Asset Solutions of any missing, physically damaged, or DOA (Dead on Arrival) products within 48 hours of delivery.</li>
                  
                  <li>RMA Process: To initiate a return, you must email admin@itassetsolutions.com with the original Invoice Number (which serves as your return tracking number), serial numbers of the defective units, and a description of the defects.</li>
                  
                  <li>Our team will provide return authorization within 2 business days. The customer then has 7 business days to prepare the units for pickup.</li>
                  
                  <li>The original Invoice Number must be clearly labeled on all packages. Charges will be applied for missing accessories or parts.</li>
                </ul>
                
                <h4 className="font-bold mb-2">Shipping, Title, and Risk of Loss</h4>
                
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>All pickup and shipping responsibilities must be handled by the buyer only. All sales shipments are FOB origin (customer pays shipping).</li>
                  
                  <li>The buyer is responsible for arranging and paying for all shipping and logistics from our facility.</li>
                  
                  <li>Risk of loss transfers to the buyer as soon as the Equipment is picked up by the buyer or their designated shipping carrier.</li>
                  
                  <li>Title to purchased Equipment transfers to the buyer only upon our receipt of full payment.</li>
                </ul>
                
                <h2 className="text-xl font-bold mt-10 mb-4">GENERAL TERMS</h2>
                <p className="mb-8">(This section combines standard clauses from both documents for completeness)</p>
                
                <h3 className="text-lg font-bold mb-2">Limitation of Liability</h3>
                <p className="mb-6">To the maximum extent permitted by applicable law, in no event shall the Company be liable for any special, incidental, indirect, or consequential damages whatsoever. The entire liability of the Company shall be limited to the amount actually paid by You to the Company for the specific Service or Equipment in question, or 100 USD if You haven't purchased anything through the Service.</p>
                
                <h3 className="text-lg font-bold mb-2">"AS IS" and "AS AVAILABLE" Disclaimer</h3>
                <p className="mb-6">The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind.</p>
                
                <h3 className="text-lg font-bold mb-2">Governing Law & Dispute Resolution</h3>
                <p className="mb-6">The laws of the Country (Michigan, United States) shall govern these Terms and Your use of the Service. You agree to first try to resolve any dispute informally by contacting the Company. Disputes over $10,000 are subject to binding arbitration in Oakland County, Michigan.</p>
                
                <h3 className="text-lg font-bold mb-2">Changes to These Terms</h3>
                <p className="mb-6">We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms.</p>
                
                <h2 className="text-xl font-bold mt-10 mb-4">Contact Us</h2>
                <p className="mb-4">If you have any questions about these Terms, please contact us at:</p>
                
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

export default TermsAndConditionsPage;