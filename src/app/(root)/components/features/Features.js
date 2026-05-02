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
      <div className="services-orbit services-orbit-one" aria-hidden="true" />
      <div className="services-orbit services-orbit-two" aria-hidden="true" />
      <Reveal>
        <Title title="Services" des="What I Do" />
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Reveal delay={0.05}>
          <Card
            title="Web Development"
            des="High-performance websites and applications with clean architecture, accessible interfaces, strong Core Web Vitals, and backend integrations that support real business workflows."
            icon={<FaLaptopCode />}
          />
        </Reveal>
        <Reveal delay={0.1}>
          <Card
            title="SEO + SMM"
            des="Technical SEO audits, semantic content structure, metadata strategy, and campaign-ready pages designed to improve crawlability, organic visibility, and conversion quality."
            icon={<FaSearchengin />}
          />
        </Reveal>
        <Reveal delay={0.15}>
          <Card
            title="Pay Per Click"
            des="Landing pages and campaign funnels built around clear intent, fast load times, persuasive copy, and measurable lead-generation goals."
            icon={<FaHandPointUp />}
          />
        </Reveal>
        <Reveal delay={0.2}>
          <Card
            title="Mobile App Services"
            des="Responsive product experiences with clear flows, polished interaction states, and device-specific layouts that feel natural across mobile, tablet, and desktop."
            icon={<FaMobileAlt />}
          />
        </Reveal>
        <Reveal delay={0.25}>
          <Card
            title="Java Programmer"
            des="Java and backend fundamentals across JDBC, JSP, Servlets, REST APIs, database design, and full-stack teaching for practical software development."
            icon={<DiJava />}
          />
        </Reveal>
        <Reveal delay={0.3}>
          <Card
            title="Graphic Designing"
            des="Purpose-led visuals for product launches, campaigns, and brand communication, aligned with digital marketing goals instead of decoration alone."
            icon={<GiAbstract049 />}
          />
        </Reveal>
      </div>
    </section>
  );
};

export default Features;
