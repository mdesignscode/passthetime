import { mainElement } from "@/Components/TailwindClasses";
import prisma from "lib/prisma";
import dynamic from "next/dynamic";

const MainScreen = dynamic(() => import("./Components/MainScreen"), {
  ssr: false,
});

export default async function Page() {
  const playObjects = prisma.rockPaperScissor.findMany({
    include: {
      winningMatches: true,
    },
  });

  return (
    <main className={mainElement} aria-label="Rock, Paper, Scissors">
      <h1 className="text-xl md:text-2xl font-bold">
        👊🖐️✌️ Rock, Paper, Scissors 101 👊🖐️✌️
      </h1>
      <h2 className="text-lg md:text-xl">
        Play Rock, Paper, Scissors with 101 objects!
      </h2>

      <MainScreen playObjects={await playObjects} />
    </main>
  );
}
