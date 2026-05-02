import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../../assets/index";
import Image from "next/image";

const ContactLeft = () => {
  return (
    <div className="premium-card contact-panel w-full lgl:w-[35%] h-full p-4 lgl:p-8 rounded-lg flex flex-col gap-8 justify-center">
      <div className="premium-card-line" aria-hidden="true" />
      <Image
        className="relative z-10 w-full h-64 object-cover rounded-lg mb-2 saturate-110 contrast-105"
        src={contactImg}
        alt="Rishab Lath contact portrait"
        sizes="(min-width: 1024px) 35vw, 100vw"
      />
      <div className="relative z-10 flex flex-col gap-4">
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
          <a href="tel:+919039002468">
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
      <div className="relative z-10 flex flex-col gap-4">
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
    </div>
  );
};

export default ContactLeft;
