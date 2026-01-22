import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileText, ArrowLeft, Mail, Phone, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsAndConditionsPage: React.FC = () => {
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
        <title>Terms and Conditions | IT Asset Solutions</title>
        <meta name="description" content="Official Terms and Conditions for IT Asset Solutions services. Read our policies on equipment sales, warranties, payments, and website usage." />
        <link rel="canonical" href="https://www.itassetsolutions.com/terms-and-conditions" />
        
        {/* SEO UPDATE: 'index' allows Google to verify your business legitimacy */}
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="Terms and Conditions | IT Asset Solutions" />
        <meta property="og:description" content="Official Terms and Conditions for IT Asset Solutions services and website usage." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.itassetsolutions.com/terms-and-conditions" />
        <meta property="og:image" content="https://www.itassetsolutions.com/social-share-card.jpg" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="IT Asset Solutions" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Terms and Conditions | IT Asset Solutions" />
        <meta name="twitter:description" content="Official Terms and Conditions for IT Asset Solutions services and website usage." />
        <meta name="twitter:image" content="https://www.itassetsolutions.com/social-share-card.jpg" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Terms and Conditions",
            "description": "Terms and conditions for IT Asset Solutions services and website usage",
            "publisher": {
              "@type": "Organization",
              "name": "IT Asset Solutions",
              // 2026 MANDATE: AVIF Logo
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.itassetsolutions.com/it-asset-solutions-new-logo.avif"
              }
            },
            "datePublished": "2024-01-01",
            "dateModified": "2026-01-15"
          })}
        </script>
      </Helmet>

      {/* Background matching Privacy Policy */}
      <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {/* Back Link */}
            <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-8 font-medium group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </Link>
            
            {/* Header */}
            <div className="flex items-center mb-8">
              <div className="bg-white p-3 rounded-full mr-4 shadow-sm border border-slate-200">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Terms and Conditions</h1>
                <p className="text-slate-500 mt-1">Agreement for Services & Equipment Sales</p>
              </div>
            </div>
            
            {/* Main Content Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
              <div className="prose prose-lg max-w-none text-slate-600">
                
                <div className="border-b border-slate-100 pb-8 mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Service Agreement & Terms</h2>
                  <p className="text-sm text-slate-400">Last Updated: January 15, 2026</p>
                </div>
                
                <p>Please read these terms and conditions carefully before using Our Service.</p>
                
                {/* --- 1. DEFINITIONS --- */}
                <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">Interpretation and Definitions</h3>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">Interpretation</h4>
                <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
                
                <h4 className="text-lg font-semibold text-slate-800 mb-2">Definitions</h4>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to IT Asset Solutions LLC, 23985 Industrial Park Dr, Farmington Hills, MI 48335.</li>
                  <li><strong>Equipment</strong> refers to all used IT assets, hardware, computers, laptops, servers, and related technology products sold or processed by the Company.</li>
                  <li><strong>Service</strong> refers to the Website and all IT asset management services provided by the Company.</li>
                  <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service.</li>
                </ul>
                
                <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">Acknowledgment</h3>
                <p>These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. By accessing or using the Service You agree to be bound by these Terms and Conditions.</p>
                
                {/* --- 2. BUSINESS TERMS (Highlighted Section) --- */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mt-10 mb-10">
                  <div className="flex items-center gap-2 mb-4">
                    <Scale className="w-6 h-6 text-blue-600" />
                    <h2 className="text-2xl font-bold text-slate-900 m-0">IT Asset Business Terms</h2>
                  </div>
                  
                  <h4 className="text-lg font-bold text-slate-800 mt-4 mb-2">1. Sales & Order Acceptance</h4>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>All orders are subject to IT Asset Solutions' approval.</li>
                    <li>Price quotes are firm for 2 days from issuance.</li>
                    <li>Equipment quantities are subject to availability.</li>
                  </ul>

                  <h4 className="text-lg font-bold text-slate-800 mt-6 mb-2">2. Payment Requirements</h4>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li><strong>100% Advance Payment</strong> is required before shipment release.</li>
                    <li>Payment must be received within 1-2 business days of order confirmation to secure inventory.</li>
                    <li>Accepted Methods: Wire Transfer (preferred) and ACH Transfer (USD only).</li>
                    <li>Buyer is responsible for all bank charges.</li>
                  </ul>

                  <h4 className="text-lg font-bold text-slate-800 mt-6 mb-2">3. Grading & Warranty</h4>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li><strong>Grade A:</strong> Excellent cosmetic condition, fully functional.</li>
                    <li><strong>Grade B:</strong> Good condition, fully functional, minor flaws.</li>
                    <li><strong>Warranty:</strong> No warranty is implied unless explicitly stated on the invoice. Items sold "As-Is" are final sale.</li>
                  </ul>

                  <h4 className="text-lg font-bold text-slate-800 mt-6 mb-2">4. RMA & Returns</h4>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li><strong>Reporting:</strong> Notify us of damaged/DOA items within 48 hours of delivery.</li>
                    <li><strong>Process:</strong> Email admin@itassetsolutions.com with Invoice Number and Serial Numbers.</li>
                    <li><strong>Authorization:</strong> Returns must be authorized within 2 business days.</li>
                  </ul>

                  <h4 className="text-lg font-bold text-slate-800 mt-6 mb-2">5. Shipping & Title</h4>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li><strong>FOB Origin:</strong> Buyer is responsible for arranging and paying for all shipping.</li>
                    <li><strong>Title Transfer:</strong> Occurs only upon our receipt of full payment.</li>
                    <li><strong>Risk of Loss:</strong> Transfers to buyer upon pickup by carrier.</li>
                  </ul>
                </div>

                {/* --- 3. GENERAL TERMS --- */}
                <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">General Terms</h3>
                
                <h4 className="text-lg font-semibold text-slate-800 mb-2">Limitation of Liability</h4>
                <p>To the maximum extent permitted by applicable law, in no event shall the Company be liable for any special, incidental, indirect, or consequential damages whatsoever. The entire liability of the Company shall be limited to the amount actually paid by You to the Company.</p>
                
                <h4 className="text-lg font-semibold text-slate-800 mb-2">Governing Law</h4>
                <p>The laws of the State of Michigan, United States, shall govern these Terms. Disputes over $10,000 are subject to binding arbitration in Oakland County, Michigan.</p>
                
                <h4 className="text-lg font-semibold text-slate-800 mb-2">Changes to These Terms</h4>
                <p>We reserve the right to modify these Terms at any time. By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms.</p>
                
                {/* --- CONTACT --- */}
                <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">Contact Us</h3>
                <p>If you have any questions about these Terms, please contact us at:</p>
                
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

export default TermsAndConditionsPage;