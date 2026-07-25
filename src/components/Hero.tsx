import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import { useLanguage, useT } from "../i18n/LanguageContext";
import { ONBOARD_URL } from "../lib/constants";

const SAMPLE_ROWS: { district: { en: string; hi: string }; rate: string }[] = [
  { district: { en: "Gwalior — Residential", hi: "ग्वालियर — आवासीय" }, rate: "₹18,400 / sq.m" },
  { district: { en: "Bhopal — Commercial", hi: "भोपाल — व्यावसायिक" }, rate: "₹52,900 / sq.m" },
  { district: { en: "Indore — Agricultural", hi: "इंदौर — कृषि" }, rate: "₹6,200 / sq.m" },
];

export function Hero() {
  const t = useT();
  const { lang } = useLanguage();

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
                    {lang === "en" ? "Live, official rates" : "लाइव, सरकारी दरें"}
                  </p>
                </div>
              </div>
              <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
                {lang === "en" ? "Verified" : "सत्यापित"}
              </span>
            </div>

            <div className="mt-4 space-y-3">
              {SAMPLE_ROWS.map((row) => (
                <div
                  key={row.district.en}
                  className="flex items-center justify-between rounded-xl bg-surface-2 px-4 py-3"
                >
                  <span className="text-sm text-fg">{row.district[lang]}</span>
                  <span className="text-sm font-semibold text-primary">{row.rate}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-xl border border-dashed border-border p-3 text-center text-xs text-muted">
              {lang === "en"
                ? "+ 52 districts · updated with every official notification"
                : "+ 52 जिले · हर सरकारी अधिसूचना के साथ अपडेट"}
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
