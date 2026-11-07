"use client";

import PoemLines from "@/Components/PoemLines";
import RetrievalTray from "@/Components/RetrievalTray";
import { useCallback, useContext } from "react";
import { AuthorContext } from "./context";

export default function DisplayPoem() {
  const { setPoem, poem } = useContext(AuthorContext),
    close = useCallback(() => setPoem(null), [setPoem]);

  return (
    <RetrievalTray
      id="poem"
      title={poem ? `${poem.title} content` : undefined}
      isOpen={!!poem}
      closeLabel={`Hide ${poem?.title} content`}
      onClose={close}
      emptyText="Pick a title to print the poem"
    >
      {poem && (
        <article key={poem.title} className="receipt receipt-print">
          <h2 className="mb-3 border-b border-dashed border-current pb-2 font-bold">
            {poem.title}
          </h2>
          <PoemLines lines={poem.lines} />
        </article>
      )}
    </RetrievalTray>
  );
}
