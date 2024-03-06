"use client";

import DisplayPoem from "./DisplayPoem";
import TitleButton from "./TitleButton";
import { AuthorProvider } from "./context";

export default function AuthorPoems({ author }: { author: TAuthor }) {
  return (
    <AuthorProvider>
      <section
        aria-label="Poems list"
        className="flex md:text-lg flex-col gap-2 md:flex-row md:w-2/3 items-center md:flex-wrap md:justify-center overflow-y-auto p-2"
      >
        {author.poems.map((poem, index) => (
          <TitleButton
            index={index}
            poem={{
              title: poem.title,
              lines: poem.lines,
            }}
            key={poem.id}
          />
        ))}
      </section>

      <DisplayPoem />
    </AuthorProvider>
  );
}
