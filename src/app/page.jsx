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
  return (
    <>
    <Preloader/>
    <div className="w-full h-auto bg-bodyColor text-lightText">
        <Navbar />
      <div className="w-full px-4 md:px-16">
        <Banner />
        <Features />
        <SkillsScroll/>
        <Projects />
        <Resume />
        <Contact />
        <FooterBottom />
      </div>
    </div>
    </>
  );
}

export default App;
