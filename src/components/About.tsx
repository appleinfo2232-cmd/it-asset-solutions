import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import {
  Shield,
  DollarSign,
  Recycle,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Globe,
  Lock,
  Star,
  Building,
  Users,
  Target,
  Sparkles,
  Clock,
  FileText,
  Heart,
  Lightbulb,
  Handshake,
  Truck
} from 'lucide-react';

const About: React.FC = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [storyRef, storyInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [complianceRef, complianceInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [faqRef, faqInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const services = [
    {
      icon: Lock,
      title: 'Ironclad Data Destruction',
      description: "Your data's security is non-negotiable. Our process is designed for zero-risk data elimination, adhering strictly to NIST and DoD guidelines. We provide a full audit trail and a Certificate of Destruction for every asset, providing the documentation required for your internal audits.",
      color: 'from-curious-blue to-java',
      iconColor: 'text-curious-blue',
      bgGradient: 'from-curious-blue/10 to-java/10',
      // UPDATED: "Compliance" -> "Standards"
      features: ['NIST 800-88 Protocols', 'DoD Standards', 'Certificate of Destruction', 'Defensible Audit Trail']
    },
    {
      icon: TrendingUp,
      title: 'Maximum Value Recovery & Remarketing',
      description: "Don't leave money on the table. Our market experts evaluate, refurbish, and strategically resell your viable equipment through our global networks. Our goal is simple: to maximize your return on investment.",
      color: 'from-mountain-meadow to-tradewind',
      iconColor: 'text-mountain-meadow',
      bgGradient: 'from-mountain-meadow/10 to-tradewind/10',
      features: ['Global Sales Networks', 'Expert Evaluation', 'Strategic Refurbishment', 'Maximum ROI Focus']
    },
    {
      icon: DollarSign,
      title: 'Capital Recovery Buybacks',
      description: 'Turn your technology refresh into immediate cash flow. We offer competitive, fair-market buybacks for your used corporate hardware, making your upgrades smoother and more cost-effective.',
      color: 'from-java to-fountain-blue',
      iconColor: 'text-java',
      bgGradient: 'from-java/10 to-fountain-blue/10',
      features: ['Immediate Cash Flow', 'Fair Market Pricing', 'Corporate Hardware Focus', 'Smooth Upgrades']
    },
    {
      icon: Recycle,
      title: 'Sustainable Recycling Practices',
      description: 'For assets at the true end of their life, we ensure they are handled responsibly. We partner with vetted downstream partners to guarantee adherence to federal and Michigan state environmental regulations, with a strict zero-landfill policy.',
      color: 'from-tradewind to-bermuda',
      iconColor: 'text-tradewind',
      bgGradient: 'from-tradewind/10 to-bermuda/10',
      features: ['Zero Landfill Policy', 'Vetted Downstream Partners', 'EPA Regulatory Adherence', 'Hazardous Material Handling']
    }
  ];

  const faqs = [
    {
      question: 'What types of IT equipment do you handle?',
      answer: 'We manage a comprehensive range of corporate IT assets, including laptops, desktops, servers, networking gear, storage arrays, and mobile devices. Contact us to discuss your specific inventory.',
      icon: Building
    },
    {
      question: 'How do you guarantee our data is truly gone?',
      answer: 'We use a multi-step process that adheres to NIST 800-88 and DoD standards. We provide a Certificate of Destruction for every single serialized asset we process, giving you a verifiable audit trail.',
      icon: Shield
    },
    {
      question: 'Do you service businesses outside of the Farmington Hills area?',
      answer: 'Yes. While our secure facility is in Farmington Hills, we provide ITAD services to businesses throughout Michigan. We offer secure, documented logistics to manage asset transportation from your location to our facility.',
      icon: Truck
    }
  ];

  const corePromises = [
    {
      icon: Shield,
      title: 'Unbreakable Security',
      description: 'To treat every asset as if it holds the most sensitive data.',
      color: 'from-curious-blue to-java',
      iconColor: 'text-curious-blue',
      bgColor: 'from-curious-blue/10 to-curious-blue/5'
    },
    {
      icon: DollarSign,
      title: 'Maximum Value',
      description: 'To find every dollar of recoverable value in your equipment.',
      color: 'from-mountain-meadow to-tradewind',
      iconColor: 'text-mountain-meadow',
      bgColor: 'from-mountain-meadow/10 to-mountain-meadow/5'
    },
    {
      icon: Heart,
      title: 'Unquestionable Integrity',
      description: 'To do it all with clear communication and total accountability.',
      color: 'from-java to-fountain-blue',
      iconColor: 'text-java',
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
      // UPDATED: "Compliance Rate" -> "Audit Success" (Safer claim)
      label: 'Audit Success',
      description: 'Zero violations'
    },
    {
      icon: Clock,
      number: '2020',
      label: 'Founded',
      description: 'Industry veterans'
    }
  ];

  return (
    <section id="about" className="relative py-32 bg-gradient-to-br from-slate-50 via-blue-50/60 to-emerald-50/40 overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(16, 185, 129, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.05) 0%, transparent 60%)
          `
        }} />
        <motion.div
          className="absolute top-20 left-10 w-[500px] h-[500px] bg-gradient-to-br from-curious-blue/20 to-mountain-meadow/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-[450px] h-[450px] bg-gradient-to-br from-java/20 to-tradewind/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.4, 0.3]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-mountain-meadow/10 to-fountain-blue/10 rounded-full blur-3xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.15, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          ref={heroRef}
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-curious-blue/15 to-mountain-meadow/15 backdrop-blur-xl border-2 border-curious-blue/40 px-8 py-3.5 rounded-full mb-10 shadow-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <Globe className="w-6 h-6 text-curious-blue" />
            <span className="text-curious-blue font-bold text-lg">Your Michigan Partner</span>
            <Star className="w-6 h-6 text-mountain-meadow fill-current" />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-10 leading-tight tracking-tight"
            style={{
              textShadow: '0 4px 20px rgba(59, 130, 246, 0.15), 0 8px 40px rgba(139, 92, 246, 0.1)'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-gray-900">Your Michigan Partner in </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-curious-blue via-mountain-meadow to-java">
              Secure and Sustainable Technology Management
            </span>
          </motion.h1>

          {/* Opening Question */}
          <motion.div
            className="max-w-5xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div
              className="bg-white/95 backdrop-blur-xl border-2 border-gray-200/60 rounded-3xl shadow-2xl p-10 md:p-16 relative overflow-hidden"
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-curious-blue via-mountain-meadow to-java" />

              <motion.p
                className="text-2xl md:text-3xl lg:text-4xl text-gray-800 leading-relaxed mb-10 font-semibold"
                initial={{ opacity: 0 }}
                animate={heroInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.7 }}
              >
                It's a question every successful business in Michigan faces:
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-curious-blue to-java font-black"> What do you do with your old technology?</span>
              </motion.p>

              <motion.p
                className="text-xl text-gray-600 leading-relaxed mb-10"
                initial={{ opacity: 0 }}
                animate={heroInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 }}
              >
                The answer has high stakes—for your sensitive data, your budget, and your environmental commitments. The wrong choice can lead to data breaches, compliance failures, and missed opportunities. The right choice, however, can unlock hidden value and provide total peace of mind.
              </motion.p>

              <motion.div
                className="bg-gradient-to-r from-curious-blue/15 to-mountain-meadow/15 rounded-2xl p-10 border-2 border-curious-blue/30 shadow-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.9 }}
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-2xl md:text-3xl font-bold leading-relaxed text-gray-900">
                  At <span className="text-transparent bg-clip-text bg-gradient-to-r from-curious-blue to-java">IT Asset Solutions</span>, we are your partners in making the right choice. Every time.
                </p>
              </motion.div>

              <motion.p
                className="text-xl text-gray-600 leading-relaxed mt-10"
                initial={{ opacity: 0 }}
                animate={heroInView ? { opacity: 1 } : {}}
                transition={{ delay: 1 }}
              >
                Based in Farmington Hills, we're not just a vendor; we're a dedicated team of specialists who believe the end of your IT lifecycle should be as secure, strategic, and seamless as the beginning.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24"
          initial={{ opacity: 0, y: 50 }}
          animate={statsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {stats.map((stat, index) => {
            const colors = [
              { bg: 'from-curious-blue/10 to-curious-blue/5', border: 'border-curious-blue/30', icon: 'text-curious-blue' },
              { bg: 'from-mountain-meadow/10 to-mountain-meadow/5', border: 'border-mountain-meadow/30', icon: 'text-mountain-meadow' },
              { bg: 'from-java/10 to-java/5', border: 'border-java/30', icon: 'text-java' },
              { bg: 'from-tradewind/10 to-tradewind/5', border: 'border-tradewind/30', icon: 'text-tradewind' }
            ];
            const numberMatch = stat.number.match(/\d+/);
            const numValue = numberMatch ? parseInt(numberMatch[0]) : 0;

            return (
              <motion.div
                key={stat.label}
                className={`bg-gradient-to-br ${colors[index].bg} rounded-2xl p-8 text-center shadow-xl border-2 ${colors[index].border} relative overflow-hidden group`}
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.03, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <motion.div
                  className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-5 shadow-lg relative z-10"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className={`w-9 h-9 ${colors[index].icon}`} />
                </motion.div>

                <div className="text-4xl font-black text-gray-900 mb-3 relative z-10">
                  {statsInView && numValue > 0 ? (
                    <CountUp
                      end={numValue}
                      duration={2.5}
                      delay={index * 0.1}
                      separator=","
                    />
                  ) : null}
                  {stat.number.replace(/\d+/, '')}
                </div>
                <div className="text-lg font-bold text-gray-700 mb-2 relative z-10">{stat.label}</div>
                <div className="text-sm text-gray-600 relative z-10">{stat.description}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Our Story Section */}
        <motion.div
          ref={storyRef}
          className="mb-24"
          initial={{ opacity: 0 }}
          animate={storyInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={storyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center space-x-3 bg-mountain-meadow/15 px-7 py-3.5 rounded-full mb-8 border-2 border-mountain-meadow/40 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={storyInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Lightbulb className="w-6 h-6 text-mountain-meadow" />
              <span className="text-mountain-meadow font-bold text-base">Our Foundation</span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={storyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Our Mission
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={storyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              To provide Michigan businesses with the most secure, compliant, and environmentally responsible IT asset disposition solutions. We exist to protect our clients from the dual risks of data exposure and environmental liability, transforming their end-of-life technology from a complex challenge into a secure and valuable asset.
            </motion.p>
          </motion.div>

          <motion.div
            className="bg-white/95 backdrop-blur-xl border-2 border-gray-200/60 rounded-3xl shadow-2xl p-14 md:p-20 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={storyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-curious-blue via-mountain-meadow to-java" />

            <motion.p
              className="text-2xl md:text-3xl text-gray-700 leading-relaxed mb-16 text-center font-bold"
              initial={{ opacity: 0 }}
              animate={storyInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
            >
              We built this company on a foundation of three core promises:
            </motion.p>

            {/* Core Promises */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
              {corePromises.map((promise, index) => (
                <motion.div
                  key={promise.title}
                  className={`bg-gradient-to-br ${promise.bgColor} rounded-3xl p-10 text-center shadow-xl border-2 border-gray-200/40 relative overflow-hidden group`}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={storyInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.15 }}
                  whileHover={{ y: -10, scale: 1.03, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <motion.div
                    className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${promise.color} shadow-2xl mb-7 relative z-10`}
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <promise.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-black text-gray-900 mb-5 relative z-10">{promise.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg relative z-10">{promise.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="bg-gradient-to-r from-curious-blue/15 to-mountain-meadow/15 rounded-3xl p-12 border-2 border-curious-blue/30 text-center shadow-xl relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={storyInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.h3
                className="text-3xl font-black text-gray-900 mb-6"
                initial={{ opacity: 0 }}
                animate={storyInView ? { opacity: 1 } : {}}
                transition={{ delay: 1.4 }}
              >
                Our Michigan Story
              </motion.h3>
              <motion.p
                className="text-xl leading-relaxed text-gray-700"
                initial={{ opacity: 0 }}
                animate={storyInView ? { opacity: 1 } : {}}
                transition={{ delay: 1.5 }}
              >
                Founded in 2020, IT Asset Solutions was built to address a clear need in the local market: a truly dedicated ITAD partner that combines the security and process rigor of a large-scale enterprise with the agility and personalized attention of a local expert. Our roots are here in Michigan, and we are committed to supporting the businesses that drive our state's economy. We believe that responsible technology lifecycle management is a cornerstone of modern business, and we are proud to provide this critical service to our community.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* How We Solve Your IT Challenges */}
        <motion.div
          ref={servicesRef}
          className="mb-24"
          initial={{ opacity: 0 }}
          animate={servicesInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center space-x-3 bg-java/15 px-7 py-3.5 rounded-full mb-8 border-2 border-java/40 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={servicesInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Target className="w-6 h-6 text-java" />
              <span className="text-java font-bold text-base">Solutions Focused</span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              How We Solve Your IT Challenges
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Our comprehensive approach addresses every aspect of IT asset disposition with precision and care.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className={`bg-gradient-to-br ${service.bgGradient} backdrop-blur-xl border-2 border-white/40 rounded-3xl p-10 shadow-xl relative overflow-hidden group`}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={servicesInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
                whileHover={{ y: -10, scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <motion.div
                  className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${service.color} shadow-2xl mb-7 relative z-10`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon className="w-10 h-10 text-white" />
                </motion.div>

                <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-5 relative z-10">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-8 text-lg relative z-10">{service.description}</p>

                <div className="space-y-3 relative z-10">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={servicesInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.7 + index * 0.15 + featureIndex * 0.1 }}
                    >
                      <CheckCircle className={`w-5 h-5 ${service.iconColor} flex-shrink-0`} />
                      <span className="text-gray-600 text-base font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Commitment to Standards & Security Section (UPDATED FOR LEGAL SAFETY) */}
        <motion.div
          ref={complianceRef}
          className="mb-24"
          initial={{ opacity: 0 }}
          animate={complianceInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={complianceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center space-x-3 bg-curious-blue/15 px-7 py-3.5 rounded-full mb-8 border-2 border-curious-blue/40 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={complianceInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Shield className="w-6 h-6 text-curious-blue" />
              <span className="text-curious-blue font-bold text-base">Trust & Transparency</span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={complianceInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Our Commitment to Standards & Security
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={complianceInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              In the ITAD industry, trust is everything. Our operational processes are built from the ground up to align with the industry's most stringent frameworks, including R2v3 and NAID AAA principles, to ensure the highest level of data integrity.
            </motion.p>
          </motion.div>

          <motion.div
            className="bg-white/95 backdrop-blur-xl border-2 border-gray-200/60 rounded-3xl shadow-2xl p-14 md:p-20 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={complianceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-curious-blue via-mountain-meadow to-java" />

            <motion.p
              className="text-2xl md:text-3xl text-gray-700 leading-relaxed mb-16 text-center font-bold"
              initial={{ opacity: 0 }}
              animate={complianceInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
            >
              For you, our client, this means your assets are handled with the highest level of care and security at every stage.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <motion.div
                className="bg-gradient-to-br from-curious-blue/10 to-curious-blue/5 rounded-3xl p-10 shadow-xl border-2 border-curious-blue/20 relative overflow-hidden group"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={complianceInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ y: -10, scale: 1.03, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <motion.div
                  className="inline-flex p-5 rounded-2xl bg-gradient-to-br from-curious-blue to-java shadow-2xl mb-7 relative z-10"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Lock className="w-10 h-10 text-white" />
                </motion.div>

                <h3 className="text-2xl font-black text-gray-900 mb-5 relative z-10">Data Destruction Adherence</h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-lg relative z-10">
                  Our data destruction methods strictly follow the guidelines of NIST SP 800-88 Rev. 1, the gold standard for media sanitization. This ensures that all data on your devices is forensically unrecoverable.
                </p>
                <div className="flex items-center space-x-3 text-base text-gray-600 bg-white rounded-lg p-4 shadow-md relative z-10">
                  <CheckCircle className="w-5 h-5 text-curious-blue flex-shrink-0" />
                  <span className="font-medium">NIST SP 800-88 Rev. 1 Aligned</span>
                </div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-mountain-meadow/10 to-mountain-meadow/5 rounded-3xl p-10 shadow-xl border-2 border-mountain-meadow/20 relative overflow-hidden group"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={complianceInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.95 }}
                whileHover={{ y: -10, scale: 1.03, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <motion.div
                  className="inline-flex p-5 rounded-2xl bg-gradient-to-br from-mountain-meadow to-tradewind shadow-2xl mb-7 relative z-10"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Recycle className="w-10 h-10 text-white" />
                </motion.div>

                <h3 className="text-2xl font-black text-gray-900 mb-5 relative z-10">Environmental Responsibility</h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-lg relative z-10">
                  We operate in full adherence with all local, state, and federal EPA regulations for e-waste. We maintain a zero-landfill policy for all electronic equipment, ensuring that your assets are handled in the most environmentally sustainable way possible.
                </p>
                <div className="flex items-center space-x-3 text-base text-gray-600 bg-white rounded-lg p-4 shadow-md relative z-10">
                  <CheckCircle className="w-5 h-5 text-mountain-meadow flex-shrink-0" />
                  <span className="font-medium">EPA Regulations Adherent</span>
                </div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-java/10 to-java/5 rounded-3xl p-10 shadow-xl border-2 border-java/20 relative overflow-hidden group"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={complianceInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.1 }}
                whileHover={{ y: -10, scale: 1.03, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <motion.div
                  className="inline-flex p-5 rounded-2xl bg-gradient-to-br from-java to-fountain-blue shadow-2xl mb-7 relative z-10"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <FileText className="w-10 h-10 text-white" />
                </motion.div>

                <h3 className="text-2xl font-black text-gray-900 mb-5 relative z-10">Process Transparency</h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-lg relative z-10">
                  We believe in radical transparency. We provide our clients with a complete, auditable paper trail for every asset we manage, from initial pickup to final disposition. You receive detailed reporting and official Certificates of Destruction, giving you the documentation you need to satisfy any internal audit.
                </p>
                <div className="flex items-center space-x-3 text-base text-gray-600 bg-white rounded-lg p-4 shadow-md relative z-10">
                  <CheckCircle className="w-5 h-5 text-java flex-shrink-0" />
                  <span className="font-medium">Complete Audit Trail</span>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="bg-gradient-to-r from-curious-blue/15 to-mountain-meadow/15 rounded-3xl p-12 border-2 border-curious-blue/30 text-center mt-12 shadow-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={complianceInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.p
                className="text-2xl md:text-3xl font-black leading-relaxed text-gray-900"
                initial={{ opacity: 0 }}
                animate={complianceInView ? { opacity: 1 } : {}}
                transition={{ delay: 1.4 }}
              >
                Choosing IT Asset Solutions means choosing a partner dedicated to the highest standards of operational excellence and security.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          ref={faqRef}
          className="mb-24"
          initial={{ opacity: 0 }}
          animate={faqInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center space-x-3 bg-fountain-blue/15 px-7 py-3.5 rounded-full mb-8 border-2 border-fountain-blue/40 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={faqInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <FileText className="w-6 h-6 text-fountain-blue" />
              <span className="text-fountain-blue font-bold text-base">Common Questions</span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={faqInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Frequently Asked Questions
            </motion.h2>
          </motion.div>

          <div className="space-y-8">
            {faqs.map((faq, index) => {
              const colors = [
                { bg: 'bg-curious-blue/10', icon: 'text-curious-blue', border: 'border-curious-blue/30' },
                { bg: 'bg-mountain-meadow/10', icon: 'text-mountain-meadow', border: 'border-mountain-meadow/30' },
                { bg: 'bg-java/10', icon: 'text-java', border: 'border-java/30' }
              ];
              return (
                <motion.div
                  key={faq.question}
                  className={`bg-white rounded-3xl p-10 shadow-xl border-2 ${colors[index].border} relative overflow-hidden group`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, scale: 0.9 }}
                  animate={faqInView ? { opacity: 1, x: 0, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
                  whileHover={{ y: -5, scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="flex items-start space-x-6 relative z-10">
                    <motion.div
                      className={`${colors[index].bg} p-4 rounded-2xl flex-shrink-0 shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <faq.icon className={`w-8 h-8 ${colors[index].icon}`} />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-black text-gray-900 mb-5">{faq.question}</h3>
                      <p className="text-gray-600 leading-relaxed text-lg">{faq.answer}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          ref={ctaRef}
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="bg-gradient-to-r from-curious-blue via-mountain-meadow to-java rounded-3xl p-16 md:p-20 text-white relative overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent"></div>
            <motion.div
              className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"
              animate={{
                x: [0, 50, 0],
                y: [0, -30, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl"
              animate={{
                x: [0, -30, 0],
                y: [0, 40, 0],
                scale: [1, 1.15, 1]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 1
              }}
            />
            <div className="relative z-10">
              <motion.div
                className="inline-flex items-center space-x-3 bg-white/25 backdrop-blur-sm px-7 py-3.5 rounded-full mb-8 border-2 border-white/30 shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={ctaInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                <Handshake className="w-6 h-6" />
                <span className="font-bold text-base">Let's Start a Partnership</span>
              </motion.div>

              <motion.h3
                className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Your technology deserves a trusted partner.
              </motion.h3>
              <motion.p
                className="text-2xl md:text-3xl mb-12 opacity-95 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Let our team show you the difference that a commitment to security, value, and integrity can make.
              </motion.p>

              <motion.a
                href="#contact"
                className="inline-flex items-center space-x-4 bg-white text-curious-blue px-12 py-6 rounded-full font-black text-xl hover:bg-gray-50 transition-colors shadow-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={ctaInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.05, y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Sparkles className="w-7 h-7" />
                <span>Start Your Partnership Today</span>
                <ArrowRight className="w-7 h-7" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;