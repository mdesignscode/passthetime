import { Hono } from "hono";
import { authors, fruits, poems, recipes } from "../../../lib/data";

const app = new Hono();

app.get("/fruits", (c) => c.json(fruits));

app.get("/poems", (c) =>
  c.json({
    poem: poems.find(({ id }) => id === 1),
    author: authors.find(({ id }) => id === 1),
    totalPoems: poems.length,
    totalAuthors: authors.length,
  })
);

app.get("/recipes", (c) => c.json(recipes.slice(0, 30)));

export default app;
