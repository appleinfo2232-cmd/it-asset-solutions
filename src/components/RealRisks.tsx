import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  AlertTriangle, 
  Shield, 
  FileX, 
  Leaf,
  Target,
  Eye,
  Lock
} from 'lucide-react';

const RealRisks: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const risks = [
    {
      icon: AlertTriangle,
      title: 'Devastating Data Breaches',
      description: 'Simply deleting files isn\'t enough. A single hard drive disposed of improperly can expose sensitive corporate, employee, and customer data, leading to catastrophic financial penalties, legal liability, and irreversible brand damage.',
      color: 'from-red-500 to-red-600',
      iconColor: 'text-red-500',
      bgGradient: 'from-red-50 to-red-100/50',
      borderColor: 'border-red-200'
    },
    {
      icon: FileX,
      title: 'Costly Compliance Violations',
      description: 'Regulations like HIPAA, GLBA, and FACTA mandate the secure destruction of sensitive information. Failure to comply can result in crippling fines and legal action. Partnering with a non-compliant vendor puts your entire organization at risk.',
      color: 'from-orange-500 to-orange-600',
      iconColor: 'text-orange-500',
      bgGradient: 'from-orange-50 to-orange-100/50',
      borderColor: 'border-orange-200'
    },
    {
      icon: Leaf,
      title: 'Environmental & Brand Damage',
      description: 'E-waste contains hazardous materials that can harm the environment if sent to a landfill. An improper disposal partner can damage your brand\'s reputation and violate environmental laws, creating a public relations crisis.',
      color: 'from-yellow-500 to-yellow-600',
      iconColor: 'text-yellow-600',
      bgGradient: 'from-yellow-50 to-yellow-100/50',
      borderColor: 'border-yellow-200'
    }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden py-12 md:py-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20">
          <motion.div 
            className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-red-300/30 to-orange-300/30 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-yellow-300/30 to-red-300/30 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </div>

        {/* Floating warning elements - Reduced from 6 to 3 for performance */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute hidden md:block"
            style={{
              left: `${20 + i * 30}%`,
              top: `${20 + i * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 8,
              delay: i * 1,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
          >
            <div className="w-2 h-2 bg-gradient-to-br from-red-400/40 to-orange-400/40 rounded-full"></div>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center space-x-2 bg-red-100 text-red-700 px-6 py-3 rounded-full mb-8 border border-red-200"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <Eye className="w-5 h-5" />
            <span className="font-semibold">Critical Risk Assessment</span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            The Real Risks of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500">
              Improper IT Asset Disposal
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-700 max-w-5xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Choosing the right ITAD partner is a critical risk management decision. The consequences of cutting corners with an unvetted vendor can be severe and long-lasting.
          </motion.p>
        </motion.div>

        {/* Risk Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {risks.map((risk, index) => (
            <motion.div
              key={risk.title}
              className={`bg-gradient-to-br ${risk.bgGradient} backdrop-blur-xl border-2 ${risk.borderColor} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group`}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Warning stripe */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${risk.color}`} />
              
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <risk.icon className="absolute right-4 bottom-4 w-32 h-32" />
              </div>

              <div className="relative z-10">
                {/* Risk level indicator */}
                <div className="flex items-center justify-between mb-6">
                  <motion.div
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${risk.color} shadow-xl`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <risk.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <motion.div
                    className={`bg-white/80 ${risk.iconColor} px-3 py-1 rounded-full text-sm font-bold border ${risk.borderColor}`}
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    HIGH RISK
                  </motion.div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">{risk.title}</h3>
                <p className="text-gray-700 leading-relaxed">{risk.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <div className="bg-gradient-to-r from-curious-blue via-mountain-meadow to-java rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Don't Let These Risks Become Your Reality
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Partner with Michigan's trusted ITAD specialists to eliminate these risks completely.
            </p>
            <motion.button
              className="bg-white text-curious-blue px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl flex items-center space-x-2 mx-auto"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Lock className="w-5 h-5" />
              <span>Secure Your Assets Today</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RealRisks;