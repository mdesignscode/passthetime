import { PrismaClient } from "@prisma/client";
import { useMemo } from "react";
import { RPSProvider } from "./Components/context";
import { mainElement } from "@/Components/TailwindClasses";
import dynamic from "next/dynamic";

const PickAnObject = dynamic(() => import("./Components/PickAnObject"));
const PlayStats = dynamic(() => import("./Components/PlayStats"));
const Playing = dynamic(() => import("./Components/Playing"));
const ShowResult = dynamic(() => import("./Components/ShowResult"));

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
