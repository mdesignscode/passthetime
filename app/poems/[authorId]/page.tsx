import { PrismaClient } from "@prisma/client";
import { useMemo } from "react";
import { AuthorProvider } from "./Components/context";
import dynamic from "next/dynamic";

const TitleButton = dynamic(() => import("./Components/TitleButton"));
const DisplayPoem = dynamic(() => import("./Components/DisplayPoem"));

export default async function Page({
  params: { authorId },
}: {
  params: { authorId: string };
}) {
  const prisma = useMemo(() => new PrismaClient(), []),
    author = await prisma.author.findUnique({
      where: {
        id: parseInt(authorId),
      },
      include: { poems: true },
    });

  return (
    author && (
      <main
        className={`flex flex-col h-full items-center gap-4 p-4 md:justify-center md:gap-6`}
      >
        <h1 className="text-lg font-bold md:text-4xl">
          📜🖋 Poems by {author.name} 🖋📜
        </h1>

        <AuthorProvider>
          <section className="flex md:text-lg flex-col gap-2 md:flex-row md:w-2/3 md:items-center md:flex-wrap flex-1 md:flex-none md:justify-center overflow-y-auto p-2">
            {author.poems.map((poem, index) => (
              <TitleButton
                index={index}
                poem={{
                  title: poem.title,
                  lines: poem.lines,
                }}
                key={poem.id}
              />
            ))}
          </section>

          <DisplayPoem />
        </AuthorProvider>
      </main>
    )
  );
}
