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

export const metadata: Metadata = {
  // metadataBase: new URL("https://your-netlify-site.netlify.app"),
  title: "Md. Asif Hossain - Web Developer Portfolio",
  description:
    "Professional portfolio of Md. Asif Hossain, an ambitious and hard-working Frontend Developer specializing in React.js, Next.js, Vue.js, and Django. Explore my projects, skills, and experience.",
  keywords: [
    "Md. Asif Hossain",
    "Web Developer",
    "Frontend Developer",
    "React.js",
    "Next.js",
    "Vue.js",
    "Django",
    "TypeScript",
    "JavaScript",
    "Portfolio",
  ],
  authors: [{ name: "Md. Asif Hossain" }],
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Md. Asif Hossain - Web Developer Portfolio",
    description:
      "Professional portfolio showcasing web development projects and expertise in modern technologies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Md. Asif Hossain - Web Developer Portfolio",
    description:
      "Professional portfolio showcasing web development projects and expertise.",
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
