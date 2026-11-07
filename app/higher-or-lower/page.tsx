import Marquee from "@/Components/Marquee";
import { cards } from "lib/data";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

// the deck is shuffled per visit, so this renders only in the browser
const CardGame = dynamic(() => import("./Components/CardGame"), { ssr: false });

export const metadata: Metadata = {
  title: "Higher or Lower | Random Stuff",
  description: "Guess whether the next card is higher or lower and build a streak.",
};

export default function Page() {
  return (
    <main aria-label="Higher or Lower" className="machine-main">
      <Marquee title="Higher or Lower" />

      <p className="marquee-note md:text-lg">
        Will the next card be higher or lower? Aces are high, and a tie keeps
        your streak alive.
      </p>

      <CardGame cards={cards} />
    </main>
  );
}
