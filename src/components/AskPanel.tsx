const sample = [
  { q: 'what should I post this week to close the gap?',
    a: 'Post three structured n8n breakdowns — your best format. Open each with a contrarian one-liner (steal your Healthcare hook’s shape) and end with a single shareable sentence, not a summary.' },
  { q: 'why does Zain get 60× my engagement?',
    a: 'Mostly reach he compounded over years (structural). But copyable today: he posts 9×/week and every hook is a numbered promise. Your cadence is 0.2/week — that gap alone explains most of it.' },
];

export default function AskPanel() {
  return (
    <section>
      <header className="view-head">
        <h2>Just Ask 💬</h2>
        <p className="muted serif">
          plain english. grounded in real scraped data — <span className="mark">it can’t make numbers up.</span>
        </p>
      </header>

      <div className="chat">
        {sample.map((m, i) => (
          <div key={i} className="qa">
            <div className="bubble you sketch tilt-r">{m.q}</div>
            <div className="bubble bot sketch alt">{m.a}</div>
          </div>
        ))}
      </div>

      <div className="add-row sketch">
        <input className="sketch-input" placeholder="ask SpyGlass anything…" />
        <button className="btn primary">ask →</button>
      </div>
    </section>
  );
}
