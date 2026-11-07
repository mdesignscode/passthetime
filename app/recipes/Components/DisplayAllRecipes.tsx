"use client";

import ArrowIcon from "@/Components/Icons/Arrow";
import usePaginateList from "@/hooks/paginateList";
import { useState } from "react";
import FilterRecipes from "./FilterRecipes";
import RecipeButton from "./RecipeButton";

function scrollToTop() {
  document.querySelector("main")?.scrollTo({ top: 0, behavior: "smooth" });
}

export default function DisplayAllRecipes({
  recipes,
  tags,
}: {
  recipes: TRecipe[];
  tags: string[];
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
    <section className="flex flex-col gap-3 md:gap-4">
      <FilterRecipes
        setPartialList={setPartialList}
        tags={tags}
        recipes={recipes}
        setPageIndex={setPageIndex}
        setCurrentIndex={setCurrentIndex}
        setTotalPages={setTotalPages}
        PAGE_COUNT={PAGE_COUNT}
        TOTAL_PAGES_INITIALLY={TOTAL_PAGES_INITIALLY}
      />

      <section
        aria-label="All recipes"
        id="recipesList"
        className="wall grid-cols-[repeat(auto-fill,minmax(14rem,1fr))]"
      >
        {partialList.map((recipe) => (
          <RecipeButton key={recipe.id} recipe={recipe} />
        ))}
      </section>

      <section
        aria-label="Paginate recipes"
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <PreviousButton disabled={pageIndex <= 1} onPress={scrollToTop} />
        <p>
          Page {pageIndex} of {totalPages}
        </p>
        <NextButton disabled={pageIndex >= totalPages} onPress={scrollToTop} />
        <button
          type="button"
          aria-label="Scroll to top"
          className="key"
          onClick={scrollToTop}
        >
          <ArrowIcon />
        </button>
      </section>
    </section>
  );
}
