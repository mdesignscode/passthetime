"use client";

import { GlobalContext } from "@/context/globalContext";
import useDispense from "@/hooks/useDispense";
import { KeyboardEvent, useContext, useState } from "react";
import { SLOTS, findSlot } from "./slots";

const KEYS = ["A", "B", "C", "1", "2", "3"];

export default function Keypad({ id }: { id: string }) {
  const dispense = useDispense(),
    [entry, setEntry] = useState(""),
    { machineMessage: message, setMachineMessage: setMessage } =
      useContext(GlobalContext);

  function press(key: string) {
    const next = (entry + key).slice(0, 2);

    if (next.length < 2) {
      setEntry(next);
      setMessage(next);
      return;
    }

    const slot = findSlot(next);
    setEntry("");

    if (!slot) {
      setMessage(`${next} is empty`);
      return;
    }

    dispense(slot);
  }

  function surprise() {
    const slot = SLOTS[Math.floor(Math.random() * SLOTS.length)];
    setEntry("");
    dispense(slot);
  }

  function clear() {
    setEntry("");
    setMessage("Enter a code");
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const key = event.key.toUpperCase();

    if (KEYS.includes(key)) {
      event.preventDefault();
      press(key);
    } else if (key === "BACKSPACE") {
      clear();
    }
  }

  return (
    <div
      className="flex flex-col gap-2"
      role="group"
      aria-label="Keypad"
      data-keypad={id}
      onKeyDown={handleKeyDown}
    >
      <p
        id={`${id}-display`}
        aria-live="polite"
        className="marquee min-h-14 text-lg leading-tight !p-2 flex items-center"
      >
        {message}
      </p>

      <div className="grid grid-cols-3 gap-2">
        {KEYS.map((key) => (
          <button
            key={key}
            type="button"
            className="key text-xl"
            aria-label={`Key ${key}`}
            onClick={() => press(key)}
          >
            {key}
          </button>
        ))}
        <button type="button" className="key" onClick={clear}>
          Clear
        </button>
        <button type="button" className="key key-go col-span-2" onClick={surprise}>
          Surprise me
        </button>
      </div>
    </div>
  );
}
