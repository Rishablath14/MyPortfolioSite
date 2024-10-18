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
            <TbBrandNextjs className="imgicon1"/>
          </li>
          <li className="text-6xl md:text-8xl ">
            <TbBrandFramerMotion className="imgicon1"/>
          </li>
          <li className="text-6xl md:text-8xl ">
            <SiJavascript className="imgicon1"/>
          </li>
          <li className="text-6xl md:text-8xl ">
            <FaReact className="imgicon1"/>
          </li>
          <li className="text-6xl md:text-8xl ">
            <FaNodeJs className="imgicon1"/>
          </li>
          <li className="text-6xl md:text-8xl ">
            <SiExpress className="imgicon1"/>
          </li>
          <li className="text-6xl md:text-8xl ">
            <FaDocker className="imgicon1"/>
          </li>
        </ul>
        <ul
          className="flex items-center justify-center gap-20 md:gap-40 md:justify-start infinite-scroll"
          aria-hidden="true"
        >
          <li className="text-6xl md:text-8xl  ml-20 md:ml-40">
            <TbBrandNextjs  className="imgicon1"/>
          </li>
          <li className="text-6xl md:text-8xl ">
            <TbBrandFramerMotion className="imgicon1"/>
          </li>
          <li className="text-6xl md:text-8xl ">
            <SiJavascript  className="imgicon1"/>
          </li>
          <li className="text-6xl md:text-8xl ">
            <FaReact  className="imgicon1"/>
          </li>
          <li className="text-6xl md:text-8xl ">
            <FaNodeJs  className="imgicon1"/>
          </li>
          <li className="text-6xl md:text-8xl ">
            <SiExpress  className="imgicon1"/>
          </li>
          <li className="text-6xl md:text-8xl ">
            <FaDocker  className="imgicon1"/>
          </li>
        </ul>
      </div>
      <div className="w-full inline-flex flex-nowrap overflow-hidden my-12">
        <ul className="flex items-center gap-20 md:gap-40 justify-center md:justify-start infinite-scroll2">
          <li className="text-6xl md:text-8xl  ml-20 md:ml-40">
            <FaBootstrap  className="imgicon1"/>
          </li>
          <li className="text-6xl md:text-8xl ">
          <SiCss3  className="imgicon1"/>
          </li>
          <li className="text-6xl md:text-8xl ">
            <SiTailwindcss  className="imgicon1"/>
          </li>
          <li className="text-6xl md:text-8xl ">
            <FaPython  className="imgicon1"/>
          </li>
          <li className="text-6xl md:text-8xl ">
            <FaGithubSquare  className="imgicon1"/>
          </li>
          <li className="text-6xl md:text-8xl ">
            <SiMongodb  className="imgicon1"/>
          </li>
          <li className="text-6xl md:text-8xl ">
          <FaHtml5  className="imgicon1"/>
          </li>
        </ul>
        <ul
          className="flex items-center justify-center gap-20 md:gap-40 md:justify-start infinite-scroll2"
          aria-hidden="true"
        >
          <li className="text-6xl md:text-8xl  ml-20 md:ml-40">
            <FaBootstrap  className="imgicon1"/>
          </li>
          <li className="text-6xl md:text-8xl ">
          <SiCss3  className="imgicon1"/>
          </li>
          <li className="text-6xl md:text-8xl ">
            <SiTailwindcss  className="imgicon1"/>
          </li>
          <li className="text-6xl md:text-8xl ">
            <FaPython  className="imgicon1"/>
          </li>
          <li className="text-6xl md:text-8xl ">
            <FaGithubSquare  className="imgicon1"/>
          </li>
          <li className="text-6xl md:text-8xl ">
            <SiMongodb  className="imgicon1"/>
          </li>
          <li className="text-6xl md:text-8xl ">
          <FaHtml5  className="imgicon1"/>
          </li>
        </ul>
      </div>
      <div className="w-full inline-flex flex-nowrap overflow-hidden">
        <ul className="flex items-center gap-20 md:gap-40 justify-center md:justify-start delay-100 infinite-scroll3">
          <li className="text-6xl md:text-8xl  ml-20 md:ml-40">
            <PiGitMergeBold  className="imgicon1"/>
          </li>
          <li className="text-6xl md:text-8xl ">
            <SiSocketdotio  className="imgicon1"/>
          </li>
          <li className="text-6xl md:text-8xl ">
            <SiFirebase  className="imgicon1"/>
          </li>
          <li className="text-6xl md:text-8xl ">
            <BiLogoPostgresql  className="imgicon1"/>
          </li>
          <li className="text-6xl md:text-8xl ">
            <SiMysql  className="imgicon1"/>
          </li>
          <li className="text-6xl md:text-8xl ">
            <SiGraphql  className="imgicon1"/>
          </li>
          <li className="text-6xl md:text-8xl ">
            <SiRedux  className="imgicon1"/>
          </li>
        </ul>
        <ul
          className="flex items-center justify-center gap-20 md:gap-40 md:justify-start infinite-scroll3"
          aria-hidden="true"
        >
          <li className="text-6xl md:text-8xl  ml-20 md:ml-40">
            <PiGitMergeBold  className="imgicon1"/>
          </li>
          <li className="text-6xl md:text-8xl ">
            <SiSocketdotio  className="imgicon1"/>
          </li>
          <li className="text-6xl md:text-8xl ">
            <SiFirebase  className="imgicon1"/>
          </li>
          <li className="text-6xl md:text-8xl ">
            <BiLogoPostgresql  className="imgicon1"/>
          </li>
          <li className="text-6xl md:text-8xl ">
            <SiMysql  className="imgicon1"/>
          </li>
          <li className="text-6xl md:text-8xl ">
            <SiGraphql  className="imgicon1"/>
          </li>
          <li className="text-6xl md:text-8xl ">
            <SiRedux  className="imgicon1"/>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SkillsScroll;
