"use client";

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
        className={`${poemIndex === 1 && "pointer-events-none"}`}
        href={previousPoemLink}
      >
        <Image
          className={`transition-all rotate-180 md:w-7 md:h-7 ${
            poemIndex === 1 && "opacity-50"
          }`}
          src="/icons/next-svgrepo-com.svg"
          alt="Previous poem"
          width={20}
          height={20}
        />
      </Link>

      <h1 className="font-bold md:text-xl text-center">{title}</h1>

      <Link
        className={`${poemIndex === totalPoems && "pointer-events-none"}`}
        href={nextPoemLink}
      >
        <Image
          className={`md:w-7 md:h-7 ${
            poemIndex === totalPoems && "opacity-50"
          }`}
          src="/icons/next-svgrepo-com.svg"
          alt="Previous poem"
          width={20}
          height={20}
        />
      </Link>
    </section>
  );
}
