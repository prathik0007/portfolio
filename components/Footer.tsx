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
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {/* Portfolio */}
          <div>
            <h3 className="font-serif text-xl font-bold text-ink">Portfolio</h3>
            <p className="mt-3 max-w-xs text-sm text-ink-soft">{portfolio.footerTagline}</p>
            <div className="mt-5">
              <SocialLinks size="sm" />
            </div>
          </div>

          {/* Get in touch */}
          <div>
            <h3 className="font-serif text-lg font-bold text-primary border-b-2 border-primary inline-block pb-1">
              Get In Touch
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-ink-soft">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-primary" />
                <a href={`mailto:${portfolio.email}`} className="hover:text-primary">
                  {portfolio.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary" />
                <a href={`tel:${portfolio.phone}`} className="hover:text-primary">
                  {portfolio.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-primary" />
                <span>{portfolio.location}</span>
              </li>
            </ul>
          </div>

          {/* Stay updated */}
          <div>
            <h3 className="font-serif text-lg font-bold text-ink">Stay Updated</h3>
            <p className="mt-3 text-sm text-ink-soft">
              Subscribe to get notified about new projects and updates
            </p>
            <form onSubmit={handleSubscribe} className="mt-4 flex flex-col gap-3">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="rounded-lg border border-surface-border bg-white px-4 py-2.5 text-sm text-ink placeholder:text-ink-soft/60 focus:border-primary"
              />
              <button
                type="submit"
                className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                {subscribed ? "Subscribed!" : "Subscribe"}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-surface-border pt-6 text-sm text-ink-soft sm:flex-row">
          <p>
            © {new Date().getFullYear()} Portfolio. Made with{" "}
            <span className="text-primary">♥</span> by {portfolio.copyrightName}
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
