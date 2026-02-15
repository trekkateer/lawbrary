import { useState, useEffect } from 'react';
import { fetchCountries } from '../api';
import type { Country } from '../types';

interface Props {
  onCountrySelect: (id: string) => void;
  onTypeSelect: (type: string) => void;
}

const CATEGORIES = [
  { type: 'law', label: 'Laws', desc: 'Browse enacted legislation' },
  { type: 'country', label: 'Countries', desc: 'Browse by country' },
  { type: 'division', label: 'Divisions', desc: 'Browse states, provinces & regions' },
  { type: 'organization', label: 'Organizations', desc: 'International bodies & treaties' },
];

export function BrowseView({ onCountrySelect, onTypeSelect }: Props) {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    fetchCountries().then(setCountries).catch(console.error);
  }, []);

  return (
    <div className="browse-view">
      <h2 className="browse-heading">Browse the Legal Corpus</h2>
      <p className="browse-subtitle">Search above or browse by category</p>

      <div className="browse-categories">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.type}
            className="browse-card"
            onClick={() => onTypeSelect(cat.type)}
          >
            <h3 className="browse-card-title">{cat.label}</h3>
            <p className="browse-card-desc">{cat.desc}</p>
          </button>
        ))}
      </div>

      {countries.length > 0 && (
        <>
          <h3 className="browse-subheading">Countries</h3>
          <div className="browse-country-grid">
            {countries.map((c) => (
              <button
                key={c.id}
                className="browse-country-btn"
                onClick={() => onCountrySelect(c.id)}
              >
                <span className="browse-country-emoji">{c.emoji}</span>
                <span className="browse-country-name">{c.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
