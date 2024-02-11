"use client";
import { useContext } from "react";
import { PoemsContext } from "./context";
import DiceIcon from "@/Components/Icons/Dice";

export default function SelectRandom() {
  const { setQueryUrl } = useContext(PoemsContext);

  function handleRandomOption() {
    setQueryUrl({
      url: "/poems/random",
      text: "Explore random poems"
    });
  }

  return (
    <button
      className="flex border-2 border-dark p-2 gap-4 items-center justify-center rounded-lg hover:-translate-y-2 active:translate-y-0 transition-all w-full"
      type="button"
      onClick={handleRandomOption}
    >
      <DiceIcon />
      Random Poem
    </button>
  );
}
