import { Mail, MapPin, Phone } from "lucide-react";
import { useT } from "../i18n/LanguageContext";

export function Footer() {
  const t = useT();
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-border bg-surface-2/40 pt-16 pb-8">
      <div className="wrap grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div>
          <p className="font-display text-lg font-bold text-fg">{t("brandName")}</p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">{t("footTagline")}</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">
            {t("footProduct")}
          </p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-muted">
            <a href="#features" className="hover:text-fg">
              {t("navFeatures")}
            </a>
            <a href="#security" className="hover:text-fg">
              {t("navSecurity")}
            </a>
            <a href="#testimonials" className="hover:text-fg">
              {t("navTestimonials")}
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">
            {t("footLegal")}
          </p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-muted">
            <a href="#" className="hover:text-fg">
              {t("footPrivacy")}
            </a>
            <a href="#" className="hover:text-fg">
              {t("footTerms")}
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">
            {t("footContact")}
          </p>
          <div className="mt-3 flex flex-col gap-3 text-sm text-muted">
            <a href={`tel:${t("phone").replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-fg">
              <Phone size={14} /> {t("phone")}
            </a>
            <a href={`mailto:${t("email")}`} className="flex items-center gap-2 hover:text-fg">
              <Mail size={14} /> {t("email")}
            </a>
            <p className="flex items-start gap-2 whitespace-pre-line">
              <MapPin size={14} className="mt-0.5 shrink-0" /> {t("brandSub")}
            </p>
          </div>
        </div>
      </div>

      <div className="wrap mt-12 border-t border-border pt-6 text-center text-xs text-muted">
        © {year} {t("brandName")}. {t("footRights")}
      </div>
    </footer>
  );
}
