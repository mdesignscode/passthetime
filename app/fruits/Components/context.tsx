"use client";

import { Dispatch, SetStateAction, createContext, useState } from "react";

export interface IFruitContext {
  showInfo: boolean;
  setShowInfo: Dispatch<SetStateAction<boolean>>;
  fruit: TFruit | null;
  setFruit: Dispatch<SetStateAction<TFruit | null>>;
}

export const initialFruitContext: IFruitContext = {
  showInfo: false,
  setShowInfo: () => {},
  fruit: null,
  setFruit: () => {},
};

export const FruitContext = createContext<IFruitContext>(initialFruitContext);

export function FruitProvider({ children }: { children: React.ReactNode }) {
  // Fruit state
  const [showInfo, setShowInfo] = useState(false);
  const [fruit, setFruit] = useState<TFruit | null>(null);

  // store object
  const store: IFruitContext = { showInfo, setShowInfo, fruit, setFruit };

  return (
    <FruitContext.Provider value={store}>{children}</FruitContext.Provider>
  );
}
