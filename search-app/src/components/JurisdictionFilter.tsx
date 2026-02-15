import { useState, useEffect } from 'react';
import { fetchCountries, fetchDivisions } from '../api';
import type { Country, Division } from '../types';

interface Props {
  country: string;
  division: string;
  onCountryChange: (id: string) => void;
  onDivisionChange: (id: string) => void;
}

export function JurisdictionFilter({ country, division, onCountryChange, onDivisionChange }: Props) {
  const [countries, setCountries] = useState<Country[]>([]);
  const [divisions, setDivisions] = useState<Division[]>([]);

  useEffect(() => {
    fetchCountries().then(setCountries).catch(console.error);
  }, []);

  useEffect(() => {
    if (country) {
      fetchDivisions(country).then(setDivisions).catch(console.error);
    } else {
      setDivisions([]);
    }
  }, [country]);

  return (
    <div className="filter-group">
      <label className="filter-label">Jurisdiction</label>
      <select
        className="filter-select"
        value={country}
        onChange={(e) => {
          onCountryChange(e.target.value);
          onDivisionChange('');
        }}
      >
        <option value="">All Countries</option>
        {countries.map((c) => (
          <option key={c.id} value={c.id}>
            {c.emoji} {c.name}
          </option>
        ))}
      </select>
      {divisions.length > 0 && (
        <select
          className="filter-select"
          value={division}
          onChange={(e) => onDivisionChange(e.target.value)}
        >
          <option value="">All Divisions</option>
          {divisions.map((d) => (
            <option key={d.id} value={d.id}>
              {d.name}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
