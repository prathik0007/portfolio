import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import SocialLinks from "@/components/SocialLinks";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: `Contact | ${portfolio.name}`,
  description: `Get in touch with ${portfolio.name}.`,
};

export default function ContactPage() {
  return (
    <div className="bg-gradient-to-b from-primary-light/40 to-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-bold text-ink">
            Lets <span className="text-primary">Connect</span>
          </h1>
          <span className="mt-2 inline-block h-[3px] w-14 rounded-full bg-primary" />
          <p className="mx-auto mt-4 max-w-xl text-base text-ink-soft">
            Ready to bring your ideas to life? Lets start a conversation and create something
            amazing together.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Get in touch card */}
          <div className="rounded-2xl border border-surface-border bg-white p-8 shadow-card">
            <h2 className="font-serif text-xl font-bold text-ink">Get In Touch</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              I am passionate about creating innovative solutions and always excited to
              collaborate on new projects.
            </p>

            <ul className="mt-6 flex flex-col gap-5">
              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-primary-light text-primary">
                  <Mail size={16} />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
                    Email
                  </p>
                  <a href={`mailto:${portfolio.email}`} className="text-sm font-medium text-ink hover:text-primary">
                    {portfolio.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-primary-light text-primary">
                  <Phone size={16} />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
                    Phone
                  </p>
                  <a href={`tel:${portfolio.phone}`} className="text-sm font-medium text-ink hover:text-primary">
                    {portfolio.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-primary-light text-primary">
                  <MapPin size={16} />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
                    Location
                  </p>
                  <p className="text-sm font-medium text-ink">{portfolio.fullAddress}</p>
                </div>
              </li>
            </ul>

            <div className="mt-8 border-t border-surface-border pt-6">
              <p className="text-sm font-semibold text-ink">Connect With Me</p>
              <div className="mt-3">
                <SocialLinks />
              </div>
            </div>
          </div>

          {/* Send a message card */}
          <div className="rounded-2xl border border-surface-border bg-white p-8 shadow-card">
            <h2 className="font-serif text-xl font-bold text-ink">Send a Message</h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
