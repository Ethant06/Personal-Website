import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://ethantandio.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ethan Tandio",
  description:
    "Ethan Tandio — Computer Science and Applied Math at the University of Washington Seattle. Full-stack development and machine learning research",
  applicationName: "Ethan Tandio",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Ethan Tandio",
    title: "Ethan Tandio — CS @ UW Seattle",
    description:
      "Computer Science and Applied Math at the University of Washington. Full-stack development and machine learning research.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ethan Tandio — CS @ UW Seattle",
    description:
      "Computer Science and Applied Math at the University of Washington. Full-stack development and machine learning research.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full bg-background text-foreground antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background font-sans text-foreground">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
