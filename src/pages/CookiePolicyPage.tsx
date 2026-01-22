import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cookie, ArrowLeft, Mail, Settings, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookiePolicyPage: React.FC = () => {
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
        <title>Cookie Policy | IT Asset Solutions</title>
        <meta name="description" content="Learn about how IT Asset Solutions uses cookies and tracking technologies to improve your experience and ensure site security." />
        <link rel="canonical" href="https://www.itassetsolutions.com/cookie-policy" />
        <meta name="robots" content="index, follow" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Cookie Policy",
            "description": "Details on cookie usage and tracking technologies",
            "publisher": {
              "@type": "Organization",
              "name": "IT Asset Solutions",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.itassetsolutions.com/it-asset-solutions-new-logo.avif"
              }
            }
          })}
        </script>
      </Helmet>

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
            
            {/* Header */}
            <div className="flex items-center mb-8">
              <div className="bg-white p-3 rounded-full mr-4 shadow-sm border border-slate-200">
                <Cookie className="w-8 h-8 text-amber-600" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Cookie Policy</h1>
                <p className="text-slate-500 mt-1">How we manage your digital footprint.</p>
              </div>
            </div>
            
            {/* Content Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
              <div className="prose prose-lg max-w-none text-slate-600">
                
                <div className="border-b border-slate-100 pb-8 mb-8">
                  <p className="text-sm text-slate-400">Last Updated: January 15, 2026</p>
                </div>
                
                <p>This Cookie Policy explains what Cookies are and how We use them. You should read this policy so You can understand what type of cookies We use, or the information We collect using Cookies and how that information is used.</p>
                
                {/* --- 1. DEFINITIONS --- */}
                <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">Interpretation and Definitions</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Company</strong> (referred to as "We", "Us" or "Our") refers to IT Asset Solutions LLC.</li>
                  <li><strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</li>
                  <li><strong>Website</strong> refers to IT Asset Solutions, accessible from https://www.itassetsolutions.com/.</li>
                </ul>

                {/* --- 2. TYPES OF COOKIES --- */}
                <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">The Use of the Cookies</h3>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">Type of Cookies We Use</h4>
                <p>Cookies can be "Persistent" or "Session" Cookies. We use both for the purposes set out below:</p>

                <div className="space-y-6 mt-6">
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <div className="flex items-center gap-3 mb-2">
                      <ShieldCheck className="w-5 h-5 text-green-600" />
                      <h5 className="font-bold text-slate-900 text-lg m-0">Necessary / Essential Cookies</h5>
                    </div>
                    <p className="text-sm m-0"><strong>Type:</strong> Session Cookies | <strong>Administered by:</strong> Us</p>
                    <p className="text-sm mt-2">These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts.</p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <div className="flex items-center gap-3 mb-2">
                      <Settings className="w-5 h-5 text-blue-600" />
                      <h5 className="font-bold text-slate-900 text-lg m-0">Functionality Cookies</h5>
                    </div>
                    <p className="text-sm m-0"><strong>Type:</strong> Persistent Cookies | <strong>Administered by:</strong> Us</p>
                    <p className="text-sm mt-2">These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience.</p>
                  </div>
                </div>

                {/* --- 3. CHOICES --- */}
                <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">Your Choices Regarding Cookies</h3>
                <p>If You prefer to avoid the use of Cookies on the Website, first You must disable the use of Cookies in your browser and then delete the Cookies saved in your browser associated with this website.</p>
                <p>For more information on how to manage and delete Cookies, visit the official support documents for your specific web browser (Chrome, Safari, Edge, Firefox).</p>

                {/* --- CONTACT --- */}
                <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">Contact Us</h3>
                <p>If you have any questions about this Cookie Policy, You can contact us:</p>
                <div className="bg-slate-50 p-4 rounded-lg inline-flex items-center gap-3 border border-slate-200 not-prose">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span className="font-medium">admin@itassetsolutions.com</span>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default CookiePolicyPage;