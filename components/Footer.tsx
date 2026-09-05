"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import SocialLinks from "@/components/SocialLinks";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // Placeholder handler — wire this up to an email service/API later.
    setSubscribed(true);
    setEmail("");
  }

  return (
    <footer className="border-t border-surface-border bg-primary-light/60">
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-8 lg:px-12 py-14">
        {/* 12-Column Grid matching the Hero section layout above */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8 xl:gap-12">
          {/* Portfolio (5 cols - aligned directly under Hero text column) */}
          <div className="lg:col-span-5">
            <h3 className="font-serif text-xl font-bold text-ink">Portfolio</h3>
            <p className="mt-3 max-w-sm text-sm text-ink-soft leading-relaxed">
              {portfolio.footerTagline}
            </p>
            <div className="mt-5">
              <SocialLinks size="sm" />
            </div>
          </div>

          {/* Get in touch (4 cols - aligned directly with Center Avatar area) */}
          <div className="lg:col-span-4 lg:pl-2">
            <h3 className="font-serif text-lg font-bold text-primary border-b-2 border-primary inline-block pb-1">
              Get In Touch
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-ink-soft">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-primary flex-none" />
                <a href={`mailto:${portfolio.email}`} className="hover:text-primary transition-colors">
                  {portfolio.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary flex-none" />
                <a href={`tel:${portfolio.phone}`} className="hover:text-primary transition-colors">
                  {portfolio.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-primary flex-none" />
                <span>{portfolio.location}</span>
              </li>
            </ul>
          </div>

          {/* Stay updated (3 cols - aligned directly with right Info Card) */}
          <div className="lg:col-span-3">
            <h3 className="font-serif text-lg font-bold text-ink">Stay Updated</h3>
            <p className="mt-3 text-sm text-ink-soft">
              Subscribe to get notified about new projects and updates
            </p>
            <form onSubmit={handleSubscribe} className="mt-4 flex flex-col gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-lg border border-surface-border bg-white px-4 py-2.5 text-sm text-ink placeholder:text-ink-soft/60 focus:border-primary focus:outline-none"
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-dark"
              >
                {subscribed ? "Subscribed!" : "Subscribe"}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar aligned with full width */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-surface-border pt-6 text-sm text-ink-soft sm:flex-row">
          <p>
            © {new Date().getFullYear()} Portfolio. Made with{" "}
            <span className="text-primary">♥</span> by {portfolio.copyrightName}
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
