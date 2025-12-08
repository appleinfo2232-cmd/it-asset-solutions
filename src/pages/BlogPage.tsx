import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { getAllPosts, BlogPost } from '../utils/blogLoader';
import ContactLocation from '../components/ContactLocation';
import { Search, Clock, ArrowUpRight, Tag } from 'lucide-react';
import { motion } from 'framer-motion';

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    getAllPosts().then((data) => {
      setPosts(data);
      setFilteredPosts(data);
    });
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let result = posts;
    
    // Filter by Category
    if (activeCategory !== 'All') {
      result = result.filter(post => post.category === activeCategory);
    }
    
    // Filter by Search (Title or Description)
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      result = result.filter(post => 
        post.title.toLowerCase().includes(lowerQuery) || 
        post.metaDescription.toLowerCase().includes(lowerQuery)
      );
    }
    setFilteredPosts(result);
  }, [activeCategory, searchQuery, posts]);

  // Categories matching your Admin Panel
  const categories = ['All', 'Enterprise ITAD', 'Data Security', 'ESG & Sustainability', 'Industry News', 'Guides & Checklists'];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <>
      <Helmet>
        <title>Industry Insights & ITAD News | IT Asset Solutions</title>
        <meta name="description" content="Expert insights on Enterprise ITAD, Data Destruction, and ESG compliance. Stay ahead with the latest industry news." />
      </Helmet>
      
      <main className="pt-32 pb-20 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5e9] to-[#22c55e]">ITAD Journal</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Strategic intelligence for IT leaders. We break down the complexities of data security, sustainability, and logistics.
            </p>

            {/* Modern Search & Filter Bar */}
            <div className="max-w-4xl mx-auto bg-white p-2 rounded-full shadow-lg border border-gray-100 flex flex-col md:flex-row items-center gap-2">
              <div className="relative flex-grow w-full md:w-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search topic..."
                  className="w-full pl-12 pr-4 py-3 rounded-full bg-transparent outline-none text-slate-700 placeholder-gray-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto px-2 no-scrollbar">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 ${
                      activeCategory === cat 
                      ? 'bg-slate-900 text-white shadow-md' 
                      : 'bg-gray-100 text-slate-600 hover:bg-gray-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* --- THE STUNNING GRID --- */}
          {filteredPosts.length > 0 && (
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 auto-rows-[400px]"
            >
              
              {/* 1. HERO POST (Spans 4 cols on Desktop) */}
              {filteredPosts[0] && (
                <motion.div variants={itemVariants} className="lg:col-span-4 md:col-span-2 row-span-1 md:row-span-1 lg:row-span-1 relative group overflow-hidden rounded-3xl shadow-lg cursor-pointer">
                  <Link to={`/blog/${filteredPosts[0].slug}`} className="block h-full w-full">
                    <div className="absolute inset-0">
                      <img 
                        src={filteredPosts[0].image} 
                        alt={filteredPosts[0].title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                    </div>
                    <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="bg-[#0ea5e9] text-white px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">
                          Featured
                        </span>
                        <span className="text-gray-300 text-sm font-medium flex items-center">
                          <Clock className="w-4 h-4 mr-1" /> {filteredPosts[0].readTime}
                        </span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight group-hover:underline decoration-2 underline-offset-4 decoration-[#0ea5e9]">
                        {filteredPosts[0].title}
                      </h2>
                      <p className="text-gray-200 text-lg line-clamp-2 max-w-2xl">
                        {filteredPosts[0].metaDescription}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              )}

              {/* 2. SECOND POST (Vertical Card) */}
              {filteredPosts[1] && (
                <motion.div variants={itemVariants} className="lg:col-span-2 md:col-span-1 relative group overflow-hidden rounded-3xl shadow-lg bg-white border border-gray-100 cursor-pointer">
                  <Link to={`/blog/${filteredPosts[1].slug}`} className="flex flex-col h-full">
                    <div className="h-1/2 overflow-hidden relative">
                       <img 
                        src={filteredPosts[1].image} 
                        alt={filteredPosts[1].title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-900">
                        {filteredPosts[1].category}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col justify-between h-1/2">
                      <div>
                        <div className="text-xs font-bold text-[#0ea5e9] mb-2">{filteredPosts[1].date}</div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-[#0ea5e9] transition-colors line-clamp-3">
                          {filteredPosts[1].title}
                        </h3>
                      </div>
                      <div className="flex items-center text-sm font-semibold text-slate-500 group-hover:text-slate-900 transition-colors">
                        Read Article <ArrowUpRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )}

              {/* 3. STANDARD GRID (Remaining Posts) */}
              {filteredPosts.slice(2).map((post) => (
                <motion.div 
                  variants={itemVariants}
                  key={post.slug} 
                  className="lg:col-span-2 md:col-span-1 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-[400px] group cursor-pointer"
                >
                  <Link to={`/blog/${post.slug}`} className="flex flex-col h-full">
                    <div className="h-48 overflow-hidden relative shrink-0">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-white flex items-center">
                        <Tag className="w-3 h-3 mr-1" /> {post.category}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 text-xs text-gray-400 mb-3 font-medium">
                        <span>{post.date}</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#0ea5e9] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-slate-500 text-sm line-clamp-3">
                        {post.metaDescription}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}

            </motion.div>
          )}
          
          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
              <p className="text-xl text-gray-400 font-medium">No articles found matching "{searchQuery}"</p>
              <button onClick={() => {setSearchQuery(''); setActiveCategory('All')}} className="mt-4 text-[#0ea5e9] font-bold hover:underline">
                Clear Filters
              </button>
            </div>
          )}

          {/* CTA Banner */}
          <div className="mt-20 relative rounded-3xl overflow-hidden bg-slate-900 px-6 py-16 text-center shadow-2xl">
            <div className="relative z-10">
               <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Stay Ahead of ITAD Trends</h2>
               <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
                 Join 1,200+ IT leaders receiving our monthly insights on security, compliance, and sustainability.
               </p>
               <div className="flex justify-center gap-4">
                 <Link to="/contact" className="bg-[#0ea5e9] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#0284c7] transition-all transform hover:scale-105">
                   Get Industry Alerts
                 </Link>
               </div>
            </div>
          </div>

        </div>
      </main>
      <ContactLocation />
    </>
  );
};

export default BlogPage;