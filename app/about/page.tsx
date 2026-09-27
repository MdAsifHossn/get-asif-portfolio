import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/portfolio/page-hero";
import AboutSection from "@/components/portfolio/about-section";
import ExperienceSection from "@/components/portfolio/experience-section";
import EducationSection from "@/components/portfolio/education-section";
import { getSiteContent } from "@/lib/content-repository";

export const metadata: Metadata = { title: "About", description: "The experience, values and long-term vision behind Asif Hossain’s work." };

export default async function AboutPage() {
  const { pages: { about } } = await getSiteContent();
  return <main>
    <PageHero eyebrow={about.eyebrow} title={about.title} accent={about.accent} description={about.description} nextId="story" />
    <section id="story" className="section-space"><div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-20"><div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border bg-card"><Image src={about.image} alt="Asif Hossain in his workspace" fill sizes="(max-width: 1024px) 90vw, 45vw" className="object-cover" /></div><div><p className="eyebrow">The person behind the work</p><h2 className="display-title">{about.storyTitle}</h2><p className="body-copy mt-7">{about.storyParagraph1}</p><p className="body-copy mt-5">{about.storyParagraph2}</p></div></div></section>
    <AboutSection />
    <ExperienceSection />
    <EducationSection />
  </main>;
}
