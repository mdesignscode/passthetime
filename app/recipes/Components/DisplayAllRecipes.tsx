"use client";

import { borderStyle, buttonDisabled } from "@/Components/TailwindClasses";
import usePaginateList from "@/hooks/paginateList";
import { Prisma } from "@prisma/client";
import { MouseEvent, useState } from "react";
import RecipeButton, { TRecipe } from "./RecipeButton";

export default function DisplayAllRecipes({
  recipes,
  tags,
}: {
  recipes: TRecipe[];
  tags: (Prisma.PickEnumerable<Prisma.TagsGroupByOutputType, "name"[]> & {})[];
}) {
  const PAGE_COUNT = 15,
    TAG_COUNT = 20,
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
    [totalPages, setTotalPages] = useState(TOTAL_PAGES_INITIALLY),
    [tagCount, setTagCount] = useState(TAG_COUNT);

  function handleShowMoreTags() {
    setTagCount((state) => state + TAG_COUNT);
  }

  function handleShowLessTags() {
    setTagCount((state) => state - TAG_COUNT);
  }

  function handleFilterByTags(event: MouseEvent<HTMLButtonElement>) {
    const filter = (event?.target as any).value,
      filteredList: TRecipe[] = [];

    // find recipes that with tags match filter
    for (const recipe of recipes) {
      for (const tag of recipe.tags) {
        if (tag.name === filter) {
          filteredList.push(recipe);
          break;
        }
      }
    }

    updatePageState(
      filteredList,
      Math.floor(filteredList.length / PAGE_COUNT) + 1
    );
  }

  function clearTag() {
    updatePageState(recipes.slice(0, PAGE_COUNT), TOTAL_PAGES_INITIALLY);
  }

  function updatePageState(list: TRecipe[], pages: number) {
    setPartialList(list);
    setTotalPages(pages);
    // reset pagination count
    setPageIndex(1);
    setCurrentIndex(0);
  }

  return (
    <section className="flex flex-col items-center gap-4">
      {/* filter by tags */}
      <section
        className={`${borderStyle} flex flex-col gap-2 items-center w-5/6`}
      >
        <p>Filter recipes by tags</p>

        <section className="flex gap-2 flex-wrap justify-center">
          {tags.slice(0, tagCount).map((tag) => (
            <button
              onClick={handleFilterByTags}
              className="hover:text-gray-600"
              key={tag.name}
              value={tag.name}
            >
              #{tag.name}
            </button>
          ))}
        </section>

        <section className="flex gap-4">
          <button
            type="button"
            onClick={handleShowLessTags}
            className={`${
              tagCount === TAG_COUNT && buttonDisabled
            } font-bold hover:text-gray-600`}
          >
            Show less tags
          </button>

          <button
            type="button"
            className={`${
              tagCount >= tags.length && buttonDisabled
            } font-bold hover:text-gray-600`}
            onClick={handleShowMoreTags}
          >
            Show more tags
          </button>

          <button
            type="button"
            className={`${
              totalPages > 1 && buttonDisabled
            } font-bold hover:text-gray-600`}
            onClick={clearTag}
          >
            Clear tag
          </button>
        </section>
      </section>

      <section className="w-5/6 flex flex-col items-center gap-4">
        {/* list of recipes */}
        <section className="flex flex-col md:flex-row md:flex-wrap md:items-center md:justify-center gap-4">
          {partialList.map((recipe, index) => (
            <RecipeButton key={recipe.id} index={index} recipe={recipe} />
          ))}
        </section>

        {/* paginate section */}
        <section className="flex gap-4 text-lg items-center">
          <span className="-rotate-90">
            <PreviousButton />
          </span>
          <p>
            Page {pageIndex} of {totalPages}
          </p>
          <span
            className={`${
              pageIndex >= totalPages && buttonDisabled
            } -rotate-90`}
          >
            <NextButton />
          </span>
        </section>
      </section>
    </section>
  );
}
