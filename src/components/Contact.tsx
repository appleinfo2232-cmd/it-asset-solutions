import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  CheckCircle,
  AlertCircle,
  Loader,
  User,
  Building,
  MessageSquare,
  Sparkles,
  Star,
  Shield,
  Award,
  Zap
} from 'lucide-react';
import { sendEmail, formatBusinessFormData } from '../utils/emailService';
import { COMPANY_INFO } from '../utils/constants';

interface FormData {
  full_name: string;
  company_name: string;
  email: string;
  phone_number: string;
  how_can_we_help: string;
  message: string;
}

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState<FormData>({
    full_name: '',
    company_name: '',
    email: '',
    phone_number: '',
    how_can_we_help: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.full_name.trim()) {
      newErrors.full_name = 'Full name is required';
    }

    if (!formData.company_name.trim()) {
      newErrors.company_name = 'Company name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.how_can_we_help.trim()) {
      newErrors.how_can_we_help = 'Please select how we can help you';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error for this field when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Format the form data for email service
      const emailData = {
        form_type: 'General Contact Inquiry',
        full_name: formData.full_name,
        company_name: formData.company_name || 'Not provided',
        email: formData.email,
        phone_number: formData.phone_number || 'Not provided',
        subject: formData.how_can_we_help,
        message: formData.message,
        to_email: 'admin@itassetsolutions.com',
        from_name: formData.full_name,
        reply_to: formData.email
      };

      const success = await sendEmail(emailData);
      
      if (success) {
        setSubmitStatus('success');
        setFormData({
          full_name: '',
          company_name: '',
          email: '',
          phone_number: '',
          how_can_we_help: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      content: COMPANY_INFO.phone,
      href: `tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`,
      color: 'text-curious-blue',
      bgColor: 'from-curious-blue/10 to-curious-blue/5'
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: COMPANY_INFO.email,
      href: `mailto:${COMPANY_INFO.email}`,
      color: 'text-mountain-meadow',
      bgColor: 'from-mountain-meadow/10 to-mountain-meadow/5'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: COMPANY_INFO.address,
      href: `https://maps.google.com/?q=${encodeURIComponent(COMPANY_INFO.address)}`,
      color: 'text-java',
      bgColor: 'from-java/10 to-java/5'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: COMPANY_INFO.hours,
      href: '#',
      color: 'text-tradewind',
      bgColor: 'from-tradewind/10 to-tradewind/5'
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
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-curious-blue/10 to-mountain-meadow/10 backdrop-blur-xl border border-curious-blue/20 px-8 py-4 rounded-full mb-8"
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <Send className="w-6 h-6 text-curious-blue" />
            <span className="text-curious-blue font-bold text-lg">Get In Touch</span>
            <Star className="w-6 h-6 text-mountain-meadow fill-current" />
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span className="text-gray-900">Ready to Get </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-curious-blue via-mountain-meadow to-java">
              Started?
            </span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Contact our ITAD specialists today for a free consultation and discover how we can transform your IT asset challenges into strategic advantages.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-white/90 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl p-8 md:p-12"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h3>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <motion.div
                className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 flex items-center space-x-3"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <CheckCircle className="w-6 h-6 text-green-600" />
                <div>
                  <p className="text-green-800 font-semibold">Message sent successfully!</p>
                  <p className="text-green-700 text-sm">We'll get back to you within 24 hours.</p>
                </div>
              </motion.div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <motion.div
                className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 flex items-center space-x-3"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <AlertCircle className="w-6 h-6 text-red-600" />
                <div>
                  <p className="text-red-800 font-semibold">Failed to send message</p>
                  <p className="text-red-700 text-sm">Please try again or contact us directly.</p>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Company Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="full_name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="full_name"
                      name="full_name"
                      value={formData.full_name}
                      onChange={handleInputChange}
                      className={`w-full pl-12 pr-4 py-4 border rounded-xl focus:ring-2 focus:ring-curious-blue focus:border-transparent transition-all duration-300 ${
                        errors.full_name ? 'border-red-300 bg-red-50' : 'border-gray-300 bg-white'
                      }`}
                      placeholder="Your full name"
                    />
                  </div>
                  {errors.full_name && (
                    <p className="mt-1 text-sm text-red-600">{errors.full_name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="company_name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="company_name"
                      name="company_name"
                      value={formData.company_name}
                      onChange={handleInputChange}
                      className={`w-full pl-12 pr-4 py-4 border rounded-xl focus:ring-2 focus:ring-curious-blue focus:border-transparent transition-all duration-300 ${
                        errors.company_name ? 'border-red-300 bg-red-50' : 'border-gray-300 bg-white'
                      }`}
                      placeholder="Your company name"
                    />
                  </div>
                  {errors.company_name && (
                    <p className="mt-1 text-sm text-red-600">{errors.company_name}</p>
                  )}
                </div>
              </div>

              {/* Email and Phone Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full pl-12 pr-4 py-4 border rounded-xl focus:ring-2 focus:ring-curious-blue focus:border-transparent transition-all duration-300 ${
                        errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300 bg-white'
                      }`}
                      placeholder="your.email@company.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone_number" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone_number"
                      name="phone_number"
                      value={formData.phone_number}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-curious-blue focus:border-transparent transition-all duration-300 bg-white"
                      placeholder="(248) 602-3832"
                    />
                  </div>
                </div>
              </div>

              {/* How can we help you dropdown */}
              <div>
                <label htmlFor="how_can_we_help" className="block text-sm font-semibold text-gray-700 mb-2">
                  How can we help you? *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select
                    id="how_can_we_help"
                    name="how_can_we_help"
                    value={formData.how_can_we_help}
                    onChange={handleInputChange}
                    className={`w-full pl-12 pr-4 py-4 border rounded-xl focus:ring-2 focus:ring-curious-blue focus:border-transparent transition-all duration-300 appearance-none ${
                      errors.how_can_we_help ? 'border-red-300 bg-red-50' : 'border-gray-300 bg-white'
                    }`}
                  >
                    <option value="">Please select an option</option>
                    <option value="Request a Quote">Request a Quote</option>
                    <option value="Schedule a Pickup">Schedule a Pickup</option>
                    <option value="Inquire About IT Equipment">Inquire About IT Equipment</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>
                {errors.how_can_we_help && (
                  <p className="mt-1 text-sm text-red-600">{errors.how_can_we_help}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-curious-blue focus:border-transparent transition-all duration-300 resize-none ${
                    errors.message ? 'border-red-300 bg-red-50' : 'border-gray-300 bg-white'
                  }`}
                  placeholder="Tell us about your ITAD needs, project timeline, or any questions you have..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-curious-blue to-java text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-java hover:to-mountain-meadow transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <Loader className="w-6 h-6 animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-6 h-6" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              <p className="text-sm text-gray-500 text-center">
                We respect your privacy. Your information will not be sold or shared.
              </p>

              <p className="text-sm text-gray-500 text-center">
                * Required fields. We typically respond within 24 hours.
              </p>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="bg-white/90 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl p-8 md:p-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    className={`bg-gradient-to-br ${info.bgColor} rounded-2xl p-6 hover:shadow-lg transition-all duration-300`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                    whileHover={{ y: -3, scale: 1.02 }}
                  >
                    <div className="flex items-start space-x-4">
                      <motion.div
                        className={`p-3 rounded-xl bg-white shadow-lg ${info.color}`}
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <info.icon className="w-6 h-6" />
                      </motion.div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg mb-2">{info.title}</h4>
                        {info.href !== '#' ? (
                          <a 
                            href={info.href}
                            className={`${info.color} hover:opacity-80 transition-opacity font-medium`}
                            target={info.href.startsWith('http') ? '_blank' : undefined}
                            rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {info.content}
                          </a>
                        ) : (
                          <span className="text-gray-700 font-medium">{info.content}</span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Trust Indicators */}
            <motion.div
              className="bg-gradient-to-r from-curious-blue via-mountain-meadow to-java rounded-3xl p-8 text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold mb-2">Why Choose Us?</h4>
                <p className="opacity-90">Trusted by 675+ enterprise clients across Michigan</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { icon: Shield, label: 'NIST 800-88 Certified' },
                  { icon: Award, label: '100% Compliance Rate' },
                  { icon: Zap, label: '7-Day Turnaround' }
                ].map((trust, index) => (
                  <motion.div
                    key={trust.label}
                    className="bg-white/20 rounded-xl p-4 text-center backdrop-blur-sm border border-white/30"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <trust.icon className="w-6 h-6 mx-auto mb-2" />
                    <span className="text-sm font-semibold">{trust.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;