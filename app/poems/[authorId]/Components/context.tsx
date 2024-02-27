"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface IActivePoem {
  title: string;
  lines: string;
}

export interface IAuthorContext {
  poem: IActivePoem | null;
  setPoem: Dispatch<SetStateAction<IActivePoem | null>>;
}

export const initialAuthorContext: IAuthorContext = {
  poem: null,
  setPoem: () => {},
};

export const AuthorContext =
  createContext<IAuthorContext>(initialAuthorContext);

export function AuthorProvider({ children }: { children: React.ReactNode }) {
  // Author state
  const [poem, setPoem] = useState<IActivePoem | null>(null);

  // store object
  const store: IAuthorContext = { poem, setPoem };

  return (
    <AuthorContext.Provider value={store}>{children}</AuthorContext.Provider>
  );
}
