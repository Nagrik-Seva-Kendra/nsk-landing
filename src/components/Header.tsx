import { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useLanguage, useT } from "../i18n/LanguageContext";
import { useTheme } from "../lib/useTheme";
import { ONBOARD_URL } from "../lib/constants";

const NAV_LINKS: { key: "navFeatures" | "navSecurity" | "navTestimonials" | "navContact"; href: string }[] = [
  { key: "navFeatures", href: "#features" },
  { key: "navSecurity", href: "#security" },
  { key: "navTestimonials", href: "#testimonials" },
  { key: "navContact", href: "#contact" },
];

export function Header() {
  const t = useT();
  const { lang, toggle: toggleLang } = useLanguage();
  const { theme, toggle: toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/90 backdrop-blur">
      <div className="wrap flex h-16 items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2 shrink-0">
          <span className="font-display text-lg font-bold text-fg">{t("brandName")}</span>
          <span className="rounded-full bg-accent-soft px-2 py-0.5 text-xs font-semibold text-accent">
            {t("brandProduct")}
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-fg"
            >
              {t(link.key)}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <button
            onClick={toggleLang}
            className="rounded-md border border-border px-2.5 py-1.5 text-xs font-semibold text-muted hover:text-fg"
            aria-label="Toggle language"
          >
            {lang === "en" ? "हिं" : "EN"}
          </button>
          <button
            onClick={toggleTheme}
            className="rounded-md border border-border p-1.5 text-muted hover:text-fg"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
          </button>
          <a
            href={ONBOARD_URL}
            className="ml-1 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-fg shadow-sm transition-transform hover:scale-[1.03]"
          >
            {t("navCta")}
          </a>
        </div>

        <button
          className="p-2 text-fg md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-surface px-6 pb-6 pt-2 md:hidden">
          <nav className="flex flex-col gap-4 pt-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-muted hover:text-fg"
              >
                {t(link.key)}
              </a>
            ))}
          </nav>
          <div className="mt-5 flex items-center gap-2">
            <button
              onClick={toggleLang}
              className="rounded-md border border-border px-3 py-1.5 text-xs font-semibold text-muted"
            >
              {lang === "en" ? "हिं" : "EN"}
            </button>
            <button
              onClick={toggleTheme}
              className="rounded-md border border-border p-1.5 text-muted"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
            </button>
          </div>
          <a
            href={ONBOARD_URL}
            className="mt-4 block rounded-full bg-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-fg"
          >
            {t("navCta")}
          </a>
        </div>
      )}
    </header>
  );
}
