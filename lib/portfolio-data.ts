import { Experience, Project, Skill, Education } from "./types";
import profilePicture from "../public/images/profilePicture.jpg";
import customCar from "../public/images/customcars.png";
import kfu from "../public/images/kfu.png";
import ats from "../public/images/ats.png";
import goruKhasi from "../public/images/gorukhasi.png";

export const personalInfo = {
  name: "Md. Asif Hossain",
  title: "Web Developer",
  location: "Mirpur, Dhaka, Bangladesh",
  phone: "+8801627949470",
  email: "mdasif.hossain1996@gmail.com",
  github: "https://github.com/MdAsifHossn",
  linkedin: "https://www.linkedin.com/in/mdasifin/",
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
      "Worked on diverse projects using Nuxt.js, Vue.js, React.js, Next.js, and Wix ensuring efficient frontend performance and user experience.",
      "Conducted thorough code reviews and implemented an atomic design system with reusable components, maintaining a clean and scalable codebase.",
      "Optimized application performance, reducing load times and improving user satisfaction.",
    ],
    technologies: [
      "Next.js",
      "React.js",
      "Nuxt.js",
      "Vue.js",
      "React Query",
      "TypeScript",
      "Wix",
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
      "Developed and maintained interactive web applications using React.js and modern frontend tools.",
      "Ensured clean, maintainable, and scalable code following best UI/UX practices.",
      "Enhanced application performance and streamlined development processes to deliver user-friendly solutions.",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "React Query",
      "Tailwind CSS",
    ],
  },
  {
    id: "3",
    company: "EWN Bangladesh Ltd",
    role: "Jr. Web Developer Intern",
    location: "Dhaka, Bangladesh",
    startDate: "September 2022",
    endDate: "January 2023",
    description: [
      "Learned React.js, Tailwind CSS, Axios, and Tanstack Query, gaining practical experience in frontend development and improving application performance.",
    ],
    technologies: ["React.js", "Tailwind CSS", "Axios", "TanStack Query"],
  },
  {
    id: "4",
    company: "Appnap",
    role: "Web Development Intern",
    location: "Dhaka, Bangladesh",
    startDate: "June 2022",
    endDate: "August 2022",
    description: [
      "Interned at Appnap, mastering HTML5, CSS3, Bootstrap, JavaScript for front-end, and working with modern frameworks like Vue.js and Nuxt.js.",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "Bootstrap",
      "JavaScript",
      "Vue.js",
      "Nuxt.js",
    ],
  },
];

// export const projects: Project[] = [
//   {
//     id: "1",
//     title: "King Fahad University of Petroleum and Minerals (KFULMS)",
//     description:
//       "A comprehensive Learning Management System designed to facilitate online education, similar to platforms like Udemy.",
//     longDescription:
//       "KFULMS is a comprehensive Learning Management System designed to facilitate online education. The system caters to the needs of both trainees and trainers, offering a seamless and user-friendly experience. Built with modern technologies including React.js, React Query, and Tailwind CSS for a robust and responsive frontend.",
//     technologies: [
//       "React.js",
//       "React Query",
//       "Localization",
//       "Tailwind CSS",
//       "Context API",
//     ],
//     imageUrl:
//       "https://images.pexels.com/photos/5905857/pexels-photo-5905857.jpeg?auto=compress&cs=tinysrgb&w=800",
//     liveUrl: "#",
//     category: "frontend",
//     featured: true,
//   },
//   {
//     id: "2",
//     title: "Application Tracking System (ATS)",
//     description:
//       "A modern Application Tracking System designed to facilitate online job searching, similar to LinkedIn.",
//     longDescription:
//       "ATS is a modern application tracking platform that connects recruiters and applicants, offering advanced filtering, application management, and real-time updates. Built with React.js, TypeScript, and Tailwind CSS for high performance and scalability.",
//     technologies: [
//       "React.js",
//       "React Query",
//       "TypeScript",
//       "Axios",
//       "Tailwind CSS",
//       "Context API",
//     ],
//     imageUrl:
//       "https://images.pexels.com/photos/5989932/pexels-photo-5989932.jpeg?auto=compress&cs=tinysrgb&w=800",
//     liveUrl: "#",
//     category: "frontend",
//     featured: true,
//   },
//   {
//     id: "3",
//     title: "Gorukhasi",
//     description:
//       "An ecommerce platform where customers can buy or search different categories of cows and goats.",
//     longDescription:
//       "Gorukhasi is an ecommerce platform where users can buy or sell cattle online. It provides a clean and responsive user experience with secure authentication and dynamic search. Built with Next.js and Tailwind CSS.",
//     technologies: [
//       "Next.js",
//       "Next Auth",
//       "Axios",
//       "Tailwind CSS",
//       "Page Router",
//     ],
//     imageUrl:
//       "https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=800",
//     liveUrl: "#",
//     category: "frontend",
//     featured: true,
//   },
// ];

