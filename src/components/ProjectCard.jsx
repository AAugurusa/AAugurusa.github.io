import React, { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

const LinkIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden>
    <path d="M3.9 12a5 5 0 0 1 5-5h3v2h-3a3 3 0 0 0 0 6h3v2h-3a5 5 0 0 1-5-5zm6.1 1h4v-2h-4v2zm5-6h-3v2h3a3 3 0 1 1 0 6h-3v2h3a5 5 0 1 0 0-10z" />
  </svg>
);

const ArrowIcon = ({ expanded }) => (
  <svg
    viewBox="0 0 24 24"
    className={`h-6 w-6 stroke-white transition-transform duration-300 ${
      expanded ? "rotate-180" : "rotate-0"
    }`}
    aria-hidden
  >
    <path
      d="M7 10l5 5 5-5"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ProjectOverview = ({
  title,
  subtitle,
  icon,
  image,
  largeImage,
  summary,
  fullDescription,
  learnings,
  tools,
  projectLink,
}) => {
  const [expanded, setExpanded] = useState(false);
  const { t } = useLanguage();

  return (
    <article className="overflow-hidden rounded-2xl border border-sky-400/40 bg-black/80 shadow-[0_0_28px_rgba(56,189,248,0.35)] transition-transform transition-shadow duration-300 ease-in-out hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_0_28px_rgba(56,189,248,0.4)]">
      <div className="p-6 sm:p-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div className="flex min-w-0 flex-1 items-start gap-4 sm:gap-5">
            <img
              src={icon || image}
              alt={`${title} icon`}
              className="h-32 w-32 flex-shrink-0 rounded-lg object-cover"
            />

            <div className="min-w-0 flex-1">
              <h2 className="truncate text-2xl font-bold uppercase tracking-[0.07em] text-white">
                {title}
              </h2>
              <p className="mt-1 text-sm uppercase tracking-[0.14em] text-sky-300">
                {subtitle}
              </p>

              <p className="mt-3 text-base leading-relaxed text-slate-100/90 sm:text-lg">{summary}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-md border border-sky-300/50 bg-sky-900/20 px-2.5 py-1 text-[11px] uppercase tracking-[0.12em] text-sky-100"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 md:pl-3">
            {projectLink && (
              <a
                href={projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-slate-800/90 p-3 transition-colors hover:bg-slate-700"
                aria-label={`${t("projectCard.aria.openProjectLink")} ${title}`}
              >
                <LinkIcon />
              </a>
            )}

            <button
              type="button"
              onClick={() => setExpanded((current) => !current)}
              className="inline-flex items-center justify-center rounded-md bg-slate-800/90 p-3 transition-colors hover:bg-slate-700"
              aria-expanded={expanded}
              aria-label={`${expanded ? t("projectCard.aria.collapseDetails") : t("projectCard.aria.expandDetails")} ${title}`}
            >
              <ArrowIcon expanded={expanded} />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`grid overflow-hidden transition-all duration-500 ease-out ${
          expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0">
          <div className="px-6 sm:px-8">
            <img
              src={largeImage || image}
              alt={`${title} screenshot`}
              className="mx-auto h-64 w-full rounded-xl object-cover sm:h-72 md:h-[28rem]"
            />
          </div>

          <div className="flex flex-col gap-4 p-6 sm:p-8">
            <div>
              <p className="text-sm uppercase tracking-[0.14em] text-sky-300 sm:text-base">
                {t("projectCard.labels.fullOverview")}
              </p>
              <p className="mt-2 text-base leading-relaxed text-slate-100/90 sm:text-lg">
                {fullDescription}
              </p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.14em] text-sky-300 sm:text-base">
                {t("projectCard.labels.learnings")}
              </p>
              <p className="mt-2 text-base leading-relaxed text-slate-100/90 sm:text-lg">
                {learnings}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectOverview;