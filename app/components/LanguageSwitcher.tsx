"use client";

import { useLocale } from "next-intl";
import { Link, useRouter, usePathname } from "@/i18n/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale as any });
  };

  const languages = [
    { code: "en", label: "EN" },
    { code: "ru", label: "RU" },
    { code: "uz", label: "UZ" },
  ];

  return (
    <div className="flex items-center gap-1 p-1 rounded-full border border-[var(--border-card)] bg-[var(--bg-card)]">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => handleLanguageChange(lang.code)}
          className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-all duration-300 ${
            locale === lang.code
              ? "bg-[#10b981] text-white shadow-[0_0_15px_rgba(16,185,129,0.3)]"
              : "text-[var(--text-body)] hover:text-[#10b981]"
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
