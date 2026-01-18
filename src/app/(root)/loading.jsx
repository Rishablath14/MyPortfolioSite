import React from "react";

const loading = () => {
  return (
    <div className="fixed inset-0 z-[99999999999] flex items-center justify-center bg-[#0b0f12]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,180,87,0.18),transparent_55%),radial-gradient(circle_at_20%_80%,rgba(87,230,200,0.14),transparent_60%)]" />
      <div className="relative z-10 text-center">
        <div className="text-xs uppercase tracking-[0.6em] text-white/60">
          Portfolio
        </div>
        <div className="text-4xl md:text-5xl font-titleFont font-bold gradient-text">
          Rishab Lath
        </div>
        <div className="mx-auto mt-6 h-[2px] w-48 bg-gradient-to-r from-[#ff6a3d] via-[#ffb457] to-[#57e6c8]" />
      </div>
    </div>
  );
};

export default loading;
