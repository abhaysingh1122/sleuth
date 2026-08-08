// A little hand-drawn pushpin — cards look pinned to a notebook page.

export default function Pushpin({ side = 'l' }: { side?: 'l' | 'r' }) {
  return (
    <svg className={`pushpin pin-${side}`} viewBox="0 0 24 30" width="20" height="26"
      fill="none" stroke="var(--ink)" strokeWidth={1.8} strokeLinecap="round">
      <circle cx="12" cy="9" r="7" fill="var(--red)" />
      <circle cx="9.5" cy="6.5" r="2" fill="#fff" stroke="none" />
      <path d="M12 16 L12 28" strokeWidth={2} />
    </svg>
  );
}
