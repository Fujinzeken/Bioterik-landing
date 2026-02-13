import RevealOnScroll from "./RevealOnScroll";
import { useTranslations } from "next-intl";

export default function Products() {
  const t = useTranslations("Products");

  const products = [
    {
      name: t("catalog.cardio.name"),
      description: t("catalog.cardio.description"),
      active: t("catalog.cardio.active"),
      dosage: "500mg",
      color: "#ef4444",
      icon: "❤️",
    },
    {
      name: t("catalog.immunis.name"),
      description: t("catalog.immunis.description"),
      active: t("catalog.immunis.active"),
      dosage: "400mg",
      color: "#f59e0b",
      icon: "🛡️",
    },
    {
      name: t("catalog.articular.name"),
      description: t("catalog.articular.description"),
      active: t("catalog.articular.active"),
      dosage: "600mg",
      color: "#3b82f6",
      icon: "🦴",
    },
    {
      name: t("catalog.neuro.name"),
      description: t("catalog.neuro.description"),
      active: t("catalog.neuro.active"),
      dosage: "120mg",
      color: "#8b5cf6",
      icon: "🧠",
    },
    {
      name: t("catalog.digestum.name"),
      description: t("catalog.digestum.description"),
      active: t("catalog.digestum.active"),
      dosage: "450mg",
      color: "#10b981",
      icon: "🌿",
    },
    {
      name: t("catalog.sleep.name"),
      description: t("catalog.sleep.description"),
      active: t("catalog.sleep.active"),
      dosage: "500mg",
      color: "#6366f1",
      icon: "🌙",
    },
    {
      name: t("catalog.skin.name"),
      description: t("catalog.skin.description"),
      active: t("catalog.skin.active"),
      dosage: "300mg",
      color: "#ec4899",
      icon: "✨",
    },
    {
      name: t("catalog.vision.name"),
      description: t("catalog.vision.description"),
      active: t("catalog.vision.active"),
      dosage: "250mg + 10mg",
      color: "#14b8a6",
      icon: "👁️",
    },
  ];

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
            {t("badge")}
          </span>
          <h2 className="font-serif text-[2.2rem] sm:text-[2.8rem] lg:text-[3.2rem] leading-[1.1] tracking-tight text-[var(--text-heading)] mb-6">
            {t("title")}
          </h2>
          <p className="text-[1rem] text-[var(--text-muted)] max-w-[520px] mx-auto leading-relaxed">
            {t("subtitle")}
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
                      {t("labels.active")}
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
                      {t("labels.dosage")}
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
