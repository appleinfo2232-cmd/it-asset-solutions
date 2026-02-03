import React, { useEffect, useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { getAllPosts, BlogPost } from '../utils/blogLoader';
import ContactLocation from '../components/ContactLocation';
import { Search, Clock, ArrowRight, Filter } from 'lucide-react';
import { motion } from 'framer-motion';

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // --- 1. DATA LOADING & SCHEDULING LOGIC ---
  useEffect(() => {
    getAllPosts().then((data) => {
      const now = new Date();
      
      // FIX: Filter out posts scheduled for the future
      // We use post.date (ISO format) for accurate comparison
      const publishedPosts = data.filter(post => {
        const postDate = new Date(post.date);
        return postDate <= now;
      });

      // OPTIMIZATION: Sort by date descending (Newest First)
      // We use post.date (ISO format) for accurate sorting
      const sortedPosts = publishedPosts.sort((a, b) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
      );

      setPosts(sortedPosts);
    });

    // 2026 SPEED: Use requestIdleCallback for non-critical scroll logic
    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(() => window.scrollTo(0, 0));
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  // --- 2. PERFORMANCE: MEMOIZED FILTERING ---
  const filteredPosts = useMemo(() => {
    let result = posts;

    if (activeCategory !== 'All') {
      result = result.filter(post => post.category === activeCategory);
    }

    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      result = result.filter(post => 
        post.title.toLowerCase().includes(lowerQuery) || 
        post.metaDescription.toLowerCase().includes(lowerQuery)
      );
    }

    return result;
  }, [posts, activeCategory, searchQuery]);

  // --- 3. SEO: DYNAMIC BLOG SCHEMA ---
  const structuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "headline": "The ITAD Journal & Industry Insights",
    "description": "Strategic intelligence on data security, sustainability, and logistics for enterprise IT managers.",
    "url": "https://www.itassetsolutions.com/blog",
    "provider": {
      "@type": "Organization",
      "name": "IT Asset Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.itassetsolutions.com/it-asset-solutions-new-logo.avif"
      }
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": filteredPosts.map((post, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `https://www.itassetsolutions.com/blog/${post.slug}`,
        "name": post.title
      }))
    }
  }), [filteredPosts]);

  const categories = ['All', 'Enterprise ITAD', 'Data Security', 'ESG & Sustainability', 'Industry News', 'Guides & Checklists'];

  return (
    <>
      <Helmet>
        {/* UPDATED: Brand Name + Keyword Targeting for Industry Authority */}
        <title>IT Asset Solutions Blog | ITAD Industry Insights & News</title>
        
        {/* UPDATED: Description targets singular "solution" and key topics */}
        <meta name="description" content="Read the latest from IT Asset Solutions. Expert insights on the complete IT asset solution lifecycle, data security trends, and sustainable recycling practices." />
        
        {/* UPDATED: Keywords to include competitor variations and specific topics */}
        <meta name="keywords" content="IT Asset Solutions Blog, IT Asset Solution News, ITAD Trends, Data Security Insights, Corporate Recycling Guide, ESG Reporting" />
        
        <link rel="canonical" href="https://www.itassetsolutions.com/blog" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      
      <main className="pt-32 pb-24 bg-gray-50/30 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* --- HEADER --- */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-[#0ea5e9] font-bold tracking-widest uppercase text-xs mb-3 block">
              Intelligence Briefing
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
              The ITAD Journal
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed">
              Strategic intelligence on data security, circular economy, and logistics for the modern enterprise.
            </p>
          </div>

          {/* --- SEARCH & FILTER BAR --- */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-16 sticky top-24 z-30 bg-white/80 backdrop-blur-xl p-4 rounded-2xl border border-white shadow-lg shadow-slate-200/50">
            
            {/* Category Pills */}
            <div className="flex gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 no-scrollbar items-center">
              <Filter className="w-4 h-4 text-slate-400 mr-2 flex-shrink-0" />
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all border ${
                    activeCategory === cat 
                    ? 'bg-slate-900 text-white border-slate-900' 
                    : 'bg-white text-slate-500 border-slate-200 hover:border-[#0ea5e9] hover:text-[#0ea5e9]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search intelligence..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent outline-none transition-all placeholder:text-slate-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* --- FEATURED POST (Magazine Layout) --- */}
          {filteredPosts.length > 0 && searchQuery === '' && activeCategory === 'All' && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-20"
            >
              <Link to={`/blog/${filteredPosts[0].slug}`} className="group relative block rounded-3xl overflow-hidden shadow-2xl">
                <div className="grid lg:grid-cols-2 min-h-[500px]">
                  {/* Image Side */}
                  <div className="relative overflow-hidden h-64 lg:h-auto">
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                    <img 
                      src={filteredPosts[0].image} 
                      alt={filteredPosts[0].title}
                      loading="eager" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Content Side */}
                  <div className="bg-slate-900 p-8 md:p-12 lg:p-16 flex flex-col justify-center text-white relative overflow-hidden">
                    {/* Decorative Blur */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#0ea5e9] opacity-20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-6">
                        <span className="bg-[#0ea5e9] text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                          Featured Insight
                        </span>
                        <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">
                          {filteredPosts[0].category}
                        </span>
                      </div>
                      
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight group-hover:text-[#0ea5e9] transition-colors">
                        {filteredPosts[0].title}
                      </h2>
                      
                      <p className="text-slate-300 text-lg mb-8 line-clamp-3 leading-relaxed max-w-xl">
                        {filteredPosts[0].metaDescription}
                      </p>
                      
                      <div className="flex items-center text-sm font-bold mt-auto group-hover:translate-x-2 transition-transform">
                        Read Full Briefing <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* --- STANDARD GRID (3 Columns) --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(searchQuery === '' && activeCategory === 'All' ? filteredPosts.slice(1) : filteredPosts).map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link to={`/blog/${post.slug}`} className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  
                  {/* Image Area */}
                  <div className="h-56 overflow-hidden relative border-b border-gray-50">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      loading="lazy"
                      width="400" 
                      height="225"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-slate-900 uppercase tracking-wide shadow-sm">
                      {post.category}
                    </div>
                  </div>

                  {/* Text Area */}
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 text-xs text-slate-400 mb-4 font-bold tracking-wide uppercase">
                      <span>{post.displayDate}</span>
                      <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                      <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[#0ea5e9] transition-colors leading-snug">
                      {post.title}
                    </h3>
                    
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
                      {post.metaDescription}
                    </p>
                    
                    <div className="flex items-center text-[#0ea5e9] font-bold text-sm mt-auto group-hover:underline decoration-2 underline-offset-4">
                      Read Analysis
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-32 bg-white rounded-3xl border border-dashed border-gray-200">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-300" />
              </div>
              <p className="text-xl text-slate-900 font-bold mb-2">No articles found.</p>
              <p className="text-slate-500 mb-6">Try adjusting your search or category filters.</p>
              <button onClick={() => {setSearchQuery(''); setActiveCategory('All')}} className="text-[#0ea5e9] font-bold hover:underline">
                Clear all filters
              </button>
            </div>
          )}

        </div>
      </main>
      <ContactLocation />
    </>
  );
};

export default BlogPage;