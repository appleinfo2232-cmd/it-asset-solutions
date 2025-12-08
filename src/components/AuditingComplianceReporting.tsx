import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Shield,
  FileCheck,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Award,
  Globe,
  Zap,
  Star,
  Building,
  Users,
  Target,
  Sparkles,
  Clock,
  FileText,
  ClipboardCheck,
  Database,
  Server,
  Eye,
  Lock,
  BarChart3,
  Leaf,
  Scale,
  ShieldCheck,
  FileBarChart,
  Fingerprint,
  SearchCheck
} from 'lucide-react';

const AuditingComplianceReporting: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const reportTypes = [
    {
      icon: FileCheck,
      title: 'Detailed Asset Summary',
      description: 'Comprehensive serialized list of all processed assets including make, model, serial number, and specifications. Every single device is tracked and documented.',
      color: 'from-curious-blue to-java',
      iconColor: 'text-curious-blue'
    },
    {
      icon: BarChart3,
      title: 'Financial Settlement Report',
      description: 'Transparent breakdown of remarketed asset values, final sales prices, and service fees. See exactly where every dollar of your asset value goes.',
      color: 'from-java to-mountain-meadow',
      iconColor: 'text-java'
    },
    {
      icon: ShieldCheck,
      title: 'Certificate of Data Destruction',
      description: 'Legal certification that data destruction was performed per NIST 800-88 standards, meeting HIPAA, GLBA, and SOX requirements.',
      color: 'from-mountain-meadow to-tradewind',
      iconColor: 'text-mountain-meadow'
    },
    {
      icon: Leaf,
      title: 'Certificate of Responsible Recycling',
      description: 'Confirms that non-reusable assets were recycled in accordance with EPA regulations and our zero-landfill policy for hazardous e-waste.',
      color: 'from-tradewind to-fountain-blue',
      iconColor: 'text-tradewind'
    },
    {
      icon: FileBarChart,
      title: 'ESG Metrics Reporting',
      description: 'Detailed environmental impact data including pounds of e-waste diverted, materials recovered, and estimated carbon footprint reduction for your sustainability reports.',
      color: 'from-fountain-blue to-bermuda',
      iconColor: 'text-fountain-blue'
    },
    {
      icon: Fingerprint,
      title: 'Chain of Custody Documentation',
      description: 'Complete audit trail from pickup to final disposition, with timestamps, photos, and signatures at every transfer point for total accountability.',
      color: 'from-bermuda to-curious-blue',
      iconColor: 'text-bermuda'
    }
  ];

  const complianceFrameworks = [
    {
      icon: Scale,
      title: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act',
      details: 'Our data destruction processes meet HIPAA data sanitization requirements'
    },
    {
      icon: Building,
      title: 'GLBA',
      description: 'Gramm-Leach-Bliley Act',
      details: 'Compliant disposal of financial services IT equipment'
    },
    {
      icon: FileCheck,
      title: 'SOX',
      description: 'Sarbanes-Oxley Act',
      details: 'Audit-ready documentation for publicly traded companies'
    },
    {
      icon: Globe,
      title: 'EPA',
      description: 'Environmental Protection Agency',
      details: 'Zero-landfill compliance for hazardous e-waste materials'
    }
  ];

  const auditingFeatures = [
    {
      icon: SearchCheck,
      title: 'Serialized Tracking',
      description: 'Every asset is tracked individually by serial number from your dock to final disposition',
      color: 'text-curious-blue',
      bgColor: 'from-curious-blue/10 to-curious-blue/5'
    },
    {
      icon: Eye,
      title: 'Complete Transparency',
      description: 'Real-time visibility into asset status, test results, and final valuation through our client portal',
      color: 'text-mountain-meadow',
      bgColor: 'from-mountain-meadow/10 to-mountain-meadow/5'
    },
    {
      icon: Lock,
      title: 'Audit-Proof Documentation',
      description: 'Legally defensible certificates and reports retained for 7 years to satisfy any audit requirement',
      color: 'text-java',
      bgColor: 'from-java/10 to-java/5'
    }
  ];

  const targetAudience = [
    {
      icon: Users,
      title: 'Compliance Officers',
      description: 'Need audit-ready documentation for regulatory compliance',
      challenge: 'Meeting strict data security and disposal regulations',
      solution: 'Comprehensive certificates and serialized reports for every asset'
    },
    {
      icon: ShieldCheck,
      title: 'Risk Managers',
      description: 'Require verifiable chain of custody and security processes',
      challenge: 'Eliminating data breach risk from retired equipment',
      solution: 'NIST 800-88 certified destruction with complete audit trails'
    },
    {
      icon: FileBarChart,
      title: 'IT Asset Managers',
      description: 'Want transparency into asset disposition and value recovery',
      challenge: 'Tracking individual assets through the disposal process',
      solution: 'Serialized tracking and detailed financial reporting'
    },
    {
      icon: Leaf,
      title: 'Sustainability Officers',
      description: 'Need environmental impact data for ESG reporting',
      challenge: 'Quantifying e-waste diversion and carbon reduction',
      solution: 'Detailed ESG metrics and responsible recycling documentation'
    }
  ];

  const faqs = [
    {
      question: 'What makes your auditing process different from other ITAD providers?',
      answer: 'Our auditing process is serialized at every single touchpoint—from your loading dock to final disposition. We don\'t just provide generic batch reports; every asset is individually tracked, tested, and documented, giving you complete traceability and transparency.',
      icon: SearchCheck
    },
    {
      question: 'How do I access my compliance reports?',
      answer: 'All reports are available through our secure client portal. You\'ll receive login credentials after your project is completed, and can download certificates, asset summaries, and financial reports at any time. Reports are retained for 7 years for your records.',
      icon: FileText
    },
    {
      question: 'Are your processes compliant with industry regulations like HIPAA and GLBA?',
      answer: 'Yes. Our data destruction processes meet NIST 800-88 standards, which satisfy the data sanitization requirements of HIPAA, GLBA, SOX, and other major compliance frameworks. Our Certificates of Destruction provide the legal documentation needed for regulatory audits.',
      icon: ShieldCheck
    },
    {
      question: 'Can you provide documentation for our sustainability reporting?',
      answer: 'Absolutely. Our ESG Metrics Report includes detailed information about pounds of e-waste diverted from landfills, materials recovered and recycled, and estimated carbon footprint reduction. This data integrates directly into your corporate sustainability reports.',
      icon: Leaf
    }
  ];

  const stats = [
    {
      icon: FileCheck,
      number: '100%',
      label: 'Audit Success Rate',
      description: 'Zero audit failures'
    },
    {
      icon: Clock,
      number: '7 Years',
      label: 'Report Retention',
      description: 'Secure archive access'
    },
    {
      icon: Shield,
      number: '675+',
      label: 'Compliant Projects',
      description: 'Across all industries'
    },
    {
      icon: Award,
      number: 'NIST 800-88',
      label: 'Certified Process',
      description: 'Industry standard'
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
            <ClipboardCheck className="w-6 h-6 text-curious-blue" />
            <span className="text-curious-blue font-bold text-lg">Auditing & Compliance Reporting</span>
            <Star className="w-6 h-6 text-mountain-meadow fill-current" />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span className="text-gray-900">Transparency & </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-curious-blue via-mountain-meadow to-java">
              Accountability You Can Trust
            </span>
          </motion.h1>

          {/* Opening Statement */}
          <motion.div
            className="max-w-6xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="bg-white/90 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl p-8 md:p-12">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
                When it comes to retiring IT assets, trust isn't built on promises—it's built on proof. In regulated industries and high-stakes environments, you need more than a handshake and a pickup truck. You need serialized tracking, certified destruction, and audit-ready documentation that stands up to scrutiny.
              </p>

              <motion.div
                className="bg-gradient-to-r from-curious-blue/10 to-mountain-meadow/10 rounded-2xl p-8 border border-curious-blue/20"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <p className="text-xl md:text-2xl font-bold leading-relaxed text-gray-900">
                  That's exactly what our <span className="text-transparent bg-clip-text bg-gradient-to-r from-curious-blue to-java">Auditing & Compliance Reporting</span> service delivers: Complete visibility, unshakeable accountability, and legally defensible documentation for every single asset that passes through our facility.
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
          transition={{ duration: 0.8, delay: 1 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <stat.icon className="w-8 h-8 text-curious-blue mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-500">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Auditing Features */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center space-x-2 bg-mountain-meadow/10 px-6 py-3 rounded-full mb-8 border border-mountain-meadow/20"
              whileHover={{ scale: 1.05 }}
            >
              <Award className="w-5 h-5 text-mountain-meadow" />
              <span className="text-mountain-meadow font-semibold">Our Approach</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Built on Three Core Principles</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {auditingFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className={`bg-gradient-to-br ${feature.bgColor} rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300`}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div
                  className={`inline-flex p-4 rounded-2xl bg-white shadow-xl mb-6 ${feature.color}`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <feature.icon className="w-8 h-8" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Compliance Reports You'll Receive */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center space-x-2 bg-java/10 px-6 py-3 rounded-full mb-8 border border-java/20"
              whileHover={{ scale: 1.05 }}
            >
              <FileText className="w-5 h-5 text-java" />
              <span className="text-java font-semibold">Comprehensive Documentation</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Compliance Reports You'll Receive
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Every project includes a complete documentation package designed to meet internal governance requirements and external regulatory audits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reportTypes.map((report, index) => (
              <motion.div
                key={report.title}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 2 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${report.color} shadow-xl mb-6`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <report.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">{report.title}</h3>
                <p className="text-gray-600 leading-relaxed">{report.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Compliance Frameworks */}
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
              <Scale className="w-5 h-5 text-tradewind" />
              <span className="text-tradewind font-semibold">Regulatory Compliance</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meeting Industry Standards
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
              Our processes and documentation satisfy the requirements of major regulatory frameworks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceFrameworks.map((framework, index) => (
              <motion.div
                key={framework.title}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 2.6 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="bg-curious-blue/10 p-4 rounded-full inline-flex mb-6">
                  <framework.icon className="w-8 h-8 text-curious-blue" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{framework.title}</h3>
                <p className="text-sm font-semibold text-gray-600 mb-4">{framework.description}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{framework.details}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Who Needs This? */}
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
              <Users className="w-5 h-5 text-fountain-blue" />
              <span className="text-fountain-blue font-semibold">Built For</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Who Needs Auditing & Compliance Reporting?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
              This service is essential for organizations in regulated industries and anyone who takes data security and corporate governance seriously
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {targetAudience.map((audience, index) => (
              <motion.div
                key={audience.title}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 3 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-curious-blue/10 p-3 rounded-full flex-shrink-0">
                    <audience.icon className="w-6 h-6 text-curious-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{audience.title}</h3>
                    <p className="text-gray-600">{audience.description}</p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                    <p className="text-gray-600 text-sm">{audience.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Our Solution:</h4>
                    <p className="text-gray-600 text-sm">{audience.solution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
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
              <FileText className="w-5 h-5 text-bermuda" />
              <span className="text-bermuda font-semibold">Common Questions</span>
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
                transition={{ duration: 0.6, delay: 3.4 + index * 0.1 }}
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
          transition={{ duration: 0.8, delay: 3.8 }}
        >
          <div className="bg-gradient-to-r from-curious-blue via-mountain-meadow to-java rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="relative z-10">
              <motion.div
                className="inline-flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <Zap className="w-5 h-5" />
                <span className="font-semibold">Transparency Starts Here</span>
              </motion.div>

              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to gain complete visibility and confidence in your IT asset disposition?
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                Contact us to learn how our auditing and compliance reporting gives you the documentation and peace of mind you need.
              </p>

              <motion.button
                className="bg-white text-curious-blue px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-colors shadow-xl flex items-center space-x-3 mx-auto"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Sparkles className="w-6 h-6" />
                <span>Request Audit Documentation</span>
                <ArrowRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AuditingComplianceReporting;
