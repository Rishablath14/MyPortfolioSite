"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useMemo, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import HumanLoader from "../HumanLoader";
import Person from "../Person3d";

const animations = [
  { label: "Rest", value: "rest" },
  { label: "Wait", value: "wait" },
  { label: "Backflip", value: "backflip" },
];

const RightBanner = () => {
  const [selectedAnimation, setSelectedAnimation] = useState("rest");
  const [isDesktop, setIsDesktop] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const syncViewport = () => {
      setIsDesktop(window.innerWidth >= 1280);
      setCompact(window.innerWidth < 640);
    };

    syncViewport();
    window.addEventListener("resize", syncViewport);
    return () => window.removeEventListener("resize", syncViewport);
  }, []);

  const camera = useMemo(
    () => ({
      position: compact ? [0, 0.12, 6.8] : [0, 0.02, 6.45],
      fov: compact ? 36 : 32,
    }),
    [compact],
  );

  return (
    <div className="w-full relative">
      <div className="model-stage" aria-label="Interactive 3D character model">
        <div className="model-halo" aria-hidden="true" />
        <Canvas
          camera={camera}
          dpr={[1, 1.45]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
          performance={{ min: 0.5 }}
        >
          {isDesktop ? (
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 3}
            />
          ) : null}
          <ambientLight intensity={1.35} />
          <directionalLight position={[4, 6, 4]} intensity={1.2} />
          <Suspense fallback={<HumanLoader />}>
            <Person animation={selectedAnimation} compact={compact} />
          </Suspense>
        </Canvas>

        <div className="model-controls">
          <label className="sr-only" htmlFor="hero-model-animation">
            Choose model animation
          </label>
          <select
            id="hero-model-animation"
            className="glass-select"
            value={selectedAnimation}
            onChange={(event) => setSelectedAnimation(event.target.value)}
          >
            {animations.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
          <FiChevronDown
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/80 text-sm"
            aria-hidden="true"
          />
        </div>

        <div className="model-caption" aria-hidden="true">
          <span>Interactive avatar</span>
          <strong>React Three Fiber</strong>
        </div>
      </div>
    </div>
  );
};

export default RightBanner;
