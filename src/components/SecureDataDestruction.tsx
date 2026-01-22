import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Shield, 
  Lock, 
  Award, 
  CheckCircle,
  ArrowRight,
  Star,
  Building,
  Target,
  Clock,
  FileText,
  HardDrive,
  Eye,
  Package,
  Hammer,
  AlertTriangle,
  Verified,
  MapPin
} from 'lucide-react';

const SecureDataDestruction: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const destructionMethods = [
    {
      icon: Lock,
      title: 'NIST 800-88 Aligned Data Erasure',
      description: 'This software-based method securely overwrites 100% of the data on a drive, rendering it unrecoverable. This sanitization process preserves the functionality of the hardware, making it the ideal choice for newer assets that can be refurbished and resold for maximum value recovery.',
      color: 'from-curious-blue to-java',
      iconColor: 'text-curious-blue',
      bgGradient: 'from-curious-blue/10 to-java/10',
      features: ['Software-based overwriting', 'Hardware functionality preserved', 'Ideal for value recovery', 'NIST 800-88 aligned']
    },
    {
      icon: Hammer,
      title: 'Physical Destruction (Shredding)',
      description: 'For end-of-life drives or for clients requiring the highest level of assurance, physical destruction is the solution. We utilize industrial-grade shredders that pulverize hard drives, SSDs, tapes, and other media into tiny, irrecoverable fragments.',
      color: 'from-java to-mountain-meadow',
      iconColor: 'text-java',
      bgGradient: 'from-java/10 to-mountain-meadow/10',
      features: ['Industrial-grade shredding', 'Complete physical destruction', 'Highest security level', 'All media types supported']
    }
  ];

  const serviceOptions = [
    {
      icon: Building,
      title: 'On-Site Data Destruction',
      description: 'We perform data destruction services directly at your location, allowing your team to witness the entire process for maximum security and verification.',
      benefits: ['Maximum security', 'Witness verification', 'No asset transportation', 'Immediate completion'],
      color: 'text-curious-blue',
      bgColor: 'from-curious-blue/10 to-curious-blue/5'
    },
    {
      icon: Shield,
      title: 'Off-Site Secure Processing',
      description: 'We transport your assets in a secure, chain-of-custody-documented vehicle to our controlled Farmington Hills facility for processing.',
      benefits: ['Secure transportation', 'Chain of custody', 'Controlled environment', 'Cost-effective'],
      color: 'text-mountain-meadow',
      bgColor: 'from-mountain-meadow/10 to-mountain-meadow/5'
    }
  ];

  const complianceStandards = [
    {
      icon: Shield,
      title: 'NIST 800-88',
      description: 'Guidelines for Media Sanitization',
      status: 'Aligned'
    },
    {
      icon: Award,
      title: 'DoD 5220.22-M',
      description: 'Department of Defense specification',
      status: 'Adherent'
    },
    {
      icon: Lock,
      title: 'HIPAA',
      description: 'Healthcare data protection',
      status: 'Adherent'
    },
    {
      icon: FileText,
      title: 'GLBA',
      description: 'Financial data security',
      status: 'Adherent'
    },
    {
      icon: Verified,
      title: 'SOX',
      description: 'Sarbanes-Oxley compliance',
      status: 'Adherent'
    }
  ];

  const faqs = [
    {
      question: 'What data destruction standards do you follow?',
      answer: 'Our data destruction processes are designed in strict alignment with the rigorous standards set by the NIST 800-88 "Guidelines for Media Sanitization" and the DoD 5220.22-M specification, ensuring your data is handled securely.',
      icon: Shield
    },
    {
      question: 'Do you offer on-site data destruction?',
      answer: 'Yes, we provide both on-site data destruction at your location for maximum security and witness verification, as well as off-site destruction at our secure Farmington Hills facility. Both methods include a complete, verifiable audit trail.',
      icon: Building
    },
    {
      question: 'Do I receive proof that my data was destroyed?',
      answer: 'Absolutely. We provide a detailed Certificate of Destruction for every project. This legal document includes the serialized asset information and confirms the date and method of destruction, satisfying internal and external audit requirements.',
      icon: FileText
    }
  ];

  const processSteps = [
    {
      icon: Package,
      title: 'Asset Collection',
      description: 'Secure pickup and transportation with documented chain of custody'
    },
    {
      icon: Eye,
      title: 'Inventory & Assessment',
      description: 'Detailed cataloging of all storage devices and media'
    },
    {
      icon: Lock,
      title: 'Data Destruction',
      description: 'NIST 800-88 aligned erasure or physical destruction'
    },
    {
      icon: FileText,
      title: 'Certification',
      description: 'Detailed Certificate of Destruction with audit trail'
    }
  ];

  const stats = [
    {
      icon: HardDrive,
      number: '500K+',
      label: 'Drives Destroyed',
      description: 'Lifetime total'
    },
    {
      icon: Shield,
      number: '100%',
      label: 'Audit Success',
      description: 'Zero violations'
    },
    {
      icon: Clock,
      number: '24-48hrs',
      label: 'Turnaround Time',
      description: 'Standard processing'
    },
    {
      icon: Award,
      number: '99.9%',
      label: 'Success Rate',
      description: 'Data elimination'
    }
  ];

  return (
    <section className="relative py-32 bg-gradient-to-br from-gray-50 via-white to-jagged-ice overflow-hidden">
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
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.2, 0.1]
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
        {/* Hero Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-curious-blue/10 to-mountain-meadow/10 backdrop-blur-xl border border-curious-blue/20 px-8 py-4 rounded-full mb-8"
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <Lock className="w-6 h-6 text-curious-blue" />
            <span className="text-curious-blue font-bold text-lg">Data Security Services</span>
            <Star className="w-6 h-6 text-mountain-meadow fill-current" />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span className="text-gray-900">Ironclad </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-curious-blue via-mountain-meadow to-java">
              Data Destruction
            </span>
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl font-semibold text-gray-700 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Secure Data Destruction & Sanitization Services
          </motion.h2>

          {/* Opening Statement */}
          <motion.div
            className="max-w-6xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="bg-white/90 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl p-8 md:p-12">
              <div className="flex items-center justify-center mb-6">
                <AlertTriangle className="w-8 h-8 text-red-500 mr-3" />
                <span className="text-xl font-bold text-red-600">Critical Security Alert</span>
              </div>
              
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
                A single data breach can cost millions, damage your reputation for years, and violate federal and state laws. When an IT asset leaves your control, the sensitive data on it—customer information, financial records, intellectual property—remains your liability.
              </p>
              
              <motion.div
                className="bg-gradient-to-r from-curious-blue/10 to-mountain-meadow/10 rounded-2xl p-8 border border-curious-blue/20"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 1 }}
              >
                <p className="text-xl md:text-2xl font-bold leading-relaxed text-gray-900">
                  Absolute data destruction isn't just a best practice; it's a fundamental requirement of modern business. At IT Asset Solutions, we provide an <span className="text-transparent bg-clip-text bg-gradient-to-r from-curious-blue to-java">irreversible data elimination process</span> that gives you complete, documented peace of mind.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <stat.icon className="w-8 h-8 text-curious-blue mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-500">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Our Commitment */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.6 }}
        >
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center space-x-2 bg-mountain-meadow/10 px-6 py-3 rounded-full mb-8 border border-mountain-meadow/20"
              whileHover={{ scale: 1.05 }}
            >
              <Shield className="w-5 h-5 text-mountain-meadow" />
              <span className="text-mountain-meadow font-semibold">Our Promise</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Commitment: Total Data Elimination</h2>
          </div>

          <div className="bg-white/90 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl p-12 md:p-16">
            <p className="text-xl text-gray-700 leading-relaxed mb-8 text-center">
              We treat data destruction as the most critical step in the ITAD lifecycle. Our promise is simple: to provide a secure, aligned, and verifiable process that protects your business from all data-related risks. Our services are designed to help you meet your compliance obligations under regulations like HIPAA, GLBA, and SOX.
            </p>
            
            <motion.div
              className="bg-gradient-to-r from-curious-blue/10 to-mountain-meadow/10 rounded-2xl p-8 border border-curious-blue/20 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 1.8 }}
            >
              <p className="text-xl font-bold leading-relaxed text-gray-900">
                With every asset we process, we provide a fully documented audit trail, ensuring you have the tangible proof you need to satisfy any security or compliance review.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Data Destruction Methods */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center space-x-2 bg-java/10 px-6 py-3 rounded-full mb-8 border border-java/20"
              whileHover={{ scale: 1.05 }}
            >
              <Hammer className="w-5 h-5 text-java" />
              <span className="text-java font-semibold">Destruction Methods</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Data Destruction Methods
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We offer multiple levels of data sanitization to meet your specific security requirements and value recovery goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {destructionMethods.map((method, index) => (
              <motion.div
                key={method.title}
                className={`bg-gradient-to-br ${method.bgGradient} backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300`}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 2.2 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${method.color} shadow-xl mb-6`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <method.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">{method.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{method.description}</p>

                {/* Features */}
                <div className="space-y-2">
                  {method.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: (2.2 + index * 0.1) + (featureIndex * 0.05) }}
                    >
                      <CheckCircle className={`w-4 h-4 ${method.iconColor}`} />
                      <span className="text-gray-600 text-sm font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Service Options */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2.4 }}
        >
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center space-x-2 bg-tradewind/10 px-6 py-3 rounded-full mb-8 border border-tradewind/20"
              whileHover={{ scale: 1.05 }}
            >
              <MapPin className="w-5 h-5 text-tradewind" />
              <span className="text-tradewind font-semibold">Service Options</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              On-Site & Off-Site Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceOptions.map((option, index) => (
              <motion.div
                key={option.title}
                className={`bg-gradient-to-br ${option.bgColor} rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300`}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 2.6 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div
                  className={`inline-flex p-4 rounded-2xl bg-white shadow-xl mb-6 ${option.color}`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <option.icon className="w-8 h-8" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{option.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{option.description}</p>

                {/* Benefits */}
                <div className="space-y-2">
                  {option.benefits.map((benefit, benefitIndex) => (
                    <motion.div
                      key={benefitIndex}
                      className="flex items-center justify-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: (2.6 + index * 0.1) + (benefitIndex * 0.05) }}
                    >
                      <CheckCircle className={`w-4 h-4 ${option.color}`} />
                      <span className="text-gray-600 text-sm font-medium">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2.8 }}
        >
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center space-x-2 bg-fountain-blue/10 px-6 py-3 rounded-full mb-8 border border-fountain-blue/20"
              whileHover={{ scale: 1.05 }}
            >
              <Target className="w-5 h-5 text-fountain-blue" />
              <span className="text-fountain-blue font-semibold">Our Process</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              4-Step Secure Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 3 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="bg-curious-blue/10 p-4 rounded-full w-fit mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-curious-blue" />
                </div>
                <div className="text-2xl font-bold text-curious-blue mb-2">{index + 1}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Compliance Standards */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 3.2 }}
        >
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center space-x-2 bg-bermuda/10 px-6 py-3 rounded-full mb-8 border border-bermuda/20"
              whileHover={{ scale: 1.05 }}
            >
              <Verified className="w-5 h-5 text-bermuda" />
              <span className="text-bermuda font-semibold">Compliance & Standards</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Standards Adherence and Verifiable Proof
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
              Our data destruction processes are designed in strict alignment with the rigorous standards set by the NIST 800-88 "Guidelines for Media Sanitization" and the DoD 5220.22-M specification. Upon completion, we provide you with a formal Certificate of Destruction that details the services performed, includes serialized asset information, and serves as your legal proof of secure disposal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {complianceStandards.map((standard, index) => (
              <motion.div
                key={standard.title}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 3.4 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="bg-curious-blue/10 p-3 rounded-full w-fit mx-auto mb-4">
                  <standard.icon className="w-6 h-6 text-curious-blue" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{standard.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{standard.description}</p>
                <span className="inline-block bg-mountain-meadow/10 text-mountain-meadow px-3 py-1 rounded-full text-xs font-semibold">
                  {standard.status}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 3.6 }}
        >
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center space-x-2 bg-fountain-blue/10 px-6 py-3 rounded-full mb-8 border border-fountain-blue/20"
              whileHover={{ scale: 1.05 }}
            >
              <FileText className="w-5 h-5 text-fountain-blue" />
              <span className="text-fountain-blue font-semibold">Common Questions</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 3.8 + index * 0.1 }}
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-curious-blue/10 p-3 rounded-full flex-shrink-0">
                    <faq.icon className="w-6 h-6 text-curious-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 4.2 }}
        >
          <div className="bg-gradient-to-r from-curious-blue via-mountain-meadow to-java rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="relative z-10">
              <motion.div
                className="inline-flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <Shield className="w-5 h-5" />
                <span className="font-semibold">Don't Leave Your Data to Chance</span>
              </motion.div>

              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Protect your legacy and ensure complete data security.
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                Contact our data security specialists today to schedule a confidential consultation for your business.
              </p>
              
              <motion.button
                className="bg-white text-curious-blue px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-colors shadow-xl flex items-center space-x-3 mx-auto"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Lock className="w-6 h-6" />
                <span>Schedule Secure Consultation</span>
                <ArrowRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SecureDataDestruction;