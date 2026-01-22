import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Setup paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const BLOG_DIR = path.join(__dirname, '../src/content/blog');
const PUBLIC_DIR = path.join(__dirname, '../public');
const SITEMAP_PATH = path.join(PUBLIC_DIR, 'sitemap.xml');
const DOMAIN = 'https://www.itassetsolutions.com';

// 1. Define Static Routes
const staticRoutes = [
  '', 
  '/about', 
  '/contact', 
  '/services', 
  '/services/enterprise-itad',
  '/services/corporate-it-buyback', 
  '/services/secure-data-destruction',
  '/services/it-asset-value-recovery',
  '/services/auditing-compliance-reporting',
  '/services/secure-chain-of-custody-logistics',
  '/wholesale-it-equipment',
  '/blog', 
  '/culture',
  '/sustainability',
  '/social-impact',
  '/terms-and-conditions',
  '/privacy-policy',
  '/cookie-policy'
];

// 2. Function to parse Markdown Frontmatter
function getPostMetadata(filename) {
  const content = fs.readFileSync(path.join(BLOG_DIR, filename), 'utf-8');
  
  // Extract Slug
  const slugMatch = content.match(/url_slug:\s*["']?([^"'\n]+)["']?/);
  const slug = slugMatch ? slugMatch[1] : filename.replace('.md', '');
  
  // Extract Date
  const dateMatch = content.match(/date:\s*["']?([^"'\n]+)["']?/);
  const dateStr = dateMatch ? dateMatch[1] : new Date().toISOString();
  
  return { slug, date: dateStr };
}

// 3. Generate Sitemap
function generateSitemap() {
  const now = new Date();
  
  // Get Blog Posts
  const files = fs.readdirSync(BLOG_DIR).filter(file => file.endsWith('.md'));
  
  const blogUrls = files
    .map(file => getPostMetadata(file))
    .filter(post => {
      // SCHEDULING LOGIC: Only include posts where date <= now
      const postDate = new Date(post.date);
      return postDate <= now; 
    })
    .map(post => {
      return `
  <url>
    <loc>${DOMAIN}/blog/${post.slug}</loc>
    <lastmod>${new Date(post.date).toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
    });

  // Generate Static URLs
  const staticUrls = staticRoutes.map(route => {
    const priority = route === '' ? '1.0' : '0.8';
    return `
  <url>
    <loc>${DOMAIN}${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
  });

  // Combine Everything
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticUrls.join('')}
${blogUrls.join('')}
</urlset>`;

  // Write File
  fs.writeFileSync(SITEMAP_PATH, sitemap);
  console.log(`✅ Sitemap generated with ${staticUrls.length} pages and ${blogUrls.length} blog posts.`);
}

generateSitemap();