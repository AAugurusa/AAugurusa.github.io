import ExperienceCard from "./ui/ExperienceCard";
import { default as btrlogo } from "../assets/btr.svg";
import { default as ualogo } from "../assets/ua.svg";
import { default as renlogo } from "../assets/ren.svg";



const Experience = () => {
  var btr = [
    "Implemented multiple Jira Service Management projects for clients, customizing workflows, forms, and boards to improve efficiency in ticket and incident management.",
    "Developed comparative templates between Jira Service Management and Jira Software, used in presentations and demos to help clients understand key functionalities and support decision-making on which solution to adopt.",
    "Configured a task tracking system in Jira Software, that generated over 200 tickets, optimizing planning, and monitoring the development of an internal project.",
    "Participated in the Red Team, producing vulnerability reports and mitigation plans for more than 10 clients.",
    "Designed and developed three educational cybersecurity games in GDevelop, training over 20,000 users in best practices through interactive experiences.",
    "Implemented gamification techniques that improved users’ understanding of key concepts by 60%.",
    "Proposed and developed two base templates to standardize menus, sound management, and credits in the games, ensuring functional and visual consistency while streamlining development tasks.",
    "Produced performance analysis reports that identified specific knowledge gaps, enabling optimization of content and teaching approaches.",
    "Managed and collaborated in the implementation of a Jira Software task tracking system, allowing for complete and structured monitoring of the development team’s work, and streamlining weekly meetings."
  ];

  var ren = [
    "Designed and developed a web platform for supporting oncology patients in an experimental meditation treatment, along with a back office for managing users, treatments, and questionnaires.",
    "Implemented gamification techniques such as achievements and personalized icons, increasing motivation and engagement for over 100 patients.",
    "Participated in the development of a Progressive Web App (PWA) that enabled push notifications and mobile access without requiring installation from app stores.",
    "Coordinated client meetings and managed the project in Jira Software integrated with GitHub, ensuring timely delivery of agreed functionalities."
  ];

  var ua = [`Bachelor of science in Software Engineering`, `CGPA of: 3.0/4.0`];

  return (
    <div
      id="experience"
      className="mx-auto flex flex-col justify-center gap-8 p-4 text-center md:items-center  md:justify-between lg:max-w-7xl"
    >
      <h1 className="py-6 text-3xl font-bold text-primary md:text-4xl ">
        Experience & Education
      </h1>

      {/* Experience Cards */}
      <ExperienceCard
        logo={btrlogo}
        name="Mozn"
        job="BTR Consulting | Semi-Senior Consultant"
        duration="Apr. 2022 - Feb. 2025"
        skills={btr}
      />

      <ExperienceCard
        logo={renlogo}
        name="Renacentia"
        job="Renacentia | Frontend Developer & Project Manager"
        duration="Mar. 2025 - Nov. 2024"
        skills={ren}
      />

      <ExperienceCard
        logo={ualogo}
        name="UA"
        job="Universidad Austral | Software Engineering"
        duration="Mar. 2019 - Oct. 2025"
        skills={ua}
      />
    </div>
  );
};

export default Experience;
