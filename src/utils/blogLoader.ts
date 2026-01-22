// src/utils/blogLoader.ts

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  displayDate: string;
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
  
  const posts = await Promise.all(
    Object.entries(modules).map(async ([path, loader]) => {
      const rawContent = await loader();
      
      const frontmatterMatch = rawContent.match(/^---([\s\S]*?)---/);
      const frontmatter = frontmatterMatch ? frontmatterMatch[1] : '';

      // FIXED REGEX: Handles multi-line text correctly
      const getField = (key: string) => {
        const regex = new RegExp(`^${key}:\\s*(?:["']?)([\\s\\S]*?)(?:["']?)(?=\\n[a-z0-9_\\-]+:|$)`, 'mi');
        const match = frontmatter.match(regex);
        return match ? match[1].replace(/\n\s*/g, ' ').trim() : '';
      };

      const parts = rawContent.split(/^---$/m);
      const body = parts.length > 2 ? parts.slice(2).join('---').trim() : '';
      const words = body.split(/\s+/).length;
      const readTime = Math.ceil(words / 200) + ' min read';

      const filenameSlug = path.split('/').pop()?.replace('.md', '') || '';
      const customSlug = getField('url_slug');

      const rawDate = getField('date'); 
      const parsedDate = new Date(rawDate);
      const validDate = !isNaN(parsedDate.getTime()) ? parsedDate : new Date();
      
      const displayDate = validDate.toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
      });

      return {
        slug: customSlug || filenameSlug,
        title: getField('title'),
        date: validDate.toISOString(),
        displayDate: displayDate,
        category: getField('category') || 'Industry News',
        image: getField('image') || '/it-asset-solutions-social-share.jpg',
        imageAlt: getField('image_alt') || getField('title'),
        author: getField('author') || 'IT Asset Solutions',
        body,
        seoTitle: getField('seo_title') || getField('title'),
        metaDescription: getField('meta_description'),
        focusKeyword: getField('focus_keyword'),
        aiSummary: getField('ai_summary'),
        schemaType: getField('schema_type') || 'BlogPosting',
        readTime
      };
    })
  );

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const posts = await getAllPosts();
  return posts.find(post => post.slug === slug);
}