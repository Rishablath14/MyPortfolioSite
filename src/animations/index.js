import gsap from "gsap";

const tl = gsap.timeline();

// Preloader Animation
export const preLoaderAnim = () => {
  tl.to(
      ".preloader",
      {
        duration: 0.5,
        display:"none",
        ease: "Power3.easeOut",
      })
};
