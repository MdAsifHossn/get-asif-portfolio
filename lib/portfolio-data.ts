import { Experience, Project, Skill, Education } from "./types";
import profilePicture from "../public/images/profilePicture.jpg";

export const personalInfo = {
  name: "Md. Asif Hossain",
  title: "Web Developer",
  location: "Mirpur, Dhaka, Bangladesh",
  phone: "+8801627949470",
  email: "mdasif.hossain1996@gmail.com",
  github: "https://github.com/mdasifhossain",
  linkedin: "https://linkedin.com/in/mdasifhossain",
  summary:
    "Ambitious and hard-working Frontend Developer adept at learning new skills. The proficiency and knowledge I have gained working in various projects will help bring applications from ideation to production. I am eagerly looking to grow professionally and am always willing to take on extra responsibilities.",
  profileImage: profilePicture.src,
};

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Masleap",
    role: "Software Developer",
    location: "Remote",
    startDate: "February 2024",
    endDate: "Present",
    description: [
      "Worked on diverse projects using Nuxt.js, React.js, Django, and related technologies, ensuring efficient frontend-backend integration with tools like React Query and Django Rest Framework (DRF).",
      "Conducted thorough code reviews and implemented an atomic design system with reusable components, maintaining a clean and scalable codebase.",
      "Optimized application performance, reducing load times and improving user satisfaction.",
    ],
    technologies: [
      "Nuxt.js",
      "React.js",
      "Django",
      "React Query",
      "DRF",
      "TypeScript",
    ],
  },
  {
    id: "2",
    company: "EWN Bangladesh Ltd",
    role: "Software Developer",
    location: "Dhaka, Bangladesh",
    startDate: "February 2023",
    endDate: "September 2024",
    description: [
      "Developed and maintained applications using React.js, and Django, leveraging DRF to build robust APIs for dynamic data handling.",
      "Ensured code quality through reviews and implemented design patterns for scalability and maintainability.",
      "Constantly optimized code to enhance application performance, reducing load times and improving user satisfaction.",
      "Enhanced application performance and streamlined development processes to deliver user-friendly solutions.",
    ],
    technologies: ["React.js", "Django", "DRF", "JavaScript", "Python"],
  },
  {
    id: "3",
    company: "EWN Bangladesh Ltd",
    role: "Jr. Web Developer Intern",
    location: "Dhaka, Bangladesh",
    startDate: "September 2022",
    endDate: "January 2023",
    description: [
      "Learned React.js, Tailwind CSS, Axios, Tanstack Query, gaining practical experience in frontend development and improving application performance.",
    ],
    technologies: ["React.js", "Tailwind CSS", "Axios", "TanStack Query"],
  },
  {
    id: "4",
    company: "Appnap",
    role: "Web Development Internship",
    location: "Dhaka, Bangladesh",
    startDate: "June 2022",
    endDate: "August 2022",
    description: [
      "Interned at Appnap, mastering HTML5, CSS3, Bootstrap, JavaScript for front-end, and PHP, Laravel, Apache, MySQL for robust back-end web development.",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "Bootstrap",
      "JavaScript",
      "PHP",
      "Laravel",
      "MySQL",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "King Fahad University of Petroleum and Minerals (KFULMS)",
    description:
      "A comprehensive Learning Management System designed to facilitate online education, akin to platforms like Udemy.",
    longDescription:
      "KFULMS is a comprehensive Learning Management System designed to facilitate online education, akin to platforms like Udemy. The system caters to the needs of both trainees and trainers, offering a seamless and user-friendly experience. Built with modern technologies including React.js, Django, and WebSocket for real-time features.",
    technologies: [
      "React.js",
      "Django",
      "Localization",
      "React Query",
      "Tailwind CSS",
      "Context API",
      "WebSocket",
    ],
    imageUrl:
      "https://images.pexels.com/photos/5905857/pexels-photo-5905857.jpeg?auto=compress&cs=tinysrgb&w=800",
    liveUrl: "#",
    category: "fullstack",
    featured: true,
  },
  {
    id: "2",
    title: "Application Tracking System (ATS)",
    description:
      "A comprehensive Application Tracking System designed to facilitate online job searching, akin to platforms like LinkedIn.",
    longDescription:
      "ATS is a comprehensive Application Tracking System designed to facilitate online job searching, akin to platforms like LinkedIn. The system caters to the needs of both recruiters and applicants, offering a seamless experience with advanced filtering, application management, and communication features.",
    technologies: [
      "React.js",
      "Localization",
      "React Query",
      "Axios",
      "Tailwind CSS",
      "Context API",
    ],
    imageUrl:
      "https://images.pexels.com/photos/5989932/pexels-photo-5989932.jpeg?auto=compress&cs=tinysrgb&w=800",
    liveUrl: "#",
    category: "frontend",
    featured: true,
  },
  {
    id: "3",
    title: "Gorukhasi",
    description:
      "An ecommerce platform where customers can buy or search different categories of cows and goats.",
    longDescription:
      "Gorukhasi is an ecommerce project where customers can buy or search different categories of cows and goats. Buyers also have the option to sell their cows or goats on the platform, ensuring a user-friendly and responsive experience. Built with Next.js and modern authentication.",
    technologies: [
      "Next.js",
      "Page Router",
      "Next Auth",
      "Axios",
      "Tailwind CSS",
    ],
    imageUrl:
      "https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=800",
    liveUrl: "#",
    category: "fullstack",
    featured: true,
  },
];

export const skills: Skill[] = [
  { name: "JavaScript", category: "languages", proficiency: 95 },
  { name: "TypeScript", category: "languages", proficiency: 90 },
  { name: "Python", category: "languages", proficiency: 80 },
  { name: "React.js", category: "frontend", proficiency: 95 },
  { name: "Next.js", category: "frontend", proficiency: 90 },
  { name: "Vue.js", category: "frontend", proficiency: 85 },
  { name: "Nuxt.js", category: "frontend", proficiency: 85 },
  { name: "Tailwind CSS", category: "frontend", proficiency: 95 },
  { name: "SCSS", category: "frontend", proficiency: 85 },
  { name: "Bootstrap", category: "frontend", proficiency: 90 },
  { name: "Axios", category: "frontend", proficiency: 90 },
  { name: "TanStack Query", category: "frontend", proficiency: 90 },
  { name: "Django", category: "backend", proficiency: 80 },
  { name: "Django REST Framework", category: "backend", proficiency: 80 },
  { name: "Git", category: "tools", proficiency: 90 },
  { name: "GitHub", category: "tools", proficiency: 90 },
  { name: "GitLab", category: "tools", proficiency: 85 },
  { name: "VS Code", category: "tools", proficiency: 95 },
  { name: "Postman", category: "tools", proficiency: 90 },
  { name: "ClickUp", category: "tools", proficiency: 85 },
  { name: "Jira", category: "tools", proficiency: 85 },
  { name: "Netlify", category: "tools", proficiency: 85 },
  { name: "Vercel", category: "tools", proficiency: 90 },
];

export const education: Education[] = [
  {
    id: "1",
    degree: "B.Sc. in Computer Science and Engineering",
    institution: "Bangladesh University of Business and Technology (BUBT)",
    location: "Dhaka, Bangladesh",
    startDate: "September 2018",
    endDate: "March 2022",
    gpa: "3.80 out of 4",
  },
];

export const stats = [
  { label: "Years Experience", value: "2+" },
  { label: "Projects Completed", value: "15+" },
  { label: "Technologies", value: "20+" },
  { label: "Happy Clients", value: "10+" },
];
