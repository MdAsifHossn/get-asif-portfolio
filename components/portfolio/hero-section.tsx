"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, MapPin } from "lucide-react";
import { personalInfo } from "@/lib/portfolio-data";

export default function HeroSection() {
  return (
    <section className="hero-glow relative min-h-[760px] overflow-hidden border-b border-border/70 pt-[72px]">
      <div className="noise pointer-events-none absolute inset-0 opacity-[0.035]" />
      <div className="shell relative grid min-h-[calc(100svh-72px)] items-center gap-12 py-14 lg:grid-cols-[1.12fr_.88fr] lg:py-16">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="relative z-10">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-3 py-1.5 text-xs font-semibold text-emerald-300">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" /><span className="relative h-2 w-2 rounded-full bg-emerald-400" /></span>
            Available for select projects
          </div>

          <p className="mb-5 text-sm font-semibold uppercase tracking-[.22em] text-muted-foreground">Frontend engineer · Dhaka, Bangladesh</p>
          <h1 className="max-w-[760px] font-[var(--font-manrope)] text-[clamp(3.25rem,6vw,5.8rem)] font-semibold leading-[.94] tracking-[-.06em]">
            I build digital<br />products that <span className="text-primary">feel right.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            I’m {personalInfo.name}, a frontend engineer turning complex product ideas into fast, dependable and human web experiences.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/work" className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition hover:brightness-105">
              Explore selected work <ArrowDownRight className="h-4 w-4" />
            </Link>
            <a href="https://drive.google.com/uc?export=download&id=1h-lhBfqNtu0CP4HoCe3PTpY1lcIMePGX" target="_blank" rel="noopener noreferrer" className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold transition hover:bg-secondary/60">
              View résumé <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Dhaka · working worldwide</span>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="focus-ring rounded transition hover:text-foreground"><Github className="h-5 w-5" aria-label="GitHub" /></a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="focus-ring rounded transition hover:text-foreground"><Linkedin className="h-5 w-5" aria-label="LinkedIn" /></a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .15 }} className="relative mx-auto w-full max-w-[560px] lg:ml-auto">
          <div className="absolute -inset-5 rounded-[2.5rem] bg-primary/10 blur-3xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl shadow-black/20">
            <Image src="/images/asif-hero-v2.jpg" alt="Portrait of Asif Hossain at his workspace" fill priority sizes="(max-width: 1024px) 90vw, 42vw" className="object-cover object-center" />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/35 to-transparent" />
          </div>
          <div className="absolute -left-5 top-8 hidden rounded-2xl border border-border bg-card/90 p-4 shadow-xl backdrop-blur sm:block">
            <p className="text-2xl font-bold text-primary">4+ yrs</p><p className="mt-1 text-xs text-muted-foreground">shipping products</p>
          </div>
          <div className="absolute -bottom-4 right-5 rounded-2xl border border-border bg-card/90 px-4 py-3 shadow-xl backdrop-blur"><p className="text-xs font-semibold">React · Next.js · Vue</p><p className="mt-1 text-[11px] text-muted-foreground">Product-minded engineering</p></div>
        </motion.div>
      </div>
    </section>
  );
}
