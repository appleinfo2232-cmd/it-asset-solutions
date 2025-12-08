import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import LazyImage from './LazyImage';
import { 
  Calendar, 
  ClipboardList, 
  Shield, 
  RefreshCw, 
  CreditCard,
  ArrowRight,
  CheckCircle,
  Clock,
  Truck,
  FileText,
  Zap,
  DollarSign
} from 'lucide-react';

const Process: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const processStats = [
    { icon: Zap, label: 'Average Turnaround', value: '7 Days', color: 'text-curious-blue' },
    { icon: CheckCircle, label: 'Success Rate', value: '99.8%', color: 'text-mountain-meadow' },
    { icon: DollarSign, label: 'Avg ROI', value: '35%', color: 'text-java' },
    { icon: Shield, label: 'Security Level', value: 'Military', color: 'text-tradewind' }
  ];

  return (
    <section id="process" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Optimized Background Elements */}
      <div className="absolute inset-0">
        {/* Reduced Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-curious-blue/30 rounded-full will-change-transform"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 4,
              delay: Math.random() * 2,
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
        ))}

        {/* Simplified Circuit Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 1000">
          <motion.path
            d="M0,200 Q250,100 500,200 T1000,200"
            stroke="url(#gradient1)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "loop" }}
          />
          <motion.path
            d="M0,800 Q250,700 500,800 T1000,800"
            stroke="url(#gradient2)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 5, delay: 1, repeat: Infinity, repeatType: "loop" }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#18a9df" />
              <stop offset="100%" stopColor="#20c36e" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#20c36e" />
              <stop offset="100%" stopColor="#4cb4b4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/20" 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Zap className="w-5 h-5 text-mountain-meadow" />
            <span className="text-white font-medium">Streamlined Process</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 relative">
            Our Streamlined
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mountain-meadow via-curious-blue to-fountain-blue"> Process</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            We make complex ITAD simple with a clear, four-step approach.
          </p>

          {/* Process Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {processStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <stat.icon className={`w-6 h-6 ${stat.color} mx-auto mb-2`} />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Simplified Process Steps */}
        <div className="relative mb-16">
          {/* Process flow line */}
          {/* Removed the green connecting line */}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {[
              {
                icon: Calendar,
                title: 'Consult & Strategize',
                description: 'We start by understanding your project goals and provide a comprehensive plan and quote.',
                color: 'from-curious-blue to-java',
                iconColor: 'text-curious-blue',
                step: '01'
              },
              {
                icon: Truck,
                title: 'Secure Logistics',
                description: 'Our team manages the secure, insured pickup and transport of your assets to our facility.',
                color: 'from-java to-mountain-meadow',
                iconColor: 'text-java',
                step: '02'
              },
              {
                icon: Shield,
                title: 'Process & Document',
                description: 'We securely destroy all data, audit every asset, and route equipment for remarketing or recycling.',
                color: 'from-mountain-meadow to-tradewind',
                iconColor: 'text-mountain-meadow',
                step: '03'
              },
              {
                icon: FileText,
                title: 'Report & Recover',
                description: 'You receive full documentation (Certificates of Destruction/Recycling) and fast payment for any recovered value.',
                color: 'from-tradewind to-fountain-blue',
                iconColor: 'text-tradewind',
                step: '04'
              }
            ].map((step, index) => (
              <div
                key={step.title}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl text-center relative overflow-hidden group"
              >
                {/* Step number background */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/20 to-transparent rounded-bl-3xl" />
                <div className="absolute top-2 right-2 text-white/60 font-bold text-sm">{step.step}</div>
                
                {/* Process flow connector */}
                {index < 3 && (
                  <div className="absolute top-1/2 -right-4 w-8 h-0.5 opacity-0 transform -translate-y-1/2 hidden lg:block" />
                )}
                
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${step.color} shadow-xl mb-6 relative z-10`}
                >
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-2xl font-bold text-white mb-2 relative z-10">{index + 1}</div>
                <h3 className="text-xl font-bold text-white mb-4 relative z-10">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed relative z-10">{step.description}</p>
                
                {/* Progress indicator */}
                <div className="mt-4 relative z-10">
                  <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-white/60 rounded-full w-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-curious-blue via-mountain-meadow to-fountain-blue rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="relative z-10">
              <div
                className="inline-flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full mb-6"
              >
                <Clock className="w-5 h-5" />
                <span className="font-semibold">Ready to Start?</span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Transform Your IT Assets Into Cash Today
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Join 675+ enterprise clients who trust us with their IT asset disposition needs. 
                Get your free consultation and quote in under 24 hours.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  className="bg-white text-curious-blue px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl flex items-center space-x-2"
                >
                  <DollarSign className="w-5 h-5" />
                  <span>Start Your ITAD Process</span>
                </button>
                
                <button
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-curious-blue transition-colors flex items-center space-x-2"
                >
                  <Truck className="w-5 h-5" />
                  <span>Schedule Pickup</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;