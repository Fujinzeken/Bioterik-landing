import RevealOnScroll from "./RevealOnScroll";
import { useTranslations } from "next-intl";

export default function Pillars() {
  const t = useTranslations("Pillars");

  const pillars = [
    {
      title: t("pillar1.title"),
      description: t("pillar1.description"),
      icon: (
        <svg
          className="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
          />
        </svg>
      ),
    },
    {
      title: t("pillar2.title"),
      description: t("pillar2.description"),
      icon: (
        <svg
          className="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
          />
        </svg>
      ),
    },
    {
      title: t("pillar3.title"),
      description: t("pillar3.description"),
      icon: (
        <svg
          className="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
          />
        </svg>
      ),
    },
    {
      title: t("pillar4.title"),
      description: t("pillar4.description"),
      icon: (
        <svg
          className="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative py-28 lg:py-36 bg-[var(--bg-primary)] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(16,185,129,0.05),transparent)]" />

      <div className="w-full max-w-[1280px] mx-auto px-8 md:px-12 lg:px-16">
        <RevealOnScroll className="text-center mb-20">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#10b981] mb-4 block">
            {t("badge")}
          </span>
          <h2 className="font-serif text-[2.2rem] sm:text-[2.8rem] lg:text-[3.2rem] leading-[1.1] tracking-tight text-[var(--text-heading)] mb-6">
            {t("title")}
          </h2>
          <p className="text-[1rem] text-[var(--text-muted)] max-w-[520px] mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((pillar, i) => (
            <RevealOnScroll key={pillar.title} delay={i * 120}>
              <div className="group relative rounded-2xl border border-[var(--border-card)] bg-[var(--bg-card)] p-8 lg:p-10 transition-all duration-500 hover:border-[#10b981]/20 hover:bg-[#10b981]/[0.03]">
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-[radial-gradient(circle_at_100%_0%,rgba(16,185,129,0.08),transparent)] rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#10b981]/10 text-[#10b981] mb-6 transition-colors duration-300 group-hover:bg-[#10b981]/15">
                  {pillar.icon}
                </div>

                {/* Number watermark */}
                <div className="absolute top-6 right-8 text-[4rem] font-bold text-[var(--text-watermark)] leading-none select-none group-hover:text-[var(--text-watermark-hover)] transition-colors duration-500">
                  0{i + 1}
                </div>

                <h3 className="text-xl font-semibold text-[var(--text-heading)] mb-3 tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-[0.95rem] text-[var(--text-body)] leading-[1.7]">
                  {pillar.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
