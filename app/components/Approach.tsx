import RevealOnScroll from "./RevealOnScroll";

export default function Approach() {
  return (
    <section
      id="approach"
      className="relative py-32 lg:py-40 bg-[var(--bg-alt)] overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#10b981]/20 to-transparent" />
      <div className="absolute -top-[300px] -right-[200px] w-[600px] h-[600px] rounded-full bg-[#10b981]/[0.03] blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1280px] mx-auto px-8 md:px-12 lg:px-16">
        <div className="flex flex-col items-center lg:flex-row lg:items-center lg:gap-24">
          {/* Left — text */}
          <div className="flex-1 max-w-[580px] text-center lg:text-left">
            <RevealOnScroll>
              <div className="inline-flex items-center gap-2.5 mb-8 rounded-full border border-[#10b981]/20 bg-[#10b981]/5 px-5 py-2">
                <div className="h-1.5 w-1.5 rounded-full bg-[#10b981]" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#34d399]">
                  Our Philosophy
                </span>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              <h2 className="font-serif text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] leading-[1.1] tracking-tight text-[var(--text-heading)] mb-8">
                Science-Driven{" "}
                <span className="bg-linear-to-r from-[#10b981] to-[#14b8a6] bg-clip-text text-transparent">
                  Supplementation
                </span>
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <p className="text-[1.05rem] lg:text-[1.1rem] leading-[1.85] text-[var(--text-body)] mb-8">
                We are a pharmaceutical company dedicated to creating
                supplements that actually work. Every product is formulated with
                standardized, pharmaceutical-grade ingredients sourced directly
                from{" "}
                <span className="text-[var(--text-heading)] font-medium">
                  Indena
                </span>{" "}
                — a trusted European manufacturer of standardized botanical
                extracts.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={300}>
              <p className="text-[1.05rem] lg:text-[1.1rem] leading-[1.85] text-[var(--text-body)] mb-10">
                Unlike conventional supplement companies, our team consists of{" "}
                <span className="text-[var(--text-heading)] font-medium">
                  qualified pharmacists
                </span>{" "}
                who understand pharmacokinetics, bioavailability, and clinical
                efficacy. We don't create products based on trends — we create
                them based on{" "}
                <span className="text-[#34d399] font-medium">research</span>.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={400}>
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <div className="h-px w-10 bg-[#10b981]/40" />
                <span className="text-sm text-[var(--text-muted)] font-medium uppercase tracking-wider">
                  Scientific Research & Quality Assurance
                </span>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right — abstract visual */}
          <RevealOnScroll
            className="hidden lg:flex flex-1 items-center justify-center"
            delay={300}
          >
            <div className="relative">
              <div className="absolute -inset-16 rounded-full bg-[#10b981]/[0.03] blur-3xl" />
              <svg
                className="relative w-[380px] h-[380px]"
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* DNA Helix inspired */}
                {/* Left strand */}
                <path
                  d="M120 40 Q200 100 120 160 Q40 220 120 280 Q200 340 120 400"
                  stroke="url(#dna1)"
                  strokeWidth="1.5"
                  fill="none"
                  opacity="0.3"
                />
                {/* Right strand */}
                <path
                  d="M280 40 Q200 100 280 160 Q360 220 280 280 Q200 340 280 400"
                  stroke="url(#dna2)"
                  strokeWidth="1.5"
                  fill="none"
                  opacity="0.3"
                />
                {/* Cross bars */}
                {[70, 130, 190, 250, 310, 370].map((y, i) => (
                  <line
                    key={i}
                    x1={i % 2 === 0 ? 140 : 120}
                    y1={y}
                    x2={i % 2 === 0 ? 260 : 280}
                    y2={y}
                    stroke="#10b981"
                    strokeWidth="0.8"
                    opacity={0.15 + (i % 3) * 0.05}
                  >
                    <animate
                      attributeName="opacity"
                      values={`${0.1 + i * 0.03};${0.25 + i * 0.03};${0.1 + i * 0.03}`}
                      dur={`${3 + i * 0.5}s`}
                      repeatCount="indefinite"
                    />
                  </line>
                ))}
                {/* Nodes on strands */}
                {[
                  { cx: 120, cy: 40, r: 5 },
                  { cx: 280, cy: 40, r: 4 },
                  { cx: 200, cy: 100, r: 6 },
                  { cx: 120, cy: 160, r: 5 },
                  { cx: 280, cy: 160, r: 5 },
                  { cx: 200, cy: 220, r: 7 },
                  { cx: 120, cy: 280, r: 5 },
                  { cx: 280, cy: 280, r: 4 },
                  { cx: 200, cy: 340, r: 6 },
                ].map((node, i) => (
                  <circle
                    key={i}
                    cx={node.cx}
                    cy={node.cy}
                    r={node.r}
                    fill="url(#dna-node)"
                    opacity={0.5 + (i % 3) * 0.15}
                  >
                    <animate
                      attributeName="r"
                      values={`${node.r};${node.r + 2};${node.r}`}
                      dur={`${3 + i * 0.4}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                ))}
                {/* Floating chemical formulas */}
                <text
                  x="60"
                  y="120"
                  fill="#10b981"
                  fontSize="10"
                  fontFamily="monospace"
                  opacity="0.15"
                >
                  C₂₀H₂₆O₅
                </text>
                <text
                  x="280"
                  y="240"
                  fill="#14b8a6"
                  fontSize="9"
                  fontFamily="monospace"
                  opacity="0.12"
                >
                  C₁₅H₁₀O₇
                </text>
                <text
                  x="80"
                  y="350"
                  fill="#10b981"
                  fontSize="8"
                  fontFamily="monospace"
                  opacity="0.1"
                >
                  C₂₁H₂₀O₆
                </text>
                {/* Defs */}
                <defs>
                  <linearGradient id="dna1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
                    <stop offset="30%" stopColor="#10b981" />
                    <stop offset="70%" stopColor="#14b8a6" />
                    <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="dna2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#14b8a6" stopOpacity="0" />
                    <stop offset="30%" stopColor="#14b8a6" />
                    <stop offset="70%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                  </linearGradient>
                  <radialGradient id="dna-node" cx="40%" cy="40%" r="50%">
                    <stop offset="0%" stopColor="#6ee7b7" />
                    <stop offset="100%" stopColor="#10b981" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
