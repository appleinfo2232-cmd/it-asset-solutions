import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Shield,
  Lock,
  TrendingUp,
  ShoppingCart,
  ArrowRight,
  CheckCircle,
  Zap,
  Star,
  Sparkles
} from 'lucide-react';

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Shield,
      title: 'Enterprise IT Asset Disposition (ITAD)',
      href: '/services/enterprise-itad',
      description: 'Comprehensive ITAD services for the secure, compliant disposal of retired technology with a focus on environmental responsibility.',
      features: ['NIST 800-88 certified destruction', 'Full compliance documentation', 'Sustainable recycling'],
      color: 'from-curious-blue to-java',
      iconColor: 'text-curious-blue',
      bgGradient: 'from-curious-blue/10 to-java/10'
    },
    {
      icon: Lock,
      title: 'Secure Data Destruction & Sanitization',
      href: '/services/secure-data-destruction',
      description: 'Data wiping and physical destruction adhering to NIST 800-88 standards, with Certificates of Destruction provided for complete compliance.',
      features: ['DOD/NIST standards', 'Certificates provided', 'Chain of custody'],
      color: 'from-java to-fountain-blue',
      iconColor: 'text-java',
      bgGradient: 'from-java/10 to-fountain-blue/10'
    },
    {
      icon: TrendingUp,
      title: 'IT Asset Value Recovery & Remarketing',
      href: '/services/it-asset-value-recovery',
      description: 'Maximize returns through our global remarketing channels and expert asset valuation for optimal value recovery.',
      features: ['Global sales channels', 'Maximum ROI focus', 'Professional remarketing'],
      color: 'from-mountain-meadow to-tradewind',
      iconColor: 'text-mountain-meadow',
      bgGradient: 'from-mountain-meadow/10 to-tradewind/10'
    },
    {
      icon: ShoppingCart,
      title: 'Wholesale IT Equipment Sales',
      href: '/wholesale-it-equipment',
      description: 'Professionally tested, cosmetically graded used IT equipment available for bulk purchase by businesses and resellers.',
      features: ['R2 standards aligned', 'Transparent grading', 'Enterprise-grade hardware'],
      color: 'from-tradewind to-fountain-blue',
      iconColor: 'text-tradewind',
      bgGradient: 'from-tradewind/10 to-fountain-blue/10'
    }
  ];

  return (
    <section id="services" className="relative py-32 bg-gradient-to-br from-gray-50 via-white to-jagged-ice overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30">
          <motion.div
            className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-curious-blue/20 to-mountain-meadow/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="will-change-transform"
          />
          <motion.div
            className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-java/20 to-tradewind/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="will-change-transform"
          />
        </div>

        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute will-change-transform"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 8,
              delay: Math.random() * 3,
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            <div className="w-3 h-3 bg-gradient-to-br from-curious-blue/30 to-mountain-meadow/30 rounded-full"></div>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-curious-blue/10 to-mountain-meadow/10 backdrop-blur-xl border border-curious-blue/20 px-8 py-4 rounded-full mb-8"
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <Sparkles className="w-6 h-6 text-curious-blue" />
            <span className="text-curious-blue font-bold text-lg">Complete IT Lifecycle Management</span>
            <Star className="w-6 h-6 text-mountain-meadow fill-current" />
          </motion.div>

          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span className="text-gray-900">Our Comprehensive Suite of </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-curious-blue via-mountain-meadow to-java">
              IT Management Services
            </span>
          </motion.h2>

          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-3xl p-8 md:p-12 shadow-2xl">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                We offer a complete range of services tailored to meet your organization's specific needs at every stage of the IT lifecycle. 
                From single-office clear-outs to enterprise-level disposition, we have a{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-curious-blue to-mountain-meadow font-bold">
                  secure and profitable solution.
                </span>
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 relative">
          {/* Connecting lines for visual flow */}
          <div className="absolute inset-0 pointer-events-none hidden lg:block">
            <svg className="w-full h-full opacity-10">
              <defs>
                <linearGradient id="serviceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#18a9df" />
                  <stop offset="50%" stopColor="#20c36e" />
                  <stop offset="100%" stopColor="#17b2b1" />
                </linearGradient>
              </defs>
              <path d="M200,150 Q400,100 600,150 Q800,200 1000,150" stroke="url(#serviceGradient)" strokeWidth="2" fill="none" />
              <path d="M200,350 Q400,300 600,350 Q800,400 1000,350" stroke="url(#serviceGradient)" strokeWidth="2" fill="none" />
              <path d="M200,550 Q400,500 600,550 Q800,600 1000,550" stroke="url(#serviceGradient)" strokeWidth="2" fill="none" />
            </svg>
          </div>
          
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative overflow-hidden z-10"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -15, scale: 1.02 }}
            >
              <div className={`relative bg-gradient-to-br ${service.bgGradient} backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl group-hover:shadow-3xl transition-all duration-500 overflow-hidden h-full`}>
                {/* Service number indicator */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-gray-700">{index + 1}</span>
                </div>
                
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-white to-transparent rounded-full transform -translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700" />
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-white to-transparent rounded-full transform translate-x-12 translate-y-12 group-hover:scale-150 transition-transform duration-700" />
                </div>
                
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <motion.div
                    className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${service.color} shadow-xl mb-6 group-hover:shadow-2xl transition-all duration-300`}
                    whileHover={{ rotate: 5, scale: 1.15 }}
                    transition={{ duration: 0.6 }}
                    className="will-change-transform"
                  >
                    <service.icon className="w-10 h-10 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: (0.8 + index * 0.1) + (featureIndex * 0.1) }}
                      >
                        <motion.div
                          className={`p-1 rounded-full bg-gradient-to-r ${service.color} shadow-md`}
                          whileHover={{ scale: 1.2, rotate: 180 }}
                          transition={{ duration: 0.3 }}
                        >
                          <CheckCircle className="w-4 h-4 text-white" />
                        </motion.div>
                        <span className="text-gray-600 font-medium group-hover:text-gray-700 transition-colors text-sm">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <Link to={service.href}>
                    <motion.button
                      className={`flex items-center space-x-3 font-bold ${service.iconColor} group-hover:translate-x-2 transition-all duration-300 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full border border-white/40 group-hover:bg-white/90 group-hover:shadow-xl relative overflow-hidden`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      <span>Explore Service</span>
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.8 }}
        >
          <div className="bg-gradient-to-r from-curious-blue via-mountain-meadow to-java rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <motion.div
                className="inline-flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <Zap className="w-5 h-5" />
                <span className="font-semibold">Custom Solutions Available</span>
              </motion.div>

              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Need a Custom Solution?
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                We work with you to create tailored IT asset management programs for your specific requirements. 
                From compliance needs to value recovery goals, we deliver results.
              </p>
              
              <motion.button
                className="bg-white text-curious-blue px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-colors shadow-xl flex items-center space-x-3 mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get Started</span>
                <ArrowRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;