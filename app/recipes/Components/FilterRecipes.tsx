"use client";

import { borderStyle, buttonDisabled } from "@/app/Components/TailwindClasses";
import { Prisma } from "prisma/generated/client";
import { Dispatch, MouseEvent, SetStateAction, useState } from "react";
import { TRecipe } from "./RecipeButton";
import classNames from "classnames";
import ArrowIcon from "@/app/Components/Icons/Arrow";

interface FilterRecipesProps {
  tags: (Prisma.PickEnumerable<Prisma.TagsGroupByOutputType, "name"[]> & {})[];
  recipes: TRecipe[];
  setPartialList: Dispatch<SetStateAction<TRecipe[]>>;
  setPageIndex: Dispatch<SetStateAction<number>>;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
  setTotalPages: Dispatch<SetStateAction<number>>;
  TOTAL_PAGES_INITIALLY: number;
  PAGE_COUNT: number;
  totalPages: number;
}

export default function FilterRecipes({
  tags,
  recipes,
  setPartialList,
  setPageIndex,
  setCurrentIndex,
  setTotalPages,
  PAGE_COUNT,
  TOTAL_PAGES_INITIALLY,
  totalPages,
}: FilterRecipesProps) {
  const TAG_COUNT = 20,
    [tagCount, setTagCount] = useState(0);

  function updatePageState(list: TRecipe[], pages: number) {
    setPartialList(list);
    setTotalPages(pages);
    // reset pagination count
    setPageIndex(1);
    setCurrentIndex(0);
  }

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

  return (
    <section
      className={`${borderStyle} flex flex-col gap-2 items-center w-5/6`}
      aria-label="Filter recipes"
    >
      <p>Filter recipes by tags</p>

      {!!tagCount && (
        <section
          aria-label="All tags"
          className="flex gap-2 flex-wrap justify-center text-xs md:text-sm"
        >
          {tags.slice(0, tagCount).map((tag) => (
            <button
              onClick={handleFilterByTags}
              className="hover:text-gray-600"
              key={tag.name}
              value={tag.name}
              aria-label={`Show recipes by ${tag.name}`}
              aria-controls="recipesList"
            >
              #{tag.name}
            </button>
          ))}
        </section>
      )}

      <section className="flex gap-4">
        <button
          disabled={tagCount <= TAG_COUNT}
          type="button"
          onClick={handleShowLessTags}
          className={classNames(
            {
              [buttonDisabled]: tagCount <= TAG_COUNT,
            },
            "md:font-bold hover:text-gray-600 text-sm md:text-base"
          )}
        >
          <span className="hidden md:inline">show </span>less tags
        </button>

        <button
          type="button"
          disabled={tagCount >= tags.length}
          className={classNames(
            {
              [buttonDisabled]: tagCount >= tags.length,
            },
            "md:font-bold hover:text-gray-600 text-sm md:text-base"
          )}
          onClick={handleShowMoreTags}
        >
          <span className="hidden md:inline">show </span>more tags
        </button>

        <button
          type="button"
          disabled={totalPages > 1}
          className={classNames(
            {
              [buttonDisabled]: totalPages > 1,
            },
            "md:font-bold hover:text-gray-600 text-sm md:text-base"
          )}
          onClick={clearTag}
        >
          clear<span className="hidden md:inline"> tag</span>
        </button>
      </section>

      <button
        type="button"
        onClick={() => setTagCount(tagCount ? 0 : 20)}
        className={classNames(
          "md:font-bold hover:text-gray-600 text-sm md:text-base"
        )}
      >
        {tagCount ? "hide tags" : "show tags"}
      </button>
    </section>
  );
}
