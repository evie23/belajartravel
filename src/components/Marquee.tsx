import type { ReactNode } from "react";

type Props = {
  items: ReactNode[];
  separator?: ReactNode;
  className?: string;
};

/** Infinite ticker. The track holds the content twice and slides by exactly half its width. */
export function Marquee({ items, separator = "✺", className = "" }: Props) {
  // repeat so one copy is always wider than the viewport
  const loop = [...items, ...items, ...items];

  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden} className="flex shrink-0 items-center">
      {loop.map((item, i) => (
        <li key={i} className="flex items-center whitespace-nowrap">
          {item}
          <span aria-hidden className="mx-5 sm:mx-7">
            {separator}
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="flex w-max motion-safe:animate-marquee">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
