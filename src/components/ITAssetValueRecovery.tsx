import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  DollarSign, 
  TrendingUp, 
  Award, 
  CheckCircle,
  ArrowRight,
  Globe,
  Zap,
  Star,
  Building,
  Users,
  Target,
  Sparkles,
  Clock,
  FileText,
  Truck,
  Laptop,
  Server,
  Monitor,
  Smartphone,
  HardDrive,
  Eye,
  Package,
  RefreshCw,
  Search,
  Wrench,
  BarChart3,
  Receipt,
  Shield
} from 'lucide-react';

const ITAssetValueRecovery: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const processSteps = [
    {
      icon: Search,
      title: 'Detailed Audit & Assessment',
      description: 'Upon arrival at our Farmington Hills facility, every asset is audited, tested for full functionality, and graded for its cosmetic condition to determine its maximum resale potential.',
      color: 'from-curious-blue to-java',
      iconColor: 'text-curious-blue'
    },
    {
      icon: Shield,
      title: 'Secure Data Erasure',
      description: 'Before any remarketing can occur, all devices are sanitized using methods compliant with NIST 800-88 standards. This protects your sensitive data while preserving the hardware\'s value for resale.',
      color: 'from-java to-mountain-meadow',
      iconColor: 'text-java'
    },
    {
      icon: Wrench,
      title: 'Expert Refurbishment',
      description: 'Our skilled technicians make necessary repairs and cosmetic improvements to enhance the market value of the equipment, ensuring it commands the best possible price.',
      color: 'from-mountain-meadow to-tradewind',
      iconColor: 'text-mountain-meadow'
    },
    {
      icon: BarChart3,
      title: 'Strategic Remarketing',
      description: 'We don\'t just sell to one place. We leverage our extensive, multi-channel network of global buyers to strategically position your assets in the markets where they will achieve the highest prices.',
      color: 'from-tradewind to-fountain-blue',
      iconColor: 'text-tradewind'
    },
    {
      icon: Receipt,
      title: 'Transparent Reporting & Payout',
      description: 'You receive a detailed settlement report showing the exact sale price for each individual asset, giving you full visibility and a clear, prompt payout for your recovered value.',
      color: 'from-fountain-blue to-bermuda',
      iconColor: 'text-fountain-blue'
    }
  ];

  const assetTypes = [
    {
      icon: Laptop,
      title: 'Laptops, Desktops, and Workstations',
      description: 'Business laptops, desktop computers, and high-performance workstations'
    },
    {
      icon: Server,
      title: 'Servers, SANs, and Storage Arrays',
      description: 'Enterprise servers, storage area networks, and data storage systems'
    },
    {
      icon: Globe,
      title: 'Networking Equipment',
      description: 'Switches, routers, firewalls, and network infrastructure'
    },
    {
      icon: Smartphone,
      title: 'Mobile Phones and Tablets',
      description: 'Corporate mobile devices and tablet computers'
    },
    {
      icon: HardDrive,
      title: 'Enterprise-grade Components',
      description: 'Memory modules, processors, and specialized hardware components'
    }
  ];

  const faqs = [
    {
      question: 'How do you determine the value of my equipment?',
      answer: 'Our valuation process is based on several factors: the equipment\'s age, functional condition, cosmetic grade, and current fair market demand. We test every component to determine its maximum resale potential.',
      icon: DollarSign
    },
    {
      question: 'What happens to assets that can\'t be resold?',
      answer: 'Any asset that does not have sufficient resale value is seamlessly moved into our Sustainable & Compliant Recycling stream. We ensure that every component is handled responsibly, and you receive full documentation for both remarketed and recycled assets.',
      icon: RefreshCw
    },
    {
      question: 'What kind of reporting do you provide for remarketed assets?',
      answer: 'We provide fully transparent financial reporting. You\'ll receive a detailed settlement report that itemizes each asset by serial number, its final sale price, and a clear breakdown of any service fees, so you have complete visibility into your return on investment.',
      icon: FileText
    }
  ];

  const valueDrivers = [
    {
      icon: Globe,
      title: 'Global Sales Network',
      description: 'Access to worldwide markets ensures optimal pricing for your assets',
      color: 'text-curious-blue',
      bgColor: 'from-curious-blue/10 to-curious-blue/5'
    },
    {
      icon: Award,
      title: 'Expert Market Knowledge',
      description: 'Deep understanding of secondary markets and pricing trends',
      color: 'text-mountain-meadow',
      bgColor: 'from-mountain-meadow/10 to-mountain-meadow/5'
    },
    {
      icon: Wrench,
      title: 'Professional Refurbishment',
      description: 'Technical expertise to maximize asset value through restoration',
      color: 'text-java',
      bgColor: 'from-java/10 to-java/5'
    },
    {
      icon: Eye,
      title: 'Complete Transparency',
      description: 'Full visibility into the remarketing process and financial returns',
      color: 'text-tradewind',
      bgColor: 'from-tradewind/10 to-tradewind/5'
    }
  ];

  const stats = [
    {
      icon: DollarSign,
      number: '$12.5M+',
      label: 'Value Recovered',
      description: 'For our clients'
    },
    {
      icon: TrendingUp,
      number: '85%',
      label: 'Avg Recovery Rate',
      description: 'Of original value'
    },
    {
      icon: Clock,
      number: '14 Days',
      label: 'Avg Turnaround',
      description: 'From receipt to sale'
    },
    {
      icon: Globe,
      number: '50+',
      label: 'Global Markets',
      description: 'Sales channels'
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
            <TrendingUp className="w-6 h-6 text-curious-blue" />
            <span className="text-curious-blue font-bold text-lg">Value Recovery Services</span>
            <Star className="w-6 h-6 text-mountain-meadow fill-current" />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span className="text-gray-900">Maximum Value </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-curious-blue via-mountain-meadow to-java">
              Recovery
            </span>
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl font-semibold text-gray-700 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          >
            IT Asset Value Recovery & Remarketing Services
          </motion.h2>

          {/* Opening Statement */}
          <motion.div
            className="max-w-6xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="bg-white/90 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl p-8 md:p-12">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
                Your retired IT equipment isn't worthless. Hidden inside those laptops, servers, and networking gear is residual value—capital that most companies simply write off as a loss. At IT Asset Solutions, we believe that's a significant missed opportunity.
              </p>
              
              <motion.div
                className="bg-gradient-to-r from-curious-blue/10 to-mountain-meadow/10 rounded-2xl p-8 border border-curious-blue/20"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 1 }}
              >
                <p className="text-xl md:text-2xl font-bold leading-relaxed text-gray-900">
                  Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-curious-blue to-java">IT Asset Value Recovery service</span> is designed to turn your retired technology from a depreciated cost into a new revenue stream. We combine deep market knowledge, expert technical refurbishment, and a global sales network to find the highest possible return for every viable asset your business retires.
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

        {/* Unlock Your Hidden ROI */}
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
              <TrendingUp className="w-5 h-5 text-mountain-meadow" />
              <span className="text-mountain-meadow font-semibold">Value Proposition</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Unlock Your Hidden ROI</h2>
          </div>

          <div className="bg-white/90 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl p-12 md:p-16">
            <p className="text-xl text-gray-700 leading-relaxed mb-8 text-center">
              Our goal is to make the remarketing process transparent, profitable, and effortless for you. We handle every detail, from data sanitization to final sale, ensuring your assets are managed securely while we work to put money back into your budget.
            </p>
            
            <motion.div
              className="bg-gradient-to-r from-curious-blue/10 to-mountain-meadow/10 rounded-2xl p-8 border border-curious-blue/20 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 1.8 }}
            >
              <p className="text-xl font-bold leading-relaxed text-gray-900">
                This service transforms your technology refresh from a cost center into a <span className="text-transparent bg-clip-text bg-gradient-to-r from-curious-blue to-java">value generator</span>.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Value Drivers */}
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
              <Award className="w-5 h-5 text-java" />
              <span className="text-java font-semibold">Our Advantage</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Drives Maximum Value
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueDrivers.map((driver, index) => (
              <motion.div
                key={driver.title}
                className={`bg-gradient-to-br ${driver.bgColor} rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300`}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 2.2 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div
                  className={`inline-flex p-4 rounded-2xl bg-white shadow-xl mb-6 ${driver.color}`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <driver.icon className="w-8 h-8" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{driver.title}</h3>
                <p className="text-gray-600 leading-relaxed">{driver.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Value Recovery Process */}
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
              <RefreshCw className="w-5 h-5 text-tradewind" />
              <span className="text-tradewind font-semibold">5-Step Process</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Value Recovery Process:
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 2.6 + index * 0.1 }}
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

        {/* Asset Types */}
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
              <Package className="w-5 h-5 text-fountain-blue" />
              <span className="text-fountain-blue font-semibold">Equipment Types</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              We Find Value in a Wide Range of Assets:
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {assetTypes.map((asset, index) => (
              <motion.div
                key={asset.title}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 3 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-curious-blue/10 p-3 rounded-full flex-shrink-0">
                    <asset.icon className="w-6 h-6 text-curious-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{asset.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{asset.description}</p>
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
                <TrendingUp className="w-5 h-5" />
                <span className="font-semibold">Turn Depreciated Assets into New Capital</span>
              </motion.div>

              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to discover the hidden value in your retired IT inventory?
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                Contact our Value Recovery team today for a no-obligation assessment.
              </p>
              
              <motion.button
                className="bg-white text-curious-blue px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-colors shadow-xl flex items-center space-x-3 mx-auto"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <DollarSign className="w-6 h-6" />
                <span>Get Value Assessment</span>
                <ArrowRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ITAssetValueRecovery;