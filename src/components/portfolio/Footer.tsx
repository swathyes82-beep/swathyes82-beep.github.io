import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border px-5 py-10">
      <div className="mx-auto grid max-w-6xl gap-4 sm:flex sm:items-center sm:justify-between">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name} — {profile.headline}
        </p>
        <div className="flex gap-2">
          {[
            { href: profile.github, Icon: Github, label: "GitHub" },
            { href: profile.linkedin, Icon: Linkedin, label: "LinkedIn" },
            { href: profile.email, Icon: Mail, label: "Email" },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="grid size-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-cyan"
            >
              <Icon className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}