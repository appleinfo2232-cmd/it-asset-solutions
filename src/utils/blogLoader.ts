// src/utils/blogLoader.ts
// Loader for markdown blog posts using import.meta.glob + gray-matter.
// Works with Vite + React. Markdown lives in src/content/blog (per Netlify CMS). :contentReference[oaicite:2]{index=2}

import matter from "gray-matter";

export type BlogPost = {
  title: string;
  url_slug?: string;
  date: string;
  category?: string;
  image?: string;
  image_alt?: string;
  focus_keyword?: string;
  seo_title?: string;
  meta_description?: string;
  canonical_url?: string;
  ai_summary?: string;
  schema_type?: string;
  author?: string;
  readTime?: string;
  body: string;
  [key: string]: any;
};

// IMPORTANT: use this exact object form with query/import
const contentModules = import.meta.glob("/src/content/blog/**/*.md", {
  query: "?raw",
  import: "default",
}) as Record<string, () => Promise<string>>;

// Find markdown file matching slug (supports date-prefixed filenames). :contentReference[oaicite:3]{index=3}
async function findModuleForSlug(slug: string): Promise<string | null> {
  const keys = Object.keys(contentModules);

  const match = keys.find(
    (k) =>
      k.endsWith(`${slug}.md`) ||
      k.includes(`/${slug}.md`) ||
      k.includes(`-${slug}.md`)
  );

  return match || null;
}

function mapToBlogPost(
  slugFallback: string,
  data: any,
  content: string
): BlogPost {
  const slug = (data.url_slug || slugFallback || "").trim();

  const post: BlogPost = {
    title: String(data.title || ""),
    url_slug: slug,
    date: String(data.date || new Date().toISOString()),
    category: data.category || "",
    image: data.image || "",
    image_alt: data.image_alt || data.imageAlt || "",
    focus_keyword: data.focus_keyword || data.focusKeyword || "",
    seo_title: data.seo_title || data.seoTitle || data.title || "",
    meta_description: data.meta_description || data.metaDescription || "",
    canonical_url: data.canonical_url || "",
    ai_summary: data.ai_summary || data.aiSummary || "",
    schema_type: data.schema_type || data.schemaType || "BlogPosting",
    author: data.author || "IT Asset Solutions Team",
    readTime: data.readTime || "",
    body: content || "",
    ...data,
  };

  return post;
}

// Single post – used by BlogPost.tsx
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const modPath = await findModuleForSlug(slug);
  if (!modPath) return null;

  const loader = contentModules[modPath];
  const raw = await loader();
  const { data, content } = matter(raw);

  return mapToBlogPost(slug, data, content);
}

// All posts – used by BlogPage.tsx
export async function getAllPosts(): Promise<BlogPost[]> {
  const posts: BlogPost[] = [];

  for (const path of Object.keys(contentModules)) {
    const loader = contentModules[path];
    const raw = await loader();
    const { data, content } = matter(raw);

    const fileName = path.split("/").pop() || "";
    const baseName = fileName.replace(/\.md$/, "");
    const derivedSlug = (data.url_slug || baseName).trim();

    const post = mapToBlogPost(derivedSlug, data, content);
    posts.push(post);
  }

  // Newest first
  posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return posts;
}
