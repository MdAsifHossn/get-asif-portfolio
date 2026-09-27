import Link from "next/link";
import { ArrowDownRight } from "lucide-react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  nextId?: string;
};

export default function PageHero({ eyebrow, title, accent, description, nextId }: PageHeroProps) {
  return (
    <section className="hero-glow relative overflow-hidden border-b border-border/70 pt-[72px]">
      <div className="noise pointer-events-none absolute inset-0 opacity-[0.025]" />
      <div className="shell relative flex min-h-[520px] flex-col justify-center py-24 sm:min-h-[600px]">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="max-w-5xl font-[var(--font-manrope)] text-[clamp(3.5rem,8vw,7.5rem)] font-semibold leading-[.9] tracking-[-.065em]">{title}<br /><span className="text-primary">{accent}</span></h1>
        <p className="body-copy mt-8 max-w-2xl">{description}</p>
        {nextId && <Link href={`#${nextId}`} className="focus-ring mt-10 inline-flex w-fit items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold transition hover:bg-secondary/60">Explore the page <ArrowDownRight className="h-4 w-4" /></Link>}
      </div>
    </section>
  );
}
