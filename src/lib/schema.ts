/**
 * JSON-LD schema builders.
 *
 * Pure functions that turn typed app data into schema.org objects.
 * Output is fed to <Schema /> which serializes to <script type="application/ld+json">.
 *
 * Schema.org types used:
 * - Organization (Metatree Lab itself, parent JR Academy as parentOrganization)
 * - WebSite (with publisher ref to Organization)
 * - ProfessionalService / LocalBusiness (per office)
 * - Service (per service entry, with provider ref)
 * - CreativeWork (per project case study)
 * - Person (per consultant, with worksFor ref)
 * - ItemList (wraps lists for index pages)
 * - BreadcrumbList (per page navigation trail)
 * - AboutPage / ContactPage / WebPage (page typing)
 *
 * @id refs use absolute URLs anchored at siteConfig.url so cross-page references resolve.
 */

import { siteConfig, localizedHref, type Locale } from '../config/site';
import type { ServiceEntry } from '../data/services';
import type { ProjectEntry } from '../data/projects';
import type { ConsultantEntry } from '../data/consultants';

const ORG_ID = `${siteConfig.url}/#organization`;
const WEBSITE_ID = `${siteConfig.url}/#website`;
const PARENT_ORG_ID = `${siteConfig.parent.url}/#organization`;

const inLanguage = (locale: Locale): string => (locale === 'zh' ? 'zh-CN' : 'en-AU');

const absoluteUrl = (path: string, locale: Locale): string =>
  new URL(localizedHref(path, locale), siteConfig.url).toString();

const orgRef = () => ({ '@id': ORG_ID });

/** Strip "Level X, " prefix and split "Address, City STATE Postcode" into postal parts. */
function parseAddress(address: string): {
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
} {
  const match = address.match(/^(.+?),\s*([A-Za-z\s]+?)\s+([A-Z]{2,3})\s+(\d{4})$/);
  if (!match) {
    return { streetAddress: address, addressLocality: '', addressRegion: '', postalCode: '' };
  }
  const [, streetAddress, addressLocality, addressRegion, postalCode] = match;
  return {
    streetAddress: streetAddress.trim(),
    addressLocality: addressLocality.trim(),
    addressRegion: addressRegion.trim(),
    postalCode: postalCode.trim(),
  };
}

export function buildOrganization(locale: Locale) {
  const headOffice = siteConfig.offices[0];
  const postal = parseAddress(headOffice.address);

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: siteConfig.name,
    alternateName: locale === 'zh' ? 'Metatree AI 实验室' : undefined,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    image: `${siteConfig.url}/og.svg`,
    description: siteConfig.description[locale],
    slogan: siteConfig.tagline[locale],
    foundingDate: '2024',
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.github,
      siteConfig.social.instagram,
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: postal.streetAddress,
      addressLocality: postal.addressLocality,
      addressRegion: postal.addressRegion,
      postalCode: postal.postalCode,
      addressCountry: 'AU',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: siteConfig.contact.email,
        telephone: siteConfig.contact.phone,
        areaServed: ['AU', 'CN', 'NZ', 'SG'],
        availableLanguage: ['en', 'zh'],
      },
    ],
    parentOrganization: {
      '@type': 'Organization',
      '@id': PARENT_ORG_ID,
      name: siteConfig.parent.name,
      alternateName: siteConfig.parent.nameZh,
      url: siteConfig.parent.url,
    },
  };
}

export function buildWebSite(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description[locale],
    inLanguage: [inLanguage('en'), inLanguage('zh')],
    publisher: orgRef(),
  };
}

export function buildLocalBusiness(office: (typeof siteConfig.offices)[number], locale: Locale) {
  const postal = parseAddress(office.address);
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${siteConfig.url}/#office-${office.city.toLowerCase()}`,
    name: `${siteConfig.name} — ${office.city}`,
    parentOrganization: orgRef(),
    url: absoluteUrl('/contact/', locale),
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    image: `${siteConfig.url}/og.svg`,
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: postal.streetAddress,
      addressLocality: postal.addressLocality,
      addressRegion: postal.addressRegion,
      postalCode: postal.postalCode,
      addressCountry: 'AU',
    },
    areaServed: [
      { '@type': 'Country', name: 'Australia' },
      { '@type': 'Country', name: 'China' },
    ],
  };
}

