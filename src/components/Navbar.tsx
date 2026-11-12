import { ArrowRight, Menu, Search, X } from "lucide-react";
import { type FormEvent, useState } from "react";
import { Marquee } from "./Marquee.tsx";

const links = [
  { label: "Open Trip", href: "#open-trip" },
  { label: "Private Trip", href: "#private-trip" },
  { label: "Bisnis Trip", href: "#private-trip" },
  { label: "Promo", href: "#promo", hot: true },
  { label: "Testimoni", href: "#testimoni" },
];

export function Logo({ className = "" }: { className?: string }) {
  return (
    <a
      href="#top"
      aria-label="EvieTrip — beranda"
      className={`font-display text-[30px] font-extrabold leading-none tracking-[-0.07em] ${className}`}
    >
      Evie
      <em className="font-serif text-[1.1em] font-normal tracking-[-0.03em] text-tangerine">
        Trip
      </em>
    </a>
  );
}

export function Navbar({ onSearch }: { onSearch: (query: string) => void }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  function submit(e: FormEvent) {
    e.preventDefault();
    onSearch(query);
    setOpen(false);
  }

  const searchField = (
    <form
      onSubmit={submit}
      role="search"
      className="flex w-full items-center gap-2 rounded-full border-2 border-ink bg-white py-1.5 pl-4 pr-1.5 transition focus-within:shadow-hard-sm"
    >
      <Search className="size-4 shrink-0" strokeWidth={2.5} />
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Cari destinasi"
        placeholder="Cari destinasi impianmu…"
        className="w-full min-w-0 bg-transparent text-sm font-medium outline-none placeholder:text-ink/45"
      />
      <button
        type="submit"
        aria-label="Cari"
        className="grid size-8 shrink-0 place-items-center rounded-full bg-ink text-paper transition hover:bg-tangerine hover:text-ink"
      >
        <ArrowRight className="size-4" strokeWidth={2.5} />
      </button>
    </form>
  );

  return (
    <header className="sticky top-0 z-40">
      <Marquee
        className="bg-ink py-2 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-lime"
        separator={<span className="text-tangerine">✺</span>}
        items={[
          "Year End Sale — hemat s.d. 400rb/pax",
          "Cicilan 0% tanpa kartu kredit",
          "Gratis dokumentasi drone",
          "Trip baru tiap minggu",
        ]}
      />
      <div className="border-b-2 border-ink bg-paper/90 backdrop-blur-md">
        <div className="container-x flex h-[68px] items-center gap-5">
          <Logo />

          <div className="hidden max-w-[320px] flex-1 lg:block">{searchField}</div>

          <nav aria-label="Utama" className="ml-auto hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative rounded-full px-3.5 py-2 font-display text-[15px] font-semibold transition hover:bg-ink hover:text-paper"
              >
                {link.label}
                {link.hot && (
                  <span className="absolute -right-1 -top-1.5 rotate-6 rounded-full border-2 border-ink bg-lime px-1.5 py-px font-mono text-[9px] font-bold leading-tight text-ink">
                    HOT
                  </span>
                )}
              </a>
            ))}
          </nav>

          <a
            href="#masuk"
            className="ml-auto rounded-full border-2 border-ink bg-ink px-5 py-2 font-display text-[15px] font-bold text-paper shadow-[3px_3px_0_0_var(--color-tangerine)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[5px_5px_0_0_var(--color-tangerine)] active:translate-y-0 active:shadow-none md:ml-2"
          >
            Masuk
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            className="grid size-10 place-items-center rounded-full border-2 border-ink bg-white md:hidden"
          >
            {open ? (
              <X className="size-5" strokeWidth={2.5} />
            ) : (
              <Menu className="size-5" strokeWidth={2.5} />
            )}
          </button>
        </div>

        {open && (
          <div id="mobile-menu" className="border-t-2 border-ink bg-paper md:hidden">
            <div className="container-x flex flex-col gap-4 py-5">
              {searchField}
              <nav aria-label="Utama (mobile)" className="flex flex-col">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between border-b border-ink/15 py-3.5 font-display text-2xl font-extrabold tracking-[-0.03em]"
                  >
                    {link.label}
                    <ArrowRight className="size-5" strokeWidth={2.5} />
                  </a>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
