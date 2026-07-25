import { ArrowRight } from "lucide-react";
import { useT } from "../i18n/LanguageContext";
import { ONBOARD_URL } from "../lib/constants";

export function CTA() {
  const t = useT();

  return (
    <section className="py-20 md:py-28">
      <div className="wrap">
        <div className="rounded-3xl bg-primary px-8 py-14 text-center sm:px-16">
          <h2 className="font-display text-3xl font-extrabold text-primary-fg sm:text-4xl">
            {t("ctaTitle")}
          </h2>
          <p className="mt-4 text-base text-primary-fg/85">{t("ctaSub")}</p>
          <a
            href={ONBOARD_URL}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary-fg px-7 py-3.5 text-sm font-semibold text-primary shadow-lg transition-transform hover:scale-[1.02]"
          >
            {t("ctaButton")}
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
