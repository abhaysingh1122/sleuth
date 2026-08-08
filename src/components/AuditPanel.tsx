import { self, audit } from '../data/mock';

export default function AuditPanel() {
  return (
    <section>
      <header className="view-head">
        <h2>Audit Me 🪞</h2>
        <p className="muted serif">
          most tools only watch other people. this one turns around and tells <span className="mark">you</span> the truth.
        </p>
      </header>

      {/* the honest stat line */}
      <div className="stat-strip">
        <div className="sketch stat-box tilt-l"><b>{self.posts}</b><span className="tiny">posts</span></div>
        <div className="sketch stat-box"><b>{self.avgEngagement}</b><span className="tiny">avg engagement</span></div>
        <div className="sketch stat-box alt"><b>{self.postsPerWeek}</b><span className="tiny">posts / week</span></div>
        <div className="sketch stat-box tilt-r"><b>{self.totalShares}</b><span className="tiny">total shares</span></div>
      </div>

      <div className="sketch panel">
        <h3>What I see</h3>
        <p className="serif read">{audit.profileRead}</p>
      </div>

      <div className="two-col">
        <div className="sketch panel alt shaded-green">
          <h3 style={{ color: 'var(--green)' }}>✔ What’s working</h3>
          <ul className="doodle-list">
            {audit.whatsWorking.map((w, i) => <li key={i}>{w}</li>)}
          </ul>
        </div>

        <div className="sketch panel shaded-red">
          <h3 style={{ color: 'var(--red)' }}>✗ Where you bleed</h3>
          {audit.painPoints.map((p, i) => (
            <div key={i} className="pain">
              <b>{p.title}</b>
              <p className="tiny muted">{p.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="sketch panel shaded-gold tilt-r">
        <h3>⚡ Quick wins</h3>
        <ul className="doodle-list">
          {audit.quickWins.map((q, i) => <li key={i}>{q}</li>)}
        </ul>
      </div>
    </section>
  );
}
