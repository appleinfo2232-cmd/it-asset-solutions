import React, { useEffect, useState, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ReactMarkdown from 'react-markdown';
import { getPostBySlug, BlogPost as PostType } from '../utils/blogLoader';
import ContactLocation from '../components/ContactLocation';
import { ArrowLeft, Calendar, Clock, User, Share2, CheckCircle } from 'lucide-react';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<PostType | null>(null);

  useEffect(() => {
    if (slug) {
      getPostBySlug(slug).then((data) => {
        // --- SCHEDULING FIX & SECURITY CHECK ---
        const now = new Date();
        
        // 1. Check if data exists
        if (!data) {
          navigate('/blog');
          return;
        }

        // 2. Check if the post is scheduled for the future
        // Note: We use getTime() to ensure safe numeric comparison
        // We rely on 'data.date' which is now an ISO string from blogLoader
        const postDate = new Date(data.date);
        
        if (postDate > now) {
          // If the post is in the future, do not render it.
          // Redirect back to the blog index to prevent leaks.
          console.warn("Attempted access to scheduled post restricted:", data.title);
          navigate('/blog'); 
          return;
        }

        setPost(data);
      });
    }
    
    // 2026 SPEED: Use requestIdleCallback for non-critical scroll logic
    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(() => window.scrollTo(0, 0));
    } else {
      window.scrollTo(0, 0);
    }
  }, [slug, navigate]);

  // 2026 SEO: Memoize Schema to prevent unnecessary re-renders
  const schemaData = useMemo(() => {
    if (!post) return null;
    return {
      "@context": "https://schema.org",
      "@type": post.schemaType || "BlogPosting",
      "headline": post.seoTitle || post.title,
      "description": post.metaDescription,
      "image": [`https://www.itassetsolutions.com${post.image}`],
      "datePublished": new Date(post.date).toISOString(),
      "dateModified": new Date(post.date).toISOString(), // Fallback if no modified date
      "author": {
        "@type": "Organization",
        "name": post.author
      },
      "publisher": {
        "@type": "Organization",
        "name": "IT Asset Solutions",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.itassetsolutions.com/it-asset-solutions-new-logo.avif"
        }
      }
    };
  }, [post]);

  if (!post) return <div className="min-h-screen flex items-center justify-center">Loading article...</div>;

  return (
    <>
      <Helmet>
        <title>{post.seoTitle || post.title} | IT Asset Solutions</title>
        <meta name="description" content={post.metaDescription} />
        <meta name="keywords" content={post.focusKeyword} />
        
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.seoTitle || post.title} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:image" content={`https://www.itassetsolutions.com${post.image}`} />
        <meta property="article:published_time" content={new Date(post.date).toISOString()} />
        
        {/* Schema */}
        {schemaData && <script type="application/ld+json">{JSON.stringify(schemaData)}</script>}
      </Helmet>

      <main className="pt-32 pb-20 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb / Back Link */}
          <Link to="/blog" className="inline-flex items-center text-slate-500 hover:text-[#0ea5e9] mb-8 font-medium transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Insights
          </Link>
          
          {/* Category Pill */}
          <div className="mb-6">
            <span className="bg-blue-50 text-[#0ea5e9] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              {post.category}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
            {post.title}
          </h1>

          {/* Author & Meta Bar */}
          <div className="flex items-center justify-between border-b border-gray-100 pb-8 mb-8">
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center border border-slate-200">
                 <User className="w-6 h-6 text-slate-400"/>
               </div>
               <div>
                 <p className="font-bold text-slate-900">{post.author}</p>
                 <div className="flex items-center text-xs text-gray-500 gap-3">
                   {/* UPDATE: Use displayDate for UI, while logic uses date */}
                   <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {post.displayDate}</span>
                   <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {post.readTime}</span>
                 </div>
               </div>
            </div>
            
            <div className="flex items-center gap-2">
               <span className="text-xs font-bold text-slate-400 uppercase mr-2 hidden sm:block">Share:</span>
               <button className="p-2 rounded-full bg-gray-50 hover:bg-blue-50 hover:text-[#0ea5e9] transition-colors"><Share2 className="w-4 h-4" /></button>
            </div>
          </div>

          {/* Featured Image - LCP OPTIMIZED */}
          <div className="rounded-3xl overflow-hidden shadow-2xl mb-12">
            <img 
              src={post.image} 
              alt={post.imageAlt} 
              className="w-full object-cover max-h-[500px]"
              // 2026 SPEED: Critical LCP Optimization
              loading="eager"
              // @ts-ignore
              fetchPriority="high"
            />
          </div>

          {/* AI Summary Box */}
          {post.aiSummary && (
            <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 border border-blue-100 rounded-2xl p-6 mb-12">
              <h3 className="text-sm font-bold text-[#0ea5e9] uppercase tracking-wide mb-2 flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" /> Key Takeaways
              </h3>
              <p className="text-slate-700 italic text-lg leading-relaxed whitespace-pre-wrap">
                {post.aiSummary}
              </p>
            </div>
          )}

          {/* Article Body */}
          <article className="prose prose-lg max-w-none text-slate-700">
             <ReactMarkdown
               components={{
                 h2: ({node, ...props}) => <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b border-gray-100 pb-2" {...props} />,
                 h3: ({node, ...props}) => <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4" {...props} />,
                 ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-6 space-y-2 marker:text-[#0ea5e9]" {...props} />,
                 ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-6 space-y-2 marker:text-[#0ea5e9] font-bold" {...props} />,
                 li: ({node, ...props}) => <li className="pl-1 leading-7" {...props} />,
                 a: ({node, ...props}) => <a className="text-[#0ea5e9] font-bold hover:underline" {...props} />,
                 blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-[#0ea5e9] pl-4 italic bg-gray-50 p-4 rounded-r-lg my-8 text-slate-600" {...props} />,
                 p: ({node, ...props}) => <p className="mb-6 leading-8" {...props} />,
                 
                 // 2026 SPEED: Lazy load all images inside the blog post body
                 img: ({node, ...props}) => <img className="rounded-xl shadow-lg my-8 w-full" loading="lazy" {...props} />,
               }}
             >
               {post.body}
             </ReactMarkdown>
          </article>
          
          {/* Bottom CTA */}
          <div className="mt-16 border-t border-gray-100 pt-10">
            <div className="bg-gradient-to-r from-[#0ea5e9] to-[#22c55e] rounded-3xl p-10 text-white text-center shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Ready to Secure Your IT Assets?</h3>
              <p className="mb-8 text-white/90 text-lg">
                Get a free consultation for your corporate equipment today.
              </p>
              <Link to="/contact" className="inline-block bg-white text-[#0ea5e9] font-bold px-8 py-4 rounded-xl hover:shadow-xl hover:scale-105 transition-all">
                Get a Quote
              </Link>
            </div>
          </div>

        </div>
      </main>
      <ContactLocation />
    </>
  );
};

export default BlogPost;