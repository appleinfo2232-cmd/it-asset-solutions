export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  description: string;
  image: string;
  author: string;
  authorImage: string;
  featured: boolean;
  readTime: string;
  body: string;
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const modules = import.meta.glob('/src/content/blog/*.md', { as: 'raw' });
  const posts: BlogPost[] = [];

  for (const path in modules) {
    const rawContent = await modules[path]();
    
    // Robust Frontmatter Parsing
    const title = rawContent.match(/title: "(.*)"/) || rawContent.match(/title: (.*)/);
    const date = rawContent.match(/date: (.*)/);
    const category = rawContent.match(/category: (.*)/);
    const desc = rawContent.match(/description: "(.*)"/) || rawContent.match(/description: (.*)/);
    const img = rawContent.match(/image: (.*)/);
    const author = rawContent.match(/author: (.*)/);
    const authorImg = rawContent.match(/author_image: (.*)/);
    const featured = rawContent.match(/featured: (true|false)/);
    
    // Extract Body (Everything after the second ---)
    const bodyParts = rawContent.split('---');
    const body = bodyParts.slice(2).join('---').trim();

    // Calculate Read Time (Avg 200 words per min)
    const wordCount = body.split(/\s+/).length;
    const readTime = Math.ceil(wordCount / 200) + ' min read';

    posts.push({
      slug: path.split('/').pop()?.replace('.md', '') || '',
      title: title ? title[1].replace(/['"]+/g, '') : 'Untitled',
      date: date ? new Date(date[1]).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : '',
      category: category ? category[1].replace(/['"]+/g, '') : 'Industry News',
      description: desc ? desc[1].replace(/['"]+/g, '') : '',
      image: img ? img[1].trim() : '/it-asset-solutions-social-share.jpg',
      author: author ? author[1].replace(/['"]+/g, '') : 'IT Asset Solutions',
      authorImage: authorImg ? authorImg[1].trim() : '',
      featured: featured ? featured[1] === 'true' : false,
      readTime,
      body
    });
  }

  // Sort by Date (Newest First)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const posts = await getAllPosts();
  return posts.find((post) => post.slug === slug);
}