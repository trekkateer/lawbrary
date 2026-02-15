interface Props {
  type: 'country' | 'division' | 'organization' | 'law';
  id: string;
  name: string;
  emoji?: string;
  enactDate?: string;
  country?: string;
}

const TYPE_LABELS: Record<string, string> = {
  country: 'Country',
  division: 'Division',
  organization: 'Organization',
  law: 'Law',
};

function getHref(type: string, id: string): string {
  switch (type) {
    case 'country':
      return `/country.php?id=${id.toLowerCase()}`;
    case 'division':
      return `/division.php?id=${id.toLowerCase()}`;
    case 'organization':
      return `/organization.php?id=${id.toLowerCase()}`;
    case 'law':
      return `/law.php?id=${id}`;
    default:
      return '#';
  }
}

export function ResultCard({ type, id, name, emoji, enactDate, country }: Props) {
  return (
    <a className="result-card" href={getHref(type, id)}>
      <div className="result-card-left">
        {emoji && <span className="result-emoji">{emoji}</span>}
        <div className="result-info">
          <span className="result-name">{name || id}</span>
          <span className="result-meta">
            <span className="result-type-badge">{TYPE_LABELS[type]}</span>
            {country && <span className="result-country">{country}</span>}
            {enactDate && <span className="result-date">{enactDate}</span>}
          </span>
        </div>
      </div>
    </a>
  );
}
