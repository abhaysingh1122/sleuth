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
      {/* logo — click 3× for Sherlock mode */}
      <div className="brand logo-hint" onClick={onLogoClick} title="click me three times…">
        <Stickman size={82} sherlock={sherlock} />
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

      <div className="sidebar-foot tiny muted">
        <p>every number here is scraped &amp; real.</p>
        <p>nothing is made up.</p>
      </div>
    </aside>
  );
}
