import { useState, useEffect, useCallback } from 'react';
import type { SearchParams } from '../types';

const DEFAULTS: SearchParams = {
  q: '',
  country: '',
  division: '',
  type: '',
  yearFrom: '',
  yearTo: '',
  sort: 'enactDate',
  order: 'desc',
  page: 1,
};

function readFromUrl(): SearchParams {
  const sp = new URLSearchParams(window.location.search);
  return {
    q: sp.get('q') ?? '',
    country: sp.get('country') ?? '',
    division: sp.get('division') ?? '',
    type: sp.get('type') ?? '',
    yearFrom: sp.get('yearFrom') ?? '',
    yearTo: sp.get('yearTo') ?? '',
    sort: sp.get('sort') ?? 'enactDate',
    order: sp.get('order') ?? 'desc',
    page: Math.max(1, parseInt(sp.get('page') ?? '1', 10) || 1),
  };
}

function writeToUrl(params: SearchParams): void {
  const sp = new URLSearchParams();
  for (const [key, val] of Object.entries(params)) {
    const strVal = String(val);
    const defaultVal = String(DEFAULTS[key as keyof SearchParams]);
    if (strVal && strVal !== defaultVal) {
      sp.set(key, strVal);
    }
  }
  const qs = sp.toString();
  const newUrl = qs ? `?${qs}` : window.location.pathname;
  window.history.replaceState(null, '', newUrl);
}

export function useSearchParams(): [SearchParams, (updates: Partial<SearchParams>) => void] {
  const [params, setParams] = useState<SearchParams>(readFromUrl);

  // Listen for popstate (back/forward navigation)
  useEffect(() => {
    const handler = () => setParams(readFromUrl());
    window.addEventListener('popstate', handler);
    return () => window.removeEventListener('popstate', handler);
  }, []);

  const updateParams = useCallback((updates: Partial<SearchParams>) => {
    setParams((prev) => {
      // Reset page to 1 when changing filters (unless page itself is being set)
      const resetPage = !('page' in updates);
      const next = { ...prev, ...updates };
      if (resetPage) next.page = 1;
      writeToUrl(next);
      return next;
    });
  }, []);

  return [params, updateParams];
}
