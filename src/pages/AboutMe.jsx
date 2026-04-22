import React from "react";
import { useNavigate } from "react-router-dom";
import profileImage from "../assets/profile_picture.jpg";
import { toast } from "react-toastify";
import { useLanguage } from "../contexts/LanguageContext";

const AboutMe = () => {
  const navigate = useNavigate();
  const emailAddress = "augurusaagustin@gmail.com";
  const { t } = useLanguage();

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      toast.success(t("aboutMe.toasts.emailCopied"));
    } catch {
      // Fallback: open mail client if clipboard access is blocked.
      window.location.href = `mailto:${emailAddress}`;
    }
  };

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

      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 sm:gap-10">
        <div className="shot-up flex flex-wrap items-center justify-between gap-4">
          <h1 className="font-impact text-4xl uppercase tracking-[0.12em] text-white drop-shadow-[0_0_25px_rgba(56,189,248,0.45)] sm:text-5xl">
            {t("aboutMe.pageTitle")}
          </h1>

          <button
            type="button"
            onClick={() => navigate("/")}
            className="group inline-flex items-center gap-2 rounded-full border border-sky-300/50 bg-slate-900/70 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.14em] text-sky-100 transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-200 hover:bg-sky-900/40 hover:text-white hover:shadow-[0_0_18px_rgba(56,189,248,0.4)] sm:text-base"
          >
            <span
              aria-hidden
              className="text-base leading-none transition-transform duration-200 group-hover:-translate-x-0.5"
            >
              &larr;
            </span>
            <span>{t("aboutMe.back")}</span>
          </button>
        </div>

        <section
          className="shot-up-stagger overflow-hidden rounded-2xl border border-sky-400/40 bg-black/80 p-6 shadow-[0_0_28px_rgba(56,189,248,0.35)] sm:p-8"
          style={{ animationDelay: "320ms" }}
        >
          <div className="mx-auto flex max-w-4xl flex-col gap-6 md:flex-row md:items-start md:gap-8">
            <div className="w-full max-w-[14rem] self-center bg-transparent p-3 md:-mt-1 md:max-w-[18rem] md:self-start">
              <img
                src={profileImage}
                alt="Profile"
                className="aspect-[4/5] h-auto w-full rounded-xl object-cover shadow-[0_0_22px_rgba(56,189,248,0.28)]"
              />

              <div className="mt-2 flex items-center justify-center gap-3 md:justify-start">
                <a
                  href="https://github.com/AAugurusa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-slate-800/90 p-2 transition-colors hover:bg-slate-700"
                  aria-label={t("aboutMe.social.githubAria")}
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white" aria-hidden>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/in/agustin-augurusa-167960220/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-sky-700/90 p-2 transition-colors hover:bg-sky-600"
                  aria-label={t("aboutMe.social.linkedinAria")}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-6 w-6 fill-white" aria-hidden>
                    <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340a53.63 53.63 0 1 1 53.63-53.63 53.63 53.63 0 0 1-53.63 53.63zM447.9 448h-92.68V302.4c0-34.7-.7-79.3-48.3-79.3-48.3 0-55.7 37.7-55.7 76.7V448h-92.7V148.9h89V196h1.3c12.4-23.5 42.6-48.3 87.8-48.3 94 0 111.4 61.9 111.4 142.3V448z" />
                  </svg>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center rounded-md bg-slate-900/70 p-2 text-sky-100 transition-colors hover:bg-sky-900/40 hover:text-white"
                  aria-label={t("aboutMe.social.copyEmailAria")}
                  title={t("aboutMe.social.copyEmailTitle")}
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden>
                    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.2-8 5-8-5V6l8 5 8-5v2.2z" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="min-w-0 flex-1 space-y-5 text-sm leading-relaxed text-slate-100/90 sm:text-base">
              <div className="space-y-1">
                <h2 className="text-2xl font-bold uppercase tracking-[0.08em] text-white sm:text-3xl">
                  {t("aboutMe.name")}
                </h2>
                <p className="text-xs uppercase tracking-[0.16em] text-sky-300 sm:text-sm">
                  {t("aboutMe.subtitle")}
                </p>
              </div>

              <p>
                {t("aboutMe.paragraph1")}
              </p>
              <p>
                {t("aboutMe.paragraph2")}
              </p>
              <p>
                {t("aboutMe.paragraph3")}
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default AboutMe;