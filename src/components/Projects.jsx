import p4 from "../assets/p4.png";
import p3 from "../assets/p3.png";
import p5 from "../assets/p5.png";
import p10 from "../assets/p10.png";
import { default as blob } from "../assets/blob.svg";
import data from "../data";
import ProjectCard from "./ui/ProjectCard";

const Projects = () => {
  return (
    <div
      id="projects"
      className="projects mx-auto flex flex-col justify-center gap-12 p-4 text-center md:items-center md:justify-between lg:max-w-7xl"
    >
      <h1 className="py-10 text-3xl font-bold text-primary md:text-4xl ">
        Projects
      </h1>
      {/* RECENT PROJECTS */}
      <ProjectCard
          title="Chess App"
          subtitle="Academic Project"
          description="Developed a Chess & Checkers Engine as part of the Software Design course, applying SOLID principles and design patterns such as Composite, Strategy, and Adapter. Built using an Onion Architecture to ensure scalability and flexibility, while implementing automated testing to guarantee reliability and maintainability."
          picture={p10}
          github="https://github.com/AAugurusa/chess-app"
          tools={data.project1}
      />

      <ProjectCard
          title="Access Denied"
          subtitle="BTR Consulting - Video Game"
          description="Contributed as a developer to Access Denied, part of the Human Shield Saga. Designed game mechanics that raised awareness of password security and multi-factor authentication by simulating real-world attack scenarios, directly training thousands of users in safe practices through interactive gameplay."
          picture={p3}
          website="https://access-denied.humanshield.com.ar/"
          tools={data.project3}
          isImageOnLeft={true}
      />

      <ProjectCard
          title="Clean Up"
          subtitle="BTR Consulting - Video Game"
          description="Developed Clean Up, an educational cybersecurity game that taught techniques such as data overwriting and degaussing to prevent unauthorized access. Designed engaging mechanics that translated complex cybersecurity concepts into interactive learning, improving knowledge retention by 60% among participants."
          picture={p4}
          website="https://clean-up.humanshield.com.ar/"
          tools={data.project4}
      />

      <ProjectCard
          title="The Rescue"
          subtitle="BTR Consulting - Video Game"
          description="Developed The Rescue, a cybersecurity game that taught players to identify unsafe files, protect personal data, and apply safe digital practices through engaging gameplay."
          picture={p5}
          website="https://the-rescue.humanshield.com.ar/"
          tools={data.project5}
          isImageOnLeft={true}
      />
      <img className="mx-auto w-1/2 md:w-1/6" src={blob} alt="blob" />
    </div>
  );
};

export default Projects;
