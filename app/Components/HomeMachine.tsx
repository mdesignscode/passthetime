"use client";

import { GlobalContext, initialGlobalContext } from "@/context/globalContext";
import useDispense from "@/hooks/useDispense";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { MouseEvent, ReactNode, useContext } from "react";
import DiceIcon from "./Icons/Dice";
import Keypad from "./Keypad";
import Marquee from "./Marquee";
import Packet from "./Packet";
import { findSlot } from "./slots";

interface IHomeMachine {
  fruits: string[];
  fruitCount: number;
  recipes: { name: string; thumbnail: string }[];
  recipeCount: number;
  poemTitle: string;
  poemAuthor: string;
  poemLines: string[];
  poemCount: number;
  authorCount: number;
  objects: string[];
  objectCount: number;
  artwork: TArtwork;
  artworkCount: number;
  triviaCategories: string[];
  triviaCount: number;
  card: TCard;
  cardCount: number;
  joke: string;
  jokeCount: number;
}

function Compartment({
  code,
  title,
  fact,
  className,
  isCompact = false,
  children,
}: {
  code: string;
  title: string;
  fact: string;
  className?: string;
  /** Half width on phones, where the rail only has room for the title. */
  isCompact?: boolean;
  children: ReactNode;
}) {
  const slot = findSlot(code)!,
    dispense = useDispense();

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    // leave new-tab and new-window clicks to the browser
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    dispense(slot);
  }

  return (
    <Link
      href={slot.path}
      data-slot={code}
      onClick={handleClick}
      className={classNames("slot min-h-0", className)}
    >
      <span className="slot-goods slot-recess flex items-stretch gap-2 overflow-hidden [&_.packet]:min-h-0">
        {children}
      </span>
      <span className="rail !py-1.5">
        <span className="flex min-w-0 items-center gap-2">
          <span className="code">{code}</span>
          <span className="stamp truncate text-lg leading-none text-ink">
            {title}
          </span>
        </span>
        <span className={classNames("flex-none", isCompact && "hidden sm:inline")}>
          {fact}
        </span>
      </span>
    </Link>
  );
}

