"use client";

import { useContext, useEffect, useState } from "react";
import { RPSContext } from "./context";
import { buttonPrimary } from "@/Components/TailwindClasses";
import { motion } from "framer-motion"

export default function ShowResult() {
  const { playState, setPlayState, playerObject, computerObject, setScore } =
      useContext(RPSContext),
    [playerWon, setPlayerWon] = useState(false),
    [outComeAction, setOutcomeAction] = useState(""),
    [displayResult, setDisplayResult] = useState(false)

  useEffect(() => {
    if (computerObject && playerObject && playState === "result") {
      let matchFound = false;
      for (const match of playerObject.winningMatches) {
        if (computerObject.name === match.name) {
          setPlayerWon(true);
          setOutcomeAction(match.action);
          setDisplayResult(true)
          matchFound = true
          break;
        }
      }

      if (!matchFound) {
        setOutcomeAction(() => {
          for (const match of computerObject.winningMatches) {
            if (match.name === playerObject.name) {
              setPlayerWon(false);
              setDisplayResult(true)
              return match.action
            };
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
      <motion.section
        className="text-xl text-center flex flex-col gap-2"
        initial={{ scale: 0.5, opacity: 0 }}
        transition={{ duration: 0.5 }}
        animate={{ scale: 1, opacity: 100 }}
      >
        <p>{!outComeAction ? "Draw" : playerWon ? "You Won" : "You Lost"}</p>
        <p className="underline">
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
      </motion.section>
    )
  );
}
