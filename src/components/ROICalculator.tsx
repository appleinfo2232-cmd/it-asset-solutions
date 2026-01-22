import React, { useState } from 'react';
import { Calculator, RefreshCw, DollarSign, ArrowRight, TrendingUp } from 'lucide-react';

const ROICalculator: React.FC = () => {
  const [deviceCount, setDeviceCount] = useState(500);
  const [deviceType, setDeviceType] = useState('mixed');

  // Logic: Conservative estimates to manage expectations
  // These can be updated as market prices change
  const getValuePerUnit = (type: string) => {
    switch (type) {
      case 'laptops': return 125;  // Avg value for 3-4 yr old enterprise laptop
      case 'desktops': return 45;  // Avg value for enterprise tower
      case 'servers': return 250;  // Avg value for rack server
      default: return 95;          // Mixed lot average
    }
  };

  const estimatedValue = deviceCount * getValuePerUnit(deviceType);

  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative" aria-label="ROI Calculator">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
        <Calculator className="w-96 h-96" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Strategic Context */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-6">
              <DollarSign className="w-4 h-4" /> Value Recovery
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              Stop Paying for Disposal. <br/> <span className="text-emerald-400">Start Getting Paid.</span>
            </h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Your retired assets aren't just "e-waste"—they are a revenue stream. Use our logic tool to estimate the hidden capital sitting in your storage room right now.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-slate-300">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0"><RefreshCw className="w-3 h-3" /></div>
                <span className="text-sm">We buy Gen 8+ Laptops, Rack Servers, and Apple fleets.</span>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0"><TrendingUp className="w-3 h-3" /></div>
                <span className="text-sm">Revenue share models available to offset logistics costs.</span>
              </li>
            </ul>

            <a href="#contact" className="inline-flex items-center gap-2 text-emerald-400 font-bold hover:text-emerald-300 transition-colors">
              Request official valuation <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right: The Calculator */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl shadow-2xl">
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-emerald-400" /> 
              Quick Estimate Tool
            </h3>

            {/* Input: Device Type */}
            <div className="mb-8">
              <label className="block text-xs font-bold uppercase text-slate-400 mb-3">Equipment Type</label>
              <div className="grid grid-cols-2 gap-3">
                {['laptops', 'servers', 'desktops', 'mixed'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setDeviceType(type)}
                    className={`px-4 py-3 rounded-xl text-sm font-bold capitalize transition-all border ${
                      deviceType === type 
                      ? 'bg-emerald-600 border-emerald-500 text-white shadow-lg shadow-emerald-500/20' 
                      : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-500'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Input: Count Slider */}
            <div className="mb-10">
              <div className="flex justify-between text-xs font-bold uppercase text-slate-400 mb-4">
                <span>Quantity</span>
                <span className="text-white bg-slate-800 px-2 py-1 rounded border border-slate-600">{deviceCount} Units</span>
              </div>
              <input 
                type="range" 
                min="50" 
                max="5000" 
                step="50"
                value={deviceCount} 
                onChange={(e) => setDeviceCount(parseInt(e.target.value))}
                aria-label="Select device quantity"
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-2 font-mono">
                <span>50</span>
                <span>5,000+</span>
              </div>
            </div>

            {/* Result Box */}
            <div className="bg-gradient-to-br from-emerald-900/50 to-slate-900 border border-emerald-500/30 rounded-2xl p-6 text-center relative overflow-hidden group">
              {/* Glow Effect */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50"></div>
              
              <p className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">Estimated Return Value</p>
              <div className="text-4xl md:text-5xl font-black text-white tracking-tight mb-2">
                ${estimatedValue.toLocaleString()}
              </div>
              <p className="text-[10px] text-slate-400 max-w-xs mx-auto leading-relaxed">
                *Indicative value only. Final pricing is based on detailed audit, specs, age, and cosmetic condition.
              </p>
            </div>
            
            <div className="mt-6 text-center">
               <a href="#contact" className="text-xs font-bold text-white hover:underline decoration-emerald-500 underline-offset-4">
                 Claim this offer now &rarr;
               </a>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default ROICalculator;