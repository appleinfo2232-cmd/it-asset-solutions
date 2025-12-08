import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  TrendingUp, 
  Truck, 
  Lock, 
  FileText, 
  ShoppingCart,
  ArrowRight,
  Sparkles,
  Star,
  Recycle // Added
} from 'lucide-react';

const CoreServices: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Shield,
      title: 'Enterprise IT Asset Disposition (ITAD)',
      description: 'Comprehensive, customized solutions for managing large-scale technology retirement projects with precision and security.',
      href: '/services/enterprise-itad',
      color: 'from-curious-blue to-java',
      iconColor: 'text-curious-blue',
      bgGradient: 'from-curious-blue/10 to-java/10'
    },
    {
      icon: Recycle, // Changed to Recycle icon
      title: 'ESG & Circular Economy', // UPDATED
      description: 'EPA R2 certified recycling that supports your corporate sustainability reporting and Zero-Landfill goals.', // UPDATED
      href: '/services/it-asset-value-recovery',
      color: 'from-mountain-meadow to-tradewind',
      iconColor: 'text-mountain-meadow',
      bgGradient: 'from-mountain-meadow/10 to-tradewind/10'
    },
    {
      icon: Truck,
      title: 'Secure Logistics',
      description: 'Secure chain-of-custody transport for data centers, offices, and remote employee retrieval (home offices).', // UPDATED
      href: '/services/secure-chain-of-custody-logistics',
      color: 'from-java to-fountain-blue',
      iconColor: 'text-java',
      bgGradient: 'from-java/10 to-fountain-blue/10'
    },
    {
      icon: Lock,
      title: 'Guaranteed Data Destruction',
      description: 'We provide 100% guaranteed data destruction, adhering to NIST 800-88 standards to ensure your sensitive information is forensically unrecoverable.',
      href: '/services/secure-data-destruction',
      color: 'from-tradewind to-bermuda',
      iconColor: 'text-tradewind',
      bgGradient: 'from-tradewind/10 to-bermuda/10'
    },
    {
      icon: FileText,
      title: 'Auditing & Compliance Reporting',
      description: 'Receive detailed, transparent reports for every asset, including Certificates of Destruction, providing a clear audit trail for your compliance needs.',
      href: '/services/auditing-compliance-reporting',
      color: 'from-fountain-blue to-curious-blue',
      iconColor: 'text-fountain-blue',
      bgGradient: 'from-fountain-blue/10 to-curious-blue/10'
    },
    {
      icon: ShoppingCart,
      title: 'Wholesale IT Equipment',
      description: 'Access cost-effective, professionally refurbished, and reliable IT hardware. We provide quality-tested equipment for businesses looking to expand their capabilities on a budget.',
      href: '/wholesale-it-equipment',
      color: 'from-bermuda to-mountain-meadow',
      iconColor: 'text-bermuda',
      bgGradient: 'from-bermuda/10 to-mountain-meadow/10'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-jagged-ice to-gray-50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30">
          <motion.div 
            className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-curious-blue/20 to-mountain-meadow/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-java/20 to-tradewind/20 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.6, 0.4] }}
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
          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-curious-blue/10 to-mountain-meadow/10 backdrop-blur-xl border border-curious-blue/30 px-5 py-2.5 rounded-full mb-8"
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <Sparkles className="w-5 h-5 text-curious-blue" />
            <span className="text-curious-blue font-bold text-base">Complete IT Lifecycle Management</span>
            <Star className="w-5 h-5 text-mountain-meadow fill-current" />
          </motion.div>

          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span className="text-gray-900">Our Core </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-curious-blue via-mountain-meadow to-java">
              Services
            </span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative overflow-hidden"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -15, scale: 1.02 }}
            >
              <div className={`relative bg-gradient-to-br ${service.bgGradient} backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-2xl group-hover:shadow-3xl transition-all duration-500 overflow-hidden h-full`}>
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-gray-700">{index + 1}</span>
                </div>
                
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
                  >
                    <service.icon className="w-10 h-10 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {service.description}
                  </p>

                  <Link to={service.href}>
                    <motion.button
                      className={`flex items-center space-x-3 font-bold ${service.iconColor} group-hover:translate-x-2 transition-all duration-300 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full border border-white/50 group-hover:bg-white/90 group-hover:shadow-xl relative overflow-hidden`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;