import React, { useState, useEffect } from "react";
 
const ThemeToggle = () => {
  const [theme, setTheme] = useState("dark");
 
  useEffect(() => {
    if (
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, []);
 
  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };
 
  return (
    <button
      onClick={toggleTheme}
      className="bg-[url('https://img.icons8.com/color/48/full-moon.png')]  active:animate-spin w-auto h-8  active:blur-md  dark:bg-[url('https://img.icons8.com/emoji/48/sun-emoji.png')] bg-no-repeat bg-contain bg-center text-gray-800 duration-500 dark:text-gray-200 px-10 py-2 rounded-lg"
    >
      {theme === "dark" ? "" : ""}
    </button>
  );
};
 
export default ThemeToggle;