import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anisul Islam | Full Stack Developer & AI Engineer",
  description:
    "Portfolio of Anisul Islam — a Full Stack Developer & AI Engineer building scalable web applications and intelligent AI workflows.",
  keywords: [
    "Anisul Islam",
    "Full Stack Developer",
    "AI Engineer",
    "React",
    "Next.js",
    "LangChain",
    "Portfolio",
  ],
  verification: {
    google: "GBdB09k-Od3VusGZovFayQn1Ni2XtemEMhKkmvvPLUY",
  },
  openGraph: {
    title: "Anisul Islam | Full Stack Developer & AI Engineer",
    description:
      "Building scalable web applications and intelligent AI workflows.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="min-h-screen bg-[#050505] text-slate-200 antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
