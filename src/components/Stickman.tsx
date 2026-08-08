// The SpyGlass mascot — a stickman detective holding a magnifying glass.
// Pencil Boil rules: round head + curl-loop hair, single-stroke limbs, NO hands.
// A tiny CSS "boil" wobble makes the strokes feel hand-drawn / alive.

interface Props { size?: number; className?: string; }

export default function Stickman({ size = 120, className = '' }: Props) {
  return (
    <svg
      className={`stickman ${className}`}
      width={size} height={size * 1.35} viewBox="0 0 120 162"
      fill="none" stroke="var(--ink)" strokeWidth={3}
      strokeLinecap="round" strokeLinejoin="round"
    >
      {/* head */}
      <circle cx="52" cy="30" r="20" />
      {/* curl-loop hair */}
      <path d="M36 18 q4 -12 16 -12 q12 0 16 12" />
      <path d="M68 16 q6 -3 5 4" />
      {/* eyes (dots) */}
      <circle cx="47" cy="30" r="1.6" fill="var(--ink)" stroke="none" />
      <circle cx="57" cy="30" r="1.6" fill="var(--ink)" stroke="none" />
      {/* body */}
      <path d="M52 50 L52 100" />
      {/* legs — single strokes, no feet detail */}
      <path d="M52 100 L40 150" />
      <path d="M52 100 L66 150" />
      {/* left arm down */}
      <path d="M52 62 L34 88" />
      {/* right arm raised holding the glass — NO hand, stroke just meets the handle */}
      <path d="M52 62 L82 46" />
      {/* magnifying glass */}
      <circle cx="96" cy="36" r="15" stroke="var(--gold)" strokeWidth={3.5} />
      <path d="M85 47 L82 46" stroke="var(--gold)" strokeWidth={3.5} />
      {/* glass glint */}
      <path d="M90 30 q6 -2 9 4" stroke="var(--gold)" strokeWidth={2} opacity={0.7} />
    </svg>
  );
}
