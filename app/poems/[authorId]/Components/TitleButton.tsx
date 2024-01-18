"use client";

import { useContext } from "react";
import { GlobalContext } from "@/context/globalContext";
import { AuthorContext } from "./context";
import dynamic from "next/dynamic";

const ScaleIn = dynamic(() => import("@/Components/ScaleIn"));

interface IPoem {
  title: string;
  lines: string;
}

export default function TitleButton({
  poem,
  index,
}: {
  poem: IPoem;
  index: number;
}) {
  const { setShowLightbox } = useContext(GlobalContext),
    { setPoem } = useContext(AuthorContext);

  function handleShowInfo() {
    setShowLightbox(true);
    setPoem(poem);
  }

  return (
    <ScaleIn index={index}>
      <button
        type="button"
        className="fruit-button border-2 border-accent-primary p-2 rounded-lg bg-primary hover:-translate-y-1 active:translate-y-0"
        onClick={handleShowInfo}
      >
        {poem.title}
      </button>
    </ScaleIn>
  );
}
