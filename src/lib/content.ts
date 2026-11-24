import { getCollection } from 'astro:content';

export const categoryOrder = ['community-services', 'employment', 'arts-culture', 'collaborations'] as const;

export async function getPrograms(lang = 'en') {
  const all = await getCollection('programs', ({ data }) => !data.draft && data.lang === lang);
  return all.sort((a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title));
}

function startOfToday() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}

export async function getEvents(lang = 'en') {
  const all = await getCollection('events', ({ data }) => !data.draft && data.lang === lang);
  const today = startOfToday();
  const isPast = (e: (typeof all)[number]) => (e.data.endDate ?? e.data.date) < today;
  const upcoming = all.filter((e) => !isPast(e)).sort((a, b) => +a.data.date - +b.data.date);
  const past = all.filter(isPast).sort((a, b) => +b.data.date - +a.data.date);
  return { upcoming, past };
}

export function formatDate(d: Date, end?: Date) {
  const opts: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' };
  const f = new Intl.DateTimeFormat('en-US', opts);
  return end && +end !== +d ? `${f.format(d)} to ${f.format(end)}` : f.format(d);
}

export function shortDate(d: Date) {
  return {
    month: new Intl.DateTimeFormat('en-US', { month: 'short', timeZone: 'UTC' }).format(d),
    day: new Intl.DateTimeFormat('en-US', { day: 'numeric', timeZone: 'UTC' }).format(d),
  };
}

export function isExternal(url: string) {
  return /^https?:\/\//.test(url);
}
