"use client";

import { Dispatch, SetStateAction, useState } from "react";

interface FilterRecipesProps {
  tags: string[];
  recipes: TRecipe[];
  setPartialList: Dispatch<SetStateAction<TRecipe[]>>;
  setPageIndex: Dispatch<SetStateAction<number>>;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
  setTotalPages: Dispatch<SetStateAction<number>>;
  TOTAL_PAGES_INITIALLY: number;
  PAGE_COUNT: number;
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
}: FilterRecipesProps) {
  const TAG_COUNT = 20,
    [tagCount, setTagCount] = useState(0),
    [activeTag, setActiveTag] = useState<string | null>(null);

  function updatePageState(list: TRecipe[], pages: number) {
    setPartialList(list);
    setTotalPages(pages);
    // reset pagination count
    setPageIndex(1);
    setCurrentIndex(0);
  }

  function handleFilterByTags(filter: string) {
    const filteredList = recipes.filter((recipe) =>
      recipe.tags.includes(filter)
    );

    setActiveTag(filter);
    // a filtered list is shown whole on one page
    updatePageState(filteredList, 1);
  }

  function clearTag() {
    setActiveTag(null);
    updatePageState(recipes.slice(0, PAGE_COUNT), TOTAL_PAGES_INITIALLY);
  }

  return (
    <section className="panel flex flex-col gap-3" aria-label="Filter recipes">
      <div className="flex flex-wrap items-center gap-2">
        <p className="stamp mr-auto text-lg">Filter recipes by tags</p>

        <button
          type="button"
          className="key !min-h-9 text-sm"
          onClick={() => setTagCount(tagCount ? 0 : TAG_COUNT)}
        >
          {tagCount ? "hide tags" : "show tags"}
        </button>
        <button
          disabled={tagCount <= TAG_COUNT}
          type="button"
          className="key !min-h-9 text-sm"
          onClick={() => setTagCount((state) => state - TAG_COUNT)}
        >
          show less tags
        </button>
        <button
          type="button"
          disabled={tagCount >= tags.length}
          className="key !min-h-9 text-sm"
          onClick={() => setTagCount((state) => state + TAG_COUNT)}
        >
          show more tags
        </button>
        <button
          type="button"
          disabled={!activeTag}
          className="key !min-h-9 text-sm"
          onClick={clearTag}
        >
          clear tag
        </button>
      </div>

      {!!tagCount && (
        <section aria-label="All tags" className="flex flex-wrap gap-1.5">
          {tags.slice(0, tagCount).map((tag) => (
            <button
              type="button"
              onClick={() => handleFilterByTags(tag)}
              className={`min-h-8 rounded px-2 text-sm font-medium text-ink transition-colors ${
                activeTag === tag ? "bg-signal" : "bg-glass hover:bg-white"
              }`}
              key={tag}
              value={tag}
              aria-pressed={activeTag === tag}
              aria-label={`Show recipes by ${tag}`}
              aria-controls="recipesList"
            >
              #{tag}
            </button>
          ))}
        </section>
      )}
    </section>
  );
}
