"use client";

import { ArrowUp, Github, Linkedin } from "lucide-react";
import { personalInfo } from "@/lib/portfolio-data";

export default function PortfolioFooter() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="shell flex flex-col gap-7 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {personalInfo.name}. Built with care in Dhaka.</p>
        <div className="flex items-center gap-5">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="focus-ring rounded transition hover:text-foreground"><Github className="h-5 w-5" /></a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="focus-ring rounded transition hover:text-foreground"><Linkedin className="h-5 w-5" /></a>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="focus-ring ml-2 inline-flex items-center gap-2 rounded transition hover:text-foreground">Back to top <ArrowUp className="h-4 w-4" /></button>
        </div>
      </div>
    </footer>
  );
}
