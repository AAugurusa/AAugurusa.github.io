import React from "react";

const ProjectOverviewReadOnly = ({ title, image, summary, tools }) => (
  <article className="overflow-hidden rounded-2xl border border-sky-400/40 bg-black/80 shadow-[0_0_28px_rgba(56,189,248,0.35)] transition-transform transition-shadow duration-300 ease-in-out hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_0_28px_rgba(56,189,248,0.4)]">
    <div className="p-6 sm:p-8">
      <div className="flex min-w-0 items-start gap-4 sm:gap-5">
        <img
          src={image}
          alt={`${title} icon`}
          className="h-32 w-32 flex-shrink-0 rounded-lg object-cover"
        />

        <div className="min-w-0 flex-1">
          <h2 className="truncate text-2xl font-bold uppercase tracking-[0.07em] text-white">
            {title}
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-slate-100/90">{summary}</p>

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
    </div>
  </article>
);

export default ProjectOverviewReadOnly;