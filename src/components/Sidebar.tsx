import Stickman from './Stickman';

export type View = 'home' | 'dashboard' | 'audit' | 'compare' | 'ask';

const items: { id: View; label: string; doodle: string }[] = [
  { id: 'home',      label: 'Home',        doodle: '🏠' },
  { id: 'dashboard', label: 'The Watchlist', doodle: '👁' },
  { id: 'audit',     label: 'Audit Me',    doodle: '🪞' },
  { id: 'compare',   label: 'Me vs Them',  doodle: '⚔' },
  { id: 'ask',       label: 'Just Ask',    doodle: '💬' },
];

interface Props {
  view: View;
  setView: (v: View) => void;
  sherlock: boolean;
  onLogoClick: () => void;
}

export default function Sidebar({ view, setView, sherlock, onLogoClick }: Props) {
  return (
    <aside className="sidebar">
      {/* logo — click 3× for Sherlock mode (no hint; people find it) */}
      <div className="brand logo-hint" onClick={onLogoClick} title="hmm…">
        <Stickman size={70} sherlock={sherlock} />
        <div>
          <h1 className="brand-name">Sleuth</h1>
          <p className="tiny serif">the case never closes.</p>
          <span className="sherlock-tag">Sherlock.</span>
        </div>
      </div>

      <hr className="rule" />

      <nav className="nav">
        {items.map((it) => (
          <button
            key={it.id}
            className={`nav-item ${view === it.id ? 'active' : ''}`}
            onClick={() => setView(it.id)}
          >
            <span className="nav-doodle">{it.doodle}</span>
            {it.label}
          </button>
        ))}
      </nav>

      {/* scattered easter-egg doodles in the empty space */}
      <div className="doodles" aria-hidden="true">
        <svg className="doodle-eyes" viewBox="0 0 60 30" width="54"
          fill="none" stroke="var(--ink)" strokeWidth={2} strokeLinecap="round">
          <ellipse cx="16" cy="15" rx="12" ry="9" />
          <ellipse cx="44" cy="15" rx="12" ry="9" />
          <circle cx="19" cy="16" r="3.2" fill="var(--ink)" stroke="none" />
          <circle cx="47" cy="16" r="3.2" fill="var(--ink)" stroke="none" />
        </svg>
        <svg className="doodle-glass" viewBox="0 0 60 60" width="66"
          fill="none" stroke="var(--gold)" strokeWidth={3} strokeLinecap="round">
          <circle cx="24" cy="24" r="16" />
          <path d="M36 36 L52 52" />
        </svg>
      </div>

      <div className="sidebar-foot tiny muted">
        <p>every number here is scraped &amp; real.</p>
        <p>nothing is made up.</p>
      </div>
    </aside>
  );
}
