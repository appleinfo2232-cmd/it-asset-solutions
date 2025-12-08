import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getPostBySlug, BlogPost as PostType } from '../utils/blogLoader';
import ContactLocation from '../components/ContactLocation';
import { ArrowLeft, Calendar, Clock, User, Share2, Linkedin, Twitter, Facebook } from 'lucide-react';
import ReactMarkdown from 'react-markdown'; // Ensure you run: npm install react-markdown

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<PostType | null>(null);

  useEffect(() => {
    if (slug) {
      getPostBySlug(slug).then((data) => {
        if (!data) navigate('/blog'); // Redirect if not found
        else setPost(data);
      });
    }
    window.scrollTo(0, 0);
  }, [slug, navigate]);

  if (!post) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  // SEO Schema for Article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": [`https://www.itassetsolutions.com${post.image}`],
    "datePublished": new Date(post.date).toISOString(),
    "author": {
      "@type": "Organization",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "IT Asset Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.itassetsolutions.com/it-asset-solutions-new-logo.webp"
      }
    },
    "description": post.description
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | IT Asset Solutions Blog</title>
        <meta name="description" content={post.description} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      <main className="pt-32 pb-20 bg-white min-h-screen">
        {/* Hero Header */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center text-slate-500 hover:text-[#0ea5e9] mb-8 font-medium transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Insights
          </Link>
          
          <div className="flex flex-wrap gap-4 text-sm font-bold text-[#0ea5e9] mb-6 uppercase tracking-wider">
            <span className="bg-blue-50 px-3 py-1 rounded-full">{post.category}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center justify-between border-b border-gray-100 pb-8 mb-8">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                 {post.authorImage ? (
                   <img src={post.authorImage} alt={post.author} className="w-10 h-10 rounded-full" />
                 ) : (
                   <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center"><User className="w-5 h-5 text-slate-400"/></div>
                 )}
                 <div>
                   <p className="text-sm font-bold text-slate-900">{post.author}</p>
                   <p className="text-xs text-slate-500">ITAD Specialist</p>
                 </div>
              </div>
              <div className="hidden sm:block w-px h-8 bg-gray-200"></div>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> {post.date}</span>
                <span className="flex items-center"><Clock className="w-4 h-4 mr-2" /> {post.readTime}</span>
              </div>
            </div>

            {/* Social Share (Static Links for now) */}
            <div className="flex items-center gap-3">
               <button className="p-2 rounded-full bg-gray-50 hover:bg-[#0077b5] hover:text-white transition-colors"><Linkedin className="w-4 h-4" /></button>
               <button className="p-2 rounded-full bg-gray-50 hover:bg-[#1da1f2] hover:text-white transition-colors"><Twitter className="w-4 h-4" /></button>
               <button className="p-2 rounded-full bg-gray-50 hover:bg-[#1877f2] hover:text-white transition-colors"><Facebook className="w-4 h-4" /></button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="rounded-3xl overflow-hidden shadow-2xl mb-12">
            <img src={post.image} alt={post.title} className="w-full object-cover max-h-[500px]" />
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-[#0ea5e9] prose-img:rounded-2xl">
            {/* NOTE: To render markdown safely, you need a library. 
               Since you are using raw React, a simple whitespace-preserving div is the fallback, 
               BUT for "Premium" you should install 'react-markdown'.
            */}
             <div className="whitespace-pre-wrap font-sans text-slate-700 leading-8">
               {post.body} 
             </div>
          </article>
          
          {/* Bottom CTA */}
          <div className="mt-16 bg-gradient-to-r from-[#0ea5e9] to-[#22c55e] rounded-3xl p-10 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Need help with your IT Asset Disposition?</h3>
            <p className="mb-8 text-white/90">Get a free assessment for your corporate equipment today.</p>
            <Link to="/contact" className="inline-block bg-white text-[#0ea5e9] font-bold px-8 py-4 rounded-xl hover:shadow-lg hover:scale-105 transition-all">
              Get a Quote
            </Link>
          </div>
        </div>
      </main>
      <ContactLocation />
    </>
  );
};

export default BlogPost;