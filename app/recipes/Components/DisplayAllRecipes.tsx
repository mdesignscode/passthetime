"use client";

import ArrowIcon from "@/Components/Icons/Arrow";
import { buttonDisabled } from "@/Components/TailwindClasses";
import usePaginateList from "@/hooks/paginateList";
import classNames from "classnames";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Prisma } from "prisma/generated/client";
import { useState } from "react";
import FilterRecipes from "./FilterRecipes";
import { TRecipe } from "./RecipeButton";

const RecipeButton = dynamic(() => import("./RecipeButton"));
const ScaleIn = dynamic(() => import("@/Components/ScaleIn"), { ssr: false });

export default function DisplayAllRecipes({
  recipes,
  tags,
}: {
  recipes: TRecipe[];
  tags: (Prisma.PickEnumerable<Prisma.TagsGroupByOutputType, "name"[]> & {})[];
}) {
  const PAGE_COUNT = 15,
    {
      partialList,
      NextButton,
      PreviousButton,
      setPartialList,
      pageIndex,
      setPageIndex,
      setCurrentIndex,
    } = usePaginateList<TRecipe>(recipes, PAGE_COUNT),
    TOTAL_PAGES_INITIALLY = Math.floor(recipes.length / PAGE_COUNT),
    [totalPages, setTotalPages] = useState(TOTAL_PAGES_INITIALLY);

  return (
    <section className="flex flex-col items-center gap-4">
      {/* filter by tags */}
      <FilterRecipes
        setPartialList={setPartialList}
        tags={tags}
        recipes={recipes}
        setPageIndex={setPageIndex}
        setCurrentIndex={setCurrentIndex}
        setTotalPages={setTotalPages}
        PAGE_COUNT={PAGE_COUNT}
        TOTAL_PAGES_INITIALLY={TOTAL_PAGES_INITIALLY}
        totalPages={totalPages}
      />

      <section
        aria-label="All recipes"
        id="recipesList"
        className="w-5/6 flex flex-col items-center gap-4"
      >
        {/* list of recipes */}
        <section className="flex flex-col md:flex-row md:flex-wrap md:items-center md:justify-center gap-4">
          {partialList.map((recipe, index) => (
            <RecipeButton key={recipe.id} index={index} recipe={recipe} />
          ))}
        </section>
        {/* paginate section */}
        <ScaleIn>
          <section
            aria-label="Paginate recipes"
            className="flex gap-4 text-lg items-center"
          >
            <Link href="/recipes#recipesList" className="-rotate-90">
              <PreviousButton />
            </Link>
            <p>
              Page {pageIndex} of {totalPages}
            </p>
            <Link
              href="/recipes#recipesList"
              className={classNames(
                { [buttonDisabled]: pageIndex >= totalPages },
                "-rotate-90"
              )}
            >
              <NextButton />
            </Link>

            <button
              aria-label="Scroll to top"
              onClick={() =>
                document
                  .querySelector("main")
                  ?.scrollTo({ top: 0, behavior: "smooth" })
              }
              className="text-light animate__shakeY animate__animated"
            >
              <ArrowIcon />
            </button>
          </section>
        </ScaleIn>
      </section>
    </section>
  );
}
