import React from "react";

const ResumeCard = ({title,subTitle,result,des}) => {
  return (
    <div className="resume-timeline-item group">
      <span className="timeline-node" aria-hidden="true">
        <span></span>
      </span>
      <div className="premium-card resume-card rounded-lg p-5 md:p-6 lgl:px-8 flex flex-col justify-center gap-5">
        <div className="premium-card-line" aria-hidden="true" />
        <div className="relative z-10 flex flex-col md:flex-row justify-between gap-4 md:items-start">
          <div className="min-w-0">
            <h3 className="text-xl md:text-2xl font-semibold group-hover:text-white duration-300">
              {title}
            </h3>
            <p className="text-sm mt-2 text-white/55 group-hover:text-white/75 duration-300">
              {subTitle}
            </p>
          </div>
          <div className="shrink-0">
            <p className="result-pill px-4 py-2 rounded-lg inline-flex justify-center items-center text-sm font-medium">
              {result}
            </p>
          </div>
        </div>
        <p className="relative z-10 text-sm md:text-base font-medium text-white/58 group-hover:text-white/72 duration-300 leading-7">
          {des}
        </p>
      </div>
    </div>
  );
}

export default ResumeCard
