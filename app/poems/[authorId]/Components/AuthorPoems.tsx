"use client";

import DisplayPoem from "./DisplayPoem";
import TitleButton from "./TitleButton";
import { AuthorProvider } from "./context";

export default function AuthorPoems({ author }: { author: TAuthor }) {
  return (
    <AuthorProvider>
      <div className="grid items-start gap-3 md:grid-cols-[1fr_minmax(19rem,32rem)] md:gap-4">
        <section
          aria-label="Poems list"
          className="wall grid-cols-[repeat(auto-fill,minmax(11rem,1fr))]"
        >
          {author.poems.map((poem) => (
            <TitleButton
              poem={{
                title: poem.title,
                lines: poem.lines,
              }}
              key={poem.id}
            />
          ))}
        </section>

        <DisplayPoem />
      </div>
    </AuthorProvider>
  );
}
