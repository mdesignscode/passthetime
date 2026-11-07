"use client";

import Packet from "@/Components/Packet";
import shuffle from "@/Components/shuffle";
import classNames from "classnames";
import { useMemo, useState } from "react";

const ROUND_LENGTH = 10,
  MIXED = "Mixed Bag";

interface IRoundQuestion extends TTriviaQuestion {
  answers: string[];
}

export default function TriviaGame({
  questions,
}: {
  questions: TTriviaQuestion[];
}) {
  const categories = useMemo(() => {
      const counts = new Map<string, number>();
      for (const { category } of questions) {
        counts.set(category, (counts.get(category) ?? 0) + 1);
      }
      return [...Array.from(counts), [MIXED, questions.length] as [string, number]];
    }, [questions]),
    [category, setCategory] = useState<string | null>(null),
    [round, setRound] = useState<IRoundQuestion[]>([]),
    [index, setIndex] = useState(0),
    [chosen, setChosen] = useState<string | null>(null),
    [score, setScore] = useState(0);

  function startRound(name: string) {
    const pool =
      name === MIXED
        ? questions
        : questions.filter((question) => question.category === name);

    setCategory(name);
    setRound(
      shuffle(pool)
        .slice(0, ROUND_LENGTH)
        .map((question) => ({
          ...question,
          answers: shuffle([question.correctAnswer, ...question.incorrectAnswers]),
        }))
    );
    setIndex(0);
    setChosen(null);
    setScore(0);
  }

  function answer(choice: string) {
    setChosen(choice);
    if (choice === round[index].correctAnswer) setScore((state) => state + 1);
  }

  function next() {
    setChosen(null);
    setIndex((state) => state + 1);
  }

  if (!category) {
    return (
      <section
        aria-label="Trivia categories"
        className="wall grid-cols-[repeat(auto-fill,minmax(10rem,1fr))]"
      >
        {categories.map(([name, count]) => (
          <button
            key={name}
            type="button"
            className="slot"
            aria-label={`Play ${name}`}
            onClick={() => startRound(name)}
          >
            <span className="slot-goods slot-recess w-full">
              <Packet name={name} className="w-full min-h-28" />
            </span>
            <span className="rail w-full">{count} questions</span>
          </button>
        ))}
      </section>
    );
  }

  const isFinished = index >= round.length,
    question = round[index],
    isAnswered = chosen !== null,
    isCorrect = !isFinished && chosen === question.correctAnswer;

  return (
    <div className="grid items-start gap-3 md:grid-cols-[1fr_19rem] md:gap-4">
      <section aria-label="Trivia game" className="wall">
        <div className="slot slot-goods gap-4 p-4 md:p-6">
          {isFinished ? (
            <>
              <p className="marquee text-center text-4xl md:text-6xl" id="trivia-result">
                {score} of {round.length}
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  className="key key-go"
                  onClick={() => startRound(category)}
                >
                  Play again
                </button>
                <button
                  type="button"
                  className="key"
                  onClick={() => setCategory(null)}
                >
                  Change category
                </button>
              </div>
            </>
          ) : (
            <>
              <p className="stamp text-lg text-ink-dim">
                Question {index + 1} of {round.length}, {question.category}
              </p>
              <h2 className="max-w-[65ch] text-xl font-semibold leading-snug md:text-2xl">
                {question.question}
              </h2>

              <div className="grid gap-2 md:grid-cols-2">
                {question.answers.map((option) => (
                  <button
                    key={option}
                    type="button"
                    disabled={isAnswered}
                    className={classNames("key key-answer", {
                      "key-right": isAnswered && option === question.correctAnswer,
                      "key-wrong":
                        isAnswered &&
                        option === chosen &&
                        option !== question.correctAnswer,
                    })}
                    onClick={() => answer(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>

              <div className="flex min-h-11 flex-wrap items-center justify-between gap-3">
                <p role="status" id="trivia-status" className="text-lg font-semibold">
                  {isAnswered &&
                    (isCorrect
                      ? "Correct!"
                      : `Not quite. The answer is ${question.correctAnswer}.`)}
                </p>
                {isAnswered && (
                  <button type="button" className="key key-go" onClick={next}>
                    {index + 1 === round.length ? "See results" : "Next question"}
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </section>

      <aside aria-label="Score" className="panel flex flex-col gap-3">
        <p className="marquee !font-panel text-3xl tracking-wide" id="trivia-score">
          Score: {score}
        </p>
        <p>Category: {category}</p>
        {!isFinished && (
          <button
            type="button"
            className="key"
            onClick={() => setCategory(null)}
          >
            Change category
          </button>
        )}
      </aside>
    </div>
  );
}
