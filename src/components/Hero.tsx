import { ArrowRight, CalendarDays, MapPin, Star } from "lucide-react";
import { type FormEvent, useState } from "react";
import { photos } from "../data/photos.ts";
import { months } from "../data/trips.ts";
import { Photo } from "./Photo.tsx";
import { SpinBadge, Starburst } from "./Stickers.tsx";

const trending = ["Labuan Bajo", "Dieng", "Pulau Pari", "Raja Ampat"];

export function Hero({ onSearch }: { onSearch: (query: string, month: string) => void }) {
  const [query, setQuery] = useState("");
  const [month, setMonth] = useState("");

  function submit(e: FormEvent) {
    e.preventDefault();
    onSearch(query, month);
  }

  return (
    <section id="top" className="relative overflow-hidden border-b-2 border-ink">
      {/* colour blobs behind the collage */}
      <div
        aria-hidden
        className="absolute -right-32 -top-24 size-[520px] rounded-full bg-bubblegum/70 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 left-1/3 size-[420px] rounded-full bg-lime/60 blur-3xl"
      />

      <div className="container-x relative grid gap-12 pb-16 pt-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:pb-24 lg:pt-16">
        <div className="relative z-10">
          <p className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-white px-3.5 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.12em] shadow-hard-sm">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full rounded-full bg-tangerine opacity-75 motion-safe:animate-ping" />
              <span className="relative inline-flex size-2 rounded-full bg-tangerine" />
            </span>
            50rb+ buddies udah cabut bareng kita
          </p>

          <h1 className="mt-6 font-display text-[clamp(3.1rem,9.2vw,6.6rem)] font-extrabold leading-[0.88] tracking-[-0.055em]">
            Cuti jangan
            <br />
            dipendem.
            <br />
            <em className="marker font-serif font-normal tracking-[-0.03em]">Cabut aja.</em>
          </h1>

          <p className="mt-6 max-w-[520px] text-base leading-relaxed text-ink/70 sm:text-lg">
            Open trip, private trip, sampai outing kantor ke 100+ destinasi. Kamu pilih tanggal,
            sisanya kita yang urus. No ribet, no drama.
          </p>

          <form
            onSubmit={submit}
            role="search"
            className="mt-8 flex max-w-[640px] flex-col gap-1 rounded-[28px] border-2 border-ink bg-white p-2 shadow-hard-lg sm:flex-row sm:items-center sm:rounded-full"
          >
            <label className="flex flex-1 items-center gap-3 rounded-full px-4 py-3 transition focus-within:bg-paper">
              <MapPin className="size-5 shrink-0 text-tangerine" strokeWidth={2.5} />
              <span className="sr-only">Mau ke mana?</span>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Mau ke mana?"
                className="w-full min-w-0 bg-transparent font-medium outline-none placeholder:text-ink/45"
              />
            </label>
            <span aria-hidden className="mx-4 h-0.5 bg-ink/10 sm:mx-0 sm:h-8 sm:w-0.5" />
            <label className="flex items-center gap-3 rounded-full px-4 py-3 transition focus-within:bg-paper">
              <CalendarDays className="size-5 shrink-0 text-cobalt" strokeWidth={2.5} />
              <span className="sr-only">Kapan?</span>
              <select
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className={`w-full cursor-pointer appearance-none bg-transparent pr-2 font-medium outline-none sm:w-[112px] ${month ? "" : "text-ink/45"}`}
              >
                <option value="">Kapan?</option>
                {months.map((m) => (
                  <option key={m.value} value={m.value}>
                    {m.label}
                  </option>
                ))}
              </select>
            </label>
            <button
              type="submit"
              className="group/btn flex items-center justify-center gap-2 rounded-full border-2 border-ink bg-tangerine px-6 py-3 font-display text-base font-extrabold transition duration-200 hover:bg-lime"
            >
              Cari Trip
              <ArrowRight
                className="size-5 transition-transform group-hover/btn:translate-x-1"
                strokeWidth={2.5}
              />
            </button>
          </form>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-ink/55">
              Lagi rame:
            </span>
            {trending.map((name) => (
              <button
                key={name}
                type="button"
                onClick={() => {
                  setQuery(name);
                  onSearch(name, month);
                }}
                className="rounded-full border-2 border-ink/80 px-3 py-1 text-sm font-semibold transition hover:-rotate-2 hover:bg-ink hover:text-paper"
              >
                #{name.replaceAll(" ", "")}
              </button>
            ))}
          </div>
        </div>

        {/* photo collage */}
        <div className="relative mx-auto aspect-[10/11] w-full max-w-[440px] lg:mt-2 lg:max-w-none">
          <div className="group absolute right-[4%] top-0 h-[80%] w-[66%] rotate-3 overflow-hidden rounded-b-[36px] rounded-t-full border-2 border-ink shadow-hard-lg">
            <Photo fill eager src={photos.labuanbajo} alt="Teluk Pulau Padar, Labuan Bajo" />
          </div>

          <figure className="group absolute bottom-[3%] left-0 w-[47%] -rotate-6 rounded-2xl border-2 border-ink bg-white p-2 pb-2.5 shadow-hard">
            <Photo
              eager
              src={photos.snorkel}
              alt="Snorkeling di atas terumbu karang"
              className="aspect-square rounded-lg"
            />
            <figcaption className="mt-2 flex items-center justify-between font-mono text-[10px] font-bold uppercase tracking-wider sm:text-[11px]">
              <span>karimunjawa</span>
              <span className="text-ink/50">06:14</span>
            </figcaption>
          </figure>

          <SpinBadge
            text="open trip ✺ tiap weekend ✺ gas terus ✺ "
            className="absolute left-[3%] top-[5%] size-[112px] bg-lime shadow-hard sm:size-[128px]"
          >
            <span className="grid size-12 place-items-center rounded-full bg-ink text-2xl text-lime sm:size-14">
              ✈
            </span>
          </SpinBadge>

          <div className="absolute bottom-[20%] right-0 rotate-6 rounded-2xl border-2 border-ink bg-white px-4 py-3 shadow-hard">
            <p className="flex items-center gap-1.5 font-display text-2xl font-extrabold leading-none">
              <Star className="size-5 fill-sun text-ink" strokeWidth={2} />
              4.9
            </p>
            <p className="mt-1 font-mono text-[10px] font-bold uppercase tracking-wider text-ink/60">
              12rb+ review
            </p>
          </div>

          <Starburst className="absolute -left-[2%] top-[36%] size-[92px] motion-safe:animate-wiggle sm:size-[104px]">
            <span className="block font-mono text-[9px] font-bold uppercase">mulai</span>
            <span className="block font-display text-[22px] font-extrabold tracking-tight sm:text-2xl">
              199rb
            </span>
          </Starburst>
        </div>
      </div>
    </section>
  );
}
