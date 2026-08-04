import { lab } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function Lab() {
  return (
    <section id="lab" className="relative isolate overflow-hidden px-5 py-24">
      <div className="grid-bg pointer-events-none absolute inset-0 -z-10 opacity-60" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,color-mix(in_oklab,var(--violet)_28%,transparent),transparent_65%)]" />

      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="glass rounded-2xl p-6 sm:p-10">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">~/lab</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">My DevOps Lab</h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              The sandbox where I experiment: virtual machines, containers, shell scripts and dashboards.
              Everything here is self-driven practice.
            </p>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {lab.map((item, i) => (
                <Reveal key={item.title} delay={i * 50}>
                  <article className="group h-full rounded-xl border border-border bg-card/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/50 hover:bg-card">
                    <span className="text-2xl transition-transform duration-300 group-hover:scale-110 inline-block">
                      {item.emoji}
                    </span>
                    <h3 className="mt-3 text-sm font-semibold">{item.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{item.detail}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}