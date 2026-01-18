"use client";
import React, { useRef } from "react";
import {
  FaLaptopCode,
  FaSearchengin,
  FaHandPointUp,
  FaMobileAlt,
} from "react-icons/fa";
import { DiJava } from "react-icons/di";
import { GiAbstract049 } from "react-icons/gi";
import Title from "../layouts/Title";
import Card from "./Card";
import Reveal from "../motion/Reveal";
import { motion, useScroll, useTransform } from "framer-motion";

const Features = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["18%", "-12%"]);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="w-full py-20 border-b border-white/10 relative overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute right-[-8%] top-[-10%] text-[6rem] md:text-[9rem] font-titleFont font-bold text-white/5 tracking-[0.2em]"
      >
        Services
      </motion.div>
      <Reveal>
        <Title title="Services" des="What I Do" />
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Reveal delay={0.05}>
          <Card
            title="Web Development"
            des="I can make attractive and eye catching SEO Optimized Website with user interactive nature and backend connectivity that helps to strength your digital presence like your Business, Services or about yourself."
            icon={<FaLaptopCode />}
          />
        </Reveal>
        <Reveal delay={0.1}>
          <Card
            title="SEO + SMM"
            des="I can analyze and make result oriented audit reports to increase organic traffic and improve SERP rankings, and also plan high intent social media campaigns with engaging creatives to grow your online presence."
            icon={<FaSearchengin />}
          />
        </Reveal>
        <Reveal delay={0.15}>
          <Card
            title="Pay Per Click"
            des=" I can create goal oriented PPC ads that helps to grow your business and increase your website traffic, sales and leads with the minimum CPC, high CTR and low ACOS."
            icon={<FaHandPointUp />}
          />
        </Reveal>
        <Reveal delay={0.2}>
          <Card
            title="Mobile App Services"
            des="I can help you plan and build user friendly mobile app experiences with clear flows, responsive UI, and performance focused implementation tailored to your business goals."
            icon={<FaMobileAlt />}
          />
        </Reveal>
        <Reveal delay={0.25}>
          <Card
            title="Java Programmer"
            des="I can make Web app using java and its frameworks like JDBC,JSP and Servelet and also Connect to database using MySQL. You can also hire me for teaching Full Stack Java programming."
            icon={<DiJava />}
          />
        </Reveal>
        <Reveal delay={0.3}>
          <Card
            title="Graphic Designing"
            des="As a digital marketer I had developed my skills in creative designing too and I can make purpose driven and engaging design for any kind of situations, campaigns and business requirements."
            icon={<GiAbstract049 />}
          />
        </Reveal>
      </div>
    </section>
  );
};

export default Features;
