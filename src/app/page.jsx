import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
// import Preloader from "./components/Preloader";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
        <Navbar />
      <div className="max-w-screen-xl mx-auto px-4">
        <Banner />
        <Features />
        <Projects />
        <Resume />
        <Contact />
        <FooterBottom />
      </div>
    </div>
  );
}

export default App;