export default function HomeMachine({
  fruits,
  fruitCount,
  recipes,
  recipeCount,
  poemTitle,
  poemAuthor,
  poemLines,
  poemCount,
  authorCount,
  objects,
  objectCount,
  artwork,
  artworkCount,
  triviaCategories,
  triviaCount,
  card,
  cardCount,
  joke,
  jokeCount,
}: IHomeMachine) {
  const { machineMessage } = useContext(GlobalContext);

  return (
    <main className="machine-main">
      <Marquee title="Bored? Pass The Time" large />

      <p className="marquee-note md:text-lg">
        Alleviate your boredom by engaging in diverse activities from various
        domains!
      </p>

      {/* on large screens the wall shares the viewport's height instead of growing to its contents */}
      <div className="grid flex-1 gap-3 md:gap-4 lg:min-h-[28rem] lg:grid-cols-[1fr_17rem] lg:[grid-template-rows:minmax(0,1fr)]">
        <section
          aria-label="Activities"
          className="wall grid-cols-2 lg:min-h-0 auto-rows-[minmax(10rem,1fr)] md:grid-cols-12 md:[grid-template-rows:minmax(8.5rem,1.15fr)_repeat(2,minmax(8.5rem,1fr))]"
        >
          <Compartment
            code="A1"
            title="Fruits"
            fact={`${fruitCount} fruits`}
            className="col-span-2 md:col-span-5"
          >
            {fruits.map((fruit, index) => (
              <Packet
                key={fruit}
                name={fruit}
                className={classNames(
                  "flex-1 !text-base md:!text-xl",
                  index > 2 && "hidden sm:flex"
                )}
              />
            ))}
          </Compartment>

          <Compartment
            isCompact
            code="A2"
            title="Recipes"
            fact={`${recipeCount} recipes`}
            className="md:col-span-4"
          >
            {recipes.map((recipe, index) => (
              <span
                key={recipe.name}
                data-packet
                className={classNames(
                  "relative block min-h-24 flex-1 lg:min-h-0 overflow-hidden rounded-sm shadow-md transition-transform",
                  index > 0 && "hidden sm:block"
                )}
              >
                <Image src={recipe.thumbnail} alt="" fill sizes="240px" className="object-cover" />
              </span>
            ))}
          </Compartment>

          <Compartment isCompact code="A3" title="Art Gallery" fact={`${artworkCount} works`} className="md:col-span-3">
            <span
              data-packet
              className="relative block min-h-24 flex-1 lg:min-h-0 overflow-hidden rounded-sm shadow-md transition-transform"
            >
              <Image src={artwork.image} alt="" fill sizes="240px" className="object-cover" />
            </span>
          </Compartment>

          <Compartment
            code="B1"
            title="Rock, Paper, Scissors"
            fact={`${objectCount} objects`}
            className="col-span-2 md:col-span-4"
          >
            {objects.map((object) => (
              <Packet
                key={object}
                name={object}
                className="flex-1 !text-base md:!text-xl"
              />
            ))}
          </Compartment>

          <Compartment isCompact code="B2" title="Poems" fact={`${poemCount} poems`} className="md:col-span-5">
            <span data-packet className="receipt block w-full overflow-hidden !p-3 !pb-6 !text-sm !leading-snug transition-transform">
              <strong className="block truncate">
                {poemTitle} by {poemAuthor}
              </strong>
              {poemLines.map((line, index) => (
                <span className="block truncate" key={index}>
                  {line}
                </span>
              ))}
            </span>
          </Compartment>

          <Compartment isCompact code="B3" title="Random Poem" fact={`${authorCount} poets`} className="md:col-span-3">
            <span data-packet className="packet goods-1 w-full items-center justify-center [&_svg]:h-24 [&_svg]:w-24">
              <DiceIcon />
            </span>
          </Compartment>

          <Compartment
            code="C1"
            title="Trivia"
            fact={`${triviaCount} questions`}
            className="col-span-2 md:col-span-5"
          >
            {triviaCategories.map((category) => (
              <Packet
                key={category}
                name={category}
                className="flex-1 !text-base md:!text-lg"
              />
            ))}
          </Compartment>

          <Compartment isCompact code="C2" title="Higher or Lower" fact={`${cardCount} cards`} className="md:col-span-3">
            <span data-packet className="relative block min-h-24 flex-1 lg:min-h-0 transition-transform">
              <Image src={card.image} alt="" fill sizes="120px" className="object-contain" />
            </span>
            <span className="relative hidden min-h-24 flex-1 lg:min-h-0 sm:block">
              <Image src="/images/cards/back.webp" alt="" fill sizes="120px" className="object-contain" />
            </span>
          </Compartment>

          <Compartment isCompact code="C3" title="Jokes" fact={`${jokeCount} jokes`} className="md:col-span-4">
            <span
              data-packet
              className="receipt block w-full overflow-hidden !p-3 !pb-6 !text-sm !leading-snug transition-transform"
            >
              {joke}
            </span>
          </Compartment>
        </section>

        <aside aria-label="Control panel" className="panel flex flex-col gap-3">
          <Keypad id="home-keypad" />
          <p className="text-sm leading-snug text-on-enamel">
            Punch the code on a slot&apos;s rail, or click the slot.
          </p>
          <div data-flap aria-hidden="true" className="flap mt-auto">
            <span className="flap-door stamp">Push</span>
          </div>
        </aside>
      </div>

      {/* the panel's display is off screen on phones and tablets during a drop */}
      {machineMessage !== initialGlobalContext.machineMessage && (
        <p
          aria-hidden="true"
          className="marquee fixed inset-x-3 bottom-3 z-40 text-xl lg:hidden"
        >
          {machineMessage}
        </p>
      )}
    </main>
  );
}
