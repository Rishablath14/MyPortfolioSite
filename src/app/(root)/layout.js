import "./globals.css";
import { Manrope, Syne } from "next/font/google";
import GoogleAnalytics from "./components/GoogleAnalytics";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://rishablathportfolio.netlify.app/#person",
      name: "Rishab Lath",
      jobTitle: "Full Stack Software Developer",
      description:
        "Full stack software developer building fast, accessible, SEO-focused web products with Next.js, React, .NET, Node.js, and modern product design.",
      url: "https://rishablathportfolio.netlify.app/",
      email: "reshablath@gmail.com",
      telephone: "+919039002468",
      sameAs: [
        "https://github.com/Rishablath14",
        "https://www.linkedin.com/in/rishab-lath/",
        "https://leetcode.com/rishablath/",
      ],
      knowsAbout: [
        "Full Stack Development",
        "Next.js",
        "React",
        ".NET",
        "Node.js",
        "Search Engine Optimization",
        "Web Performance",
        "Product Design",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://rishablathportfolio.netlify.app/#website",
      name: "Rishab Lath Portfolio",
      url: "https://rishablathportfolio.netlify.app/",
      publisher: {
        "@id": "https://rishablathportfolio.netlify.app/#person",
      },
    },
    {
      "@type": "ProfilePage",
      "@id": "https://rishablathportfolio.netlify.app/#profile",
      name: "Rishab Lath - Full Stack Software Developer Portfolio",
      url: "https://rishablathportfolio.netlify.app/",
      mainEntity: {
        "@id": "https://rishablathportfolio.netlify.app/#person",
      },
    },
  ],
};

export const metadata = {
  title: {
    default: "Rishab Lath - Full Stack Software Developer Portfolio",
    template: "%s | Rishab Lath",
  },
  description:
    "Portfolio of Rishab Lath, a full stack software developer building fast, accessible, SEO-optimized web products with Next.js, React, .NET, Node.js, and modern UI/UX.",
  metadataBase: new URL("https://rishablathportfolio.netlify.app"),
  alternates: {
    canonical: "https://rishablathportfolio.netlify.app/",
  },
  keywords: [
    "Rishab Lath",
    "Full Stack Developer",
    "Software Developer Portfolio",
    "Next.js Developer",
    "React Developer",
    ".NET Developer",
    "SEO optimized web developer",
    "India software engineer",
  ],
  authors: [
    { name: "Rishab Lath", url: "https://rishablathportfolio.netlify.app/" },
  ],
  creator: "Rishab Lath",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Rishab Lath - Full Stack Software Developer Portfolio",
    description:
      "Fast, accessible, SEO-focused web products built with Next.js, React, .NET, Node.js, and product-minded UI/UX.",
    images: ["/og-image.svg"],
  },
  openGraph: {
    title: "Rishab Lath - Full Stack Software Developer Portfolio",
    description:
      "Fast, accessible, SEO-focused web products built with Next.js, React, .NET, Node.js, and product-minded UI/UX.",
    url: "https://rishablathportfolio.netlify.app/",
    siteName: "Rishab Lath Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Rishab Lath portfolio preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  category: "technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} ${syne.variable}`}>
      <GoogleAnalytics />
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
