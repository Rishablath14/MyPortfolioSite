"use client";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { logo } from "../../../assets/index";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { navLinksdata } from "../../constants";
import Image from "next/image";

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const [showMenu, setShowMenu] = useState(false);

  const closeMenu = () => setShowMenu(false);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
        aria-hidden="true"
      />
      <div className="nav-shell w-full px-4 md:px-16 h-24 fixed top-0 left-0 right-0 z-50 mx-auto flex justify-between items-center font-titleFont">
        <div>
          <a href="#home" className="flex flex-col leading-none" aria-label="Rishab Lath portfolio home">
            <span className="text-[0.7rem] uppercase tracking-[0.5em] text-white/60">
              Portfolio
            </span>
            <span className="text-2xl font-bold text-white">Rishab Lath</span>
          </a>
        </div>
        <nav aria-label="Primary navigation">
          <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
            {navLinksdata.map(({ _id, title, link }) => (
              <li
                className="text-sm uppercase font-normal text-white/70 tracking-[0.24em] cursor-pointer hover:text-white duration-300"
                key={_id}
              >
                <a href={`#${link}`} className="nav-anchor">
                  {title}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => setShowMenu(!showMenu)}
            aria-label={showMenu ? "Close menu" : "Open menu"}
            aria-expanded={showMenu}
            aria-controls="mobile-menu"
            className="nav-menu-button text-xl mdl:hidden w-10 h-10 shrink-0 inline-flex items-center justify-center rounded-full text-white cursor-pointer"
          >
            <FiMenu aria-hidden="true" />
          </button>
          <AnimatePresence>
            {showMenu && (
              <motion.div
                id="mobile-menu"
                initial={{ x: "-100%", opacity: 0 }}
                transition={{ type: "spring", stiffness: 40 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "-100%", opacity: 0 }}
                className="mobile-menu-panel w-full h-screen overflow-y-auto fixed top-0 left-0 p-10"
              >
                <div className="flex flex-col gap-8 py-2 relative">
                  <div>
                    <Image
                      priority={true}
                      className="w-32"
                      src={logo}
                      alt="Rishab Lath portfolio logo"
                    />
                    <p className="text-sm text-gray-400 mt-2">
                      Hey, I am Rishab Lath
                    </p>
                  </div>
                  <ul className="flex flex-col gap-4">
                    {navLinksdata.map((item) => (
                      <li
                        key={item._id}
                      className="text-sm uppercase font-normal text-white/70 tracking-[0.24em] cursor-pointer hover:text-white duration-300"
                      >
                        <a href={`#${item.link}`} onClick={closeMenu}>
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col gap-4">
                    <h2 className="text-xs uppercase font-titleFont tracking-[0.3em] mb-4 text-white/70">
                      Find me in
                    </h2>
                    <div className="flex gap-4">
                      <a
                        href="https://www.facebook.com/rishablath.14/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open Rishab Lath on Facebook"
                      >
                        <span className="bannerIcon">
                          <FaFacebookF aria-hidden="true" />
                        </span>
                      </a>
                      <a
                        href="https://www.instagram.com/rishablath.14/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open Rishab Lath on Instagram"
                      >
                        <span className="bannerIcon">
                          <FaInstagram aria-hidden="true" />
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
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowMenu(false)}
                    aria-label="Close menu"
                    className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
                  >
                    <MdClose aria-hidden="true" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
