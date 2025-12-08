// src/components/BlogPost.tsx

import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ReactMarkdown from "react-markdown";
import { getPostBySlug, BlogPost as PostType } from "../utils/blogLoader";
import ContactLocation from "../components/ContactLocation";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Linkedin,
  Twitter,
  Facebook,
  CheckCircle,
} from "lucide-react";

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<PostType | null>(null);

  useEffect(() => {
    if (!slug) return;

    getPostBySlug(slug).then((data) => {
      if (!data) {
        navigate("/blog");
      } else {
        setPost(data);
        window.scrollTo(0, 0);
      }
    });
  }, [slug, navigate]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  // Canonical URL – use frontmatter if present, otherwise derive from slug
  const canonicalHref =
    post.canonical_url ||
    (typeof window !== "undefined"
      ? `${window.location.origin}/blog/${post.url_slug || slug}`
      : "");

  // Absolute image URL for OG/Twitter/JSON-LD
  const siteBase =
    (typeof window !== "undefined" && window.location.origin) ||
    "https://www.itassetsolutions.com";
  const imageUrl =
    post.image && post.image.startsWith("http")
      ? post.image
      : `${siteBase}${post.image || ""}`;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": post.schema_type || "BlogPosting",
    headline: post.seo_title || post.title,
    description: post.meta_description || "",
    image: [imageUrl],
    datePublished: new Date(post.date).toISOString(),
    author: {
      "@type": "Organization",
      name: post.author || "IT Asset Solutions",
    },
  };

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <>
      <Helmet>
        <title>{post.seo_title || post.title} | IT Asset Solutions</title>
        <meta name="description" content={post.meta_description || ""} />
        {canonicalHref && <link rel="canonical" href={canonicalHref} />}

        {/* Open Graph */}
        <meta property="og:title" content={post.seo_title || post.title} />
        <meta property="og:description" content={post.meta_description || ""} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalHref} />
        {imageUrl && <meta property="og:image" content={imageUrl} />}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.seo_title || post.title} />
        <meta
          name="twitter:description"
          content={post.meta_description || ""}
        />
        {imageUrl && <meta name="twitter:image" content={imageUrl} />}

        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <main className="pt-32 pb-20 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-slate-500 hover:text-[#0ea5e9] mb-8 font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Insights
          </Link>

          <div className="mb-6">
            <span className="bg-blue-50 text-[#0ea5e9] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center justify-between border-b border-gray-100 pb-8 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center border border-slate-200">
                <User className="w-6 h-6 text-slate-400" />
              </div>
              <div>
                <p className="font-bold text-slate-900">{post.author}</p>
                <div className="flex items-center text-xs text-gray-500 gap-3">
                  <span className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" /> {formattedDate}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" /> {post.readTime || ""}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-400 uppercase mr-2 hidden sm:block">
                Share:
              </span>

              {/* Twitter */}
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  post.title
                )}&url=${encodeURIComponent(canonicalHref)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Twitter"
                className="p-2 rounded-full bg-gray-50 hover:bg-blue-50 hover:text-[#0ea5e9] transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>

              {/* LinkedIn */}
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                  canonicalHref
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on LinkedIn"
                className="p-2 rounded-full bg-gray-50 hover:bg-blue-50 hover:text-[#0ea5e9] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              {/* Facebook */}
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  canonicalHref
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Facebook"
                className="p-2 rounded-full bg-gray-50 hover:bg-blue-50 hover:text-[#0ea5e9] transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl mb-12">
            <img
              src={post.image}
              alt={post.image_alt || post.title || "Blog image"}
              className="w-full object-cover max-h-[500px]"
            />
          </div>

          {post.ai_summary && (
            <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 border border-blue-100 rounded-2xl p-6 mb-12">
              <h3 className="text-sm font-bold text-[#0ea5e9] uppercase tracking-wide mb-2 flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" /> Key Takeaways
              </h3>
              <p className="text-slate-700 italic text-lg leading-relaxed whitespace-pre-wrap">
                {post.ai_summary}
              </p>
            </div>
          )}

          <article className="prose prose-lg max-w-none text-slate-700">
            <ReactMarkdown
              components={{
                h2: ({ node, ...props }) => (
                  <h2
                    className="text-3xl font-bold text-slate-900 mt-12 mb-6"
                    {...props}
                  />
                ),
                h3: ({ node, ...props }) => (
                  <h3
                    className="text-2xl font-bold text-slate-800 mt-8 mb-4"
                    {...props}
                  />
                ),
                ul: ({ node, ...props }) => (
                  <ul
                    className="list-disc pl-6 mb-6 space-y-2 marker:text-[#0ea5e9]"
                    {...props}
                  />
                ),
                ol: ({ node, ...props }) => (
                  <ol
                    className="list-decimal pl-6 mb-6 space-y-2 marker:text-[#0ea5e9]"
                    {...props}
                  />
                ),
                li: ({ node, ...props }) => <li className="pl-1" {...props} />,
                a: ({ node, ...props }) => (
                  <a
                    className="text-[#0ea5e9] font-bold hover:underline"
                    {...props}
                  />
                ),
                blockquote: ({ node, ...props }) => (
                  <blockquote
                    className="border-l-4 border-[#0ea5e9] pl-4 italic bg-gray-50 p-4 rounded-r-lg my-8"
                    {...props}
                  />
                ),
                p: ({ node, ...props }) => (
                  <p className="mb-6 leading-8" {...props} />
                ),
              }}
            >
              {post.body}
            </ReactMarkdown>
          </article>

          <div className="mt-16 border-t border-gray-100 pt-10">
            <div className="bg-gradient-to-r from-[#0ea5e9] to-[#22c55e] rounded-3xl p-10 text-white text-center shadow-lg">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Secure Your IT Assets?
              </h3>
              <p className="mb-8 text-white/90 text-lg">
                Get a free consultation for your corporate equipment today.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-white text-[#0ea5e9] font-bold px-8 py-4 rounded-xl hover:shadow-xl hover:scale-105 transition-all"
              >
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
