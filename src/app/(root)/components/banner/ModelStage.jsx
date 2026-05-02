"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const RightBanner = dynamic(() => import("./RightBanner"), {
  ssr: false,
  loading: () => <ModelPoster />,
});

const ModelPoster = ({ onLoadModel, interactive = false }) => (
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
      <button type="button" className="model-load-button" onClick={onLoadModel}>
        {interactive ? "Load 3D" : "Enter 3D"}
      </button>
    </div>
  </div>
);

const ModelStage = () => {
  const ref = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [requiresInteraction, setRequiresInteraction] = useState(false);

  useEffect(() => {
    if (shouldLoad) return undefined;

    const node = ref.current;
    const memory = navigator.deviceMemory || 8;
    const cores = navigator.hardwareConcurrency || 8;
    const isSmallScreen = window.matchMedia("(max-width: 640px)").matches;
    const isLowPower = isSmallScreen || memory < 4 || cores < 4;
    const frame = window.requestAnimationFrame(() => {
      setRequiresInteraction(isLowPower);
    });
    const load = () => setShouldLoad(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isLowPower) {
          const onPointerEnter = () => load();
          node?.addEventListener("pointerenter", onPointerEnter, { once: true });
        }
      },
      { rootMargin: "220px" },
    );

    if (node) observer.observe(node);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frame);
    };
  }, [shouldLoad]);

  return (
    <div ref={ref} className="w-full xl:w-1/2 relative">
      {shouldLoad ? (
        <RightBanner />
      ) : (
        <ModelPoster
          interactive={requiresInteraction}
          onLoadModel={() => setShouldLoad(true)}
        />
      )}
    </div>
  );
};

export default ModelStage;
