import LeftBanner from "./LeftBanner";
import ModelStage from "./ModelStage";

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full min-h-[calc(100vh-7rem)] pt-12 pb-20 flex flex-col gap-12 xl:flex-row items-center border-b border-white/10 font-titleFont relative"
    >
      <LeftBanner />
      <ModelStage />
    </section>
  );
};

export default Banner;
