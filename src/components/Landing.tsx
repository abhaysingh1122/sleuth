import Stickman from './Stickman';
import type { View } from './Sidebar';

const features = [
  { doodle: '👁', title: 'Watch them', body: 'Point it at a competitor’s LinkedIn, Instagram, X or website. It reads their whole post history and reports what they did while you weren’t looking.' },
  { doodle: '🗂', title: 'Decode the playbook', body: 'A full dossier of their hooks, cadence and top topics — so you can copy what works and skip what doesn’t.' },
  { doodle: '🪞', title: 'Audit yourself', body: 'It turns the lens around and tells you the truth about your own account. Every number scraped and real — nothing made up.' },
  { doodle: '⚔', title: 'Me vs Them', body: 'Splits the gap in two: structural (can’t copy) and algorithmic (steal today). The second list is your move.' },
];

export default function Landing({ sherlock, go }: { sherlock: boolean; go: (v: View) => void }) {
  return (
    <section className="landing">
      <div className="hero">
        <div className="hero-figure">
          <Stickman size={190} sherlock={sherlock} />
          <span className="sherlock-tag">Sherlock.</span>
        </div>
        <div className="hero-copy">
          <h1 className="hero-title">It watches them.<br />And it watches <span className="mark">you</span>.</h1>
          <p className="serif hero-sub">
            Everyone says “keep an eye on the competition.” Nobody does — because it means
            scrolling every platform every day and guessing what works. Sleuth does it for you.
          </p>
          <div className="hero-cta">
            <button className="btn primary" onClick={() => go('dashboard')}>Start watching →</button>
            <button className="btn" onClick={() => go('audit')}>Audit me first 🪞</button>
          </div>
          <p className="tiny muted psst">psst — tap the little guy up top three times. 🕵️</p>
        </div>
      </div>

      <hr className="rule" />

      <div className="feature-grid">
        {features.map((f, i) => (
          <div key={i} className={`sketch feature ${i % 2 ? 'alt tilt-r' : 'tilt-l'}`}>
            <span className="feature-doodle">{f.doodle}</span>
            <h3>{f.title}</h3>
            <p className="muted">{f.body}</p>
          </div>
        ))}
      </div>

      <div className="sketch promise gold-panel">
        <h3>The one rule</h3>
        <p className="serif read">
          Sleuth never invents a number. Every stat is computed from real scraped data —
          if it can’t prove it, it won’t say it.
        </p>
      </div>
    </section>
  );
}
