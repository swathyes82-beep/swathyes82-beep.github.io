import { Github, Star } from "lucide-react";
import { profile, repos } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";

// Decorative contribution-style grid (visual only, not real GitHub data).
const CELLS = Array.from({ length: 7 * 26 }, (_, i) => (Math.sin(i * 12.9898) * 43758.5453) % 1);

export function GitHubSection() {
  return (
    <section id="github" className="relative px-5 py-24">
      <SectionHeading
        eyebrow="my code & projects"
        title="Repositories"
        description="Repository links are placeholders until my GitHub profile is connected."
      />

      <Reveal className="mx-auto mt-12 max-w-6xl">
        <div className="glass overflow-x-auto rounded-2xl p-6">
          <div className="flex items-center justify-between gap-4">
            <p className="font-mono text-xs text-muted-foreground">contribution style visual</p>
            <span className="font-mono text-xs text-cyan">consistency &gt; intensity</span>
          </div>
          <div className="mt-4 grid w-max grid-flow-col grid-rows-7 gap-1">
            {CELLS.map((v, i) => {
              const level = Math.abs(v);
              const opacity = level < 0.35 ? 0.08 : level < 0.6 ? 0.3 : level < 0.85 ? 0.6 : 1;
              return (
                <span
                  key={i}
                  className="size-3 rounded-[3px] bg-cyan transition-opacity"
                  style={{ opacity }}
                />
              );
            })}
          </div>
        </div>
      </Reveal>

      <div className="mx-auto mt-6 grid max-w-6xl gap-4 sm:grid-cols-2">
        {repos.map((r, i) => (
          <Reveal key={r.name} delay={i * 60}>
            <article className="glass flex h-full flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
              <div className="flex min-w-0 items-center gap-2">
                <Github className="size-4 shrink-0 text-muted-foreground" />
                <h3 className="truncate font-mono text-sm text-foreground">{r.name}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {r.tech.map((t) => (
                  <li key={t} className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                {r.url ? (
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2 text-sm font-medium transition-colors hover:border-cyan/50 hover:text-cyan"
                  >
                    <Github className="size-4" /> View on GitHub
                  </a>
                ) : (
                  <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl border border-dashed border-border px-4 py-2 text-sm text-muted-foreground">
                    <Github className="size-4" /> Link coming soon
                  </span>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 text-center">
        {profile.github !== "#" ? (
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:glow-ring"
          >
            <Star className="size-4" /> View GitHub Profile
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 rounded-xl border border-dashed border-border px-5 py-3 text-sm text-muted-foreground">
            <Github className="size-4" /> GitHub profile link coming soon
          </span>
        )}
      </Reveal>
    </section>
  );
}