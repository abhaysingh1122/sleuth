// Hidden SVG filters used across the app for the hand-drawn / vintage feel.
//  #rough — gentle displacement so the mascot's strokes wobble like pencil ("boil")
//  #torn  — heavier displacement to rag the sidebar edge like torn paper

export default function SketchFilters() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <defs>
        <filter id="rough">
          <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" seed="7" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="2.6" />
        </filter>
        <filter id="torn">
          <feTurbulence type="fractalNoise" baseFrequency="0.014 0.13" numOctaves="3" seed="9" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="11" />
        </filter>
      </defs>
    </svg>
  );
}
