import React, { useEffect, useState, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ReactMarkdown from 'react-markdown';
import { getPostBySlug, getAllPosts, BlogPost as PostType } from '../utils/blogLoader';
import ContactLocation from '../components/ContactLocation';
import { 
  ArrowLeft, Calendar, Clock, User, Share2, 
  CheckCircle, ChevronRight, List, ArrowRight 
} from 'lucide-react';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<PostType | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<PostType[]>([]);

  // --- 1. DATA LOADING & RELATED POSTS ---
  useEffect(() => {
    if (slug) {
      getPostBySlug(slug).then((data) => {
        const now = new Date();
        
        // Security: Redirect if post doesn't exist or is scheduled for future
        if (!data || new Date(data.date) > now) {
          navigate('/blog');
          return;
        }
        setPost(data);

        // VISIBILITY BOOST: Load Related Posts to keep users engaged
        getAllPosts().then(allPosts => {
          const others = allPosts
            .filter(p => p.slug !== data.slug && p.category === data.category && new Date(p.date) <= now)
            .slice(0, 2); // Show 2 related articles
          setRelatedPosts(others);
        });
      });
    }
    window.scrollTo(0, 0);
  }, [slug, navigate]);

  // --- 2. 2026 SEO: ADVANCED SCHEMA (Voice + Breadcrumbs) ---
  const schemaData = useMemo(() => {
    if (!post) return null;
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.itassetsolutions.com" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.itassetsolutions.com/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title }
          ]
        },
        {
          "@type": "BlogPosting",
          "headline": post.seoTitle || post.title,
          "description": post.metaDescription,
          "image": [`https://www.itassetsolutions.com${post.image}`],
          "datePublished": new Date(post.date).toISOString(),
          "dateModified": new Date(post.date).toISOString(),
          "author": { "@type": "Organization", "name": post.author },
          "publisher": {
             "@type": "Organization",
             "name": "IT Asset Solutions",
             "logo": { "@type": "ImageObject", "url": "https://www.itassetsolutions.com/it-asset-solutions-new-logo.avif" }
          },
          // VOICE SEARCH OPTIMIZATION
          "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": ["h1", ".ai-summary"]
          }
        }
      ]
    };
  }, [post]);

  // --- 3. FUNCTIONAL SHARE BUTTON ---
  const handleShare = async () => {
    if (navigator.share && post) {
      try {
        await navigator.share({
          title: post.title,
          text: post.metaDescription,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Share canceled');
      }
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (!post) return <div className="min-h-screen flex items-center justify-center">Loading article...</div>;

  return (
    <>
      <Helmet>
        <title>{post.seoTitle || post.title} | IT Asset Solutions</title>
        <meta name="description" content={post.metaDescription} />
        <link rel="canonical" href={`https://www.itassetsolutions.com/blog/${post.slug}`} />
        {/* Open Graph / Social */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.seoTitle || post.title} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:image" content={`https://www.itassetsolutions.com${post.image}`} />
        {schemaData && <script type="application/ld+json">{JSON.stringify(schemaData)}</script>}
      </Helmet>

      <main className="pt-32 pb-20 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center text-sm text-slate-500 mb-8 overflow-x-auto whitespace-nowrap">
            <Link to="/" className="hover:text-[#0ea5e9]">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link to="/blog" className="hover:text-[#0ea5e9]">Insights</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-slate-900 font-medium truncate">{post.title}</span>
          </div>

          {/* Category Pill */}
          <div className="mb-6">
            <span className="bg-blue-50 text-[#0ea5e9] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              {post.category}
            </span>
          </div>

          {/* H1 Title */}
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
            {post.title}
          </h1>

          {/* Author Bar */}
          <div className="flex flex-wrap items-center justify-between border-b border-gray-100 pb-8 mb-8 gap-4">
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center border border-slate-200">
                 <User className="w-6 h-6 text-slate-400"/>
               </div>
               <div>
                 <p className="font-bold text-slate-900">{post.author}</p>
                 <div className="flex items-center text-xs text-gray-500 gap-3">
                   <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {post.displayDate}</span>
                   <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {post.readTime}</span>
                 </div>
               </div>
            </div>
            
            {/* Working Share Button */}
            <button 
              onClick={handleShare}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 hover:bg-[#0ea5e9] hover:text-white transition-colors text-slate-600 font-medium text-sm"
            >
              <Share2 className="w-4 h-4" /> Share Article
            </button>
          </div>

          {/* Featured Image */}
          <div className="rounded-3xl overflow-hidden shadow-xl mb-12 bg-slate-100">
            <img 
              src={post.image} 
              alt={post.imageAlt} 
              className="w-full object-cover max-h-[500px]"
              loading="eager"
            />
          </div>

          {/* AI Summary (Voice Search Friendly) */}
          {post.aiSummary && (
            <div className="ai-summary bg-blue-50/50 border border-blue-100 rounded-2xl p-6 mb-12">
              <h3 className="text-sm font-bold text-[#0ea5e9] uppercase tracking-wide mb-3 flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" /> Key Takeaways
              </h3>
              <p className="text-slate-800 text-lg leading-relaxed font-medium">
                {post.aiSummary}
              </p>
            </div>
          )}

          {/* Content Body */}
          <article className="prose prose-lg max-w-none text-slate-700 prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-[#0ea5e9] prose-img:rounded-xl">
             <ReactMarkdown 
               components={{
                 // Enhance headers for scan-ability
                 h2: ({node, ...props}) => <h2 className="text-3xl mt-12 mb-6 scroll-mt-24" {...props} />,
                 img: ({node, ...props}) => <img loading="lazy" className="shadow-lg my-8 w-full" {...props} />
               }}
             >
               {post.body}
             </ReactMarkdown>
          </article>

          {/* --- RELATED POSTS SECTION --- */}
          {relatedPosts.length > 0 && (
            <div className="mt-20 pt-10 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Related Insights</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedPosts.map(rp => (
                  <Link key={rp.slug} to={`/blog/${rp.slug}`} className="group block bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all border border-gray-100">
                    <span className="text-xs font-bold text-[#0ea5e9] uppercase mb-2 block">{rp.category}</span>
                    <h4 className="text-lg font-bold text-slate-900 group-hover:text-[#0ea5e9] transition-colors mb-2">
                      {rp.title}
                    </h4>
                    <div className="flex items-center text-sm text-slate-500 font-medium">
                      Read now <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
          
          {/* CTA Box */}
          <div className="mt-16 bg-slate-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0ea5e9] to-[#22c55e]"></div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Secure Your Corporate IT Assets</h3>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto text-lg">
              Ensure compliance and maximize value recovery with our certified ITAD solutions.
            </p>
            <Link to="/contact" className="inline-flex items-center bg-[#0ea5e9] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#0284c7] transition-all hover:-translate-y-1">
              Get a Free Valuation <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

        </div>
      </main>
      <ContactLocation />
    </>
  );
};

export default BlogPost;