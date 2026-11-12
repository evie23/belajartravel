import { ArrowUpRight, Eye, Play } from "lucide-react";
import { reels } from "../data/trips.ts";
import { Photo } from "./Photo.tsx";
import { Em } from "./SectionHeading.tsx";

const tilt = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "-rotate-1"];

export function Reels() {
  return (
    <section
      id="keseruan"
      className="scroll-mt-28 overflow-hidden border-y-2 border-ink bg-bubblegum py-16 sm:py-24"
    >
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-6">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.18em]">
              <span className="size-2 rounded-full bg-ink" />
              @evietrip
            </p>
            <h2 className="mt-3 font-display text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-[0.95] tracking-[-0.04em]">
              Keseruan bareng <Em>buddies</Em>
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink/75 sm:text-base">
              Cerita seru, ketawa sampai sakit perut, dan momen yang susah diulang. Intip dulu
              vibes-nya sebelum ikutan.
            </p>
          </div>
          <a
            href="#instagram"
            className="group/link inline-flex items-center gap-2 rounded-full border-2 border-ink bg-ink px-5 py-3 font-display text-sm font-bold text-paper shadow-[4px_4px_0_0_var(--color-lime)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_var(--color-lime)]"
          >
            Follow Instagram kita
            <ArrowUpRight
              className="size-4 transition-transform group-hover/link:rotate-45"
              strokeWidth={2.5}
            />
          </a>
        </div>

        <div className="no-scrollbar -mx-4 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-5 pt-2 sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-5 lg:gap-5 lg:overflow-visible lg:px-0">
          {reels.map((reel, i) => (
            <a
              key={reel.id}
              href={`#reel/${reel.id}`}
              className={`group relative isolate flex aspect-[9/16] w-[58vw] max-w-[250px] shrink-0 snap-center flex-col justify-between overflow-hidden rounded-[26px] border-2 border-ink shadow-hard transition duration-300 hover:z-10 hover:-translate-y-2 hover:rotate-0 hover:shadow-hard-lg lg:w-auto lg:max-w-none ${tilt[i % tilt.length]}`}
            >
              <Photo fill src={reel.image} alt={reel.title} className="-z-10" />
              <div
                aria-hidden
                className="absolute inset-0 -z-10 bg-linear-to-t from-ink/90 via-transparent to-ink/40"
              />

              <div className="flex items-center justify-between p-3 font-mono text-[10px] font-bold uppercase tracking-wide text-paper">
                <span>@evietrip</span>
                <span className="inline-flex items-center gap-1 rounded-full bg-ink/60 px-2 py-0.5 backdrop-blur-sm">
                  <Eye className="size-3" strokeWidth={2.5} />
                  {reel.views}
                </span>
              </div>

              <span className="absolute left-1/2 top-1/2 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-ink bg-lime transition duration-300 group-hover:scale-110 group-hover:bg-tangerine">
                <Play className="ml-0.5 size-6 fill-ink" strokeWidth={2.5} />
                <span className="sr-only">Putar video</span>
              </span>

              <div className="p-3.5 text-paper">
                <p className="font-display text-lg font-extrabold leading-tight tracking-[-0.02em]">
                  {reel.title}
                </p>
                <p className="mt-1 text-[13px] leading-snug text-paper/80">{reel.caption}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
