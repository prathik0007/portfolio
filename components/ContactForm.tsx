"use client";

import { useState } from "react";
import { Send } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = { name: "", email: "", phone: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "success">("idle");

  function validate(values: FormState): FormErrors {
    const next: FormErrors = {};
    if (!values.name.trim()) next.name = "Full name is required.";
    if (!values.email.trim()) {
      next.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "Enter a valid email address.";
    }
    if (!values.message.trim()) next.message = "Please write a short message.";
    return next;
  }

  function handleChange(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    // Placeholder submission handler.
    // Replace this with a call to your email service or API route, e.g.:
    // await fetch("/api/contact", { method: "POST", body: JSON.stringify(form) });
    console.log("Contact form submitted:", form);

    setStatus("success");
    setForm(initialState);
  }

  const inputClasses =
    "w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 transition-colors focus:border-primary";

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div>
        <label htmlFor="name" className="sr-only">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Full Name *"
          value={form.name}
          onChange={(e) => handleChange("name", e.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={`${inputClasses} ${errors.name ? "border-red-400" : "border-surface-border"}`}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-xs text-red-500">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="sr-only">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          placeholder="Email Address *"
          value={form.email}
          onChange={(e) => handleChange("email", e.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={`${inputClasses} ${errors.email ? "border-red-400" : "border-surface-border"}`}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-xs text-red-500">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="sr-only">
          Phone Number
        </label>
        <input
          id="phone"
          type="tel"
          placeholder="Phone Number (Optional)"
          value={form.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          className={`${inputClasses} border-surface-border`}
        />
      </div>

      <div>
        <label htmlFor="message" className="sr-only">
          Your Message
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Your Message *"
          value={form.message}
          onChange={(e) => handleChange("message", e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${inputClasses} resize-none ${
            errors.message ? "border-red-400" : "border-surface-border"
          }`}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-xs text-red-500">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-card transition-colors hover:bg-primary-dark"
      >
        Send Message <Send size={15} />
      </button>

      {status === "success" && (
        <p role="status" className="text-sm font-medium text-green-600">
          Thanks for reaching out! Your message has been noted.
        </p>
      )}
    </form>
  );
}
