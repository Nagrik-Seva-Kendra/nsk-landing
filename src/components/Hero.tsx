import { useEffect, useState } from "react";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import { useLanguage, useT } from "../i18n/LanguageContext";
import { ONBOARD_URL } from "../lib/constants";
import {
  DISTRICT_COUNT,
  FEATURED_DISTRICTS,
  currentSessionStartYear,
  formatSession,
} from "../lib/guideline";

/** How long each district stays on screen before the card advances. */
const SLIDE_MS = 2600;

export function Hero() {
  const t = useT();
  const { lang } = useLanguage();

  const session = formatSession(currentSessionStartYear());

  // The card cycles through real districts. It shows what the lookup covers,
  // not invented rates: collector rates vary by locality and property type
  // within a single district, so no one number is true for "Gwalior".
  const [index, setIndex] = useState(0);
  useEffect(() => {
    // Anyone who has asked not to see motion gets a still card.
    const stillness = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (stillness.matches) return;

    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % FEATURED_DISTRICTS.length),
      SLIDE_MS,
    );
    return () => window.clearInterval(id);
  }, []);

  // Three at a time, wrapping — so the list moves rather than swapping wholesale.
  const visible = [0, 1, 2].map(
    (offset) => FEATURED_DISTRICTS[(index + offset) % FEATURED_DISTRICTS.length]!,
  );

  return (
    <section id="top" className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px]"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, var(--accent-soft) 0%, transparent 70%)",
        }}
      />
      <div className="wrap grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold text-accent">
            <Sparkles size={13} />
            {t("heroKicker")}
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] text-fg sm:text-5xl lg:text-[3.25rem]">
            {t("heroTitle")}
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{t("heroSub")}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={ONBOARD_URL}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-fg shadow-[var(--shadow)] transition-transform hover:scale-[1.02]"
            >
              {t("heroCtaPrimary")}
              <ArrowRight size={16} />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold text-fg hover:bg-surface-2"
            >
              {t("heroCtaSecondary")}
            </a>
          </div>

          <p className="mt-4 text-xs text-muted">{t("heroNote")}</p>
        </div>

        <div className="relative">
          <div className="rounded-2xl border border-border bg-surface p-5 shadow-[var(--shadow)] sm:p-6">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-soft text-accent">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-fg">
                    {lang === "en" ? "Guideline Rate Lookup" : "गाइडलाइन दर खोज"}
                  </p>
                  <p className="text-xs text-muted">
                    {lang === "en"
                      ? `${session} session · official PDFs`
                      : `${session} सत्र · सरकारी पीडीएफ`}
                  </p>
                </div>
              </div>
              {/* The session, not a "Verified" stamp: what this card can honestly
                  vouch for is which session's circulars are on file. */}
              <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold tabular-nums text-primary">
                {session}
              </span>
            </div>

            {/*
              Each row carries the district in *both* scripts — which differs
              row to row, unlike the identical "EN + हिं" badge this replaced,
              and shows the bilingual promise instead of asserting it.

              The right-hand column is where a collector rate would go. It does
              not hold one, because a rate is set per locality and property type
              *inside* a district: a single figure labelled "Gwalior" is wrong
              for almost every plot in Gwalior. Any rate put here later must
              name its locality and property type alongside it.
            */}
            <div className="mt-4 space-y-3">
              {visible.map((district, position) => (
                <div
                  key={district.en}
                  className="flex items-center justify-between rounded-xl bg-surface-2 px-4 py-3 transition-opacity duration-500"
                  style={{ opacity: position === 2 ? 0.55 : 1 }}
                >
                  <span className="text-sm text-fg">
                    {lang === "en" ? district.en : district.hi}
                  </span>
                  <span className="text-sm font-semibold text-primary">
                    {lang === "en" ? district.hi : district.en}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-xl border border-dashed border-border p-3 text-center text-xs text-muted">
              {lang === "en"
                ? `All ${DISTRICT_COUNT} districts · updated with every official notification`
                : `सभी ${DISTRICT_COUNT} जिले · हर सरकारी अधिसूचना के साथ अपडेट`}
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 hidden rounded-xl border border-border bg-surface px-4 py-3 shadow-[var(--shadow)] sm:block">
            <p className="text-2xl font-extrabold text-fg">2.4L+</p>
            <p className="text-xs text-muted">
              {lang === "en" ? "records tracked" : "रिकॉर्ड ट्रैक किए गए"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
