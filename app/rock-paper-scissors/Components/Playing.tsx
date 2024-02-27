"use client";

import { useContext, useEffect, useMemo, useState } from "react";
import { RPSContext } from "./context";
import { TRPSObject } from "./PickAnObject";

export default function Playing({ objects }: { objects: TRPSObject[] }) {
  const { playState, setPlayState, setComputerObject } = useContext(RPSContext),
    [text, setText] = useState("");

  useEffect(() => {
    if (playState === "playing") {
      // choose random object for computer
      const randomInt = Math.floor(Math.random() * objects.length);
      setComputerObject(objects[randomInt]);

      // Ready, set, go animation
      const countDownText = ["Rock", "Paper", "Scissors"];

      countDownText.forEach((state, index) => {
        setTimeout(() => {
          setText(state);

          // show result UI
          setTimeout(() => {
            if (index === countDownText.length - 1) {
              setPlayState("result");
            }
          }, 1100);
        }, index * 1000);
      });
    }
  }, [setPlayState, objects, setComputerObject, playState]);

  return (
    playState === "playing" && (
      <section>
        {text === "Rock" && (
          <p className="text-2xl animate__animated animate__zoomIn">Rock</p>
        )}
        {text === "Paper" && (
          <p className="text-2xl animate__animated animate__zoomIn">Paper</p>
        )}
        {text === "Scissors" && (
          <p className="text-2xl animate__animated animate__zoomIn">Scissors</p>
        )}
      </section>
    )
  );
}
