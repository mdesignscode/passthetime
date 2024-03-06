import prisma from "@/lib/prisma";
import classNames from "classnames";
import dynamic from "next/dynamic";
import { mainElement } from "../Components/TailwindClasses";

const RenderFruits = dynamic(() => import("./Components/RenderFruits"), {
  ssr: false,
});

export default async function Page() {
  const fruits = prisma.fruit.findMany({
    include: {
      nutritions: true,
    },
  });

  return (
    <main
      aria-label="Fruits page"
      className={classNames(mainElement, "overflow-y-auto")}
    >
      <h1 className="font-bold text-xl md:text-2xl">🍓🏝 Fruit Island 🏝🍓</h1>

      <p className="text-lg text-center w-8/12 md:text-xl">
        Dive into a fruity adventure like never before as we unravel the secrets
        of nature&#39;s sweet treasures. From the juicy sweetness of tropical
        pineapples to the crisp crunch of apples, we&#39;ve got a fruit for
        every palate.
      </p>

      <RenderFruits fruits={await fruits} />
    </main>
  );
}
