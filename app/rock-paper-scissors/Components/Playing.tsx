"use client";

import { useContext, useEffect, useState } from "react";
import { RPSContext } from "./context";

const COUNT_DOWN = ["Rock", "Paper", "Scissors"];

export default function Playing({ objects }: { objects: TPlayObject[] }) {
  const { playState, setPlayState, setComputerObject } = useContext(RPSContext),
    [text, setText] = useState("");

  useEffect(() => {
    if (playState !== "playing") return;

    // choose random object for computer
    setComputerObject(objects[Math.floor(Math.random() * objects.length)]);

    const timers = COUNT_DOWN.map((state, index) =>
      setTimeout(() => setText(state), index * 1000)
    );
    // show result UI
    timers.push(
      setTimeout(() => setPlayState("result"), COUNT_DOWN.length * 1000 + 100)
    );

    return () => timers.forEach(clearTimeout);
  }, [setPlayState, objects, setComputerObject, playState]);

  return (
    playState === "playing" && (
      <p role="status" className="marquee mx-auto w-full max-w-md text-center text-5xl md:text-7xl">
        {text}
      </p>
    )
  );
}
