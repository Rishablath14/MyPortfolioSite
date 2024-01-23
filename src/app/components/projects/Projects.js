import React from 'react'
import Title from '../layouts/Title'
import { projectOne,projectTwo,projectThree,projectFour,projectFive,projectSix,projectSeven } from "../../assets/index";
import ProjectsCard from './ProjectsCard'; 

const Projects = () => {
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
          title="Strike Meida Website"
          des="Welcome to the digital canvas of Strikemedia. As a developer, I proudly present this design studio's website, where every line of code is a brushstroke, and every animation is a masterpiece powered by GSAP with the fusion of code and creativity! The user-friendly interface is a testament to the coding prowess, making navigation intuitive and delightful. Beyond the visual spectacle, this website is engineered for success in the digital arena. With SEO optimization at its core, each project is strategically positioned to shine in search engine rankings, ensuring maximum visibility for the work."
          src={projectFive}
          link={"https://www.strikemedia.in"}
        />
       <ProjectsCard
          title="Oriental Detective Website"
          des="This SEO Optmized and user-friendly Detective Agency Website, serves as the digital gateway to our world of investigative expertise. The site has been designed and developed with a focus on user experience, ensuring that clients and visitors can easily navigate and access the vital information they seek. We understand the importance of trust in our line of work, which is why the website showcases our commitment to confidentiality, perfection and professionalism. Additionally, the 'Contact Us' page allows visitors to reach out with ease, enabling swift and confidential communication."
          src={projectFour}
          link={"https://www.orientaldetective.com"}
        />
       <ProjectsCard
          title="Girls' Armour Foundation Website"
          des="This NGO website is designed and developed with accessibility and ease of use in mind, ensuring that you can effortlessly navigate through our stories, projects, and opportunities to get involved. Whether you're interested in supporting our cause, seeking help, donating money or simply learning more about the incredible journey of 'Girl's Armour Foundation,' this platform is your gateway to empowerment. As the developer behind this website, I take immense pride in contributing to the online presence of an organization dedicated to such a noble cause that empower girls and make thier life better."
          src={projectThree}
          link={"https://www.girlsarmourfoundation.in"}
        />
       <ProjectsCard
          title="Ardiginet Website"
          des="This Digital Marketing Agency Website shows a powerful online presence that reflects their unwavering commitment to digital innovation. As the developer behind this website, I ensured a seamless and user-friendly design, enabling visitors to effortlessly explore a wide range of services. From comprehensive SEO strategies to data-driven social media campaigns, Ardiginet offers tailor-made solutions to meet the unique needs of each client. I take immense pride in having used my skills to contribute to Ardiginet's digital presence and their mission to empower businesses in the digital era."
          src={projectTwo}
          link={"https://www.ardiginet.com"}
        />
       <ProjectsCard
          title="Dmap Infotech Website"
          des="As a seasoned web developer and digital strategist, I had the privilege of collaborating with Dmap Infotech, a leading digital marketing agency. Together, we crafted an online presence that truly reflects their commitment to digital excellence. This dynamic platform showcases the agency's expertise in transforming businesses and organizations in the digital landscape. We understand that the future of business lies in the digital landscape, and this user-friendly and interactive website reflects our collective commitment to excellence in digital marketing and services."
          src={projectOne}
          link={"https://www.dmapinfotech.com"}
        />
        </div>
    </section>
  );
}

export default Projects
