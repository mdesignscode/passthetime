"use client";

import { buttonPrimary } from "@/Components/TailwindClasses";
import { GlobalContext } from "@/context/globalContext";
import { motion } from "framer-motion";
import { useContext } from "react";
import { FruitContext } from "./context";
import IFruit from "./fruitInterface";
import ScaleIn from "@/Components/ScaleIn";

export default function FruitButton({
  fruit,
  index,
}: {
  fruit: IFruit;
  index: number;
}) {
  const { setShowInfo, setFruit } = useContext(FruitContext);
  const { setShowLightbox } = useContext(GlobalContext);

  function handleShowInfo() {
    setFruit(fruit);
    setShowLightbox(true);
    setShowInfo(true);
  }

  return (
    <ScaleIn index={index}>
      <motion.button
        type="button"
        className={buttonPrimary}
        onClick={handleShowInfo}
      >
        {fruit.name}
      </motion.button>
    </ScaleIn>
  );
}
