"use client";

import Link from "next/link";
import QueryUrl from "./QueryUrl";
import SelectAuthor from "./SelectAuthor";
import SelectRandom from "./SelectRandom";
import SelectTitle from "./SelectTitle";
import { PoemsProvider } from "./context";

interface IPoemOptionsProps {
  authors: { id: number; name: string }[];
  poems: TPoemWithAuthor[];
}

export default function PoemOptions({ poems, authors }: IPoemOptionsProps) {
  return (
    <PoemsProvider>
      <section className="panel flex max-w-3xl flex-col gap-4 p-4">
        <p className="stamp text-lg">
          Select one of 3 options below to view poems
        </p>

        <div className="grid gap-4 md:grid-cols-2">
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
        </div>

        <SelectRandom />

        <QueryUrl />
      </section>

      <section
        aria-label="Browse poets"
        className="wall grid-cols-[repeat(auto-fill,minmax(11rem,1fr))]"
      >
        {authors.map((author) => {
          const poemCount = poems.filter((poem) => poem.authorId === author.id).length;

          return (
          <Link key={author.id} href={`/poems/${author.id}`} className="slot">
            <span className="slot-goods stamp block text-xl leading-tight">
              {author.name}
            </span>
            <span className="rail">
              <span>
                {poemCount} {poemCount === 1 ? "poem" : "poems"}
              </span>
            </span>
          </Link>
          );
        })}
      </section>
    </PoemsProvider>
  );
}
