import type { Competitor, Platform } from '../data/mock';
import Avatar from './Avatar';
import Pushpin from './Pushpin';

const platformLabel: Record<Platform, string> = {
  linkedin: 'in', instagram: 'ig', x: 'X', website: 'web',
};

export default function CompetitorCard({ c, i }: { c: Competitor; i: number }) {
  const tilt = i % 2 === 0 ? 'tilt-l' : 'tilt-r';
  return (
    <div className={`sketch card ${tilt} ${i % 2 ? 'alt' : ''}`}>
      <Pushpin side="l" />
      <Pushpin side="r" />

      <div className="card-top">
        <Avatar kind={c.avatar} />
        <div className="card-id">
          <div className="card-head">
            <h3>{c.name}</h3>
            <span className="tiny muted">{c.lastSeen}</span>
          </div>
          <p className="muted handle">{c.handle}</p>
          <div className="platforms">
            {c.platforms.map((p) => (
              <span key={p} className="chip blue">{platformLabel[p]}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="stats">
        <div><b>{c.posts}</b><span className="tiny"> posts</span></div>
        <div><b>{c.avgEngagement.toLocaleString()}</b><span className="tiny"> avg</span></div>
        <div><b>{c.postsPerWeek}</b><span className="tiny"> /week</span></div>
      </div>

      <p className="hook serif">“{c.topHook}”</p>

      <div className="card-actions">
        <button className="btn">🔍 Scan</button>
        <button className="btn primary">🗂 Dossier</button>
      </div>
    </div>
  );
}
