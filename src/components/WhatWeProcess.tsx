import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Laptop, 
  Server, 
  Monitor, 
  Smartphone,
  Printer,
  HardDrive,
  Router,
  Database,
  Cpu,
  Package,
  CheckCircle,
  ArrowRight,
  Zap,
  Star
} from 'lucide-react';

const WhatWeProcess: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const equipmentCategories = [
    {
      icon: Laptop,
      title: 'End-User Devices',
      items: ['Business laptops and notebooks', 'Desktop computers and workstations', 'All-in-one PCs', 'Tablets and mobile devices'],
      color: 'from-curious-blue to-java',
      iconColor: 'text-curious-blue',
      bgGradient: 'from-curious-blue/10 to-java/10'
    },
    {
      icon: Server,
      title: 'Enterprise Infrastructure',
      items: ['Rack and tower servers', 'Storage arrays and SANs', 'Blade servers and chassis', 'UPS systems and power equipment'],
      color: 'from-java to-mountain-meadow',
      iconColor: 'text-java',
      bgGradient: 'from-java/10 to-mountain-meadow/10'
    },
    {
      icon: Router,
      title: 'Networking Equipment',
      items: ['Switches and routers', 'Firewalls and security appliances', 'Wireless access points', 'Network attached storage (NAS)'],
      color: 'from-mountain-meadow to-tradewind',
      iconColor: 'text-mountain-meadow',
      bgGradient: 'from-mountain-meadow/10 to-tradewind/10'
    },
    {
      icon: Monitor,
      title: 'Peripherals & Accessories',
      items: ['LCD and LED monitors', 'Keyboards, mice, and accessories', 'Printers and multifunction devices', 'Docking stations and cables'],
      color: 'from-tradewind to-fountain-blue',
      iconColor: 'text-tradewind',
      bgGradient: 'from-tradewind/10 to-fountain-blue/10'
    },
    {
      icon: Smartphone,
      title: 'Mobile & Communication',
      items: ['Corporate smartphones', 'VoIP phones and systems', 'Conference room equipment', 'Two-way radios'],
      color: 'from-fountain-blue to-bermuda',
      iconColor: 'text-fountain-blue',
      bgGradient: 'from-fountain-blue/10 to-bermuda/10'
    },
    {
      icon: HardDrive,
      title: 'Data Storage Media',
      items: ['Hard disk drives (HDDs)', 'Solid state drives (SSDs)', 'Backup tapes and cartridges', 'Optical media and USB drives'],
      color: 'from-bermuda to-curious-blue',
      iconColor: 'text-bermuda',
      bgGradient: 'from-bermuda/10 to-curious-blue/10'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-jagged-ice to-gray-50 relative overflow-hidden">
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
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
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
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-curious-blue/10 to-mountain-meadow/10 backdrop-blur-xl border border-curious-blue/20 px-8 py-4 rounded-full mb-8"
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <Package className="w-6 h-6 text-curious-blue" />
            <span className="text-curious-blue font-bold text-lg">Comprehensive Equipment Processing</span>
            <Star className="w-6 h-6 text-mountain-meadow fill-current" />
          </motion.div>

          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span className="text-gray-900">What We </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-curious-blue via-mountain-meadow to-java">
              Process
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
                We handle the complete spectrum of corporate IT equipment. From individual devices to entire data centers, our team has the expertise to securely process any technology asset your business needs to retire.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Equipment Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipmentCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="group relative overflow-hidden"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -15, scale: 1.02 }}
            >
              <div className={`relative bg-gradient-to-br ${category.bgGradient} backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl group-hover:shadow-3xl transition-all duration-500 overflow-hidden h-full`}>
                {/* Category number indicator */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-gray-700">{index + 1}</span>
                </div>
                
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-white to-transparent rounded-full transform -translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700" />
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-white to-transparent rounded-full transform translate-x-12 translate-y-12 group-hover:scale-150 transition-transform duration-700" />
                </div>
                
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <motion.div
                    className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${category.color} shadow-xl mb-6 group-hover:shadow-2xl transition-all duration-300`}
                    whileHover={{ rotate: 5, scale: 1.15 }}
                    transition={{ duration: 0.6 }}
                  >
                    <category.icon className="w-10 h-10 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-gray-900 mb-6 group-hover:text-gray-800 transition-colors">
                    {category.title}
                  </h3>

                  {/* Equipment Items */}
                  <div className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: (0.8 + index * 0.1) + (itemIndex * 0.05) }}
                      >
                        <motion.div
                          className={`p-1 rounded-full bg-gradient-to-r ${category.color} shadow-md`}
                          whileHover={{ scale: 1.2, rotate: 180 }}
                          transition={{ duration: 0.3 }}
                        >
                          <CheckCircle className="w-4 h-4 text-white" />
                        </motion.div>
                        <span className="text-gray-600 font-medium group-hover:text-gray-700 transition-colors text-sm">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeProcess;