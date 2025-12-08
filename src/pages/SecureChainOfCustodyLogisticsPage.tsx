import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Truck, MapPin, Shield, FileText, Lock, Camera, Clock, CheckCircle, 
  AlertTriangle, Package, Navigation, Radio, Clipboard, UserCheck, 
  ArrowRight, Zap, Star
} from 'lucide-react';
import ContactLocation from '../components/ContactLocation';

const SecureChainOfCustodyLogisticsPage: React.FC = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [processRef, processInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 });

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
        "@id": "https://www.itassetsolutions.com/services/secure-chain-of-custody-logistics/#webpage",
        "url": "https://www.itassetsolutions.com/services/secure-chain-of-custody-logistics",
        "name": "Secure Chain-of-Custody Logistics | IT Asset Solutions",
        "description": "GPS-tracked secure logistics for IT asset transportation. Complete chain-of-custody documentation, sealed trucks, and certified drivers in Michigan.",
        "isPartOf": { "@id": "https://www.itassetsolutions.com/#website" },
        "breadcrumb": { "@id": "https://www.itassetsolutions.com/services/secure-chain-of-custody-logistics/#breadcrumb" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.itassetsolutions.com/services/secure-chain-of-custody-logistics/#breadcrumb",
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
            "name": "Secure Logistics",
            "item": "https://www.itassetsolutions.com/services/secure-chain-of-custody-logistics"
          }
        ]
      },
      {
        "@type": "Service",
        "serviceType": "Secure Logistics",
        "provider": { "@id": "https://www.itassetsolutions.com/#organization" },
        "name": "Secure Chain-of-Custody Logistics",
        "description": "Secure IT asset transportation with real-time GPS tracking, tamper-evident seals, and photo documentation.",
        "areaServed": [
          { "@type": "State", "name": "Michigan" },
          { "@type": "Country", "name": "United States" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Logistics Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "GPS Tracked Transport" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dedicated Truck Service" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "White Glove Pickup" } }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do you track assets during transport?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We use real-time GPS tracking on all vehicles, combined with digital scanning at every touchpoint to maintain a continuous chain of custody."
            }
          },
          {
            "@type": "Question",
            "name": "Are your drivers certified?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, all our drivers undergo strict background checks and are trained in secure asset handling protocols."
            }
          }
        ]
      }
    ]
  };

  const trackingFeatures = [
    { icon: Navigation, title: 'Real-Time GPS Tracking', description: 'Monitor your assets throughout their entire journey with live GPS tracking on all transport vehicles.' },
    { icon: Camera, title: 'Photo Documentation', description: 'Complete visual records at pickup, in-transit checkpoints, and delivery to our secure facility.' },
    { icon: Clipboard, title: 'Digital Chain-of-Custody', description: 'Every asset is logged, tracked, and documented with timestamps and authorized handler signatures.' },
    { icon: Radio, title: 'Status Notifications', description: 'Receive automated updates at each stage of transport including pickup confirmation and facility arrival.' }
  ];

  const securityProtocols = [
    { icon: Shield, title: 'Certified Secure Vehicles', description: 'All transport vehicles are equipped with GPS tracking, tamper-evident seals, and advanced security systems.' },
    { icon: UserCheck, title: 'Background-Checked Personnel', description: 'Every driver and handler undergoes comprehensive background checks and security training.' },
    { icon: Lock, title: 'Locked & Sealed Transport', description: 'Assets are secured in locked compartments with tamper-evident seals applied at pickup.' },
    { icon: FileText, title: 'Insurance Coverage', description: 'Comprehensive insurance protection covers your assets from pickup through final disposition.' }
  ];

  const processSteps = [
    { step: '01', title: 'Scheduling & Planning', description: 'We coordinate pickup timing, asset inventory, and special handling requirements with your team.', icon: Clock },
    { step: '02', title: 'Secure Pickup', description: 'Our certified team arrives with proper equipment, documents assets, and applies security seals.', icon: Package },
    { step: '03', title: 'Monitored Transport', description: 'Assets are transported in GPS-tracked vehicles with real-time status updates and photo documentation.', icon: Truck },
    { step: '04', title: 'Facility Arrival', description: 'Upon arrival at our Farmington Hills facility, assets are logged, verified, and secured for processing.', icon: MapPin },
    { step: '05', title: 'Complete Documentation', description: 'You receive comprehensive chain-of-custody records including photos, timestamps, and handler signatures.', icon: FileText }
  ];

  return (
    <>
      <Helmet>
        <title>Secure Chain-of-Custody Logistics | IT Asset Solutions</title>
        <meta name="description" content="Industry-leading secure logistics with GPS tracking for IT asset transportation. Tamper-evident seals, photo documentation, and certified handlers in Michigan." />
        <meta name="keywords" content="secure IT logistics, chain of custody tracking, GPS IT transport, secure data transport Michigan, IT asset pickup service, certified IT handlers" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.itassetsolutions.com/services/secure-chain-of-custody-logistics" />

        <meta property="og:title" content="Secure Chain-of-Custody Logistics | IT Asset Solutions" />
        <meta property="og:description" content="Complete chain-of-custody tracking for IT assets. GPS monitoring and certified secure transport." />
        <meta property="og:type" content="service" />
        <meta property="og:url" content="https://www.itassetsolutions.com/services/secure-chain-of-custody-logistics" />
        <meta property="og:image" content="https://www.itassetsolutions.com/it-asset-solutions-social-share.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Secure IT Logistics & Tracking" />
        <meta name="twitter:description" content="GPS-tracked secure transport for high-value IT assets." />
        <meta name="twitter:image" content="https://www.itassetsolutions.com/it-asset-solutions-social-share.jpg" />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main id="main-content">
        <section ref={heroRef} className="relative pt-32 pb-24 bg-gradient-to-br from-gray-50 via-white to-jagged-ice overflow-hidden">
          {/* Visual Components - Preserved */}
          <div className="absolute inset-0">
            <motion.div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-curious-blue/20 to-java/20 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
            <motion.div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-mountain-meadow/20 to-tradewind/20 rounded-full blur-3xl" animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.6, 0.4] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }} />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-curious-blue/10 to-java/10 backdrop-blur-xl border border-curious-blue/20 px-6 py-3 rounded-full mb-8">
                <Truck className="w-5 h-5 text-curious-blue" />
                <span className="text-curious-blue font-bold">Tracked Every Mile</span>
                <Shield className="w-5 h-5 text-java" />
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="text-gray-900">Secure Chain-of-Custody </span><br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-curious-blue via-java to-mountain-meadow">Logistics</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
                From the moment your IT assets leave your facility, they're protected by our industry-leading chain-of-custody logistics.
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-curious-blue to-java font-semibold"> GPS tracking, photo documentation, and certified handlers </span>
                ensure complete visibility.
              </p>
            </motion.div>

            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16" initial={{ opacity: 0, y: 30 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.4 }}>
              {[
                { icon: Navigation, label: 'Live GPS Tracking', color: 'from-curious-blue to-java' },
                { icon: Camera, label: 'Photo Documentation', color: 'from-java to-mountain-meadow' },
                { icon: Shield, label: 'Security Certified', color: 'from-mountain-meadow to-tradewind' },
                { icon: FileText, label: 'Full Audit Trail', color: 'from-tradewind to-curious-blue' }
              ].map((item, index) => (
                <motion.div key={item.label} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100" whileHover={{ y: -5, scale: 1.02 }} transition={{ duration: 0.3 }}>
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.color} mb-4`}><item.icon className="w-6 h-6 text-white" /></div>
                  <h3 className="font-bold text-gray-900">{item.label}</h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gray-900">Why Chain-of-Custody </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-curious-blue to-java">Matters</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Every moment your IT assets spend in transit represents potential risk. Our secure chain-of-custody logistics eliminates uncertainty
                by providing complete visibility and documented accountability at every step.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: AlertTriangle, title: 'Eliminate Risk', description: 'Prevent unauthorized access, loss, or theft of valuable IT assets containing sensitive data.', color: 'from-curious-blue to-java' },
                { icon: CheckCircle, title: 'Ensure Compliance', description: 'Meet regulatory requirements with documented proof of secure handling and transportation.', color: 'from-java to-mountain-meadow' },
                { icon: FileText, title: 'Complete Audit Trail', description: 'Maintain comprehensive records for internal audits, compliance reviews, and insurance purposes.', color: 'from-mountain-meadow to-tradewind' }
              ].map((item, index) => (
                <motion.div key={item.title} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} whileHover={{ y: -5 }}>
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${item.color} mb-6`}><item.icon className="w-8 h-8 text-white" /></div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section ref={processRef} className="py-24 bg-gradient-to-br from-gray-50 to-jagged-ice">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={processInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gray-900">Our Logistics </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-curious-blue to-java">Process</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A meticulously designed process that ensures your IT assets are tracked, secured, and documented at every stage of transportation.
              </p>
            </motion.div>

            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <motion.div key={step.step} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100" initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }}>
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-curious-blue to-java flex items-center justify-center text-white font-bold text-xl">{step.step}</div>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="p-4 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100"><step.icon className="w-8 h-8 text-curious-blue" /></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section ref={featuresRef} className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={featuresInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gray-900">Advanced Tracking & </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-curious-blue to-java">Monitoring</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                State-of-the-art technology provides real-time visibility into your asset transportation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {trackingFeatures.map((feature, index) => (
                <motion.div key={feature.title} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100" initial={{ opacity: 0, y: 30 }} animate={featuresInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: index * 0.1 }} whileHover={{ y: -5 }}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-curious-blue to-java"><feature.icon className="w-6 h-6 text-white" /></div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={featuresInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.4 }} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gray-900">Security </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-curious-blue to-java">Protocols</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Multiple layers of security protection throughout the transportation process.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityProtocols.map((protocol, index) => (
                <motion.div key={protocol.title} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100" initial={{ opacity: 0, y: 30 }} animate={featuresInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }} whileHover={{ y: -5 }}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-mountain-meadow to-tradewind"><protocol.icon className="w-6 h-6 text-white" /></div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{protocol.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{protocol.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-r from-curious-blue via-mountain-meadow to-java text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <motion.div className="absolute inset-0" animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }} transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }} style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-xl border border-white/30 px-6 py-3 rounded-full mb-8">
                <Zap className="w-5 h-5" />
                <span className="font-bold">Secure Your Assets Today</span>
                <Star className="w-5 h-5 fill-current" />
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Experience Logistics You Can Trust?
              </h2>
              <p className="text-xl mb-10 opacity-90 leading-relaxed">
                Let us handle the secure transportation of your IT assets with our proven chain-of-custody logistics process.
                Contact us today for a consultation and see how we protect what matters most to your business.
              </p>

              <motion.a href="#contact" className="inline-flex items-center space-x-3 bg-white text-curious-blue px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <span>Get Started</span>
                <ArrowRight className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </div>
        </section>

        <ContactLocation />
      </main>
    </>
  );
};

export default SecureChainOfCustodyLogisticsPage;