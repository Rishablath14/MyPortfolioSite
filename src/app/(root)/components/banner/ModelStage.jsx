"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const RightBanner = dynamic(() => import("./RightBanner"), {
  ssr: false,
  loading: () => <ModelPoster />,
});

const ModelPoster = () => (
  <div className="w-full relative">
    <div className="model-stage model-stage-poster" aria-label="Loading 3D portfolio model">
      <div className="model-halo" aria-hidden="true" />
      <div className="poster-avatar" aria-hidden="true">
        <span />
      </div>
      <div className="poster-lines" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    </div>
  </div>
);

const ModelStage = () => {
  const ref = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (shouldLoad) return undefined;

    const node = ref.current;
    const load = () => setShouldLoad(true);
    const idleId =
      "requestIdleCallback" in window
        ? window.requestIdleCallback(load, { timeout: 1600 })
        : window.setTimeout(load, 900);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) load();
      },
      { rootMargin: "220px" },
    );

    if (node) observer.observe(node);

    return () => {
      observer.disconnect();
      if ("cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      } else {
        window.clearTimeout(idleId);
      }
    };
  }, [shouldLoad]);

  return (
    <div ref={ref} className="w-full xl:w-1/2 relative">
      {shouldLoad ? <RightBanner /> : <ModelPoster />}
    </div>
  );
};

export default ModelStage;
