"use client"

import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '@/components/portfolio/hero-section';
import AboutSection from '@/components/portfolio/about-section';
import ExperienceSection from '@/components/portfolio/experience-section';
import SkillsSection from '@/components/portfolio/skills-section';
import ProjectsSection from '@/components/portfolio/projects-section';
import EducationSection from '@/components/portfolio/education-section';
import ContactSection from '@/components/portfolio/contact-section';
import PortfolioFooter from '@/components/portfolio/portfolio-footer';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      <PortfolioFooter />
    </motion.div>
  );
}