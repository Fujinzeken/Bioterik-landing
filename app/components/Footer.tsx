import Link from "next/link";

const companyLinks = [
  { label: "About Us", href: "#approach" },
  { label: "Our Approach", href: "#approach" },
  { label: "Products", href: "#products" },
  { label: "Research", href: "#indena" },
];

const partnerLinks = [
  { label: "Distributor Info", href: "#contact" },
  { label: "Pharmacy Program", href: "#contact" },
  { label: "Price List", href: "#contact" },
  { label: "Documentation", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#060a15] pt-20 pb-8 overflow-hidden">
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#10b981]/15 to-transparent" />

      <div className="w-full max-w-[1280px] mx-auto px-8 md:px-12 lg:px-16">
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-3 mb-6 no-underline"
            >
              <div className="relative flex h-10 w-10 items-center justify-center">
                <div className="absolute inset-0 rounded-xl bg-linear-to-br from-[#10b981] to-[#14b8a6] opacity-20" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="relative z-10 text-[#10b981]"
                >
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                </svg>
              </div>
              <span className="text-lg font-bold tracking-[0.15em] text-white">
                BIOTERIK
              </span>
            </Link>
            <p className="text-sm text-[#6b7280] leading-relaxed max-w-[280px]">
              Pharmaceutical-grade supplements crafted by pharmacists. Indena
              ingredients. European standards. Scientific integrity.
            </p>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#6b7280] hover:text-[#10b981] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Partner links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              For Partners
            </h4>
            <ul className="space-y-3">
              {partnerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#6b7280] hover:text-[#10b981] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="tel:+998935553020"
                  className="flex items-center gap-3 text-sm text-[#6b7280] hover:text-[#10b981] transition-colors duration-300"
                >
                  <svg
                    className="h-4 w-4 text-[#10b981] shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  +998 93 555 30 20
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:info@bioterik-pharma.uz"
                  className="flex items-center gap-3 text-sm text-[#6b7280] hover:text-[#10b981] transition-colors duration-300"
                >
                  <svg
                    className="h-4 w-4 text-[#10b981] shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  info@bioterik-pharma.uz
                </Link>
              </li>
              <li className="flex items-center gap-3 text-sm text-[#6b7280]">
                <svg
                  className="h-4 w-4 text-[#10b981] shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                Tashkent, Uzbekistan
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#4b5563]">
            © {new Date().getFullYear()} BIOTERIK PHARMA. All rights reserved.
          </p>
          <p className="text-xs text-[#4b5563]">
            Pharmaceutical Quality, Every Product.
          </p>
        </div>
      </div>
    </footer>
  );
}
