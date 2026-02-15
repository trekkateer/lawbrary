interface Props {
  value: string;
  onChange: (type: string) => void;
}

const TYPES = [
  { value: '', label: 'All Types' },
  { value: 'law', label: 'Laws' },
  { value: 'country', label: 'Countries' },
  { value: 'division', label: 'Divisions' },
  { value: 'organization', label: 'Organizations' },
];

export function TypeFilter({ value, onChange }: Props) {
  return (
    <div className="filter-group">
      <label className="filter-label">Type</label>
      <div className="filter-checkboxes">
        {TYPES.map((t) => (
          <label key={t.value} className="filter-checkbox">
            <input
              type="radio"
              name="type-filter"
              checked={value === t.value}
              onChange={() => onChange(t.value)}
            />
            {t.label}
          </label>
        ))}
      </div>
    </div>
  );
}
