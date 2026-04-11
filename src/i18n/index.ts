import en from './en.json';
import zh from './zh.json';
import type { Locale } from '../config/site';

export const translations = { en, zh } as const;

export type Translation = typeof en;

/**
 * Get the translation dictionary for a locale.
 * Used inside .astro files: `const t = useTranslations(Astro.currentLocale)`
 */
export const useTranslations = (locale: string | undefined): Translation => {
  const key = (locale ?? 'en') as Locale;
  return translations[key] ?? translations.en;
};
