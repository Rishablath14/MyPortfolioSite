import React from 'react'

const Title = ({title, des}) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-14">
      <p className="text-xs uppercase font-medium text-designColor tracking-[0.4em]">
       {title}
      </p>
      <h2 className="text-4xl md:text-6xl text-gray-100 font-bold capitalize gradient-text">
        {des}
      </h2>
    </div>
  );
}

export default Title
