"use client";

import DiceIcon from "@/Components/Icons/Dice";
import { useState } from "react";

interface IRandomPoemProps {
  poems: IPoem[];
  initialIndex: number;
}

interface IPoem {
  id: number;
  title: string;
  lines: string;
  authorId: number | null;
  Author: {
    id: number;
    name: string;
  } | null;
}

export default function RandomPoem({ poems, initialIndex }: IRandomPoemProps) {
  const [currentPoem, setCurrentPoem] = useState(poems[initialIndex]);

  function handleRandomPoem() {
    const randomInt = () => Math.floor(Math.random() * poems.length);
    setCurrentPoem(poems[randomInt()]);
  }

  return (
    <main className="flex flex-col h-full items-center gap-4 p-4">
      <section className="flex border-b-2 border-dark items-center gap-4">
        <h1 className="text-lg font-bold md:text-2xl">📜🖋 A Random Poem 🖋📜</h1>
        <button
          className="hover:text-light transition-all hover:scale-110 active:scale-95"
          type="button"
          onClick={handleRandomPoem}
        >
          <DiceIcon />
        </button>
      </section>

      <article className="h-3/4 shadow-lg px-2 w-8/12 bg-light flex flex-col overflow-auto rounded-lg">
        <h2 className="font-bold border-b-2 border-dark p-2 sticky top-0 bg-light rounded-t-lg text-center">
          {currentPoem.title} by {currentPoem.Author?.name}
        </h2>
        <section className="p-2">
          {currentPoem.lines.split("\n").map((line) => (
            <p key={line}>{line}</p>
          ))}
        </section>
      </article>
    </main>
  );
}
