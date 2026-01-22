import React, { useEffect } from 'react';

const CulturePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative py-24 px-4 bg-slate-800 text-white"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-slate-900/80"></div>

        <div className="relative container mx-auto max-w-4xl text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Built on Respect. <span className="text-blue-400">Driven by Merit.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 font-light max-w-2xl mx-auto">
            A safe, inclusive, and structured environment where professionalism thrives.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-16">
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            At IT Asset Solutions, we believe that operational excellence starts with a respected and well-supported team. 
            We are building a world-class workforce to solve the complex challenges of global logistics and data security.
          </p>
        </div>

        <div className="space-y-16">
          
          {/* Section 1 */}
          <section className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3">
              <h2 className="text-3xl font-bold text-blue-700">Diversity, Equity, & Inclusion</h2>
            </div>
            <div className="md:w-2/3 text-slate-700">
              <p className="mb-4">
                We champion a culture of respect and meritocracy. As a global ITAD provider, we believe that a diverse 
                workforce strengthens our ability to solve complex logistics challenges.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Equal Opportunity:</strong> We hire based on skill, dedication, and potential, regardless of background.</li>
                <li><strong>Inclusive Workplace:</strong> We foster an environment where every voice is heard, from the warehouse floor to the executive office.</li>
              </ul>
            </div>
          </section>

          <hr className="border-slate-200" />

          {/* Section 2 */}
          <section className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3">
              <h2 className="text-3xl font-bold text-blue-700">Career Growth & Learning</h2>
            </div>
            <div className="md:w-2/3 text-slate-700">
              <p className="mb-4">
                We don't just offer jobs; we offer pathways. In the fast-growing Circular Economy, we need leaders who are ready to learn.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Continuous Training:</strong> From NIST-aligned data sanitization protocols to logistics management, we invest in upskilling our team.</li>
                <li><strong>Internal Promotion:</strong> We prioritize promoting from within, giving dedicated team members the first shot at leadership roles.</li>
              </ul>
            </div>
          </section>

          <hr className="border-slate-200" />

          {/* Section 3 */}
          <section className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3">
              <h2 className="text-3xl font-bold text-blue-700">Work-Life Balance</h2>
            </div>
            <div className="md:w-2/3 text-slate-700">
              <p className="mb-4">
                We believe that a well-rested team is a safe and effective team. In an industrial environment, structure is key to peace of mind.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Safety First:</strong> We maintain rigorous standards to ensure everyone goes home safe, every single day.</li>
                <li><strong>Respect for Time:</strong> We believe in efficient, focused workdays that allow you to fully disconnect and recharge when your shift ends.</li>
              </ul>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default CulturePage;