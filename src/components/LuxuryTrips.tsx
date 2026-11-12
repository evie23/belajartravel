import { luxuryTrips } from "../data/trips.ts";
import { Em, SectionHeading } from "./SectionHeading.tsx";
import { TripPoster } from "./TripCard.tsx";

export function LuxuryTrips() {
  return (
    <section id="luxury" className="scroll-mt-28 px-2 sm:px-4">
      <div className="relative overflow-hidden rounded-[36px] bg-ink py-16 text-paper sm:rounded-[48px] sm:py-24">
        <div
          aria-hidden
          className="absolute -right-24 -top-24 size-[380px] rounded-full bg-cobalt/50 blur-[110px]"
        />
        <div
          aria-hidden
          className="absolute -bottom-32 -left-20 size-[340px] rounded-full bg-tangerine/30 blur-[110px]"
        />

        <div className="container-x relative">
          <SectionHeading
            dark
            kicker="Premium series"
            title={
              <>
                Experience <Em>luxury</Em>
              </>
            }
            sub="Lebih dari sekadar liburan. Destinasi bucket list, grup kecil, penginapan niat, dan momen yang kepake buat cerita bertahun-tahun."
            href="#luxury"
          />

          <div className="no-scrollbar -mx-4 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-4">
            {luxuryTrips.map((trip) => (
              <TripPoster
                key={trip.id}
                trip={trip}
                onDark
                className="w-[78vw] shrink-0 snap-center sm:w-auto"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
