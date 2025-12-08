// Define the structure of your Super-Post
export interface BlogPost {
  slug: string;
  // Content Tab
  title: string;
  subtitle: string;
  date: string;
  author: string;
  category: string;
  body: string;
  // Media Tab
  image: string;
  imageAlt: string;
  videoUrl?: string;
  // SEO Tab
  seoTitle: string;
  metaDescription: string;
  focusKeyword: string;
  canonicalUrl?: string;
  robots: string;
  // SGE/EEAT Tab
  aiSummary: string;
  schemaType: string;
  experienceNote?: string;
  // FAQ Tab
  faq: { question: string; answer: string }[];
  // Social Tab
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  // Generated Fields
  readTime: string;
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const modules = import.meta.glob('/src/content/blog/*.md', { as: 'raw' });
  const posts: BlogPost[] = [];

  for (const path in modules) {
    const rawContent = await modules[path]();
    
    // --- Helper to safely extract nested fields ---
    const getField = (key: string) => {
      // Regex looks for "key: value"
      const match = rawContent.match(new RegExp(`${key}: "?(.*)"?`)); 
      return match ? match[1].replace(/^"|"$/g, '').trim() : '';
    };

    // --- Body Extraction ---
    const bodyParts = rawContent.split('---');
    const body = bodyParts.slice(2).join('---').trim();

    // --- Read Time Calculation ---
    const words = body.split(/\s+/).length;
    const readTime = Math.ceil(words / 200) + ' min read';

    // --- Filename Fallback ---
    const filenameSlug = path.split('/').pop()?.replace('.md', '') || '';
    const customSlug = getField('url_slug');
    
    posts.push({
      slug: customSlug || filenameSlug,
      title: getField('title') || 'Untitled Post',
      subtitle: getField('subtitle'),
      date: new Date(getField('date')).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      author: getField('author') || 'IT Asset Solutions',
      category: getField('category') || 'Industry News',
      body,
      image: getField('image') || '/default-blog.jpg',
      imageAlt: getField('image_alt') || getField('title'),
      videoUrl: getField('video_url'),
      seoTitle: getField('seo_title') || getField('title'),
      metaDescription: getField('meta_description'),
      focusKeyword: getField('focus_keyword'),
      canonicalUrl: getField('canonical_url'),
      robots: getField('robots') || 'index, follow',
      aiSummary: getField('ai_summary'),
      schemaType: getField('schema_type') || 'BlogPosting',
      experienceNote: getField('experience_note'),
      faq: [], // Note: Advanced regex needed to parse lists from raw markdown string if not using a parser library
      ogTitle: getField('og_title'),
      ogDescription: getField('og_description'),
      ogImage: getField('og_image'),
      readTime
    });
  }

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const posts = await getAllPosts();
  return posts.find(post => post.slug === slug);
}