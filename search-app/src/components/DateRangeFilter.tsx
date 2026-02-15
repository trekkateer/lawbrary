interface Props {
  yearFrom: string;
  yearTo: string;
  onYearFromChange: (y: string) => void;
  onYearToChange: (y: string) => void;
}

export function DateRangeFilter({ yearFrom, yearTo, onYearFromChange, onYearToChange }: Props) {
  return (
    <div className="filter-group">
      <label className="filter-label">Date Range</label>
      <div className="filter-date-range">
        <input
          className="filter-input"
          type="number"
          placeholder="From year"
          min="1"
          max="9999"
          value={yearFrom}
          onChange={(e) => onYearFromChange(e.target.value)}
        />
        <span className="filter-date-sep">&ndash;</span>
        <input
          className="filter-input"
          type="number"
          placeholder="To year"
          min="1"
          max="9999"
          value={yearTo}
          onChange={(e) => onYearToChange(e.target.value)}
        />
      </div>
    </div>
  );
}
