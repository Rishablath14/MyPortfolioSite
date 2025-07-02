import React from "react";
import { FaLaptopCode, FaSearchengin, FaHandPointUp } from "react-icons/fa";
import { SiProgress } from "react-icons/si";
import { DiJava } from "react-icons/di";
import { GiAbstract049 } from "react-icons/gi";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
  return (
    <section
      id="services"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Services" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Web Development"
          des="I can make attractive and eye catching SEO Optimized Website with user interactive nature and backend connectivity that helps to strength your digital presence like your Business, Services or about yourself."
          icon={<FaLaptopCode />}
        />
        <Card
          title="SEO"
          des="I can analyze and make result oriented audit report which helps to increase website traffic and get optimized according to the search engine algorithm to get higher rank in SERP."
          icon={<FaSearchengin />}
        />
        <Card
          title="Pay Per Click"
          des=" I can create goal oriented PPC ads that helps to grow your business and increase your website traffic, sales and leads with the minimum CPC, high CTR and low ACOS."
          icon={<FaHandPointUp />}
        />
        <Card
          title="SMM"
          des="I can help you in growing your business or services online using social media by making attractive creatives with high intent user interaction planning and knowledge of ruuning goal achieving ads. "
          icon={<SiProgress />}
        />
        <Card
          title="Java Programmer"
          des="I can make Web app using java and its frameworks like JDBC,JSP and Servelet and also Connect to database using MySQL. You can also hire me for teaching Full Stack Java programming."
          icon={<DiJava />}
        />
        <Card
          title="Graphic Designing"
          des="As a digital marketer I had developed my skills in creative designing too and I can make purpose driven and engaging design for any kind of situations, campaigns and business requirements."
          icon={<GiAbstract049 />}
        />
      </div>
    </section>
  );
};

export default Features;
