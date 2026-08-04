import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";

export function Education() {
  return (
    <section id="education" className="relative px-5 py-24">
      <SectionHeading eyebrow="education" title="Academic background" />

      <div className="relative mx-auto mt-14 max-w-3xl">
        <div className="absolute bottom-4 left-5 top-4 w-px bg-border sm:left-6" />
        <ol className="space-y-6">
          {education.map((e, i) => (
            <Reveal as="li" key={e.degree} delay={i * 80} className="relative pl-14 sm:pl-16">
              <span className="absolute left-0 top-3 grid size-11 place-items-center rounded-full border border-border bg-card text-cyan sm:size-12">
                <GraduationCap className="size-5" />
              </span>
              <article className="glass rounded-2xl p-6">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                  <h3 className="text-lg font-semibold">{e.degree}</h3>
                  {e.period ? (
                    <span className="shrink-0 font-mono text-xs text-muted-foreground">{e.period}</span>
                  ) : null}
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{e.school}</p>
                <p className="mt-3 inline-block rounded-full border border-cyan/40 bg-cyan/10 px-3 py-1 font-mono text-xs text-cyan">
                  {e.result}
                </p>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}