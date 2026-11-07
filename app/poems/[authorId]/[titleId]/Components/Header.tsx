"use client";

import ArrowIcon from "@/Components/Icons/Arrow";
import Marquee from "@/Components/Marquee";
import classNames from "classnames";
import Link from "next/link";

interface IHeader {
  poemCount: number;
  title: string;
  authorIndex: number;
  poemIndex: number;
  author: TAuthor;
}

export default function Header({
  poemCount,
  title,
  authorIndex,
  poemIndex,
  author,
}: IHeader) {
  const authorLastPoemIndex = author?.poems?.at(-1)?.id,
    authorFirstPoemIndex = author?.poems?.at(0)?.id;

  const isLastAuthorPoem = authorLastPoemIndex === poemIndex,
    nextAuthorIndex = isLastAuthorPoem ? authorIndex + 1 : authorIndex,
    nextPoemLink = `/poems/${nextAuthorIndex}/${poemIndex + 1}`,
    isFirstAuthorPoem = authorFirstPoemIndex === poemIndex,
    previousAuthorIndex = isFirstAuthorPoem ? authorIndex - 1 : authorIndex,
    previousPoemLink = `/poems/${previousAuthorIndex}/${poemIndex - 1}`,
    isFirstPoem = poemIndex === 1,
    isLastPoem = poemIndex === poemCount;

  return (
    <>
      <Marquee title={title} />
      <nav aria-label="Poem navigation" className="flex justify-between gap-3">
        <Link
          className={classNames("key", { "pointer-events-none": isFirstPoem })}
          aria-disabled={isFirstPoem}
          tabIndex={isFirstPoem ? -1 : undefined}
          href={previousPoemLink}
          id="previous-poem"
          prefetch={!isFirstAuthorPoem}
        >
          <ArrowIcon className="-rotate-90" />
          Previous poem
        </Link>

        <Link
          className={classNames("key", { "pointer-events-none": isLastPoem })}
          aria-disabled={isLastPoem}
          tabIndex={isLastPoem ? -1 : undefined}
          href={nextPoemLink}
          id="next-poem"
          prefetch={!isLastAuthorPoem}
        >
          Next poem
          <ArrowIcon className="rotate-90" />
        </Link>
      </nav>
    </>
  );
}
