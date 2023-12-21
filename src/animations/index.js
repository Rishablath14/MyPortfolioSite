import gsap from "gsap";

const tl = gsap.timeline();

// Preloader Animation
export const preLoaderAnim = () => {
  tl.to(
      ".preloader",
      {
        delay:2,
        display:"none",
        ease: "Power3.easeOut",
      })
};
