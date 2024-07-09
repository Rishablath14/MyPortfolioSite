"use client";
import React from "react";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandNextjs,TbBrandFramerMotion } from "react-icons/tb";
import { PiGitMergeBold } from "react-icons/pi";
import {
  FaNodeJs,
  FaReact,
  FaBootstrap,
  FaPython,
  FaGithubSquare,
  FaHtml5,
  FaDocker,
} from "react-icons/fa";
import {
  SiMongodb,
  SiSocketdotio,
  SiFirebase,
  SiMysql,
  SiGraphql,
  SiRedux,
  SiCss3,
  SiExpress,
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";

const SkillsScroll = () => {
  return (
    <section className="skills-scroll-container w-full py-12 md:py-20 border-b-[1px] border-b-black">
      <div className="w-full inline-flex flex-nowrap overflow-hidden">
        <ul className="flex items-center gap-20 md:gap-40 justify-center md:justify-start infinite-scroll">
          <li className="text-6xl md:text-8xl ml-20 md:ml-40">
            <TbBrandNextjs />
          </li>
          <li className="text-6xl md:text-8xl ">
            <TbBrandFramerMotion/>
          </li>
          <li className="text-6xl md:text-8xl ">
            <SiJavascript />
          </li>
          <li className="text-6xl md:text-8xl ">
            <FaReact />
          </li>
          <li className="text-6xl md:text-8xl ">
            <FaNodeJs />
          </li>
          <li className="text-6xl md:text-8xl ">
            <SiExpress />
          </li>
          <li className="text-6xl md:text-8xl ">
            <FaDocker />
          </li>
        </ul>
        <ul
          className="flex items-center justify-center gap-20 md:gap-40 md:justify-start infinite-scroll"
          aria-hidden="true"
        >
          <li className="text-6xl md:text-8xl  ml-20 md:ml-40">
            <TbBrandNextjs />
          </li>
          <li className="text-6xl md:text-8xl ">
            <TbBrandFramerMotion/>
          </li>
          <li className="text-6xl md:text-8xl ">
            <SiJavascript />
          </li>
          <li className="text-6xl md:text-8xl ">
            <FaReact />
          </li>
          <li className="text-6xl md:text-8xl ">
            <FaNodeJs />
          </li>
          <li className="text-6xl md:text-8xl ">
            <SiExpress />
          </li>
          <li className="text-6xl md:text-8xl ">
            <FaDocker />
          </li>
        </ul>
      </div>
      <div className="w-full inline-flex flex-nowrap overflow-hidden my-12">
        <ul className="flex items-center gap-20 md:gap-40 justify-center md:justify-start infinite-scroll2">
          <li className="text-6xl md:text-8xl  ml-20 md:ml-40">
            <FaBootstrap />
          </li>
          <li className="text-6xl md:text-8xl ">
          <SiCss3 />
          </li>
          <li className="text-6xl md:text-8xl ">
            <SiTailwindcss />
          </li>
          <li className="text-6xl md:text-8xl ">
            <FaPython />
          </li>
          <li className="text-6xl md:text-8xl ">
            <FaGithubSquare />
          </li>
          <li className="text-6xl md:text-8xl ">
            <SiMongodb />
          </li>
          <li className="text-6xl md:text-8xl ">
          <FaHtml5 />
          </li>
        </ul>
        <ul
          className="flex items-center justify-center gap-20 md:gap-40 md:justify-start infinite-scroll2"
          aria-hidden="true"
        >
          <li className="text-6xl md:text-8xl  ml-20 md:ml-40">
            <FaBootstrap />
          </li>
          <li className="text-6xl md:text-8xl ">
          <SiCss3 />
          </li>
          <li className="text-6xl md:text-8xl ">
            <SiTailwindcss />
          </li>
          <li className="text-6xl md:text-8xl ">
            <FaPython />
          </li>
          <li className="text-6xl md:text-8xl ">
            <FaGithubSquare />
          </li>
          <li className="text-6xl md:text-8xl ">
            <SiMongodb />
          </li>
          <li className="text-6xl md:text-8xl ">
          <FaHtml5 />
          </li>
        </ul>
      </div>
      <div className="w-full inline-flex flex-nowrap overflow-hidden">
        <ul className="flex items-center gap-20 md:gap-40 justify-center md:justify-start delay-100 infinite-scroll3">
          <li className="text-6xl md:text-8xl  ml-20 md:ml-40">
            <PiGitMergeBold />
          </li>
          <li className="text-6xl md:text-8xl ">
            <SiSocketdotio />
          </li>
          <li className="text-6xl md:text-8xl ">
            <SiFirebase />
          </li>
          <li className="text-6xl md:text-8xl ">
            <BiLogoPostgresql />
          </li>
          <li className="text-6xl md:text-8xl ">
            <SiMysql />
          </li>
          <li className="text-6xl md:text-8xl ">
            <SiGraphql />
          </li>
          <li className="text-6xl md:text-8xl ">
            <SiRedux />
          </li>
        </ul>
        <ul
          className="flex items-center justify-center gap-20 md:gap-40 md:justify-start infinite-scroll3"
          aria-hidden="true"
        >
          <li className="text-6xl md:text-8xl  ml-20 md:ml-40">
            <PiGitMergeBold />
          </li>
          <li className="text-6xl md:text-8xl ">
            <SiSocketdotio />
          </li>
          <li className="text-6xl md:text-8xl ">
            <SiFirebase />
          </li>
          <li className="text-6xl md:text-8xl ">
            <BiLogoPostgresql />
          </li>
          <li className="text-6xl md:text-8xl ">
            <SiMysql />
          </li>
          <li className="text-6xl md:text-8xl ">
            <SiGraphql />
          </li>
          <li className="text-6xl md:text-8xl ">
            <SiRedux />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SkillsScroll;
