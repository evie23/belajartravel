const day = new Intl.DateTimeFormat("id-ID", { day: "2-digit", timeZone: "UTC" });
const monthYear = new Intl.DateTimeFormat("id-ID", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});
const dayMonth = new Intl.DateTimeFormat("id-ID", {
  day: "2-digit",
  month: "short",
  timeZone: "UTC",
});

export function rupiah(amount: number) {
  return `Rp ${amount.toLocaleString("id-ID")}`;
}

/** "14 – 15 Nov 2026", or "30 Des – 02 Jan 2027" when the trip crosses a month */
export function dateRange(start: string, days: number) {
  const from = new Date(`${start}T00:00:00Z`);
  const to = new Date(from);
  to.setUTCDate(from.getUTCDate() + days - 1);
  if (days === 1) return `${day.format(from)} ${monthYear.format(from)}`;
  const sameMonth = from.getUTCMonth() === to.getUTCMonth();
  return `${sameMonth ? day.format(from) : dayMonth.format(from)} – ${day.format(to)} ${monthYear.format(to)}`;
}

/** "3H2M" = 3 hari 2 malam */
export function duration(days: number) {
  return days === 1 ? "1 Hari" : `${days}H${days - 1}M`;
}
