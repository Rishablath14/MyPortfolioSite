import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics"
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rishab Lath",
    "jobTitle": "Website Developer, Digital Marketer, and Java Programmer",
    "description": "Hyy! I'm Rishab Lath, a freelancer in Website development, Digital marketing, and Java programming. Explore my work and discover how we can bring your digital projects to life.",
    "url": "https://rishablathportfolio.netlify.app/",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "email": "reshablath@gmail.com",
        "contactType": "Email"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+919039002468",
        "contactType": "Phone"
      },
      {
        "@type": "ContactPoint",
        "url": "https://www.linkedin.com/in/rishab-lath/",
        "contactType": "Website"
      }
    ],
    "skills": [
      "Website Development",
      "Software Development",
      "Digital Marketing",
      "Java Programming",
      "SEO",
      "Social Media Marketing",
      "Web Design",
      "Graphic Designing"
    ]
}
export const metadata = {
  title: "Rishab Lath - Website Developer, Java Programmer & Digital Marketer",
  description: "Hyy! I'm Rishab Lath, an aspiring fullstack develoer, digital marketer, and Java programmer. Explore my work and discover how I can bring your digital projects to life.",
  metadataBase: new URL('https://rishablathportfolio.netlify.app'),
  alternates: {
    canonical: 'https://rishablathportfolio.netlify.app/',
  },
  twitter: {
    card: "Rishab Lath Website",
    title: 'Rishab Lath - Website Developer, Java Programmer & Digital Marketer',
    description: "Hyy! I'm Rishab Lath, a freelancer in website development, digital marketing, and Java programming. Explore my work and discover how I can bring your digital projects to life.",
  },
  openGraph: {
    title: 'Rishab Lath - Website Developer, Java Programmer & Digital Marketer',
    description: "Hyy! I'm Rishab Lath, a freelancer in website development, digital marketing, and Java programming. Explore my work and discover how I can bring your digital projects to life.",
    url: 'https://rishablathportfolio.netlify.app/',
    siteName: "Rishab Lath Website",
    type:"website"
  }
}
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalytics/>
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
