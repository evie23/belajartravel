import { SearchX } from "lucide-react";
import { useState } from "react";
import { allTrips, months, type Vibe, vibes, weeklyTrips } from "../data/trips.ts";
import { Em, SectionHeading } from "./SectionHeading.tsx";
import { TripCard } from "./TripCard.tsx";

type Props = {
  query: string;
  month: string;
  onReset: () => void;
};

/** "Pilihan terbaik minggu ini", which doubles as the search-results grid when a search is active. */
export function WeeklyTrips({ query, month, onReset }: Props) {
  const [vibe, setVibe] = useState<Vibe | "semua">("semua");
  const searching = query !== "" || month !== "";

  const needle = query.toLowerCase();
  const pool = searching
    ? allTrips.filter(
        (trip) =>
          `${trip.title} ${trip.region}`.toLowerCase().includes(needle) &&
          (month === "" || trip.start.startsWith(month)),
      )
    : weeklyTrips;
  const trips = vibe === "semua" ? pool : pool.filter((trip) => trip.vibe === vibe);

  const monthLabel = months.find((m) => m.value === month)?.label;
  const resultLabel = [query && `“${query}”`, monthLabel].filter(Boolean).join(" · ");

  return (
    <section id="open-trip" className="scroll-mt-28 pb-16 sm:pb-24">
      <div className="container-x">
        {searching ? (
          <SectionHeading
            kicker={`${trips.length} trip ketemu`}
            title={
              <>
                Hasil buat <Em>{resultLabel}</Em>
              </>
            }
          />
        ) : (
          <SectionHeading
            kicker="Open trip"
            title={
              <>
                Pilihan terbaik <Em>minggu ini</Em>
              </>
            }
            sub="Destinasi paling rame dengan jadwal berangkat terdekat. Amanin seat-mu sebelum kuotanya ludes."
            href="#open-trip"
          />
        )}

        <div className="mt-7 flex flex-wrap items-center gap-2">
          {vibes.map((v) => {
            const active = vibe === v.id;
            return (
              <button
                key={v.id}
                type="button"
                aria-pressed={active}
                onClick={() => setVibe(v.id)}
                className={`inline-flex items-center gap-2 rounded-full border-2 border-ink px-4 py-2 font-display text-sm font-bold transition duration-200 ${
                  active
                    ? "bg-ink text-paper shadow-[3px_3px_0_0_var(--color-tangerine)]"
                    : "bg-white hover:-translate-y-0.5 hover:bg-lime"
                }`}
              >
                <span aria-hidden>{v.emoji}</span>
                {v.label}
              </button>
            );
          })}
          {searching && (
            <button
              type="button"
              onClick={onReset}
              className="ml-auto font-mono text-xs font-bold uppercase tracking-[0.12em] underline decoration-2 underline-offset-4 hover:text-tangerine"
            >
              Reset pencarian ✕
            </button>
          )}
        </div>

        {trips.length > 0 ? (
          <div className="mt-8 grid gap-x-5 gap-y-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {trips.map((trip) => (
              <TripCard key={trip.id} trip={trip} />
            ))}
          </div>
        ) : (
          <div className="mt-8 flex flex-col items-center rounded-[28px] border-2 border-dashed border-ink/40 px-6 py-16 text-center">
            <span className="grid size-14 -rotate-6 place-items-center rounded-2xl border-2 border-ink bg-sun shadow-hard-sm">
              <SearchX className="size-7" strokeWidth={2.5} />
            </span>
            <p className="mt-5 font-display text-2xl font-extrabold tracking-[-0.03em]">
              Yah, belum ada trip yang cocok.
            </p>
            <p className="mt-2 max-w-sm text-sm text-ink/65">
              Coba kata kunci atau bulan lain, atau bikin private trip sesuai maumu.
            </p>
            <button
              type="button"
              onClick={() => {
                setVibe("semua");
                onReset();
              }}
              className="mt-6 rounded-full border-2 border-ink bg-ink px-5 py-2.5 font-display text-sm font-bold text-paper transition hover:bg-tangerine hover:text-ink"
            >
              Lihat semua trip
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
