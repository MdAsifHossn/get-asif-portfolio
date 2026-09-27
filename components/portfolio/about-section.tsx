"use client";

import { motion } from "framer-motion";
import { Code2, Compass, Layers3 } from "lucide-react";
import { useSiteContent } from "@/components/site-content-provider";

const icons = { compass: Compass, layers: Layers3, code: Code2 };

export default function AboutSection() {
  const { home: { about } } = useSiteContent();
  const values = about.values;
  return (
    <section id="about" className="section-space relative overflow-hidden">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-[.78fr_1.22fr] lg:gap-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}>
            <p className="eyebrow">{about.eyebrow}</p>
            <h2 className="display-title">{about.title}<br /><span className="text-muted-foreground">{about.accent}</span></h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ delay: .1 }}>
            <p className="body-copy text-foreground">{about.paragraph1}</p>
            <p className="body-copy mt-5">{about.paragraph2}</p>
          </motion.div>
        </div>

        <div className="mt-16 grid border-y border-border md:grid-cols-3">
          {values.map((item, index) => {
            const Icon = icons[item.icon as keyof typeof icons] || Compass;
            return (
            <motion.article key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }} className={`py-8 md:px-8 ${index > 0 ? "border-t border-border md:border-l md:border-t-0" : ""}`}>
              <Icon className="mb-6 h-6 w-6 text-primary" />
              <h3 className="font-[var(--font-manrope)] text-lg font-bold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p>
            </motion.article>
          )})}
        </div>
      </div>
    </section>
  );
}
