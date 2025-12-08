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
  Shield,
  CreditCard,
  ListChecks,
  Banknote,
  Calculator,
  HandCoins
} from 'lucide-react';

const CorporateITBuyback: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const processSteps = [
    {
      icon: ListChecks,
      title: 'Submit Your Inventory List',
      description: 'The process begins when you provide us with a list of the equipment you wish to sell. Please include model, specifications, quantity, and general condition.',
      color: 'from-curious-blue to-java',
      iconColor: 'text-curious-blue'
    },
    {
      icon: Calculator,
      title: 'Receive a Competitive Offer',
      description: 'Our specialists analyze your list based on current secondary market values and provide you with a prompt, transparent, no-obligation purchase offer.',
      color: 'from-java to-mountain-meadow',
      iconColor: 'text-java'
    },
    {
      icon: Truck,
      title: 'Secure Logistics & Pickup',
      description: 'Once you accept the offer, our team manages the secure, insured packaging and transportation from your location to our Farmington Hills facility.',
      color: 'from-mountain-meadow to-tradewind',
      iconColor: 'text-mountain-meadow'
    },
    {
      icon: Shield,
      title: 'Audit & Data Destruction',
      description: 'At our facility, we audit the equipment to verify it against your list and then perform our ironclad data destruction on all storage media, providing full documentation.',
      color: 'from-tradewind to-fountain-blue',
      iconColor: 'text-tradewind'
    },
    {
      icon: CreditCard,
      title: 'Fast & Final Payment',
      description: 'After the audit is complete, we process your payment quickly. It\'s that simple.',
      color: 'from-fountain-blue to-bermuda',
      iconColor: 'text-fountain-blue'
    }
  ];

  const equipmentTypes = [
    {
      icon: Laptop,
      title: 'Business-class Laptops, Desktops & All-in-Ones',
      description: 'In quantity from major brands',
      examples: ['Business laptops', 'Desktop computers', 'All-in-one PCs', 'Workstations']
    },
    {
      icon: Server,
      title: 'Enterprise Servers & Networking Gear',
      description: 'Switches, routers, and server equipment',
      examples: ['Rack servers', 'Network switches', 'Routers', 'Firewalls']
    },
    {
      icon: Smartphone,
      title: 'VoIP Phone Systems & Handsets',
      description: 'Business communication equipment',
      examples: ['VoIP phones', 'Phone systems', 'Handsets', 'Conference phones']
    },
    {
      icon: Monitor,
      title: 'Business-Grade Monitors and Peripherals',
      description: 'Professional displays and accessories',
      examples: ['LCD monitors', 'LED displays', 'Keyboards', 'Mice']
    },
    {
      icon: Package,
      title: 'Other Qualifying Corporate Technology',
      description: 'Additional business equipment we purchase',
      examples: ['Tablets', 'Printers', 'Storage devices', 'Accessories']
    }
  ];

  const faqs = [
    {
      question: 'What types of equipment do you buy?',
      answer: 'We primarily purchase business-class equipment in quantity, including laptops, desktops, servers, and networking gear from major brands. The equipment should typically be no more than 4-5 years old to have significant buyback value.',
      icon: Package
    },
    {
      question: 'How does the buyback process work?',
      answer: 'The process is simple: 1) You send us an inventory list of your assets. 2) We provide a no-obligation purchase offer. 3) We manage the secure pickup and logistics. 4) We audit the equipment and securely destroy all data. 5) You receive your payment quickly.',
      icon: RefreshCw
    },
    {
      question: 'Is there a minimum quantity of assets required for a buyback?',
      answer: 'Yes, our buyback program is designed for corporate clients and typically requires a minimum quantity of assets to be economically feasible. Please contact us with your inventory list, and we can quickly determine if it qualifies for a buyback offer.',
      icon: Building
    }
  ];

  const valueDrivers = [
    {
      icon: Banknote,
      title: 'Immediate Capital Recovery',
      description: 'Convert surplus technology directly into working capital',
      color: 'text-curious-blue',
      bgColor: 'from-curious-blue/10 to-curious-blue/5'
    },
    {
      icon: Zap,
      title: 'Fast & Simple Process',
      description: 'Streamlined transaction from quote to payment',
      color: 'text-mountain-meadow',
      bgColor: 'from-mountain-meadow/10 to-mountain-meadow/5'
    },
    {
      icon: Shield,
      title: 'Secure Data Handling',
      description: 'Complete data destruction with documentation',
      color: 'text-java',
      bgColor: 'from-java/10 to-java/5'
    },
    {
      icon: HandCoins,
      title: 'Fair Market Pricing',
      description: 'Competitive offers based on current market values',
      color: 'text-tradewind',
      bgColor: 'from-tradewind/10 to-tradewind/5'
    }
  ];

  const stats = [
    {
      icon: DollarSign,
      number: '$12.5M+',
      label: 'Total Buybacks',
      description: 'Paid to clients'
    },
    {
      icon: TrendingUp,
      number: '95%',
      label: 'Client Satisfaction',
      description: 'With our offers'
    },
    {
      icon: Clock,
      number: '48hrs',
      label: 'Quote Turnaround',
      description: 'Average response time'
    },
    {
      icon: Building,
      number: '300+',
      label: 'Corporate Clients',
      description: 'Trust our program'
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
            <HandCoins className="w-6 h-6 text-curious-blue" />
            <span className="text-curious-blue font-bold text-lg">Buyback Programs</span>
            <Star className="w-6 h-6 text-mountain-meadow fill-current" />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span className="text-gray-900">Capital Recovery </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-curious-blue via-mountain-meadow to-java">
              Buybacks
            </span>
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl font-semibold text-gray-700 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Corporate IT Buyback Programs
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
                Upgrading your company's technology is essential for growth, but it leaves you with a significant challenge: what to do with the old equipment? Don't let your retired assets gather dust and depreciate in a storage room—turn them directly into working capital.
              </p>
              
              <motion.div
                className="bg-gradient-to-r from-curious-blue/10 to-mountain-meadow/10 rounded-2xl p-8 border border-curious-blue/20"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 1 }}
              >
                <p className="text-xl md:text-2xl font-bold leading-relaxed text-gray-900">
                  Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-curious-blue to-java">Corporate IT Buyback Program</span> is the most direct way for Michigan businesses to get a financial return on their retired technology. We assess your inventory of used IT assets and make a competitive, fair-market offer to purchase them outright. It's a simple, fast, and secure process designed to inject capital back into your business and simplify your tech refresh.
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

        {/* Convert Surplus Tech */}
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
              <Banknote className="w-5 h-5 text-mountain-meadow" />
              <span className="text-mountain-meadow font-semibold">Immediate Capital</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Convert Surplus Tech into Immediate Capital</h2>
          </div>

          <div className="bg-white/90 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl p-12 md:p-16">
            <p className="text-xl text-gray-700 leading-relaxed mb-8 text-center">
              Forget the complexities of finding buyers or managing listings. Our program is built for corporate efficiency. We provide a single, straightforward transaction that handles everything from logistics to secure data destruction, culminating in a fast and final payment to you.
            </p>
            
            <motion.div
              className="bg-gradient-to-r from-curious-blue/10 to-mountain-meadow/10 rounded-2xl p-8 border border-curious-blue/20 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 1.8 }}
            >
              <p className="text-xl font-bold leading-relaxed text-gray-900">
                This is the <span className="text-transparent bg-clip-text bg-gradient-to-r from-curious-blue to-java">smartest way to manage your technology's financial lifecycle</span>.
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
              <span className="text-java font-semibold">Program Benefits</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our Buyback Program
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

        {/* Buyback Process */}
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
              How Our Buyback Program Works:
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

        {/* Equipment Types */}
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
              <span className="text-fountain-blue font-semibold">Equipment We Buy</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              We Are Actively Buying:
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipmentTypes.map((equipment, index) => (
              <motion.div
                key={equipment.title}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 3 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-curious-blue/10 p-3 rounded-full flex-shrink-0">
                    <equipment.icon className="w-6 h-6 text-curious-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{equipment.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{equipment.description}</p>
                    
                    {/* Examples */}
                    <div className="space-y-1">
                      {equipment.examples.map((example, exampleIndex) => (
                        <div key={exampleIndex} className="flex items-center text-xs text-gray-500">
                          <div className="w-1 h-1 bg-curious-blue rounded-full mr-2" />
                          {example}
                        </div>
                      ))}
                    </div>
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
                <HandCoins className="w-5 h-5" />
                <span className="font-semibold">Unlock the Capital in Your Retired IT</span>
              </motion.div>

              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to simplify your tech refresh and improve your bottom line?
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                Submit your inventory list for a free, no-obligation buyback offer today.
              </p>
              
              <motion.button
                className="bg-white text-curious-blue px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-colors shadow-xl flex items-center space-x-3 mx-auto"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <ListChecks className="w-6 h-6" />
                <span>Submit Inventory for Quote</span>
                <ArrowRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CorporateITBuyback;