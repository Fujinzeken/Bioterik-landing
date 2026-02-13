import RevealOnScroll from "./RevealOnScroll";

const features = [
  { text: "Standardized to precise active compound specifications", icon: "◆" },
  { text: "European pharmaceutical manufacturing standards", icon: "◆" },
  { text: "Third-party tested for purity and potency", icon: "◆" },
  { text: "Clinically documented bioavailability", icon: "◆" },
];

export default function Indena() {
  return (
    <section
      id="indena"
      className="relative py-28 lg:py-36 bg-[var(--bg-deep)] overflow-hidden"
    >
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#10b981]/15 to-transparent" />
      {/* Accent glow */}
      <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-[#10b981]/[0.03] blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1280px] mx-auto px-8 md:px-12 lg:px-16">
        <div className="flex flex-col items-center lg:flex-row lg:items-center lg:gap-20">
          {/* Left — Indena visual */}
          <RevealOnScroll className="flex-1 mb-16 lg:mb-0" delay={0}>
            <div className="relative">
              {/* Glassy card */}
              <div className="relative rounded-3xl border border-[var(--border-card)] bg-[var(--bg-card)] backdrop-blur-sm p-10 lg:p-14 overflow-hidden">
                {/* Corner glow */}
                <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-[#10b981]/[0.08] blur-3xl" />

                {/* Indena logo area */}
                <div className="relative mb-8">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#10b981]/10">
                      <svg
                        className="h-6 w-6 text-[#10b981]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="text-xl font-bold text-[var(--text-heading)] tracking-wide">
                        INDENA
                      </span>
                      <span className="text-[var(--text-muted)] text-sm ml-3">
                        Spa
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-muted)]">
                    Milan, Italy · Est. 1921
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mb-8 py-6 border-y border-[var(--border-card)]">
                  <div>
                    <div className="text-2xl font-bold text-[var(--text-heading)]">
                      100<span className="text-[#10b981]">+</span>
                    </div>
                    <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider mt-1">
                      Years
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[var(--text-heading)]">
                      80<span className="text-[#10b981]">+</span>
                    </div>
                    <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider mt-1">
                      Countries
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[var(--text-heading)]">
                      EU<span className="text-[#10b981]">✓</span>
                    </div>
                    <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider mt-1">
                      GMP
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <p className="text-[0.95rem] text-[var(--text-body)] leading-relaxed italic border-l-2 border-[#10b981]/30 pl-4">
                  &ldquo;Global leader in standardized botanical extracts,
                  setting the international standard for quality in plant-based
                  pharmaceuticals.&rdquo;
                </p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Right — text */}
          <div className="flex-1 text-center lg:text-left">
            <RevealOnScroll delay={100}>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#10b981] mb-4 block">
                Premium Sourcing
              </span>
              <h2 className="font-serif text-[2.2rem] sm:text-[2.8rem] lg:text-[3.2rem] leading-[1.1] tracking-tight text-[var(--text-heading)] mb-8">
                World-Class Ingredients{" "}
                <span className="bg-linear-to-r from-[#10b981] to-[#14b8a6] bg-clip-text text-transparent">
                  from Indena
                </span>
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <p className="text-[1.05rem] leading-[1.85] text-[var(--text-body)] mb-10">
                Indena is a global leader in standardized botanical extracts.
                For over 100 years, they&apos;ve set the international standard
                for quality in plant-based pharmaceuticals.
              </p>
            </RevealOnScroll>

            {/* Feature list */}
            <div className="space-y-5 mb-12">
              {features.map((feature, i) => (
                <RevealOnScroll key={i} delay={250 + i * 80}>
                  <div className="flex items-start justify-center lg:justify-start gap-4 group">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#10b981]/10 text-[#10b981] mt-0.5">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </div>
                    <p className="text-[0.95rem] text-[var(--text-body)] leading-relaxed group-hover:text-[var(--text-heading)] transition-colors duration-300">
                      {feature.text}
                    </p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

            <RevealOnScroll delay={600}>
              <div className="rounded-xl border border-[#10b981]/20 bg-[#10b981]/5 px-6 py-4">
                <p className="text-[0.9rem] text-[#34d399] font-medium leading-relaxed">
                  Every BIOTERIK product contains Indena-sourced ingredients.
                  This is not negotiable.{" "}
                  <span className="text-[var(--text-heading)]">
                    Quality is non-negotiable.
                  </span>
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
