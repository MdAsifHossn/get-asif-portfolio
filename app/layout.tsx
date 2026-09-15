import "./globals.css";
import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import Script from "next/script";
import PortfolioNavigation from "@/components/portfolio/portfolio-navigation";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import PortfolioFooter from "@/components/portfolio/portfolio-footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const siteUrl = "https://getasif.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Md. Asif Hossain — Frontend Engineer",
  description: "Frontend engineer in Dhaka building fast, thoughtful web products with React, Next.js, Vue and modern frontend architecture.",
  keywords: ["Md. Asif Hossain", "Frontend Engineer", "React Developer", "Next.js Developer", "Bangladesh Web Developer"],
  authors: [{ name: "Md. Asif Hossain", url: siteUrl }],
  creator: "Md. Asif Hossain",
  viewport: { width: "device-width", initialScale: 1 },
  alternates: { canonical: siteUrl },
  robots: { index: true, follow: true },
  manifest: "/manifest.json",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    type: "website", locale: "en_US", url: siteUrl,
    title: "Md. Asif Hossain — Frontend Engineer",
    description: "Web experiences engineered for clarity, speed and growth.",
    siteName: "Asif Hossain Portfolio",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Md. Asif Hossain portfolio" }],
  },
  twitter: { card: "summary_large_image", title: "Md. Asif Hossain — Frontend Engineer", description: "Web experiences engineered for clarity, speed and growth.", images: ["/og-image.jpg"] },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Person", name: "Md. Asif Hossain", url: siteUrl,
  jobTitle: "Frontend Engineer", email: "mailto:mdasif.hossain1996@gmail.com",
  address: { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "BD" },
  sameAs: ["https://github.com/MdAsifHossn", "https://www.linkedin.com/in/mdasifin/"],
  knowsAbout: ["React", "Next.js", "Vue.js", "TypeScript", "Frontend Architecture"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${manrope.variable}`}>
        <Script id="person-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <PortfolioNavigation />
          {children}
          <PortfolioFooter />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
