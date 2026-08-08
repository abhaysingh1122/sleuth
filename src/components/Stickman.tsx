// The Sleuth mascot — a stickman that transforms into Sherlock on the easter egg.
// Base: round head + curl-loop hair, single-stroke limbs, NO hands, gold magnifier.
// Sherlock extras (cape, deerstalker cap, pipe, smoke) start hidden and fade in,
// staggered, when `sherlock` is true. Smoke animates only in Sherlock mode.

interface Props { size?: number; sherlock?: boolean; className?: string; }

export default function Stickman({ size = 120, sherlock = false, className = '' }: Props) {
  return (
    <svg
      className={`stickman ${sherlock ? 'is-sherlock' : ''} ${className}`}
      width={size} height={size * 1.4} viewBox="0 0 130 182"
      fill="none" stroke="var(--ink)" strokeWidth={3}
      strokeLinecap="round" strokeLinejoin="round"
    >
      {/* ---- INVERNESS CAPE (fades in first) ---- */}
      <g className="sh sh-cape">
        <path d="M40 60 L30 116 L74 116 L64 60 Z" fill="var(--ink)" opacity="0.14" stroke="var(--ink)" strokeWidth="2.5" />
        {/* shoulder cape layer */}
        <path d="M38 60 Q52 74 66 60 L70 84 Q52 94 34 84 Z" fill="var(--ink)" opacity="0.10" stroke="var(--ink)" strokeWidth="2.5" />
        {/* pencil-shading hatching */}
        <path d="M38 74 L44 108 M46 72 L50 110 M56 72 L58 110 M64 74 L68 108" stroke="var(--ink)" strokeWidth="1" opacity="0.35" />
      </g>

      {/* ---- BASE STICKMAN (always visible) ---- */}
      {/* head */}
      <circle cx="52" cy="32" r="20" fill="var(--paper-2)" />
      {/* curl-loop hair (hidden under cap in sherlock via CSS) */}
      <g className="hair">
        <path d="M36 20 q4 -12 16 -12 q12 0 16 12" />
        <path d="M68 18 q6 -3 5 4" />
      </g>
      {/* eyes */}
      <circle cx="47" cy="32" r="1.7" fill="var(--ink)" stroke="none" />
      <circle cx="57" cy="32" r="1.7" fill="var(--ink)" stroke="none" />
      {/* body */}
      <path d="M52 52 L52 104" />
      {/* legs */}
      <path d="M52 104 L40 158" />
      <path d="M52 104 L66 158" />
      {/* left arm down */}
      <path d="M52 64 L34 92" />
      {/* right arm raised to the magnifier */}
      <path d="M52 64 L84 48" />
      {/* magnifying glass (gold) */}
      <circle cx="99" cy="38" r="15" stroke="var(--gold)" strokeWidth="3.5" />
      <path d="M88 49 L84 48" stroke="var(--gold)" strokeWidth="3.5" />
      <path d="M93 32 q6 -2 9 4" stroke="var(--gold)" strokeWidth="2" opacity="0.7" />

      {/* ---- DEERSTALKER CAP (fades in) ---- */}
      <g className="sh sh-cap">
        {/* crown dome */}
        <path d="M33 26 Q52 2 71 26" fill="var(--ink)" opacity="0.16" stroke="var(--ink)" strokeWidth="2.6" />
        {/* front + back brim */}
        <path d="M30 26 Q52 34 74 26" fill="none" stroke="var(--ink)" strokeWidth="2.6" />
        {/* ear flaps */}
        <path d="M33 24 q-6 4 -3 12" stroke="var(--ink)" strokeWidth="2.4" />
        <path d="M71 24 q6 4 3 12" stroke="var(--ink)" strokeWidth="2.4" />
        {/* top button */}
        <circle cx="52" cy="7" r="2.4" fill="var(--ink)" stroke="none" />
        {/* cap hatching */}
        <path d="M42 12 L40 24 M52 8 L52 24 M62 12 L64 24" stroke="var(--ink)" strokeWidth="1" opacity="0.3" />
      </g>

      {/* ---- PIPE + SMOKE (fades in last) ---- */}
      <g className="sh sh-pipe">
        {/* pipe stem from mouth + bowl */}
        <path d="M60 40 Q74 44 76 52 L84 52" stroke="var(--ink)" strokeWidth="2.6" fill="none" />
        <path d="M84 52 L84 60 Q90 60 90 52 Z" fill="var(--ink)" opacity="0.4" stroke="var(--ink)" strokeWidth="2.2" />
        {/* smoke puffs — animated only in sherlock mode */}
        <circle className="puff p1" cx="87" cy="46" r="3" fill="var(--ink-soft)" stroke="none" />
        <circle className="puff p2" cx="90" cy="40" r="4" fill="var(--ink-soft)" stroke="none" />
        <circle className="puff p3" cx="86" cy="34" r="5" fill="var(--ink-soft)" stroke="none" />
      </g>
    </svg>
  );
}
