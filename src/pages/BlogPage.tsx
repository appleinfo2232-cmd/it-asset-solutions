import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { getAllPosts, BlogPost } from '../utils/blogLoader';
import ContactLocation from '../components/ContactLocation';
import { Search, Clock, ChevronRight, Tag } from 'lucide-react';

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

  // Filter Logic
  useEffect(() => {
    let result = posts;
    if (activeCategory !== 'All') {
      result = result.filter(post => post.category === activeCategory);
    }
    if (searchQuery) {
      result = result.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        post.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    setFilteredPosts(result);
  }, [activeCategory, searchQuery, posts]);

  const categories = ['All', 'Industry News', 'Data Security', 'ESG & Sustainability', 'Guides'];

  return (
    <>
      <Helmet>
        <title>Industry Insights & ITAD News | IT Asset Solutions</title>
        <meta name="description" content="Expert insights on Enterprise ITAD, Data Destruction, and ESG compliance. Stay ahead with the latest industry news." />
      </Helmet>
      
      <main className="pt-32 pb-20 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header & Search */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5e9] to-[#22c55e]">Insights</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
              Strategic guides and news for IT decision-makers navigating the complexities of asset disposition.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-lg mx-auto mb-10">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-200 shadow-sm focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent outline-none transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                    activeCategory === cat 
                    ? 'bg-[#0ea5e9] text-white shadow-lg shadow-blue-500/20' 
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Post (First item in filtered list) */}
          {filteredPosts.length > 0 && searchQuery === '' && activeCategory === 'All' && (
            <Link to={`/blog/${filteredPosts[0].slug}`} className="block mb-16 group relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="grid md:grid-cols-2">
                <div className="h-64 md:h-auto overflow-hidden">
                  <img 
                    src={filteredPosts[0].image} 
                    alt={filteredPosts[0].title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="bg-white p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase tracking-wider">
                      Featured
                    </span>
                    <span className="flex items-center text-gray-400 text-sm">
                      <Clock className="w-4 h-4 mr-1" /> {filteredPosts[0].readTime}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-[#0ea5e9] transition-colors">
                    {filteredPosts[0].title}
                  </h2>
                  <p className="text-slate-600 mb-6 line-clamp-3 text-lg">
                    {filteredPosts[0].description}
                  </p>
                  <span className="inline-flex items-center font-bold text-[#0ea5e9] group-hover:translate-x-2 transition-transform">
                    Read Article <ChevronRight className="w-5 h-5 ml-1" />
                  </span>
                </div>
              </div>
            </Link>
          )}

          {/* Standard Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {(searchQuery === '' && activeCategory === 'All' ? filteredPosts.slice(1) : filteredPosts).map((post) => (
              <Link to={`/blog/${post.slug}`} key={post.slug} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold text-slate-800 flex items-center">
                    <Tag className="w-3 h-3 mr-1 text-[#0ea5e9]" /> {post.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-3 font-medium">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0ea5e9] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-3 flex-grow">
                    {post.description}
                  </p>
                  <div className="flex items-center mt-auto pt-4 border-t border-gray-50">
                     {post.authorImage && <img src={post.authorImage} alt={post.author} className="w-8 h-8 rounded-full mr-3" />}
                     <span className="text-sm font-bold text-slate-700">{post.author}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500">No articles found matching your criteria.</p>
              <button onClick={() => {setSearchQuery(''); setActiveCategory('All')}} className="mt-4 text-[#0ea5e9] font-bold">Clear Filters</button>
            </div>
          )}

        </div>
      </main>
      <ContactLocation />
    </>
  );
};

export default BlogPage;