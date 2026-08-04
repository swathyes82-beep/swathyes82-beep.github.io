import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Journey } from "@/components/portfolio/Journey";
import { Projects } from "@/components/portfolio/Projects";
import { Lab } from "@/components/portfolio/Lab";
import { Experience } from "@/components/portfolio/Experience";
import { Education } from "@/components/portfolio/Education";
import { Certifications } from "@/components/portfolio/Certifications";
import { GitHubSection } from "@/components/portfolio/GitHubSection";
import { ResumeCta } from "@/components/portfolio/ResumeCta";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { profile } from "@/data/portfolio";

const title = "Swathi E S — Cloud & DevOps Engineer Portfolio";
const description =
  "Cloud & DevOps Intern at Akumen Technologies. Linux administration, automation, CI/CD, Docker, Kubernetes and monitoring — projects, skills and experience.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.name,
          jobTitle: profile.role,
          worksFor: { "@type": "Organization", name: profile.company },
          address: { "@type": "PostalAddress", addressLocality: "Thrissur", addressRegion: "Kerala", addressCountry: "IN" },
          alumniOf: { "@type": "CollegeOrUniversity", name: "St. Mary's College, Thrissur" },
          knowsAbout: ["Cloud Computing", "DevOps", "Linux", "Docker", "Kubernetes", "CI/CD", "Monitoring"],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Journey />
        <Projects />
        <Lab />
        <Experience />
        <Education />
        <Certifications />
        <GitHubSection />
        <ResumeCta />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
