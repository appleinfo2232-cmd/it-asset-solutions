import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getPostBySlug, BlogPost as PostType } from '../utils/blogLoader';
import ContactLocation from '../components/ContactLocation';
import { ArrowLeft, Calendar, Clock, User, Share2, Linkedin, Twitter, Facebook, Tag } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

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

  // 2025 Valid Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": post.schemaType || "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.itassetsolutions.com/blog/${slug}`
    },
    "headline": post.seoTitle || post.title,
    "description": post.metaDescription,
    "image": [`https://www.itassetsolutions.com${post.image}`],
    "datePublished": new Date(post.date).toISOString(),
    "dateModified": new Date(post.date).toISOString(), // Should ideally be updated date
    "author": {
      "@type": "Organization", // Or Person if specific author
      "name": post.author,
      "url": "https://www.itassetsolutions.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "IT Asset Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.itassetsolutions.com/it-asset-solutions-new-logo.webp"
      }
    },
    "keywords": post.focusKeyword
  };

  return (
    <>
      <Helmet>
        {/* 1. SEO Meta Tags */}
        <title>{post.seoTitle || post.title} | IT Asset Solutions</title>
        <meta name="description" content={post.metaDescription} />
        <meta name="keywords" content={`${post.focusKeyword}, ITAD, Data Destruction, ${post.category}`} />
        <link rel="canonical" href={`https://www.itassetsolutions.com/blog/${slug}`} />

        {/* 2. Open Graph (Social) */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.seoTitle || post.title} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:image" content={`https://www.itassetsolutions.com${post.image}`} />
        <meta property="og:url" content={`https://www.itassetsolutions.com/blog/${slug}`} />
        <meta property="article:published_time" content={new Date(post.date).toISOString()} />
        <meta property="article:section" content={post.category} />
        <meta property="article:tag" content={post.focusKeyword} />

        {/* 3. Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.seoTitle || post.title} />
        <meta name="twitter:description" content={post.metaDescription} />
        <meta name="twitter:image" content={`https://www.itassetsolutions.com${post.image}`} />
        <meta name="twitter:image:alt" content={post.imageAlt} />

        {/* 4. JSON-LD Schema */}
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      <main className="pt-32 pb-20 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center text-slate-500 hover:text-[#0ea5e9] mb-8 font-medium transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Insights
          </Link>
          
          <div className="flex items-center gap-2 mb-6">
            <span className="bg-blue-50 text-[#0ea5e9] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center justify-between border-b border-gray-100 pb-8 mb-8">
            <div className="flex items-center gap-4">
               {post.authorImage ? (
                 <img src={post.authorImage} alt={post.author} className="w-12 h-12 rounded-full object-cover" />
               ) : (
                 <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center"><User className="w-6 h-6 text-slate-400"/></div>
               )}
               <div>
                 <p className="font-bold text-slate-900">{post.author}</p>
                 <div className="flex items-center text-sm text-gray-500 gap-3">
                   <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {post.date}</span>
                   <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {post.readTime}</span>
                 </div>
               </div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl mb-12">
            <img src={post.image} alt={post.imageAlt} className="w-full object-cover max-h-[500px]" />
          </div>

          <article className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-[#0ea5e9] prose-img:rounded-2xl">
             <ReactMarkdown>{post.body}</ReactMarkdown>
          </article>
          
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