import { useState, useEffect } from 'react';
import { t } from '../config';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: Props) {
  const [local, setLocal] = useState(value);

  // Sync from parent when URL params change externally
  useEffect(() => {
    setLocal(value);
  }, [value]);

  return (
    <input
      className="search-input"
      type="search"
      value={local}
      onChange={(e) => {
        setLocal(e.target.value);
        onChange(e.target.value);
      }}
      placeholder={t('SEARCH') || 'Search laws, countries, organizations...'}
      autoComplete="off"
    />
  );
}
