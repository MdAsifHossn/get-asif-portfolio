"use client";

import { motion } from "framer-motion";
import { Code2, Compass, Layers3 } from "lucide-react";

const values = [
  { icon: Compass, title: "Purpose before pixels", text: "I start with the real user problem, so every screen earns its place." },
  { icon: Layers3, title: "Built to keep growing", text: "Clear systems and reusable components make products easier to scale and maintain." },
  { icon: Code2, title: "Care in the details", text: "Accessibility, responsiveness and performance are part of the build—not a final checklist." },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-space relative overflow-hidden">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-[.78fr_1.22fr] lg:gap-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}>
            <p className="eyebrow">A little about me</p>
            <h2 className="display-title">More than code.<br /><span className="text-muted-foreground">I build with intent.</span></h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ delay: .1 }}>
            <p className="body-copy text-foreground">I’m a product-minded frontend engineer who enjoys the space where design, business and engineering meet. Over the last three years, I’ve helped teams turn ambitious ideas into maintainable interfaces used in education, recruitment and commerce.</p>
            <p className="body-copy mt-5">My long-term vision reaches beyond software: use technology to create opportunity, then invest that growth into family, community and sustainable living in rural Bangladesh. That sense of responsibility shapes how I work—patiently, honestly and for the long run.</p>
          </motion.div>
        </div>

        <div className="mt-16 grid border-y border-border md:grid-cols-3">
          {values.map((item, index) => (
            <motion.article key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }} className={`py-8 md:px-8 ${index > 0 ? "border-t border-border md:border-l md:border-t-0" : ""}`}>
              <item.icon className="mb-6 h-6 w-6 text-primary" />
              <h3 className="font-[var(--font-manrope)] text-lg font-bold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
