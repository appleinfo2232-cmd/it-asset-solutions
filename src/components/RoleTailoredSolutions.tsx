import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Monitor, 
  DollarSign, 
  FileText, 
  CheckCircle,
  ArrowRight,
  Target,
  Users,
  Star
} from 'lucide-react';

const RoleTailoredSolutions: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const roleSolutions = [
    {
      icon: Monitor,
      title: 'For the IT Director',
      description: 'We provide a seamless, efficient, and secure process that frees up your team\'s valuable time. Our detailed asset tracking and reporting integrate perfectly with your IT asset management (ITAM) systems, ensuring a smooth transition from active use to secure retirement.',
      benefits: ['Seamless process', 'Team time savings', 'ITAM integration', 'Smooth transitions'],
      color: 'from-curious-blue to-java',
      iconColor: 'text-curious-blue',
      bgGradient: 'from-curious-blue/10 to-java/10'
    },
    {
      icon: DollarSign,
      title: 'For the Chief Financial Officer (CFO)',
      description: 'We transform a cost center into a revenue generator. Our industry-leading value recovery and asset remarketing services are focused on maximizing the financial return on your retired technology, directly improving your bottom line and funding future IT investments.',
      benefits: ['Cost to revenue transformation', 'Maximum financial return', 'Bottom line improvement', 'Future investment funding'],
      color: 'from-java to-mountain-meadow',
      iconColor: 'text-java',
      bgGradient: 'from-java/10 to-mountain-meadow/10'
    },
    {
      icon: FileText,
      title: 'For the Compliance Officer',
      description: 'We deliver peace of mind through an ironclad, auditable process. With guaranteed data destruction aligned with NIST 800-88 standards and comprehensive reporting, we provide the documentation you need to satisfy stringent regulatory requirements.',
      // UPDATED: "compliance" -> "adherence" for legal safety
      benefits: ['Ironclad audit trail', 'NIST 800-88 adherence', 'Comprehensive reporting', 'Regulatory satisfaction'],
      color: 'from-mountain-meadow to-tradewind',
      iconColor: 'text-mountain-meadow',
      bgGradient: 'from-mountain-meadow/10 to-tradewind/10'
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
        {[...Array(5)].map((_, i) => (
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
            <Target className="w-6 h-6 text-curious-blue" />
            <span className="text-curious-blue font-bold text-lg">Role-Based Solutions</span>
            <Star className="w-6 h-6 text-mountain-meadow fill-current" />
          </motion.div>

          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span className="text-gray-900">Solutions Tailored to </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-curious-blue via-mountain-meadow to-java">
              Your Role
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
                We understand that ITAD is a multi-stakeholder decision. Our process is designed to address the specific pain points of key leaders within your organization.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Role Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {roleSolutions.map((role, index) => (
            <motion.div
              key={role.title}
              className="group relative overflow-hidden"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -15, scale: 1.02 }}
            >
              <div className={`relative bg-gradient-to-br ${role.bgGradient} backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl group-hover:shadow-3xl transition-all duration-500 overflow-hidden h-full`}>
                {/* Role indicator */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-gray-700">{index + 1}</span>
                </div>
                
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-white to-transparent rounded-full transform -translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700" />
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-white to-transparent rounded-full transform translate-x-12 translate-y-12 group-hover:scale-150 transition-transform duration-700" />
                </div>
                
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${role.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <motion.div
                    className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${role.color} shadow-xl mb-6 group-hover:shadow-2xl transition-all duration-300`}
                    whileHover={{ rotate: 5, scale: 1.15 }}
                    transition={{ duration: 0.6 }}
                  >
                    <role.icon className="w-10 h-10 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                    {role.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {role.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-3 mb-8">
                    {role.benefits.map((benefit, benefitIndex) => (
                      <motion.div
                        key={benefitIndex}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: (0.8 + index * 0.1) + (benefitIndex * 0.1) }}
                      >
                        <motion.div
                          className={`p-1 rounded-full bg-gradient-to-r ${role.color} shadow-md`}
                          whileHover={{ scale: 1.2, rotate: 180 }}
                          transition={{ duration: 0.3 }}
                        >
                          <CheckCircle className="w-4 h-4 text-white" />
                        </motion.div>
                        <span className="text-gray-600 font-medium group-hover:text-gray-700 transition-colors text-sm">
                          {benefit}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <div className="bg-gradient-to-r from-curious-blue via-mountain-meadow to-java rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <motion.div
                className="inline-flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <Users className="w-5 h-5" />
                <span className="font-semibold">Multi-Stakeholder Success</span>
              </motion.div>

              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Address Every Stakeholder's Needs?
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                Our tailored approach ensures IT Directors, CFOs, and Compliance Officers all achieve their specific goals through our ITAD process.
              </p>
              
              <motion.button
                className="bg-white text-curious-blue px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-colors shadow-xl flex items-center space-x-3 mx-auto"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Target className="w-6 h-6" />
                <span>Discuss Your Role's Needs</span>
                <ArrowRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RoleTailoredSolutions;