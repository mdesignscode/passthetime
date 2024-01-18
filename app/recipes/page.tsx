import { mainElement } from "@/Components/TailwindClasses";
import { PrismaClient } from "@prisma/client";
import { useMemo } from "react";
import DisplayAllRecipes from "./Components/DisplayAllRecipes";

export default async function Page() {
  const prisma = useMemo(() => new PrismaClient(), []),
    allRecipes = await prisma.recipe.findMany({
      include: {
        measurements: true,
        ingredients: true,
        tags: true
      },
      orderBy: [
        {
          name: "asc",
        },
      ],
    }),
    allTags = await prisma.tags.groupBy({
      by: ["name"]
    })

  return (
    <main className={`${mainElement} overflow-y-auto`}>
      <h1 className="font-bold text-xl md:text-2xl">
        🧆🍢 Delightful Delicacies 🍢🧆
      </h1>

      <p className="w-10/12 text-center md:text-lg">
        Welcome to our culinary haven, where the aroma of creativity meets the
        joy of flavors! Discover a treasure trove of mouthwatering recipes that
        cater to every palate. Our curated collection showcases a blend of
        tradition and innovation, offering a delightful journey through the
        world of gastronomy.
      </p>

      <DisplayAllRecipes tags={allTags} recipes={allRecipes} />
    </main>
  );
}