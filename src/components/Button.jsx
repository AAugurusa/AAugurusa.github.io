import React from "react";

const Button = ({ label, selected, onHover, onClick, hoverDisabled }) => (
  <button
    type="button"
    onMouseEnter={() => {
      if (!hoverDisabled) onHover();
    }}
    onClick={onClick}
    className={`group block relative w-full text-left px-6 py-3 text-sm sm:text-base font-semibold tracking-[0.18em] uppercase transition-all duration-200 ${
      selected && !hoverDisabled
        ? "text-white drop-shadow-[0_0_12px_rgba(56,189,248,0.55)]"
        : "text-slate-200/80 hover:text-white"
    }`}
  >
    {selected && !hoverDisabled && (
      <div className="absolute inset-0 -z-10 rounded-xl bg-sky-500/70 shadow-[0_0_28px_rgba(56,189,248,0.55)]" />
    )}
    <span className="relative">{label}</span>
  </button>
);

export default Button;
