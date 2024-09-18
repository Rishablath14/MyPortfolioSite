"use client"
import React from 'react'
import { OrbitControls, useAnimations, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import HumanLoader from '../HumanLoader';
import Person from '../Person3d';


const RightBanner = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [selectedAnimation,setSelectedAnimation] = useState("rest");

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1280);
    };

    // Set initial value based on current width
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="w-full xl:w-1/2 h-screen flex justify-center items-center relative">
      <Canvas>
        {isDesktop && <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} enablePan={false}/>}
        <Suspense fallback={<HumanLoader />}>
          <Person animation={selectedAnimation}/>
        </Suspense>
        <ambientLight intensity={1} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      </Canvas>
      <div className="absolute top-12 right-2">
        <select className="bg-[#0000003c] w-20 h-12 top-2 left-2 border border-gray-300 text-white p-2" value={selectedAnimation} onChange={(e) => setSelectedAnimation(e.target.value)}>
        <option value="rest">
          Rest
        </option>
        <option value="wait">
          Wait
         </option> 
        <option value="backflip">
          Backflip
        </option>
        </select>
      </div>
    </div>
  );
}

export default RightBanner



