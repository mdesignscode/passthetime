"use client";

import FruitButton from "./FruitButton";
import FruitInfo from "./FruitInfo";
import { FruitProvider } from "./context";

export default function RenderFruits({ fruits }: { fruits: TFruit[] }) {
  return (
    <FruitProvider>
      <div className="grid items-start gap-3 md:grid-cols-[1fr_19rem] md:gap-4">
        <section
          aria-label="Fruits list"
          className="wall grid-cols-[repeat(auto-fill,minmax(8.5rem,1fr))]"
        >
          {fruits.map((fruit) => (
            <FruitButton key={fruit.id} fruit={fruit} />
          ))}
        </section>

        <FruitInfo />
      </div>
    </FruitProvider>
  );
}
