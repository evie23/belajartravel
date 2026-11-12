import { Apple, Play, Star } from "lucide-react";
import { photos } from "../data/photos.ts";
import { Photo } from "./Photo.tsx";
import { Em } from "./SectionHeading.tsx";
import { Starburst } from "./Stickers.tsx";

export function StoreButtons({ onDark = false }: { onDark?: boolean }) {
  const base = `flex items-center gap-3 rounded-2xl border-2 px-4 py-2.5 transition duration-200 hover:-translate-y-0.5 ${
    onDark
      ? "border-paper/30 bg-paper/5 text-paper hover:border-lime hover:bg-lime hover:text-ink"
      : "border-ink bg-ink text-paper shadow-[3px_3px_0_0_var(--color-lime)] hover:shadow-[5px_5px_0_0_var(--color-lime)]"
  }`;

  return (
    <div className="flex flex-wrap gap-3">
      <a href="#google-play" className={base}>
        <Play className="size-6 fill-current" strokeWidth={0} />
        <span className="leading-none">
          <span className="block font-mono text-[9px] font-bold uppercase tracking-[0.14em] opacity-70">
            Get it on
          </span>
          <span className="mt-1 block font-display text-base font-bold">Google Play</span>
        </span>
      </a>
      <a href="#app-store" className={base}>
        <Apple className="size-6 fill-current" strokeWidth={0} />
        <span className="leading-none">
          <span className="block font-mono text-[9px] font-bold uppercase tracking-[0.14em] opacity-70">
            Download on the
          </span>
          <span className="mt-1 block font-display text-base font-bold">App Store</span>
        </span>
      </a>
    </div>
  );
}

type PhoneProps = {
  image: string;
  title: string;
  tag: string;
  meta: string;
  price: string;
  className?: string;
};

function Phone({ image, title, tag, meta, price, className = "" }: PhoneProps) {
  return (
    <div
      className={`w-[230px] rounded-[38px] border-[3px] border-ink bg-ink p-2 shadow-hard-lg ${className}`}
    >
      <div className="relative overflow-hidden rounded-[30px] bg-paper text-ink">
        <span className="absolute left-1/2 top-2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-ink" />
        <div className="group relative h-[190px]">
          <Photo fill src={image} alt={`${title} di aplikasi EvieTrip`} />
        </div>
        <div className="p-3.5">
          <span className="rounded-full border-2 border-ink bg-lime px-2 py-0.5 font-mono text-[9px] font-bold uppercase">
            {tag}
          </span>
          <p className="mt-2 font-display text-lg font-extrabold leading-tight tracking-[-0.03em]">
            {title}
          </p>
          <p className="mt-1 flex items-center gap-1 text-[11px] text-ink/60">
            <Star className="size-3 fill-sun text-ink" /> {meta}
          </p>
          <div className="mt-3 flex items-center justify-between rounded-2xl border-2 border-ink bg-white p-2 pl-3">
            <p className="font-display text-sm font-extrabold">{price}</p>
            <span className="rounded-full bg-tangerine px-3 py-1.5 font-display text-xs font-extrabold">
              Gas!
            </span>
          </div>
          <div className="mt-3 grid grid-cols-4 gap-1.5 pb-1">
            {["bg-ink", "bg-ink/15", "bg-ink/15", "bg-ink/15"].map((tone, i) => (
              <span key={i} className={`h-1.5 rounded-full ${tone}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function AppBanner() {
  return (
    <section id="app" className="scroll-mt-28 py-16 sm:py-24">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[36px] border-2 border-ink bg-cobalt text-white shadow-hard-lg">
          {/* ring pattern */}
          <div
            aria-hidden
            className="absolute -right-40 -top-40 size-[640px] rounded-full opacity-25 [background:repeating-radial-gradient(circle,transparent_0_26px,#fff_26px_28px)]"
          />

          <div className="relative grid items-center gap-8 p-7 sm:p-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border-2 border-white/70 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.16em]">
                EvieTrip app
              </p>
              <h2 className="mt-5 font-display text-[clamp(2.1rem,5.2vw,3.75rem)] font-extrabold leading-[0.95] tracking-[-0.04em]">
                Mau liburan tapi bingung <Em>mulai dari mana?</Em>
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-white/80">
                Semua trip, itinerary, dan promo app-only ada di genggaman. Booking dua menit, bayar
                bisa dicicil, e-ticket langsung masuk.
              </p>
              <div className="mt-8">
                <StoreButtons />
              </div>
            </div>

            <div className="relative mx-auto h-[300px] w-full max-w-[420px] sm:h-[360px] lg:h-[400px]">
              <Phone
                image={photos.rajaampat}
                title="Raja Ampat Piaynemo"
                tag="4H3M · Sisa 5 seat"
                meta="4.7 · 48 buddies udah beli"
                price="Rp 9.500.000"
                className="absolute left-[4%] top-6 -rotate-6"
              />
              <Phone
                image={photos.nusapenida}
                title="Bali & Nusa Penida"
                tag="5H4M · Tersedia"
                meta="4.6 · 47 buddies udah beli"
                price="Rp 2.200.000"
                className="absolute right-[2%] top-20 hidden rotate-6 min-[440px]:block"
              />
              <Starburst
                fill="var(--color-lime)"
                className="absolute -top-2 right-[30%] size-[104px] text-ink motion-safe:animate-wiggle"
              >
                <span className="block font-mono text-[9px] font-bold uppercase">app only</span>
                <span className="block font-display text-xl font-extrabold tracking-tight">
                  -50rb
                </span>
              </Starburst>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
