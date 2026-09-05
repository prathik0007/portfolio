import { Github, Linkedin, Mail, Phone, Code2 } from "lucide-react";
import { socialLinks } from "@/data/portfolio";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  phone: Phone,
  code: Code2,
};

export default function SocialLinks({
  variant = "light",
  size = "md",
}: {
  variant?: "light" | "dark";
  size?: "sm" | "md";
}) {
  const dimension = size === "sm" ? "h-9 w-9" : "h-10 w-10";
  const iconSize = size === "sm" ? 15 : 17;

  return (
    <div className="flex items-center gap-3">
      {socialLinks.map((link) => {
        const Icon = iconMap[link.icon as keyof typeof iconMap];
        return (
          <a
            key={link.name}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={link.name}
            className={`flex ${dimension} items-center justify-center rounded-lg border transition-colors ${
              variant === "light"
                ? "border-surface-border bg-white text-ink-soft hover:border-primary hover:text-primary"
                : "border-white/20 bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            <Icon size={iconSize} strokeWidth={2} />
          </a>
        );
      })}
    </div>
  );
}
