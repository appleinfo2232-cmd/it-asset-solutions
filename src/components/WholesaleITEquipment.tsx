import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Shield,
  CheckCircle,
  Settings,
  Award,
  Zap,
  Building,
  GraduationCap,
  Heart,
  Users,
  DollarSign,
  Clock,
  TrendingUp,
  Leaf,
  Package,
  MapPin,
  Phone,
  Mail,
  ChevronDown,
  HelpCircle,
  Star,
  Sparkles,
  ArrowRight,
  Target,
  Server,
  Laptop,
  Monitor
} from 'lucide-react';
import { COMPANY_INFO } from '../utils/constants';

const WholesaleITEquipment: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const qualitySteps = [
    {
      icon: Target,
      title: 'Selective Asset Acquisition',
      description: 'Only equipment meeting our strict performance and condition standards is selected for refurbishment and resale. We source from trusted enterprise clients with documented maintenance histories.',
      color: 'from-curious-blue to-java',
      iconColor: 'text-curious-blue'
    },
    {
      icon: CheckCircle,
      title: 'Comprehensive Multi-Point Testing',
      description: 'Our certified technicians conduct thorough diagnostic tests on all components, including processors, memory, storage systems, and network interfaces. Every device undergoes stress testing to ensure optimal performance.',
      color: 'from-java to-mountain-meadow',
      iconColor: 'text-java'
    },
    {
      icon: Settings,
      title: 'Expert Refurbishment & Upgrades',
      description: 'We replace worn components, perform necessary upgrades, and restore each piece of equipment to like-new working condition. All cosmetic issues are addressed to ensure professional appearance.',
      color: 'from-mountain-meadow to-tradewind',
      iconColor: 'text-mountain-meadow'
    },
    {
      icon: Award,
      title: 'Final Quality Control & Certification',
      description: 'Every device undergoes final inspection and performance validation before certification for sale. Each unit includes detailed specifications and condition reports.',
      color: 'from-tradewind to-fountain-blue',
      iconColor: 'text-tradewind'
    }
  ];

  const targetOrganizations = [
    {
      icon: Zap,
      title: 'Startups & Small Businesses',
      points: [
        'Build robust IT infrastructure cost-effectively',
        'Access enterprise-grade equipment within tight budgets',
        'Scale operations without major capital investment'
      ],
      color: 'from-curious-blue/10 to-curious-blue/5',
      iconColor: 'text-curious-blue'
    },
    {
      icon: Building,
      title: 'Established Companies',
      points: [
        'Expand capacity, add redundancy, or create testing environments',
        'Equip new locations or temporary projects',
        'Replace failed equipment quickly and affordably'
      ],
      color: 'from-java/10 to-java/5',
      iconColor: 'text-java'
    },
    {
      icon: GraduationCap,
      title: 'Educational Institutions',
      points: [
        'Maximize technology budgets for student and staff needs',
        'Outfit computer labs and administrative offices',
        'Support distance learning initiatives'
      ],
      color: 'from-mountain-meadow/10 to-mountain-meadow/5',
      iconColor: 'text-mountain-meadow'
    },
    {
      icon: Heart,
      title: 'Non-Profit Organizations',
      points: [
        'Stretch limited budgets further with quality equipment',
        'Ensure reliable technology for mission-critical operations',
        'Support community programs with professional-grade IT'
      ],
      color: 'from-tradewind/10 to-tradewind/5',
      iconColor: 'text-tradewind'
    },
    {
      icon: Users,
      title: 'IT Managers & System Administrators',
      points: [
        'Source reliable hardware for specific projects or urgent replacements',
        'Maintain inventory of backup equipment',
        'Support infrastructure migrations and upgrades'
      ],
      color: 'from-fountain-blue/10 to-fountain-blue/5',
      iconColor: 'text-fountain-blue'
    }
  ];

  const keyAdvantages = [
    {
      icon: DollarSign,
      title: 'Significant Cost Savings',
      description: 'Acquire enterprise-level equipment for 50-70% less than new retail prices, with performance that matches your requirements.',
      color: 'text-curious-blue',
      bgColor: 'from-curious-blue/10 to-curious-blue/5'
    },
    {
      icon: Shield,
      title: 'Proven Reliability',
      description: 'All equipment undergoes our rigorous testing process and comes with warranty protection for your peace of mind.',
      color: 'text-java',
      bgColor: 'from-java/10 to-java/5'
    },
    {
      icon: Leaf,
      title: 'Environmental Responsibility',
      description: 'Extend the lifecycle of quality technology and support the circular economy by choosing refurbished over new.',
      color: 'text-mountain-meadow',
      bgColor: 'from-mountain-meadow/10 to-mountain-meadow/5'
    },
    {
      icon: Package,
      title: 'Wide Equipment Availability',
      description: 'Access diverse models and configurations, including hard-to-find legacy components and current-generation hardware.',
      color: 'text-tradewind',
      bgColor: 'from-tradewind/10 to-tradewind/5'
    },
    {
      icon: MapPin,
      title: 'Local Michigan Service',
      description: "Personal service from our Farmington Hills facility with fast delivery throughout Michigan's 83 counties.",
      color: 'text-fountain-blue',
      bgColor: 'from-fountain-blue/10 to-fountain-blue/5'
    },
    {
      icon: TrendingUp,
      title: 'Enterprise-Grade Performance',
      description: 'Professionally refurbished equipment delivers reliable performance comparable to new systems at a fraction of the cost.',
      color: 'text-bermuda',
      bgColor: 'from-bermuda/10 to-bermuda/5'
    }
  ];

  const faqs = [
    {
      question: 'What types of IT equipment do you offer?',
      answer: 'Our inventory includes business laptops, desktop computers, servers, networking equipment, monitors, and peripherals. We maintain diverse stock from leading manufacturers like Dell, HP, Lenovo, Cisco, and others.',
      icon: Server
    },
    {
      question: 'Do you provide warranties on refurbished equipment?',
      answer: 'Yes, all refurbished equipment includes our standard warranty. Warranty periods vary by equipment type and age. Contact us for specific warranty details on any item.',
      icon: Shield
    },
    {
      question: 'Can you source specific models or configurations?',
      answer: 'Absolutely. If you have particular requirements, our team can check current inventory or actively source equipment to meet your specifications. We maintain relationships with suppliers nationwide.',
      icon: Target
    },
    {
      question: 'Do you offer volume discounts?',
      answer: 'Yes, we provide competitive pricing for bulk purchases. Larger orders often qualify for additional savings and expedited processing.',
      icon: DollarSign
    },
    {
      question: 'How quickly can equipment be delivered?',
      answer: 'Most in-stock items can be delivered within 2-3 business days throughout Michigan. Rush delivery options are available for urgent needs.',
      icon: Clock
    },
    {
      question: 'Do you provide installation and setup services?',
      answer: 'We can arrange professional installation and configuration services through our trusted partner network for seamless deployment.',
      icon: Settings
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

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
          <motion.div
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-curious-blue/10 to-mountain-meadow/10 backdrop-blur-xl border border-curious-blue/20 px-8 py-4 rounded-full mb-8"
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <Laptop className="w-6 h-6 text-curious-blue" />
            <span className="text-curious-blue font-bold text-lg">Wholesale IT Equipment</span>
            <Star className="w-6 h-6 text-mountain-meadow fill-current" />
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span className="text-gray-900">Wholesale IT Equipment for </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-curious-blue via-mountain-meadow to-java">
              Michigan Businesses
            </span>
          </motion.h1>

          <motion.div
            className="max-w-5xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="bg-white/90 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl p-8 md:p-12">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                IT Asset Solutions offers Michigan businesses a smart, sustainable, and cost-effective solution for acquiring high-quality technology. Our extensive inventory of professionally refurbished IT equipment delivers reliable, enterprise-grade hardware at a fraction of the cost of new equipment, helping you expand your IT infrastructure without expanding your budget.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Quality Assurance Process Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center space-x-2 bg-java/10 px-6 py-3 rounded-full mb-8 border border-java/20"
              whileHover={{ scale: 1.05 }}
            >
              <CheckCircle className="w-5 h-5 text-java" />
              <span className="text-java font-semibold">Our Process</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Rigorous Quality Assurance Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {qualitySteps.map((step, index) => (
              <motion.div
                key={step.title}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${step.color} shadow-xl mb-6`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <step.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Target Organizations Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center space-x-2 bg-mountain-meadow/10 px-6 py-3 rounded-full mb-8 border border-mountain-meadow/20"
              whileHover={{ scale: 1.05 }}
            >
              <Users className="w-5 h-5 text-mountain-meadow" />
              <span className="text-mountain-meadow font-semibold">Who We Serve</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Perfect For These Michigan Organizations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {targetOrganizations.map((org, index) => (
              <motion.div
                key={org.title}
                className={`bg-gradient-to-br ${org.color} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100`}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div
                  className={`inline-flex p-4 rounded-2xl bg-white shadow-xl mb-6 ${org.iconColor}`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <org.icon className="w-8 h-8" />
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">{org.title}</h3>
                <ul className="space-y-3">
                  {org.points.map((point, i) => (
                    <li key={i} className="flex items-start space-x-2 text-gray-700">
                      <CheckCircle className={`w-5 h-5 ${org.iconColor} flex-shrink-0 mt-0.5`} />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Advantages Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center space-x-2 bg-curious-blue/10 px-6 py-3 rounded-full mb-8 border border-curious-blue/20"
              whileHover={{ scale: 1.05 }}
            >
              <Award className="w-5 h-5 text-curious-blue" />
              <span className="text-curious-blue font-semibold">Key Benefits</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Key Advantages of IT Asset Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyAdvantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                className={`bg-gradient-to-br ${advantage.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300`}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 2.2 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div
                  className={`inline-flex p-4 rounded-2xl bg-white shadow-xl mb-6 ${advantage.color}`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <advantage.icon className="w-8 h-8" />
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">{advantage.title}</h3>
                <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Client Success Story */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2.6 }}
        >
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center space-x-2 bg-tradewind/10 px-6 py-3 rounded-full mb-8 border border-tradewind/20"
              whileHover={{ scale: 1.05 }}
            >
              <Star className="w-5 h-5 text-tradewind fill-current" />
              <span className="text-tradewind font-semibold">Client Success</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Client Success Story
            </h2>
          </div>

          <motion.div
            className="max-w-4xl mx-auto bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 2.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-start space-x-4 mb-6">
              <Sparkles className="w-12 h-12 text-curious-blue flex-shrink-0" />
              <div>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed italic mb-6">
                  "We needed to outfit our growing Lansing office with 25 workstations quickly and cost-effectively. IT Asset Solutions delivered refurbished Dell OptiPlex systems that performed flawlessly and saved us over $15,000 compared to buying new. Their team handled everything from initial consultation to final installation."
                </blockquote>
                <div className="border-t border-gray-200 pt-6">
                  <p className="font-bold text-gray-900 text-lg">Sarah Mitchell, IT Director</p>
                  <p className="text-gray-600">TechFlow Solutions, Lansing, MI</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 3 }}
        >
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center space-x-2 bg-fountain-blue/10 px-6 py-3 rounded-full mb-8 border border-fountain-blue/20"
              whileHover={{ scale: 1.05 }}
            >
              <HelpCircle className="w-5 h-5 text-fountain-blue" />
              <span className="text-fountain-blue font-semibold">Common Questions</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 3.2 + index * 0.1 }}
              >
                <button
                  className="flex justify-between items-center w-full p-6 text-left hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="bg-curious-blue/10 p-3 rounded-full flex-shrink-0">
                      <faq.icon className="w-5 h-5 text-curious-blue" />
                    </div>
                    <span className="font-semibold text-lg text-gray-900">{faq.question}</span>
                  </div>
                  <motion.div
                    initial={false}
                    animate={{ rotate: openFaqIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6 text-curious-blue flex-shrink-0" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaqIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 pl-20"
                    >
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 3.6 }}
        >
          <div className="bg-gradient-to-r from-curious-blue via-mountain-meadow to-java rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="relative z-10">
              <motion.div
                className="inline-flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <Phone className="w-5 h-5" />
                <span className="font-semibold">Take Action Today</span>
              </motion.div>

              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to upgrade your IT infrastructure affordably?
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-5xl mx-auto">
                <motion.a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-center justify-center space-x-3 bg-white/20 backdrop-blur-xl border border-white/30 px-6 py-4 rounded-xl hover:bg-white/30 transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  <Phone className="w-5 h-5" />
                  <div className="text-left">
                    <div className="text-sm opacity-90">Call Us</div>
                    <div className="font-bold">{COMPANY_INFO.phone}</div>
                  </div>
                </motion.a>

                <motion.a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center justify-center space-x-3 bg-white/20 backdrop-blur-xl border border-white/30 px-6 py-4 rounded-xl hover:bg-white/30 transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  <Mail className="w-5 h-5" />
                  <div className="text-left">
                    <div className="text-sm opacity-90">Email Us</div>
                    <div className="font-bold text-sm">{COMPANY_INFO.email}</div>
                  </div>
                </motion.a>

                <motion.div
                  className="flex items-center justify-center space-x-3 bg-white/20 backdrop-blur-xl border border-white/30 px-6 py-4 rounded-xl"
                  whileHover={{ scale: 1.05 }}
                >
                  <MapPin className="w-5 h-5 flex-shrink-0" />
                  <div className="text-left">
                    <div className="text-sm opacity-90">Visit Us</div>
                    <div className="font-bold text-sm">Farmington Hills, MI</div>
                  </div>
                </motion.div>
              </div>

              <p className="text-lg mb-8 opacity-90 max-w-3xl mx-auto">
                <strong>Get Your Custom Quote:</strong> Contact us with your equipment needs, and we'll provide a detailed quote within 24 hours.
              </p>

              <motion.a
                href="/contact"
                className="inline-flex items-center space-x-3 bg-white text-curious-blue px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-colors shadow-xl"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Sparkles className="w-6 h-6" />
                <span>Request a Quote</span>
                <ArrowRight className="w-6 h-6" />
              </motion.a>

              <div className="mt-8 pt-8 border-t border-white/30">
                <p className="text-lg opacity-90 italic">
                  Serving all of Michigan with secure, reliable, and cost-effective IT solutions since 2015.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WholesaleITEquipment;
