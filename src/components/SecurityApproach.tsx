import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Shield, 
  Eye, 
  Truck, 
  Lock, 
  CheckCircle,
  Award,
  Users,
  MapPin,
  Camera,
  FileText,
  Zap,
  Star,
  ArrowRight
} from 'lucide-react';

const SecurityApproach: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const securityLayers = [
    {
      icon: Shield,
      title: 'Facility Security',
      description: 'Our Farmington Hills processing center is a controlled-access environment, equipped with 24/7 video surveillance and monitored alarm systems to safeguard your assets.',
      features: ['Controlled-access environment', '24/7 video surveillance', 'Monitored alarm systems', 'Asset protection'],
      color: 'from-curious-blue to-java',
      iconColor: 'text-curious-blue',
      bgGradient: 'from-curious-blue/10 to-java/10'
    },
    {
      icon: Users,
      title: 'Personnel Security',
      description: 'Every IT Asset Solutions employee who handles sensitive assets undergoes rigorous background checks and continuous training on the latest data security and handling protocols.',
      features: ['Rigorous background checks', 'Continuous training', 'Data security protocols', 'Sensitive asset handling'],
      color: 'from-java to-mountain-meadow',
      iconColor: 'text-java',
      bgGradient: 'from-java/10 to-mountain-meadow/10'
    },
    {
      icon: Truck,
      title: 'Logistics Security',
      description: 'Our dedicated vehicles are GPS-tracked and remain sealed in transit. A documented, unbroken chain of custody is maintained from your door to ours, eliminating in-transit risks.',
      features: ['GPS-tracked vehicles', 'Sealed in transit', 'Documented chain of custody', 'Risk elimination'],
      color: 'from-mountain-meadow to-tradewind',
      iconColor: 'text-mountain-meadow',
      bgGradient: 'from-mountain-meadow/10 to-tradewind/10'
    },
    {
      icon: Lock,
      title: 'Data Security',
      description: 'We guarantee the complete and permanent eradication of your data. Our processes strictly adhere to NIST 800-88 standards, and we provide a serialized Certificate of Destruction for every data-bearing device.',
      features: ['Complete data eradication', 'NIST 800-88 standards', 'Serialized certificates', 'Audit-proof records'],
      color: 'from-tradewind to-fountain-blue',
      iconColor: 'text-tradewind',
      bgGradient: 'from-tradewind/10 to-fountain-blue/10'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-jagged-ice relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20">
          <motion.div 
            className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-curious-blue/30 to-mountain-meadow/30 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-java/30 to-tradewind/30 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </div>

        {/* Floating elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 6,
              delay: Math.random() * 2,
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            <div className="w-2 h-2 bg-gradient-to-br from-curious-blue/40 to-mountain-meadow/40 rounded-full"></div>
          </motion.div>
        ))}
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
            <Shield className="w-5 h-5 text-curious-blue" />
            <span className="text-curious-blue font-semibold">Multi-Layered Security</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Our Security, Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-curious-blue via-mountain-meadow to-java">
              Peace of Mind
            </span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-gray-700 max-w-5xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            We've built our entire operation on a foundation of security. We provide a verifiable, multi-layered security protocol to protect your assets and data at every stage.
          </motion.p>
        </motion.div>

        {/* Security Layers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {securityLayers.map((layer, index) => (
            <motion.div
              key={layer.title}
              className={`bg-gradient-to-br ${layer.bgGradient} backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300`}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Layer number indicator */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-gray-700">{index + 1}</span>
              </div>
              
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-white to-transparent rounded-full transform -translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700" />
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-white to-transparent rounded-full transform translate-x-12 translate-y-12 group-hover:scale-150 transition-transform duration-700" />
              </div>
              
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${layer.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <motion.div
                  className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${layer.color} shadow-xl mb-6 group-hover:shadow-2xl transition-all duration-300`}
                  whileHover={{ rotate: 5, scale: 1.15 }}
                  transition={{ duration: 0.6 }}
                >
                  <layer.icon className="w-10 h-10 text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                  {layer.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors text-lg">
                  {layer.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  {layer.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: (0.8 + index * 0.1) + (featureIndex * 0.05) }}
                    >
                      <CheckCircle className={`w-4 h-4 ${layer.iconColor}`} />
                      <span className="text-gray-600 font-medium text-sm">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="bg-gradient-to-r from-curious-blue via-mountain-meadow to-java rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="relative z-10">
              <motion.div
                className="inline-flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <Shield className="w-5 h-5" />
                <span className="font-semibold">Verifiable Security at Every Stage</span>
              </motion.div>

              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Experience the Difference of True Security
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                Our multi-layered approach ensures your assets and data are protected throughout the entire ITAD process.
              </p>
              
              <motion.button
                className="bg-white text-curious-blue px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-colors shadow-xl flex items-center space-x-3 mx-auto"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Eye className="w-6 h-6" />
                <span>See Our Security in Action</span>
                <ArrowRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SecurityApproach;