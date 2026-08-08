import { competitors } from '../data/mock';
import CompetitorCard from './CompetitorCard';

export default function Dashboard() {
  return (
    <section>
      <header className="view-head">
        <h2>The Watchlist</h2>
        <p className="muted serif">
          who you’re watching — and what they posted while you weren’t looking.
        </p>
      </header>

      <div className="add-row sketch alt">
        <span className="serif">point me at a competitor…</span>
        <input
          className="sketch-input"
          placeholder="paste a LinkedIn / Instagram / X / website link"
        />
        <button className="btn primary">＋ Watch them</button>
      </div>

      <div className="card-grid">
        {competitors.map((c, i) => (
          <CompetitorCard key={c.id} c={c} i={i} />
        ))}
      </div>
    </section>
  );
}
