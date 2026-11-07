"use client";

import { GlobalContext } from "../context/globalContext";
import { useContext } from "react";

export default function Overlay() {
  const { showLightbox } = useContext(GlobalContext);

  return showLightbox ? (
    <div id="overlay" className="fixed inset-0 z-10 bg-black/70"></div>
  ) : null;
}
