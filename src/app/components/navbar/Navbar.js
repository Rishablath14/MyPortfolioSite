"use client"
import React, { useState } from 'react'
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import {logo} from "../../assets/index"
import { motion, useScroll,AnimatePresence } from "framer-motion";
import { navLinksdata } from '../../constants';
import Image from 'next/image';

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const [showMenu, setShowMenu]=useState(false)
  return (
    <>
    <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
    <div className=" w-full px-4 md:px-16 h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div>
      <h2 className="text-2xl font-bold text-white">My Portfolio</h2>
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-20}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
<AnimatePresence>
        {showMenu && (
          <motion.div initial={{x:"-100%",opacity:0}} transition={{ type: "spring", stiffness: 40 }} animate={{x:0,opacity:1}} exit={{x:"-100%",opacity:0}} className="w-[100%] h-screen overflow-scroll absolute top-0 left-[-15px] bg-[#191b1e] p-10 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <Image priority={true} className="w-32" src={logo} alt="logo" />
                <p className="text-sm text-gray-400 mt-2">
                  Hyy, I am Rishab Lath
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-20}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
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
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </div>
  </>
  );
}

export default Navbar
