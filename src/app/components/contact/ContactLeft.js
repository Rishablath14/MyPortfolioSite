import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";
import Image from 'next/image';

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <Image
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Rishab Lath</h3>
        <p className="text-lg font-normal text-gray-400">
          Developer & Digital Marketer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          I promise you to deliver my best in your work with full dedication and creativity.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <a href="tel:09039002468"><span className="text-lightText">+91 9039002468</span></a>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <a href="mailto:reshablath@gmail.com"><span className="text-lightText">reshablath@gmail.com</span></a>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
        <a href='https://www.facebook.com/rishablath.14/' target="blank"> <span className="bannerIcon">
            <FaFacebookF />
          </span></a>
          <a href='https://www.instagram.com/rishablath.14/' target="blank"><span className="bannerIcon">
            <FaInstagram />
          </span></a>
          <a href='https://www.linkedin.com/in/rishab-lath/' target="blank"><span className="bannerIcon">
            <FaLinkedinIn />
          </span></a>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft
