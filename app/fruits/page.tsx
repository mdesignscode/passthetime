import { useMemo } from "react";
import { PrismaClient } from "@prisma/client";
import { FruitProvider } from "./Components/context";
import { mainElement } from "@/Components/TailwindClasses";
import RenderFruits from "./Components/RenderFruits";
import classNames from "classnames";

export default async function Page() {
  const prisma = useMemo(() => new PrismaClient(), []);
  const fruits = await prisma.fruit.findMany({
    include: {
      nutritions: true,
    },
  });
  return (
    <FruitProvider>
      <main className={classNames(mainElement, "overflow-y-auto")}>
        <h1 className="font-bold text-xl md:text-2xl">🍓🏝 Fruit Island 🏝🍓</h1>

        <p className="text-lg text-center w-8/12 md:text-xl">
          Dive into a fruity adventure like never before as we unravel the
          secrets of nature&#39;s sweet treasures. From the juicy sweetness of
          tropical pineapples to the crisp crunch of apples, we&#39;ve got a
          fruit for every palate.
        </p>

        <RenderFruits fruits={fruits} />
      </main>
    </FruitProvider>
  );
}
