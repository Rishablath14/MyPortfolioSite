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
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2006 - 2024</p>
          <h2 className="text-3xl xl:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-2 lgl:mt-6 w-full h-[1100px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
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
            des="This 12 years of journey taught me many things from a kid to a sensible, knowledgable and responsible kind person with a dream."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4 w-1/2 mb-2 lgl:mb-6">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2024</p>
          <h2 className="text-3xl xl:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="min-h-[350px] w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <JobResumeCard
            title="Associate Software Developer"
            subTitle="Magure Inc. - ( November 2024 - Present )"
            result="Raipur, Chhattisgarh"
            des="In my current role as a Associate Software Development Engineer, I am driving key innovations to enhance the IGNYTE platform, empowering 1000+ startups and businesses globally. My work focuses on developing robust, secure features that prioritize scalability, utilizing cutting-edge technologies like React.js, TypeScript, .NET Core, and Blazor Pages. By collaborating effectively within a fast-paced Agile environment, I’ve contributed to improving the platform’s efficiency and performance metrics while aligning technical outcomes with strategic business objectives."
          />
        </div>
        <div className="pt-6 lgl:pt-14 min-h-[350px] w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <JobResumeCard
            title="Website Developer"
            subTitle="DMAP INFOTECH - ( July 2023 - December 2023 )"
            result="INDORE"
            des="At Dmap Infotech, I excelled as a Website Developer, creating interactive, responsive web applications using Next.js, React.js, Node.js, and MongoDB. My role involved optimizing performance, implementing secure authentication, and integrating Restful APIs. By leveraging Tailwind CSS and Shadcn UI, I delivered visually appealing and device-responsive designs. Collaborating with cross-functional teams, I enhanced user engagement and aligned projects with business goals. One highlight was developing advanced animations and interactive elements, resulting in dynamic user experiences."
          />
        </div>
        <div className="pt-6 lgl:pt-14 min-h-[350px] w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <JobResumeCard
            title="Digital Marketing Intern"
            subTitle="DIGITAL MIND WEB SOLUTION - ( June 2022 - January 2023 )"
            result="INDORE"
            des="At Digital Mind Web Solutions, I interned in digital marketing, supporting SEO optimization, content creation, social media management, and email marketing. Collaborating with design and development teams, I integrated marketing strategies into digital platforms. I analyzed website performance data and user behavior, implementing targeted SEO strategies that boosted organic traffic. This role enhanced my digital marketing knowledge and allowed me to apply my technical skills to drive measurable results in a dynamic environment."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
