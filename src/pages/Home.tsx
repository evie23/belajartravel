import { useState } from "react";
import { AppBanner } from "../components/AppBanner.tsx";
import { ChatFab } from "../components/ChatFab.tsx";
import { CultureTrips } from "../components/CultureTrips.tsx";
import { Footer } from "../components/Footer.tsx";
import { Hero } from "../components/Hero.tsx";
import { LuxuryTrips } from "../components/LuxuryTrips.tsx";
import { Marquee } from "../components/Marquee.tsx";
import { Navbar } from "../components/Navbar.tsx";
import { PrivateTrip } from "../components/PrivateTrip.tsx";
import { PromoRail } from "../components/PromoRail.tsx";
import { Reels } from "../components/Reels.tsx";
import { WeeklyTrips } from "../components/WeeklyTrips.tsx";

export function Home() {
  const [query, setQuery] = useState("");
  const [month, setMonth] = useState("");

  function search(nextQuery: string, nextMonth = month) {
    setQuery(nextQuery.trim());
    setMonth(nextMonth);
    document.getElementById("open-trip")?.scrollIntoView({ behavior: "smooth" });
  }

  function reset() {
    setQuery("");
    setMonth("");
  }

  return (
    // clip, not hidden: rotated stickers may poke past the edge without breaking the sticky header
    <div className="overflow-x-clip">
      <Navbar onSearch={(q) => search(q)} />
      <main>
        <Hero onSearch={search} />
        <PromoRail />
        <WeeklyTrips query={query} month={month} onReset={reset} />
        <LuxuryTrips />
        <CultureTrips />
        <Reels />
        <AppBanner />
        <Marquee
          className="mb-16 -rotate-1 border-y-2 border-ink bg-lime py-3 font-display text-2xl font-extrabold uppercase tracking-[-0.03em] sm:mb-24 sm:py-4 sm:text-4xl"
          items={[
            "Open trip",
            "Private trip",
            "Bisnis trip",
            "Honeymoon",
            "Family trip",
            "Company outing",
          ]}
        />
        <PrivateTrip />
      </main>
      <Footer />
      <ChatFab />
    </div>
  );
}
