"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import MoonIcon from "../icons/MoonIcon";
import SunIcon from "../icons/SunIcon";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <div
      onClick={toggleTheme}
      className="ml-[0.5vw] relative w-16 h-8 rounded-2xl cursor-pointer shadow-md transition-colors duration-500 border border-[#FDDA78] bg-[#0b0f77] dark:bg-[#0b0f77]"
      role="switch"
      aria-checked={isDarkMode}
      aria-label="Toggle dark mode"
    >
      <div
        className={`absolute top-[0.2rem] ${isDarkMode ? "right-9" : "left-1"
          }  w-1/2 h-6 rounded-2xl bg-white transition-transform duration-500 ease-in-out transform ${isDarkMode ? "translate-x-full" : "translate-x-0"
          }`}
      >
        <div className="absolute w-full h-full flex justify-center items-center">
          {isDarkMode ? (
            <MoonIcon
              primaryPathFill="#FFE282"
              secondaryPathFill="#FFC400"
              svgFill="none"
              className="transition-opacity duration-500 opacity-100"
            />
          ) : (
            <SunIcon
              primaryPathFill="#FFC400"
              svgFill="none"
              className="transition-opacity duration-500 opacity-100"
            />
          )}
        </div>
      </div>
    </div>
  );
}
