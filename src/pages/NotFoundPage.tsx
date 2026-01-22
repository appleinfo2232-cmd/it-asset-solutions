import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FileQuestion, Home, ArrowRight } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | IT Asset Solutions</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 px-4">
        <div className="text-center max-w-lg">
          <div className="bg-white p-4 rounded-full shadow-lg inline-flex mb-8">
            <FileQuestion className="w-12 h-12 text-slate-400" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 font-grotesk">
            404
          </h1>
          
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            Page Not Found
          </h2>
          
          <p className="text-slate-600 mb-8 text-lg">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/" 
              className="inline-flex items-center justify-center px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors font-bold"
            >
              <Home className="w-4 h-4 mr-2" /> Back Home
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors font-bold"
            >
              Contact Support <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;