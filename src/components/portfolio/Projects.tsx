import { Activity, BarChart3, Briefcase, Mail, Server } from "lucide-react";
import { projects } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";

const ICONS = { Activity, Mail, Server, BarChart3, Briefcase } as const;

export function Projects() {
  return (
    <section id="projects" className="relative px-5 py-24">
      <SectionHeading
        eyebrow="projects"
        title="Things I've built and broken"
        description="Practical Linux, monitoring, analytics and application projects from my coursework and self-study."
      />

      <div className="mx-auto mt-14 grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => {
          const Icon = ICONS[p.icon as keyof typeof ICONS] ?? Server;
          return (
            <Reveal key={p.title} delay={i * 70}>
              <article className="glass group relative h-full overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan/40">
                <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                <span className="grid size-11 place-items-center rounded-xl bg-surface text-cyan">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-border bg-surface px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}