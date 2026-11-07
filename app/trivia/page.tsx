import Marquee from "@/Components/Marquee";
import { triviaQuestions } from "lib/data";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

// questions are shuffled per visit, so this renders only in the browser
const TriviaGame = dynamic(() => import("./Components/TriviaGame"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Trivia | Random Stuff",
  description: "Pick a category and answer ten multiple-choice questions.",
};

export default function Page() {
  return (
    <main aria-label="Trivia" className="machine-main">
      <Marquee title="Trivia Time" />

      <p className="marquee-note md:text-lg">
        Pick a category and answer ten questions.
      </p>

      <TriviaGame questions={triviaQuestions} />

      <p className="text-sm text-on-enamel-dim">
        Questions from{" "}
        <a href="https://opentdb.com/" className="underline underline-offset-2">
          Open Trivia DB
        </a>
        , licensed under{" "}
        <a
          href="https://creativecommons.org/licenses/by-sa/4.0/"
          className="underline underline-offset-2"
        >
          CC BY-SA 4.0
        </a>
        .
      </p>
    </main>
  );
}
