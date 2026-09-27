import type { Metadata } from "next";
import PageHero from "@/components/portfolio/page-hero";
import ContactSection from "@/components/portfolio/contact-section";
import { getSiteContent } from "@/lib/content-repository";

export const metadata: Metadata = { title: "Contact", description: "Start a project or collaboration with frontend engineer Md. Asif Hossain." };

export default async function ContactPage() {
  const { pages: { contact } } = await getSiteContent();
  return <main><PageHero {...contact} nextId="contact" /><ContactSection showHeading={false} /></main>;
}
