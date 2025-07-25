"use client";

import { BookOpen, Moon, Sun } from "lucide-react";
import React from "react";
import LanguageSwitcher from "../language-switcher";
import { useTheme } from "next-themes"; // You'll need to install next-themes

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
};

const Navbar = ({ lang }: { lang: "en" | "bn" }) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-background/80 backdrop-blur-sm dark:border-slate-800/80">
      <div className="container h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold text-slate-800 dark:text-slate-200">
            IELTS Course
          </span>
        </div>
        <div className="flex items-center gap-4">
          <ThemeSwitcher />
          <LanguageSwitcher currentLang={lang} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
