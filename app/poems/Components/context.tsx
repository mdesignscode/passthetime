"use client";

import { Dispatch, SetStateAction, createContext, useState } from "react";

export interface IPoemsContext {
  queryUrl: string;
  setQueryUrl: Dispatch<SetStateAction<string>>;
}

export const initialPoemsContext: IPoemsContext = {
  queryUrl: "",
  setQueryUrl: () => {},
};

export const PoemsContext = createContext<IPoemsContext>(initialPoemsContext);

export function PoemsProvider({ children }: { children: React.ReactNode }) {
  // Poems state
  const [queryUrl, setQueryUrl] = useState("");

  // store object
  const store: IPoemsContext = { queryUrl, setQueryUrl };

  return (
    <PoemsContext.Provider value={store}>{children}</PoemsContext.Provider>
  );
}
