import React from 'react';
import {
  Shield,
  Award,
  FileCheck,
  CheckCircle,
  Target,
  ArrowRight,
  Clock,
  Leaf,
  Lock,
  TrendingUp
} from 'lucide-react';

const CertificationsCompliance: React.FC = () => {

  const certifications = [
    {
      icon: Shield,
      title: 'R2 / R2v3',
      subtitle: 'Responsible Recycling',
      description: 'The globally recognized standard for responsible electronics recycling, ensuring environmental health and worker safety.',
      color: 'from-curious-blue to-java',
      iconColor: 'text-curious-blue',
      bgGradient: 'from-curious-blue/10 to-java/10',
      features: ['Environmental Protection', 'Data Security', 'Worker Safety', 'Chain of Custody']
    },
    {
      icon: Award,
      title: 'e-Stewards',
      subtitle: 'Environmental Leadership',
      description: 'The highest standard for ethical and environmentally responsible electronics recycling and refurbishment.',
      color: 'from-mountain-meadow to-tradewind',
      iconColor: 'text-mountain-meadow',
      bgGradient: 'from-mountain-meadow/10 to-tradewind/10',
      features: ['Zero Landfill', 'No Export to Developing Nations', 'Highest Environmental Standards', 'Transparency']
    },
    {
      icon: FileCheck,
      title: 'NAID AAA',
      subtitle: 'i-SIGMA / NAID',
      description: 'The premier certification for secure data destruction, ensuring complete compliance with privacy regulations.',
      color: 'from-java to-fountain-blue',
      iconColor: 'text-java',
      bgGradient: 'from-java/10 to-fountain-blue/10',
      features: ['Secure Data Destruction', 'NIST Compliance', 'Audit Trail', 'Privacy Protection']
    },
    {
      icon: Target,
      title: 'ISO Standards',
      subtitle: 'Quality Management',
      description: 'International standards for quality management, environmental management, and information security.',
      color: 'from-tradewind to-bermuda',
      iconColor: 'text-tradewind',
      bgGradient: 'from-tradewind/10 to-bermuda/10',
      features: ['ISO 9001 Quality', 'ISO 14001 Environmental', 'ISO 27001 Security', 'Continuous Improvement']
    }
  ];

  const complianceCommitments = [
    {
      icon: Lock,
      title: 'Data Protection',
      description: 'Following NIST 800-88 and DoD standards',
      color: 'text-curious-blue'
    },
    {
      icon: Leaf,
      title: 'Environmental',
      description: 'EPA and Michigan DEQ compliance',
      color: 'text-mountain-meadow'
    },
    {
      icon: Shield,
      title: 'Industry Standards',
      description: 'Adhering to all ITAD best practices',
      color: 'text-java'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Improvement',
      description: 'Preparing for full certification',
      color: 'text-tradewind'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-jagged-ice relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-gradient-to-br from-curious-blue/20 to-mountain-meadow/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-[450px] h-[450px] bg-gradient-to-br from-java/20 to-tradewind/20 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-curious-blue/15 to-mountain-meadow/15 backdrop-blur-xl border-2 border-curious-blue/40 px-8 py-3.5 rounded-full mb-10 shadow-xl">
            <Clock className="w-6 h-6 text-curious-blue" />
            <span className="text-curious-blue font-bold text-base">In Progress</span>
            <Shield className="w-6 h-6 text-mountain-meadow" />
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Certifications & Compliance
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-10 leading-relaxed">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-curious-blue via-mountain-meadow to-java font-bold">
              Committed to Responsible and Secure Recycling Practices
            </span>
          </p>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white/95 backdrop-blur-xl border-2 border-gray-200/60 rounded-3xl shadow-2xl p-10">
              <p className="text-xl text-gray-700 leading-relaxed">
                We are actively working toward obtaining the following certifications in the near future: <span className="font-semibold text-gray-900">R2 / R2v3 (Responsible Recycling), e-Stewards, NAID AAA (i-SIGMA / NAID), and ISO Standards</span>. In the meantime, we ensure compliance by following all relevant rules and regulations associated with these standards.
              </p>
            </div>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className={`relative bg-gradient-to-br ${cert.bgGradient} backdrop-blur-xl border-2 border-white/40 rounded-3xl p-8 shadow-xl`}
            >
              {/* Status Badge */}
              <div className="absolute top-4 right-4">
                <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-gray-300 shadow-md">
                  <span className="text-xs font-bold text-gray-700">Pursuing</span>
                </div>
              </div>

              <div className="relative z-10">
                <div className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${cert.color} shadow-2xl mb-6`}>
                  <cert.icon className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-sm font-semibold text-gray-600 mb-4">{cert.subtitle}</p>
                <p className="text-gray-700 leading-relaxed mb-6 text-base">{cert.description}</p>

                {/* Features */}
                <div className="space-y-3">
                  {cert.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className={`w-4 h-4 ${cert.iconColor} flex-shrink-0`} />
                      <span className="text-gray-600 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Current Compliance Commitments */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 bg-mountain-meadow/15 px-7 py-3.5 rounded-full mb-8 border-2 border-mountain-meadow/40 shadow-lg">
              <Shield className="w-6 h-6 text-mountain-meadow" />
              <span className="text-mountain-meadow font-bold text-base">Current Compliance</span>
            </div>

            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Commitment Today
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              While pursuing full certification, we already follow the strict standards and best practices of these industry-leading frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceCommitments.map((commitment, index) => (
              <div
                key={commitment.title}
                className="bg-white rounded-2xl p-8 text-center shadow-xl border-2 border-gray-200"
              >
                <div className="inline-flex p-4 rounded-full bg-gray-100 mb-6 shadow-md">
                  <commitment.icon className={`w-8 h-8 ${commitment.color}`} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{commitment.title}</h4>
                <p className="text-gray-600 text-base leading-relaxed">{commitment.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-curious-blue via-mountain-meadow to-java rounded-3xl p-16 md:p-20 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center space-x-3 bg-white/25 backdrop-blur-sm px-7 py-3.5 rounded-full mb-8 border-2 border-white/30 shadow-lg">
                <Award className="w-6 h-6" />
                <span className="font-bold text-base">Excellence in Progress</span>
              </div>

              <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Your Security Doesn't Wait for Certification
              </h3>
              <p className="text-2xl mb-12 opacity-95 max-w-3xl mx-auto leading-relaxed">
                We're committed to achieving full certification while maintaining the highest standards today. Your assets are protected by the same rigorous processes these certifications demand.
              </p>

              <a
                href="#contact"
                className="inline-flex items-center space-x-4 bg-white text-curious-blue px-12 py-6 rounded-full font-bold text-xl hover:bg-gray-50 transition-colors shadow-2xl"
              >
                <Shield className="w-7 h-7" />
                <span>Learn About Our Standards</span>
                <ArrowRight className="w-7 h-7" />
              </a>
            </div>

            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full transform translate-x-1/2 -translate-y-1/2 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full transform -translate-x-1/2 translate-y-1/2 blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsCompliance;
