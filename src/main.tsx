import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Added Router
import { HelmetProvider } from 'react-helmet-async'; // Added SEO Provider
import 'lazysizes';
import 'lazysizes/plugins/attrchange/ls.attrchange';
import App from './App.tsx';
import { initEmailJS } from './utils/emailService';
import './index.css';

// 1. Removed manual 'preloadCriticalResources' to fix "Preloaded but not used" warnings.
// (The browser handles this better via index.html)

// Configure lazysizes
const configureLazySizes = () => {
  // @ts-ignore
  window.lazySizesConfig = window.lazySizesConfig || {};
  // @ts-ignore
  window.lazySizesConfig.loadMode = 1; // Load immediately when they enter the viewport
  // @ts-ignore
  window.lazySizesConfig.expFactor = 1.5; // Load a bit before they enter the viewport (1.5x)
};

configureLazySizes();

// Initialize EmailJS
try {
  console.log('Initializing EmailJS...');
  initEmailJS();
  console.log('EmailJS initialized successfully');
} catch (error) {
  console.error('Failed to initialize EmailJS:', error);
}

// Error boundary with Types
class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (  
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">Please refresh the page to try again.</p>
            <button 
              onClick={() => window.location.reload()} 
              className="bg-[#0ea5e9] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#16c77d] transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <HelmetProvider>
        {/* 2. Added Router with Future Flags to fix Console Warnings */}
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
  </React.StrictMode>
);