import { useEffect, useState } from "react";
import { ArrowRight, Download, Github, Linkedin, Mail, Cloud, Container, Server, GitBranch } from "lucide-react";
import { profile } from "@/data/portfolio";

const LINES = [
  "$ whoami",
  "swathi@devops:~$ ./career.sh",
  "Role: Cloud & DevOps Intern",
  "Learning: Linux | Cloud | CI/CD | Automation",
];

function Terminal() {
  const [line, setLine] = useState(0);
  const [chars, setChars] = useState(0);

  useEffect(() => {
    if (line >= LINES.length) return;
    const current = LINES[line] ?? "";
    if (chars < current.length) {
      const t = setTimeout(() => setChars((c) => c + 1), 38);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setLine((l) => l + 1);
      setChars(0);
    }, 600);
    return () => clearTimeout(t);
  }, [line, chars]);

  const done = LINES.slice(0, line);
  const typing = line < LINES.length ? (LINES[line] ?? "").slice(0, chars) : "";

  return (
    <div className="glass overflow-hidden rounded-2xl">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="size-3 rounded-full bg-destructive/70" />
        <span className="size-3 rounded-full bg-chart-5/70" />
        <span className="size-3 rounded-full bg-chart-4/70" />
        <span className="ml-2 font-mono text-xs text-muted-foreground">bash — swathi@devops</span>
      </div>
      <div className="min-h-44 space-y-2 p-5 font-mono text-[13px] leading-relaxed sm:text-sm">
        {done.map((l) => (
          <p key={l} className={l.startsWith("$") || l.includes("~$") ? "text-cyan" : "text-muted-foreground"}>
            {l}
          </p>
        ))}
        {line < LINES.length ? (
          <p className={typing.includes("$") ? "text-cyan" : "text-muted-foreground"}>
            {typing}
            <span className="animate-caret ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-cyan" />
          </p>
        ) : (
          <p className="text-cyan">
            swathi@devops:~$ <span className="animate-caret inline-block h-4 w-2 translate-y-0.5 bg-cyan" />
          </p>
        )}
      </div>
    </div>
  );
}

const FLOATING = [
  { Icon: Cloud, className: "left-[6%] top-[22%]", delay: "0s" },
  { Icon: Container, className: "right-[8%] top-[16%]", delay: "1.2s" },
  { Icon: Server, className: "left-[12%] bottom-[14%]", delay: "2.1s" },
  { Icon: GitBranch, className: "right-[12%] bottom-[20%]", delay: "3s" },
];

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden px-5 pb-24 pt-32 sm:pt-40">
      <div className="grid-bg animate-drift pointer-events-none absolute inset-0 -z-10 opacity-40" />
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 size-[42rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 -z-10 size-[28rem] rounded-full bg-violet/20 blur-[120px]" />

      {FLOATING.map(({ Icon, className, delay }, i) => (
        <span
          key={i}
          style={{ animationDelay: delay }}
          className={`animate-float-slow pointer-events-none absolute hidden text-primary/25 lg:block ${className}`}
        >
          <Icon className="size-10" />
        </span>
      ))}

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-cyan">
            <span className="size-1.5 rounded-full bg-cyan" />
            Available for Cloud & DevOps roles
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.08] sm:text-6xl">
            Hi, I'm <span className="text-gradient">{profile.name}</span>
          </h1>
          <p className="mt-4 text-lg font-medium text-foreground/90 sm:text-xl">
            {profile.role} @ {profile.company}
          </p>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {profile.heroDescription}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-shadow hover:glow-ring"
            >
              View My Projects <ArrowRight className="size-4" />
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-cyan/50 hover:text-cyan"
            >
              <Download className="size-4" /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {[
              { href: profile.github, Icon: Github, label: "GitHub" },
              { href: profile.linkedin, Icon: Linkedin, label: "LinkedIn" },
              { href: profile.email, Icon: Mail, label: "Email" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="grid size-11 place-items-center rounded-xl border border-border bg-surface text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
              >
                <Icon className="size-5" />
              </a>
            ))}
          </div>
        </div>

        <Terminal />
      </div>
    </section>
  );
}