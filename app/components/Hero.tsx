import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="grain-overlay relative min-h-screen flex items-center overflow-hidden bg-[var(--bg-primary)]">
      {/* ===== Animated gradient blobs ===== */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* Primary gradient blob - top right */}
        <div
          className="absolute -top-[20%] -right-[10%] w-[700px] h-[700px] rounded-full opacity-[0.07]"
          style={{
            background: "radial-gradient(circle, #10b981 0%, transparent 70%)",
            animation: "gradient-shift 15s ease-in-out infinite",
          }}
        />
        {/* Secondary blob - bottom left */}
        <div
          className="absolute -bottom-[15%] -left-[10%] w-[600px] h-[600px] rounded-full opacity-[0.05]"
          style={{
            background: "radial-gradient(circle, #14b8a6 0%, transparent 70%)",
            animation: "gradient-shift 18s ease-in-out infinite 5s",
          }}
        />
        {/* Accent blob - center */}
        <div
          className="absolute top-[30%] left-[40%] w-[400px] h-[400px] rounded-full opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, #6ee7b7 0%, transparent 70%)",
            animation: "gradient-shift 12s ease-in-out infinite 2s",
          }}
        />
      </div>

      {/* ===== Grid overlay (subtle) ===== */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      {/* ===== Floating particles ===== */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute left-[12%] top-[18%] h-2 w-2 rounded-full bg-[#10b981]/30"
          style={{ animation: "float 8s ease-in-out infinite" }}
        />
        <div
          className="absolute right-[22%] top-[12%] h-1.5 w-1.5 rounded-full bg-[#14b8a6]/25"
          style={{ animation: "float 10s ease-in-out infinite 1s" }}
        />
        <div
          className="absolute left-[45%] top-[65%] h-1 w-1 rounded-full bg-[#10b981]/20"
          style={{ animation: "float 12s ease-in-out infinite 2s" }}
        />
        <div
          className="absolute right-[30%] top-[35%] h-2.5 w-2.5 rounded-full bg-[#14b8a6]/15"
          style={{ animation: "float 9s ease-in-out infinite 3s" }}
        />
        <div
          className="absolute left-[72%] top-[72%] h-1.5 w-1.5 rounded-full bg-[#10b981]/25"
          style={{ animation: "float 11s ease-in-out infinite 0.5s" }}
        />

        {/* Subtle rings */}
        <div
          className="absolute left-[20%] top-[50%] h-24 w-24 rounded-full border border-[#10b981]/[0.07]"
          style={{ animation: "float 15s ease-in-out infinite 2s" }}
        />
        <div
          className="absolute right-[12%] top-[58%] h-36 w-36 rounded-full border border-[#14b8a6]/5"
          style={{ animation: "float 18s ease-in-out infinite 4s" }}
        />

        {/* Molecular structures */}
        <svg
          className="absolute left-[8%] top-[28%] opacity-[0.06]"
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          style={{ animation: "float 14s ease-in-out infinite 1.5s" }}
        >
          <circle cx="40" cy="40" r="4" fill="#10b981" />
          <circle cx="160" cy="60" r="3" fill="#14b8a6" />
          <circle cx="100" cy="160" r="5" fill="#10b981" />
          <line
            x1="40"
            y1="40"
            x2="160"
            y2="60"
            stroke="#10b981"
            strokeWidth="1"
          />
          <line
            x1="160"
            y1="60"
            x2="100"
            y2="160"
            stroke="#14b8a6"
            strokeWidth="1"
          />
          <line
            x1="100"
            y1="160"
            x2="40"
            y2="40"
            stroke="#10b981"
            strokeWidth="1"
          />
        </svg>
        <svg
          className="absolute right-[6%] top-[18%] opacity-[0.04]"
          width="150"
          height="150"
          viewBox="0 0 150 150"
          fill="none"
          style={{ animation: "float 16s ease-in-out infinite 3s" }}
        >
          <circle cx="30" cy="75" r="3" fill="#14b8a6" />
          <circle cx="120" cy="30" r="4" fill="#10b981" />
          <circle cx="110" cy="120" r="3" fill="#14b8a6" />
          <line
            x1="30"
            y1="75"
            x2="120"
            y2="30"
            stroke="#14b8a6"
            strokeWidth="1"
          />
          <line
            x1="120"
            y1="30"
            x2="110"
            y2="120"
            stroke="#10b981"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* ===== Main content ===== */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 md:px-12 lg:px-16 pt-36 pb-24 lg:pt-32 lg:pb-16">
        <div className="flex flex-col items-center text-center lg:flex-row lg:items-center lg:text-left lg:gap-20">
          {/* ===== Left column — text ===== */}
          <div
            className="flex-1 max-w-[640px]"
            style={{ animation: "slide-up 0.9s ease-out forwards" }}
          >
            {/* Badge with shimmer */}
            <div className="badge-shimmer inline-flex items-center gap-2.5 mb-10 rounded-full border border-[#10b981]/25 px-6 py-2.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]" />
              </span>
              <span className="text-sm font-medium text-[#34d399] tracking-wide">
                {t("badge")}
              </span>
            </div>

            {/* Headline — multi-line with size contrast */}
            <h1 className="mb-8">
              <span className="block font-serif text-[3rem] sm:text-[3.8rem] lg:text-[4.5rem] leading-[1.05] tracking-tight text-[var(--text-heading)]">
                {t("headline.pharmaceutical")}
              </span>
              <span className="block font-serif text-[3rem] sm:text-[3.8rem] lg:text-[4.5rem] leading-[1.05] tracking-tight">
                <span className="bg-linear-to-r from-[#10b981] via-[#34d399] to-[#14b8a6] bg-clip-text text-transparent">
                  {t("headline.approach")}
                </span>
                <span className="text-[var(--text-heading)]">
                  {t("headline.to")}
                </span>
              </span>
              <span className="block font-serif text-[3rem] sm:text-[3.8rem] lg:text-[4.5rem] leading-[1.05] tracking-tight text-[var(--text-heading)]">
                {t("headline.health")}
              </span>
            </h1>

            {/* Accent line */}
            <div
              className="flex items-center gap-4 mb-8 justify-center lg:justify-start"
              style={{ animation: "slide-up-delayed 1.2s ease-out forwards" }}
            >
              <div className="h-px w-12 bg-linear-to-r from-[#10b981] to-transparent" />
              <span className="text-[0.8rem] uppercase tracking-[0.3em] text-[var(--text-muted)] font-medium">
                {t("heritageLabel")}
              </span>
            </div>

            {/* Description */}
            <p
              className="text-[1.1rem] lg:text-[1.2rem] leading-[1.85] text-[var(--text-body)] mb-12 max-w-[500px] mx-auto lg:mx-0"
              style={{ animation: "slide-up 1s ease-out 0.2s both" }}
            >
              {t("description")}
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
              style={{ animation: "slide-up 1s ease-out 0.35s both" }}
            >
              <Link
                href="#products"
                className="btn-primary group relative z-10 inline-flex items-center justify-center gap-3 rounded-full bg-linear-to-r from-[#10b981] to-[#0d9488] px-9 py-4 text-[0.95rem] font-semibold text-white shadow-[0_4px_30px_rgba(16,185,129,0.3)] transition-all duration-300 hover:shadow-[0_4px_50px_rgba(16,185,129,0.5)] hover:scale-[1.03] active:scale-[0.98]"
              >
                {t("explore")}
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
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
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-[var(--ghost-border)] px-9 py-4 text-[0.95rem] font-semibold text-[var(--ghost-text)] transition-all duration-300 hover:bg-[var(--ghost-bg-hover)] hover:border-[var(--ghost-border-hover)] hover:text-[var(--text-heading)]"
              >
                {t("contact")}
              </Link>
            </div>

            {/* Stats row */}
            <div
              className="mt-16 grid grid-cols-3 gap-6 max-w-[460px] mx-auto lg:mx-0"
              style={{ animation: "slide-up 1s ease-out 0.5s both" }}
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-[var(--text-heading)] mb-1">
                  {t("statHeritage.value")}
                  <span className="text-[#10b981]">+</span>
                </div>
                <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-medium">
                  {t("statHeritage.label")}
                </div>
              </div>
              <div className="text-center lg:text-left border-l border-[var(--border-subtle)] pl-6">
                <div className="text-2xl lg:text-3xl font-bold text-[var(--text-heading)] mb-1">
                  {t("statProducts.value")}
                  <span className="text-[#10b981]">+</span>
                </div>
                <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-medium">
                  {t("statProducts.label")}
                </div>
              </div>
              <div className="text-center lg:text-left border-l border-[var(--border-subtle)] pl-6">
                <div className="text-2xl lg:text-3xl font-bold text-[var(--text-heading)] mb-1">
                  {t("statCertified.value")}
                  <span className="text-[#10b981]">✓</span>
                </div>
                <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-medium">
                  {t("statCertified.label")}
                </div>
              </div>
            </div>
          </div>

          {/* ===== Right column — molecular visual ===== */}
          <div
            className="hidden lg:flex flex-1 items-center justify-center"
            style={{ animation: "fade-in 1.2s ease-out 0.5s both" }}
          >
            <div
              className="relative"
              style={{ animation: "float-gentle 6s ease-in-out infinite" }}
            >
              {/* Outer glow */}
              <div className="absolute -inset-20 rounded-full bg-[#10b981]/[0.04] blur-3xl" />
              {/* Inner glow */}
              <div className="absolute -inset-8 rounded-full bg-[#10b981]/[0.06] blur-2xl" />

              <svg
                className="relative h-[420px] w-[420px] xl:h-[500px] xl:w-[500px]"
                viewBox="0 0 480 480"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Concentric rings with rotation */}
                <g
                  style={{
                    animation: "orbit 60s linear infinite",
                    transformOrigin: "240px 240px",
                  }}
                >
                  <circle
                    cx="240"
                    cy="240"
                    r="220"
                    stroke="url(#rg)"
                    strokeWidth="0.3"
                    opacity="0.2"
                    strokeDasharray="4 8"
                  />
                </g>
                <circle
                  cx="240"
                  cy="240"
                  r="180"
                  stroke="url(#rg)"
                  strokeWidth="0.4"
                  opacity="0.15"
                />
                <g
                  style={{
                    animation: "orbit 90s linear infinite reverse",
                    transformOrigin: "240px 240px",
                  }}
                >
                  <circle
                    cx="240"
                    cy="240"
                    r="140"
                    stroke="url(#rg)"
                    strokeWidth="0.3"
                    opacity="0.12"
                    strokeDasharray="6 12"
                  />
                </g>
                <circle
                  cx="240"
                  cy="240"
                  r="100"
                  stroke="url(#rg)"
                  strokeWidth="0.3"
                  opacity="0.1"
                />

                {/* Primary molecular nodes */}
                <circle cx="240" cy="100" r="14" fill="url(#ng)" opacity="0.9">
                  <animate
                    attributeName="r"
                    values="14;17;14"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="360" cy="190" r="10" fill="url(#ng)" opacity="0.7">
                  <animate
                    attributeName="r"
                    values="10;13;10"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="340" cy="330" r="12" fill="url(#ng)" opacity="0.8">
                  <animate
                    attributeName="r"
                    values="12;15;12"
                    dur="3.5s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="140" cy="330" r="11" fill="url(#ng)" opacity="0.75">
                  <animate
                    attributeName="r"
                    values="11;14;11"
                    dur="4.5s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="120" cy="190" r="13" fill="url(#ng)" opacity="0.85">
                  <animate
                    attributeName="r"
                    values="13;16;13"
                    dur="3.2s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* Center node — pulsing core */}
                <circle cx="240" cy="240" r="22" fill="url(#cg)" opacity="0.95">
                  <animate
                    attributeName="r"
                    values="22;26;22"
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle
                  cx="240"
                  cy="240"
                  r="35"
                  stroke="#10b981"
                  strokeWidth="0.6"
                  opacity="0.12"
                  fill="none"
                >
                  <animate
                    attributeName="r"
                    values="35;42;35"
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.12;0.04;0.12"
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle
                  cx="240"
                  cy="240"
                  r="50"
                  stroke="#10b981"
                  strokeWidth="0.3"
                  opacity="0.06"
                  fill="none"
                >
                  <animate
                    attributeName="r"
                    values="50;58;50"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.06;0.02;0.06"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* Secondary nodes */}
                <circle cx="290" cy="140" r="4" fill="#14b8a6" opacity="0.5">
                  <animate
                    attributeName="opacity"
                    values="0.5;0.9;0.5"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="370" cy="270" r="3" fill="#10b981" opacity="0.35">
                  <animate
                    attributeName="opacity"
                    values="0.35;0.8;0.35"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="190" cy="135" r="3.5" fill="#14b8a6" opacity="0.4">
                  <animate
                    attributeName="opacity"
                    values="0.4;0.85;0.4"
                    dur="3.8s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="110" cy="270" r="4" fill="#10b981" opacity="0.35">
                  <animate
                    attributeName="opacity"
                    values="0.35;0.7;0.35"
                    dur="4.2s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="240" cy="380" r="3.5" fill="#14b8a6" opacity="0.4">
                  <animate
                    attributeName="opacity"
                    values="0.4;0.8;0.4"
                    dur="3.5s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* Connection lines */}
                <line
                  x1="240"
                  y1="100"
                  x2="360"
                  y2="190"
                  stroke="url(#lg)"
                  strokeWidth="1"
                  opacity="0.2"
                />
                <line
                  x1="360"
                  y1="190"
                  x2="340"
                  y2="330"
                  stroke="url(#lg)"
                  strokeWidth="1"
                  opacity="0.16"
                />
                <line
                  x1="340"
                  y1="330"
                  x2="140"
                  y2="330"
                  stroke="url(#lg)"
                  strokeWidth="1"
                  opacity="0.14"
                />
                <line
                  x1="140"
                  y1="330"
                  x2="120"
                  y2="190"
                  stroke="url(#lg)"
                  strokeWidth="1"
                  opacity="0.16"
                />
                <line
                  x1="120"
                  y1="190"
                  x2="240"
                  y2="100"
                  stroke="url(#lg)"
                  strokeWidth="1"
                  opacity="0.2"
                />
                {/* Center spokes */}
                <line
                  x1="240"
                  y1="240"
                  x2="240"
                  y2="100"
                  stroke="url(#lg)"
                  strokeWidth="0.6"
                  opacity="0.12"
                />
                <line
                  x1="240"
                  y1="240"
                  x2="360"
                  y2="190"
                  stroke="url(#lg)"
                  strokeWidth="0.6"
                  opacity="0.12"
                />
                <line
                  x1="240"
                  y1="240"
                  x2="340"
                  y2="330"
                  stroke="url(#lg)"
                  strokeWidth="0.6"
                  opacity="0.12"
                />
                <line
                  x1="240"
                  y1="240"
                  x2="140"
                  y2="330"
                  stroke="url(#lg)"
                  strokeWidth="0.6"
                  opacity="0.12"
                />
                <line
                  x1="240"
                  y1="240"
                  x2="120"
                  y2="190"
                  stroke="url(#lg)"
                  strokeWidth="0.6"
                  opacity="0.12"
                />

                {/* Hexagonal core structure */}
                <polygon
                  points="240,205 262,222 262,258 240,275 218,258 218,222"
                  stroke="url(#lg)"
                  strokeWidth="0.8"
                  fill="none"
                  opacity="0.12"
                />
                {/* Inner hexagon */}
                <polygon
                  points="240,218 251,228 251,252 240,262 229,252 229,228"
                  stroke="#34d399"
                  strokeWidth="0.4"
                  fill="rgba(16,185,129,0.03)"
                  opacity="0.2"
                />

                {/* Capsule outlines */}
                <g opacity="0.1" transform="translate(185, 145)">
                  <rect
                    x="0"
                    y="0"
                    width="34"
                    height="68"
                    rx="17"
                    stroke="#10b981"
                    strokeWidth="1"
                    fill="none"
                  />
                  <line
                    x1="0"
                    y1="34"
                    x2="34"
                    y2="34"
                    stroke="#10b981"
                    strokeWidth="0.5"
                  />
                  <rect
                    x="0"
                    y="0"
                    width="34"
                    height="34"
                    rx="17"
                    fill="rgba(16,185,129,0.04)"
                  />
                </g>
                <g opacity="0.07" transform="translate(290, 255) rotate(25)">
                  <rect
                    x="0"
                    y="0"
                    width="28"
                    height="56"
                    rx="14"
                    stroke="#14b8a6"
                    strokeWidth="1"
                    fill="none"
                  />
                  <line
                    x1="0"
                    y1="28"
                    x2="28"
                    y2="28"
                    stroke="#14b8a6"
                    strokeWidth="0.5"
                  />
                  <rect
                    x="0"
                    y="28"
                    width="28"
                    height="28"
                    rx="0 0 14 14"
                    fill="rgba(20,184,166,0.04)"
                  />
                </g>
                <g opacity="0.06" transform="translate(150, 260) rotate(-15)">
                  <rect
                    x="0"
                    y="0"
                    width="24"
                    height="48"
                    rx="12"
                    stroke="#10b981"
                    strokeWidth="0.8"
                    fill="none"
                  />
                  <line
                    x1="0"
                    y1="24"
                    x2="24"
                    y2="24"
                    stroke="#10b981"
                    strokeWidth="0.4"
                  />
                </g>

                {/* Gradient definitions */}
                <defs>
                  <linearGradient id="rg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#14b8a6" />
                  </linearGradient>
                  <radialGradient id="ng" cx="40%" cy="40%" r="50%">
                    <stop offset="0%" stopColor="#6ee7b7" />
                    <stop offset="100%" stopColor="#10b981" />
                  </radialGradient>
                  <radialGradient id="cg" cx="40%" cy="40%" r="50%">
                    <stop offset="0%" stopColor="#6ee7b7" />
                    <stop offset="40%" stopColor="#34d399" />
                    <stop offset="100%" stopColor="#065f46" />
                  </radialGradient>
                  <linearGradient id="lg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#14b8a6" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Orbiting particle */}
              <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <div
                  className="absolute h-2.5 w-2.5 rounded-full bg-[#10b981] shadow-[0_0_15px_rgba(16,185,129,0.7)]"
                  style={{
                    animation: "orbit 10s linear infinite",
                    top: 0,
                    left: "50%",
                    transformOrigin: "0 192px",
                  }}
                />
              </div>
              {/* Second orbiting particle - opposite direction */}
              <div className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <div
                  className="absolute h-1.5 w-1.5 rounded-full bg-[#14b8a6] shadow-[0_0_10px_rgba(20,184,166,0.5)]"
                  style={{
                    animation: "orbit 14s linear infinite reverse",
                    top: 0,
                    left: "50%",
                    transformOrigin: "0 160px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Scroll indicator ===== */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        style={{ animation: "fade-in 1.5s ease-out 1s both" }}
      >
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-[var(--text-whisper)]">
          {t("scroll")}
        </span>
        <div
          className="flex h-10 w-[22px] items-start justify-center rounded-full border border-[var(--ghost-border)] p-1.5"
          style={{ animation: "bounce-subtle 2s ease-in-out infinite" }}
        >
          <div className="h-2 w-1 rounded-full bg-[#10b981]" />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48"
        style={{
          background: `linear-gradient(to top, var(--bg-primary), color-mix(in srgb, var(--bg-primary) 80%, transparent), transparent)`,
        }}
      />
    </section>
  );
}
