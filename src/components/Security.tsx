import { Headset, KeyRound, Lock, ShieldCheck } from "lucide-react";
import type { ComponentType } from "react";
import { useT } from "../i18n/LanguageContext";

type Pillar = {
  icon: ComponentType<{ size?: number }>;
  title: "sec1Title" | "sec2Title" | "sec3Title" | "sec4Title";
  desc: "sec1Desc" | "sec2Desc" | "sec3Desc" | "sec4Desc";
};

const PILLARS: Pillar[] = [
  { icon: ShieldCheck, title: "sec1Title", desc: "sec1Desc" },
  { icon: Lock, title: "sec2Title", desc: "sec2Desc" },
  { icon: KeyRound, title: "sec3Title", desc: "sec3Desc" },
  { icon: Headset, title: "sec4Title", desc: "sec4Desc" },
];

export function Security() {
  const t = useT();

  return (
    <section id="security" className="bg-surface-2/50 py-20 md:py-28">
      <div className="wrap">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wide text-accent">
            {t("securityKicker")}
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-fg sm:text-4xl">{t("securityTitle")}</h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-border bg-surface p-6 text-center">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-sm font-bold text-fg">{t(title)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{t(desc)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
