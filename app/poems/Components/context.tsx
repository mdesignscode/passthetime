"use client";

import { Dispatch, SetStateAction, createContext, useState } from "react";

export interface IPoemsContext {
  queryUrl: {
    url: string;
    text: string;
  };
  setQueryUrl: Dispatch<
    SetStateAction<{
      url: string;
      text: string;
    }>
  >;
}

export const initialPoemsContext: IPoemsContext = {
  queryUrl: {
    url: "",
    text: "Pick an option to explore poems",
  },
  setQueryUrl: () => {},
};

export const PoemsContext = createContext<IPoemsContext>(initialPoemsContext);

export function PoemsProvider({ children }: { children: React.ReactNode }) {
  // Poems state
  const [queryUrl, setQueryUrl] = useState({
    url: "",
    text: "Pick an option to explore poems"
  })

  // store object
  const store: IPoemsContext = { queryUrl, setQueryUrl };

  return (
    <PoemsContext.Provider value={store}>{children}</PoemsContext.Provider>
  );
}
