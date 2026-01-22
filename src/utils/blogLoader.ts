// src/utils/blogLoader.ts

export interface BlogPost {
  slug: string;
  title: string;
  date: string;         // ISO format (YYYY-MM-DD) for logic/sorting
  displayDate: string;  // Human-readable format (October 15, 2026) for UI
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
  // 1. Load all markdown files efficiently
  const modules = import.meta.glob('/src/content/blog/*.md', { as: 'raw' });
  
  const posts = await Promise.all(
    Object.entries(modules).map(async ([path, loader]) => {
      const rawContent = await loader();
      
      // --- CRITICAL FIX 1: Extract Frontmatter Safely ---
      // We isolate the text between the first set of "---" to avoid reading the body by mistake.
      const frontmatterMatch = rawContent.match(/^---([\s\S]*?)---/);
      const frontmatter = frontmatterMatch ? frontmatterMatch[1] : '';

      // --- CRITICAL FIX 2: Multi-line Field Extractor ---
      // This regex captures text even if it spans multiple lines.
      // UPGRADE: Added '[-]' to the lookahead to handle keys like 'url-slug:' or 'seo-title:'
      const getField = (key: string) => {
        const regex = new RegExp(`^${key}:\\s*(?:["']?)([\\s\\S]*?)(?:["']?)(?=\\n[a-z0-9_\\-]+:|$)`, 'mi');
        const match = frontmatter.match(regex);
        
        if (!match) return '';
        
        // Remove newlines and extra spaces to create a clean text block
        return match[1].replace(/\n\s*/g, ' ').trim();
      };

      // Split Frontmatter vs Body for the main content
      const parts = rawContent.split(/^---$/m);
      const body = parts.length > 2 ? parts.slice(2).join('---').trim() : '';

      // Word Count & Read Time Calculation
      const words = body.split(/\s+/).length;
      const readTime = Math.ceil(words / 200) + ' min read';

      // Slug Logic (Prioritize custom slug, fallback to filename)
      const filenameSlug = path.split('/').pop()?.replace('.md', '') || '';
      const customSlug = getField('url_slug'); // Matches 'url_slug' or 'url-slug' if you adjust regex, but keeping strictly your schema

      // --- CRITICAL FIX 3: Date Logic ---
      const rawDate = getField('date'); 
      const parsedDate = new Date(rawDate);
      // Fallback to today if date is invalid
      const validDate = !isNaN(parsedDate.getTime()) ? parsedDate : new Date();
      
      // Create a specific "Display Date" for the user interface
      const displayDate = validDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

      return {
        slug: customSlug || filenameSlug,
        title: getField('title'),
        date: validDate.toISOString(), // Kept as ISO string for accurate sorting & scheduling
        displayDate: displayDate,      // Used for visual display
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

  // Sort by date descending (Newest First) using the ISO date
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const posts = await getAllPosts();
  return posts.find(post => post.slug === slug);
}