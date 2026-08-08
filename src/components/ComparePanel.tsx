import { compareResult as r } from '../data/mock';

export default function ComparePanel() {
  return (
    <section>
      <header className="view-head">
        <h2>Me vs {r.competitor} ⚔</h2>
        <p className="muted serif">
          the only question that matters: <span className="mark">why are they winning?</span>
        </p>
      </header>

      <div className="versus">
        <div className="sketch panel structural shaded-red tilt-l">
          <span className="chip red">CAN’T COPY</span>
          <h3>Structural</h3>
          <p className="tiny muted">the stuff you’ll never buy this week.</p>
          <ul className="doodle-list">
            {r.structural.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </div>

        <div className="vs-mark serif">vs</div>

        <div className="sketch panel algorithmic shaded-green tilt-r alt">
          <span className="chip green">STEAL TODAY</span>
          <h3>Algorithmic</h3>
          <p className="tiny muted">the stuff you can copy right now.</p>
          <ul className="doodle-list">
            {r.algorithmic.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </div>
      </div>

      <div className="sketch panel gold-panel">
        <h3>Your move</h3>
        <p className="serif read">{r.strategy}</p>
      </div>
    </section>
  );
}
