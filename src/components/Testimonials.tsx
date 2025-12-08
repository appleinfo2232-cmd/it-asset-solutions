import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import LazyImage from './LazyImage';
import { 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Quote,
  Play,
  Award,
  Shield,
  DollarSign,
  Users,
  Building,
  MapPin,
  Calendar,
  TrendingUp,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

const Testimonials: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      title: 'Chief Information Officer',
      company: 'Regional Healthcare Network',
      location: 'Chicago, IL',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'IT Asset Solutions transformed our hospital\'s equipment refresh program. Their HIPAA-compliant data destruction and detailed audit trails were crucial for our compliance review. The team processed 2,400 devices across 12 facilities with zero security incidents.',
      fullTestimonial: 'Working with IT Asset Solutions has been a game-changer for our healthcare network. When we needed to refresh our entire IT infrastructure across 12 hospitals, they provided comprehensive Enterprise IT Asset Disposition (ITAD) services that addressed our strict HIPAA requirements. Their Secure Data Destruction & Sanitization processes and IT Asset Value Recovery & Remarketing exceeded our expectations - we recovered $340,000 from equipment we thought was worthless.',
      rating: 5,
      industry: 'Healthcare',
      projectValue: '$340,000',
      devicesProcessed: '2,400',
      timeframe: '6 weeks',
      complianceType: 'HIPAA',
      videoTestimonial: true,
      caseStudyLink: '#',
      highlights: ['Zero security incidents', 'HIPAA compliant', '$340K recovered', '12 facilities']
    },
    {
      id: 2,
      name: 'Michael Chen',
      title: 'Chief Technology Officer',
      company: 'First National Bank',
      location: 'New York, NY',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'The ROI we achieved through their buyback program was exceptional. Professional service from pickup to payment, with complete transparency throughout the entire process. Their SOX compliance documentation was flawless during our audit.',
      fullTestimonial: 'As CTO of a major financial institution, security and compliance are non-negotiable. IT Asset Solutions delivered beyond our expectations with their Enterprise IT Asset Disposition (ITAD) services. Their Corporate IT Buyback Programs and Secure Data Destruction & Sanitization processes were flawless - every server was tracked, data was destroyed to SOX standards, and we received comprehensive audit documentation. The $1.2M recovery through their IT Asset Value Recovery & Remarketing helped fund our cloud migration.',
      rating: 5,
      industry: 'Financial Services',
      projectValue: '$1,200,000',
      devicesProcessed: '850',
      timeframe: '4 weeks',
      complianceType: 'SOX/PCI-DSS',
      videoTestimonial: false,
      caseStudyLink: '#',
      highlights: ['SOX compliant', '$1.2M recovered', 'Data center migration', 'Zero audit issues']
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      title: 'Director of Technology Services',
      company: 'State University System',
      location: 'Austin, TX',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'Outstanding service for our campus-wide laptop refresh. They handled 5,000+ devices with detailed tracking and provided excellent sustainability reporting for our ESG goals. The student data protection protocols were exemplary.',
      fullTestimonial: 'Managing IT assets across a 50,000-student university system is complex. IT Asset Solutions made it seamless. They coordinated pickups from 15 campus locations, processed 5,000 laptops and desktops, and provided detailed sustainability reports that helped us achieve our carbon neutrality goals. The FERPA compliance was perfect, and we recovered enough to fund new equipment for three departments.',
      rating: 5,
      industry: 'Education',
      projectValue: '$680,000',
      devicesProcessed: '5,000',
      timeframe: '8 weeks',
      complianceType: 'FERPA',
      videoTestimonial: true,
      caseStudyLink: '#',
      highlights: ['15 campus locations', 'FERPA compliant', '$680K recovered', 'Carbon neutral']
    },
    {
      id: 4,
      name: 'Colonel David Thompson',
      title: 'IT Security Director',
      company: 'Department of Defense',
      location: 'Washington, DC',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'Security clearance and classified data handling were our top priorities. IT Asset Solutions delivered with their security-cleared personnel and DoD-approved destruction methods. Every requirement was exceeded.',
      fullTestimonial: 'When dealing with classified government systems, there\'s no room for error. IT Asset Solutions proved they understand the gravity of our requirements. Their security-cleared team handled our classified equipment disposal with the highest level of professionalism. The destruction certificates met all DoD standards, and the chain of custody documentation was impeccable.',
      rating: 5,
      industry: 'Government',
      projectValue: 'Classified',
      devicesProcessed: '1,200',
      timeframe: '12 weeks',
      complianceType: 'DoD 5220.22-M',
      videoTestimonial: false,
      caseStudyLink: '#',
      highlights: ['Security cleared', 'DoD standards', 'Classified handling', 'Perfect audit']
    },
  ];

  const industryStats = [
    { industry: 'Healthcare', clients: '150+', satisfaction: '99.2%', icon: Shield },
    { industry: 'Finance', clients: '85+', satisfaction: '99.8%', icon: DollarSign },
    { industry: 'Education', clients: '200+', satisfaction: '98.9%', icon: Users },
    { industry: 'Government', clients: '45+', satisfaction: '100%', icon: Award },
    { industry: 'Manufacturing', clients: '120+', satisfaction: '99.1%', icon: Building }
  ];

  useEffect(() => {
    if (!isPlaying) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 8000);
      return () => clearInterval(timer);
    }
  }, [testimonials.length, isPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-jagged-ice relative overflow-hidden">
      {/* Optimized Background Elements */}
      <div className="absolute inset-0">
        {/* Reduced floating elements from 15 to 8 */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-curious-blue/10 will-change-transform"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 8,
              delay: Math.random() * 2,
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            <Star className="w-8 h-8" />
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
          <motion.div
            className="inline-flex items-center space-x-2 bg-mountain-meadow/10 px-6 py-3 rounded-full mb-8 border border-mountain-meadow/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Award className="w-5 h-5 text-mountain-meadow" />
            <span className="text-mountain-meadow font-semibold">675+ Enterprise Success Stories</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Real Results from
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-curious-blue via-mountain-meadow to-java"> Real Clients</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Discover how industry leaders across healthcare, finance, education, government, and manufacturing 
            have transformed their IT asset challenges into profitable opportunities
          </p>
        </motion.div>

        {/* Main Testimonial Showcase */}
        <div className="relative max-w-6xl mx-auto mb-16 group">
          {/* Enhanced background effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-curious-blue/5 via-transparent to-mountain-meadow/5 rounded-3xl transform rotate-1 group-hover:rotate-0 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-l from-java/5 via-transparent to-tradewind/5 rounded-3xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-500" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden relative z-10 border border-gray-100"
            >
              {/* Testimonial accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-curious-blue via-mountain-meadow to-java" />
              
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Client Info & Quote */}
                <div className="p-8 lg:p-12 relative">
                  {/* Quote background pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                    <Quote className="w-full h-full text-curious-blue" />
                  </div>
                  
                  {/* Industry Badge */}
                  <motion.div
                    className="inline-flex items-center space-x-2 bg-curious-blue/10 text-curious-blue px-4 py-2 rounded-full mb-6 border border-curious-blue/20"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Building className="w-4 h-4" />
                    <span className="font-semibold text-sm">{currentTestimonial.industry}</span>
                  </motion.div>

                  {/* Quote */}
                  <motion.div
                    className="text-curious-blue mb-6"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Quote className="w-16 h-16" />
                  </motion.div>

                  <motion.blockquote
                    className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 font-medium relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    "{currentTestimonial.content}"
                  </motion.blockquote>

                  {/* Rating */}
                  <motion.div
                    className="flex items-center mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.6 + i * 0.1, type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <Star className="w-6 h-6 text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                    <span className="ml-3 text-gray-600 font-semibold">5.0 out of 5</span>
                  </motion.div>

                  {/* Client Info */}
                  <motion.div
                    className="flex items-center space-x-4 relative z-10 will-change-transform"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                  >
                    <LazyImage
                      src={currentTestimonial.avatar}
                      alt={currentTestimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-curious-blue/20 shadow-lg"
                      width={64}
                      height={64}
                    />
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">{currentTestimonial.name}</h4>
                      <p className="text-gray-600 font-medium">{currentTestimonial.title}</p>
                      <p className="text-curious-blue font-semibold">{currentTestimonial.company}</p>
                      <div className="flex items-center text-gray-500 text-sm mt-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        {currentTestimonial.location}
                      </div>
                    </div>
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div
                    className="flex flex-wrap gap-3 mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  >
                    {currentTestimonial.videoTestimonial && (
                      <motion.button
                        className="flex items-center space-x-2 bg-curious-blue text-white px-4 py-2 rounded-full font-semibold hover:bg-java transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsPlaying(!isPlaying)}
                      >
                        <Play className="w-4 h-4" />
                        <span>Watch Video</span>
                      </motion.button>
                    )}
                    <motion.button
                      className="flex items-center space-x-2 border-2 border-curious-blue text-curious-blue px-4 py-2 rounded-full font-semibold hover:bg-curious-blue hover:text-white transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Full Case Study</span>
                    </motion.button>
                  </motion.div>
                </div>

                {/* Project Details */}
                <div className="bg-gradient-to-br from-curious-blue/5 to-mountain-meadow/5 p-8 lg:p-12">
                  <motion.h3
                    className="text-2xl font-bold text-gray-900 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    Project Highlights
                  </motion.h3>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <motion.div
                      className="bg-white rounded-xl p-4 shadow-md"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5, duration: 0.4 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <DollarSign className="w-8 h-8 text-mountain-meadow mb-2" />
                      <div className="text-2xl font-bold text-gray-900">{currentTestimonial.projectValue}</div>
                      <div className="text-sm text-gray-600">Total Recovery</div>
                    </motion.div>

                    <motion.div
                      className="bg-white rounded-xl p-4 shadow-md"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6, duration: 0.4 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Users className="w-8 h-8 text-curious-blue mb-2" />
                      <div className="text-2xl font-bold text-gray-900">{currentTestimonial.devicesProcessed}</div>
                      <div className="text-sm text-gray-600">Devices Processed</div>
                    </motion.div>

                    <motion.div
                      className="bg-white rounded-xl p-4 shadow-md"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7, duration: 0.4 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Calendar className="w-8 h-8 text-java mb-2" />
                      <div className="text-2xl font-bold text-gray-900">{currentTestimonial.timeframe}</div>
                      <div className="text-sm text-gray-600">Completion Time</div>
                    </motion.div>

                    <motion.div
                      className="bg-white rounded-xl p-4 shadow-md"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8, duration: 0.4 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Shield className="w-8 h-8 text-tradewind mb-2" />
                      <div className="text-lg font-bold text-gray-900">{currentTestimonial.complianceType}</div>
                      <div className="text-sm text-gray-600">Compliance</div>
                    </motion.div>
                  </div>

                  {/* Success Highlights */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                  >
                    <h4 className="font-bold text-gray-900 mb-4">Key Achievements</h4>
                    <div className="space-y-3">
                      {currentTestimonial.highlights.map((highlight, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                        >
                          <CheckCircle className="w-5 h-5 text-mountain-meadow" />
                          <span className="text-gray-700 font-medium">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-4 shadow-xl hover:shadow-2xl transition-shadow text-gray-600 hover:text-curious-blue z-10"
            onMouseEnter={() => setIsPlaying(true)}
            onMouseLeave={() => setIsPlaying(false)}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-4 shadow-xl hover:shadow-2xl transition-shadow text-gray-600 hover:text-curious-blue z-10"
            onMouseEnter={() => setIsPlaying(true)}
            onMouseLeave={() => setIsPlaying(false)}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-3 mb-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-curious-blue scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Industry Statistics */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {industryStats.map((stat, index) => (
            <motion.div
              key={stat.industry}
              className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <stat.icon className="w-8 h-8 text-curious-blue mx-auto mb-3" />
              <h4 className="font-bold text-gray-900 mb-2">{stat.industry}</h4>
              <div className="text-2xl font-bold text-curious-blue">{stat.clients}</div>
              <div className="text-sm text-gray-600 mb-2">Clients</div>
              <div className="text-lg font-semibold text-mountain-meadow">{stat.satisfaction}</div>
              <div className="text-xs text-gray-500">Satisfaction</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;