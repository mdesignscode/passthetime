import authorsJson from "../data/authors.json";
import fruitsJson from "../data/fruits.json";
import poemsJson from "../data/poems.json";
import recipesJson from "../data/recipes.json";
import objectsJson from "../data/rock-paper-scissors.json";

// All content lives in data/*.json and is read at build time; nothing is fetched at runtime.

const byName = <T extends { name: string }>(a: T, b: T) =>
  a.name.localeCompare(b.name);

export const fruits: TFruit[] = [...fruitsJson].sort(byName);

export const recipes: TRecipe[] = [...recipesJson].sort(byName);

export const recipeTags: string[] = Array.from(
  new Set(recipes.flatMap((recipe) => recipe.tags))
).sort();

export const findRecipe = (id: number) =>
  recipes.find((recipe) => recipe.id === id);

export const playObjects: TPlayObjects = objectsJson;

export const authors: TAuthor[] = authorsJson
  .map((author) => ({
    ...author,
    poems: poemsJson.filter((poem) => poem.authorId === author.id),
  }))
  .sort(byName);

export const findAuthor = (id: number) =>
  authors.find((author) => author.id === id);

export const poems: TPoemWithAuthor[] = poemsJson.map((poem) => ({
  ...poem,
  Author: authorsJson.find((author) => author.id === poem.authorId) ?? null,
}));

export const findPoem = (id: number) => poems.find((poem) => poem.id === id);
