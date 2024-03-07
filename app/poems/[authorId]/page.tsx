import prisma from "lib/prisma";
import dynamic from "next/dynamic";

const AuthorPoems = dynamic(() => import("./Components/AuthorPoems"));

export default async function Page({
  params: { authorId },
}: {
  params: { authorId: string };
}) {
  const author = await prisma.author.findUnique({
    where: {
      id: parseInt(authorId),
    },
    include: { poems: true },
  });

  return (
    author && (
      <main
        aria-label={`All poems by ${author.name}`}
        className={`flex flex-col h-full items-center gap-4 px-4 py-8 justify-center md:gap-6`}
      >
        <h1 className="text-xl font-bold md:text-3xl">
          📜🖋 Poems by {author.name} 🖋📜
        </h1>

        <AuthorPoems author={author} />
      </main>
    )
  );
}
