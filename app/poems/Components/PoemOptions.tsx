"use client";

import dynamic from "next/dynamic";
import { PoemsProvider } from "./context";

const SelectAuthor = dynamic(() => import("./SelectAuthor"));
const SelectRandom = dynamic(() => import("./SelectRandom"));
const SelectTitle = dynamic(() => import("./SelectTitle"));
const QueryUrl = dynamic(() => import("./QueryUrl"));

type TAuthor = {
  id: number;
  name: string;
};

type TPoem = {
  Author: {
    id: number;
    name: string;
  } | null;
} & {
  id: number;
  title: string;
  lines: string;
  authorId: number | null;
};

interface IPoemOptionsProps {
  authors: TAuthor[];
  poems: TPoem[];
}

export default function PoemOptions({ poems, authors }: IPoemOptionsProps) {
  return (
    <PoemsProvider>
      <section className="flex m-auto flex-col w-11/12 md:w-2/3 p-4 gap-4 border-2 border-dark rounded-lg">
        <p className="font-bold">Select one of 3 options below to view poems</p>

        <SelectAuthor
          authors={authors.map((author) => ({
            name: author.name,
            id: author.id,
          }))}
        />

        <SelectTitle
          titles={Object.values(poems).map((poem) => ({
            author: poem.Author?.name,
            authorId: poem.Author?.id,
            title: poem.title,
            titleId: poem.id,
          }))}
        />

        <SelectRandom />

        <QueryUrl />
      </section>
    </PoemsProvider>
  );
}
