import { default as Hurairah } from "../assets/hurairah.svg";
import p4 from "../assets/p4.png";
import p3 from "../assets/p3.png";
import p5 from "../assets/p5.png";
import p6 from "../assets/p6.png";
import p10 from "../assets/p10.png";
import MiniProjectCard from "./ui/MiniProjectCard";
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
        subtitle="Academic Proyect"
        description="Chess & Checkers Engine is a JVM-based project developed for the Software Design course. The project focused on learning design patterns through the implementation of chess and its many variants, as well as the checkers game, emphasizing flexibility, clean architecture, and automated testing."
        picture={p10}
        github="https://github.com/AAugurusa/chess-app"
        tools={data.project1}
      />
      <ProjectCard
        title="Access Denied"
        subtitle="BTR Consulting - Video Game"
        description="Developer of the video game Access Denied, part of the Human Shield Saga, designed to raise awareness about the growing theft of personal information and passwords, teaching players the importance of strong passwords and multi-factor authentication to prevent attacks."
        picture={p3}
        website="https://access-denied.humanshield.com.ar/"
        tools={data.project3}
        isImageOnLeft={true}
      />
      <ProjectCard
        title="Clean up"
        subtitle="BTR Consulting - Video Game"
        description="Developer of the video game Clean Up, part of the Human Shield Saga, designed to teach techniques such as data overwriting and degaussing to prevent unauthorized access by hackers."
        picture={p4}
        website="https://clean-up.humanshield.com.ar/"
        tools={data.project4}
      />
      <ProjectCard
        title="The Rescue"
        subtitle="BTR Consulting - Video Game"
        description="Developer of the video game The Rescue, part of the Human Shield Saga, designed to teach players how to identify and remove unsafe files, recognize safe data, and protect their personal information."
        picture={p5}
        website="https://the-rescue.humanshield.com.ar/"
        tools={data.project5}
        isImageOnLeft={true}
      />
      {/* OTHER PROJECTS*/}
      {/*<div className="grid grid-cols-1 gap-8 py-2 md:grid-cols-2 lg:grid-cols-4">*/}
      {/*  /!* PROJECT CARD *!/*/}
      {/*  <MiniProjectCard*/}
      {/*    github="https://github.com/Yomna-J/public_transport_app_Flutter"*/}
      {/*    picture="https://github.com/Yomna-J/public_transport_app_Flutter/raw/main/ui.jpg"*/}
      {/*    title="Public Transport Application - UI"*/}
      {/*    description="Mobile application that allows users to check available transports and buy*/}
      {/*    tickets"*/}
      {/*  >*/}
      {/*    {data.card1.map((tool) => {*/}
      {/*      return <img key={tool.id} alt={tool.alt} src={tool.img} />;*/}
      {/*    })}*/}
      {/*  </MiniProjectCard>*/}
      {/*  <MiniProjectCard*/}
      {/*    github="https://github.com/Yomna-J/habits_tracking_app_Flutter"*/}
      {/*    picture="https://github.com/Yomna-J/habits_tracking_app_Flutter/raw/main/ui.jpg"*/}
      {/*    title="Habits Tracking App - UI"*/}
      {/*    description="Mobile application that shows the user's habits and activities"*/}
      {/*  >*/}
      {/*    {data.card2.map((tool) => {*/}
      {/*      return <img key={tool.id} alt={tool.alt} src={tool.img} />;*/}
      {/*    })}*/}
      {/*  </MiniProjectCard>*/}
      {/*  <MiniProjectCard*/}
      {/*    github="https://github.com/Yomna-J/YoumnaJaza-SWE322"*/}
      {/*    website="https://yomna-j.github.io/YoumnaJaza-CIS201/"*/}
      {/*    picture={p3}*/}
      {/*    title="Basic Portfolio - UI"*/}
      {/*    description="A simple portfolio that shows skills and certificates"*/}
      {/*  >*/}
      {/*    {data.card3.map((tool) => {*/}
      {/*      return <img key={tool.id} alt={tool.alt} src={tool.img} />;*/}
      {/*    })}*/}
      {/*  </MiniProjectCard>*/}
      {/*  <MiniProjectCard*/}
      {/*    github="https://github.com/Yomna-J/YoumnaJaza-SWE322"*/}
      {/*    picture={p4}*/}
      {/*    title="Fit Gym"*/}
      {/*    description="A website that allows users to create an account to view and register in sport courses"*/}
      {/*  >*/}
      {/*    {data.card4.map((tool) => {*/}
      {/*      return <img key={tool.id} alt={tool.alt} src={tool.img} />;*/}
      {/*    })}*/}
      {/*  </MiniProjectCard>*/}
      {/*</div>*/}
      <img className="mx-auto w-1/2 md:w-1/6" src={blob} alt="blob" />
    </div>
  );
};

export default Projects;
