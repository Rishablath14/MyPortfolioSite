import React, { memo } from "react";
import Title from "../layouts/Title";
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix,
  projectSeven,
  projectEight,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = memo(() => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PROJECTS AND KEEP YOUR VALUABLE FEEDBACKS"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 xl:gap-14">
        <ProjectsCard
          title="RLexicon – Multi-Tenant Blog SaaS Platform"
          des="RLexicon is a scalable SaaS platform built for managing blogs and publications efficiently. Using Next.js 15, TypeScript, and Prisma, it supports 100+ tenants with secure role-based authentication via KindAuth and real-time updates. Features include a Notion-style rich text editor, seamless Stripe integration for subscriptions, and optimized performance with SSR techniques. Powered by Supabase, RLexicon delivers a responsive, SEO-friendly, and user-focused experience, making it ideal for modern blogging needs.This platform not only enhances productivity but also delivers a seamless experience for users across diverse business contexts."
          src={projectFive}
          link={"https://rlexicon.vercel.app"}
        />
        <ProjectsCard
          title="Bru Speciality Chemicals Website"
          des="I created a stunning website for BRU Speciality Chemicals, a leading manufacturer of aroma chemicals for various industries. The website showcases the company's expertise, quality, and innovation in producing a wide range of aroma chemicals. I used NEXTjs, a React framework, to build a fast, scalable, and SEO-friendly website that delivers an amazing user experience. I also added dynamic and interactive elements to the website using Framer motion, a library for animations. I followed SEO best practices, such as optimizing the site speed, structure, and content, to boost the website's ranking."
          src={projectSeven}
          link={"https://www.bruorg.com"}
        />
        <ProjectsCard
          title="Valfom Industries Website"
          des="I designed and developed this website for Valfom Industries, a leading supplier of flavours, fragrances, and essential oils. The website showcases the company's products, services, and values, and provides an engaging user experience. I used Vite js, HTML, CSS, and JS to create a fast, responsive, and modern website, and applied GSAP for eye-catching animations to enhance the visual appeal. I also implemented SEO best practices, such as writing concise meta descriptions, using relevant keywords, and creating clear headings, to increase the website's visibility and ranking on search engines."
          src={projectSix}
          link={"https://www.valfom.net"}
        />
        <ProjectsCard
          title="Ashoka Printing Works webSite"
          des="I developed a Dynamic Customer Data Management Website for Ashoka Printing Works, leveraging Next.js, TailwindCSS, Framer Motion, and Shadcn UI. This robust platform includes authentication and authorization features, ensuring secure access to customer data. I implemented advanced data handling capabilities using Tanstack Data Table, providing efficient pagination, sorting, and filtering options. To enhance performance and user experience, I utilized global state management with Context API. Additionally, I integrated dynamic charts into the dashboard, enabling them to clearly visualize their performance metrics."
          src={projectEight}
          link={"https://ashokaprintingworks.netlify.app/"}
        />
        <ProjectsCard
          title="LinkedIn Clone – Fullstack Web Application"
          des="This LinkedIn Clone is a feature-rich, fully-functional social networking platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js). Designed to emulate LinkedIn’s core functionalities, this project showcases my expertise in frontend and backend development, with added email notification capabilities to enhance user engagement. The platform offers a seamless, secure, and responsive user experience. Whether you need a dynamic social platform or a sophisticated web application, this project demonstrates my ability to deliver comprehensive and scalable solutions."
          src={projectFour}
          link={"https://linkedinclone-by-rishab-lath.up.railway.app/"}
        />
        <ProjectsCard
          title="Girls' Armour Foundation Website"
          des="This NGO website is designed and developed with accessibility and ease of use in mind, ensuring that you can effortlessly navigate through our stories, projects, and opportunities to get involved. Whether you're interested in supporting our cause, seeking help, donating money or simply learning more about the incredible journey of 'Girl's Armour Foundation,' this platform is your gateway to empowerment. As the developer behind this website, I take immense pride in contributing to the online presence of an organization dedicated to such a noble cause that empower girls and make thier life better."
          src={projectThree}
          link={"https://www.girlsarmour.in"}
        />
      </div>
    </section>
  );
});

export default Projects;
