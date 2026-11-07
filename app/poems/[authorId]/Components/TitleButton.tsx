"use client";

import { useContext } from "react";
import { AuthorContext } from "./context";

interface IPoem {
  title: string;
  lines: string;
}

export default function TitleButton({
  poem,
}: {
  poem: IPoem;
}) {
  const { poem: selected, setPoem } = useContext(AuthorContext),
    lineCount = poem.lines.split("\n").filter(Boolean).length;

  return (
    <div className="flex">
      <button
        aria-label={`Show ${poem.title} content`}
        aria-pressed={selected?.title === poem.title}
        aria-controls="poem"
        id={`${poem.title}-button`}
        type="button"
        className="slot"
        onClick={() => setPoem(poem)}
      >
        <span className="slot-goods w-full">
          <span className="stamp block text-xl leading-tight">{poem.title}</span>
        </span>
        <span className="rail w-full">
          <span>
          {lineCount} {lineCount === 1 ? "line" : "lines"}
        </span>
        </span>
      </button>
    </div>
  );
}
