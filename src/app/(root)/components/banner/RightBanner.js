"use client";
import React from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import HumanLoader from "../HumanLoader";
import Person from "../Person3d";
import { FiChevronDown } from "react-icons/fi";

const RightBanner = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [selectedAnimation, setSelectedAnimation] = useState("rest");

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1280);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full xl:w-1/2 h-[520px] md:h-[620px] flex justify-center items-center relative">
      <div className="glass-card w-full h-full rounded-3xl overflow-hidden border border-white/10 relative">
        <Canvas className="h-full w-full">
          {isDesktop && (
            <OrbitControls
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              enablePan={false}
            />
          )}
          <Suspense fallback={<HumanLoader />}>
            <Person animation={selectedAnimation} />
          </Suspense>
          <ambientLight intensity={1} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        </Canvas>
        <div className="absolute top-6 right-6">
          <div className="relative">
            <select
              className="glass-select min-w-[130px]"
              value={selectedAnimation}
              onChange={(e) => setSelectedAnimation(e.target.value)}
            >
              <option value="rest">Rest</option>
              <option value="wait">Wait</option>
              <option value="backflip">Backflip</option>
            </select>
            <FiChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/80 text-sm" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBanner;
