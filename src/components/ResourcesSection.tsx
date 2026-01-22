import React from 'react';
import { FileText, Newspaper, BarChart3, ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const ResourcesSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">Knowledge & Success</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Resources & Insights</h2>
          <p className="text-lg text-slate-600 mt-4">Empower your ITAD strategy with expert resources and real-world case studies.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Resource 1: Guide */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col h-full hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Secure ITAD Strategy Guide</h3>
            <p className="text-slate-600 mb-6 flex-grow">Download our comprehensive guide to building an ironclad ITAD strategy that protects your data.</p>
            <Link to="/contact" className="inline-flex items-center font-bold text-blue-600 hover:text-blue-700">
              Request Guide <Download className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Resource 2: Blog */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col h-full hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6">
              <Newspaper className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Blog & Industry Insights</h3>
            <p className="text-slate-600 mb-6 flex-grow">Stay informed with the latest trends, best practices, and expert advice on IT asset management.</p>
            <Link to="/blog" className="inline-flex items-center font-bold text-purple-600 hover:text-purple-700">
              Read Latest Articles <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Resource 3: Case Studies */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col h-full hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Real-World Success Stories</h3>
            {/* UPDATED: "compliant" -> "standards-aligned" for legal safety */}
            <p className="text-slate-600 mb-6 flex-grow">Explore how we've helped businesses achieve secure, standards-aligned, and profitable asset disposition.</p>
            <Link to="/contact" className="inline-flex items-center font-bold text-emerald-600 hover:text-emerald-700">
              Request Case Studies <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;