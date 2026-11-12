import {
  ArrowRight,
  Building2,
  HeartHandshake,
  MessageCircleMore,
  Tent,
  Users,
} from "lucide-react";
import { photos } from "../data/photos.ts";
import { Photo } from "./Photo.tsx";
import { Em } from "./SectionHeading.tsx";
import { SpinBadge } from "./Stickers.tsx";

const fits = [
  { icon: Building2, label: "Company Gathering / Outing", tone: "bg-cobalt text-white" },
  { icon: Users, label: "Family Trip", tone: "bg-lime" },
  { icon: HeartHandshake, label: "Wedding / Honeymoon Trip", tone: "bg-bubblegum" },
  { icon: Tent, label: "Komunitas / Group Trip", tone: "bg-lilac" },
];

export function PrivateTrip() {
  return (
    <section id="private-trip" className="scroll-mt-28 pb-20 sm:pb-28">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ink/60">
            <span className="size-2 rounded-full bg-tangerine" />
            Private trip
          </p>
          <h2 className="mt-3 font-display text-[clamp(2.1rem,5.2vw,3.75rem)] font-extrabold leading-[0.95] tracking-[-0.04em]">
            Private trip buat setiap <Em>momen spesial</Em>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/70">
            Trip eksklusif yang dirancang khusus buat rombonganmu: keluarga, kantor, sampai
            komunitas. Bebas tentuin destinasi, itinerary, dan gaya jalannya. Lebih fleksibel, lebih
            personal.
          </p>

          <p className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-white px-4 py-2 text-sm font-semibold shadow-hard-sm">
            <MessageCircleMore className="size-4 text-cobalt" strokeWidth={2.5} />
            Konsultasi gratis, fast respon
          </p>

          <p className="mt-8 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ink/55">
            Cocok untuk:
          </p>
          <ul className="mt-3 grid gap-3 sm:grid-cols-2">
            {fits.map(({ icon: Icon, label, tone }) => (
              <li
                key={label}
                className="flex items-center gap-3 rounded-2xl border-2 border-ink bg-white p-3 transition duration-200 hover:-translate-y-0.5 hover:shadow-hard"
              >
                <span
                  className={`grid size-10 shrink-0 place-items-center rounded-xl border-2 border-ink ${tone}`}
                >
                  <Icon className="size-5" strokeWidth={2.25} />
                </span>
                <span className="font-display text-[15px] font-bold leading-tight">{label}</span>
              </li>
            ))}
          </ul>

          <a
            href="#rencanakan"
            className="group/btn mt-9 inline-flex items-center gap-3 rounded-full border-2 border-ink bg-tangerine px-7 py-4 font-display text-lg font-extrabold shadow-hard transition duration-200 hover:-translate-y-0.5 hover:bg-lime hover:shadow-hard-lg active:translate-y-0 active:shadow-none"
          >
            Rencanain trip sekarang
            <ArrowRight
              className="size-5 transition-transform group-hover/btn:translate-x-1"
              strokeWidth={2.5}
            />
          </a>
        </div>

        <div className="relative mx-auto w-full max-w-[520px]">
          <div
            aria-hidden
            className="absolute inset-0 translate-x-4 translate-y-4 -rotate-3 rounded-[36px] border-2 border-ink bg-lilac"
          />
          <div className="group relative aspect-[4/4.4] rotate-2 overflow-hidden rounded-[36px] border-2 border-ink">
            <Photo fill src={photos.group} alt="Rombongan private trip bersiap naik kapal" />
          </div>

          <div className="absolute -bottom-6 -left-3 -rotate-3 rounded-2xl border-2 border-ink bg-white px-5 py-3.5 shadow-hard sm:-left-8">
            <p className="font-display text-4xl font-extrabold leading-none tracking-[-0.04em]">
              100+
            </p>
            <p className="mt-1 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-ink/60">
              Destinasi
            </p>
          </div>

          <SpinBadge
            text="custom itinerary ✺ bebas atur ✺ no drama ✺ "
            className="absolute -right-3 -top-8 size-[116px] bg-sun shadow-hard sm:-right-8 sm:size-[132px]"
          >
            <span className="grid size-12 place-items-center rounded-full bg-ink font-display text-xl font-extrabold text-sun sm:size-14">
              ✌
            </span>
          </SpinBadge>
        </div>
      </div>
    </section>
  );
}
