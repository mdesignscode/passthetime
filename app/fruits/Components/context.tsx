"use client";

import { Dispatch, SetStateAction, createContext, useState } from "react";

export interface IFruitContext {
  fruit: TFruit | null;
  setFruit: Dispatch<SetStateAction<TFruit | null>>;
}

export const initialFruitContext: IFruitContext = {
  fruit: null,
  setFruit: () => {},
};

export const FruitContext = createContext<IFruitContext>(initialFruitContext);

export function FruitProvider({ children }: { children: React.ReactNode }) {
  const [fruit, setFruit] = useState<TFruit | null>(null);

  const store: IFruitContext = { fruit, setFruit };

  return (
    <FruitContext.Provider value={store}>{children}</FruitContext.Provider>
  );
}
