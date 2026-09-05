"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Home, User, Rocket, FileText, Mail, Code2, Award, Terminal } from "lucide-react";
import { navItems, portfolio } from "@/data/portfolio";

const iconMap = {
  home: Home,
  user: User,
  code: Code2,
  award: Award,
  terminal: Terminal,
  rocket: Rocket,
  "file-text": FileText,
  mail: Mail,
};

export default function NavigationDrawer({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Escape key closes the drawer
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      closeButtonRef.current?.focus();
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className={`fixed inset-0 z-50 bg-ink/60 backdrop-blur-[2px] transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer panel */}
      <div
        id="navigation-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-[380px] bg-white shadow-drawer transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Red header area */}
          <div className="relative bg-primary px-7 pb-7 pt-8">
            <button
              ref={closeButtonRef}
              type="button"
              aria-label="Close navigation menu"
              onClick={onClose}
              className="absolute right-6 top-7 flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 text-white transition-colors hover:bg-white/25"
            >
              <X size={18} strokeWidth={2.5} />
            </button>
            <h2 className="font-serif text-3xl font-bold text-white">Portfolio</h2>
            <p className="mt-1 text-sm text-white/85">{portfolio.tagline}</p>
          </div>

          {/* Nav items */}
          <nav className="flex-1 overflow-y-auto px-4 py-6">
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => {
                const Icon = iconMap[item.icon as keyof typeof iconMap];
                const isActive =
                  item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      aria-current={isActive ? "page" : undefined}
                      className={`group relative flex items-center gap-4 rounded-xl px-4 py-3.5 transition-colors ${
                        isActive
                          ? "bg-primary-light text-primary"
                          : "text-ink-soft hover:bg-surface-muted"
                      }`}
                    >
                      {isActive && (
                        <span className="absolute right-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-l-full bg-primary" />
                      )}
                      <span
                        className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                          isActive ? "bg-primary text-white" : "bg-primary-light text-primary"
                        }`}
                      >
                        <Icon size={17} strokeWidth={2.25} />
                      </span>
                      <span className={`text-base ${isActive ? "font-semibold" : "font-medium"}`}>
                        {item.label}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Footer note */}
          <div className="border-t border-surface-border px-7 py-6 text-center">
            <p className="text-sm text-ink-soft">
              Built with <span className="font-semibold text-primary">passion ♥</span>
            </p>
            <p className="text-sm text-ink-soft">&amp; modern technologies</p>
          </div>
        </div>
      </div>
    </>
  );
}
