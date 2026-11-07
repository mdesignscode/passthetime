"use client";

import shuffle from "@/Components/shuffle";
import classNames from "classnames";
import Image from "next/image";
import { useEffect, useState } from "react";

const BEST_KEY = "higherOrLowerBest",
  REVEAL_MS = 1100;

type TPhase = "guess" | "reveal" | "over" | "cleared";

function readBest() {
  try {
    return Number(localStorage.getItem(BEST_KEY)) || 0;
  } catch {
    return 0;
  }
}

function saveBest(best: number) {
  try {
    localStorage.setItem(BEST_KEY, String(best));
  } catch {
    // the best streak just won't outlive the visit
  }
}

export default function CardGame({ cards }: { cards: TCard[] }) {
  const [deck, setDeck] = useState(() => shuffle(cards)),
    [index, setIndex] = useState(0),
    [phase, setPhase] = useState<TPhase>("guess"),
    [message, setMessage] = useState("Make your guess."),
    [streak, setStreak] = useState(0),
    [best, setBest] = useState(readBest);

  const current = deck[index],
    nextCard = deck[index + 1];

  function guess(direction: "higher" | "lower") {
    const isTie = nextCard.rank === current.rank,
      isRight =
        direction === "higher"
          ? nextCard.rank > current.rank
          : nextCard.rank < current.rank;

    if (isTie) {
      setMessage(`${nextCard.name}: a tie, so your streak is safe.`);
      setPhase("reveal");
    } else if (isRight) {
      const nextStreak = streak + 1;

      setStreak(nextStreak);
      if (nextStreak > best) {
        setBest(nextStreak);
        saveBest(nextStreak);
      }
      setMessage(`${nextCard.name}: correct!`);
      setPhase("reveal");
    } else {
      setMessage(`${nextCard.name}: game over.`);
      setPhase("over");
    }
  }

  // after a good guess, the revealed card becomes the current card
  useEffect(() => {
    if (phase !== "reveal") return;

    const timer = setTimeout(() => {
      if (index + 2 >= deck.length) {
        setMessage("You cleared the whole deck!");
        setPhase("cleared");
        return;
      }
      setIndex((state) => state + 1);
      setMessage("Make your guess.");
      setPhase("guess");
    }, REVEAL_MS);

    return () => clearTimeout(timer);
  }, [phase, index, deck.length]);

  function newGame() {
    setDeck(shuffle(cards));
    setIndex(0);
    setStreak(0);
    setMessage("Make your guess.");
    setPhase("guess");
  }

  const isRevealed = phase !== "guess",
    isGameEnded = phase === "over" || phase === "cleared";

  return (
    <div className="grid items-start gap-3 md:grid-cols-[1fr_19rem] md:gap-4">
      <section aria-label="Cards" className="wall">
        <div className="slot slot-goods slot-recess items-center gap-4 p-4 md:p-6">
          <div className="flex justify-center gap-3 md:gap-6">
            <div className="flip-card">
              <Image
                src={current.image}
                alt={`Current card: ${current.name}`}
                fill
                sizes="192px"
                priority
                className="object-contain"
              />
            </div>

            {/* remounted per card, so a new card never animates from face up */}
            <div
              key={index}
              className={classNames("flip-card", { "is-flipped": isRevealed })}
            >
              <div className="flip-inner">
                <div className="flip-face">
                  <Image
                    src="/images/cards/back.webp"
                    alt={isRevealed ? "" : "Next card, face down"}
                    fill
                    sizes="192px"
                    priority
                    className="object-contain"
                  />
                </div>
                <div className="flip-face flip-face-front" aria-hidden={!isRevealed}>
                  <Image
                    src={nextCard.image}
                    alt={isRevealed ? `Next card: ${nextCard.name}` : ""}
                    fill
                    sizes="192px"
                    priority
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          <p role="status" id="card-status" className="min-h-7 text-center text-lg font-semibold">
            {message}
          </p>

          {isGameEnded ? (
            <button type="button" className="key key-go text-xl" onClick={newGame}>
              New game
            </button>
          ) : (
            <div className="grid w-full max-w-md grid-cols-2 gap-3">
              <button
                type="button"
                disabled={phase !== "guess"}
                className="key text-xl"
                onClick={() => guess("higher")}
              >
                Higher
              </button>
              <button
                type="button"
                disabled={phase !== "guess"}
                className="key text-xl"
                onClick={() => guess("lower")}
              >
                Lower
              </button>
            </div>
          )}
        </div>
      </section>

      <aside aria-label="Streak" className="panel flex flex-col gap-3">
        <div className="marquee !font-panel text-3xl tracking-wide">
          <p id="card-streak">Streak: {streak}</p>
          <p id="card-best">Best: {best}</p>
        </div>
        <p>Cards left: {deck.length - index - 1}</p>
      </aside>
    </div>
  );
}
