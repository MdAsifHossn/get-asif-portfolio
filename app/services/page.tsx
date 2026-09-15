import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import PageHero from "@/components/portfolio/page-hero";
import SkillsSection from "@/components/portfolio/skills-section";

export const metadata: Metadata = { title: "Services", description: "Frontend development, design systems, performance improvement and product delivery services." };

const engagements = [
  { title: "Build a product frontend", text: "A responsive, production-ready frontend for a new web product or an important new feature.", items: ["React or Next.js architecture", "Responsive implementation", "API and state integration", "Launch support"] },
  { title: "Improve an existing product", text: "Focused help when an interface feels inconsistent, slow or difficult to extend.", items: ["UI and codebase audit", "Component refactoring", "Performance improvements", "Accessibility fixes"] },
  { title: "Create a design system", text: "A practical component foundation that helps designers and developers move together.", items: ["Reusable component library", "Tokens and responsive rules", "Documentation patterns", "Team handoff"] },
];

export default function ServicesPage() {
  return <main>
    <PageHero eyebrow="Services" title="Good ideas deserve" accent="solid execution." description="Flexible frontend support for founders, agencies and product teams—from a focused improvement to a complete interface build." nextId="services" />
    <div id="services"><SkillsSection showHeading={false} /></div>
    <section className="section-space border-y border-border bg-card/40"><div className="shell"><p className="eyebrow">Ways to work together</p><div className="grid gap-5 lg:grid-cols-3">{engagements.map((item, index) => <article key={item.title} className="flex flex-col rounded-[1.75rem] border border-border bg-card p-7 sm:p-8"><span className="text-xs font-bold text-primary">0{index + 1}</span><h2 className="mt-6 font-[var(--font-manrope)] text-2xl font-bold">{item.title}</h2><p className="mt-4 text-sm leading-6 text-muted-foreground">{item.text}</p><ul className="mt-7 space-y-3">{item.items.map(point => <li key={point} className="flex items-center gap-3 text-sm"><Check className="h-4 w-4 text-accent" />{point}</li>)}</ul><Link href="/contact" className="focus-ring mt-9 inline-flex items-center gap-2 rounded font-semibold text-primary">Discuss your project <ArrowRight className="h-4 w-4" /></Link></article>)}</div></div></section>
  </main>;
}
