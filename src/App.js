import React,{useState} from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
// import Preloader from "./components/Preloader";

function App() {
const [loading,setLoading] = useState(true);
const spinner = document.getElementById("preloader");  
  if(spinner){
    setTimeout(()=>{
      spinner.style.display = "none";
      setLoading(false);
    },2000);
  }
  return (
    !loading && (
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
    )
  );
}

export default App;
