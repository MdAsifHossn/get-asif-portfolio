"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useSiteContent } from "@/components/site-content-provider";

export default function ExperienceSection() {
  const { experiences } = useSiteContent();
  return (
    <section id="experience" className="section-space border-y border-border bg-card/35">
      <div className="shell">
        <div className="mb-14 grid gap-6 lg:grid-cols-2">
          <div><p className="eyebrow">Experience</p><h2 className="display-title">Learning by shipping.</h2></div>
          <p className="body-copy max-w-lg lg:justify-self-end">A career shaped by real products, distributed teams and progressively greater ownership.</p>
        </div>

        <div className="border-t border-border">
          {experiences.map((experience, index) => (
            <motion.article key={experience.id} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .05 }} className="grid gap-6 border-b border-border py-8 sm:py-10 lg:grid-cols-[.28fr_.34fr_.38fr]">
              <div>
                <p className="text-sm font-semibold text-primary">{experience.startDate} — {experience.endDate}</p>
                <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground"><MapPin className="h-3.5 w-3.5" />{experience.location}</p>
              </div>
              <div><h3 className="font-[var(--font-manrope)] text-xl font-bold sm:text-2xl">{experience.role}</h3><p className="mt-2 text-sm text-muted-foreground">{experience.company}</p></div>
              <div>
                <p className="text-sm leading-6 text-muted-foreground">{experience.description[0]}</p>
                <div className="mt-5 flex flex-wrap gap-2">{experience.technologies.slice(0, 5).map((tech) => <span className="pill" key={tech}>{tech}</span>)}</div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
