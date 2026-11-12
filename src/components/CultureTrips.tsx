import { cultureTrips } from "../data/trips.ts";
import { Em, SectionHeading } from "./SectionHeading.tsx";
import { TripPoster } from "./TripCard.tsx";

export function CultureTrips() {
  const [lead, wide, ...rest] = cultureTrips;

  return (
    <section id="budaya" className="scroll-mt-28 py-16 sm:py-24">
      <div className="container-x">
        <SectionHeading
          kicker="Culture trip"
          title={
            <>
              Pesona budaya <Em>Indonesia</Em>
            </>
          }
          sub="Bukan cuma foto-foto. Nginep di rumah adat, ngobrol sama warga, pulang bawa cerita yang nggak ada di Google."
          href="#budaya"
        />

        {/* bento: one tall lead, one wide, two small */}
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          <TripPoster trip={lead} big className="md:col-span-2 lg:row-span-2 lg:min-h-[640px]" />
          <TripPoster trip={wide} className="md:col-span-2 lg:min-h-[310px]" />
          {rest.map((trip) => (
            <TripPoster key={trip.id} trip={trip} className="lg:min-h-[310px]" />
          ))}
        </div>
      </div>
    </section>
  );
}
