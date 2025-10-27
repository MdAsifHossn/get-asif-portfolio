import "./globals.css";
import type { Metadata } from "next";
import {
  Inter,
  Roboto,
  Open_Sans,
  Poppins,
  Montserrat,
} from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { PortfolioSettingsProvider } from "@/components/portfolio-settings-provider";
import { Toaster } from "@/components/ui/sonner";
import PortfolioNavigation from "@/components/portfolio/portfolio-navigation";
import SettingsPanel from "@/components/settings-panel";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-opensans",
  display: "swap",
});
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

// Base URL
const siteUrl = "https://getasif.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  // Basic Meta
  title: {
    default: "Md. Asif Hossain | Frontend Developer & Web Engineer",
    template: "%s | Md. Asif Hossain",
  },
  description:
    "Portfolio of Md. Asif Hossain – a passionate Frontend Developer and Web Engineer specializing in React.js, Next.js, Vue.js, and Django. Discover my projects, skills, and professional experience in building modern web applications.",

  // Keywords
  keywords: [
    "Md. Asif Hossain",
    "Asif Hossain",
    "Md Asif",
    "getasif",
    "Frontend Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Vue.js Developer",
    "Django Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Wix Developer",
    "Web Engineer",
    "Full Stack Developer",
    "Freelance Developer",
    "Bangladesh Developer",
    "Dhaka Developer",
    "Portfolio Website",
    "Web Development Portfolio",
    "Software Engineer",
  ],

  // Authors and Creator
  authors: [{ name: "Md. Asif Hossain", url: siteUrl }],
  creator: "Md. Asif Hossain",
  publisher: "Md. Asif Hossain",

  // Category and Classification
  category: "Technology",
  classification: "Portfolio Website",

  // Viewport
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Icons
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png" },
      { url: "/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
  },

  // Manifest
  manifest: "/manifest.json",

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Md. Asif Hossain | Frontend Developer & Web Engineer",
    description:
      "Explore the professional portfolio of Md. Asif Hossain — a creative and detail-oriented Frontend Developer specializing in React, Next.js, Vue.js, and Django.",
    siteName: "Md. Asif Hossain Portfolio",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Md. Asif Hossain - Frontend Developer & Web Engineer Portfolio",
        type: "image/jpeg",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@getasif",
    creator: "@getasif",
    title: "Md. Asif Hossain | Frontend Developer & Web Engineer",
    description:
      "Frontend Developer skilled in React, Next.js, Vue.js, and Django. Visit my portfolio to see my projects and expertise.",
    images: [`${siteUrl}/og-image.jpg`],
  },

  // Verification (Google Search Console)
  verification: {
    google: "Yu2eZmpQis5zXsGi_tY3z_dkTOxoQt6J1WVVqdPzVxg",
  },

  // Alternates
  alternates: {
    canonical: siteUrl,
    languages: {
      "en-US": siteUrl,
    },
  },

  // Additional Meta
  other: {
    google: "notranslate",
    "format-detection": "telephone=no",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Md. Asif Hossain",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Md. Asif Hossain",
      alternateName: ["Asif Hossain", "Md Asif", "getasif"],
      url: siteUrl,
      image: `${siteUrl}/og-image.jpg`,
      sameAs: ["https://github.com/getasif", "https://linkedin.com/in/getasif"],
      jobTitle: "Frontend Developer",
      worksFor: {
        "@type": "Organization",
        name: "Freelance",
      },
      knowsAbout: [
        "React.js",
        "Next.js",
        "Vue.js",
        "Django",
        "JavaScript",
        "TypeScript",
        "Web Development",
        "Frontend Development",
        "Full Stack Development",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dhaka",
        addressCountry: "BD",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Md. Asif Hossain Portfolio",
      description:
        "Portfolio of Md. Asif Hossain – Frontend Developer & Web Engineer",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
      inLanguage: "en-US",
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteUrl}/?s={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "Md. Asif Hossain | Frontend Developer & Web Engineer",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${siteUrl}/#person`,
      },
      description:
        "Portfolio of Md. Asif Hossain – a passionate Frontend Developer and Web Engineer specializing in React.js, Next.js, Vue.js, and Django.",
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteUrl}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          // strategy="beforeInteractive"
          strategy="afterInteractive"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${inter.variable} ${roboto.variable} ${openSans.variable} ${poppins.variable} ${montserrat.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PortfolioSettingsProvider>
            <PortfolioNavigation />
            <main className="min-h-screen">{children}</main>
            <SettingsPanel />
            <Toaster />
          </PortfolioSettingsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

// import "./globals.css";
// import type { Metadata } from "next";
// import {
//   Inter,
//   Roboto,
//   Open_Sans,
//   Poppins,
//   Montserrat,
// } from "next/font/google";
// import { ThemeProvider } from "@/components/theme-provider";
// import { PortfolioSettingsProvider } from "@/components/portfolio-settings-provider";
// import { Toaster } from "@/components/ui/sonner";
// import PortfolioNavigation from "@/components/portfolio/portfolio-navigation";
// import SettingsPanel from "@/components/settings-panel";

// // 🧠 Font Setup
// const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
// const roboto = Roboto({
//   weight: ["300", "400", "500", "700"],
//   subsets: ["latin"],
//   variable: "--font-roboto",
// });
// const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-opensans" });
// const poppins = Poppins({
//   weight: ["300", "400", "500", "600", "700"],
//   subsets: ["latin"],
//   variable: "--font-poppins",
// });
// const montserrat = Montserrat({
//   subsets: ["latin"],
//   variable: "--font-montserrat",
// });

// // 🌐 Base URL (Next.js uses this for absolute OG/Twitter image URLs)
// const siteUrl = "https://getasif.netlify.app";

// export const metadata: Metadata = {
//   metadataBase: new URL(siteUrl),
//   title: "Md. Asif Hossain | Frontend Developer & Web Engineer",
//   description:
//     "Portfolio of Md. Asif Hossain – a passionate Frontend Developer and Web Engineer specializing in React.js, Next.js, Vue.js, and Django. Discover my projects, skills, and professional experience in building modern web applications.",
//   keywords: [
//     "Md. Asif Hossain",
//     "Asif Hossain",
//     "Md Asif",
//     "Frontend Developer",
//     "Web Developer",
//     "React Developer",
//     "Next.js Developer",
//     "Vue.js Developer",
//     "Django Developer",
//     "JavaScript",
//     "TypeScript",
//     "Wix Developer",
//     "Web Engineer",
//     "Freelancer",
//     "Portfolio",
//     "getasif",
//   ],
//   authors: [{ name: "Md. Asif Hossain", url: siteUrl }],
//   creator: "Md. Asif Hossain",
//   publisher: "Md. Asif Hossain",
//   category: "Portfolio",
//   viewport: "width=device-width, initial-scale=1",
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
//   icons: {
//     icon: "/favicon.ico",
//     shortcut: "/favicon.ico",
//     apple: "/apple-icon.png",
//   },
//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: siteUrl,
//     title: "Md. Asif Hossain | Frontend Developer & Web Engineer",
//     description:
//       "Explore the professional portfolio of Md. Asif Hossain — a creative and detail-oriented Frontend Developer specializing in React, Next.js, Vue.js, and Django.",
//     siteName: "Md. Asif Hossain Portfolio",
//     images: [
//       {
//         url: `${siteUrl}/og-image.jpg`,
//         width: 1200,
//         height: 630,
//         alt: "Md. Asif Hossain - Web Developer Portfolio",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     site: "@getasif",
//     creator: "@getasif",
//     title: "Md. Asif Hossain | Frontend Developer & Web Engineer",
//     description:
//       "Frontend Developer skilled in React, Next.js, Vue.js, and Django. Visit my portfolio to see my projects and expertise.",
//     images: [`${siteUrl}/og-image.jpg`],
//   },
//   alternates: {
//     canonical: siteUrl,
//   },
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body
//         className={`${inter.variable} ${roboto.variable} ${openSans.variable} ${poppins.variable} ${montserrat.variable} font-sans antialiased`}
//       >
//         <ThemeProvider
//           attribute="class"
//           defaultTheme="system"
//           enableSystem
//           disableTransitionOnChange
//         >
//           <PortfolioSettingsProvider>
//             <PortfolioNavigation />
//             <main className="min-h-screen">{children}</main>
//             <SettingsPanel />
//             <Toaster />
//           </PortfolioSettingsProvider>
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }
