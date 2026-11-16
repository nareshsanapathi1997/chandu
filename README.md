# Chandu Mobile Care — React single-page website

A responsive premium-dark landing page for a mobile sales, accessories, spare-parts and repair shop.

## Shop details configured
- Name: Chandu Mobile Care
- Location: Lankelapalem, Andhra Pradesh
- Phone / WhatsApp: +91 7036859233
- Brands: All major brands

## Features
- Responsive single-page layout with mobile navigation
- Accessible dark / light theme toggle with saved browser preference and system-theme default
- Product category catalogue and category search
- WhatsApp enquiries from product cards and call-to-action buttons
- Repair enquiry form that opens a pre-filled WhatsApp message
- Google Maps embed and directions link for Lankelapalem
- Offers / promotions enquiry section
- Customer feedback invitation (does not invent or display fake reviews)
- Click-to-call and floating WhatsApp contact
- Local SEO metadata, `ElectronicsStore` structured data, a root-level `llms.txt`, crawler rules, and a domain-aware sitemap generator
- SVG favicon and web app manifest for browser/app identity

## Run locally

Requires Node.js 18+.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. For a production build:

```bash
npm run build
npm run preview
```

Before publishing, set `siteUrl` in `seo.config.json` to the final HTTPS website origin (for example `https://chandumobilecare.in`) and rebuild. The build then writes the canonical URL, social preview image URLs, `robots.txt` sitemap reference, and `sitemap.xml`. If this site is verified in Google Search Console, add the verification token to `googleSiteVerification` in the same file and rebuild.

## Before publishing
1. Confirm the shop's exact map pin/address and replace the Lankelapalem map query in `src/App.jsx` and the matching coordinates in `scripts/generate-seo.mjs` if needed.
2. Add real product names, prices, stock and photographs if you want a live inventory catalogue. The current catalogue is category-led and uses enquiry buttons.
3. Add actual opening hours and genuine customer reviews only after the shop confirms them.
4. Replace the social links if the shop has official social profiles (none have been assumed).
5. Keep the shop's public name, address, and phone number consistent with its Google Business Profile. Do not add unverified opening hours, prices, stock, or review ratings to structured data.
6. Google does not use the `meta keywords` tag. Search phrases are placed in natural page copy and local business entity metadata instead. `llms.txt` is an emerging proposal and does not guarantee AI search citations or rankings.

## Deploy
The project can be deployed to Vercel, Netlify or any static host. Import the folder/repository, use `npm run build` as the build command and `dist` as the output directory.
