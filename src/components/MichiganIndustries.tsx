import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Building, 
  Heart, 
  GraduationCap, 
  Factory,
  Landmark,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Award,
  Users,
  Target,
  Sparkles,
  Clock,
  DollarSign,
  Shield,
  Zap,
  Star,
  MapPin
} from 'lucide-react';

const MichiganIndustries: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const industries = [
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'Hospitals, clinics, and medical practices trust us with HIPAA-compliant data destruction and secure asset retirement.',
      compliance: 'HIPAA/HITECH',
      clients: '150+',
      color: 'from-curious-blue to-java',
      iconColor: 'text-curious-blue',
      bgGradient: 'from-curious-blue/10 to-java/10'
    },
    {
      icon: Landmark,
      title: 'Financial Services',
      description: 'Banks, credit unions, and financial institutions rely on our SOX and GLBA-compliant processes for sensitive data handling.',
      compliance: 'SOX/GLBA',
      clients: '85+',
      color: 'from-java to-mountain-meadow',
      iconColor: 'text-java',
      bgGradient: 'from-java/10 to-mountain-meadow/10'
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Universities, K-12 districts, and educational institutions choose us for FERPA-compliant student data protection.',
      compliance: 'FERPA',
      clients: '200+',
      color: 'from-mountain-meadow to-tradewind',
      iconColor: 'text-mountain-meadow',
      bgGradient: 'from-mountain-meadow/10 to-tradewind/10'
    },
    {
      icon: Building,
      title: 'Government',
      description: 'Municipal, state, and federal agencies depend on our security-cleared personnel and DoD-approved destruction methods.',
      compliance: 'DoD 5220.22-M',
      clients: '45+',
      color: 'from-tradewind to-fountain-blue',
      iconColor: 'text-tradewind',
      bgGradient: 'from-tradewind/10 to-fountain-blue/10'
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'Michigan\'s manufacturing sector trusts us with their industrial control systems and enterprise IT infrastructure.',
      compliance: 'ISO 27001',
      clients: '120+',
      color: 'from-fountain-blue to-bermuda',
      iconColor: 'text-fountain-blue',
      bgGradient: 'from-fountain-blue/10 to-bermuda/10'
    },
    {
      icon: TrendingUp,
      title: 'Professional Services',
      description: 'Law firms, consulting companies, and professional service organizations rely on our confidential data handling.',
      compliance: 'Attorney-Client',
      clients: '75+',
      color: 'from-bermuda to-curious-blue',
      iconColor: 'text-bermuda',
      bgGradient: 'from-bermuda/10 to-curious-blue/10'
    }
  ];

  const michiganStats = [
    {
      icon: MapPin,
      number: '675+',
      label: 'Michigan Clients',
      description: 'Statewide service'
    },
    {
      icon: Building,
      number: '83',
      label: 'Counties Served',
      description: 'Complete coverage'
    },
    {
      icon: Clock,
      number: '5 Years',
      label: 'Average Partnership',
      description: 'Client retention'
    },
    {
      icon: Award,
      number: '99.2%',
      label: 'Satisfaction Rate',
      description: 'Client feedback'
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
            <MapPin className="w-5 h-5 text-curious-blue" />
            <span className="text-curious-blue font-semibold">Michigan Industries</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Serving Michigan's{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-curious-blue via-mountain-meadow to-java">
              Core Industries
            </span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-gray-700 max-w-5xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Michigan's diverse economy demands specialized ITAD expertise. We understand the unique compliance requirements and operational challenges of each industry we serve.
          </motion.p>
        </motion.div>

        {/* Michigan Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {michiganStats.map((stat, index) => (
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

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              className="group relative overflow-hidden"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
              whileHover={{ y: -15, scale: 1.02 }}
            >
              <div className={`relative bg-gradient-to-br ${industry.bgGradient} backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl group-hover:shadow-3xl transition-all duration-500 overflow-hidden h-full`}>
                {/* Industry indicator */}
                <div className="absolute top-4 right-4 flex items-center space-x-2">
                  <span className={`${industry.iconColor} bg-white/80 px-2 py-1 rounded-full text-xs font-bold`}>
                    {industry.clients}
                  </span>
                </div>
                
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-white to-transparent rounded-full transform -translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700" />
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-white to-transparent rounded-full transform translate-x-12 translate-y-12 group-hover:scale-150 transition-transform duration-700" />
                </div>
                
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <motion.div
                    className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${industry.color} shadow-xl mb-6 group-hover:shadow-2xl transition-all duration-300`}
                    whileHover={{ rotate: 5, scale: 1.15 }}
                    transition={{ duration: 0.6 }}
                  >
                    <industry.icon className="w-10 h-10 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {industry.description}
                  </p>

                  {/* Compliance Badge */}
                  <div className="flex items-center justify-between">
                    <div className={`${industry.iconColor} bg-white/60 px-3 py-2 rounded-full text-sm font-bold border border-white/40`}>
                      {industry.compliance}
                    </div>
                    <div className="text-gray-500 text-sm font-medium">
                      {industry.clients} clients
                    </div>
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
          transition={{ duration: 0.8, delay: 2 }}
        >
          <div className="bg-gradient-to-r from-curious-blue via-mountain-meadow to-java rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="relative z-10">
              <motion.div
                className="inline-flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <MapPin className="w-5 h-5" />
                <span className="font-semibold">Serving All of Michigan</span>
              </motion.div>

              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Your Industry, Our Expertise
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                We understand the unique compliance and operational requirements of your industry. Let us show you how we can tailor our ITAD services to your specific needs.
              </p>
              
              <motion.button
                className="bg-white text-curious-blue px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-colors shadow-xl flex items-center space-x-3 mx-auto"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Building className="w-6 h-6" />
                <span>Discuss Industry-Specific Needs</span>
                <ArrowRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MichiganIndustries;