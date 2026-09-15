import HeroSection from "@/components/portfolio/hero-section";
import AboutSection from "@/components/portfolio/about-section";
import ProjectsSection from "@/components/portfolio/projects-section";
import SkillsSection from "@/components/portfolio/skills-section";
import ContactSection from "@/components/portfolio/contact-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <main>
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </>
  );
}
