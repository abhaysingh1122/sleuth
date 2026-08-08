// Tiny hand-drawn doodle portraits for competitor cards — a framed little face,
// same stickman DNA (round head, no hands). A few variants keep them distinct.

export type AvatarKind = 'pigtails' | 'reading' | 'pointing' | 'plain';

export default function Avatar({ kind = 'plain' }: { kind?: AvatarKind }) {
  return (
    <div className="avatar sketch">
      <svg viewBox="0 0 70 70" width="60" height="60"
        fill="none" stroke="var(--ink)" strokeWidth={2.4}
        strokeLinecap="round" strokeLinejoin="round">
        {/* head */}
        <circle cx="35" cy="30" r="15" fill="var(--paper)" />
        <circle cx="30" cy="30" r="1.5" fill="var(--ink)" stroke="none" />
        <circle cx="40" cy="30" r="1.5" fill="var(--ink)" stroke="none" />
        <path d="M30 37 q5 3 10 0" strokeWidth={1.8} />

        {kind === 'pigtails' && (
          <>
            <circle cx="19" cy="30" r="4" />
            <circle cx="51" cy="30" r="4" />
            <path d="M24 20 q11 -8 22 0" />
          </>
        )}
        {kind === 'plain' && <path d="M22 22 q6 -9 13 -9 q7 0 13 9" />}
        {kind === 'reading' && (
          <>
            <path d="M22 22 q6 -9 13 -9 q7 0 13 9" />
            {/* little open book below */}
            <path d="M22 56 L35 52 L48 56 L35 60 Z" fill="var(--paper-2)" />
            <path d="M35 52 L35 60" strokeWidth={1.6} />
          </>
        )}
        {kind === 'pointing' && (
          <>
            <path d="M22 22 q6 -9 13 -9 q7 0 13 9" />
            {/* raised arm pointing */}
            <path d="M35 45 L55 40" strokeWidth={2.2} />
          </>
        )}
        {/* neck + shoulders hint */}
        {kind !== 'reading' && <path d="M35 45 L35 55" />}
      </svg>
    </div>
  );
}
