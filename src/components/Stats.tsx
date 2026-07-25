import { useT } from "../i18n/LanguageContext";

const STATS: { value: "stat1Value" | "stat2Value" | "stat3Value" | "stat4Value"; label: "stat1Label" | "stat2Label" | "stat3Label" | "stat4Label" }[] = [
  { value: "stat1Value", label: "stat1Label" },
  { value: "stat2Value", label: "stat2Label" },
  { value: "stat3Value", label: "stat3Label" },
  { value: "stat4Value", label: "stat4Label" },
];

export function Stats() {
  const t = useT();

  return (
    <section className="border-y border-border bg-surface-2/50 py-14">
      <div className="wrap">
        <p className="text-center text-sm font-semibold uppercase tracking-wide text-muted">
          {t("statsTitle")}
        </p>
        <div className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.value} className="text-center">
              <p className="font-display text-3xl font-extrabold text-primary sm:text-4xl">
                {t(stat.value)}
              </p>
              <p className="mt-1 text-sm text-muted">{t(stat.label)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
