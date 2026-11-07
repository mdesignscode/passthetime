import ArrowIcon from "@/Components/Icons/Arrow";
import Marquee from "@/Components/Marquee";
import { findRecipe, recipes } from "lib/data";
import Image from "next/image";
import Link from "next/link";

export function generateStaticParams() {
  return recipes.map(({ id }) => ({
    recipeId: id.toString(),
  }));
}

export default function Page({
  params: { recipeId },
}: {
  params: { recipeId: string };
}) {
  const recipe = findRecipe(parseInt(recipeId));

  return (
    recipe && (
      <main className="machine-main">
        <Marquee title={recipe.name} />

        <Link href="/recipes" className="key self-start">
          <ArrowIcon className="-rotate-90" />
          Back to recipes
        </Link>

        <div className="grid items-start gap-3 md:grid-cols-[minmax(16rem,26rem)_1fr] md:gap-4">
          <section aria-label="Recipe ingredients" className="flex flex-col gap-3">
            <div className="wall">
              <div className="relative aspect-square overflow-hidden rounded-sm">
                <Image
                  src={recipe.thumbnail}
                  alt={`Preview for ${recipe.name} dish`}
                  fill
                  sizes="(max-width: 768px) 100vw, 416px"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="receipt">
              <h2 className="mb-2 font-bold">Ingredients</h2>
              <table className="w-full border-collapse">
                <tbody>
                  {recipe.ingredients.map((ingredient, index) => (
                    <tr key={index} className="border-b border-dotted border-current align-top">
                      <th scope="row" className="py-0.5 pr-3 text-left font-normal">
                        {ingredient}
                      </th>
                      <td className="py-0.5 text-right font-semibold">
                        {recipe.measurements[index]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <div className="flex flex-col gap-3">
            <section aria-label="Recipe instructions" className="receipt">
              <h2 className="mb-2 font-bold">Instructions</h2>
              <ol className="flex max-w-[70ch] list-decimal flex-col gap-2 pl-6">
                {recipe.instructions
                  .split(".")
                  .map((instruction) => instruction.trim())
                  .filter(Boolean)
                  .map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                  ))}
              </ol>
            </section>

            <section
              className="flex flex-col gap-1 break-words text-sm"
              aria-label="More resources for recipe"
            >
              {recipe.source && (
                <cite className="not-italic">
                  Read more at{" "}
                  <Link className="underline underline-offset-2" href={recipe.source}>
                    {recipe.source}
                  </Link>
                </cite>
              )}
              {recipe.youtubeUrl && (
                <cite className="not-italic">
                  Watch the YouTube tutorial{" "}
                  <Link className="underline underline-offset-2" href={recipe.youtubeUrl}>
                    {recipe.youtubeUrl}
                  </Link>
                </cite>
              )}
            </section>
          </div>
        </div>
      </main>
    )
  );
}
