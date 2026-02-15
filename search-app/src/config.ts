import type { AppConfig } from './types';

declare global {
  interface Window {
    __LAWBRARY_CONFIG__?: AppConfig;
  }
}

export function getConfig(): AppConfig {
  return window.__LAWBRARY_CONFIG__ ?? {
    lang: 'en',
    translations: {},
    baseDomain: 'lawbrary.org',
  };
}

export function t(key: string): string {
  const config = getConfig();
  return config.translations[key] ?? key;
}
