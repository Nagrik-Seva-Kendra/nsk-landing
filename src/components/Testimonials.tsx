import { useT } from "../i18n/LanguageContext";

const TESTIMONIALS: { name: "t1Name" | "t2Name" | "t3Name"; role: "t1Role" | "t2Role" | "t3Role"; quote: "t1Quote" | "t2Quote" | "t3Quote" }[] = [
  { name: "t1Name", role: "t1Role", quote: "t1Quote" },
  { name: "t2Name", role: "t2Role", quote: "t2Quote" },
  { name: "t3Name", role: "t3Role", quote: "t3Quote" },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

export function Testimonials() {
  const t = useT();

  return (
    <section id="testimonials" className="py-20 md:py-28">
      <div className="wrap">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-fg sm:text-4xl">{t("testimonialsTitle")}</h2>
          <p className="mt-4 text-base text-muted">{t("testimonialsSub")}</p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map(({ name, role, quote }) => {
            const displayName = t(name);
            return (
              <figure key={name} className="rounded-2xl border border-border bg-surface p-6">
                <blockquote className="text-sm leading-relaxed text-fg">“{t(quote)}”</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft text-sm font-bold text-accent">
                    {initials(displayName)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-fg">{displayName}</p>
                    <p className="text-xs text-muted">{t(role)}</p>
                  </div>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
