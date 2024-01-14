"use client";

import { useContext } from "react";
import { RPSContext } from "./context";

export default function PlayStats() {
  const { playerObject, score } = useContext(RPSContext);

  return (
    <section className="text-lg min-w-60 border-2 border-dark rounded-lg p-2">
      <section>
        <strong>Score</strong>
        <div className="flex justify-between">
          <p>
            Player: <strong>{score.player}</strong>
          </p>

          <p>
            Computer: <strong>{score.computer}</strong>
          </p>
        </div>
      </section>
      <p>Your object: {playerObject?.name || "Not selected yet"}</p>
    </section>
  );
}
