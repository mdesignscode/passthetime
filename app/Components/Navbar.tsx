"use client";

import { GlobalContext } from "../context/globalContext";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useRef, useState } from "react";
import Keypad from "./Keypad";
import ThemeRocker from "./ThemeRocker";
import { SLOTS } from "./slots";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false),
    menuButton = useRef<HTMLButtonElement>(null),
    pathname = usePathname(),
    { setShowLightbox, setMachineMessage } = useContext(GlobalContext);

  function setMenu(open: boolean) {
    setIsOpen(open);
    setShowLightbox(open);
  }

  function handleMenuButton() {
    // on large screens the home page already shows a keypad, so use that one
    const homeKey = document.querySelector<HTMLButtonElement>(
      '[data-keypad="home-keypad"] button'
    );

    if (homeKey && window.matchMedia("(min-width: 1024px)").matches) {
      homeKey.focus();
      return;
    }

    setMenu(!isOpen);
  }

  // close the panel when a slot has been dispensed
  useEffect(() => {
    setIsOpen(false);
    setShowLightbox(false);
    setMachineMessage("Enter a code");
  }, [pathname, setShowLightbox, setMachineMessage]);

  useEffect(() => {
    if (!isOpen) return;

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        setShowLightbox(false);
        menuButton.current?.focus();
      }
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen, setShowLightbox]);

  return (
    <header
      aria-label="Menu"
      className={classNames(
        "relative flex flex-wrap items-center gap-x-4 gap-y-2 bg-enamel-deep px-3 py-2 text-on-enamel md:px-4",
        isOpen && "z-20"
      )}
    >
      <Link
        href="/"
        aria-label="Random Stuff, home"
        className="stamp mr-auto text-2xl leading-none md:mr-0"
      >
        Random Stuff
      </Link>

      <nav
        id="navigation"
        aria-label="Activities"
        className={classNames(
          "order-last w-full md:order-none md:mr-auto md:block md:w-auto",
          !isOpen && "hidden"
        )}
      >
        <ul className="flex flex-col gap-1 md:flex-row md:flex-wrap md:gap-0.5">
          {SLOTS.filter((slot) => slot.inNav).map((slot) => (
            <li key={slot.path}>
              <Link
                href={slot.path}
                aria-current={pathname === slot.path ? "page" : undefined}
                className={classNames(
                  "flex min-h-11 items-center gap-1.5 whitespace-nowrap rounded px-1.5 text-sm transition-colors hover:bg-enamel md:min-h-9",
                  pathname === slot.path && "bg-enamel font-semibold"
                )}
              >
                {slot.code && (
                  <span className="code md:hidden 2xl:inline" aria-hidden="true">
                    {slot.code}
                  </span>
                )}
                {slot.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <button
        ref={menuButton}
        id="menu"
        type="button"
        className="key !min-h-9 text-sm"
        aria-label={isOpen ? "Close keypad and navigation" : "Open keypad and navigation"}
        aria-controls="keypad-panel"
        aria-expanded={isOpen}
        onClick={handleMenuButton}
      >
        <span className="md:hidden">Menu</span>
        <span className="hidden md:inline">Keypad</span>
      </button>

      <ThemeRocker />

      {isOpen && (
        <div
          id="keypad-panel"
          className="panel order-last w-full md:absolute md:right-4 md:top-full md:mt-2 md:w-72"
        >
          <Keypad id="header-keypad" />
        </div>
      )}
    </header>
  );
}
