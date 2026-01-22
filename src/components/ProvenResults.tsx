import React from 'react';
import { DollarSign, CheckCircle, Shield, Zap, Award } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ProvenResults: React.FC = () => {
  const resultsAnimation = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={resultsAnimation.ref}
          className={`text-center transition-all duration-1000 ${
            resultsAnimation.isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-mountain-meadow/10 to-java/10 px-5 py-2.5 rounded-full mb-6 border border-mountain-meadow/30">
            <div className="w-2.5 h-2.5 bg-gradient-to-r from-mountain-meadow to-java rounded-full" />
            <span className="font-bold text-mountain-meadow tracking-wide text-sm uppercase">PROVEN RESULTS</span>
            <Award className="w-4 h-4 text-mountain-meadow" />
          </div>

          <div className="mb-10">
            <div className="text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-curious-blue via-mountain-meadow to-java mb-4">
              675+
            </div>
            <div className="text-2xl md:text-3xl font-black text-gray-900 mb-3">Enterprise Clients Served</div>
            <div className="text-base md:text-lg text-gray-600 font-semibold">Delivering Secure ITAD Solutions Since 2010</div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto mb-10">
            {[
              {
                icon: DollarSign,
                value: '$12.5M+',
                label: 'Value Recovered',
                color: 'curious-blue',
                bgGradient: 'from-curious-blue/10 to-java/10',
                iconGradient: 'from-curious-blue to-java'
              },
              {
                icon: CheckCircle,
                value: '100%',
                label: 'Compliance Success',
                color: 'mountain-meadow',
                bgGradient: 'from-mountain-meadow/10 to-tradewind/10',
                iconGradient: 'from-mountain-meadow to-tradewind'
              },
              {
                icon: Shield,
                value: 'Zero',
                label: 'Data Breaches',
                color: 'java',
                bgGradient: 'from-java/10 to-fountain-blue/10',
                iconGradient: 'from-java to-fountain-blue'
              },
              {
                icon: Zap,
                value: '7-Day',
                label: 'Service Window',
                color: 'tradewind',
                bgGradient: 'from-tradewind/10 to-bermuda/10',
                iconGradient: 'from-tradewind to-bermuda'
              }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className={`relative bg-gradient-to-br ${stat.bgGradient} rounded-2xl p-6 md:p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300 group hover:shadow-xl hover:scale-105`}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="flex items-center justify-center mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.iconGradient} shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300`}>
                    <stat.icon className="w-7 h-7 md:w-8 md:h-8 text-white" strokeWidth={2.5} />
                  </div>
                </div>

                <div className={`text-3xl md:text-4xl font-black text-${stat.color} mb-2 group-hover:scale-105 transition-transform duration-300`}>
                  {stat.value}
                </div>

                <div className="text-sm md:text-base font-bold text-gray-700 leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Join hundreds of enterprises who trust us to protect their data, recover maximum value,
              and ensure environmental compliance throughout the IT asset lifecycle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProvenResults;
