import PoemLines from "@/Components/PoemLines";
import { findAuthor, findPoem, poems } from "lib/data";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("./Components/Header"));

export function generateStaticParams({
  params: { authorId },
}: {
  params: { authorId: string };
}) {
  const author = findAuthor(parseInt(authorId));

  if (!author) throw new Error("Author not found");

  return author.poems.map(({ id: titleId }) => ({
    authorId,
    titleId: titleId.toString(),
  }));
}

export default function Page({
  params: { titleId, authorId },
}: {
  params: { authorId: string; titleId: string };
}) {
  const poem = findPoem(parseInt(titleId)),
    author = findAuthor(parseInt(authorId));

  if (!poem || !author) return "Poem not found";

  return (
    <main className="machine-main">
      <Header
        title={`${poem.title} by ${poem.Author?.name || "Unknown"}`}
        authorIndex={parseInt(authorId)}
        poemIndex={parseInt(titleId)}
        author={author}
        poemCount={poems.length}
      />
      <article className="receipt receipt-print mx-auto w-full max-w-2xl md:text-base">
        <PoemLines lines={poem.lines} />
      </article>
    </main>
  );
}
