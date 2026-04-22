import React from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import ProjectOverview from "../components/ProjectCard";
import p_accessdenied from "../assets/projects/p_accessdenied.png";
import p_cleanup from "../assets/projects/p_cleanup.png";
import p_therescue from "../assets/projects/p_therescue.png";
import icon_accessdenied2 from "../assets/icons/Icon_accessdenied2.png";
import icon_cleanup from "../assets/icons/Icon_cleanup.png";
import icon_therescue from "../assets/icons/Icon_therescue.png";

const projectImages = {
  p_accessdenied: p_accessdenied,
  p_cleanup: p_cleanup,
  p_therescue: p_therescue,
};

const projectIcons = {
  icon_accessdenied2: icon_accessdenied2,
  icon_cleanup: icon_cleanup,
  icon_therescue: icon_therescue,
};


const Start = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const projects = t("projectsData.items");
  const projectList = Array.isArray(projects) ? projects : [];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050814] px-6 py-10 text-white sm:px-10">
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1728] via-[#050814] to-[#02030a]" />
        <div className="absolute -left-10 top-10 h-32 w-56 rounded-3xl bg-sky-900/40 blur-3xl" />
        <div className="absolute left-12 top-40 h-40 w-64 rounded-3xl bg-sky-800/30 blur-3xl" />
        <div className="absolute right-10 top-16 h-40 w-72 rounded-3xl bg-sky-900/35 blur-3xl" />
        <div className="absolute right-24 bottom-12 h-32 w-60 rounded-3xl bg-sky-700/30 blur-3xl" />
      </div>

      <div className="absolute inset-0 -z-10 bg-sky-950/40 mix-blend-screen" />

      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <div className="shot-up flex flex-wrap items-center justify-between gap-4">
          <h1 className="font-impact text-4xl uppercase tracking-[0.12em] text-white drop-shadow-[0_0_25px_rgba(56,189,248,0.45)] sm:text-5xl">
            {t("projects.pageTitle")}
          </h1>

          <button
            type="button"
            onClick={() => navigate("/")}
            className="group inline-flex items-center gap-2 rounded-full border border-sky-300/50 bg-slate-900/70 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.14em] text-sky-100 transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-200 hover:bg-sky-900/40 hover:text-white hover:shadow-[0_0_18px_rgba(56,189,248,0.4)] sm:text-base"
          >
            <span aria-hidden className="text-base leading-none transition-transform duration-200 group-hover:-translate-x-0.5">←</span>
            <span>{t("projects.back")}</span>
          </button>
        </div>

        <div className="flex flex-col gap-8">
          {projectList.map((project, index) => (
            <div
              key={project.id}
              className="shot-up-stagger"
              style={{ animationDelay: `${320 + index * 220}ms` }}
            >
              <ProjectOverview
                title={project.title}
                subtitle={project.company}
                image={projectImages[project.imageKey]}
                largeImage={projectImages[project.imageKey]}
                icon={projectIcons[project.iconKey]}
                summary={project.description}
                fullDescription={project.fullDescription}
                learnings={project.learnings}
                tools={project.tools}
                projectLink={project.projectUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Start;
