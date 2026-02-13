import RevealOnScroll from "./RevealOnScroll";

const products = [
  {
    name: "Cardio Naturalis",
    description: "Supports healthy cholesterol and blood pressure levels",
    active: "Standardized Hawthorn Extract",
    dosage: "500mg",
    color: "#ef4444",
    icon: "❤️",
  },
  {
    name: "Immunis Pro",
    description: "Strengthens natural immune response",
    active: "Echinacea purpurea (standardized)",
    dosage: "400mg",
    color: "#f59e0b",
    icon: "🛡️",
  },
  {
    name: "Articular Plus",
    description: "Promotes joint flexibility and comfort",
    active: "Boswellia serrata extract",
    dosage: "600mg",
    color: "#3b82f6",
    icon: "🦴",
  },
  {
    name: "Neuro Clarity",
    description: "Enhances mental clarity and focus",
    active: "Ginkgo biloba (24% flavonoids)",
    dosage: "120mg",
    color: "#8b5cf6",
    icon: "🧠",
  },
  {
    name: "Digestum Complex",
    description: "Supports healthy digestion and gut function",
    active: "Fennel + Cumin standardized blend",
    dosage: "450mg",
    color: "#10b981",
    icon: "🌿",
  },
  {
    name: "Sleep Serenity",
    description: "Promotes restful sleep naturally",
    active: "Valerian root extract (0.8% valerenic acid)",
    dosage: "500mg",
    color: "#6366f1",
    icon: "🌙",
  },
  {
    name: "Skin Vitality",
    description: "Supports skin health and radiance from within",
    active: "Silybum marianum (70% silymarin)",
    dosage: "300mg",
    color: "#ec4899",
    icon: "✨",
  },
  {
    name: "Vision Guard",
    description: "Protects and maintains eye health",
    active: "Bilberry extract + Lutein",
    dosage: "250mg + 10mg",
    color: "#14b8a6",
    icon: "👁️",
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="relative py-28 lg:py-36 bg-[var(--bg-primary)] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(16,185,129,0.04),transparent)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#10b981]/15 to-transparent" />

      <div className="w-full max-w-[1280px] mx-auto px-8 md:px-12 lg:px-16">
        <RevealOnScroll className="text-center mb-20">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#10b981] mb-4 block">
            Product Catalog
          </span>
          <h2 className="font-serif text-[2.2rem] sm:text-[2.8rem] lg:text-[3.2rem] leading-[1.1] tracking-tight text-[var(--text-heading)] mb-6">
            Our Product Line
          </h2>
          <p className="text-[1rem] text-[var(--text-muted)] max-w-[520px] mx-auto leading-relaxed">
            Comprehensive formulations designed for specific health areas, each
            powered by Indena ingredients
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((product, i) => (
            <RevealOnScroll key={product.name} delay={i * 80}>
              <div className="group relative rounded-2xl border border-[var(--border-card)] bg-[var(--bg-card)] p-7 transition-all duration-500 hover:border-[var(--border-card-hover)] hover:bg-[var(--bg-card-hover)] hover:-translate-y-1">
                {/* Top color accent line */}
                <div
                  className="absolute top-0 left-6 right-6 h-[2px] rounded-b-full opacity-40 group-hover:opacity-80 transition-opacity duration-500"
                  style={{ background: product.color }}
                />

                {/* Icon */}
                <div className="text-2xl mb-5 select-none">{product.icon}</div>

                {/* Name */}
                <h3 className="text-[1.05rem] font-semibold text-[var(--text-heading)] mb-2 tracking-tight">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-[var(--text-body)] leading-relaxed mb-5">
                  {product.description}
                </p>

                {/* Divider */}
                <div className="h-px w-full bg-[var(--border-card)] mb-4" />

                {/* Details */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider">
                      Active
                    </span>
                    <span
                      className="text-xs text-[var(--text-body)] font-medium text-right max-w-[60%] truncate"
                      title={product.active}
                    >
                      {product.active}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider">
                      Dosage
                    </span>
                    <span className="text-sm text-[var(--text-heading)] font-semibold">
                      {product.dosage}
                    </span>
                  </div>
                </div>

                {/* Hover glow */}
                <div
                  className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"
                  style={{ background: `${product.color}08` }}
                />
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
