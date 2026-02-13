import RevealOnScroll from "./RevealOnScroll";
import { useTranslations } from "next-intl";

export default function WhyChoose() {
  const t = useTranslations("WhyChoose");

  const reasons = [
    {
      title: t("reason1.title"),
      description: t("reason1.description"),
      icon: (
        <svg
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342"
          />
        </svg>
      ),
    },
    {
      title: t("reason2.title"),
      description: t("reason2.description"),
      icon: (
        <svg
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      title: t("reason3.title"),
      description: t("reason3.description"),
      icon: (
        <svg
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative py-28 lg:py-36 bg-[var(--bg-alt)] overflow-hidden">
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#10b981]/15 to-transparent" />
      {/* Background glow */}
      <div className="absolute bottom-0 left-[20%] w-[600px] h-[400px] rounded-full bg-[#10b981]/[0.03] blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1280px] mx-auto px-8 md:px-12 lg:px-16">
        <RevealOnScroll className="text-center mb-20">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#10b981] mb-4 block">
            {t("badge")}
          </span>
          <h2 className="font-serif text-[2.2rem] sm:text-[2.8rem] lg:text-[3.2rem] leading-[1.1] tracking-tight text-[var(--text-heading)] mb-6">
            {t("title.why")}{" "}
            <span className="bg-linear-to-r from-[#10b981] to-[#14b8a6] bg-clip-text text-transparent">
              {t("title.choose")}
            </span>
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <RevealOnScroll key={reason.title} delay={i * 150}>
              <div className="group relative text-center lg:text-left">
                {/* Divider line on non-first items (desktop) */}
                {i > 0 && (
                  <div className="hidden lg:block absolute -left-4 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-[var(--border-card)] to-transparent" />
                )}

                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-[#10b981]/15 to-[#14b8a6]/5 text-[#10b981] mb-7 mx-auto lg:mx-0 transition-all duration-300 group-hover:from-[#10b981]/25 group-hover:to-[#14b8a6]/10 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]">
                  {reason.icon}
                </div>

                <h3 className="text-xl font-semibold text-[var(--text-heading)] mb-4 tracking-tight">
                  {reason.title}
                </h3>
                <p className="text-[0.95rem] text-[var(--text-body)] leading-[1.8]">
                  {reason.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
