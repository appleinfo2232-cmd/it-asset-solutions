import React, { useEffect, useState, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ReactMarkdown from 'react-markdown';
import { getPostBySlug, getAllPosts, BlogPost as PostType } from '../utils/blogLoader';
import ContactLocation from '../components/ContactLocation';
import { 
  ArrowLeft, Calendar, Clock, User, Share2, 
  Linkedin, Twitter, Facebook, CheckCircle, ArrowRight, Minus 
} from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<PostType | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<PostType[]>([]);
  
  // Progress Bar Hook
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // --- 1. DATA LOADING ---
  useEffect(() => {
    if (slug) {
      getPostBySlug(slug).then((data) => {
        const now = new Date();
        // Security check
        if (!data || new Date(data.date) > now) {
          navigate('/blog');
          return;
        }
        setPost(data);

        // Load Related Posts
        getAllPosts().then(allPosts => {
          const others = allPosts
            .filter(p => p.slug !== data.slug && p.category === data.category && new Date(p.date) <= now)
            .slice(0, 2);
          setRelatedPosts(others);
        });
      });
    }
    // Reset scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug, navigate]);

  // --- 2. SEO & SCHEMA ---
  const schemaData = useMemo(() => {
    if (!post) return null;
    return {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.seoTitle || post.title,
      "description": post.metaDescription,
      "image": [`https://www.itassetsolutions.com${post.image}`],
      "datePublished": new Date(post.date).toISOString(),
      "author": { "@type": "Organization", "name": post.author },
      "publisher": {
         "@type": "Organization",
         "name": "IT Asset Solutions",
         "logo": { "@type": "ImageObject", "url": "https://www.itassetsolutions.com/it-asset-solutions-new-logo.avif" }
      }
    };
  }, [post]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: post?.title, url: window.location.href }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard.');
    }
  };

  if (!post) return <div className="min-h-screen flex items-center justify-center bg-gray-50">Loading briefing...</div>;

  return (
    <>
      <Helmet>
        <title>{post.seoTitle || post.title} | IT Asset Solutions</title>
        <meta name="description" content={post.metaDescription} />
        <link rel="canonical" href={`https://www.itassetsolutions.com/blog/${post.slug}`} />
        {schemaData && <script type="application/ld+json">{JSON.stringify(schemaData)}</script>}
      </Helmet>

      {/* READING PROGRESS BAR */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-[#0ea5e9] origin-left z-50"
        style={{ scaleX }}
      />

      <main className="pt-32 pb-24 bg-white min-h-screen font-sans">
        
        {/* --- ARTICLE HEADER --- */}
        <div className="max-w-3xl mx-auto px-6 lg:px-8 mb-12 text-center">
          
          <Link to="/blog" className="inline-flex items-center text-slate-500 hover:text-[#0ea5e9] mb-8 text-sm font-semibold tracking-wide uppercase transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Intelligence
          </Link>

          <div className="mb-6 flex justify-center">
            <span className="bg-slate-100 text-slate-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-slate-200">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-8 leading-tight tracking-tight">
            {post.title}
          </h1>

          {/* Premium Author Byline */}
          <div className="flex items-center justify-center gap-6 text-sm border-y border-gray-100 py-6">
            <div className="flex items-center gap-3">
               <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-white shadow-md">
                 <User className="w-5 h-5"/>
               </div>
               <div className="text-left">
                 <p className="font-bold text-slate-900 leading-none mb-1">{post.author}</p>
                 <p className="text-slate-500 text-xs uppercase tracking-wide">Editorial Team</p>
               </div>
            </div>
            <div className="h-8 w-px bg-gray-200 hidden sm:block"></div>
            <div className="text-slate-500 font-medium flex gap-6">
               <span className="flex items-center"><Calendar className="w-4 h-4 mr-2 text-[#0ea5e9]" /> {post.displayDate}</span>
               <span className="flex items-center"><Clock className="w-4 h-4 mr-2 text-[#0ea5e9]" /> {post.readTime}</span>
            </div>
          </div>
        </div>

        {/* --- FEATURED IMAGE (Wide) --- */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-16">
          <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-900/5">
            <img 
              src={post.image} 
              alt={post.imageAlt} 
              className="w-full h-auto object-cover max-h-[600px]"
              loading="eager"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* --- LEFT SIDEBAR (Sticky Socials - Desktop) --- */}
          <div className="hidden lg:block lg:col-span-2 relative">
             <div className="sticky top-32 flex flex-col gap-4 items-center">
               <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 rotate-180 text-vertical-lr py-4">Share Article</p>
               <button onClick={handleShare} className="p-3 rounded-full bg-white text-slate-600 border border-slate-100 hover:border-[#0ea5e9] hover:text-[#0ea5e9] transition-all shadow-sm"><Share2 className="w-5 h-5" /></button>
               <button className="p-3 rounded-full bg-white text-slate-600 border border-slate-100 hover:border-[#0077b5] hover:text-[#0077b5] transition-all shadow-sm"><Linkedin className="w-5 h-5" /></button>
               <button className="p-3 rounded-full bg-white text-slate-600 border border-slate-100 hover:border-black hover:text-black transition-all shadow-sm"><Twitter className="w-5 h-5" /></button>
            </div>
          </div>

          {/* --- MAIN CONTENT COLUMN --- */}
          <article className="lg:col-span-8">
            
            {/* EXECUTIVE SUMMARY (Magazine Style) */}
            {post.aiSummary && (
              <div className="mb-12 bg-slate-50 border-l-4 border-[#0ea5e9] p-8 rounded-r-xl shadow-sm">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4 flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-[#0ea5e9]" /> Executive Summary
                </h3>
                <p className="text-slate-800 text-lg md:text-xl font-serif italic leading-relaxed">
                  "{post.aiSummary}"
                </p>
              </div>
            )}

            {/* MARKDOWN CONTENT - STYLED WITH PROSE */}
            <div className="prose prose-lg md:prose-xl max-w-none text-slate-600 
              prose-headings:font-bold prose-headings:text-slate-900 prose-headings:tracking-tight 
              prose-p:leading-8 prose-p:mb-8 
              prose-a:text-[#0ea5e9] prose-a:font-bold prose-a:no-underline hover:prose-a:underline
              prose-strong:text-slate-900 prose-strong:font-extrabold
              prose-blockquote:border-l-4 prose-blockquote:border-slate-900 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-slate-800 prose-blockquote:bg-white
              prose-img:rounded-xl prose-img:shadow-lg prose-img:my-12 prose-img:w-full
              prose-li:marker:text-[#0ea5e9]"
            >
               <ReactMarkdown 
                 components={{
                   // Custom Divider for '---' in markdown
                   hr: () => <div className="flex items-center justify-center my-12"><div className="h-px bg-slate-200 w-full max-w-xs"></div><div className="mx-4 text-slate-300"><Minus className="w-4 h-4"/></div><div className="h-px bg-slate-200 w-full max-w-xs"></div></div>,
                   // Custom Blockquote styling
                   blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-[#0ea5e9] pl-6 italic text-slate-700 my-8 bg-slate-50 py-4 pr-4 rounded-r-lg" {...props} />,
                   // Custom Link styling
                   a: ({node, ...props}) => <a className="text-[#0ea5e9] font-bold no-underline hover:underline transition-all" {...props} />,
                   // Custom Image styling
                   img: ({node, ...props}) => <img className="rounded-xl shadow-lg my-10 w-full" loading="lazy" {...props} />
                 }}
               >
                 {post.body}
               </ReactMarkdown>
            </div>

            {/* MOBILE SHARE BAR */}
            <div className="mt-12 lg:hidden flex items-center justify-between border-t border-gray-100 pt-8">
               <span className="font-bold text-slate-900">Share this insight:</span>
               <div className="flex gap-2">
                 <button onClick={handleShare} className="p-2 bg-slate-100 rounded-full"><Share2 className="w-5 h-5" /></button>
               </div>
            </div>

          </article>

          {/* --- RIGHT SIDEBAR (Spacer) --- */}
          <div className="hidden lg:block lg:col-span-2"></div>
        </div>

        {/* --- BOTTOM CTA (High End) --- */}
        <div className="max-w-4xl mx-auto px-6 mt-24">
          <div className="bg-slate-900 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
            {/* Decorative background blur */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0ea5e9] opacity-20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">
              Is your data truly secure?
            </h3>
            <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed relative z-10">
              Join the leading Michigan enterprises that trust IT Asset Solutions for secure, compliant, and sustainable value recovery.
            </p>
            <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center justify-center bg-[#0ea5e9] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#0284c7] transition-all hover:scale-105 shadow-lg shadow-blue-500/30">
                Request Service
              </Link>
              <Link to="/services" className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-xl hover:bg-white/20 transition-all border border-white/10">
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>

        {/* --- RELATED READS --- */}
        {relatedPosts.length > 0 && (
          <div className="max-w-7xl mx-auto px-6 mt-24 pt-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 tracking-tight">Relevant Intelligence</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map(rp => (
                <Link key={rp.slug} to={`/blog/${rp.slug}`} className="group flex gap-6 items-start hover:bg-slate-50 p-4 rounded-2xl transition-all">
                  <div className="w-32 h-24 shrink-0 overflow-hidden rounded-lg bg-gray-100 shadow-sm">
                    <img src={rp.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#0ea5e9] uppercase mb-1 block">{rp.category}</span>
                    <h4 className="text-lg font-bold text-slate-900 group-hover:text-[#0ea5e9] transition-colors leading-snug mb-2">
                      {rp.title}
                    </h4>
                    <span className="text-sm text-slate-500 font-medium flex items-center">
                      Read Analysis <ArrowRight className="w-3 h-3 ml-2" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </main>
      <ContactLocation />
    </>
  );
};

export default BlogPost;