"use client";

import Packet from "@/Components/Packet";
import { useContext, useEffect } from "react";
import { RPSContext } from "./context";

export default function ShowResult() {
  const { playState, setPlayState, playerObject, computerObject, setScore } =
      useContext(RPSContext),
    winningMatch = playerObject?.winningMatches.find(
      (match) => match.name === computerObject?.name
    ),
    losingMatch = computerObject?.winningMatches.find(
      (match) => match.name === playerObject?.name
    ),
    playerWon = !!winningMatch,
    outComeAction = (winningMatch || losingMatch)?.action ?? "",
    isDecided = playState === "result" && !!outComeAction;

  // a draw leaves the score alone
  useEffect(() => {
    if (isDecided) {
      setScore((state) => ({
        player: playerWon ? state.player + 1 : state.player,
        computer: playerWon ? state.computer : state.computer + 1,
      }));
    }
  }, [isDecided, playerWon, setScore]);

  function handlePlayAgain() {
    setPlayState("selectObject");
  }

  return (
    playState === "result" && (
      <div className="flex flex-col gap-4" role="group" aria-label="Play results">
        <p aria-label="Player result" className="marquee text-center text-4xl md:text-5xl">
          {!outComeAction ? "Draw" : playerWon ? "You Won" : "You Lost"}
        </p>

        <div className="flex items-end justify-center gap-4 md:gap-8">
          <div className="flex w-36 flex-col gap-1">
            <span className="stamp text-lg">You</span>
            <Packet name={playerObject?.name ?? ""} className="min-h-44 !text-3xl" />
          </div>
          <div className="flex w-36 flex-col gap-1">
            <span className="stamp text-lg">Computer</span>
            <Packet name={computerObject?.name ?? ""} className="min-h-44 !text-3xl" />
          </div>
        </div>

        {outComeAction && (
          <p aria-label="Winning outcome" className="text-center text-xl">
            {playerWon ? playerObject?.name : computerObject?.name}{" "}
            {outComeAction}{" "}
            {playerWon ? computerObject?.name : playerObject?.name}
          </p>
        )}

        <button
          className="key key-go mx-auto w-full max-w-md text-xl"
          type="button"
          onClick={handlePlayAgain}
        >
          Play Again
        </button>
      </div>
    )
  );
}
