import React from 'react'

const Title = ({title, des}) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-14">
      <h3 className="text-xs uppercase font-medium text-designColor tracking-[0.4em]">
       {title}
      </h3>
      <h4 className="text-4xl md:text-6xl text-gray-100 font-bold capitalize gradient-text">
        {des}
      </h4>
    </div>
  );
}

export default Title
