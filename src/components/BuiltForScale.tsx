import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Building, 
  Users, 
  TrendingUp, 
  Clock, 
  DollarSign, 
  Shield, 
  Database, 
  Server, 
  Globe, 
  Factory,
  Package,
  ArrowRight // <--- ADDED THIS FIXED IMPORT
} from 'lucide-react';

const BuiltForScale: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scaleProjects = [
    {
      icon: Building,
      title: 'Multi-Location & Remote Workforce',
      description: 'Coordinated ITAD across corporate offices, retail branches, and thousands of remote employee home offices (Box-and-Ship).',
      scale: '50+ Sites / Home Offices',
      color: 'from-curious-blue to-java',
      iconColor: 'text-curious-blue'
    },
    {
      icon: Database,
      title: 'Data Center Decommissioning',
      description: 'Complete facility shutdowns involving thousands of servers, storage arrays, and networking equipment.',
      scale: '10,000+ Assets',
      color: 'from-java to-mountain-meadow',
      iconColor: 'text-java'
    },
    {
      icon: Factory,
      title: 'Enterprise Cloud Migrations',
      description: 'Large-scale infrastructure transitions requiring the secure retirement of legacy on-premises equipment.',
      scale: 'Enterprise Scale',
      color: 'from-mountain-meadow to-tradewind',
      iconColor: 'text-mountain-meadow'
    },
    {
      icon: Globe,
      title: 'Merger & Acquisition Consolidation',
      description: 'Complex projects involving the integration or elimination of duplicate IT infrastructure from corporate mergers.',
      scale: 'Multi-Company',
      color: 'from-tradewind to-fountain-blue',
      iconColor: 'text-tradewind'
    }
  ];

  const capabilities = [
    {
      icon: Users,
      title: 'Dedicated Project Management',
      description: 'Assigned project managers ensure seamless coordination across all locations and stakeholders.',
      color: 'text-curious-blue',
      bgColor: 'from-curious-blue/10 to-curious-blue/5'
    },
    {
      icon: Package,
      title: 'Remote Retrieval Logistics',
      description: 'Turnkey "Box-and-Ship" programs to securely retrieve laptops from remote employees\' homes.',
      color: 'text-mountain-meadow',
      bgColor: 'from-mountain-meadow/10 to-mountain-meadow/5'
    },
    {
      icon: Shield,
      title: 'Scalable Security',
      description: 'Our security protocols scale seamlessly from single-office to enterprise-wide projects.',
      color: 'text-java',
      bgColor: 'from-java/10 to-java/5'
    },
    {
      icon: TrendingUp,
      title: 'Volume Optimization',
      description: 'Larger projects benefit from economies of scale, maximizing your value recovery.',
      color: 'text-tradewind',
      bgColor: 'from-tradewind/10 to-tradewind/5'
    }
  ];

  const stats = [
    {
      icon: Building,
      number: '50+',
      label: 'Max Locations',
      description: 'Single project'
    },
    {
      icon: Server,
      number: '10K+',
      label: 'Assets Processed',
      description: 'Largest project'
    },
    {
      icon: Clock,
      number: '6 Months',
      label: 'Longest Project',
      description: 'Multi-phase rollout'
    },
    {
      icon: DollarSign,
      number: '$2.5M',
      label: 'Largest Recovery',
      description: 'Single client'
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
            <Factory className="w-5 h-5 text-curious-blue" />
            <span className="text-curious-blue font-semibold">Enterprise Scale</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Built for Scale: Handling Michigan's{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-curious-blue via-mountain-meadow to-java">
              Most Demanding ITAD Projects
            </span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-gray-700 max-w-5xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Whether you're managing a single office refresh or a complex, multi-location enterprise project, our team has the experience, infrastructure, and expertise to handle ITAD at any scale.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <stat.icon className="w-8 h-8 text-curious-blue mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-500">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scale Projects */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Complex Projects We Handle
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {scaleProjects.map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${project.color} shadow-xl`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <project.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-xl font-bold text-gray-900">{project.title}</h4>
                      <span className={`${project.iconColor} bg-gray-50 px-3 py-1 rounded-full text-sm font-semibold`}>
                        {project.scale}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Capabilities */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What Makes Us Scale-Ready
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                className={`bg-gradient-to-br ${capability.bgColor} rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300`}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div
                  className={`inline-flex p-4 rounded-2xl bg-white shadow-xl mb-6 ${capability.color}`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <capability.icon className="w-8 h-8" />
                </motion.div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{capability.title}</h4>
                <p className="text-gray-600 leading-relaxed">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2.2 }}
        >
          <div className="bg-gradient-to-r from-curious-blue via-mountain-meadow to-java rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="relative z-10">
              <motion.div
                className="inline-flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <Factory className="w-5 h-5" />
                <span className="font-semibold">Enterprise Ready</span>
              </motion.div>

              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Scale Your ITAD Project?
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                No matter the size or complexity, we have the infrastructure and expertise to handle your enterprise ITAD needs.
              </p>
              
              <motion.button
                className="bg-white text-curious-blue px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-colors shadow-xl flex items-center space-x-3 mx-auto"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Building className="w-6 h-6" />
                <span>Discuss Your Enterprise Project</span>
                <ArrowRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BuiltForScale;