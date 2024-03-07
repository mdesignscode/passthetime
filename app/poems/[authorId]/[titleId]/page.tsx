import { backgroundLight } from "@/Components/TailwindClasses";
import classNames from "classnames";
import prisma from "lib/prisma";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("./Components/Header"));

export async function generateStaticParams({
  params: { authorId },
}: {
  params: { authorId: string };
}) {
  const author = await prisma.author.findUnique({
    where: {
      id: parseInt(authorId),
    },
    include: {
      poems: true,
    },
  });

  if (!author) throw new Error("Author not found");

  return author.poems.map(({ id: titleId }) => ({
    authorId,
    titleId: titleId.toString(),
  }));
}

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
    poems = prisma.poem.findMany(),
    author = prisma.author.findUnique({
      where: {
        id: parseInt(authorId),
      },
      include: {
        poems: true,
      },
    });

  if (!poem) return "Poem not found";

  return (
    <main
      className={classNames(
        backgroundLight,
        "gap-2 flex flex-col w-2/3 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-5/6"
      )}
    >
      <Header
        title={`${poem.title} by ${poem.Author?.name || "Unknown"}`}
        authorIndex={parseInt(authorId)}
        poemIndex={parseInt(titleId)}
        author={(await author) as NonNullable<TAuthor>}
        poems={await poems}
      />
      <article className="overflow-auto">
        {poem.lines.split("\n").map((line) => (
          <p key={line}>{line}</p>
        ))}
      </article>
    </main>
  );
}
