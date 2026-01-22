import React, { useEffect, useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { getAllPosts, BlogPost } from '../utils/blogLoader';
import ContactLocation from '../components/ContactLocation';
import { Search, Clock, ArrowRight } from 'lucide-react';
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
        <title>Industry Insights & ITAD News | IT Asset Solutions</title>
        <meta name="description" content="Expert insights on Enterprise ITAD, Data Destruction, and ESG reporting. Stay ahead of industry trends and regulatory updates." />
        <link rel="canonical" href="https://www.itassetsolutions.com/blog" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      
      <main className="pt-32 pb-20 bg-gray-50/50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* --- HEADER --- */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
              The ITAD Journal
            </h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Strategic intelligence on data security, sustainability, and logistics.
            </p>
          </div>

          {/* --- SEARCH & FILTER BAR --- */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-16 sticky top-24 z-30 bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-gray-100 shadow-sm">
            
            {/* Category Pills */}
            <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-all ${
                    activeCategory === cat 
                    ? 'bg-slate-900 text-white' 
                    : 'text-slate-500 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent outline-none transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* --- FEATURED POST (Split Layout) --- */}
          {filteredPosts.length > 0 && searchQuery === '' && activeCategory === 'All' && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-16 bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
            >
              <Link to={`/blog/${filteredPosts[0].slug}`} className="grid md:grid-cols-2">
                <div className="h-64 md:h-auto overflow-hidden">
                  <img 
                    src={filteredPosts[0].image} 
                    alt={filteredPosts[0].title}
                    loading="eager" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[#0ea5e9] text-xs font-bold uppercase tracking-wider">
                      Featured • {filteredPosts[0].category}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-[#0ea5e9] transition-colors leading-tight">
                    {filteredPosts[0].title}
                  </h2>
                  <p className="text-slate-500 text-lg mb-6 line-clamp-3 leading-relaxed">
                    {filteredPosts[0].metaDescription}
                  </p>
                  <div className="flex items-center text-sm font-semibold text-slate-900 mt-auto">
                    Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
                <Link to={`/blog/${post.slug}`} className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  
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
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-slate-800 uppercase tracking-wide">
                      {post.category}
                    </div>
                  </div>

                  {/* Text Area */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-3 font-medium">
                      {/* UPDATE: Use displayDate for UI, while logic uses date */}
                      <span>{post.displayDate}</span>
                      <span>•</span>
                      <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0ea5e9] transition-colors leading-snug">
                      {post.title}
                    </h3>
                    
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-4 flex-grow">
                      {post.metaDescription}
                    </p>
                    
                    <div className="flex items-center text-[#0ea5e9] font-bold text-sm mt-auto group-hover:underline">
                      Read More
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-slate-400 font-medium">No articles found.</p>
              <button onClick={() => {setSearchQuery(''); setActiveCategory('All')}} className="mt-4 text-[#0ea5e9] font-bold hover:underline">
                View All Posts
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