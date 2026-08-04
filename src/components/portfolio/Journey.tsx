import { useState } from "react";
import { journey } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";

export function Journey() {
  const [active, setActive] = useState(0);

  return (
    <section id="journey" className="relative px-5 py-24">
      <SectionHeading
        eyebrow="devops journey"
        title="How I got from code to infrastructure"
        description="Each step built on the last — select a stage to see what it added to my toolkit."
      />

      <div className="mx-auto mt-14 max-w-6xl">
        <Reveal className="relative">
          <div className="absolute left-0 right-0 top-5 hidden h-px bg-border lg:block" />
          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-8 lg:gap-2">
            {journey.map((step, i) => {
              const isActive = i === active;
              return (
                <li key={step.title} className="relative">
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className="group grid w-full grid-cols-[auto_minmax(0,1fr)] items-center gap-3 text-left lg:grid-cols-1 lg:justify-items-center lg:text-center"
                  >
                    <span
                      className={`grid size-10 shrink-0 place-items-center rounded-full border font-mono text-xs transition-all ${
                        isActive
                          ? "border-cyan bg-cyan/15 text-cyan glow-ring"
                          : "border-border bg-card text-muted-foreground group-hover:border-primary/50 group-hover:text-primary"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`truncate text-sm font-medium transition-colors lg:mt-3 ${
                        isActive ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {step.title}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </Reveal>

        <Reveal className="mt-10">
          <div className="glass rounded-2xl p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan">
              stage {String(active + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-3 text-2xl font-bold">{journey[active]?.title}</h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {journey[active]?.detail}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}