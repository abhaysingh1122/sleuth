import Mascot from './Mascot';
import type { View } from './Sidebar';

const features = [
  { doodle: '👁', title: 'Watch them', body: 'Point it at a competitor’s LinkedIn, Instagram, X or website. It reads their whole post history and reports what they did while you weren’t looking.' },
  { doodle: '🗂', title: 'Decode the playbook', body: 'A full dossier of their hooks, cadence and top topics — so you can copy what works and skip what doesn’t.' },
  { doodle: '🪞', title: 'Audit yourself', body: 'It turns the lens around and tells you the truth about your own account. Every number scraped and real — nothing made up.' },
  { doodle: '⚔', title: 'Me vs Them', body: 'Splits the gap in two: structural (can’t copy) and algorithmic (steal today). The second list is your move.' },
];

// The interface speaks differently once Sherlock is on the case.
const copy = {
  normal: {
    title: <>It watches them.<br />And it watches <span className="mark">you</span>.</>,
    sub: 'Your rivals leave clues in every post — a hook here, a rhythm there. Sleuth reads them all, remembers everything, and shows you exactly what works. No scrolling. No guessing.',
  },
  sherlock: {
    title: <>Observe. Deduce.<br /><span className="mark">Overtake</span>.</>,
    sub: 'Every rival leaves a trail — a phrase, a habit, the very hour they post. I gather the evidence across every platform and deduce precisely why they win, and how you shall. Elementary, once one troubles to look.',
  },
};

export default function Landing({ sherlock, go }: { sherlock: boolean; go: (v: View) => void }) {
  const c = sherlock ? copy.sherlock : copy.normal;
  return (
    <section className="landing">
      <div className="hero">
        <div className="hero-figure">
          <Mascot size={190} sherlock={sherlock} />
          <span className="sherlock-tag">Sherlock.</span>
        </div>
        <div className="hero-copy">
          <h1 className="hero-title">{c.title}</h1>
          <p className="serif hero-sub">{c.sub}</p>
          <div className="hero-cta">
            <button className="btn primary" onClick={() => go('dashboard')}>Start watching →</button>
            <button className="btn" onClick={() => go('audit')}>Audit me first 🪞</button>
          </div>
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
          {sherlock
            ? 'I never conjure a figure from thin air. Every number is drawn from real evidence — where there is no proof, I hold my tongue.'
            : 'Sleuth never invents a number. Every stat is computed from real scraped data — if it can’t prove it, it won’t say it.'}
        </p>
      </div>
    </section>
  );
}
