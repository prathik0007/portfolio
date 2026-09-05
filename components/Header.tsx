"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import NavigationDrawer from "@/components/NavigationDrawer";

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 h-[80px] bg-white/95 backdrop-blur-md border-b border-surface-border">
        <div className="flex h-full w-full items-center justify-between px-4 sm:px-8 lg:px-12">
          {/* Logo / brand matching reference style */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white font-serif text-2xl font-bold shadow-[0_6px_20px_rgba(37,99,235,0.35)] transition-all group-hover:scale-105 group-hover:shadow-[0_8px_24px_rgba(37,99,235,0.45)]">
              {portfolio.initials}
            </span>
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="font-serif text-2xl font-bold text-ink tracking-tight">
                Portfolio
              </span>
              <span className="text-[11px] font-semibold tracking-widest text-ink-soft/75 uppercase">
                {portfolio.shortName.toUpperCase()}
              </span>
            </span>
          </Link>

          {/* Right side actions: big rounded-2xl button with glow shadow */}
          <div className="flex items-center gap-3.5">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center rounded-2xl bg-primary px-8 py-3 text-base font-bold text-white shadow-[0_8px_25px_rgba(37,99,235,0.35)] transition-all hover:bg-primary-dark hover:shadow-[0_10px_30px_rgba(37,99,235,0.45)] hover:-translate-y-0.5 active:translate-y-0"
            >
              Lets Connect
            </Link>
            <button
              type="button"
              aria-label="Open navigation menu"
              aria-expanded={isDrawerOpen}
              aria-controls="navigation-drawer"
              onClick={() => setIsDrawerOpen(true)}
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/25 bg-primary-light/70 text-primary transition-all hover:bg-primary hover:text-white hover:border-primary shadow-sm"
            >
              <Menu size={22} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </header>

      <NavigationDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
}
