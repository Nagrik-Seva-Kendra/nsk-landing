import { useT } from "../i18n/LanguageContext";

export function Quote() {
  const t = useT();

  return (
    <section className="border-y border-border bg-surface-2/50 py-16">
      <div className="wrap max-w-2xl text-center">
        <p className="font-display text-xl font-semibold leading-snug text-fg sm:text-2xl">
          {t("quoteText")}
        </p>
        <p className="mt-5 text-sm font-semibold text-fg">{t("quoteAuthor")}</p>
        <p className="text-xs text-muted">{t("quoteRole")}</p>
      </div>
    </section>
  );
}
