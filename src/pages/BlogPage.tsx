// src/pages/BlogPage.tsx

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { getAllPosts } from "../utils/blogLoader";
import type { BlogPost } from "../utils/blogLoader";

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllPosts()
      .then((data) => {
        setPosts(data);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <main className="pt-32 pb-20 bg-white min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center py-20">Loading posts…</div>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Insights &amp; Resources
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Practical guides and tips on IT asset disposition, secure data
            destruction, and electronics recycling.
          </p>
        </header>

        {posts.length === 0 ? (
          <div className="text-center py-20 text-slate-500">
            No blog posts found.
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2">
            {posts.map((post) => {
              const formattedDate = new Date(post.date).toLocaleDateString(
                "en-US",
                {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                }
              );

              const slugPath = post.url_slug || "";

              return (
                <article
                  key={slugPath}
                  className="border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow bg-white flex flex-col"
                >
                  {post.image && (
                    <div className="h-52 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.image_alt || post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  <div className="p-6 flex flex-col flex-1">
                    <div className="mb-3">
                      <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wide text-[#0ea5e9] bg-blue-50 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-slate-900 mb-3">
                      <Link
                        to={`/blog/${slugPath}`}
                        className="hover:text-[#0ea5e9] transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h2>

                    {post.meta_description && (
                      <p className="text-slate-600 text-sm mb-4">
                        {post.meta_description}
                      </p>
                    )}

                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100">
                      <div className="flex items-center gap-3 text-xs text-slate-500">
                        <span className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" /> {formattedDate}
                        </span>
                        {post.readTime && (
                          <span className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" /> {post.readTime}
                          </span>
                        )}
                      </div>
                      <Link
                        to={`/blog/${slugPath}`}
                        className="inline-flex items-center text-sm font-semibold text-[#0ea5e9] hover:text-[#0284c7]"
                      >
                        Read more
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
};

export default BlogPage;
