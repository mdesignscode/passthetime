"use client";

import dynamic from "next/dynamic";

const FruitInfo = dynamic(() => import("./FruitInfo"));
const FruitButton = dynamic(() => import("./FruitButton"));
import { useContext } from "react";
import { FruitContext } from "./context";

export type TFruit = {
    nutritions: {
        id: number;
        calories: number;
        fat: number;
        sugar: number;
        carbohydrates: number;
        protein: number;
    };
} & {
    id: number;
    name: string;
    family: string;
    order: string;
    genus: string;
    nutritionsId: number;
}

export default function RenderFruits({ fruits }: { fruits: TFruit[] }) {
  const { showInfo } = useContext(FruitContext);

  return (
    <>
      <section className="flex gap-4 flex-wrap w-10/12 mx-auto items-center justify-center p-4 md:flex-none flex-1">
        {fruits.map((fruit, index) => (
          <FruitButton index={index} key={fruit.id} fruit={{ ...fruit }} />
        ))}
      </section>

      {showInfo && <FruitInfo />}
    </>
  );
}
