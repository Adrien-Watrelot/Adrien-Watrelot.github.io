import fr from './fr.json';
import en from './en.json';

export const languages = {
  fr: 'Français',
  en: 'English',
} as const;

export type Locale = keyof typeof languages;

export const defaultLocale: Locale = 'fr';

export const translations = {
  fr,
  en,
} as const;

/**
 * Get translation value by key path
 * @param locale - Current locale
 * @param key - Translation key (e.g., 'nav.home')
 */
export function t(locale: Locale, key: string): string {
  const keys = key.split('.');
  let value: any = translations[locale];

  for (const k of keys) {
    value = value?.[k];
  }

  return typeof value === 'string' ? value : key;
}

/**
 * Get locale from URL pathname
 * @param pathname - URL pathname
 */
export function getLocaleFromUrl(pathname: string): Locale {
  const match = pathname.match(/^\/(fr|en)\//);
  if (match) {
    return match[1] as Locale;
  }
  return defaultLocale;
}

/**
 * Get localized path
 * @param locale - Target locale
 * @param path - Path without locale prefix
 */
export function getLocalizedPath(locale: Locale, path: string = ''): string {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `/${locale}/${cleanPath}`;
}

/**
 * Switch language while preserving the current page
 * @param currentPath - Current URL pathname
 * @param targetLocale - Target locale
 */
export function switchLanguage(currentPath: string, targetLocale: Locale): string {
  // Remove current locale prefix
  const pathWithoutLocale = currentPath.replace(/^\/(fr|en)/, '');
  return getLocalizedPath(targetLocale, pathWithoutLocale);
}
