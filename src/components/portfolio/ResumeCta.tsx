import { Download, FileText } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function ResumeCta() {
  return (
    <section id="resume" className="relative px-5 py-24">
      <Reveal className="mx-auto max-w-4xl">
        <div className="glass relative isolate overflow-hidden rounded-3xl p-8 text-center sm:p-14">
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-30 grid-bg" />
          <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 size-72 -translate-x-1/2 rounded-full bg-violet/30 blur-[100px]" />
          <span className="grid size-12 place-items-center rounded-2xl bg-primary/15 text-primary mx-auto">
            <FileText className="size-6" />
          </span>
          <h2 className="mt-6 text-3xl font-bold sm:text-4xl">Want to know more about my journey?</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Grab a copy of my resume for a full breakdown of my education, internship experience and technical skills.
          </p>
          <a
            href={profile.resumeUrl}
            download
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-shadow hover:glow-ring"
          >
            <Download className="size-4" /> Download Resume
          </a>
        </div>
      </Reveal>
    </section>
  );
}