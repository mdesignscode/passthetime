"use client";

import shuffle from "@/Components/shuffle";
import { useMemo, useRef, useState } from "react";

const ALL = "All";

export default function JokeDispenser({ jokes }: { jokes: TJoke[] }) {
  const categories = useMemo(
      () => [ALL, ...Array.from(new Set(jokes.map(({ category }) => category)))],
      [jokes]
    ),
    [category, setCategory] = useState(ALL),
    [joke, setJoke] = useState<TJoke | null>(null),
    [isRevealed, setIsRevealed] = useState(false),
    [printed, setPrinted] = useState(0),
    // jokes left before any repeat
    bag = useRef<TJoke[]>([]);

  function dispense(from = category) {
    if (!bag.current.length) {
      const pool = jokes.filter(
        (item) => from === ALL || item.category === from
      );
      bag.current = shuffle(
        // don't print the same joke twice in a row across a refill
        pool.length > 1 ? pool.filter((item) => item.id !== joke?.id) : pool
      );
    }

    setJoke(bag.current.pop() ?? null);
    setIsRevealed(false);
    setPrinted((state) => state + 1);
  }

  function chooseCategory(name: string) {
    setCategory(name);
    bag.current = [];
    setJoke(null);
    setIsRevealed(false);
  }

  return (
    <div className="grid items-start gap-3 md:grid-cols-[1fr_19rem] md:gap-4">
      <section aria-label="Printed joke" className="wall min-h-64">
        <div className="slot slot-goods slot-recess items-center justify-center gap-3 p-4">
          {joke ? (
            <article
              key={printed}
              id="joke"
              aria-live="polite"
              className="receipt receipt-print w-full max-w-xl text-base md:text-lg"
            >
              <p>{joke.setup}</p>
              {isRevealed && joke.punchline && (
                <p className="mt-3 border-t border-dashed border-current pt-3 font-bold">
                  {joke.punchline}
                </p>
              )}
            </article>
          ) : (
            <p className="stamp text-center text-xl">Nothing printed yet</p>
          )}

          {joke?.punchline && !isRevealed && (
            <button
              type="button"
              className="key"
              onClick={() => setIsRevealed(true)}
            >
              Show punchline
            </button>
          )}
        </div>
      </section>

      <aside aria-label="Joke controls" className="panel flex flex-col gap-3">
        <button
          type="button"
          className="key key-go text-xl"
          onClick={() => dispense()}
        >
          Print a joke
        </button>

        <p className="marquee !font-panel text-2xl tracking-wide" id="jokes-printed">
          Printed: {printed}
        </p>

        <div role="group" aria-label="Joke category" className="flex flex-wrap gap-1.5">
          {categories.map((name) => (
            <button
              key={name}
              type="button"
              aria-pressed={category === name}
              className={`min-h-8 rounded px-2 text-sm font-medium text-ink transition-colors ${
                category === name ? "bg-signal" : "bg-glass hover:bg-white"
              }`}
              onClick={() => chooseCategory(name)}
            >
              {name}
            </button>
          ))}
        </div>
      </aside>
    </div>
  );
}
