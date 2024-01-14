import { mainElement } from "@/Components/TailwindClasses";
import { PrismaClient } from "@prisma/client";
import { useMemo } from "react";
import PoemOptions from "./Components/PoemOptions";

export default async function Page() {
  const prisma = useMemo(() => new PrismaClient(), []),
    authors = await prisma.author.findMany({
      orderBy: [
        {
          name: "asc",
        },
      ],
    }),
    poems = await prisma.poem.findMany({
      include: {
        Author: true,
      },
    });

  return (
    <main className={`${mainElement} justify-center overflow-y-auto`}>
      <h1 className="font-bold text-xl md:text-2xl">
        📜🖋 Poetic Sanctuary 🖋📜
      </h1>
      <p className="w-10/12 text-center md:text-lg">
        Welcome to a poetic realm where words dance and emotions unfold! Our
        poetry collection is a sanctuary of enchanting verses that resonate with
        the rhythm of the human soul. Each poem is a brushstroke on the canvas
        of emotions, painting vivid landscapes of love, longing, and
        introspection.
      </p>

      <PoemOptions authors={authors} poems={poems} />
    </main>
  );
}
