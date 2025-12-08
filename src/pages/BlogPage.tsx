import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { getAllPosts, BlogPost } from '../utils/blogLoader';
import ContactLocation from '../components/ContactLocation';

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    getAllPosts().then(setPosts);
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>ITAD Industry Insights & News | IT Asset Solutions</title>
        <meta name="description" content="Latest news and insights on Enterprise ITAD, Data Destruction, and ESG compliance." />
      </Helmet>

      <main className="pt-32 pb-20 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Industry Insights</h1>
            <p className="text-xl text-gray-600">News and guides for IT decision makers.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.slug} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <p className="text-sm text-[#0ea5e9] font-bold mb-2">{post.date}</p>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.description}</p>
                  <button className="text-[#0ea5e9] font-bold hover:underline">Read More →</button>
                </div>
              </article>
            ))}
            {posts.length === 0 && (
              <p className="text-center col-span-3 text-gray-500">No articles found. Check back soon!</p>
            )}
          </div>
        </div>
      </main>
      <ContactLocation />
    </>
  );
};

export default BlogPage;