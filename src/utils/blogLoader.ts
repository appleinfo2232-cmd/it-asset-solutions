export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  image: string;
  imageAlt: string;
  author: string;
  authorImage: string;
  body: string;
  // New SEO Fields
  seoTitle: string;
  metaDescription: string;
  focusKeyword: string;
  schemaType: string;
  readTime: string;
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const modules = import.meta.glob('/src/content/blog/*.md', { as: 'raw' });
  const posts: BlogPost[] = [];

  for (const path in modules) {
    const rawContent = await modules[path]();
    
    // Helper to extract fields safely
    const extract = (key: string) => {
      const match = rawContent.match(new RegExp(`${key}: "?(.*?)"?$`)); // Simple regex for demo
      return match ? match[1].replace(/['"]+/g, '').trim() : '';
    };

    // Note: Since Decap CMS saves nested objects (seo_tab), parsing raw markdown frontmatter 
    // with Regex is fragile. For production, you should use 'front-matter' library.
    // Assuming simple flat structure or manual parsing for now:
    
    const bodyParts = rawContent.split('---');
    const body = bodyParts.slice(2).join('---').trim();
    const wordCount = body.split(/\s+/).length;
    const readTime = Math.ceil(wordCount / 200) + ' min read';

    posts.push({
      slug: path.split('/').pop()?.replace('.md', '') || '',
      title: extract('title'),
      date: new Date(extract('date')).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      category: extract('category') || 'Industry News',
      image: extract('image') || '/it-asset-solutions-social-share.jpg',
      imageAlt: extract('image_alt') || extract('title'),
      author: extract('author') || 'IT Asset Solutions',
      authorImage: extract('author_image'),
      body,
      // SEO Mappings
      seoTitle: extract('seo_title') || extract('title'),
      metaDescription: extract('meta_description') || '',
      focusKeyword: extract('focus_keyword'),
      schemaType: extract('schema_type') || 'BlogPosting',
      readTime
    });
  }

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const posts = await getAllPosts();
  return posts.find((post) => post.slug === slug);
}