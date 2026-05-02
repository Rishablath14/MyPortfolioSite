import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import SkillsScroll from "./components/Skills";
import AmbientWow from "./components/motion/AmbientWow";

function App() {
  return (
    <div className="w-full h-auto text-lightText site-shell">
      <div className="absolute inset-0 grid-overlay opacity-45" aria-hidden="true" />
      <AmbientWow />
      <Navbar />
      <main id="main-content" className="relative z-10 w-full px-4 md:px-10 xl:px-16 pt-28">
          <Banner />
          <Features />
          <SkillsScroll />
          <Projects />
          <Resume />
          <Contact />
          <FooterBottom />
      </main>
    </div>
  );
}

export default App;
