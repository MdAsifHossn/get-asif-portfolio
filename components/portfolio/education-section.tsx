"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { useSiteContent } from "@/components/site-content-provider";

export default function EducationSection() {
  const { education } = useSiteContent();
  const edu = education[0];
  return (
    <section id="education" className="py-16 sm:py-20">
      <div className="shell">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid gap-7 rounded-[1.75rem] border border-border bg-gradient-to-br from-secondary/50 to-transparent p-7 sm:p-10 lg:grid-cols-[auto_1fr_auto] lg:items-center">
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary"><GraduationCap className="h-7 w-7" /></span>
          <div><p className="text-xs font-bold uppercase tracking-[.2em] text-primary">Education</p><h2 className="mt-3 font-[var(--font-manrope)] text-xl font-bold sm:text-2xl">{edu.degree}</h2><p className="mt-2 text-sm text-muted-foreground">{edu.institution} · {edu.location}</p></div>
          <div className="lg:text-right"><p className="font-semibold">{edu.startDate} — {edu.endDate}</p><p className="mt-2 text-sm text-muted-foreground">CGPA {edu.gpa}</p></div>
        </motion.div>
      </div>
    </section>
  );
}
