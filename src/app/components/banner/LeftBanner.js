"use client"
import Typewriter from 'typewriter-effect';
import { FaInstagram, FaLinkedinIn, FaReact,FaCopy } from "react-icons/fa";
import { SiTailwindcss, SiNodedotjs, SiLeetcode} from "react-icons/si";

const LeftBanner = () => {
  return (
    <div className="w-full xl:w-1/2 flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <span className=" text-lg font-normal">WELCOME TO MY WORLD</span>
        <h1 className="text-3xl sml:text-5xl sm:text-4xl md:text-6xl  font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Rishab Lath</span>
        </h1>
        <h2 className="sml:text-4xl font-bold text-white text-[1.7rem]">
          a <span className='inline-block'><Typewriter
  options={{
    strings: ["Digital Marketer", "Web Developer", "Programmer"],
    autoStart: true,
    loop: true,
    cursor:'|',
    delay: 20,
    deleteSpeed: 10,
  }}
/></span>
        </h2>
        <p className="text-justify font-bodyFont leading-6 tracking-wide">
        I am an aspiring Fullstack Developer with hands-on experience in developing feature-rich web applications using modern technologies such as React.js, Next.js, Node.js, three.js and MongoDB. I specialize in creating responsive, user-centric designs with Tailwind CSS and Shadcn UI. My experience includes collaborating with cross-functional teams, optimizing code for performance, and implementing secure authentication mechanisms. I am skilled in problem-solving and project management, consistently delivering high-quality results in a dynamic environment. I am also well-versed in best SEO practices, ensuring that websites rank highly on search engine results pages (SERPs) to drive organic traffic and improve visibility.
        </p>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4 mt-2">
            My Resume
          </h2>
          <div className="flex gap-2">
          <a href='RishabLath_ResumeSDE.pdf' download> <span className="bannerIcon">
            <FaCopy /> </span> </a>
          </div>
        </div>                
      </div>
      <div className="flex flex-col xl:flex-row gap-6 xl:gap-2 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
          <a href='https://www.instagram.com/rishablath.14/' target="blank"> <span className="bannerIcon">
            <FaInstagram /> </span> </a>
          <a href='https://www.linkedin.com/in/rishab-lath/' target="blank"> <span className="bannerIcon">
            <FaLinkedinIn /> </span> </a>
          <a href='https://leetcode.com/rishablath/' target="blank"> <span className="bannerIcon">
            <SiLeetcode /> </span> </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            {/* <span className="bannerIcon">
              <SiJava />
            </span> */}
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiNodedotjs/>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner
