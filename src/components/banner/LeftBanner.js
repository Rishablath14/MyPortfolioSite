import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaReact } from "react-icons/fa";
import { GrDocumentDownload } from "react-icons/gr";
import { SiTailwindcss, SiNodedotjs, SiJava} from "react-icons/si";

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Digital Marketer", "Web Developer", "Programmer"],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <span className=" text-lg font-normal">WELCOME TO MY WORLD</span>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Rishab Lath</span>
        </h1>
        <h2 className="ss:text-4xl font-bold text-white text-[1.7rem]">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-justify font-bodyFont leading-6 tracking-wide">
        An articulate and quick thinking Computer Science Engineering Student with a natural flair to communicate and build relationships online with problem-solving skills. I am Passionate about designing, developing, implementing and launching new projects. Ability to translate business requirements into technical solutions.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
          <a href='https://www.facebook.com/rishablath.14/' target="blank"> <span className="bannerIcon">
            <FaFacebookF /> </span> </a>
          <a href='https://www.instagram.com/rishablath.14/' target="blank"> <span className="bannerIcon">
            <FaInstagram /> </span> </a>
          <a href='https://www.linkedin.com/in/rishab-lath/' target="blank"> <span className="bannerIcon">
            <FaLinkedinIn /> </span> </a>
          <a href='Rishab_Lath_Resume.pdf' download> <span className="bannerIcon">
            <GrDocumentDownload /> </span> </a>
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
            <span className="bannerIcon">
              <SiJava />
            </span>
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
