import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/portfolio/page-hero";
import AboutSection from "@/components/portfolio/about-section";
import ExperienceSection from "@/components/portfolio/experience-section";
import EducationSection from "@/components/portfolio/education-section";

export const metadata: Metadata = { title: "About", description: "The experience, values and long-term vision behind Asif Hossain’s work." };

export default function AboutPage() {
  return <main>
    <PageHero eyebrow="About me" title="Engineer by craft." accent="Builder by nature." description="I care about useful products, honest collaboration and building things that remain valuable long after launch." nextId="story" />
    <section id="story" className="section-space"><div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-20"><div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border bg-card"><Image src="/images/asif-hero-v2.jpg" alt="Asif Hossain in his workspace" fill sizes="(max-width: 1024px) 90vw, 45vw" className="object-cover" /></div><div><p className="eyebrow">The person behind the work</p><h2 className="display-title">Curious, grounded<br />and always learning.</h2><p className="body-copy mt-7">I began by learning the building blocks of the web and grew through hands-on product work across React, Next.js, Vue, Nuxt and Wix. Today I’m comfortable owning a frontend from early structure to production polish.</p><p className="body-copy mt-5">Outside software, I’m drawn to purposeful living, family and the potential of sustainable rural enterprise in Bangladesh. Those ambitions keep me practical: create value, build trust and think beyond the next release.</p></div></div></section>
    <AboutSection />
    <ExperienceSection />
    <EducationSection />
  </main>;
}
