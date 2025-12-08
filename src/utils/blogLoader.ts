export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  image: string;
  imageAlt: string;
  author: string;
  body: string;
  seoTitle: string;
  metaDescription: string;
  focusKeyword: string;
  aiSummary: string;
  schemaType: string;
  readTime: string;
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const modules = import.meta.glob('/src/content/blog/*.md', { as: 'raw' });
  const posts: BlogPost[] = [];

  for (const path in modules) {
    const rawContent = await modules[path]();
    
    // Simple Extractor for Flat YAML
    const getField = (key: string) => {
      const match = rawContent.match(new RegExp(`${key}: "?(.*)"?`)); 
      return match ? match[1].replace(/^"|"$/g, '').trim() : '';
    };

    const bodyParts = rawContent.split('---');
    const body = bodyParts.slice(2).join('---').trim();
    const words = body.split(/\s+/).length;
    const readTime = Math.ceil(words / 200) + ' min read';

    const filenameSlug = path.split('/').pop()?.replace('.md', '') || '';
    const customSlug = getField('url_slug');

    posts.push({
      slug: customSlug || filenameSlug,
      title: getField('title'),
      date: new Date(getField('date')).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      category: getField('category') || 'Industry News',
      image: getField('image') || '/it-asset-solutions-social-share.jpg',
      imageAlt: getField('image_alt'),
      author: getField('author') || 'IT Asset Solutions',
      body,
      seoTitle: getField('seo_title') || getField('title'),
      metaDescription: getField('meta_description'),
      focusKeyword: getField('focus_keyword'),
      aiSummary: getField('ai_summary'),
      schemaType: getField('schema_type') || 'BlogPosting',
      readTime
    });
  }

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const posts = await getAllPosts();
  return posts.find(post => post.slug === slug);
}