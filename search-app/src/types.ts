export interface Country {
  id: string;
  name: string;
  emoji: string;
}

export interface Division {
  id: string;
  name: string;
}

export interface Organization {
  id: string;
  name: string;
}

export interface Law {
  id: string;
  name: string;
  enactDate: string;
  country: string;
}

export interface SearchResponse {
  query: string;
  countries: Country[];
  divisions: Division[];
  organizations: Organization[];
  laws: Law[];
  lawsTotal: number;
  page: number;
  limit: number;
}

export interface SearchParams {
  q: string;
  country: string;
  division: string;
  type: string;
  yearFrom: string;
  yearTo: string;
  sort: string;
  order: string;
  page: number;
}

export interface Translations {
  [key: string]: string;
}

export interface AppConfig {
  lang: string;
  translations: Translations;
  baseDomain: string;
}
