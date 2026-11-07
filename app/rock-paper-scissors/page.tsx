import Marquee from "@/Components/Marquee";
import { playObjects } from "lib/data";
import dynamic from "next/dynamic";

const MainScreen = dynamic(() => import("./Components/MainScreen"), { ssr: false });

export default function Page() {
  return (
    <main className="machine-main" aria-label="Rock, Paper, Scissors">
      <Marquee title="Rock, Paper, Scissors 101" />
      <h2 className="marquee-note md:text-lg">
        Play Rock, Paper, Scissors with 101 objects!
      </h2>

      <MainScreen playObjects={playObjects} />
    </main>
  );
}
