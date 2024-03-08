"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import QueryUrl from "./QueryUrl";
import SelectAuthor from "./SelectAuthor";
import SelectRandom from "./SelectRandom";
import SelectTitle from "./SelectTitle";
import { PoemsProvider } from "./context";

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

const containerVariants = {
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 0.3,
    },
  },
  hide: {
    opacity: 0,
  },
};

export const childrenVariants = {
  show: {
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
  hide: {
    y: 50,
    scale: 0.5,
  },
};

export default function PoemOptions({ poems, authors }: IPoemOptionsProps) {
  return (
    <LazyMotion features={domAnimation}>
      <PoemsProvider>
        <m.section
          variants={containerVariants}
          initial="hide"
          animate="show"
          className="flex mx-auto flex-col w-11/12 md:w-2/3 p-4 gap-4 border-2 border-dark rounded-lg"
        >
          <p className="font-bold text-sm md:text-base">
            Select one of 3 options below to view poems
          </p>

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

          <m.div variants={childrenVariants}>
            <QueryUrl />
          </m.div>
        </m.section>
      </PoemsProvider>
    </LazyMotion>
  );
}
