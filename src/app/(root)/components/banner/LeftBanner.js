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
        <h2 className="sml:text-4xl font-bold text-white text-[1.35rem]">
          a{" "}
          <span className="role-rotator" aria-label="Software Developer, Digital Marketer, Graphic Designer">
            <span>Software Developer</span>
            <span>Digital Marketer</span>
            <span>Graphic Designer</span>
          </span>
        </h2>
        <p className="text-left md:text-justify font-bodyFont leading-7 tracking-wide text-white/70">
          Full stack software developer focused on fast, reliable, and
          conversion-aware products.
          <span className="hidden md:inline">
            {" "}I turn business requirements into polished interfaces,
            scalable backend systems, and SEO-friendly experiences that feel
            premium on every device.
          </span>
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
              <a
                href="https://github.com/Rishablath14"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Rishab Lath on GitHub"
              >
                <span className="bannerIcon">
                  <FaGithub aria-hidden="true" />
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/rishab-lath/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Rishab Lath on LinkedIn"
              >
                <span className="bannerIcon">
                  <FaLinkedinIn aria-hidden="true" />
                </span>
              </a>
              <a
                href="https://leetcode.com/rishablath/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Rishab Lath on LeetCode"
              >
                <span className="bannerIcon">
                  <SiLeetcode aria-hidden="true" />
                </span>
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-xs uppercase font-titleFont tracking-[0.3em] mb-4 text-white/70">
              Toolkit
            </h2>
            <div className="flex gap-4">
              <span className="bannerIcon">
                <SiNextdotjs aria-hidden="true" />
              </span>
              {/* <span className="bannerIcon">
              <SiJava />
            </span> */}
              <span className="bannerIcon">
                <FaJava aria-hidden="true" />
              </span>
              <span className="bannerIcon">
                <SiNodedotjs aria-hidden="true" />
              </span>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xs uppercase font-titleFont tracking-[0.3em] mb-4 mt-2 text-white/70">
            My Resume
          </h2>
          <div className="flex gap-2">
            <a href="/Rishab_Lath_SDE_Res.pdf" download aria-label="Download Rishab Lath resume PDF">
              <span className="bannerIcon">
                <FaCopy aria-hidden="true" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