const TRACK_LABELS: Record<ServiceEntry['track'], { en: string; zh: string }> = {
  build: { en: 'AI Build', zh: 'AI 定制开发' },
  adopt: { en: 'AI Adopt', zh: 'AI 落地导入' },
  'digital-employee': { en: 'AI Digital Employee', zh: 'AI 数字员工' },
  property: { en: 'Property Marketing', zh: '房产营销' },
};

export function buildService(entry: ServiceEntry, locale: Locale) {
  const trackLabel = TRACK_LABELS[entry.track][locale];
  const trackPath =
    entry.track === 'property'
      ? '/services/property/'
      : entry.track === 'digital-employee'
        ? '/services/digital-employee/'
        : '/services/ai/';

  return {
    '@type': 'Service',
    '@id': `${siteConfig.url}/#service-${entry.slug}`,
    name: entry.title[locale],
    alternateName: entry.subtitle[locale],
    description: entry.summary[locale],
    serviceType: trackLabel,
    category: trackLabel,
    provider: orgRef(),
    url: absoluteUrl(trackPath, locale),
    areaServed: [
      { '@type': 'Country', name: 'Australia' },
      { '@type': 'Country', name: 'China' },
    ],
    audience: {
      '@type': 'BusinessAudience',
      audienceType: 'Enterprise, SMB, Startup',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${entry.title[locale]} — ${locale === 'zh' ? '交付物' : 'Deliverables'}`,
      itemListElement: entry.deliverables[locale].map((d, i) => ({
        '@type': 'Offer',
        position: i + 1,
        itemOffered: { '@type': 'Service', name: d },
      })),
    },
  };
}

const CATEGORY_LABELS: Record<ProjectEntry['category'], { en: string; zh: string }> = {
  'ai-systems': { en: 'AI Systems', zh: 'AI 系统' },
  property: { en: 'Property Marketing', zh: '房产营销' },
  brand: { en: 'Brand & Identity', zh: '品牌设计' },
};

export function buildCreativeWork(project: ProjectEntry, locale: Locale) {
  return {
    '@type': 'CreativeWork',
    '@id': `${siteConfig.url}/#work-${project.slug}`,
    name: project.name,
    description: project.summary[locale],
    url: absoluteUrl(`/work/${project.slug}/`, locale),
    creator: orgRef(),
    sourceOrganization: orgRef(),
    about: CATEGORY_LABELS[project.category][locale],
    dateCreated: String(project.year),
    keywords: [...project.tags, ...(project.stack ?? [])].join(', '),
    sponsor: project.client ? { '@type': 'Organization', name: project.client } : undefined,
    inLanguage: inLanguage(locale),
    ...(project.outcomes && {
      mentions: project.outcomes[locale].map((o) => ({ '@type': 'Thing', name: o })),
    }),
  };
}

export function buildPerson(consultant: ConsultantEntry, locale: Locale) {
  const [primaryTag, ...otherTags] = consultant.tags;
  return {
    '@type': 'Person',
    '@id': `${siteConfig.url}/#person-${consultant.slug}`,
    name: consultant.name,
    jobTitle: primaryTag,
    description: consultant.profile[locale],
    image: `${siteConfig.url}${consultant.avatar}`,
    knowsAbout: otherTags,
    worksFor: orgRef(),
    address: {
      '@type': 'PostalAddress',
      addressLocality: consultant.city[locale],
      addressCountry: 'AU',
    },
  };
}

export interface BreadcrumbItem {
  name: string;
  /** Omit for the final crumb (current page) — schema.org allows a trailing item with no url. */
  path?: string;
}

export function buildBreadcrumb(items: BreadcrumbItem[], locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      ...(item.path ? { item: absoluteUrl(item.path, locale) } : {}),
    })),
  };
}

