"use client";

import { Html, useProgress } from "@react-three/drei";

function HumanLoader() {
  const { progress } = useProgress();
  const value = Math.min(100, Math.round(progress));

  return (
    <Html center>
      <div className="model-loader" role="status" aria-live="polite">
        <div className="model-loader-ring" />
        <span>{value}%</span>
      </div>
    </Html>
  );
}

export default HumanLoader;
