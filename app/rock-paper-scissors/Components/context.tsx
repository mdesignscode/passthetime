"use client";

import { Dispatch, SetStateAction, createContext, useState } from "react";
import { TRPSObject } from "./PickAnObject";

interface IScore {
  player: number;
  computer: number;
}

type TPlayState = "selectObject" | "playing" | "result";

export interface IRPSContext {
  playerObject: TRPSObject | null;
  setPlayerObject: Dispatch<SetStateAction<TRPSObject | null>>;
  computerObject: TRPSObject | null;
  setComputerObject: Dispatch<SetStateAction<TRPSObject | null>>;
  score: IScore;
  setScore: Dispatch<SetStateAction<IScore>>;
  playState: TPlayState;
  setPlayState: Dispatch<SetStateAction<TPlayState>>;
}

export const initialRPSContext: IRPSContext = {
  playerObject: null,
  setPlayerObject: () => {},
  computerObject: null,
  setComputerObject: () => {},
  score: { player: 0, computer: 0 },
  setScore: () => {},
  playState: "selectObject",
  setPlayState: () => {},
};

export const RPSContext = createContext<IRPSContext>(initialRPSContext);

export function RPSProvider({ children }: { children: React.ReactNode }) {
  // RPS state
  const [playerObject, setPlayerObject] = useState<TRPSObject | null>(null),
    [computerObject, setComputerObject] = useState<TRPSObject | null>(null),
    [score, setScore] = useState<IScore>({
      player: 0,
      computer: 0,
    }),
    [playState, setPlayState] = useState<TPlayState>("selectObject");

  // store object
  const store: IRPSContext = {
    playerObject,
    setPlayerObject,
    computerObject,
    setComputerObject,
    score,
    setScore,
    playState,
    setPlayState,
  };

  return <RPSContext.Provider value={store}>{children}</RPSContext.Provider>;
}
