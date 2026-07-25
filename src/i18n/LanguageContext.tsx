import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { strings, type Language } from "./strings";

const STORAGE_KEY = "nsk-landing-lang";

type LanguageContextValue = {
  lang: Language;
  setLang: (lang: Language) => void;
  toggle: () => void;
  s: typeof strings;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLang(): Language {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "en" || stored === "hi") return stored;
  return navigator.language?.toLowerCase().startsWith("hi") ? "hi" : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(getInitialLang);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang,
      toggle: () => setLang((prev) => (prev === "en" ? "hi" : "en")),
      s: strings,
    }),
    [lang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

/** Pull the active-language string for a given strings.ts entry. */
export function useT() {
  const { lang, s } = useLanguage();
  return <K extends keyof typeof strings>(key: K) => s[key][lang];
}
