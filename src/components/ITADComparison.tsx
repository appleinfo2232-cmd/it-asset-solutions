import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Shield, 
  FileText, 
  Truck, 
  Award,
  CheckCircle,
  X,
  AlertTriangle,
  Target,
  TrendingUp,
  Leaf // Added Leaf icon for ESG
} from 'lucide-react';

const ITADComparison: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const comparisonData = [
    {
      feature: 'Data Security',
      specialized: {
        title: 'Guaranteed & Verifiable',
        description: 'Adherence to NIST 800-88 standards with serialized Certificates of Destruction for a clear audit trail.',
        icon: Shield,
        color: 'text-curious-blue',
        bgColor: 'bg-curious-blue/10',
        rating: 5
      },
      general: {
        title: 'Uncertain',
        description: 'Data destruction is often not their core competency, processes may not be compliant, and documentation can be insufficient.',
        icon: AlertTriangle,
        color: 'text-red-500',
        bgColor: 'bg-red-50',
        rating: 1
      }
    },
    {
      feature: 'Value Recovery',
      specialized: {
        title: 'Maximized',
        description: 'Expert assessment and global remarketing to generate the highest possible ROI on your assets.',
        icon: TrendingUp,
        color: 'text-mountain-meadow',
        bgColor: 'bg-mountain-meadow/10',
        rating: 5
      },
      general: {
        title: 'Minimal or None',
        description: 'Focus is on scrap material value. Assets are often shredded without assessing remarketing potential.',
        icon: X,
        color: 'text-red-500',
        bgColor: 'bg-red-50',
        rating: 1
      }
    },
    // NEW ESG ROW
    {
      feature: 'ESG & Sustainability',
      specialized: {
        title: 'ESG Reporting',
        description: 'Full environmental impact reporting and carbon offset data to support your Corporate Social Responsibility goals.',
        icon: Leaf,
        color: 'text-tradewind',
        bgColor: 'bg-tradewind/10',
        rating: 5
      },
      general: {
        title: 'Basic Recycling',
        description: 'Simple disposal receipt. No detailed data on environmental impact or circular economy contribution.',
        icon: FileText,
        color: 'text-red-500',
        bgColor: 'bg-red-50',
        rating: 2
      }
    },
    {
      feature: 'Chain of Custody',
      specialized: {
        title: 'Ironclad',
        description: 'Secure, GPS-tracked logistics with documented transfer of custody at every stage.',
        icon: Truck,
        color: 'text-java',
        bgColor: 'bg-java/10',
        rating: 5
      },
      general: {
        title: 'Often Non-Existent',
        description: 'Assets may be handled by third-party haulers with no specialized security protocols.',
        icon: AlertTriangle,
        color: 'text-red-500',
        bgColor: 'bg-red-50',
        rating: 1
      }
    },
    {
      feature: 'Focus',
      specialized: {
        title: 'Strategic Partnership',
        description: 'We act as a risk management and value recovery partner, managing the entire asset lifecycle.',
        icon: Award,
        color: 'text-fountain-blue',
        bgColor: 'bg-fountain-blue/10',
        rating: 5
      },
      general: {
        title: 'Transactional Service',
        description: 'The goal is simply to remove items from your location, without addressing strategic needs.',
        icon: X,
        color: 'text-red-500',
        bgColor: 'bg-red-50',
        rating: 2
      }
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20">
          <motion.div 
            className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-curious-blue/20 to-mountain-meadow/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-java/20 to-tradewind/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-curious-blue/10 to-mountain-meadow/10 px-6 py-3 rounded-full mb-8 border border-curious-blue/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <Target className="w-5 h-5 text-curious-blue" />
            <span className="text-curious-blue font-semibold">Strategic Comparison</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Why Choose a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-curious-blue via-mountain-meadow to-java">
              Specialized ITAD Partner?
            </span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-gray-700 max-w-5xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Understanding the difference between a professional ITAD specialist and a basic recycler is crucial. We provide comprehensive value, security, and sustainability metrics.
          </motion.p>
        </motion.div>

        {/* Comparison Table */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="bg-gradient-to-r from-curious-blue to-mountain-meadow p-6">
            <div className="grid grid-cols-3 gap-6 text-white">
              <div className="text-lg font-bold">Feature</div>
              <div className="text-lg font-bold text-center">IT Asset Solutions (Specialized ITAD)</div>
              <div className="text-lg font-bold text-center">General E-Waste Recycler</div>
            </div>
          </div>

          <div className="divide-y divide-gray-100">
            {comparisonData.map((item, index) => (
              <motion.div
                key={item.feature}
                className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 hover:bg-gray-50/50 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <div className="lg:col-span-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.feature}</h3>
                </div>

                <div className="lg:col-span-1">
                  <div className={`${item.specialized.bgColor} rounded-xl p-4 border border-gray-200 h-full`}>
                    <div className="flex items-start space-x-3 mb-3">
                      <div className={`${item.specialized.bgColor} p-2 rounded-lg`}>
                        <item.specialized.icon className={`w-5 h-5 ${item.specialized.color}`} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{item.specialized.title}</h4>
                        <div className="flex items-center mt-1">
                          {[...Array(item.specialized.rating)].map((_, i) => (
                            <CheckCircle key={i} className="w-4 h-4 text-green-500 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.specialized.description}</p>
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <div className={`${item.general.bgColor} rounded-xl p-4 border border-red-200 h-full`}>
                    <div className="flex items-start space-x-3 mb-3">
                      <div className="bg-red-100 p-2 rounded-lg">
                        <item.general.icon className={`w-5 h-5 ${item.general.color}`} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{item.general.title}</h4>
                        <div className="flex items-center mt-1">
                          {[...Array(item.general.rating)].map((_, i) => (
                            <X key={i} className="w-4 h-4 text-red-500" />
                          ))}
                          {[...Array(5 - item.general.rating)].map((_, i) => (
                            <div key={i} className="w-4 h-4 border border-gray-300 rounded-full" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.general.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="bg-gradient-to-r from-curious-blue via-mountain-meadow to-java rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Choose the Right Partner for Your Business
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Partner with specialists who understand security, value, and sustainability.
            </p>
            <motion.button
              className="bg-white text-curious-blue px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl flex items-center space-x-2 mx-auto"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Award className="w-5 h-5" />
              <span>Partner with Specialists</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ITADComparison;