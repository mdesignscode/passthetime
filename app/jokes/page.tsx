import Marquee from "@/Components/Marquee";
import { jokes } from "lib/data";
import type { Metadata } from "next";
import JokeDispenser from "./Components/JokeDispenser";

export const metadata: Metadata = {
  title: "Jokes | Random Stuff",
  description: "Press a button and the machine prints you a joke.",
};

export default function Page() {
  return (
    <main aria-label="Jokes" className="machine-main">
      <Marquee title="Joke Dispenser" />

      <p className="marquee-note md:text-lg">
        Press the button and the machine prints you a joke.
      </p>

      <JokeDispenser jokes={jokes} />

      <p className="text-sm text-on-enamel-dim">
        Jokes from{" "}
        <a
          href="https://v2.jokeapi.dev/"
          className="underline underline-offset-2"
        >
          JokeAPI
        </a>
        , in safe mode.
      </p>
    </main>
  );
}
