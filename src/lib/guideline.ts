/**
 * Facts about the guideline-rate archive, kept in one place so the marketing
 * page cannot drift from the product.
 *
 * These mirror `apps/web/src/features/guideline/useGuideline.ts` in Sampada.
 * Deliberately no rupee figures live here: collector rates are set per district
 * *and* per locality *and* per property type, they change with every
 * notification, and Sampada stores them as the official PDFs rather than as
 * numbers we retype. A headline rate on this page would be a number nobody
 * could point at a source for — which is exactly how the wrong ones got here.
 */

/** Collector guideline PDFs begin with the 2015-2016 registration session. */
export const GUIDELINE_START_YEAR = 2015;

/**
 * Registration sessions run 1 April → 31 March, so a session is named by its
 * starting year: 2026 means "2026-2027". Before 1 April the current session is
 * still last year's — which is why this is computed and not typed in.
 */
export function currentSessionStartYear(now: Date = new Date()): number {
  const isBeforeApril = now.getMonth() < 3; // Jan(0) – Mar(2)
  return now.getFullYear() - (isBeforeApril ? 1 : 0);
}

/** `2026` → `"2026-2027"`. */
export function formatSession(year: number): string {
  return `${year}-${year + 1}`;
}

/** e.g. `"2015-2016 – 2026-2027"`, for the stat strip. */
export function sessionSpan(now: Date = new Date()): string {
  return `${formatSession(GUIDELINE_START_YEAR)} – ${formatSession(currentSessionStartYear(now))}`;
}

export type District = { en: string; hi: string };

/**
 * The districts shown in the hero card, rotating. A subset of the 52 on
 * purpose — these are the ones a visitor from Gwalior recognises — but every
 * name here is a real MP district that the lookup actually covers.
 */
export const FEATURED_DISTRICTS: District[] = [
  { en: "Gwalior", hi: "ग्वालियर" },
  { en: "Bhopal", hi: "भोपाल" },
  { en: "Indore", hi: "इंदौर" },
  { en: "Jabalpur", hi: "जबलपुर" },
  { en: "Ujjain", hi: "उज्जैन" },
  { en: "Sagar", hi: "सागर" },
  { en: "Rewa", hi: "रीवा" },
  { en: "Satna", hi: "सतना" },
  { en: "Datia", hi: "दतिया" },
  { en: "Shivpuri", hi: "शिवपुरी" },
];

export const DISTRICT_COUNT = 52;
