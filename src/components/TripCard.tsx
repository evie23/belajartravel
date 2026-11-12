import { ArrowUpRight, CalendarDays, Eye, Flame, Heart, Star } from "lucide-react";
import { useState } from "react";
import { dateRange, duration, rupiah } from "../data/format.ts";
import type { Trip } from "../data/trips.ts";
import { Photo } from "./Photo.tsx";

function Availability({ seatsLeft }: { seatsLeft?: number }) {
  if (seatsLeft) {
    return (
      <span className="inline-flex items-center gap-1 rounded-full border-2 border-ink bg-tangerine px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wide">
        <Flame className="size-3" strokeWidth={2.5} />
        Sisa {seatsLeft} seat
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-lime px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wide">
      <span className="size-1.5 rounded-full bg-ink" />
      Tersedia
    </span>
  );
}

function LikeButton({ title }: { title: string }) {
  const [liked, setLiked] = useState(false);
  return (
    <button
      type="button"
      aria-pressed={liked}
      aria-label={liked ? `Hapus ${title} dari wishlist` : `Simpan ${title} ke wishlist`}
      onClick={(e) => {
        e.preventDefault();
        setLiked((v) => !v);
      }}
      className="relative z-10 grid size-9 place-items-center rounded-full border-2 border-ink bg-white text-ink transition duration-200 hover:scale-110 active:scale-90"
    >
      <Heart
        className={`size-4 transition ${liked ? "fill-tangerine text-tangerine" : ""}`}
        strokeWidth={2.5}
      />
    </button>
  );
}

/** The default card: photo on top, details on a white ticket below. */
export function TripCard({ trip }: { trip: Trip }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-[26px] border-2 border-ink bg-white shadow-hard transition duration-200 hover:-translate-x-0.5 hover:-translate-y-1 hover:shadow-hard-lg">
      <div className="relative aspect-[5/4] border-b-2 border-ink">
        <Photo fill src={trip.image} alt={`${trip.title}, ${trip.region}`} />
        <div className="absolute inset-x-3 top-3 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-ink/75 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wide text-paper backdrop-blur-sm">
            <Eye className="size-3.5" strokeWidth={2.5} />
            {trip.views}
          </span>
          <LikeButton title={trip.title} />
        </div>
        <div className="absolute inset-x-4 -bottom-3.5 z-10 flex items-center justify-between">
          <Availability seatsLeft={trip.seatsLeft} />
          <span className="-rotate-3 rounded-lg border-2 border-ink bg-sun px-2.5 py-1 font-display text-sm font-extrabold shadow-hard-sm">
            {duration(trip.days)}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4 pt-7">
        <p className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold text-ink/60">
          <CalendarDays className="size-3.5" strokeWidth={2.5} />
          {dateRange(trip.start, trip.days)}
        </p>

        <h3 className="mt-2 font-display text-[22px] font-extrabold leading-[1.05] tracking-[-0.03em]">
          <a href={`#trip/${trip.id}`} className="after:absolute after:inset-0">
            {trip.title}
          </a>
        </h3>
        <p className="mt-0.5 font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-ink/45">
          {trip.region}
        </p>
        <p className="mt-2.5 line-clamp-2 text-sm leading-snug text-ink/65">{trip.blurb}</p>

        <p className="mt-3 flex items-center gap-1.5 text-[13px] text-ink/60">
          <Star className="size-4 fill-sun text-ink" strokeWidth={2} />
          <span className="font-bold text-ink">{trip.rating.toFixed(1)}</span>
          <span aria-hidden>·</span>
          {trip.bought} buddies udah beli
        </p>

        <div className="mt-auto pt-4">
          <div className="flex items-end justify-between border-t-2 border-dashed border-ink/20 pt-3.5">
            <p>
              <span className="block font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-ink/50">
                mulai dari
              </span>
              <span className="font-display text-[23px] font-extrabold leading-tight tracking-[-0.03em]">
                {rupiah(trip.price)}
              </span>
              <span className="text-xs font-medium text-ink/50"> /pax</span>
            </p>
            <span
              aria-hidden
              className="grid size-10 shrink-0 place-items-center rounded-full border-2 border-ink bg-ink text-paper transition duration-200 group-hover:rotate-45 group-hover:bg-tangerine group-hover:text-ink"
            >
              <ArrowUpRight className="size-5" strokeWidth={2.5} />
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

/** Full-bleed photo with the details overlaid. Used where the picture should do the talking. */
export function TripPoster({
  trip,
  className = "",
  big = false,
  onDark = false,
}: {
  trip: Trip;
  className?: string;
  big?: boolean;
  onDark?: boolean;
}) {
  return (
    <article
      className={`group relative isolate flex min-h-[380px] flex-col justify-between overflow-hidden rounded-[26px] border-2 transition duration-200 hover:-translate-y-1 ${
        onDark ? "border-paper/25 hover:border-lime" : "border-ink shadow-hard hover:shadow-hard-lg"
      } ${className}`}
    >
      <Photo fill src={trip.image} alt={`${trip.title}, ${trip.region}`} className="-z-10" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-linear-to-t from-ink from-10% via-ink/70 via-45% to-ink/5"
      />

      <div className="flex items-start justify-between p-3.5">
        <div className="flex flex-wrap gap-1.5">
          <span className="rounded-full border-2 border-ink bg-lime px-2.5 py-0.5 font-display text-[13px] font-extrabold text-ink">
            {duration(trip.days)}
          </span>
          {trip.seatsLeft && <Availability seatsLeft={trip.seatsLeft} />}
        </div>
        <LikeButton title={trip.title} />
      </div>

      <div className={`text-paper ${big ? "p-5 sm:p-7" : "p-4 sm:p-5"}`}>
        <p className="flex flex-wrap items-center gap-x-2 font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-paper/75">
          <span>{dateRange(trip.start, trip.days)}</span>
          <span aria-hidden className="text-lime">
            ✺
          </span>
          <span>{trip.region}</span>
        </p>
        <h3
          className={`mt-2 font-display font-extrabold leading-[0.98] tracking-[-0.035em] ${big ? "text-[clamp(2rem,4vw,3.25rem)]" : "text-[26px]"}`}
        >
          <a href={`#trip/${trip.id}`} className="after:absolute after:inset-0">
            {trip.title}
          </a>
        </h3>
        <p
          className={`mt-2 text-paper/75 ${big ? "max-w-md text-base" : "line-clamp-2 text-sm leading-snug"}`}
        >
          {trip.blurb}
        </p>

        <div className="mt-4 flex items-end justify-between gap-3 border-t border-paper/25 pt-3.5">
          <p>
            <span className="flex items-center gap-1.5 text-xs text-paper/70">
              <Star className="size-3.5 fill-sun text-sun" />
              <span className="font-bold text-paper">{trip.rating.toFixed(1)}</span>· {trip.bought}{" "}
              udah beli
            </span>
            <span
              className={`mt-1 block whitespace-nowrap font-display font-extrabold tracking-[-0.03em] ${big ? "text-3xl" : "text-[22px]"}`}
            >
              {rupiah(trip.price)}
              <span className="font-sans text-xs font-medium tracking-normal text-paper/60">
                {" "}
                /pax
              </span>
            </span>
          </p>
          <span
            aria-hidden
            className="grid size-10 shrink-0 place-items-center rounded-full bg-lime text-ink transition duration-200 group-hover:rotate-45 group-hover:bg-tangerine"
          >
            <ArrowUpRight className="size-5" strokeWidth={2.5} />
          </span>
        </div>
      </div>
    </article>
  );
}
