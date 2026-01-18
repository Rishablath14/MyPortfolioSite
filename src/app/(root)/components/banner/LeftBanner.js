"use client";
import Typewriter from "typewriter-effect";
import { FaLinkedinIn, FaCopy, FaGithub, FaJava } from "react-icons/fa";
import { SiNodedotjs, SiLeetcode, SiNextdotjs } from "react-icons/si";

const LeftBanner = () => {
  return (
    <div className="w-full xl:w-1/2 flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <span className="text-xs uppercase tracking-[0.4em] text-white/60">
          Building digital experiences
        </span>
        <h1 className="text-3xl sml:text-5xl sm:text-4xl md:text-6xl font-bold text-white">
          Hi, I&apos;m{" "}
          <span className="gradient-text capitalize">Rishab Lath</span>
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
        <p className="text-justify font-bodyFont leading-7 tracking-wide text-white/70">
          A results-driven Full Stack Developer with hands-on experience
          building scalable web and mobile applications across frontend and
          backend systems. Strong in problem-solving, clean code design, and
          translating business requirements into reliable technical solutions.
          Experienced with modern development workflows, cross-team
          collaboration, and real-world project ownership. Passionate about
          continuous learning, system design, and applying data structures and
          algorithms to solve practical engineering challenges. Proficient in
          SEO best practices, driving organic traffic and improving visibility
          through optimized design and development. Committed to delivering
          high-quality solutions in dynamic environments.
        </p>
        <div className="flex flex-wrap items-center gap-4 mt-2">
          <a href="#projects" className="pill-accent">
            View Work
          </a>
          <a href="#contact" className="pill-button">
            Let&apos;s Talk
          </a>
        </div>
        <div className="flex flex-col xl:flex-row gap-6 xl:gap-2 justify-between mt-2">
          <div>
            <h2 className="text-xs uppercase font-titleFont tracking-[0.3em] mb-4 text-white/70">
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
            <h2 className="text-xs uppercase font-titleFont tracking-[0.3em] mb-4 text-white/70">
              Toolkit
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
          <h2 className="text-xs uppercase font-titleFont tracking-[0.3em] mb-4 mt-2 text-white/70">
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
