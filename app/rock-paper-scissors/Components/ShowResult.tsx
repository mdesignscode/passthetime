"use client";

import { buttonPrimary } from "@/Components/TailwindClasses";
import ScaleIn from "@/app/Components/ScaleIn";
import { useContext, useEffect, useState } from "react";
import { RPSContext } from "./context";

export default function ShowResult() {
  const { playState, setPlayState, playerObject, computerObject, setScore } =
      useContext(RPSContext),
    [playerWon, setPlayerWon] = useState(false),
    [outComeAction, setOutcomeAction] = useState(""),
    [displayResult, setDisplayResult] = useState(false);

  useEffect(() => {
    if (computerObject && playerObject && playState === "result") {
      let matchFound = false;
      for (const match of playerObject.winningMatches) {
        if (computerObject.name === match.name) {
          setPlayerWon(true);
          setOutcomeAction(match.action);
          setDisplayResult(true);
          matchFound = true;
          break;
        }
      }

      if (!matchFound) {
        setOutcomeAction(() => {
          for (const match of computerObject.winningMatches) {
            if (match.name === playerObject.name) {
              setPlayerWon(false);
              setDisplayResult(true);
              return match.action;
            }
          }

          return "";
        });
      }
    }
  }, [playState, computerObject, playerObject, setScore]);

  useEffect(() => {
    if (playState === "result" && displayResult) {
      setScore((state) => ({
        player: playerWon ? state.player + 1 : state.player,
        computer: playerWon ? state.computer : state.computer + 1,
      }));
      setDisplayResult(false);
    }
  }, [playState, playerWon, setScore, displayResult]);

  function handlePlayAgain() {
    setPlayState("selectObject");
  }

  return (
    playState === "result" && (
      <ScaleIn
        className="text-xl text-center flex flex-col gap-2"
        ariaLabel="Play results"
      >
        <p aria-label="Player result">
          {!outComeAction ? "Draw" : playerWon ? "You Won" : "You Lost"}
        </p>
        <p aria-label="Winning outcome" className="underline">
          {playerWon ? playerObject?.name : computerObject?.name}{" "}
          {outComeAction}{" "}
          {outComeAction && !playerWon
            ? playerObject?.name
            : computerObject?.name}
        </p>

        <button
          className={`${buttonPrimary} tracking-widest`}
          type="button"
          onClick={handlePlayAgain}
        >
          Play Again
        </button>
      </ScaleIn>
    )
  );
}
