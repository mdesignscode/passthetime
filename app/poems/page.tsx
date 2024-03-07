import { mainElement } from "@/Components/TailwindClasses";
import prisma from "lib/prisma";
import dynamic from "next/dynamic";

const PoemOptions = dynamic(() => import("./Components/PoemOptions"), { ssr: false });

export default async function Page() {
  const authors = prisma.author.findMany({
      orderBy: [
        {
          name: "asc",
        },
      ],
    }),
    poems = prisma.poem.findMany({
      include: {
        Author: true,
      },
    });

  return (
    <main className={`${mainElement} overflow-y-auto`}>
      <h1 className="font-bold text-xl md:text-2xl">
        📜🖋 Poetic Sanctuary 🖋📜
      </h1>
      <p className="w-10/12 text-center lg:text-lg">
        Welcome to a poetic realm where words dance and emotions unfold!
        <span className="hidden lg:inline">
          {" "}Our poetry collection is a sanctuary of enchanting verses that
          resonate with the rhythm of the human soul. Each poem is a brushstroke
          on the canvas of emotions, painting vivid landscapes of love, longing,
          and introspection.
        </span>
      </p>

      <PoemOptions authors={await authors} poems={await poems} />
    </main>
  );
}
