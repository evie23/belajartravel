import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  /** fill the nearest positioned ancestor instead of sizing itself */
  fill?: boolean;
  eager?: boolean;
  className?: string;
};

/** Cover image on a gradient plate, so a slow or missing photo still looks intentional. */
export function Photo({ src, alt, fill = false, eager = false, className = "" }: Props) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`${fill ? "absolute inset-0" : "relative"} overflow-hidden bg-[linear-gradient(135deg,var(--color-lilac),var(--color-bubblegum)_55%,var(--color-sun))] ${className}`}
    >
      {!failed && (
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          onError={() => setFailed(true)}
          className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
      )}
    </div>
  );
}
