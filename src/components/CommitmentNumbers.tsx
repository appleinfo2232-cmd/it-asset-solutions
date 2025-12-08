import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { 
  DollarSign, 
  Users, 
  Shield, 
  Clock,
  TrendingUp,
  Award,
  Target,
  Sparkles,
  Star,
  Zap,
  CheckCircle,
  Building,
  Globe,
  Leaf,
  ArrowRight
} from 'lucide-react';

const CommitmentNumbers: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const commitmentStats = [
    {
      icon: DollarSign,
      number: 12500000,
      suffix: '+',
      label: 'Total Value Recovered',
      description: 'Returned to our clients',
      color: 'text-curious-blue',
      bgGradient: 'from-curious-blue/10 to-java/10',
      prefix: '$'
    },
    {
      icon: Users,
      number: 675,
      suffix: '+',
      label: 'Enterprise Clients Served',
      description: 'Across Michigan',
      color: 'text-mountain-meadow',
      bgGradient: 'from-mountain-meadow/10 to-tradewind/10'
    },
    {
      icon: Shield,
      number: 500000,
      suffix: '+',
      label: 'Assets Securely Processed',
      description: 'With zero breaches',
      color: 'text-java',
      bgGradient: 'from-java/10 to-fountain-blue/10'
    },
    {
      icon: Clock,
      number: 7,
      label: 'Average Project Turnaround',
      description: 'Days from start to finish',
      color: 'text-tradewind',
      bgGradient: 'from-tradewind/10 to-bermuda/10',
      suffix: ' Days'
    },
    {
      icon: Award,
      number: 100,
      suffix: '%',
      label: 'Compliance Success Rate',
      description: 'Zero violations to date',
      color: 'text-fountain-blue',
      bgGradient: 'from-fountain-blue/10 to-curious-blue/10'
    },
    {
      icon: Leaf,
      number: 2500000,
      label: 'Pounds Responsibly Recycled',
      description: 'Environmental impact',
      color: 'text-bermuda',
      bgGradient: 'from-bermuda/10 to-mountain-meadow/10'
    }
  ];

  const achievements = [
    {
      icon: Shield,
      title: 'Zero Security Incidents',
      description: 'Perfect track record across all client projects',
      color: 'text-curious-blue'
    },
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Certified processes and industry partnerships',
      color: 'text-mountain-meadow'
    },
    {
      icon: Globe,
      title: 'Statewide Coverage',
      description: 'Serving all 83 counties in Michigan',
      color: 'text-java'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Growth',
      description: '40% year-over-year client growth',
      color: 'text-tradewind'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-curious-blue/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 4,
              delay: Math.random() * 2,
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
        ))}

        {/* Circuit Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 1000">
          <motion.path
            d="M0,200 Q250,100 500,200 T1000,200"
            stroke="url(#gradient1)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "loop" }}
          />
          <motion.path
            d="M0,800 Q250,700 500,800 T1000,800"
            stroke="url(#gradient2)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 5, delay: 1, repeat: Infinity, repeatType: "loop" }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#18a9df" />
              <stop offset="100%" stopColor="#20c36e" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#20c36e" />
              <stop offset="100%" stopColor="#4cb4b4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/20" 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Target className="w-5 h-5 text-mountain-meadow" />
            <span className="text-white font-medium">Our Commitment in Numbers</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 relative">
            Our Commitment
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mountain-meadow via-curious-blue to-fountain-blue"> in Numbers</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            These numbers represent more than statistics—they represent our unwavering commitment to security, value, and environmental responsibility.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {commitmentStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className={`bg-gradient-to-br ${stat.bgGradient} backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl text-center relative overflow-hidden group`}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <motion.div
                className={`inline-flex p-4 rounded-2xl bg-white shadow-xl mb-6 relative z-10 ${stat.color}`}
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <stat.icon className="w-8 h-8" />
              </motion.div>
              
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 relative z-10">
                {stat.prefix}
                {inView && (
                  <CountUp
                    end={stat.number}
                    duration={2.5}
                    delay={1 + index * 0.1}
                    separator=","
                  />
                )}
                {stat.suffix}
              </div>
              <h3 className="text-xl font-bold text-white mb-2 relative z-10">{stat.label}</h3>
              <p className="text-gray-300 relative z-10">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <achievement.icon className={`w-8 h-8 ${achievement.color} mx-auto mb-4`} />
              <h4 className="text-lg font-bold text-white mb-2">{achievement.title}</h4>
              <p className="text-gray-300 text-sm">{achievement.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <div className="bg-gradient-to-r from-curious-blue via-mountain-meadow to-fountain-blue rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="relative z-10">
              <motion.div
                className="inline-flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <Target className="w-5 h-5" />
                <span className="font-semibold">Join Our Success Stories</span>
              </motion.div>

              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Add Your Success to These Numbers?
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Join 675+ enterprise clients who trust us with their most critical ITAD projects.
              </p>
              
              <motion.button
                className="bg-white text-curious-blue px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl flex items-center space-x-2 mx-auto"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Zap className="w-5 h-5" />
                <span>Start Your Success Story</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommitmentNumbers;