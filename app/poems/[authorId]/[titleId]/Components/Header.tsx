"use client";

import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

interface IHeader {
  totalPoems: number;
  title: string;
  authorIndex: number;
  poemIndex: number;
  authorLastPoemIndex?: number;
  authorFirstPoemIndex?: number;
}

export default function Header({
  totalPoems,
  title,
  authorIndex,
  poemIndex,
  authorFirstPoemIndex,
  authorLastPoemIndex,
}: IHeader) {
  const isLastAuthorPoem = authorLastPoemIndex === poemIndex,
    nextAuthorIndex = isLastAuthorPoem ? authorIndex + 1 : authorIndex,
    nextPoemLink = `/poems/${nextAuthorIndex}/${poemIndex + 1}`,
    isFirstAuthorPoem = authorFirstPoemIndex === poemIndex,
    previousAuthorIndex = isFirstAuthorPoem ? authorIndex - 1 : authorIndex,
    previousPoemLink = `/poems/${previousAuthorIndex}/${poemIndex - 1}`;

  return (
    <section className="flex justify-between border-b-2 sticky top-0 rounded-t-lg bg-light border-dark items-center pb-2">
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
          width={20}
          height={20}
        />
      </Link>

      <h1 className="font-bold md:text-xl text-center">{title}</h1>

      <Link
        className={classNames({
          "pointer-events-none": poemIndex === totalPoems,
        })}
        href={nextPoemLink}
      >
        <Image
          className={classNames("md:w-7 md:h-7", {
            "opacity-50": poemIndex === totalPoems,
          })}
          src="/icons/next-svgrepo-com.svg"
          alt="Previous poem"
          width={20}
          height={20}
        />
      </Link>
    </section>
  );
}
