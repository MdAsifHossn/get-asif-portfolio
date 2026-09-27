import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import PageHero from "@/components/portfolio/page-hero";
import ProjectsSection from "@/components/portfolio/projects-section";
import { getSiteContent } from "@/lib/content-repository";

export const metadata: Metadata = { title: "Selected Work", description: "Selected frontend and full-stack product work by Md. Asif Hossain." };

export default async function WorkPage() {
  const { pages: { work } } = await getSiteContent();
  return <main>
    <PageHero eyebrow={work.eyebrow} title={work.title} accent={work.accent} description={work.description} nextId="work" />
    <ProjectsSection showHeading={false} />
    <section className="section-space"><div className="shell grid gap-12 lg:grid-cols-2 lg:gap-24"><div><p className="eyebrow">{work.approachEyebrow}</p><h2 className="display-title">{work.approachTitle}</h2></div><div className="space-y-3">{work.principles.map((item, index) => <div key={item} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary/10 text-xs font-bold text-primary">0{index + 1}</span><p className="font-medium">{item}</p><CheckCircle2 className="ml-auto h-5 w-5 text-accent" /></div>)}</div></div></section>
  </main>;
}
