import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  AlertTriangle, 
  Shield, 
  CheckCircle, 
  TrendingUp, 
  Award, 
  DollarSign, 
  FileText, 
  Zap,
  ArrowRight,
  Target
} from 'lucide-react';

const ChallengeVsSolution: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const comparisons = [
    {
      challenge: {
        icon: AlertTriangle,
        title: 'Catastrophic Data Breaches',
        description: 'A single retired hard drive handled improperly can lead to millions in fines and irreparable damage to your brand\'s reputation.',
        riskLevel: 'Critical Risk',
        color: 'text-red-600',
        bgColor: 'bg-red-50',
        borderColor: 'border-red-200'
      },
      solution: {
        icon: Shield,
        title: 'Ironclad Data Security',
        // UPDATED: "compliant" -> "standards-aligned"
        description: 'We provide fully documented, standards-aligned data destruction for every storage device, eliminating 100% of your data security risk.',
        benefit: 'Zero Risk Focus',
        color: 'text-curious-blue',
        bgColor: 'bg-curious-blue/5',
        borderColor: 'border-curious-blue/20'
      }
    },
    {
      challenge: {
        icon: FileText,
        title: 'Regulatory Failures & Fines',
        description: 'Improper disposal violates a complex web of environmental and data privacy laws, exposing your company to significant legal and financial penalties.',
        riskLevel: 'Legal Risk',
        color: 'text-orange-600',
        bgColor: 'bg-orange-50',
        borderColor: 'border-orange-200'
      },
      solution: {
        icon: Award,
        title: 'Verified Adherence',
        // UPDATED: "Guaranteed Compliance" -> "Verified Adherence"
        description: 'Our processes ensure you meet rigorous state and federal guidelines, including environmental laws and data privacy standards like HIPAA and SOX.',
        benefit: '100% Audit Ready',
        color: 'text-mountain-meadow',
        bgColor: 'bg-mountain-meadow/5',
        borderColor: 'border-mountain-meadow/20'
      }
    },
    {
      challenge: {
        icon: TrendingUp,
        title: 'Lost Financial Value',
        description: 'Retired assets are often treated as worthless junk, causing companies to miss out on thousands or even millions of dollars in recoverable capital.',
        riskLevel: 'Financial Risk',
        color: 'text-yellow-600',
        bgColor: 'bg-yellow-50',
        borderColor: 'border-yellow-200'
      },
      solution: {
        icon: DollarSign,
        title: 'Maximum Value Recovery',
        description: 'We turn your old equipment into a new revenue stream through our expert remarketing and competitive buyback programs.',
        benefit: 'Revenue Generation',
        color: 'text-java',
        bgColor: 'bg-java/5',
        borderColor: 'border-java/20'
      }
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30">
          <motion.div 
            className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-curious-blue/20 to-mountain-meadow/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-java/20 to-tradewind/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.6, 0.4]
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
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-curious-blue/10 to-mountain-meadow/10 px-6 py-3 rounded-full mb-8 border border-curious-blue/20 shadow-lg backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <Target className="w-5 h-5 text-curious-blue" />
            <span className="text-curious-blue font-semibold">Strategic Transformation</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Turn Your IT Challenges into{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-curious-blue via-mountain-meadow to-java">
              Strategic Advantages
            </span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-gray-700 max-w-5xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Every business faces significant challenges when technology reaches its end-of-life. Without a professional partner, these challenges represent major risks. With{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-curious-blue to-java font-bold">
              IT Asset Solutions
            </span>
            , they become opportunities.
          </motion.p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="space-y-12">
          {comparisons.map((comparison, index) => (
            <motion.div
              key={comparison.challenge.title}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
            >
              {/* VS Connector */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:block">
                <motion.div
                  className="bg-gradient-to-r from-curious-blue to-mountain-meadow text-white px-6 py-3 rounded-full font-bold text-lg shadow-xl border-4 border-white"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={inView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1 + index * 0.2, type: "spring", stiffness: 400, damping: 10 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  VS
                </motion.div>
              </div>

              {/* Challenge Card */}
              <motion.div
                className={`${comparison.challenge.bgColor} ${comparison.challenge.borderColor} border-2 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group`}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Risk indicator stripe */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-500 to-orange-500"></div>
                
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                  <comparison.challenge.icon className="absolute right-4 bottom-4 w-32 h-32" />
                </div>

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`${comparison.challenge.bgColor} border-2 ${comparison.challenge.borderColor} p-4 rounded-xl shadow-md`}>
                      <comparison.challenge.icon className={`w-8 h-8 ${comparison.challenge.color}`} />
                    </div>
                    <motion.div
                      className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-bold border border-red-200"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {comparison.challenge.riskLevel}
                    </motion.div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{comparison.challenge.title}</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">{comparison.challenge.description}</p>
                </div>
              </motion.div>

              {/* Solution Card */}
              <motion.div
                className={`${comparison.solution.bgColor} ${comparison.solution.borderColor} border-2 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group`}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Success indicator stripe */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-curious-blue to-mountain-meadow"></div>
                
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                  <comparison.solution.icon className="absolute right-4 bottom-4 w-32 h-32" />
                </div>

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`${comparison.solution.bgColor} border-2 ${comparison.solution.borderColor} p-4 rounded-xl shadow-md`}>
                      <comparison.solution.icon className={`w-8 h-8 ${comparison.solution.color}`} />
                    </div>
                    <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold border border-green-200 flex items-center space-x-1">
                      <CheckCircle className="w-4 h-4" />
                      <span>{comparison.solution.benefit}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{comparison.solution.title}</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">{comparison.solution.description}</p>
                </div>
              </motion.div>

              {/* Mobile VS indicator */}
              <div className="lg:hidden flex justify-center -my-4 relative z-10">
                <motion.div
                  className="bg-gradient-to-r from-curious-blue to-mountain-meadow text-white px-4 py-2 rounded-full font-bold shadow-lg"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 1 + index * 0.2 }}
                >
                  VS
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <div className="bg-gradient-to-r from-curious-blue via-mountain-meadow to-java rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <motion.div
                className="inline-flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full mb-6 backdrop-blur-sm border border-white/30"
                whileHover={{ scale: 1.05 }}
              >
                <Zap className="w-5 h-5" />
                <span className="font-semibold">Transform Your Challenges Today</span>
              </motion.div>

              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Turn IT Challenges into Strategic Advantages?
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                Don't let IT asset retirement become a liability. Partner with Michigan's trusted ITAD experts 
                and transform your technology lifecycle into a competitive advantage.
              </p>
              
              <motion.a
                href="#contact"
                className="bg-white text-curious-blue px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-colors shadow-xl flex items-center space-x-3 mx-auto w-fit"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Target className="w-6 h-6" />
                <span>Start Your Transformation</span>
                <ArrowRight className="w-6 h-6" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ChallengeVsSolution;