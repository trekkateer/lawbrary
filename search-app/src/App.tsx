import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from './hooks/useSearchParams';
import { useDebounce } from './hooks/useDebounce';
import { searchAll } from './api';
import { Header } from './components/Header';
import { FilterPanel } from './components/FilterPanel';
import { SortControls } from './components/SortControls';
import { ResultsList } from './components/ResultsList';
import { Pagination } from './components/Pagination';
import { BrowseView } from './components/BrowseView';
import type { SearchResponse } from './types';

export function App() {
  const [params, updateParams] = useSearchParams();
  const [results, setResults] = useState<SearchResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const debouncedQuery = useDebounce(params.q, 300);

  // Determine if we're in "search mode" (any filter or query active)
  const isSearchActive = !!(
    debouncedQuery || params.country || params.division || params.type || params.yearFrom || params.yearTo
  );

  const doSearch = useCallback(async () => {
    if (!isSearchActive) {
      setResults(null);
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const data = await searchAll({ ...params, q: debouncedQuery });
      setResults(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Search failed');
    } finally {
      setLoading(false);
    }
  }, [debouncedQuery, params.country, params.division, params.type, params.yearFrom, params.yearTo, params.sort, params.order, params.page, isSearchActive]);

  useEffect(() => {
    doSearch();
  }, [doSearch]);

  return (
    <div className="app">
      <Header
        query={params.q}
        onQueryChange={(q) => updateParams({ q })}
      />
      <div className="app-body">
        <FilterPanel params={params} onUpdate={updateParams} />
        <main className="app-main">
          {isSearchActive && results && (
            <SortControls
              sort={params.sort}
              order={params.order}
              total={results.lawsTotal}
              onSortChange={(sort) => updateParams({ sort })}
              onOrderChange={(order) => updateParams({ order })}
            />
          )}

          {loading && <div className="loading">Searching...</div>}
          {error && <div className="error-msg">{error}</div>}

          {!isSearchActive && !loading && (
            <BrowseView
              onCountrySelect={(country) => updateParams({ country })}
              onTypeSelect={(type) => updateParams({ type })}
            />
          )}

          {isSearchActive && results && !loading && (
            <>
              <ResultsList data={results} />
              <Pagination
                page={params.page}
                total={results.lawsTotal}
                limit={results.limit}
                onPageChange={(page) => updateParams({ page })}
              />
            </>
          )}
        </main>
      </div>
    </div>
  );
}
