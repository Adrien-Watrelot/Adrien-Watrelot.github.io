/**
 * Theme management script
 * Handles theme switching and persistence
 */

export type Theme = 'light' | 'dark';

const THEME_KEY = 'theme';

/**
 * Get the current theme from localStorage or system preference
 */
export function getTheme(): Theme {
  if (typeof window === 'undefined') return 'light';

  const stored = localStorage.getItem(THEME_KEY) as Theme | null;

  if (stored === 'light' || stored === 'dark') {
    return stored;
  }

  // Default to system preference
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/**
 * Set theme and persist to localStorage
 */
export function setTheme(theme: Theme): void {
  if (typeof window === 'undefined') return;

  localStorage.setItem(THEME_KEY, theme);

  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

/**
 * Toggle between light and dark themes
 */
export function toggleTheme(): void {
  const current = getTheme();
  const next: Theme = current === 'light' ? 'dark' : 'light';
  setTheme(next);
}

/**
 * Initialize theme on page load
 * This should be called inline in the <head> to prevent FOUC
 */
export function initTheme(): void {
  const theme = getTheme();
  setTheme(theme);
}
