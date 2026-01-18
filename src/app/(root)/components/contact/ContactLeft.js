import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../../assets/index";
import Image from "next/image";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full glass-card p-4 lgl:p-8 rounded-3xl flex flex-col gap-8 justify-center">
      <Image
        className="w-full h-64 object-cover rounded-lg mb-2 mix-blend-exclusion"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Rishab Lath</h3>
        <p className="text-lg font-normal text-white/70">
          Software Developer & Digital Marketer
        </p>
        <p className="text-base text-white/70 tracking-wide">
          Passionate about building impactful digital solutions. Dedicated to
          delivering high-quality, creative, and results-driven work that
          exceeds expectations.
        </p>
        <p className="text-base text-white/70 flex items-center gap-2">
          Phone:{" "}
          <a href="tel:09039002468">
            <span className="text-lightText">+91 9039002468</span>
          </a>
        </p>
        <p className="text-base text-white/70 flex items-center gap-2">
          Email:{" "}
          <a href="mailto:reshablath@gmail.com">
            <span className="text-lightText">reshablath@gmail.com</span>
          </a>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-xs uppercase font-titleFont tracking-[0.3em] mb-4 text-white/70">
          Find me in
        </h2>
        <div className="flex gap-4">
          <a href="https://www.facebook.com/rishablath.14/" target="blank">
            {" "}
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
          </a>
          <a href="https://www.instagram.com/rishablath.14/" target="blank">
            <span className="bannerIcon">
              <FaInstagram />
            </span>
          </a>
          <a href="https://www.linkedin.com/in/rishab-lath/" target="blank">
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