export const projects: Project[] = [
  {
    id: "1",
    title: "Custom Car Marketplace",
    description:
      "An ecommerce platform where customers can buy or search different categories of cars. Sellers and dealers can also sell their cars on the platform.",
    longDescription:
      "Custom Car Marketplace is an ecommerce platform providing a user-friendly and responsive experience for buying, searching, and selling cars. Sellers and dealers have full control over their listings, while admins manage the system effectively. Built with modern technologies for secure authentication, dynamic search, and real-time updates.",
    technologies: [
      "Next.js",
      "App Router",
      "Redux Authentication",
      "Axios",
      "Tailwind CSS",
      "WebSocket",
    ],
    imageUrl: customCar.src,
    liveUrl: "https://customcars.com/",
    category: "fullstack",
    featured: true,
  },
  {
    id: "2",
    title: "King Fahad University of Petroleum and Minerals (KFULMS)",
    description:
      "A comprehensive Learning Management System designed to facilitate online education, similar to platforms like Udemy.",
    longDescription:
      "KFULMS is a full-featured Learning Management System that serves both trainees and trainers, offering a seamless, user-friendly experience. The platform includes real-time features, responsive design, and robust frontend architecture, built with React.js, Django, React Query, Tailwind CSS, Context API, and WebSocket for real-time communication.",
    technologies: [
      "React.js",
      "Django",
      "Localization",
      "React Query",
      "Tailwind CSS",
      "Context API",
      "WebSocket",
    ],
    imageUrl: kfu.src,
    liveUrl: "#",
    category: "fullstack",
    featured: true,
  },
  {
    id: "3",
    title: "Application Tracking System (ATS)",
    description:
      "A modern Application Tracking System designed to facilitate online job searching, similar to LinkedIn.",
    longDescription:
      "ATS is a comprehensive platform connecting recruiters and applicants, offering advanced filtering, application management, and seamless communication features. Built with React.js, React Query, Tailwind CSS, Context API, and Axios to ensure performance, scalability, and a smooth user experience.",
    technologies: [
      "React.js",
      "React Query",
      "Tailwind CSS",
      "Context API",
      "Axios",
    ],
    imageUrl: ats.src,
    liveUrl: "https://ats-frontend-three.vercel.app/",
    category: "fullstack",
    featured: true,
  },
];

export const skills: Skill[] = [
  { name: "JavaScript", category: "languages", proficiency: 75 },
  { name: "TypeScript", category: "languages", proficiency: 70 },
  { name: "React.js", category: "frontend", proficiency: 85 },
  { name: "Next.js", category: "frontend", proficiency: 80 },
  { name: "Vue.js", category: "frontend", proficiency: 75 },
  { name: "Nuxt.js", category: "frontend", proficiency: 75 },
  { name: "Wix", category: "frontend", proficiency: 85 },
  { name: "Tailwind CSS", category: "frontend", proficiency: 95 },
  { name: "SCSS", category: "frontend", proficiency: 85 },
  { name: "Bootstrap", category: "frontend", proficiency: 70 },
  { name: "Axios", category: "frontend", proficiency: 90 },
  { name: "TanStack Query", category: "frontend", proficiency: 90 },
  { name: "Git", category: "tools", proficiency: 90 },
  { name: "GitHub", category: "tools", proficiency: 90 },
  { name: "GitLab", category: "tools", proficiency: 85 },
  { name: "VS Code", category: "tools", proficiency: 95 },
  { name: "Postman", category: "tools", proficiency: 90 },
  { name: "Swagger", category: "tools", proficiency: 80 },
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
    endDate: "March 2023",
    gpa: "3.80 out of 4",
  },
];

export const stats = [
  { label: "Years Experience", value: "2+" },
  { label: "Projects Completed", value: "15+" },
  { label: "Technologies", value: "20+" },
  { label: "Happy Clients", value: "12+" },
];
