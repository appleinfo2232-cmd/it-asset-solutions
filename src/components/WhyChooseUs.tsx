import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, DollarSign, Award, CheckCircle, Lock, TrendingUp, FileText } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const advantages = [
    {
      icon: Shield,
      title: 'Unbreakable Security',
      description: 'Your data\'s security is our top priority. From a documented chain-of-custody to our final Certificate of Destruction, every step is designed to eliminate risk and ensure your complete peace of mind.',
      color: 'text-curious-blue',
      bgColor: 'from-curious-blue/10 to-curious-blue/5'
    },
    {
      icon: DollarSign,
      title: 'Maximum Financial Return',
      description: 'We see the potential in your retired assets. Through our expert refurbishment process and strategic remarketing channels, we work to recover the highest possible value for you, turning expenses into revenue.',
      color: 'text-mountain-meadow',
      bgColor: 'from-mountain-meadow/10 to-mountain-meadow/5'
    },
    {
      icon: Award,
      title: 'Guaranteed Compliance',
      description: 'Navigating the complex web of data privacy and environmental regulations is our expertise. We provide a fully compliant process and the documentation to prove it, protecting your business from legal and financial penalties.',
      color: 'text-java',
      bgColor: 'from-java/10 to-java/5'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-jagged-ice">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-mountain-meadow/10 px-6 py-3 rounded-full mb-8 border border-mountain-meadow/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <Award className="w-5 h-5 text-mountain-meadow" />
            <span className="text-mountain-meadow font-semibold">Our Foundation</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            A Partnership Built on{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-curious-blue via-mountain-meadow to-java">
              Security, Value, and Trust
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            We built our business to solve the three biggest challenges in the ITAD industry, 
            giving you complete confidence in the outcome.
          </p>
        </motion.div>

        {/* Core Advantages */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20 relative">
          {/* Connecting elements */}
          <div className="absolute inset-0 pointer-events-none hidden lg:block">
            <div className="absolute top-1/2 left-1/3 w-8 h-8 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-full h-full bg-gradient-to-r from-curious-blue to-mountain-meadow rounded-full opacity-20 animate-pulse" />
            </div>
            <div className="absolute top-1/2 right-1/3 w-8 h-8 transform translate-x-1/2 -translate-y-1/2">
              <div className="w-full h-full bg-gradient-to-r from-mountain-meadow to-java rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
          
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              className={`bg-gradient-to-br ${advantage.bgColor} backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Animated background elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/10 to-transparent rounded-full transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500" />
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-white/10 to-transparent rounded-full transform -translate-x-8 translate-y-8 group-hover:scale-150 transition-transform duration-500" />
              
              {/* Number indicator */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-gray-600">{index + 1}</span>
              </div>
              
              <motion.div
                className={`inline-flex p-4 rounded-full bg-white shadow-lg mb-6 ${advantage.color} relative z-10`}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <advantage.icon className="w-8 h-8" />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">{advantage.title}</h3>
              <p className="text-gray-700 leading-relaxed text-lg relative z-10">{advantage.description}</p>
              
              {/* Progress indicator */}
              <div className="mt-6 relative z-10">
                <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden">
                  <motion.div 
                    className={`h-full bg-gradient-to-r ${advantage.color.includes('curious-blue') ? 'from-curious-blue to-java' : advantage.color.includes('mountain-meadow') ? 'from-mountain-meadow to-tradewind' : 'from-java to-fountain-blue'} rounded-full`}
                    initial={{ width: 0 }}
                    animate={inView ? { width: '100%' } : {}}
                    transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="bg-gradient-to-r from-curious-blue to-mountain-meadow rounded-3xl p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your IT Asset Strategy?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Stop letting outdated technology become a liability. Partner with IT Asset Solutions to implement a secure, 
              sustainable, and profitable ITAD program. Contact our experts today for a free, no-obligation consultation 
              and discover the hidden value in your IT assets.
            </p>
            
            <motion.button
              className="bg-white text-curious-blue px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Your Free Consultation Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;