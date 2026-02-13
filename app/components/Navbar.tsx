"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { label: "Our Approach", href: "#approach" },
  { label: "Premium Sources", href: "#indena" },
  { label: "Products", href: "#products" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out backdrop-blur-xl border-b border-[var(--border-card)] ${
        scrolled
          ? "bg-[var(--bg-nav-scrolled)] py-4 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "bg-[var(--bg-nav)] py-5"
      }`}
    >
      <div className="w-full max-w-[1280px] mx-auto px-8 md:px-12 lg:px-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3 no-underline">
          <div className="relative flex h-10 w-10 items-center justify-center">
            <div className="absolute inset-0 rounded-xl bg-linear-to-br from-[#10b981] to-[#14b8a6] opacity-20 transition-opacity duration-300 group-hover:opacity-40" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
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
          <span className="text-[1.3rem] font-bold tracking-[0.15em] text-[var(--text-heading)]">
            BIOTERIK
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative px-5 py-2 text-[0.9rem] font-medium text-[var(--text-body)] transition-colors duration-300 hover:text-[var(--text-heading)]"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#10b981] transition-all duration-300 group-hover:w-5" />
            </Link>
          ))}
        </div>

        {/* Theme toggle + CTA + Mobile toggle */}
        <div className="flex items-center gap-5">
          {/* Theme toggle button */}
          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-card)] bg-[var(--bg-card)] text-[var(--text-body)] transition-all duration-300 hover:border-[#10b981]/30 hover:text-[#10b981]"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? (
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            ) : (
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            )}
          </button>

          <Link
            href="mailto:info@bioterik-pharma.uz"
            className="hidden md:inline-flex rounded-full bg-linear-to-r from-[#10b981] to-[#14b8a6] px-7 py-2.5 text-[0.9rem] font-semibold text-white shadow-[0_0_25px_rgba(16,185,129,0.3)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(16,185,129,0.5)] hover:scale-[1.03] active:scale-[0.98]"
          >
            Get In Touch
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-[2px] w-6 rounded-full bg-[var(--icon-color)] transition-all duration-300 origin-center ${
                mobileOpen ? "translate-y-[4px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-6 rounded-full bg-[var(--icon-color)] transition-all duration-300 origin-center ${
                mobileOpen ? "-translate-y-[4px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-[var(--bg-mobile-menu)] backdrop-blur-2xl transition-all duration-500 md:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between px-8 py-5">
          <span className="text-xl font-bold tracking-[0.15em] text-[var(--text-heading)]">
            BIOTERIK
          </span>
          <button
            onClick={() => setMobileOpen(false)}
            className="flex h-10 w-10 items-center justify-center text-[var(--text-heading)] text-2xl"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center gap-10 bg-[var(--bg-mobile-menu)]">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-3xl font-light text-[var(--text-body)] transition-colors duration-300 hover:text-[var(--text-heading)]"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="mailto:info@bioterik-pharma.uz"
            onClick={() => setMobileOpen(false)}
            className="mt-6 rounded-full bg-linear-to-r from-[#10b981] to-[#14b8a6] px-10 py-4 text-lg font-semibold text-white shadow-[0_0_25px_rgba(16,185,129,0.3)]"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </nav>
  );
}
