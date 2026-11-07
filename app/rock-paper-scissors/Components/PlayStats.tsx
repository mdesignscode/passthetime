"use client";

import { useContext } from "react";
import { RPSContext } from "./context";

export default function PlayStats() {
  const { playerObject, score } = useContext(RPSContext);

  return (
    <section aria-label="Play details" className="panel flex flex-col gap-3">
      <section aria-label="Score section" className="marquee !font-panel tracking-wide">
        <strong className="sr-only">Score</strong>
        <div className="flex flex-col gap-1 text-3xl">
          <p>
            Player: <strong>{score.player}</strong>
          </p>

          <p>
            Computer: <strong>{score.computer}</strong>
          </p>
        </div>
      </section>
      <p aria-label="Player selected object">
        Your object: {playerObject?.name || "Not selected yet"}
      </p>
    </section>
  );
}
