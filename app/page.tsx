import {
  artworks,
  authors,
  cards,
  fruits,
  jokes,
  playObjects,
  poems,
  recipes,
  triviaQuestions,
} from "lib/data";
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
      poemLines={poem.lines.split("\n").filter(Boolean).slice(0, 3)}
      poemCount={poems.length}
      authorCount={authors.length}
      objects={playObjects.slice(0, 3).map(({ name }) => name)}
      objectCount={playObjects.length}
      artwork={artworks[0]}
      artworkCount={artworks.length}
      triviaCategories={Array.from(
        new Set(triviaQuestions.map(({ category }) => category))
      ).slice(0, 3)}
      triviaCount={triviaQuestions.length}
      card={cards.find(({ code }) => code === "AS") ?? cards[0]}
      cardCount={cards.length}
      joke={jokes.find(({ punchline }) => punchline)?.setup ?? ""}
      jokeCount={jokes.length}
    />
  );
}
