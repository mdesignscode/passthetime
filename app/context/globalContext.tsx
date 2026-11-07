"use client";

import storageAvailable from "../Components/localStorageDetection";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

export interface IGlobalContext {
  storageIsAvailable: boolean;
  setPrefersDarkMode: Dispatch<SetStateAction<boolean>>;
  prefersDarkMode: boolean;
  setShowLightbox: Dispatch<SetStateAction<boolean>>;
  showLightbox: boolean;
  machineMessage: string;
  setMachineMessage: Dispatch<SetStateAction<string>>;
}

export const initialGlobalContext: IGlobalContext = {
  storageIsAvailable: false,
  setPrefersDarkMode: () => {},
  prefersDarkMode: false,
  setShowLightbox: () => {},
  showLightbox: false,
  machineMessage: "Enter a code",
  setMachineMessage: () => {},
};

export const GlobalContext =
  createContext<IGlobalContext>(initialGlobalContext);

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  const [storageIsAvailable, setStorageIsAvailable] = useState(false);
  const [prefersDarkMode, setPrefersDarkMode] = useState(false);
  const [showLightbox, setShowLightbox] = useState(false);
  const [machineMessage, setMachineMessage] = useState(
    initialGlobalContext.machineMessage
  );

  useEffect(() => {
    const htmlElement = document.documentElement;

    setStorageIsAvailable(storageAvailable());
    // the inline script in layout.tsx has already applied the stored mode
    setPrefersDarkMode(htmlElement.classList.contains("dark"));

    function moveSpotlight(event: MouseEvent) {
      if (htmlElement.classList.contains("dark")) {
        htmlElement.style.setProperty("--x", event.clientX + "px");
        htmlElement.style.setProperty("--y", event.clientY + "px");
      }
    }

    htmlElement.addEventListener("mousemove", moveSpotlight);
    return () => htmlElement.removeEventListener("mousemove", moveSpotlight);
  }, []);

  const store: IGlobalContext = {
    storageIsAvailable,
    prefersDarkMode,
    setPrefersDarkMode,
    showLightbox,
    setShowLightbox,
    machineMessage,
    setMachineMessage,
  };

  return (
    <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>
  );
}
