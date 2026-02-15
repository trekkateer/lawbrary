import { JurisdictionFilter } from './JurisdictionFilter';
import { TypeFilter } from './TypeFilter';
import { DateRangeFilter } from './DateRangeFilter';
import type { SearchParams } from '../types';

interface Props {
  params: SearchParams;
  onUpdate: (updates: Partial<SearchParams>) => void;
}

export function FilterPanel({ params, onUpdate }: Props) {
  return (
    <aside className="filter-panel">
      <h2 className="filter-heading">Filters</h2>
      <JurisdictionFilter
        country={params.country}
        division={params.division}
        onCountryChange={(country) => onUpdate({ country, division: '' })}
        onDivisionChange={(division) => onUpdate({ division })}
      />
      <TypeFilter
        value={params.type}
        onChange={(type) => onUpdate({ type })}
      />
      <DateRangeFilter
        yearFrom={params.yearFrom}
        yearTo={params.yearTo}
        onYearFromChange={(yearFrom) => onUpdate({ yearFrom })}
        onYearToChange={(yearTo) => onUpdate({ yearTo })}
      />
      {(params.country || params.division || params.type || params.yearFrom || params.yearTo) && (
        <button
          className="filter-clear"
          onClick={() => onUpdate({ country: '', division: '', type: '', yearFrom: '', yearTo: '' })}
        >
          Clear All Filters
        </button>
      )}
    </aside>
  );
}
