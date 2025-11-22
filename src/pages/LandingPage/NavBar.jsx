import React, { useEffect, useState } from "react";

/**
 * FIXED NAVBAR
 * - Navbar always visible
 * - Background applied
 * - Logo color switches properly
 * - Theme toggle visible in both modes
 */
const NavBar = () => {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("site-theme") || "dark";
    } catch {
      return "dark";
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.add("light-mode");
      root.classList.remove("dark-mode");
    } else {
      root.classList.add("dark-mode");
      root.classList.remove("light-mode");
    }

    try {
      localStorage.setItem("site-theme", theme);
    } catch {}

    window.dispatchEvent(new Event("themeChange"));
  }, [theme]);

  const toggleTheme = () =>
    setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <header className="
        w-full 
        fixed top-0 left-0 z-50
        bg-[rgba(255,255,255,0.9)] 
        dark:bg-[rgba(0,0,0,0.7)]
        backdrop-blur-md
        border-b border-gray-300 dark:border-gray-700
    ">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 py-4">

        {/* 🔥 GEN SQUAD LOGO */}
        <span
          className="
            text-2xl font-bold tracking-tight 
            text-black dark:text-white
          "
        >
          GenSquad
        </span>

        {/* 🔥 THEME TOGGLE BUTTON */}
        <button
          onClick={toggleTheme}
          className="
            flex items-center gap-2 px-3 py-2 rounded-md
            text-black dark:text-white
            hover:bg-black/10 dark:hover:bg-white/10
            transition
          "
        >
          {theme === "dark" ? (
            <>
              {/* Sun Icon for switching to light */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.76 4.84 5 3.09 3.59 4.5l1.75 1.75L6.76 4.84zM1 13h3v-1H1v1zM21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
              </svg>
              <span>Light</span>
            </>
          ) : (
            <>
              {/* Moon Icon for switching to dark */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
              </svg>
              <span>Dark</span>
            </>
          )}
        </button>

      </div>
    </header>
  );
};

export default NavBar;
