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

// 🧠 Font Setup
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-opensans" });
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

// 🌐 Base URL (Next.js uses this for absolute OG/Twitter image URLs)
const siteUrl = "https://getasif.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Md. Asif Hossain | Frontend Developer & Web Engineer",
  description:
    "Portfolio of Md. Asif Hossain – a passionate Frontend Developer and Web Engineer specializing in React.js, Next.js, Vue.js, and Django. Discover my projects, skills, and professional experience in building modern web applications.",
  keywords: [
    "Md. Asif Hossain",
    "Asif Hossain",
    "Md Asif",
    "Frontend Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Vue.js Developer",
    "Django Developer",
    "JavaScript",
    "TypeScript",
    "Wix Developer",
    "Web Engineer",
    "Freelancer",
    "Portfolio",
    "getasif",
  ],
  authors: [{ name: "Md. Asif Hossain", url: siteUrl }],
  creator: "Md. Asif Hossain",
  publisher: "Md. Asif Hossain",
  category: "Portfolio",
  viewport: "width=device-width, initial-scale=1",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
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
        alt: "Md. Asif Hossain - Web Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@getasif",
    creator: "@getasif",
    title: "Md. Asif Hossain | Frontend Developer & Web Engineer",
    description:
      "Frontend Developer skilled in React, Next.js, Vue.js, and Django. Visit my portfolio to see my projects and expertise.",
    images: [`${siteUrl}/og-image.jpg`],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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
