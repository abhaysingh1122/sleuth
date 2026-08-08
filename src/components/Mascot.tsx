import { useState } from 'react';
import Stickman from './Stickman';

// Uses Abhay's REAL drawings (public/base.png + public/sherlock.png) so the
// character looks exactly like his art — not an SVG imitation. Crossfades
// base -> sherlock on the easter egg, with a little animated smoke puff on top.
// If the PNGs aren't there yet, it falls back to the SVG stickman.

interface Props { size?: number; sherlock?: boolean; className?: string; }

export default function Mascot({ size = 120, sherlock = false, className = '' }: Props) {
  const [imgFailed, setImgFailed] = useState(false);

  if (imgFailed) return <Stickman size={size} sherlock={sherlock} className={className} />;

  return (
    <div className={`mascot ${className}`} style={{ width: size, height: size * 1.4 }}>
      <img
        className={`m-img ${sherlock ? 'hide' : ''}`}
        src="/base.png" alt="Sleuth" draggable={false}
        onError={() => setImgFailed(true)}
      />
      <img
        className={`m-img ${sherlock ? '' : 'hide'}`}
        src="/sherlock.png" alt="Sherlock" draggable={false}
      />
      {sherlock && (
        <span className="m-smoke" aria-hidden="true"><i /><i /><i /></span>
      )}
    </div>
  );
}
