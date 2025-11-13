"use client";
import Typewriter from "typewriter-effect";
import { FaLinkedinIn, FaCopy, FaGithub, FaJava } from "react-icons/fa";
import { SiNodedotjs, SiLeetcode, SiNextdotjs } from "react-icons/si";

const LeftBanner = () => {
  return (
    <div className="w-full xl:w-1/2 flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <span className=" text-lg font-normal">WELCOME TO MY WORLD</span>
        <h1 className="text-3xl sml:text-5xl sm:text-4xl md:text-6xl  font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Rishab Lath</span>
        </h1>
        <h2 className="sml:text-4xl font-bold text-white text-[1.7rem]">
          a{" "}
          <span className="inline-block">
            <Typewriter
              options={{
                strings: ["Digital Marketer", "Web Developer", "Programmer"],
                autoStart: true,
                loop: true,
                cursor: "|",
                delay: 20,
                deleteSpeed: 10,
              }}
            />
          </span>
        </h2>
        <p className="text-justify font-bodyFont leading-6 tracking-wide">
          Aspiring Fullstack Developer with expertise in building feature-rich
          web applications using React.js, Next.js, Node.js, Three.js, and
          MongoDB. I specialize in crafting responsive, user-focused designs
          with Tailwind CSS and Shadcn UI, ensuring seamless functionality and
          an engaging user experience. Experienced in collaborating with
          cross-functional teams, optimizing code for performance, and
          implementing secure authentication. Proficient in SEO best practices,
          driving organic traffic and improving visibility through optimized
          design and development. Committed to delivering high-quality solutions
          in dynamic environments.
        </p>
        <div className="flex flex-col xl:flex-row gap-6 xl:gap-2 justify-between mt-2">
          <div>
            <h2 className="text-base uppercase font-titleFont mb-4">
              Find me in
            </h2>
            <div className="flex gap-4">
              <a href="https://github.com/Rishablath14" target="blank">
                {" "}
                <span className="bannerIcon">
                  <FaGithub />{" "}
                </span>{" "}
              </a>
              <a href="https://www.linkedin.com/in/rishab-lath/" target="blank">
                {" "}
                <span className="bannerIcon">
                  <FaLinkedinIn />{" "}
                </span>{" "}
              </a>
              <a href="https://leetcode.com/rishablath/" target="blank">
                {" "}
                <span className="bannerIcon">
                  <SiLeetcode />{" "}
                </span>{" "}
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-base uppercase font-titleFont mb-4">
              BEST SKILL ON
            </h2>
            <div className="flex gap-4">
              <span className="bannerIcon">
                <SiNextdotjs />
              </span>
              {/* <span className="bannerIcon">
              <SiJava />
            </span> */}
              <span className="bannerIcon">
                <FaJava />
              </span>
              <span className="bannerIcon">
                <SiNodedotjs />
              </span>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4 mt-2">
            My Resume
          </h2>
          <div className="flex gap-2">
            <a href="RishabLath_Resume_SWE.pdf" download>
              {" "}
              <span className="bannerIcon">
                <FaCopy />{" "}
              </span>{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
