import React from 'react';
import { Lock, Recycle, TrendingUp } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const MissionStatement: React.FC = () => {
  const missionAnimation = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-emerald-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={missionAnimation.ref}
          className={`transition-all duration-1000 ${
            missionAnimation.isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-curious-blue/10 to-mountain-meadow/10 px-5 py-2.5 rounded-full mb-6 border border-curious-blue/30">
              <div className="w-2.5 h-2.5 bg-gradient-to-r from-curious-blue to-java rounded-full" />
              <span className="font-bold text-curious-blue tracking-wide text-sm uppercase">OUR MISSION</span>
              <div className="w-2.5 h-2.5 bg-gradient-to-r from-mountain-meadow to-tradewind rounded-full" />
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight max-w-4xl mx-auto">
              <span className="text-curious-blue">Transforming Retired Technology</span>
              <span className="text-gray-900"> into </span>
              <span className="text-mountain-meadow">Strategic Value</span>
            </h2>

            <p className="text-base md:text-lg text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
              We deliver secure, compliant IT asset disposition solutions that protect your data,
              maximize financial recovery, and <strong>directly support your corporate ESG & Sustainability goals</strong>. Every asset, every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Lock,
                title: 'Secure Data Destruction',
                description: 'NIST 800-88 compliant data sanitization with complete audit trails',
                color: 'from-curious-blue to-java',
                bgColor: 'from-curious-blue/5 to-java/5'
              },
              {
                icon: Recycle,
                title: 'ESG & Circular Economy',
                description: 'EPA R2 certified processes ensuring zero-landfill disposal and full ESG reporting',
                color: 'from-mountain-meadow to-tradewind',
                bgColor: 'from-mountain-meadow/5 to-tradewind/5'
              },
              {
                icon: TrendingUp,
                title: 'Maximum Value Recovery',
                description: 'Strategic remarketing to unlock hidden asset value',
                color: 'from-java to-fountain-blue',
                bgColor: 'from-java/5 to-fountain-blue/5'
              }
            ].map((pillar, index) => (
              <div
                key={pillar.title}
                className={`relative flex flex-col items-center text-center p-6 md:p-8 bg-gradient-to-br ${pillar.bgColor} rounded-2xl border border-gray-200/50 hover:border-gray-300/70 transition-all duration-300 group hover:shadow-xl hover:scale-105 bg-white/80 backdrop-blur-sm`}
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <div className={`relative p-4 rounded-xl bg-gradient-to-r ${pillar.color} shadow-lg mb-5 group-hover:shadow-xl group-hover:scale-105 transition-all duration-300`}>
                  <pillar.icon className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={2.5} />
                </div>

                <h3 className="font-bold text-gray-900 text-lg md:text-xl mb-3">
                  {pillar.title}
                </h3>

                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;