/**
 * Metatree Lab — Global site config
 * Single source of truth for brand info, contact, and locales.
 */

export const siteConfig = {
  name: 'Metatree Lab',

  tagline: {
    en: 'We build systems that ship.',
    zh: '我们做真正上线的系统。',
  },

  description: {
    en: 'A digital studio from JR Academy. AI for teams that build. Marketing for Australian property developers. Shipped with the same engineering obsession.',
    zh: '匠人学院旗下的 Digital Studio。给技术团队做 AI，给澳洲房产团队做营销 — 同一种工程师的偏执，两种不同的产出。',
  },

  url: 'https://metatreelab.ai',
  repo: 'https://github.com/JR-Academy-AI/metatreelab-ai',

  parent: {
    name: 'JR Academy',
    nameZh: '匠人学院',
    url: 'https://jiangren.com.au',
    yearsInProduction: 5,
  },

  contact: {
    email: 'hello@jiangren.com.au',
    phone: '+61 421 672 555',
    apiUrl: 'https://api.jiangren.com.au/business-inquiry',
  },

  offices: [
    { city: 'Brisbane', address: 'Level 10b, 144 Edward Street, Brisbane QLD 4000' },
    { city: 'Melbourne', address: 'Level 2, 171 La Trobe St, Melbourne VIC 3000' },
    { city: 'Adelaide', address: 'Business Hub, 155 Waymouth St, Adelaide SA 5000' },
  ],

  social: {
    github: 'https://github.com/JR-Academy-AI',
    linkedin: 'https://linkedin.com/school/jr-academy',
    instagram: 'https://www.instagram.com/jracademyau/',
  },

  locales: ['en', 'zh'] as const,
  defaultLocale: 'en' as const,
} as const;

export type Locale = (typeof siteConfig.locales)[number];

export const isDefaultLocale = (locale: string): locale is 'en' =>
  locale === siteConfig.defaultLocale;

/** Prefix a path with locale when not default. '/about' -> '/zh/about/' */
export const localizedHref = (path: string, locale: Locale): string => {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return isDefaultLocale(locale) ? normalized : `/zh${normalized}`;
};
