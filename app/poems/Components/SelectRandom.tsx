"use client";

import DiceIcon from "@/Components/Icons/Dice";
import { m } from "framer-motion";
import { useContext } from "react";
import { childrenVariants } from "./PoemOptions";
import { PoemsContext } from "./context";

export default function SelectRandom() {
  const { setQueryUrl } = useContext(PoemsContext);

  function handleRandomOption() {
    setQueryUrl({
      url: "/poems/random",
      text: "Explore random poems",
    });
  }

  return (
    <m.button
      variants={childrenVariants}
      className="flex border-2 border-dark p-2 gap-1 md:gap-4 items-center justify-center rounded-lg hover:-translate-y-2 active:translate-y-0 transition-all w-full"
      type="button"
      onClick={handleRandomOption}
    >
      <DiceIcon />
      Random Poem
    </m.button>
  );
}
