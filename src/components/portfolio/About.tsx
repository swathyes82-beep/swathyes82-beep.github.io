import { Cloud, Terminal, Workflow, GaugeCircle, GraduationCap, Building2 } from "lucide-react";
import { profile, stats } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";
import { useReveal } from "@/hooks/use-reveal";
import { useEffect, useState } from "react";

const points = [
  { Icon: GraduationCap, title: "BVoc Software Development", text: "A development-first foundation in programming, databases and web applications." },
  { Icon: Building2, title: "Cloud & DevOps Intern", text: `Gaining industry exposure at ${profile.company} across cloud and infrastructure work.` },
  { Icon: Cloud, title: "Cloud Computing & DevOps", text: "Genuine interest in cloud platforms, infrastructure and DevOps culture." },
  { Icon: Terminal, title: "Hands-on with Linux", text: "Daily practice with Linux administration, permissions, services and the shell." },
  { Icon: Workflow, title: "Automation & CI/CD", text: "Learning pipelines, infrastructure automation and repeatable deployments." },
  { Icon: GaugeCircle, title: "Monitoring & Sysadmin", text: "Building observability habits with metrics, dashboards and log analysis." },
];

function Counter({ value, suffix, decimals = 0 }: { value: number; suffix?: string; decimals?: number }) {
  const { ref, visible } = useReveal<HTMLSpanElement>();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!visible) return;
    const start = performance.now();
    const dur = 1200;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(value * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, value]);

  return (
    <span ref={ref}>
      {n.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="relative px-5 py-24">
      <SectionHeading
        eyebrow="about me"
        title="Software development roots, cloud & DevOps direction"
        description={profile.intro}
      />

      <div className="mx-auto mt-14 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {points.map((p, i) => (
          <Reveal key={p.title} delay={i * 60}>
            <article className="glass group h-full rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1">
              <span className="grid size-11 place-items-center rounded-xl bg-primary/15 text-primary transition-colors group-hover:bg-primary/25">
                <p.Icon className="size-5" />
              </span>
              <h3 className="mt-4 text-base font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mx-auto mt-10 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 70}>
            <div className="glass rounded-2xl p-6 text-center">
              <p className="text-gradient font-display text-3xl font-bold">
                <Counter value={s.value} suffix={s.suffix} decimals={"decimals" in s ? (s.decimals as number) : 0} />
              </p>
              <p className="mt-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}