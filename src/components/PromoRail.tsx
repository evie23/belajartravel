import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { promos } from "../data/trips.ts";
import { Photo } from "./Photo.tsx";
import { Em } from "./SectionHeading.tsx";

const tones = {
  cobalt: "bg-cobalt text-white",
  lime: "bg-lime text-ink",
  bubblegum: "bg-bubblegum text-ink",
  tangerine: "bg-tangerine text-ink",
} as const;

export function PromoRail() {
  const rail = useRef<HTMLDivElement>(null);

  function slide(direction: 1 | -1) {
    const el = rail.current;
    if (el)
      el.scrollBy({ left: direction * Math.min(el.clientWidth * 0.85, 620), behavior: "smooth" });
  }

  return (
    <section id="promo" className="scroll-mt-28 py-14 sm:py-20">
      <div className="container-x flex items-end justify-between gap-6">
        <div>
          <p className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ink/60">
            <span className="size-2 rounded-full bg-tangerine" />
            Promo minggu ini
          </p>
          <h2 className="mt-3 font-display text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-[0.95] tracking-[-0.04em]">
            Terbaik <Em>buatmu</Em>
          </h2>
        </div>
        <div className="flex gap-2">
          {([-1, 1] as const).map((direction) => (
            <button
              key={direction}
              type="button"
              onClick={() => slide(direction)}
              aria-label={direction === -1 ? "Promo sebelumnya" : "Promo berikutnya"}
              className="grid size-11 place-items-center rounded-full border-2 border-ink bg-white shadow-hard-sm transition duration-200 hover:-translate-y-0.5 hover:bg-lime hover:shadow-hard active:translate-y-0 active:shadow-none"
            >
              {direction === -1 ? (
                <ArrowLeft className="size-5" strokeWidth={2.5} />
              ) : (
                <ArrowRight className="size-5" strokeWidth={2.5} />
              )}
            </button>
          ))}
        </div>
      </div>

      <div
        ref={rail}
        className="no-scrollbar mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-4 px-4 pb-3 sm:scroll-px-6 sm:px-6 lg:scroll-px-[max(2rem,calc((100vw-1240px)/2+2rem))] lg:px-[max(2rem,calc((100vw-1240px)/2+2rem))]"
      >
        {promos.map((promo) => (
          <a
            key={promo.id}
            href={`#trip/${promo.id}`}
            className={`group relative flex h-[250px] w-[86vw] max-w-[560px] shrink-0 snap-start overflow-hidden rounded-[28px] border-2 border-ink shadow-hard transition duration-200 hover:-translate-y-1 hover:shadow-hard-lg sm:h-[270px] ${tones[promo.tone]}`}
          >
            <div className="relative z-10 flex w-[62%] flex-col p-5 sm:p-7">
              <span className="w-fit rounded-full border-2 border-current px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-[0.14em]">
                {promo.kicker}
              </span>
              <h3 className="mt-3 font-display text-[clamp(1.6rem,5.4vw,2.6rem)] font-extrabold uppercase leading-[0.86] tracking-[-0.045em]">
                {promo.name}
              </h3>
              <p className="mt-auto font-mono text-[10px] font-bold uppercase tracking-[0.14em] opacity-75">
                {promo.note}
              </p>
              <p className="mt-1 flex items-baseline gap-1.5">
                <span className="text-sm font-semibold">Rp</span>
                <span className="font-display text-[clamp(2rem,6vw,2.75rem)] font-extrabold leading-none tracking-[-0.04em]">
                  {promo.price}
                </span>
                <span className="text-sm font-semibold opacity-75">/pax</span>
              </p>
            </div>

            <div className="absolute -right-6 top-1/2 h-[118%] w-[44%] -translate-y-1/2 rotate-6 overflow-hidden rounded-[32px] border-2 border-ink">
              <Photo fill src={promo.image} alt={promo.name} />
            </div>
            <span
              aria-hidden
              className="absolute bottom-4 right-4 grid size-11 place-items-center rounded-full border-2 border-ink bg-white text-ink transition duration-200 group-hover:rotate-45 group-hover:bg-ink group-hover:text-white"
            >
              <ArrowUpRight className="size-5" strokeWidth={2.5} />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
