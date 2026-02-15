import { ResultCard } from './ResultCard';
import type { SearchResponse } from '../types';

interface Props {
  data: SearchResponse;
}

export function ResultsList({ data }: Props) {
  const hasEntities = data.countries.length > 0 || data.divisions.length > 0 || data.organizations.length > 0;
  const hasLaws = data.laws.length > 0;

  if (!hasEntities && !hasLaws) {
    return (
      <div className="results-empty">
        <p>No results found for &ldquo;{data.query}&rdquo;</p>
        <p>Try adjusting your search or filters.</p>
      </div>
    );
  }

  return (
    <div className="results-list">
      {data.countries.length > 0 && (
        <section className="results-section">
          <h3 className="results-section-title">Countries</h3>
          {data.countries.map((c) => (
            <ResultCard key={c.id} type="country" id={c.id} name={c.name} emoji={c.emoji} />
          ))}
        </section>
      )}

      {data.divisions.length > 0 && (
        <section className="results-section">
          <h3 className="results-section-title">Divisions</h3>
          {data.divisions.map((d) => (
            <ResultCard key={d.id} type="division" id={d.id} name={d.name} />
          ))}
        </section>
      )}

      {data.organizations.length > 0 && (
        <section className="results-section">
          <h3 className="results-section-title">Organizations</h3>
          {data.organizations.map((o) => (
            <ResultCard key={o.id} type="organization" id={o.id} name={o.name} />
          ))}
        </section>
      )}

      {hasLaws && (
        <section className="results-section">
          <h3 className="results-section-title">Laws</h3>
          {data.laws.map((l) => (
            <ResultCard
              key={l.id}
              type="law"
              id={l.id}
              name={l.name}
              enactDate={l.enactDate}
              country={l.country}
            />
          ))}
        </section>
      )}
    </div>
  );
}
