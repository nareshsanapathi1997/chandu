import { readFile, writeFile, rm } from 'node:fs/promises';
import { resolve } from 'node:path';

const projectRoot = process.cwd();
const distDir = resolve(projectRoot, 'dist');
const configPath = resolve(projectRoot, 'seo.config.json');
const config = JSON.parse(await readFile(configPath, 'utf8'));
const rawSiteUrl = (process.env.SITE_URL || config.siteUrl || '').trim();
let siteUrl = '';

if (rawSiteUrl) {
  const parsed = new URL(rawSiteUrl);
  if (parsed.protocol !== 'https:') {
    throw new Error('SITE_URL must use https:// for a production deployment.');
  }
  if (parsed.pathname !== '/' || parsed.search || parsed.hash || parsed.username || parsed.password) {
    throw new Error('SITE_URL must be the website origin, for example https://chandumobilecare.in.');
  }
  siteUrl = parsed.origin;
}

const business = {
  '@context': 'https://schema.org',
  '@type': 'ElectronicsStore',
  name: 'Chandu Mobile Care',
  description: 'Mobile phones, accessories, spare parts and mobile repair enquiries at Chandu Mobile Care on Sabbavaram Road, Lankelapalem.',
  telephone: '+917036859233',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '8-82, Sabbavaram Road',
    addressLocality: 'Lankelapalem',
    addressRegion: 'Andhra Pradesh',
    postalCode: '531019',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 17.688256,
    longitude: 83.096552,
  },
  hasMap: 'https://www.google.com/maps/place/CHANDU+MOBILE+CARE/@17.688256,83.096552,17z/data=!3m1!4b1!4m6!3m5!1s0x3a396e34eb186ff5:0xcc98618f7e8a4306!8m2!3d17.688256!4d83.096552',
  areaServed: ['Lankelapalem', 'Visakhapatnam'],
  keywords: [
    'mobile shop in Lankelapalem',
    'mobile phone repair in Lankelapalem',
    'mobile accessories in Lankelapalem',
    'mobile spare parts in Lankelapalem',
    'smartphone shop near Sabbavaram Road',
    'phone screen and display repair',
    'mobile battery replacement',
    'phone charging and audio repair',
  ],
  knowsAbout: [
    'Smartphones and mobile phone accessories',
    'Mobile phone display and touch repair enquiries',
    'Mobile phone battery replacement enquiries',
    'Mobile charging, audio, software and camera repair enquiries',
    'Model-matched mobile phone spare parts',
  ],
};

if (siteUrl) {
  business.url = `${siteUrl}/`;
  business.image = `${siteUrl}/images/shop-front.jpg`;
  business['@id'] = `${siteUrl}/#business`;
}

const escapeHtml = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
const deployTags = siteUrl
  ? [
      `<link rel="canonical" href="${siteUrl}/" />`,
      `<meta property="og:url" content="${siteUrl}/" />`,
      `<meta property="og:image" content="${siteUrl}/images/shop-front.jpg" />`,
      `<meta name="twitter:image" content="${siteUrl}/images/shop-front.jpg" />`,
    ]
  : [];

if (config.googleSiteVerification?.trim()) {
  deployTags.push(`<meta name="google-site-verification" content="${escapeHtml(config.googleSiteVerification.trim())}" />`);
}

deployTags.push(`<script type="application/ld+json">${JSON.stringify(business).replaceAll('<', '\\u003c')}</script>`);

const indexPath = resolve(distDir, 'index.html');
let html = await readFile(indexPath, 'utf8');
if (!html.includes('<!-- SITE_SEO_TAGS -->')) {
  throw new Error('Could not find the SITE_SEO_TAGS marker in dist/index.html.');
}
html = html.replace('<!-- SITE_SEO_TAGS -->', deployTags.join('\n    '));
await writeFile(indexPath, html);

const robotsLines = ['User-agent: *', 'Allow: /'];
if (siteUrl) robotsLines.push(`Sitemap: ${siteUrl}/sitemap.xml`);
await writeFile(resolve(distDir, 'robots.txt'), `${robotsLines.join('\n')}\n`);

if (siteUrl) {
  const xmlUrl = escapeHtml(`${siteUrl}/`);
  await writeFile(resolve(distDir, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${xmlUrl}</loc></url>\n</urlset>\n`);
  console.log(`SEO sitemap and canonical URLs generated for ${siteUrl}`);
} else {
  await rm(resolve(distDir, 'sitemap.xml'), { force: true });
  console.warn('SITE_URL is not configured: canonical URLs and sitemap were skipped. Set seo.config.json siteUrl before publishing.');
}
