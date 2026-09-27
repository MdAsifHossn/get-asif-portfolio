import { education, experiences, personalInfo, projects } from "@/lib/portfolio-data";

export const defaultSiteContent = {
  site: {
    name: personalInfo.name,
    role: "Frontend Engineer",
    location: personalInfo.location,
    email: personalInfo.email,
    phone: personalInfo.phone,
    github: personalInfo.github,
    linkedin: personalInfo.linkedin,
    siteUrl: "https://getasif.netlify.app",
    availability: "Available for remote collaboration",
    footerText: "Built with care in Dhaka.",
  },
  navigation: [
    { href: "/", label: "Home" }, { href: "/work", label: "Work" },
    { href: "/about", label: "About" }, { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ],
  home: {
    hero: {
      eyebrow: "Frontend engineer · Dhaka, Bangladesh",
      title: "I build digital products",
      accent: "people enjoy using.",
      description: "Product-minded frontend engineer creating fast, accessible and maintainable web experiences with React, Next.js, Vue and TypeScript.",
      primaryButton: "View selected work",
      secondaryButton: "Download résumé",
      resumeUrl: "https://drive.google.com/uc?export=download&id=1h-lhBfqNtu0CP4HoCe3PTpY1lcIMePGX",
      image: "/images/asif-hero-v2.jpg",
    },
    about: {
      eyebrow: "A little about me", title: "More than code.", accent: "I build with intent.",
      paragraph1: "I’m a product-minded frontend engineer who enjoys the space where design, business and engineering meet. Over the last three years, I’ve helped teams turn ambitious ideas into maintainable interfaces used in education, recruitment and commerce.",
      paragraph2: "My long-term vision reaches beyond software: use technology to create opportunity, then invest that growth into family, community and sustainable living in rural Bangladesh. That sense of responsibility shapes how I work—patiently, honestly and for the long run.",
      values: [
        { icon: "compass", title: "Purpose before pixels", text: "I start with the real user problem, so every screen earns its place." },
        { icon: "layers", title: "Built to keep growing", text: "Clear systems and reusable components make products easier to scale and maintain." },
        { icon: "code", title: "Care in the details", text: "Accessibility, responsiveness and performance are part of the build—not a final checklist." },
      ],
    },
    work: { eyebrow: "Selected work", title: "Products designed to do real work.", description: "A selection of production-minded interfaces across commerce, education and recruitment—each balancing user needs with business goals." },
    skills: { eyebrow: "How I can help", title: "From first idea to polished release.", description: "I work best with founders and product teams who care about usability, maintainability and the small details users remember.", capabilities: [
      { icon: "palette", title: "Interface engineering", text: "Responsive, accessible interfaces that preserve the intent of the design across every screen.", tech: ["React", "Next.js", "Vue", "Nuxt", "TypeScript"] },
      { icon: "blocks", title: "Design systems", text: "Reusable component foundations that keep teams consistent and make future features faster to ship.", tech: ["Tailwind CSS", "SCSS", "Story patterns", "Atomic design"] },
      { icon: "gauge", title: "Performance & quality", text: "Thoughtful rendering, data flow and code review practices for smooth and dependable products.", tech: ["TanStack Query", "Axios", "WebSocket", "Testing"] },
      { icon: "workflow", title: "Product delivery", text: "Clear communication from rough requirements to release, with business outcomes kept in view.", tech: ["Git", "GitHub", "Jira", "ClickUp", "Vercel"] },
    ] },
    contact: { eyebrow: "Let’s work together", title: "Have a useful idea?", accent: "Let’s make it real.", description: "Tell me what you’re building, where you are in the process and what a successful outcome looks like." },
  },
  pages: {
    about: { eyebrow: "About me", title: "Engineer by craft.", accent: "Builder by nature.", description: "I care about useful products, honest collaboration and building things that remain valuable long after launch.", storyTitle: "Curious, grounded and always learning.", storyParagraph1: "I began by learning the building blocks of the web and grew through hands-on product work across React, Next.js, Vue, Nuxt and Wix. Today I’m comfortable owning a frontend from early structure to production polish.", storyParagraph2: "Outside software, I’m drawn to purposeful living, family and the potential of sustainable rural enterprise in Bangladesh. Those ambitions keep me practical: create value, build trust and think beyond the next release.", image: "/images/asif-hero-v2.jpg" },
    work: { eyebrow: "Selected work", title: "Ideas made", accent: "useful.", description: "A closer look at product interfaces I’ve helped shape across commerce, learning and recruitment.", approachEyebrow: "My approach", approachTitle: "Clear process. Fewer surprises.", principles: ["Understand the user and business goal", "Shape a maintainable interface system", "Build responsively with real content", "Test, refine and support the release"] },
    services: { eyebrow: "Services", title: "Good ideas deserve", accent: "solid execution.", description: "Flexible frontend support for founders, agencies and product teams—from a focused improvement to a complete interface build." },
    contact: { eyebrow: "Contact", title: "Let’s build something", accent: "worth using.", description: "Share the goal, the challenge and where you are today. I’ll reply with a clear next step." },
  },
  services: [
    { title: "Build a product frontend", text: "A responsive, production-ready frontend for a new web product or an important new feature.", items: ["React or Next.js architecture", "Responsive implementation", "API and state integration", "Launch support"] },
    { title: "Improve an existing product", text: "Focused help when an interface feels inconsistent, slow or difficult to extend.", items: ["UI and codebase audit", "Component refactoring", "Performance improvements", "Accessibility fixes"] },
    { title: "Create a design system", text: "A practical component foundation that helps designers and developers move together.", items: ["Reusable component library", "Tokens and responsive rules", "Documentation patterns", "Team handoff"] },
  ],
  projects,
  experiences,
  education,
};

export type SiteContent = typeof defaultSiteContent;
