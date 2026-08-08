// The Sleuth mascot — a clean stickman that transforms into Sherlock.
// Base: round head + curl-loop hair, single-stroke limbs, NO hands, gold magnifier.
// Sherlock extras (deerstalker cap, Inverness cape, pipe + smoke) start hidden and
// fade in staggered when `sherlock` is true. Kept CLEAN — clear silhouette, minimal noise.

interface Props { size?: number; sherlock?: boolean; className?: string; }

export default function Stickman({ size = 120, sherlock = false, className = '' }: Props) {
  return (
    <svg
      className={`stickman ${sherlock ? 'is-sherlock' : ''} ${className}`}
      width={size} height={size * 1.42} viewBox="0 0 130 184"
      fill="none" stroke="var(--ink)" strokeWidth={3}
      strokeLinecap="round" strokeLinejoin="round"
    >
      {/* ---- INVERNESS CAPE (fades in first) — clean shoulder cape + draping body cape ---- */}
      <g className="sh sh-cape">
        {/* body cape, draping */}
        <path d="M44 74 L33 118 Q52 126 71 118 L60 74 Z"
              fill="var(--ink)" opacity="0.12" stroke="var(--ink)" strokeWidth="2.6" />
        {/* shoulder cape — rounded, over the shoulders */}
        <path d="M38 58 Q52 52 66 58 Q70 76 52 80 Q34 76 38 58 Z"
              fill="var(--ink)" opacity="0.16" stroke="var(--ink)" strokeWidth="2.6" />
        {/* a couple of soft drape folds (NOT heavy hatching) */}
        <path d="M47 82 L44 116 M57 82 L60 116" stroke="var(--ink)" strokeWidth="1.4" opacity="0.4" />
      </g>

      {/* ---- BASE STICKMAN ---- */}
      <circle cx="52" cy="34" r="20" fill="var(--paper-2)" />
      <g className="hair">
        <path d="M36 22 q4 -12 16 -12 q12 0 16 12" />
        <path d="M68 20 q6 -3 5 4" />
      </g>
      <circle cx="47" cy="34" r="1.8" fill="var(--ink)" stroke="none" />
      <circle cx="57" cy="34" r="1.8" fill="var(--ink)" stroke="none" />
      {/* smile — subtle */}
      <path d="M47 42 q5 4 10 0" strokeWidth="2.2" />
      <path d="M52 54 L52 106" />
      <path d="M52 106 L40 160" />
      <path d="M52 106 L66 160" />
      <path d="M52 66 L34 94" />
      <path d="M52 66 L86 50" />
      {/* magnifier (gold) */}
      <circle cx="101" cy="40" r="15" stroke="var(--gold)" strokeWidth="3.6" />
      <path d="M90 51 L86 50" stroke="var(--gold)" strokeWidth="3.6" />
      <path d="M95 34 q6 -2 9 4" stroke="var(--gold)" strokeWidth="2" opacity="0.7" />

      {/* ---- DEERSTALKER CAP (fades in) — dome crown + fore/aft brim + ear flaps + button ---- */}
      <g className="sh sh-cap">
        {/* crown dome sitting on the head */}
        <path d="M31 30 Q31 8 52 8 Q73 8 73 30 Z"
              fill="var(--ink)" opacity="0.15" stroke="var(--ink)" strokeWidth="2.7" />
        {/* fore-and-aft brim across the forehead */}
        <path d="M27 30 Q52 39 77 30" fill="none" stroke="var(--ink)" strokeWidth="2.7" />
        {/* ear flaps, tied up */}
        <path d="M31 22 q-8 1 -6 11 q4 2 7 -2" fill="var(--ink)" opacity="0.12" stroke="var(--ink)" strokeWidth="2.3" />
        <path d="M73 22 q8 1 6 11 q-4 2 -7 -2" fill="var(--ink)" opacity="0.12" stroke="var(--ink)" strokeWidth="2.3" />
        {/* top button */}
        <circle cx="52" cy="9" r="2.6" fill="var(--ink)" stroke="none" />
      </g>

      {/* ---- PIPE + SMOKE (fades in last) ---- */}
      <g className="sh sh-pipe">
        {/* curved stem from mouth to bowl */}
        <path d="M61 44 Q77 46 79 55" stroke="var(--ink)" strokeWidth="2.6" fill="none" />
        {/* bowl */}
        <path d="M75 55 L75 64 Q84 64 84 55 Z" fill="var(--ink)" opacity="0.42" stroke="var(--ink)" strokeWidth="2.3" />
        {/* rising smoke puffs (animated in sherlock mode) */}
        <circle className="puff p1" cx="79" cy="49" r="2.6" fill="var(--ink-soft)" stroke="none" />
        <circle className="puff p2" cx="83" cy="43" r="3.4" fill="var(--ink-soft)" stroke="none" />
        <circle className="puff p3" cx="79" cy="37" r="4.2" fill="var(--ink-soft)" stroke="none" />
      </g>
    </svg>
  );
}
