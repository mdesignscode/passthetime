"use client";

import { borderStyle, buttonDisabled } from "@/app/Components/TailwindClasses";
import { Prisma } from "prisma/generated/client";
import { Dispatch, MouseEvent, SetStateAction, useState } from "react";
import { TRecipe } from "./RecipeButton";
import classNames from "classnames";

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
    [tagCount, setTagCount] = useState(TAG_COUNT);

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

      <section
        aria-label="All tags"
        className="flex gap-2 flex-wrap justify-center"
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

      <section className="flex gap-4">
        <button
          disabled={tagCount === TAG_COUNT}
          type="button"
          onClick={handleShowLessTags}
          className={classNames(
            {
              [buttonDisabled]: tagCount === TAG_COUNT,
            },
            "font-bold hover:text-gray-600"
          )}
        >
          Show less tags
        </button>

        <button
          type="button"
          disabled={tagCount >= tags.length}
          className={classNames(
            {
              [buttonDisabled]: tagCount >= tags.length,
            },
            "font-bold hover:text-gray-600"
          )}
          onClick={handleShowMoreTags}
        >
          Show more tags
        </button>

        <button
          type="button"
          disabled={totalPages > 1}
          className={classNames(
            {
              [buttonDisabled]: totalPages > 1,
            },
            "font-bold hover:text-gray-600"
          )}
          onClick={clearTag}
        >
          Clear tag
        </button>
      </section>
    </section>
  );
}
