import { Briefcase, Sparkles } from "lucide-react";
import { experience } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";

export function Experience() {
  return (
    <section id="experience" className="relative px-5 py-24">
      <SectionHeading eyebrow="experience" title="Internship experience" />

      <div className="mx-auto mt-14 grid max-w-6xl gap-4 lg:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <article className="glass relative h-full rounded-2xl p-6 sm:p-8">
            <span className="absolute left-0 top-8 h-16 w-1 rounded-r-full" style={{ backgroundImage: "var(--gradient-brand)" }} />
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:justify-between">
              <div className="flex min-w-0 items-start gap-3">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                  <Briefcase className="size-5" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold">{experience.role}</h3>
                  <p className="truncate text-sm text-cyan">{experience.company}</p>
                </div>
              </div>
              <span className="shrink-0 rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted-foreground">
                {experience.period}
              </span>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">{experience.description}</p>
          </article>
        </Reveal>

        <Reveal delay={100}>
          <article className="glass h-full rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-2">
              <Sparkles className="size-4 text-cyan" />
              <h3 className="text-lg font-semibold">Currently Learning</h3>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2">
              {experience.currentlyLearning.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border bg-surface px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-cyan/50 hover:text-cyan"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      </div>
    </section>
  );
}