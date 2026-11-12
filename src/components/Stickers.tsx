import type { ReactNode } from "react";

/** Spiky price-tag star. Children sit centred on top. */
export function Starburst({
  children,
  className = "",
  fill = "var(--color-sun)",
  spikes = 14,
}: {
  children?: ReactNode;
  className?: string;
  fill?: string;
  spikes?: number;
}) {
  const points = Array.from({ length: spikes * 2 }, (_, i) => {
    const r = i % 2 === 0 ? 48 : 38;
    const a = (Math.PI * i) / spikes - Math.PI / 2;
    return `${(50 + r * Math.cos(a)).toFixed(2)},${(50 + r * Math.sin(a)).toFixed(2)}`;
  }).join(" ");

  return (
    <div className={className}>
      <div className="relative grid size-full place-items-center">
        <svg
          viewBox="0 0 100 100"
          aria-hidden
          className="absolute inset-0 size-full overflow-visible"
        >
          <polygon points={points} fill="var(--color-ink)" transform="translate(3 3)" />
          <polygon
            points={points}
            fill={fill}
            stroke="var(--color-ink)"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
        <div className="relative text-center leading-none">{children}</div>
      </div>
    </div>
  );
}

/** Text set on a circle, slowly rotating around whatever is placed in the middle. */
export function SpinBadge({
  text,
  children,
  className = "",
}: {
  text: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-full border-2 border-ink ${className}`}>
      <div className="relative grid size-full place-items-center">
        <svg
          viewBox="0 0 120 120"
          aria-hidden
          className="absolute inset-0 size-full motion-safe:animate-spin-slow"
        >
          <defs>
            <path id="spin-badge-circle" d="M60,60 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0" />
          </defs>
          <text className="fill-current font-mono text-[10.5px] font-bold uppercase">
            <textPath href="#spin-badge-circle" textLength="278" lengthAdjust="spacing">
              {text}
            </textPath>
          </text>
        </svg>
        <div className="relative">{children}</div>
      </div>
    </div>
  );
}
