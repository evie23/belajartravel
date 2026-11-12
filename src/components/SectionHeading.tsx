import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type Props = {
  kicker: string;
  title: ReactNode;
  sub?: string;
  href?: string;
  dark?: boolean;
};

export function SectionHeading({ kicker, title, sub, href, dark = false }: Props) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-5">
      <div className="max-w-2xl">
        <p
          className={`inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.18em] ${dark ? "text-lime" : "text-ink/60"}`}
        >
          <span className={`size-2 rounded-full ${dark ? "bg-lime" : "bg-tangerine"}`} />
          {kicker}
        </p>
        <h2 className="mt-3 font-display text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-[0.95] tracking-[-0.04em]">
          {title}
        </h2>
        {sub && (
          <p
            className={`mt-4 max-w-xl text-[15px] leading-relaxed sm:text-base ${dark ? "text-paper/65" : "text-ink/65"}`}
          >
            {sub}
          </p>
        )}
      </div>
      {href && (
        <a
          href={href}
          className={`group/link inline-flex shrink-0 items-center gap-2 rounded-full border-2 px-5 py-2.5 font-display text-sm font-bold transition duration-200 hover:-translate-y-0.5 ${
            dark
              ? "border-paper/30 text-paper hover:border-lime hover:bg-lime hover:text-ink"
              : "border-ink bg-white shadow-hard-sm hover:shadow-hard"
          }`}
        >
          Lihat semua
          <ArrowUpRight
            className="size-4 transition-transform group-hover/link:rotate-45"
            strokeWidth={2.5}
          />
        </a>
      )}
    </div>
  );
}

/** the italic-serif word that every heading leans on */
export function Em({ children }: { children: ReactNode }) {
  return <em className="font-serif font-normal tracking-[-0.02em]">{children}</em>;
}
