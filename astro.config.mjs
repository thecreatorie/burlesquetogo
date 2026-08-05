import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';

// IMPORTANT: replace `site` with the production URL during design-theme phase.
// The seo-ai-optimize phase will also populate the `redirects` map from url-map.json.
export default defineConfig({
  site: 'https://burlesquetogo.com',
  trailingSlash: 'never',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      lastmod: new Date(),
      filter: (page) =>
        !page.includes('/draft/') &&
        !page.includes('/_theme-preview') &&
        !page.endsWith('/thanks'),
    }),
    compress({
      HTML: true,
      CSS: true,
      JavaScript: true,
      Image: false, // Astro handles images already
      SVG: true,
    }),
  ],
  // Populated by seo-ai-optimize from url-map.json
  redirects: {
    '/about-us': '/about',
    '/all-posts': '/',
    '/cart': '/book',
    '/checkout': '/book',
    '/coming-soon': '/',
    '/gallery': '/dancers',
    '/layouts/coming-soon-header': '/',
    '/layouts/footer-beuaty-salon': '/',
    '/layouts/footer-center': '/',
    '/layouts/footer-main-new': '/',
    '/layouts/footer-simple': '/',
    '/layouts/header-beuaty-salon': '/',
    '/layouts/header-beuaty-salon-bc': '/',
    '/layouts/header-btn-nails': '/',
    '/layouts/header-global': '/',
    '/layouts/header-over': '/',
    '/layouts/header-over-center': '/',
    '/layouts/header-short-2': '/',
    '/my-account': '/book',
    '/our-services': '/',
    '/our-team': '/dancers',
    '/privacy-policy': '/privacy',
    '/service-plus': '/',
    '/shop': '/book',
    '/shortcodes': '/',
    '/simple-gallery': '/',
    '/team/dakota': '/dancers/dakota',
    '/team/dani-steel': '/dancers/dani-steel',
    '/team/fawnia': '/dancers/fawnia',
    '/team/holly-weed': '/dancers/holly-weed',
    '/team/infiniti': '/dancers/infiniti',
    '/team/jade': '/dancers',
    '/team/jonny': '/dancers/jonny',
    '/team/margarita': '/dancers/margarita',
    '/team/nyrita': '/dancers/nyrita',
    '/team/rose-holiday': '/dancers/rose-holiday',
    '/team/sophie': '/dancers/sophie',
    '/team/stella-noir': '/dancers/stella-noir',
    '/team/urtreen': '/dancers/urtreen',
    '/team_group/boylesque': '/dancers/boylesque',
    '/team_group/dancers': '/dancers',
    '/team_group/dancers/page/2': '/dancers',
    '/test-page': '/',
    '/typography': '/'
  },
});
