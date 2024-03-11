"use client";

import { flexCenter } from "@/Components/TailwindClasses";
import classNames from "classnames";
import { useContext } from "react";
import FruitButton from "./FruitButton";
import FruitInfo from "./FruitInfo";
import { FruitContext, FruitProvider } from "./context";

export default function RenderFruits({ fruits }: { fruits: TFruit[] }) {
  const { showInfo } = useContext(FruitContext);

  return (
    <FruitProvider>
      <section
        className={classNames(
          "gap-4 flex-wrap w-10/12 mx-auto md:my-auto md:flex-none flex-1",
          flexCenter
        )}
        aria-label="Fruits list"
      >
        {fruits.map((fruit, index) => (
          <FruitButton index={index} key={fruit.id} fruit={{ ...fruit }} />
        ))}
      </section>

      <FruitInfo />
    </FruitProvider>
  );
}
