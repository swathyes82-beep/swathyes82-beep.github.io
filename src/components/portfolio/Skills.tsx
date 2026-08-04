import { Activity, Cloud, Code2, GitBranch, Terminal } from "lucide-react";
import { skillGroups, type SkillLevel } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";

const ICONS = { Cloud, GitBranch, Terminal, Activity, Code2 } as const;

const LEVEL: Record<SkillLevel, { width: string; className: string }> = {
  Learning: { width: "38%", className: "text-violet border-violet/40 bg-violet/10" },
  "Hands-on": { width: "72%", className: "text-cyan border-cyan/40 bg-cyan/10" },
  Familiar: { width: "55%", className: "text-primary border-primary/40 bg-primary/10" },
};

export function Skills() {
  return (
    <section id="skills" className="relative px-5 py-24">
      <SectionHeading
        eyebrow="skills"
        title="Cloud & DevOps toolkit"
        description="An honest view of where I stand — clearly split between what I use hands-on, what I'm actively learning and what I'm familiar with."
      />

      <div className="mx-auto mt-8 flex max-w-6xl flex-wrap justify-center gap-2">
        {(Object.keys(LEVEL) as SkillLevel[]).map((k) => (
          <span key={k} className={`rounded-full border px-3 py-1 font-mono text-xs ${LEVEL[k].className}`}>
            {k}
          </span>
        ))}
      </div>

      <div className="mx-auto mt-10 grid max-w-6xl gap-4 lg:grid-cols-2">
        {skillGroups.map((group, i) => {
          const Icon = ICONS[group.icon as keyof typeof ICONS] ?? Cloud;
          return (
            <Reveal key={group.title} delay={i * 70}>
              <article className="glass h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                <header className="flex min-w-0 items-center gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="truncate text-lg font-semibold">{group.title}</h3>
                </header>

                <ul className="mt-5 space-y-4">
                  {group.skills.map((s) => (
                    <li key={s.name}>
                      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
                        <span className="truncate text-sm text-foreground/90">{s.name}</span>
                        <span className={`shrink-0 rounded-full border px-2 py-0.5 font-mono text-[10px] ${LEVEL[s.level].className}`}>
                          {s.level}
                        </span>
                      </div>
                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-surface">
                        <div
                          className="h-full rounded-full transition-[width] duration-700"
                          style={{ width: LEVEL[s.level].width, backgroundImage: "var(--gradient-brand)" }}
                        />
                      </div>
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