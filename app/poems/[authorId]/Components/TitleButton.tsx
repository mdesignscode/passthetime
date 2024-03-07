"use client";

import { useContext } from "react";
import { GlobalContext } from "@/context/globalContext";
import { AuthorContext } from "./context";
import dynamic from "next/dynamic";
import { buttonPrimary } from "@/Components/TailwindClasses";

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
        aria-label={`Show ${poem?.title} content`}
        type="button"
        className={`${buttonPrimary} w-full`}
        onClick={handleShowInfo}
      >
        {poem.title}
      </button>
    </ScaleIn>
  );
}
