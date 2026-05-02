"use client";
import React, { memo, useRef } from "react";
import Title from "../layouts/Title";
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix,
  projectSeven,
  projectEight,
} from "../../../assets/index";
import ProjectsCard from "./ProjectsCard";
import Reveal from "../motion/Reveal";
import { motion, useScroll, useTransform } from "framer-motion";

const Projects = memo(() => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["12%", "-18%"]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="w-full py-20 border-b border-white/10 relative overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute left-[-6%] top-6 text-[5rem] md:text-[8rem] font-titleFont font-bold text-white/5 tracking-[0.18em]"
      >
        Works
      </motion.div>
      <div className="flex justify-center items-center text-center">
        <Reveal>
          <Title
            title="Selected builds with product context"
            des="My Projects"
          />
        </Reveal>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 xl:gap-14">
        <Reveal delay={0.05}>
          <ProjectsCard
            title="RLexicon – Multi-Tenant Blog SaaS Platform"
            des="A scalable publishing platform for tenant-based content operations, built around secure roles, rich editing, subscriptions, and search-friendly server-rendered pages."
            outcome="SaaS architecture, subscriptions, and editorial workflow"
            src={projectFive}
            link={"https://rlexicon.vercel.app"}
            stack={["Next.js", "TypeScript", "Prisma", "Supabase", "Stripe"]}
          />
        </Reveal>
        <Reveal delay={0.1}>
          <ProjectsCard
            title="Bru Speciality Chemicals Website"
            des="A brand and product website for an aroma chemicals manufacturer, structured to communicate expertise, product trust, and discoverability across search-led buyer journeys."
            outcome="Industrial brand presence with SEO-focused structure"
            src={projectSeven}
            link={"https://www.bruorg.com"}
            stack={["Next.js", "React", "Framer Motion", "SEO"]}
          />
        </Reveal>
        <Reveal delay={0.15}>
          <ProjectsCard
            title="Valfom Industries Website"
            des="A responsive business website for flavours, fragrances, and essential oils with clear product storytelling, performance-minded pages, and interaction design powered by GSAP."
            outcome="Responsive product storytelling for B2B discovery"
            src={projectSix}
            link={"https://www.valfom.net"}
            stack={["Vite", "HTML", "CSS", "JavaScript", "GSAP"]}
          />
        </Reveal>
        <Reveal delay={0.2}>
          <ProjectsCard
            title="Ashoka Printing Works Platform"
            des="A customer data management platform with authenticated workflows, advanced tables, filtering, pagination, and dashboard charts for operational visibility."
            outcome="Internal dashboard with data-heavy workflows"
            src={projectEight}
            link={"https://ashokaprintingworks.netlify.app/"}
            stack={["Next.js", "Tailwind", "Shadcn UI", "TanStack Table"]}
          />
        </Reveal>
        <Reveal delay={0.25}>
          <ProjectsCard
            title="LinkedIn Clone – Fullstack Web Application"
            des="A MERN social networking application covering authentication, profiles, posts, engagement flows, backend APIs, database modeling, and email notifications."
            outcome="Full-stack social product architecture"
            src={projectFour}
            link={"https://github.com/Rishablath14/Linkedin_CLone"}
            stack={["MongoDB", "Express", "React", "Node.js", "Email"]}
          />
        </Reveal>
        <Reveal delay={0.3}>
          <ProjectsCard
            title="Girls' Armour Foundation Website"
            des="An NGO website focused on clear navigation, accessible stories, donation intent, volunteer pathways, and trust-building content for a mission-led organization."
            outcome="Accessible nonprofit storytelling and conversion paths"
            src={projectThree}
            link={"https://www.girlsarmour.in"}
            stack={["Web Design", "Accessibility", "SEO", "Content UX"]}
          />
        </Reveal>
      </div>
    </section>
  );
});

Projects.displayName = "Projects";

export default Projects;
