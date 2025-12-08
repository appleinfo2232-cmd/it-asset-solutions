// This helper reads the markdown files from your src/content/blog folder
export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  body: string;
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const modules = import.meta.glob('/src/content/blog/*.md', { as: 'raw' });
  const posts: BlogPost[] = [];

  for (const path in modules) {
    const rawContent = await modules[path]();
    // Simple manual parsing to avoid heavy dependencies
    const titleMatch = rawContent.match(/title: (.*)/);
    const dateMatch = rawContent.match(/date: (.*)/);
    const descMatch = rawContent.match(/description: (.*)/);
    const bodyParts = rawContent.split('---');

    posts.push({
      slug: path.split('/').pop()?.replace('.md', '') || '',
      title: titleMatch ? titleMatch[1].replace(/['"]+/g, '') : 'Untitled',
      date: dateMatch ? new Date(dateMatch[1]).toLocaleDateString() : '',
      description: descMatch ? descMatch[1].replace(/['"]+/g, '') : '',
      body: bodyParts[2] || ''
    });
  }
  return posts;
}