const fs = require('fs');
const path = require('path');

// Read data/packages.ts slugs
const packagesFile = fs.readFileSync(path.join(__dirname, '../data/packages.ts'), 'utf8');
const slugMatches = [...packagesFile.matchAll(/slug:\s*["']([^"']+)["']/g)].map(m => m[1]);
const uniqueSlugs = [...new Set(slugMatches)];

const baseUrl = 'https://metrip.in';
const today = new Date().toISOString().split('T')[0];

const staticUrls = [
  { loc: `${baseUrl}/`, priority: '1.0', changefreq: 'daily' },
  { loc: `${baseUrl}/destinations`, priority: '0.9', changefreq: 'daily' },
  { loc: `${baseUrl}/gallery`, priority: '0.8', changefreq: 'weekly' },
  { loc: `${baseUrl}/contact`, priority: '0.8', changefreq: 'monthly' }
];

const packageUrls = uniqueSlugs.map(slug => ({
  loc: `${baseUrl}/packages/${slug}`,
  priority: '0.85',
  changefreq: 'weekly'
}));

const allUrls = [...staticUrls, ...packageUrls];

const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${allUrls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

const publicDir = path.join(__dirname, '../public');
fs.writeFileSync(path.join(publicDir, 'site.xml'), xmlContent.trim(), 'utf8');
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xmlContent.trim(), 'utf8');

console.log(`Generated site.xml and sitemap.xml with ${allUrls.length} URLs in public/`);
