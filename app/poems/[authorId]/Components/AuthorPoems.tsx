"use client";

import DisplayPoem from "./DisplayPoem";
import TitleButton from "./TitleButton";
import { AuthorProvider } from "./context";

export default function AuthorPoems({ author }: { author: TAuthor }) {
  return (
    <AuthorProvider>
      <section
        aria-label="Poems list"
        className="flex lg:text-lg flex-col gap-2 lg:flex-row lg:w-2/3 items-stretch lg:items-center lg:flex-wrap lg:justify-center overflow-y-auto p-2 my-auto"
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
