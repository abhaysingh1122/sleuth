import Stickman from './Stickman';

export type View = 'dashboard' | 'audit' | 'compare' | 'ask';

const items: { id: View; label: string; doodle: string }[] = [
  { id: 'dashboard', label: 'The Watchlist', doodle: '👁' },
  { id: 'audit',     label: 'Audit Me',      doodle: '🪞' },
  { id: 'compare',   label: 'Me vs Them',    doodle: '⚔' },
  { id: 'ask',       label: 'Just Ask',      doodle: '💬' },
];

export default function Sidebar({ view, setView }: { view: View; setView: (v: View) => void }) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <Stickman size={78} />
        <div>
          <h1 className="brand-name">SpyGlass</h1>
          <p className="tiny serif">it watches them. and it watches you.</p>
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
