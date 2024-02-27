import { backgroundLight } from "@/Components/TailwindClasses";
import classNames from "classnames";
import prisma from "lib/prisma";
import Header from "./Components/Header";

export default async function Page({
  params: { titleId, authorId },
}: {
  params: { authorId: string; titleId: string };
}) {
  const poem = await prisma.poem.findUnique({
      where: {
        id: parseInt(titleId),
      },
      include: {
        Author: true,
      },
    }),
    poems = await prisma.poem.findMany(),
    author = await prisma.author.findUnique({
      where: {
        id: parseInt(authorId),
      },
      include: {
        poems: true,
      },
    }),
    authorLastPoemIndex = author?.poems?.at(-1)?.id,
    authorFirstPoemIndex = author?.poems?.at(0)?.id;

  if (!poem) return "Poem not found";

  return (
    <main
      className={classNames(
        backgroundLight,
        "gap-2 flex flex-col w-2/3 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-5/6"
      )}
    >
      <Header
        {...{
          totalPoems: poems.length,
          title: `${poem.title} by ${poem.Author?.name || "Unknown"}`,
          authorIndex: parseInt(authorId),
          poemIndex: parseInt(titleId),
          authorLastPoemIndex,
          authorFirstPoemIndex,
        }}
      />
      <article className="overflow-auto">
        {poem.lines.split("\n").map((line) => (
          <p key={line}>{line}</p>
        ))}
      </article>
    </main>
  );
}
