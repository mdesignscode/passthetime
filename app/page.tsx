import { authors, fruits, playObjects, poems, recipes } from "lib/data";
import HomeMachine from "./Components/HomeMachine";

export default function Home() {
  const poem = poems[0];

  return (
    <HomeMachine
      fruits={fruits.slice(0, 4).map(({ name }) => name)}
      fruitCount={fruits.length}
      recipes={recipes
        .slice(0, 3)
        .map(({ name, thumbnail }) => ({ name, thumbnail }))}
      recipeCount={recipes.length}
      poemTitle={poem.title}
      poemAuthor={poem.Author?.name ?? ""}
      poemLines={poem.lines.split("\n").filter(Boolean).slice(0, 4)}
      poemCount={poems.length}
      authorCount={authors.length}
      objects={playObjects.slice(0, 3).map(({ name }) => name)}
      objectCount={playObjects.length}
    />
  );
}
