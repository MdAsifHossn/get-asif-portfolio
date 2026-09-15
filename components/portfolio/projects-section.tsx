"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, LockKeyhole } from "lucide-react";
import { projects } from "@/lib/portfolio-data";

const labels = ["Marketplace", "Learning platform", "Recruitment product"];

export default function ProjectsSection({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section id="work" className="section-space border-y border-border bg-card/35">
      <div className="shell">
        {showHeading && <div className="mb-14 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <div><p className="eyebrow">Selected work</p><h2 className="display-title">Products designed<br />to do real work.</h2></div>
          <p className="max-w-md text-sm leading-6 text-muted-foreground sm:text-base">A selection of production-minded interfaces across commerce, education and recruitment—each balancing user needs with business goals.</p>
        </div>}

        <div className="space-y-6">
          {projects.map((project, index) => {
            const live = project.liveUrl && project.liveUrl !== "#";
            return (
              <motion.article key={project.id} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} className="project-card group grid overflow-hidden rounded-[1.75rem] border border-border bg-card lg:grid-cols-[1.18fr_.82fr]">
                <div className="relative min-h-[280px] overflow-hidden bg-stone-900 sm:min-h-[380px] lg:min-h-[440px]">
                  <Image src={project.imageUrl} alt={`${project.title} interface preview`} fill sizes="(max-width: 1024px) 100vw, 58vw" className="project-image object-cover object-top transition-transform duration-700 ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/45 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.16em] backdrop-blur">{labels[index]}</span>
                </div>
                <div className="flex flex-col justify-between p-6 sm:p-9 lg:p-10">
                  <div>
                    <div className="mb-7 flex items-center justify-between text-xs text-muted-foreground"><span>0{index + 1}</span><span>{project.category === "fullstack" ? "Full-stack collaboration" : "Frontend"}</span></div>
                    <h3 className="font-[var(--font-manrope)] text-2xl font-bold leading-tight tracking-tight sm:text-3xl">{project.title}</h3>
                    <p className="mt-5 text-sm leading-7 text-muted-foreground">{project.description}</p>
                    <div className="mt-7 flex flex-wrap gap-2">{project.technologies.slice(0, 5).map((tech) => <span key={tech} className="pill">{tech}</span>)}</div>
                  </div>
                  <div className="mt-9 border-t border-border pt-6">
                    {live ? (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="focus-ring inline-flex items-center gap-2 rounded font-semibold text-primary transition hover:brightness-110">View live product <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-sm text-muted-foreground"><LockKeyhole className="h-4 w-4" /> Private client platform</span>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
