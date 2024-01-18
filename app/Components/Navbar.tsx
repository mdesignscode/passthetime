"use client";
import HomeIcon from "./Icons/Home";
import Link from "next/link";
import FruitsIcon from "./Icons/Fruits";
import { useContext, useState } from "react";
import "@/styles/app.css";
import "@/styles/hamburgers.css";
import Image from "next/image";
import { GlobalContext } from "@/context/globalContext";
import "animate.css";
import AuthorIcon from "./Icons/Author";
import GameIcon from "./Icons/Game";
import FoodIcon from "./Icons/Food";
import classNames from "classnames";
import { flexCenter } from "./TailwindClasses";

export default function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const navLinks = [
    {
      path: "/",
      icon: <HomeIcon />,
      name: "Home",
    },
    {
      path: "/fruits",
      icon: <FruitsIcon />,
      name: "Fruits",
    },
    {
      path: "/poems",
      icon: <AuthorIcon />,
      name: "Poems",
    },
    {
      path: "/rock-paper-scissors",
      icon: <GameIcon />,
      name: "Rock, Paper, Scissors",
    },
    {
      path: "/recipes",
      icon: <FoodIcon />,
      name: "Recipes",
    },
  ];

  const { prefersDarkMode, setPrefersDarkMode, setShowLightbox, showLightbox } =
    useContext(GlobalContext);

  function handleMenu() {
    requestAnimationFrame(() => {
      setShowLightbox((state) => !state);
      setIsCollapsed((state) => !state);
    });
  }

  function toggleColorMode() {
    const currentMode = localStorage.getItem("colorMode"),
      newMode = currentMode === "dark" ? "light" : "dark";

    localStorage.setItem("colorMode", newMode);
    setPrefersDarkMode((state) => !state);
    document.documentElement.classList.toggle("dark");
  }

  return (
    <header
      className={classNames(
        "absolute flex-col gap-0 md:gap-2 md:flex-row left-2 top-2 transition-all duration-1000 border-accent-primary border px-4 py-2 rounded-lg will-change-content",
        showLightbox && !isCollapsed ? "z-20" : "z-0",
        flexCenter
      )}
    >
      <button
        onClick={handleMenu}
        id="menu"
        tabIndex={0}
        aria-label="Menu"
        className={`grid hamburger hamburger--vortex ${
          !isCollapsed && "is-active mt-2 md:mt-0"
        }`}
        type="button"
        aria-controls="navigation"
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>

      <nav
        className={classNames(
          { "m-2": !isCollapsed, hidden: isCollapsed },
          "flex flex-col gap-2 justify-center text-2xl text-light"
        )}
      >
        {navLinks.map((link, index) => {
          return (
            <button onClick={handleMenu} key={link.name}>
              <Link
                href={link.path}
                style={{
                  opacity: isCollapsed ? 0 : 1,
                  animationDelay: `${index * 200}ms`,
                }}
                className={classNames(
                  "animate__animated animate__faster",
                  { animate__flipInX: !isCollapsed },
                  "hover:scale-110 active:scale-95 flex gap-3 hover:text-accent-primary"
                )}
              >
                {link.icon}
                {link.name}
              </Link>
            </button>
          );
        })}
      </nav>

      <button
        className={`animate__animated hidden md:grid hover:scale-110 active:scale-95 transition-all`}
        type="button"
        onClick={toggleColorMode}
      >
        {!prefersDarkMode ? (
          <Image
            src="/icons/icons8-moon-78.png"
            alt="Switch to Dark mode"
            id="toggleColorMode"
            width="40"
            height="40"
          />
        ) : (
          <Image
            src="/icons/icons8-light-mode-78.png"
            alt="Switch to Light mode"
            id="toggleColorMode"
            width="40"
            height="40"
          />
        )}
      </button>
    </header>
  );
}
