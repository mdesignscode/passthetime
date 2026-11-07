"use client";

import DiceIcon from "@/Components/Icons/Dice";
import Marquee from "@/Components/Marquee";
import PoemLines from "@/Components/PoemLines";
import { useState } from "react";

interface IRandomPoemProps {
  poems: TPoemWithAuthor[];
  initialIndex: number;
}

export default function RandomPoem({ poems, initialIndex }: IRandomPoemProps) {
  const [currentPoem, setCurrentPoem] = useState(poems[initialIndex]);

  function handleRandomPoem() {
    const randomInt = () => Math.floor(Math.random() * poems.length);
    setCurrentPoem(poems[randomInt()]);
  }

  return (
    <main className="machine-main">
      <Marquee title="A Random Poem" />

      <button
        className="key key-go self-start"
        type="button"
        aria-controls="poem"
        onClick={handleRandomPoem}
      >
        <DiceIcon />
        Shuffle poem
      </button>

      <article
        key={currentPoem.id}
        id="poem"
        aria-live="polite"
        className="receipt receipt-print mx-auto w-full max-w-2xl md:text-base"
      >
        <h2 className="mb-3 border-b border-dashed border-current pb-2 font-bold">
          {currentPoem.title} by {currentPoem.Author?.name}
        </h2>
        <PoemLines lines={currentPoem.lines} />
      </article>
    </main>
  );
}
