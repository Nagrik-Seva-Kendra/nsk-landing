import { FolderKanban, IndianRupee, Languages, ScanLine, ScrollText, Users } from "lucide-react";
import { useT } from "../i18n/LanguageContext";
import type { ComponentType } from "react";

type FeatureKey = {
  icon: ComponentType<{ size?: number }>;
  title: "featGuidelineTitle" | "featDeedsTitle" | "featDeedMgmtTitle" | "featDocsTitle" | "featTeamTitle" | "featBilingualTitle";
  desc: "featGuidelineDesc" | "featDeedsDesc" | "featDeedMgmtDesc" | "featDocsDesc" | "featTeamDesc" | "featBilingualDesc";
};

const FEATURES: FeatureKey[] = [
  { icon: IndianRupee, title: "featGuidelineTitle", desc: "featGuidelineDesc" },
  { icon: ScrollText, title: "featDeedsTitle", desc: "featDeedsDesc" },
  { icon: FolderKanban, title: "featDeedMgmtTitle", desc: "featDeedMgmtDesc" },
  { icon: ScanLine, title: "featDocsTitle", desc: "featDocsDesc" },
  { icon: Users, title: "featTeamTitle", desc: "featTeamDesc" },
  { icon: Languages, title: "featBilingualTitle", desc: "featBilingualDesc" },
];

export function Features() {
  const t = useT();

  return (
    <section id="features" className="py-20 md:py-28">
      <div className="wrap">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wide text-accent">
            {t("featuresKicker")}
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-fg sm:text-4xl">{t("featuresTitle")}</h2>
          <p className="mt-4 text-base text-muted">{t("featuresSub")}</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-surface p-6 transition-shadow hover:shadow-[var(--shadow)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-base font-bold text-fg">{t(title)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{t(desc)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
