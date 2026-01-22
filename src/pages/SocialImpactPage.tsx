import React, { useEffect } from 'react';

const SocialImpactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative py-24 px-4 bg-blue-900 text-white"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=2070")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-blue-900/80"></div>
        
        <div className="relative container mx-auto max-w-4xl text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Bridging the <span className="text-blue-300">Digital Divide</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 font-light max-w-2xl mx-auto">
            Technology is a right, not a privilege. We turn corporate surplus into community access.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose lg:prose-xl mx-auto text-slate-700">
          <p className="mb-8 text-lg leading-relaxed">
            Our mission extends beyond the data center. By refurbishing high-quality enterprise technology, 
            IT Asset Solutions plays a critical role in making digital tools affordable for the rest of the world. 
            When you choose to remarket your assets with us, you aren't just recovering value—you are fueling 
            global education and economic growth.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-4">
            How We Make a Difference
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-slate-50 p-8 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Access for Education</h3>
              <p className="text-slate-600">
                We channel retired corporate laptops and desktops into secondary markets that serve schools, 
                universities, and training centers in developing regions. High-performance enterprise hardware 
                gives students the computing power they need to learn coding, design, and modern skills.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Empowering Entrepreneurs</h3>
              <p className="text-slate-600">
                By lowering the cost of entry for enterprise-grade hardware, we help small businesses and startups 
                globally access the technology they need to grow. Affordable technology creates jobs and stabilizes 
                local economies.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg border border-slate-200 shadow-sm md:col-span-2 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Resource Conservation</h3>
              <p className="text-slate-600">
                Every device we refurbish is one less device that needs to be manufactured. By extending the life 
                of existing products, we preserve global resources (like gold, copper, and rare earth elements) 
                for future generations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialImpactPage;