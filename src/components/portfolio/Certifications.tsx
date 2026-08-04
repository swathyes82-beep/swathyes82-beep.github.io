import { Award, ExternalLink } from "lucide-react";
import { certifications } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";

export function Certifications() {
  return (
    <section id="certifications" className="relative px-5 py-24">
      <SectionHeading
        eyebrow="certifications & learning"
        title="Courses and credentials"
        description="Certificate links are placeholders and will be added as each credential is issued."
      />

      <div className="mx-auto mt-14 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c, i) => (
          <Reveal key={c.title} delay={i * 60}>
            <article className="glass flex h-full flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet/50">
              <span className="grid size-11 place-items-center rounded-xl bg-violet/15 text-violet">
                <Award className="size-5" />
              </span>
              <h3 className="mt-4 text-base font-semibold">{c.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
              {c.url ? (
                <a
                  href={c.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 self-start rounded-xl border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-cyan/50 hover:text-cyan"
                >
                  View Certificate <ExternalLink className="size-3.5" />
                </a>
              ) : (
                <span className="mt-5 inline-flex cursor-not-allowed items-center gap-2 self-start rounded-xl border border-dashed border-border px-4 py-2 text-sm text-muted-foreground">
                  View Certificate — coming soon
                </span>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}