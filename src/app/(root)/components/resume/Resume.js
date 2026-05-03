"use client"
import React, {  useState } from 'react'
import Title from '../layouts/Title';
import Education from './Education';
import Skills from './Skills';

const Resume = () => {
   const [educationData, setEducationData] = useState(true);
   const [skillData, setSkillData] = useState(false);
  return (
    <section id="resume" className="performance-section w-full py-20 border-b border-white/10 relative overflow-hidden">
      <div className="section-watermark pointer-events-none absolute right-[-8%] top-6 text-[5rem] md:text-[8rem] font-titleFont font-bold text-white/5 tracking-[0.2em]">
        Resume
      </div>
      <div className="flex justify-center items-center text-center">
        <Title title="Education, Experience & Skills" des="My Resume" />
      </div>
      <div className="resume-tab-shell">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-3" role="tablist" aria-label="Resume sections">
          <button
            type="button"
            role="tab"
            aria-selected={educationData}
            onClick={() =>
              setEducationData(true) &
              setSkillData(false) 
            }
            className={`${
              educationData
                ? "resume-tab-active"
                : ""
            } resume-tab`}
          >
            Education
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={skillData}
            onClick={() =>
              setEducationData(false) &
              setSkillData(true)
            }
            className={`${
              skillData ? "resume-tab-active" : ""
            } resume-tab`}
          >
            Professional Skills
          </button>
        </div>
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}
 
    </section>
  );
}

export default Resume
