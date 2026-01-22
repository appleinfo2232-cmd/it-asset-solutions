import React, { useEffect } from 'react';

const SustainabilityPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with Background Image */}
      <div 
        className="relative py-24 px-4 bg-slate-900 text-white"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-black/70"></div>
        
        {/* Hero Content */}
        <div className="relative container mx-auto max-w-4xl text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Zero-Landfill. <br/><span className="text-green-400">Zero Compromise.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-light max-w-2xl mx-auto">
            We don't just minimize waste; we eliminate it. Our commitment to the Circular Economy drives every decision we make.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose lg:prose-xl mx-auto text-slate-700">
          <p className="mb-8 text-lg leading-relaxed">
            At IT Asset Solutions, sustainability is the foundation of our logistics and processing operations. 
            We view every retired asset not as "waste," but as a resource waiting to be recovered. In an era where 
            corporate responsibility is scrutinized more than ever, we provide the verifiable environmental 
            compliance that modern enterprises demand.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b pb-4">
            Our Core Environmental Commitments
          </h2>
          
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-1/4 font-bold text-green-700 uppercase tracking-wide">
                Zero-Landfill Policy
              </div>
              <div className="md:w-3/4">
                <p>
                  We adhere to a rigid no-landfill policy for all electronic waste. 100% of the equipment entering 
                  our facility is either refurbished for reuse or processed for raw material recovery. We divert 
                  toxic e-waste from landfills, protecting our soil and groundwater from hazardous contaminants.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-1/4 font-bold text-green-700 uppercase tracking-wide">
                The Circular Economy
              </div>
              <div className="md:w-3/4">
                <p>
                  Reuse is the highest form of recycling. By rigorously testing and repairing servers, storage, 
                  and networking gear, we extend the lifecycle of technology. This prevents the need for new 
                  manufacturing, significantly reducing the massive carbon footprint associated with producing new IT hardware.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-1/4 font-bold text-green-700 uppercase tracking-wide">
                Downstream Accountability
              </div>
              <div className="md:w-3/4">
                <p>
                  Our responsibility doesn't end when the truck leaves our dock. For assets that cannot be resold, 
                  we utilize audited downstream partners to ensure that hazardous materials (like lithium batteries 
                  and circuit boards) are refined safely. We maintain full transparency throughout the recycling chain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityPage;