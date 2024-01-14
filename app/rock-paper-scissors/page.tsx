import { PrismaClient } from "@prisma/client";
import { useMemo } from "react";
import PickAnObject from "./Components/PickAnObject";
import { RPSProvider } from "./Components/context";
import { mainElement } from "@/Components/TailwindClasses";
import PlayStats from "./Components/PlayStats";
import Playing from "./Components/Playing";
import ShowResult from "./Components/ShowResult";

export default async function Page() {
  const prisma = useMemo(() => new PrismaClient(), []),
    playObjects = await prisma.rockPaperScissor.findMany({
      include: {
        winningMatches: true,
      },
    });

  return (
    <main
      className={mainElement}
    >
      <h1 className="text-xl md:text-2xl font-bold">👊🖐️✌️ Rock, Paper, Scissors 101 👊🖐️✌️</h1>
      <h2 className="text-lg md:text-xl">Play Rock, Paper, Scissors with 101 objects!</h2>

      <RPSProvider>
        <PlayStats />

        <div className="m-auto">
          <PickAnObject playObjects={playObjects} />
          <Playing objects={playObjects} />
          <ShowResult />
        </div>
      </RPSProvider>
    </main>
  );
}