type BreadcrumbLabels = {
  home: string;
  services: string;
  services_ai: string;
  services_digital_employee: string;
  services_property: string;
  use_cases: string;
  work: string;
  consultants: string;
  about: string;
  contact: string;
  deck: string;
  quote: string;
  showcase: string;
};

/**
 * Derive a breadcrumb trail from the URL path.
 * Returns null when no breadcrumb is meaningful (root, 404, thanks).
 */
export function breadcrumbsForPath(
  path: string,
  labels: BreadcrumbLabels,
): BreadcrumbItem[] | null {
  const clean = path.replace(/^\/zh/, '').replace(/\/$/, '') || '/';
  if (clean === '/' || clean === '/404' || clean === '/thanks') return null;

  const home: BreadcrumbItem = { name: labels.home, path: '/' };
  const segments = clean.split('/').filter(Boolean);

  // /services
  // /services/ai -> Home > Services > AI Build & Adopt
  // /services/digital-employee/use-cases -> Home > Services > Digital Employee > Use Cases
  // /work -> Home > Case Studies
  // /work/[slug] -> Home > Case Studies > [Slug]
  // /consultants, /about, /contact, /deck, /quote, /showcase/...
  if (segments[0] === 'services') {
    const trail: BreadcrumbItem[] = [home, { name: labels.services, path: '/services/' }];
    if (segments[1] === 'ai') trail.push({ name: labels.services_ai, path: '/services/ai/' });
    if (segments[1] === 'digital-employee') {
      trail.push({ name: labels.services_digital_employee, path: '/services/digital-employee/' });
      if (segments[2] === 'use-cases') {
        trail.push({ name: labels.use_cases, path: '/services/digital-employee/use-cases/' });
      }
    }
    if (segments[1] === 'property') trail.push({ name: labels.services_property, path: '/services/property/' });
    return trail;
  }

  if (segments[0] === 'work') {
    const trail: BreadcrumbItem[] = [home, { name: labels.work, path: '/work/' }];
    if (segments[1]) {
      // Slug crumb name is filled in by the page itself if needed; default to slug.
      trail.push({ name: segments[1], path: `/work/${segments[1]}/` });
    }
    return trail;
  }

  if (segments[0] === 'consultants') return [home, { name: labels.consultants, path: '/consultants/' }];
  if (segments[0] === 'about') return [home, { name: labels.about, path: '/about/' }];
  if (segments[0] === 'contact') return [home, { name: labels.contact, path: '/contact/' }];
  if (segments[0] === 'deck') return [home, { name: labels.deck, path: '/deck/' }];
  if (segments[0] === 'quote') return [home, { name: labels.quote, path: '/quote/' }];
  if (segments[0] === 'showcase') {
    return [home, { name: labels.showcase, path: '/showcase/' }];
  }

  return null;
}

export function buildItemList<T>(
  name: string,
  items: T[],
  builder: (item: T) => object,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: builder(item),
    })),
  };
}

export function buildAboutPage(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${absoluteUrl('/about/', locale)}#webpage`,
    url: absoluteUrl('/about/', locale),
    name: locale === 'zh' ? `关于我们 — ${siteConfig.name}` : `About — ${siteConfig.name}`,
    inLanguage: inLanguage(locale),
    isPartOf: { '@id': WEBSITE_ID },
    about: orgRef(),
    mainEntity: orgRef(),
  };
}

export function buildContactPage(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${absoluteUrl('/contact/', locale)}#webpage`,
    url: absoluteUrl('/contact/', locale),
    name: locale === 'zh' ? `联系我们 — ${siteConfig.name}` : `Contact — ${siteConfig.name}`,
    inLanguage: inLanguage(locale),
    isPartOf: { '@id': WEBSITE_ID },
    about: orgRef(),
  };
}
