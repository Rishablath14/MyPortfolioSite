"use client"
import React from 'react'
import {delay, motion} from "framer-motion"
const Preloader = () => {
  return (
    <motion.div initial={{display:"flex"}} animate={{display:"none"}} transition={{delay:1}} className='w-full h-screen fixed z-[99999999999] flex'>
      <motion.div initial={{x:0}} animate={{x:"-100%"}} transition={{duration:0.5,delay:0.5}} className='w-[50%] h-full bg-[#212428] relative flex justify-center items-center'><motion.div initial={{scale:1,x:"75%"}} animate={{scale:2,x:0}} transition={{duration:0.5}} className='text-[#ff014f] text-[6vw] font-bold'><i>Rishab</i></motion.div><motion.div initial={{scaleY:0,y:"-50%"}} animate={{scaleY:1,y:"-50%"}} transition={{duration:0.5}} className='top-[50%] absolute h-full w-[2px] bg-[#ff014f] right-0'/></motion.div>
      <motion.div initial={{x:0}} animate={{x:"100%"}} transition={{duration:0.5,delay:0.5}} className='w-[50%] h-full bg-[#212428] relative flex justify-center items-center'><motion.div initial={{scale:1,x:"-145%"}} animate={{scale:2,x:0}} transition={{duration:0.5}} className='text-[#ff014f] text-[6vw] font-bold'><i>Lath</i></motion.div><motion.div initial={{scaleY:0,y:"-50%"}} animate={{scaleY:1,y:"-50%"}} transition={{duration:0.5}} className='absolute top-[50%] h-full w-[2px] bg-red-500 left-0'/></motion.div>
    </motion.div>
  )
}

export default Preloader