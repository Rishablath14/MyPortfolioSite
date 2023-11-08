import gsap from "gsap";

const tl = gsap.timeline();

// Preloader Animation
export const preLoaderAnim = () => {
  tl.to(".texts-container", {
      duration: 0,
      opacity: 1,
      ease: "Power3.easeOut",
    })
    .from(".texts-container span", {
      duration: 0.7,
      delay: 1,
      opacity:0,
      scale:0.4,
      y: -70,
      skewY: 10,
      stagger: 0.4,
      ease: "Power3.easeOut",
    })
    .to(".texts-container span", {
      duration: 0.3,
      y: 70,
      scale:0.4,
      opacity:0,
      skewY: -20,
      stagger: 0.2,
      ease: "Power3.easeOut",
    })
    .to(
      ".preloader",
      {
        duration: 0.5,
        height: "0vh",
        ease: "Power3.easeOut",
      })
    .to(".preloader", {
      duration: 0,
      display: "none"
    })
};
