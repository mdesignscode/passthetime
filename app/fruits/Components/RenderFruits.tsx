"use client";

import dynamic from "next/dynamic";

const FruitInfo = dynamic(() => import("./FruitInfo"));
const FruitButton = dynamic(() => import("./FruitButton"));
import { useContext } from "react";
import { FruitContext, FruitProvider } from "./context";
import classNames from "classnames";
import { flexCenter } from "@/Components/TailwindClasses";

export default function RenderFruits({ fruits }: { fruits: TFruit[] }) {
  const { showInfo } = useContext(FruitContext);

  return (
    <FruitProvider>
      <section
        className={classNames(
          "gap-4 flex-wrap w-10/12 mx-auto p-4 md:flex-none flex-1",
          flexCenter
        )}
        aria-label="Fruits list"
      >
        {fruits.map((fruit, index) => (
          <FruitButton index={index} key={fruit.id} fruit={{ ...fruit }} />
        ))}
      </section>

      {showInfo && <FruitInfo />}
    </FruitProvider>
  );
}
