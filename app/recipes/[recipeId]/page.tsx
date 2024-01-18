import { backgroundLight, mainElement } from "@/Components/TailwindClasses";
import { PrismaClient } from "@prisma/client";
import { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";

export default async function Page({
  params: { recipeId },
}: {
  params: { recipeId: string };
}) {
  const prisma = useMemo(() => new PrismaClient(), []),
    recipe = await prisma.recipe.findUnique({
      where: {
        id: parseInt(recipeId),
      },
      include: {
        measurements: true,
        ingredients: true,
      },
    });

  return (
    recipe && (
      <main className={`${mainElement}`}>
        <h1 className="text-lg font-bold md:text-4xl flex gap-4 justify-center items-center">
          Recipe for: {recipe.name}
          {""}
          <Link href="/recipes">
            <Image
              src="/icons/next-svgrepo-com.svg"
              alt="Back to recipes"
              width={30}
              height={30}
              className="rotate-180 md:w-9 md:h-9 hover:opacity-75 active:opacity-100"
            />
          </Link>
        </h1>

        <section
          className={`${backgroundLight} overflow-y-auto flex-1 flex flex-col gap-4`}
        >
          {/* ingredients section */}
          <section>
            <strong>Ingredients</strong>

            <section className="flex gap-8 mt-2">
              <Image
                className="hidden md:block rounded-lg"
                src={recipe.thumbnail}
                alt={`Preview for ${recipe.name} dish`}
                width={150}
                height={150}
              />

              <section className="flex gap-4">
                <section>
                  {recipe.ingredients.map((ingredient) => (
                    <p key={ingredient.id}>{ingredient.name}</p>
                  ))}
                </section>
                <section>
                  {recipe.measurements.map((measurement) => (
                    <p key={measurement.id}>{measurement.name}</p>
                  ))}
                </section>
              </section>
            </section>
          </section>

          {/* instructions section */}
          <section>
            <strong>Instructions</strong>
            <ol className="list-decimal list-inside">
              {recipe.instructions
                .split(".")
                .filter(Boolean)
                .map((instruction) => (
                  <li key={instruction}>{instruction}</li>
                ))}
            </ol>
          </section>

          <section className="flex flex-col gap-2">
            {recipe.source && (
              <cite className="text-gray-600">
                Read more at{" "}
                <Link className="underline" href={recipe.source}>
                  {recipe.source}
                </Link>
              </cite>
            )}
            {recipe.youtubeUrl && (
              <cite className="text-gray-600">
                Watch the YouTube tutorial{" "}
                <Link className="underline" href={recipe.youtubeUrl}>
                  {recipe.youtubeUrl}
                </Link>
              </cite>
            )}
          </section>
        </section>
      </main>
    )
  );
}
