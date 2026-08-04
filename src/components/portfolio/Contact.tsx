import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { toast } from "sonner";
import { profile } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";

const field =
  "w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-cyan/60 focus:outline-none focus:ring-2 focus:ring-ring/40";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    toast.success("Thanks for reaching out!", {
      description: "Message captured locally — connect an email service to deliver it.",
    });
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative px-5 py-24">
      <SectionHeading
        eyebrow="contact"
        title="Let's talk cloud"
        description="Open to Cloud & DevOps internship and entry-level opportunities. Social links are placeholders for now."
      />

      <div className="mx-auto mt-14 grid max-w-6xl gap-4 lg:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <form onSubmit={onSubmit} className="glass rounded-2xl p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted-foreground">Name</span>
                <input required name="name" className={field} placeholder="Your name" />
              </label>
              <label className="block">
                <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted-foreground">Email</span>
                <input required type="email" name="email" className={field} placeholder="you@example.com" />
              </label>
            </div>
            <label className="mt-4 block">
              <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted-foreground">Subject</span>
              <input required name="subject" className={field} placeholder="What's this about?" />
            </label>
            <label className="mt-4 block">
              <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted-foreground">Message</span>
              <textarea required name="message" rows={5} className={field} placeholder="Write your message..." />
            </label>
            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-shadow hover:glow-ring"
            >
              <Send className="size-4" /> Send Message
            </button>
            {sent ? (
              <p className="mt-4 font-mono text-xs text-cyan">Message received — I'll get back to you soon.</p>
            ) : null}
          </form>
        </Reveal>

        <Reveal delay={100}>
          <div className="glass flex h-full flex-col gap-3 rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-semibold">Elsewhere</h3>
            <p className="text-sm text-muted-foreground">{profile.location}</p>
            {[
              { href: profile.github, Icon: Github, label: "GitHub", hint: "Link coming soon" },
              { href: profile.linkedin, Icon: Linkedin, label: "LinkedIn", hint: "Link coming soon" },
              { href: profile.email, Icon: Mail, label: "Email", hint: "Address coming soon" },
            ].map(({ href, Icon, label, hint }) => (
              <a
                key={label}
                href={href}
                className="group grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 transition-colors hover:border-cyan/50"
              >
                <Icon className="size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-cyan" />
                <span className="min-w-0">
                  <span className="block text-sm font-medium">{label}</span>
                  <span className="block truncate font-mono text-xs text-muted-foreground">
                    {href === "#" ? hint : href}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}