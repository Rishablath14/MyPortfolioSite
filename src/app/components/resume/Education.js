"use client"
import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';
import JobResumeCard from './JobResumeCard';

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
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1100px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.tech Computer Science"
            subTitle="SAGE University, Indore(2020 - 2024)"
            result="8.75/10"
            des="The training provided by University helps me to develop my Technical Skills, Team work spirit and Creative thinking.  "
          />
          <ResumeCard
            title="Higher Secondary School"
            subTitle="Holy Cross Kapa (2018 - 2020)"
            result="7.55/10"
            des="Higher Secondary School helps me in developing my communication skills and leadship skills."
          />
          <ResumeCard
            title="Primary to Secondary School"
            subTitle="Shri Balaji Vidya Mandir (2006 - 2018)"
            result="8.5/10"
            des="This 12 years of journey taught me many things from knowledge to become a responsible and kind person."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4 w-1/2">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[400px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <JobResumeCard
            title="Digital Marketing Intern"
            subTitle="DIGITAL MIND WEB SOLUTION - ( Jun 2022 - Jan 2023 )"
            result="INDORE"
            des="I had written blog post and created Coupons store page of edureka for microadia.net webiste with maintaining the SEO part of the same. I had also created Google ads and Facebook ads Campaign of Lead generation, Website Traffic and also designed creatives of the ads for company like AvistaClinics, GlmyoHealth and Citi Credit cards."
          />
        </div>
        <div className="w-full h-[400px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <JobResumeCard
            title="Website Development"
            subTitle="FREELANCING - ( July 2023 - present )"
            result="INDORE"
            des="I have created a different sectors website like Digital Marketing Agency, NGO, Chemical Industries and more using HTML, CSS, Tailwind CSS, JavaScript, Jquery, Nextjs, Vitejs and also used Three.js, Framer Motion & GSAP animations, Swiper Effects and Slick carousel for making a dynamic and completely responsive animated webiste with backend connectivity using PHP and MySQL."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education
