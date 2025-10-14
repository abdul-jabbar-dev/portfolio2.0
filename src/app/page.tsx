// src/app/page.tsx
import AboutMe from "@/components/home/AboutMe";
import Contact from "@/components/home/Contact";
import Experience from "@/components/home/Experience";
import Projects from "@/components/home/Projects";
import ShortDes from "@/components/home/ShortDes";
import Skills from "@/components/home/Skills";
import CONFIG from "@/config";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: "Abdul Jabbar - MERN Stack Developer | Full Stack Web Portfolio",
  description: "Explore the professional portfolio of Abdul Jabbar, a skilled MERN Stack developer. Showcasing innovative web applications built with MongoDB, Express.js, React, and Node.js.",
  keywords: [
    "Abdul Jabbar", "MERN Stack Developer", "Full Stack Web Developer",
    "JavaScript Developer", "React Developer", "Node.js Developer",
    "Web Developer Portfolio", "Abdul Jabbar dev", "Abdul Jabbar developer"
  ],
  authors: [{ name: "Abdul Jabbar", url: "https://abduljabbar.netlify.app/" }],
  creator: "Abdul Jabbar",
  applicationName: "Abdul Jabbar Portfolio",
  metadataBase: new URL("https://abduljabbar.netlify.app/"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Abdul Jabbar - MERN Stack Developer",
    description: "Professional portfolio of Abdul Jabbar, showcasing web apps and innovative solutions built with the MERN stack.",
    url: "https://abduljabbar.netlify.app/",
    siteName: "Abdul Jabbar Portfolio",
    images: [
      {
        url: CONFIG.META.OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Abdul Jabbar - MERN Stack Developer Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Jabbar - MERN Stack Developer",
    description: "Professional portfolio of Abdul Jabbar showcasing full-stack web development using the MERN stack.",
    images: [CONFIG.META.OG_IMAGE],
    creator: "@AbdulJabbarDev",
  },
};

export default function Home() {
  return (
   <>
      <ShortDes />
      <AboutMe />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}