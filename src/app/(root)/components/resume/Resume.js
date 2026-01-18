"use client"
import React, {  useState } from 'react'
import Title from '../layouts/Title';
import Education from './Education';
import Skills from './Skills';

const Resume = () => {
   const [educationData, setEducationData] = useState(true);
   const [skillData, setSkillData] = useState(false);
  return (
    <section id="resume" className="w-full py-20 border-b border-white/10 relative overflow-hidden">
      <div className="pointer-events-none absolute right-[-8%] top-6 text-[5rem] md:text-[8rem] font-titleFont font-bold text-white/5 tracking-[0.2em]">
        Resume
      </div>
      <div className="flex justify-center items-center text-center">
        <Title title="Education, Experience & Skills" des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
          <li
            onClick={() =>
              setEducationData(true) &
              setSkillData(false) 
            }
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Education
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(true)
            }
            className={`${
              skillData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Professional Skills
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}
 
    </section>
  );
}

export default Resume
