"use client";

import DiceIcon from "@/Components/Icons/Dice";
import { useContext } from "react";
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
    <button className="key w-full" type="button" onClick={handleRandomOption}>
      <DiceIcon />
      Random Poem
    </button>
  );
}
