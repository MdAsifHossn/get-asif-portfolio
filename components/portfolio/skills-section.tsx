"use client";

import { motion } from "framer-motion";
import { Blocks, Gauge, Palette, Workflow } from "lucide-react";
import { useSiteContent } from "@/components/site-content-provider";

const icons = { palette: Palette, blocks: Blocks, gauge: Gauge, workflow: Workflow };

export default function SkillsSection({ showHeading = true }: { showHeading?: boolean }) {
  const { home: { skills } } = useSiteContent();
  const capabilities = skills.capabilities;
  return (
    <section id="skills" className="section-space">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
          {showHeading ? <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">{skills.eyebrow}</p>
            <h2 className="display-title">{skills.title}</h2>
            <p className="body-copy mt-6 max-w-md">{skills.description}</p>
          </div> : <div className="lg:sticky lg:top-28 lg:self-start"><p className="eyebrow">Capabilities</p><h2 className="display-title">What I bring<br />to your product.</h2></div>}
          <div className="grid gap-px overflow-hidden rounded-[1.75rem] border border-border bg-border sm:grid-cols-2">
            {capabilities.map((item, index) => {
              const Icon = icons[item.icon as keyof typeof icons] || Blocks;
              return (
              <motion.article key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .06 }} className="bg-card p-7 sm:p-8">
                <Icon className="h-7 w-7 text-primary" />
                <h3 className="mt-8 font-[var(--font-manrope)] text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p>
                <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2">{item.tech.map((tech) => <span key={tech} className="text-xs font-medium text-muted-foreground">{tech}</span>)}</div>
              </motion.article>
            )})}
          </div>
        </div>
      </div>
    </section>
  );
}
