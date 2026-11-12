import { ArrowUpRight, MapPin } from "lucide-react";
import { StoreButtons } from "./AppBanner.tsx";
import { Logo } from "./Navbar.tsx";

const columns = [
  {
    title: "Layanan Kami",
    links: ["Private Trip", "Open Trip", "Bisnis Trip", "Promo", "Daftar Agent"],
  },
  { title: "Perusahaan", links: ["Tentang Kami", "Artikel", "Karier"] },
  {
    title: "Bantuan & Legal",
    links: ["Syarat & Ketentuan", "Kebijakan Privasi", "Kebijakan Hapus Akun"],
  },
];

const socials = ["Instagram", "TikTok", "YouTube", "Facebook"];
const partners = ["Wonderful Indonesia", "Pesona Indonesia"];
const payments = [
  "BCA",
  "BNI",
  "BRI",
  "Mandiri",
  "QRIS",
  "GoPay",
  "OVO",
  "DANA",
  "ShopeePay",
  "Visa",
  "Mastercard",
  "Kredivo",
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden rounded-t-[36px] bg-ink text-paper sm:rounded-t-[48px]">
      <div className="container-x pt-16 sm:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Logo className="text-[44px] text-paper" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/60">
              Travel buddy buat yang butuh kabur sebentar. Open trip, private trip, dan outing
              kantor ke 100+ destinasi.
            </p>

            <p className="mt-8 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-lime">
              Head office
            </p>
            <address className="mt-2 flex max-w-xs gap-2 text-sm not-italic leading-relaxed text-paper/70">
              <MapPin className="mt-0.5 size-4 shrink-0 text-tangerine" strokeWidth={2.5} />
              Jl. Jalan-Jalan No. 8, Kebayoran Baru, Jakarta Selatan, DKI Jakarta 12190
            </address>

            <p className="mt-8 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-lime">
              Follow us on
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {socials.map((name) => (
                <li key={name}>
                  <a
                    href={`#${name.toLowerCase()}`}
                    className="group/s inline-flex items-center gap-1 rounded-full border-2 border-paper/25 px-3.5 py-1.5 font-display text-sm font-bold transition hover:border-lime hover:bg-lime hover:text-ink"
                  >
                    {name}
                    <ArrowUpRight
                      className="size-3.5 transition-transform group-hover/s:rotate-45"
                      strokeWidth={2.5}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
            {columns.map((column) => (
              <nav key={column.title} aria-label={column.title}>
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-lime">
                  {column.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a
                        href={`#${link.toLowerCase().replaceAll(/[^a-z]+/g, "-")}`}
                        className="text-[15px] text-paper/75 underline-offset-4 transition hover:text-paper hover:underline"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
            <div className="col-span-2 sm:col-span-1">
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-lime">
                Download app
              </p>
              <div className="mt-4">
                <StoreButtons onDark />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-8 border-t border-paper/15 pt-8 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-paper/50">
              Official partner
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {partners.map((name) => (
                <li
                  key={name}
                  className="rounded-lg bg-paper px-3 py-1.5 font-display text-xs font-extrabold text-ink"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-paper/50">
              Partner pembayaran
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {payments.map((name) => (
                <li
                  key={name}
                  className="rounded-lg border border-paper/20 px-2.5 py-1.5 font-mono text-[11px] font-bold uppercase tracking-wide text-paper/80"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-paper/15 py-6 font-mono text-[11px] uppercase tracking-[0.12em] text-paper/50">
          <p>© 2026 EvieTrip. All rights reserved.</p>
          <p>Dibuat sambil nunggu boarding ✈</p>
        </div>
      </div>

      {/* oversized wordmark, cropped by the footer edge */}
      <p
        aria-hidden
        className="pointer-events-none mt-4 select-none whitespace-nowrap text-center font-display text-[23vw] font-extrabold leading-[0.98] tracking-[-0.08em] text-lime"
      >
        Evie
        <em className="font-serif text-[1.1em] font-normal tracking-[-0.04em] text-tangerine">
          Trip
        </em>
      </p>
    </footer>
  );
}
