import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ReactMarkdown from 'react-markdown';
import { getPostBySlug, BlogPost as PostType } from '../utils/blogLoader';
import ContactLocation from '../components/ContactLocation';
import { ArrowLeft, Calendar, Clock, User, Share2, Tag, CheckCircle } from 'lucide-react';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<PostType | null>(null);

  useEffect(() => {
    if (slug) {
      getPostBySlug(slug).then((data) => {
        if (!data) navigate('/blog');
        else setPost(data);
      });
    }
    window.scrollTo(0, 0);
  }, [slug, navigate]);

  if (!post) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  // --- ADVANCED 2025 SCHEMA GENERATION ---
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": post.schemaType, // TechArticle, BlogPosting, etc.
        "@id": `https://www.itassetsolutions.com/blog/${slug}/#article`,
        "headline": post.seoTitle,
        "description": post.metaDescription,
        "image": [`https://www.itassetsolutions.com${post.image}`],
        "datePublished": new Date(post.date).toISOString(),
        "dateModified": new Date(post.date).toISOString(),
        "author": {
          "@type": "Organization", // Upgrade to Person if you have specific bios
          "name": post.author
        },
        "publisher": {
          "@type": "Organization",
          "name": "IT Asset Solutions",
          "logo": { "@type": "ImageObject", "url": "https://www.itassetsolutions.com/it-asset-solutions-new-logo.webp" }
        },
        "about": {
          "@type": "Thing",
          "name": post.focusKeyword
        },
        // Google SGE "Speakable" / Summary Support
        "abstract": post.aiSummary
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.itassetsolutions.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.itassetsolutions.com/blog" },
          { "@type": "ListItem", "position": 3, "name": post.title }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        {/* --- 1. ESSENTIAL SEO --- */}
        <title>{post.seoTitle} | IT Asset Solutions</title>
        <meta name="description" content={post.metaDescription} />
        <link rel="canonical" href={post.canonicalUrl || `https://www.itassetsolutions.com/blog/${slug}`} />
        <meta name="robots" content={post.robots} />
        <meta name="keywords" content={post.focusKeyword} />

        {/* --- 2. OPEN GRAPH (FACEBOOK/LINKEDIN) --- */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.ogTitle || post.seoTitle} />
        <meta property="og:description" content={post.ogDescription || post.metaDescription} />
        <meta property="og:image" content={`https://www.itassetsolutions.com${post.ogImage || post.image}`} />
        <meta property="og:url" content={`https://www.itassetsolutions.com/blog/${slug}`} />
        <meta property="article:published_time" content={new Date(post.date).toISOString()} />
        <meta property="article:section" content={post.category} />

        {/* --- 3. TWITTER CARDS --- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.seoTitle} />
        <meta name="twitter:description" content={post.metaDescription} />
        <meta name="twitter:image" content={`https://www.itassetsolutions.com${post.image}`} />

        {/* --- 4. STRUCTURED DATA --- */}
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <main className="pt-32 pb-20 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Nav */}
          <Link to="/blog" className="inline-flex items-center text-slate-500 hover:text-[#0ea5e9] mb-8 font-medium transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Insights
          </Link>

          {/* Category Pill */}
          <div className="mb-6">
            <span className="bg-blue-50 text-[#0ea5e9] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              {post.category}
            </span>
          </div>

          {/* H1 Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
            {post.title}
          </h1>
          
          {/* Subtitle (Hook) */}
          {post.subtitle && (
            <p className="text-xl text-slate-600 mb-8 leading-relaxed font-light">
              {post.subtitle}
            </p>
          )}

          {/* Author & Meta Bar */}
          <div className="flex flex-wrap items-center justify-between border-t border-b border-gray-100 py-6 mb-10">
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center border border-slate-200">
                 <User className="w-6 h-6 text-slate-400"/>
               </div>
               <div>
                 <p className="font-bold text-slate-900">{post.author}</p>
                 <div className="flex items-center text-xs text-gray-500 gap-3">
                   <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {post.date}</span>
                   <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {post.readTime}</span>
                 </div>
               </div>
            </div>
            
            <div className="flex items-center gap-2 mt-4 sm:mt-0">
               <span className="text-xs font-bold text-slate-400 uppercase mr-2">Share:</span>
               <button className="p-2 rounded-full bg-gray-50 hover:bg-blue-50 hover:text-[#0ea5e9] transition-colors"><Share2 className="w-4 h-4" /></button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="rounded-3xl overflow-hidden shadow-2xl mb-12">
            <img src={post.image} alt={post.imageAlt} className="w-full object-cover max-h-[500px]" />
          </div>

          {/* AI / SGE Summary Box (2025 Feature) */}
          {post.aiSummary && (
            <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 border border-blue-100 rounded-2xl p-6 mb-12">
              <h3 className="text-sm font-bold text-[#0ea5e9] uppercase tracking-wide mb-2 flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" /> Key Takeaways
              </h3>
              <p className="text-slate-700 italic">{post.aiSummary}</p>
            </div>
          )}

          {/* Content Body */}
          <article className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-[#0ea5e9] prose-img:rounded-2xl">
             <ReactMarkdown>{post.body}</ReactMarkdown>
          </article>
          
          {/* Bottom CTA */}
          <div className="mt-16 border-t border-gray-100 pt-10">
            <div className="bg-gradient-to-r from-[#0ea5e9] to-[#22c55e] rounded-3xl p-10 text-white text-center shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Need help with {post.focusKeyword}?</h3>
              <p className="mb-8 text-white/90 text-lg">
                Our experts in Farmington Hills are ready to assist with enterprise-grade solutions.
              </p>
              <Link to="/contact" className="inline-block bg-white text-[#0ea5e9] font-bold px-8 py-4 rounded-xl hover:shadow-xl hover:scale-105 transition-all">
                Get a Free Assessment
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