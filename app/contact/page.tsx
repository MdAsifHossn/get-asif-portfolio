import type { Metadata } from "next";
import PageHero from "@/components/portfolio/page-hero";
import ContactSection from "@/components/portfolio/contact-section";

export const metadata: Metadata = { title: "Contact", description: "Start a project or collaboration with frontend engineer Md. Asif Hossain." };

export default function ContactPage() {
  return <main><PageHero eyebrow="Contact" title="Let’s build something" accent="worth using." description="Share the goal, the challenge and where you are today. I’ll reply with a clear next step." nextId="contact" /><ContactSection showHeading={false} /></main>;
}
