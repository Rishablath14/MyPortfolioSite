"use client";
import { useState } from "react";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Preloader from "./components/Preloader";
import SkillsScroll from "./components/Skills";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <LayoutGroup>
      <AnimatePresence>
        {isLoading && (
          <Preloader onDone={() => setIsLoading(false)} />
        )}
      </AnimatePresence>
      <div className="w-full h-auto text-lightText site-shell">
        <div className="absolute inset-0 grid-overlay opacity-50" />
        <Navbar showBrand={!isLoading} />
        <div className="relative z-10 w-full px-4 md:px-16 pt-28">
          <Banner />
          <Features />
          <SkillsScroll />
          <Projects />
          <Resume />
          <Contact />
          <FooterBottom />
        </div>
      </div>
    </LayoutGroup>
  );
}

export default App;
