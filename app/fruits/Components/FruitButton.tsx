"use client";

import ScaleIn from "@/Components/ScaleIn";
import { buttonPrimary } from "@/Components/TailwindClasses";
import { GlobalContext } from "@/context/globalContext";
import { useContext } from "react";
import { FruitContext } from "./context";

export default function FruitButton({
  fruit,
  index,
}: {
  fruit: TFruit;
  index: number;
}) {
  const { setShowInfo, setFruit, showInfo } = useContext(FruitContext);
  const { setShowLightbox } = useContext(GlobalContext);

  function handleShowInfo() {
    setFruit(fruit);
    setShowLightbox(true);
    setShowInfo(true);
  }

  return (
    <ScaleIn index={index} className="flex-1 md:flex-auto">
      <button
        type="button"
        className={buttonPrimary}
        onClick={handleShowInfo}
        aria-controls="fruit-info"
        aria-label={`Show ${fruit.name} information`}
        aria-expanded={showInfo}
        id={`${fruit.name}-info-button`}
      >
        {fruit.name}
      </button>
    </ScaleIn>
  );
}
