import { serve } from "bun";
import { Hono } from "hono";
import prisma from "../../../lib/prisma";

const app = new Hono();

app.get("/fruits", async (c) => {
  return c.json(await prisma.fruit.findMany());
});

app.get("/poems", async (c) => {
  const author = await prisma.author.findUnique({
      where: {
        id: 1,
      },
    }),
    poem = await prisma.poem.findUnique({
      where: {
        id: 1,
      },
    }),
    totalPoems = await prisma.poem.count(),
    totalAuthors = await prisma.author.count();

  return c.json({ poem, author, totalPoems, totalAuthors });
});

app.get("/recipes", async (c) => {
  return c.json(
    await prisma.recipe.findMany({
      take: 30,
      orderBy: {
        name: "asc",
      },
    })
  );
});

serve({
  fetch: app.fetch,
  port: 3001,
});
