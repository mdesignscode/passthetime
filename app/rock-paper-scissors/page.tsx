import { mainElement } from "@/Components/TailwindClasses";
import prisma from "lib/prisma";
import dynamic from "next/dynamic";
import { RPSProvider } from "./Components/context";

const PickAnObject = dynamic(() => import("./Components/PickAnObject"));
const PlayStats = dynamic(() => import("./Components/PlayStats"));
const Playing = dynamic(() => import("./Components/Playing"));
const ShowResult = dynamic(() => import("./Components/ShowResult"));

export default async function Page() {
  const playObjects = await prisma.rockPaperScissor.findMany({
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
