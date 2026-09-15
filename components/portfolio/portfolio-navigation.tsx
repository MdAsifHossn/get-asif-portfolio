"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function PortfolioNavigation() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open || pathname !== "/" ? "border-b border-border/70 bg-background/90 backdrop-blur-xl" : "bg-transparent"}`}>
      <nav className="shell flex h-[72px] items-center justify-between" aria-label="Primary navigation">
        <Link href="/" className="focus-ring flex items-center gap-3 rounded-lg" aria-label="Asif Hossain, home">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-primary/50 bg-primary/10 font-[var(--font-manrope)] text-sm font-extrabold text-primary">A</span>
          <span className="hidden text-sm font-semibold tracking-tight sm:block">Asif Hossain</span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={`focus-ring relative rounded py-2 text-sm transition-colors ${pathname === link.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>
              {link.label}{pathname === link.href && <span className="absolute inset-x-0 -bottom-0.5 mx-auto h-px w-4 bg-primary" />}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")} className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-border bg-card/70 transition hover:border-primary/60" aria-label="Toggle color theme">
            {mounted && (resolvedTheme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />)}
          </button>
          <Link href="/contact" className="focus-ring hidden items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold transition hover:border-primary/60 hover:bg-primary/10 lg:flex">Start a project <ArrowUpRight className="h-4 w-4" /></Link>
          <button onClick={() => setOpen(!open)} className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-border md:hidden" aria-expanded={open} aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="border-t border-border bg-background px-5 py-6 md:hidden">
            <div className="flex flex-col gap-1">
              {links.map((link) => <Link key={link.href} href={link.href} className={`rounded-xl px-4 py-3 text-left text-lg font-medium ${pathname === link.href ? "bg-secondary text-foreground" : "hover:bg-secondary/60"}`}>{link.label}</Link>)}
              <Link href="/contact" className="mt-3 flex items-center justify-between rounded-xl bg-primary px-4 py-3 font-bold text-primary-foreground">Start a project <ArrowUpRight className="h-5 w-5" /></Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
