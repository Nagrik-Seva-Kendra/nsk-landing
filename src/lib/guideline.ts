/**
 * Facts about the guideline-rate archive, kept in one place so the marketing
 * page cannot drift from the product.
 *
 * The session helpers mirror `apps/web/src/features/guideline/useGuideline.ts`
 * in Sampada.
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

export const DISTRICT_COUNT = 52;

/**
 * Real residential-plot rates, read out of the official
 * **2026-2027 Gwalior collector guideline** (2026-2027-Gwalior-en.pdf).
 *
 * ## Every one of these is a locality, never a district
 *
 * The page used to say "Gwalior — Residential ₹18,400 / sq.m". No such number
 * exists. A collector rate is fixed per *guideline place* — a colony, a ward,
 * one side of a road — and inside Gwalior alone the residential plot rate runs
 * from ₹6,000 to ₹80,000 per sq.m. A single district figure is wrong for
 * almost every plot it claims to describe, which is why these carry their ward
 * and tehsil and are shown as a spread rather than an average.
 *
 * ## Checked, not transcribed from memory
 *
 * Extracted with `pdftotext -layout` and cross-checked against the PDF on
 * screen: page 100 rows 869–881 matched digit for digit. Rows whose names wrap
 * across lines were skipped, because the extractor shifts their columns and a
 * misread column is a wrong rate.
 *
 * `residential` and `commercial` are columns (3) and (4) — PLOT (SQM). Not the
 * building, multi-storey or agricultural columns, which are different numbers
 * on the same row.
 *
 * To refresh for the next session: re-read the new PDF, keep the ward, and
 * update `SOURCE`. Never carry a figure forward unchecked.
 */
export const RATE_SOURCE = {
  district: { en: "Gwalior", hi: "ग्वालियर" },
  session: 2026,
  /** Named on the page so the claim is checkable, not just asserted. */
  document: "2026-2027-Gwalior-en.pdf",
} as const;

export type GuidelinePlace = {
  place: { en: string; hi: string };
  /** Ward and tehsil, because the rate belongs to them and not to the city. */
  ward: string;
  /** Residential plot, ₹ per sq.m — column (3). */
  residential: number;
  /** Commercial plot, ₹ per sq.m — column (4). */
  commercial: number;
  /** Page in the source PDF, so any figure here can be looked up in a minute. */
  page: number;
};

export const GWALIOR_PLACES: GuidelinePlace[] = [
  {
    place: { en: "New City Centre", hi: "न्यू सिटी सेंटर" },
    ward: "Ward 30 · Citycenter",
    residential: 80000,
    commercial: 120000,
    page: 52,
  },
  {
    // Source row reads "PINTO PARK BHIND ROAD SE MORAR" — the stretch, not
    // the whole colony. Kept close to that wording so it can be found.
    place: { en: "Pinto Park, Bhind Rd → Morar", hi: "पिंटो पार्क, भिंड रोड से मुरार" },
    ward: "Ward 19 · Murar",
    residential: 32000,
    commercial: 48000,
    page: 24,
  },
  {
    place: { en: "Morar Enclave", hi: "मुरार एन्क्लेव" },
    ward: "Ward 21 · Murar",
    residential: 23000,
    commercial: 34500,
    page: 28,
  },
  {
    place: { en: "Jarga (road facing)", hi: "जरगा (रोड पर)" },
    ward: "Ward 61 · Citycenter",
    residential: 15000,
    commercial: 22500,
    page: 100,
  },
  {
    place: { en: "Kotaviran (inner)", hi: "कोटावीरन (रोड से अंदर)" },
    ward: "Ward 61 · Murar",
    residential: 6000,
    commercial: 9000,
    page: 100,
  },
];

/** Indian digit grouping — 80000 → "80,000", 120000 → "1,20,000". */
export function formatIndian(value: number): string {
  const s = String(value);
  if (s.length <= 3) return s;
  const last3 = s.slice(-3);
  const rest = s.slice(0, -3).replace(/\B(?=(\d{2})+(?!\d))/g, ",");
  return `${rest},${last3}`;
}
