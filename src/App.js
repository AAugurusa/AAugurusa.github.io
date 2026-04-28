import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Start from "./pages/Projects";
import Extra from "./pages/Extra";
import Contact from "./pages/Contact";
import AboutMe from "./pages/AboutMe";
import Button from "./components/Button";
import { useLanguage } from "./contexts/LanguageContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Main menu that wires buttons to their behaviors
const MainMenu = () => {
  const [selectedIndex, setSelectedIndex] = useState(0); // default START
  const navigate = useNavigate();
  const emailAddress = "augurusaagustin@gmail.com";
  const { lang, setLang, t } = useLanguage();

  const menuOptions = [
    { label: t("app.menu.start"), path: "/start", id: "start" },
    { label: t("app.menu.extra"), path: "/extra", id: "extra" },
    { label: t("app.menu.credits"), path: "/credits", id: "about" },
  ];

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      toast.success(t("app.toasts.emailCopied"));
    } catch {
      window.location.href = `mailto:${emailAddress}`;
    }
  };

  const handleButtonClick = (id, path) => {
    switch (id) {
      case "start":
        navigate(path);
        break;
      case "about":
        navigate(path);
        break;
      case "extra":
        navigate(path);
        break;
      default:
        navigate(path);
    }
  };

  return (
      <div className="relative min-h-screen overflow-hidden bg-[#050814] text-white">
      {/* Background: blurred classroom-like scene via gradient blocks */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1728] via-[#050814] to-[#02030a]" />
        {/* Abstract desks & chairs as blurred blocks */}
        <div className="absolute -left-10 top-10 w-56 h-32 bg-sky-900/40 blur-3xl rounded-3xl" />
        <div className="absolute left-12 top-40 w-64 h-40 bg-sky-800/30 blur-3xl rounded-3xl" />
        <div className="absolute right-10 top-16 w-72 h-40 bg-sky-900/35 blur-3xl rounded-3xl" />
        <div className="absolute right-24 bottom-12 w-60 h-32 bg-sky-700/30 blur-3xl rounded-3xl" />
      </div>

      {/* Blue gaming overlay */}
      <div className="absolute inset-0 bg-sky-950/40 mix-blend-screen -z-10" />

      {/* Silhouette of seated character */}
      <div className="pointer-events-none absolute left-[12%] bottom-0 h-[60%] hidden md:block">
        <div className="relative h-full w-40">
          <div className="absolute bottom-16 left-6 w-24 h-28 bg-cyan-400/40 rounded-md" />
          <div className="absolute bottom-12 left-4 w-28 h-6 bg-cyan-400/50 rounded-md" />
          <div className="absolute bottom-4 left-8 w-2 h-8 bg-cyan-400/40 rounded-full" />
          <div className="absolute bottom-4 left-24 w-2 h-8 bg-cyan-400/40 rounded-full" />
          <div className="absolute bottom-20 left-10 w-16 h-20 bg-cyan-400/70 rounded-[999px]" />
          <div className="absolute bottom-36 left-14 w-10 h-10 bg-cyan-300/80 rounded-full" />
          <div className="absolute bottom-10 left-12 w-4 h-14 bg-cyan-400/70 rounded-[999px]" />
          <div className="absolute bottom-10 left-20 w-4 h-14 bg-cyan-400/70 rounded-[999px]" />
        </div>
      </div>

      {/* Center-left menu */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
  <div className="w-full max-w-md md:ml-24 flex flex-col justify-between">
          <div className="shot-up mb-10">
            <div className="mb-4 flex items-center justify-start gap-2">
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] transition-colors ${
                  lang === "en"
                    ? "bg-sky-500/70 text-white shadow-[0_0_18px_rgba(56,189,248,0.45)]"
                    : "bg-slate-900/80 text-sky-100 hover:bg-sky-900/40"
                }`}
              >
                {t("app.language.en")}
              </button>
              <button
                type="button"
                onClick={() => setLang("es")}
                className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] transition-colors ${
                  lang === "es"
                    ? "bg-sky-500/70 text-white shadow-[0_0_18px_rgba(56,189,248,0.45)]"
                    : "bg-slate-900/80 text-sky-100 hover:bg-sky-900/40"
                }`}
              >
                {t("app.language.es")}
              </button>
            </div>

            <p className="text-xs tracking-[0.35em] uppercase text-sky-300/70">
              {t("app.home.pressEnter")}
            </p>
            <h1 className="mt-3 text-3xl sm:text-4xl font-impact tracking-[0.12em] uppercase text-white drop-shadow-[0_0_25px_rgba(56,189,248,0.45)]">
              {t("app.home.name")}
            </h1>
          </div>

    <nav className="space-y-4 flex-1" aria-label="Main menu">
            {menuOptions.map((option, index) => (
              <div
                key={option.id}
                className="shot-up-stagger"
                style={{ animationDelay: `${300 + index * 200}ms` }}
              >
                <Button
                  label={option.label}
                  selected={index === selectedIndex}
                  onHover={() => setSelectedIndex(index)}
                  onClick={() => handleButtonClick(option.id, option.path)}
                />
              </div>
            ))}
          </nav>
      <div
        className="shot-up mt-4 pt-4 border-slate-700 flex items-center justify-between"
        style={{ animationDelay: "880ms" }}
      >
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/AAugurusa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-slate-800/90 p-2 hover:bg-slate-700 transition-colors"
            aria-label={t("app.social.githubAria")}
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" aria-hidden>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/agustin-augurusa-167960220/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-sky-700/90 p-2 hover:bg-sky-600 transition-colors"
            aria-label={t("app.social.linkedinAria")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6 fill-white" aria-hidden>
              <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340a53.63 53.63 0 1 1 53.63-53.63 53.63 53.63 0 0 1-53.63 53.63zM447.9 448h-92.68V302.4c0-34.7-.7-79.3-48.3-79.3-48.3 0-55.7 37.7-55.7 76.7V448h-92.7V148.9h89V196h1.3c12.4-23.5 42.6-48.3 87.8-48.3 94 0 111.4 61.9 111.4 142.3V448z" />
            </svg>
          </a>

          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center justify-center rounded-md bg-slate-900/70 p-2 text-sky-100 transition-colors hover:bg-sky-900/40 hover:text-white"
            aria-label={t("app.social.copyEmailAria")}
            title={t("app.social.copyEmailTitle")}
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden>
              <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.2-8 5-8-5V6l8 5 8-5v2.2z" />
            </svg>
          </button>
        </div>
      </div>
        </div>
      </div>
      </div>
    
  );
};

function App() {
  return (
    <BrowserRouter>
      {/* MainMenu now uses button components with behavior handlers */}
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/start" element={<Start />} />
        <Route path="/credits" element={<AboutMe />} />
        <Route path="/extra" element={<Extra />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
      />
    </BrowserRouter>
  );
}

export default App;
