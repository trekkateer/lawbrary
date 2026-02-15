interface Props {
  sort: string;
  order: string;
  total: number;
  onSortChange: (sort: string) => void;
  onOrderChange: (order: string) => void;
}

export function SortControls({ sort, order, total, onSortChange, onOrderChange }: Props) {
  return (
    <div className="sort-controls">
      <span className="sort-total">{total.toLocaleString()} result{total !== 1 ? 's' : ''}</span>
      <div className="sort-right">
        <label className="sort-label">Sort by</label>
        <select
          className="sort-select"
          value={sort}
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="enactDate">Date</option>
          <option value="name">Name</option>
        </select>
        <button
          className="sort-order-btn"
          onClick={() => onOrderChange(order === 'asc' ? 'desc' : 'asc')}
          title={order === 'asc' ? 'Ascending' : 'Descending'}
        >
          {order === 'asc' ? '\u2191' : '\u2193'}
        </button>
      </div>
    </div>
  );
}
