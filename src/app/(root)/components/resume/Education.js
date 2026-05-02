"use client";
import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import JobResumeCard from "./JobResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-16"
    >
      {/* part one */}
      <div className="resume-column">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2006 - 2024</p>
          <h2 className="text-3xl xl:text-4xl font-bold">Education</h2>
        </div>
        <div className="resume-timeline">
          <ResumeCard
            title="B.tech Computer Science"
            subTitle="SAGE University, Indore ( 2020 - 2024 )"
            result="8.63/10"
            des="The training provided by University helps me to develop my Technical Skills, Team work spirit and Creative thinking.  "
          />
          <ResumeCard
            title="Higher Secondary School"
            subTitle="Holy Cross Kapa ( 2018 - 2020 )"
            result="7.3/10"
            des="Higher Secondary School helps me in developing my Gaming Skills, communication skills, Management Skills and leadership skills."
          />
          <ResumeCard
            title="Primary to Secondary School"
            subTitle="Shri Balaji Vidya Mandir ( 2006 - 2018 )"
            result="8.5/10"
            des="This 12-year journey helped me grow into a responsible learner with strong communication, discipline, and curiosity."
          />
        </div>
      </div>
      {/* part Two */}

      <div className="resume-column">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2026</p>
          <h2 className="text-3xl xl:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="resume-timeline">
          <JobResumeCard
            title="Software Developer"
            subTitle="Magure Inc. - ( November 2024 - Present )"
            result="Raipur, Chhattisgarh"
            des="At Magure, I work as a Full Stack Engineer, delivering scalable web and mobile solutions across frontend and backend systems. From building high-performance interfaces to developing backend services in .NET and optimizing production deployments, I take ownership of features end-to-end. I thrive in fast-paced Agile environments, collaborating closely with teams to ship reliable, user-focused products that align with business goals. My focus is on writing clean, efficient code and continuously evolving as a developer who builds with both speed and purpose."
          />
          <JobResumeCard
            title="Website Developer"
            subTitle="DMAP INFOTECH - ( July 2023 - December 2023 )"
            result="Indore, Madhya Pradesh"
            des="At Dmap Infotech, I excelled as a Website Developer, creating interactive, responsive web applications using Next.js, React.js, Node.js, and MongoDB. My role involved optimizing performance, implementing secure authentication, and integrating Restful APIs. By leveraging Tailwind CSS and Shadcn UI, I delivered visually appealing and device-responsive designs. Collaborating with cross-functional teams, I enhanced user engagement and aligned projects with business goals. One highlight was developing advanced animations and interactive elements, resulting in dynamic user experiences."
          />
          <JobResumeCard
            title="Digital Marketing Intern"
            subTitle="DIGITAL MIND WEB SOLUTION - ( June 2022 - January 2023 )"
            result="Indore, Madhya Pradesh"
            des="At Digital Mind Web Solutions, I interned in digital marketing, supporting SEO optimization, content creation, social media management, and email marketing. Collaborating with design and development teams, I integrated marketing strategies into digital platforms. I analyzed website performance data and user behavior, implementing targeted SEO strategies that boosted organic traffic. This role enhanced my digital marketing knowledge and allowed me to apply my technical skills to drive measurable results in a dynamic environment."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
