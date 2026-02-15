import { SearchBar } from './SearchBar';

interface Props {
  query: string;
  onQueryChange: (q: string) => void;
}

export function Header({ query, onQueryChange }: Props) {
  return (
    <header className="app-header">
      <a className="header-logo" href="/">
        <img src="/images/favicon.ico" alt="Lawbrary" width="40" height="40" />
      </a>
      <div className="header-title">Lawbrary</div>
      <div className="header-search">
        <SearchBar value={query} onChange={onQueryChange} />
      </div>
    </header>
  );
}
