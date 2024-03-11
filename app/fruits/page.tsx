import prisma from "@/lib/prisma";
import classNames from "classnames";
import dynamic from "next/dynamic";
import { mainElement } from "../Components/TailwindClasses";

const RenderFruits = dynamic(() => import("./Components/RenderFruits"));

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

      <p className="text-lg text-center w-10/12 md:w-8/10 md:text-xl">
       Find out how much nutritional value the fruits you consume daily contains, and the families they belong to.
      </p>

      <RenderFruits fruits={await fruits} />
    </main>
  );
}
