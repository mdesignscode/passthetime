"use client";

import { useContext } from "react";
import { AuthorContext } from "./context";
import Image from "next/image";
import { GlobalContext } from "@/context/globalContext";

export default function DisplayPoem() {
  const { setPoem, poem } = useContext(AuthorContext);
  const { setShowLightbox } = useContext(GlobalContext);

  function handleHidePoem() {
    setShowLightbox(false);
    setPoem(null);
  }

  return (
    poem && (
      <article className="z-20 flex flex-col gap-2 h-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 p-4 justify-center">
        <button
          aria-label={`Hide ${poem?.title} content`}
          className="self-start grid close-button"
          type="button"
          onClick={handleHidePoem}
        >
          <Image
            src="/icons/close-circle-svgrepo-com.svg"
            alt="Hide poem"
            width={50}
            height={50}
          />
        </button>

        <section aria-label={`${poem.title} content`} className="bg-light md:text-lg overflow-y-auto rounded-lg p-4">
          {poem.lines.split("\n").map((line) => (
            <p key={line}>{line}</p>
          ))}
        </section>
      </article>
    )
  );
}
