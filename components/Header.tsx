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
      <header className="fixed top-0 left-0 right-0 z-40 h-[72px] bg-white border-b border-surface-border">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo / brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white font-serif text-lg font-bold shadow-card transition-transform group-hover:scale-105">
              {portfolio.initials}
            </span>
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="font-serif text-lg font-bold text-ink">Portfolio</span>
              <span className="text-[11px] font-medium tracking-wide text-ink-soft">
                {portfolio.shortName.toUpperCase()}
              </span>
            </span>
          </Link>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-card transition-all hover:bg-primary-dark hover:shadow-card-hover"
            >
              Let&apos;s Connect
            </Link>
            <button
              type="button"
              aria-label="Open navigation menu"
              aria-expanded={isDrawerOpen}
              aria-controls="navigation-drawer"
              onClick={() => setIsDrawerOpen(true)}
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-light text-primary transition-colors hover:bg-primary hover:text-white"
            >
              <Menu size={20} strokeWidth={2.25} />
            </button>
          </div>
        </div>
      </header>

      <NavigationDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
}
