"use client";

import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

interface IHeader {
  poems: TPoem[];
  title: string;
  authorIndex: number;
  poemIndex: number;
  author: TAuthor;
}

export default function Header({
  poems,
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
    previousPoemLink = `/poems/${previousAuthorIndex}/${poemIndex - 1}`;

  return (
    <section className="flex justify-between border-b-2 sticky top-0 rounded-t-lg bg-light border-dark items-center pb-2 gap-3">
      <Link
        className={classNames({ "pointer-events-none": poemIndex === 1 })}
        href={previousPoemLink}
      >
        <Image
          className={classNames("transition-all rotate-180 md:w-7 md:h-7", {
            "opacity-50": poemIndex === 1,
          })}
          src="/icons/next-svgrepo-com.svg"
          alt="Previous poem"
          width={50}
          height={50}
        />
      </Link>

      <h1 className="font-bold md:text-xl text-center truncate">{title}</h1>

      <Link
        className={classNames({
          "pointer-events-none": poemIndex === poems.length,
        })}
        href={nextPoemLink}
      >
        <Image
          className={classNames("md:w-7 md:h-7", {
            "opacity-50": poemIndex === poems.length,
          })}
          src="/icons/next-svgrepo-com.svg"
          alt="Previous poem"
          width={50}
          height={50}
        />
      </Link>
    </section>
  );
}
