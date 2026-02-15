import type { Country, Division, SearchResponse, SearchParams } from './types';

const API_BASE = '/api';

async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }
  return res.json();
}

export async function fetchCountries(): Promise<Country[]> {
  return fetchJson<Country[]>(`${API_BASE}/countries.php`);
}

export async function fetchDivisions(country?: string): Promise<Division[]> {
  const params = country ? `?country=${encodeURIComponent(country)}` : '';
  return fetchJson<Division[]>(`${API_BASE}/divisions.php${params}`);
}

export async function searchAll(params: SearchParams): Promise<SearchResponse> {
  const qs = new URLSearchParams();
  if (params.q) qs.set('q', params.q);
  if (params.country) qs.set('country', params.country);
  if (params.division) qs.set('division', params.division);
  if (params.type) qs.set('type', params.type);
  if (params.yearFrom) qs.set('yearFrom', params.yearFrom);
  if (params.yearTo) qs.set('yearTo', params.yearTo);
  if (params.sort) qs.set('sort', params.sort);
  if (params.order) qs.set('order', params.order);
  qs.set('page', String(params.page));

  return fetchJson<SearchResponse>(`${API_BASE}/search.php?${qs.toString()}`);
}
