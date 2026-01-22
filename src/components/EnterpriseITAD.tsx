import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Shield, 
  Lock, 
  TrendingUp, 
  ArrowRight,
  Award,
  Globe,
  Zap,
  Star,
  Building,
  Users,
  Sparkles,
  Clock,
  FileText,
  Truck,
  Database,
  Recycle,
  DollarSign,
  Eye,
  Package,
  RefreshCw
} from 'lucide-react';

const EnterpriseITAD: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const processSteps = [
    {
      icon: Target, // Make sure to import Target if missing in your lucide-react imports above
      title: 'Strategic Consultation',
      description: 'We start by understanding your goals, whether it\'s maximizing value, ensuring absolute security, or meeting a tight deadline.',
      color: 'from-curious-blue to-java',
      iconColor: 'text-curious-blue'
    },
    {
      icon: Truck,
      title: 'Secure & Documented Logistics',
      description: 'Our team coordinates secure packing and transportation from your location, with a verifiable chain-of-custody at every step.',
      color: 'from-java to-mountain-meadow',
      iconColor: 'text-java'
    },
    {
      icon: FileText,
      title: 'Detailed Receiving & Audit',
      description: 'Upon arrival at our Farmington Hills facility, every asset is inventoried and its condition is documented in our tracking system, giving you full visibility.',
      color: 'from-mountain-meadow to-tradewind',
      iconColor: 'text-mountain-meadow'
    },
    {
      icon: Lock,
      title: 'Ironclad Data Destruction',
      description: 'We perform verifiable data erasure and destruction that meets rigorous NIST 800-88 guidelines, providing Certificates of Destruction for your audit trail.',
      color: 'from-tradewind to-fountain-blue',
      iconColor: 'text-tradewind'
    },
    {
      icon: TrendingUp,
      title: 'Maximum Value Recovery',
      description: 'Viable assets are tested, refurbished, and strategically resold through our established market channels to maximize your financial return.',
      color: 'from-fountain-blue to-bermuda',
      iconColor: 'text-fountain-blue'
    },
    {
      icon: Recycle,
      title: 'Responsible Recycling',
      description: 'End-of-life assets are responsibly recycled in accordance with all federal and state environmental regulations, adhering to a strict zero-landfill policy.',
      color: 'from-bermuda to-curious-blue',
      iconColor: 'text-bermuda'
    },
    {
      icon: FileText,
      title: 'Consolidated Reporting',
      description: 'At the conclusion of the project, you receive a comprehensive report detailing the entire process, from financial returns to environmental impact summaries.',
      color: 'from-curious-blue to-java',
      iconColor: 'text-curious-blue'
    }
  ];

  const projectTypes = [
    {
      icon: Building,
      title: 'Large-scale corporate technology refreshes',
      description: 'Complete fleet replacements with secure disposal'
    },
    {
      icon: Database,
      title: 'Data center decommissioning and consolidation projects',
      description: 'Server retirement and facility optimization'
    },
    {
      icon: Globe,
      title: 'Cloud migrations requiring physical server retirement',
      description: 'Infrastructure modernization support'
    },
    {
      icon: Truck,
      title: 'Office relocations or closures',
      description: 'Complete facility IT asset management'
    }
  ];

  const faqs = [
    {
      question: 'What exactly is ITAD?',
      answer: 'IT Asset Disposition (ITAD) is the business practice of securely and responsibly disposing of obsolete or unwanted IT equipment. A comprehensive ITAD program includes secure logistics, data destruction, remarketing for value recovery, and responsible electronics recycling.',
      icon: Shield
    },
    {
      question: 'Why is a managed ITAD program important for my business?',
      answer: 'A managed ITAD program is crucial for mitigating risk. It protects you from data breaches, ensures you align with environmental and data privacy regulations (like HIPAA or GLBA), and maximizes the financial return on your retired assets.',
      icon: Award
    },
    {
      question: 'What types of projects do you handle?',
      answer: 'Our Enterprise ITAD service is designed for a wide range of projects, including large-scale corporate technology refreshes, data center decommissioning or consolidation, cloud migrations, and office relocations.',
      icon: Building
    }
  ];

  const differentiators = [
    {
      icon: Shield,
      title: 'Security-First Approach',
      description: 'We don\'t just dispose of assets; we manage their entire lifecycle with a focus on security and value.',
      color: 'text-curious-blue',
      bgColor: 'from-curious-blue/10 to-curious-blue/5'
    },
    {
      icon: Eye,
      title: 'Complete Transparency',
      description: 'Our approach gives you total confidence that your assets and data are handled correctly from the moment they leave your facility.',
      color: 'text-mountain-meadow',
      bgColor: 'from-mountain-meadow/10 to-mountain-meadow/5'
    },
    {
      icon: Award,
      title: 'Proven Process',
      description: 'We\'ve built our reputation on providing a process that is not only secure but also completely transparent and auditable.',
      color: 'text-java',
      bgColor: 'from-java/10 to-java/5'
    }
  ];

  const stats = [
    {
      icon: Users,
      number: '675+',
      label: 'Enterprise Clients',
      description: 'Trusted partners'
    },
    {
      icon: DollarSign,
      number: '$12.5M+',
      label: 'Value Recovered',
      description: 'For our clients'
    },
    {
      icon: Shield,
      number: '100%',
      label: 'Audit Success',
      description: 'Zero violations'
    },
    {
      icon: Clock,
      number: '7 Days',
      label: 'Avg Turnaround',
      description: 'Project completion'
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
            <Package className="w-6 h-6 text-curious-blue" />
            <span className="text-curious-blue font-bold text-lg">Enterprise ITAD Services</span>
            <Star className="w-6 h-6 text-mountain-meadow fill-current" />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span className="text-gray-900">End-to-End </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-curious-blue via-mountain-meadow to-java">
              IT Asset Disposition (ITAD)
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
                Your technology fuels your business growth. But when it's time to retire those assets, the process can become a complex web of security risks, logistical nightmares, and regulatory hurdles. Without a strategic partner, you're not just losing value—you're exposed to liability.
              </p>
              
              <motion.div
                className="bg-gradient-to-r from-curious-blue/10 to-mountain-meadow/10 rounded-2xl p-8 border border-curious-blue/20"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <p className="text-xl md:text-2xl font-bold leading-relaxed text-gray-900">
                  Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-curious-blue to-java">Enterprise ITAD service</span> is a comprehensive, fully-managed program designed to handle every single aspect of your technology's end-of-life journey. We act as your single point of contact, transforming a complex obligation into a streamlined, secure, and strategic process for your Michigan-based business.
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

        {/* The IT Asset Solutions Difference */}
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
              <span className="text-mountain-meadow font-semibold">Our Advantage</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">The IT Asset Solutions Difference</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map((diff, index) => (
              <motion.div
                key={diff.title}
                className={`bg-gradient-to-br ${diff.bgColor} rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300`}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div
                  className={`inline-flex p-4 rounded-2xl bg-white shadow-xl mb-6 ${diff.color}`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <diff.icon className="w-8 h-8" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{diff.title}</h3>
                <p className="text-gray-600 leading-relaxed">{diff.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Managed ITAD Process */}
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
              <RefreshCw className="w-5 h-5 text-java" />
              <span className="text-java font-semibold">7-Step Process</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Managed ITAD Process Includes:
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 2 + index * 0.1 }}
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

        {/* Who is this Service For? */}
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
              <Users className="w-5 h-5 text-tradewind" />
              <span className="text-tradewind font-semibold">Target Clients</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Who is this Service For?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
              Our Enterprise ITAD program is the ideal solution for medium-to-large businesses, especially those in regulated industries like healthcare, finance, and technology. It is perfectly suited for organizations managing:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectTypes.map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 2.6 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-curious-blue/10 p-3 rounded-full flex-shrink-0">
                    <project.icon className="w-6 h-6 text-curious-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{project.description}</p>
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
          transition={{ duration: 0.8, delay: 2.8 }}
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
                transition={{ duration: 0.6, delay: 3 + index * 0.1 }}
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
          transition={{ duration: 0.8, delay: 3.4 }}
        >
          <div className="bg-gradient-to-r from-curious-blue via-mountain-meadow to-java rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="relative z-10">
              <motion.div
                className="inline-flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <Zap className="w-5 h-5" />
                <span className="font-semibold">Simplify Your IT Lifecycle</span>
              </motion.div>

              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to turn your asset retirement process into a secure, simple, and profitable part of your business strategy?
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                Contact our ITAD specialists today for a comprehensive consultation.
              </p>
              
              <motion.button
                className="bg-white text-curious-blue px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-colors shadow-xl flex items-center space-x-3 mx-auto"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Sparkles className="w-6 h-6" />
                <span>Get Your ITAD Consultation</span>
                <ArrowRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnterpriseITAD;