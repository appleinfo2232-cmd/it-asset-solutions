// utils/blogLoader.ts

export interface BlogPost {
  slug: string;
  title: string;
  date: string;         // Kept as ISO string (YYYY-MM-DD) for logic
  displayDate: string;  // Formatted date (October 15, 2026) for UI
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
  
  // 2. Process files in parallel (Faster than sequential for loop)
  const posts = await Promise.all(
    Object.entries(modules).map(async ([path, loader]) => {
      const rawContent = await loader();
      
      // Robust YAML Extractor (Handles quotes and colons inside values)
      const getField = (key: string) => {
        // Regex looks for: key followed by colon, optional space, capturing group that handles quotes
        const regex = new RegExp(`^${key}:\\s*(?:["']?)(.*?)(?:["']?)$`, 'm');
        const match = rawContent.match(regex);
        return match ? match[1].trim() : '';
      };

      // Split Frontmatter vs Body
      // We use a more robust split ensuring we only split on the valid YAML separator
      const parts = rawContent.split(/^---$/m);
      // parts[0] is empty (before first ---), parts[1] is frontmatter, parts[2] is body
      const body = parts.length > 2 ? parts.slice(2).join('---').trim() : '';

      // Word Count & Read Time
      const words = body.split(/\s+/).length;
      const readTime = Math.ceil(words / 200) + ' min read';

      // Slug Logic
      const filenameSlug = path.split('/').pop()?.replace('.md', '') || '';
      const customSlug = getField('url_slug');
      const finalSlug = customSlug || filenameSlug;

      // Date Logic - CRITICAL FIX
      // We read the raw string. If valid, we keep it standard. 
      // This ensures 2026-05-12 stays 2026-05-12 for sorting/filtering.
      const rawDate = getField('date'); 
      const parsedDate = new Date(rawDate);
      
      // Safety check for invalid dates
      const validDate = !isNaN(parsedDate.getTime()) ? parsedDate : new Date();
      
      // Format specifically for display (US format)
      const displayDate = validDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

      return {
        slug: finalSlug,
        title: getField('title'),
        // Keep standard ISO format for safe sorting & filtering
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

  // 3. Sort by Date Descending (Newest First)
  // Now sorting works perfectly because we are comparing ISO strings/numbers, not "October" vs "September"
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const posts = await getAllPosts();
  return posts.find(post => post.slug === slug);
}