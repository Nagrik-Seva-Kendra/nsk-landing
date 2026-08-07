import { useEffect, useState } from "react";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import { useLanguage, useT } from "../i18n/LanguageContext";
import { ONBOARD_URL } from "../lib/constants";
import {
  DISTRICT_COUNT,
  GWALIOR_PLACES,
  RATE_SOURCE,
  currentSessionStartYear,
  formatIndian,
  formatSession,
} from "../lib/guideline";

/** How long each locality stays on screen before the card advances. */
const SLIDE_MS = 2600;

export function Hero() {
  const t = useT();
  const { lang } = useLanguage();

  const session = formatSession(currentSessionStartYear());

  // Cycles through real localities from the 2026-2027 Gwalior guideline. The
  // rotation is doing work, not decoration: New City Centre is ₹80,000/sq.m
  // and Kotaviran ₹6,000 in the same city, and watching that change is the
  // clearest way to show why a district-level rate is meaningless.
  const [index, setIndex] = useState(0);
  useEffect(() => {
    // Anyone who has asked not to see motion gets a still card.
    const stillness = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (stillness.matches) return;

    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % GWALIOR_PLACES.length),
      SLIDE_MS,
    );
    return () => window.clearInterval(id);
  }, []);

  // Three at a time, wrapping — so the list moves rather than swapping wholesale.
  const visible = [0, 1, 2].map(
    (offset) => GWALIOR_PLACES[(index + offset) % GWALIOR_PLACES.length]!,
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
                      ? `${RATE_SOURCE.district.en} · ${session} · plot, ₹/sq.m`
                      : `${RATE_SOURCE.district.hi} · ${session} · भूखंड, ₹/वर्ग मीटर`}
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
              Real figures from the 2026-2027 Gwalior guideline. Each carries
              its ward, because that — not the city — is what the rate belongs
              to. Same district, ₹6,000 to ₹80,000: printing one "Gwalior rate"
              is how the wrong numbers got here in the first place.
            */}
            <div className="mt-4 space-y-3">
              {visible.map((row, position) => (
                <div
                  key={row.place.en}
                  className="flex items-center justify-between gap-3 rounded-xl bg-surface-2 px-4 py-3 transition-opacity duration-500"
                  style={{ opacity: position === 2 ? 0.55 : 1 }}
                >
                  <span className="min-w-0">
                    <span className="block truncate text-sm text-fg">
                      {lang === "en" ? row.place.en : row.place.hi}
                    </span>
                    <span className="block truncate text-[11px] text-muted">{row.ward}</span>
                  </span>
                  <span className="shrink-0 text-sm font-semibold tabular-nums text-primary">
                    ₹{formatIndian(row.residential)}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-xl border border-dashed border-border p-3 text-center text-xs text-muted">
              {lang === "en"
                ? `Residential plot rates from the official ${session} circular · all ${DISTRICT_COUNT} districts`
                : `सरकारी ${session} परिपत्र से आवासीय भूखंड दरें · सभी ${DISTRICT_COUNT} जिले`}
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
