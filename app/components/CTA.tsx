import Link from "next/link";
import RevealOnScroll from "./RevealOnScroll";
import { useTranslations } from "next-intl";

export default function CTA() {
  const t = useTranslations("CTA");

  return (
    <section
      id="contact"
      className="relative py-28 lg:py-36 bg-[var(--bg-primary)] overflow-hidden"
    >
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#10b981]/15 to-transparent" />

      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(16,185,129,0.06),transparent)]" />
      <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] rounded-full bg-[#10b981]/[0.04] blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[250px] h-[250px] rounded-full bg-[#14b8a6]/[0.03] blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1280px] mx-auto px-8 md:px-12 lg:px-16">
        <div className="relative rounded-3xl border border-[var(--border-card)] bg-[var(--bg-card)] p-12 lg:p-20 text-center overflow-hidden">
          {/* Inner glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.05),transparent_70%)]" />

          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-32 h-32 border-t border-l border-[#10b981]/10 rounded-tl-3xl" />
          <div className="absolute bottom-0 right-0 w-32 h-32 border-b border-r border-[#10b981]/10 rounded-br-3xl" />

          <RevealOnScroll>
            <h2 className="relative font-serif text-[2rem] sm:text-[2.5rem] lg:text-[3.5rem] leading-[1.1] tracking-tight text-[var(--text-heading)] mb-8 max-w-[700px] mx-auto">
              {t("title.science")}{" "}
              <span className="bg-linear-to-r from-[#10b981] to-[#14b8a6] bg-clip-text text-transparent">
                {t("title.quality")}
              </span>{" "}
              {t("title.bioterik")}
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={150}>
            <p className="relative text-[1.05rem] lg:text-[1.15rem] text-[var(--text-body)] leading-[1.8] max-w-[560px] mx-auto mb-12">
              {t("description")}
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={300}>
            <div className="relative flex flex-col sm:flex-row gap-5 justify-center">
              <Link
                href="mailto:info@bioterik-pharma.uz"
                className="btn-primary group relative z-10 inline-flex items-center justify-center gap-3 rounded-full bg-linear-to-r from-[#10b981] to-[#0d9488] px-10 py-4.5 text-[1rem] font-semibold text-white shadow-[0_4px_30px_rgba(16,185,129,0.3)] transition-all duration-300 hover:shadow-[0_4px_50px_rgba(16,185,129,0.5)] hover:scale-[1.03] active:scale-[0.98]"
              >
                {t("getInTouch")}
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link
                href="tel:+998935553020"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--ghost-border)] px-10 py-4.5 text-[1rem] font-semibold text-[var(--ghost-text)] transition-all duration-300 hover:bg-[var(--ghost-bg-hover)] hover:border-[var(--ghost-border-hover)]"
              >
                <svg
                  className="h-4 w-4 text-[#10b981]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                {t("callUs")}
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
