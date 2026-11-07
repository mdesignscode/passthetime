import { findAuthor } from "lib/data";
import dynamic from "next/dynamic";
import Marquee from "@/Components/Marquee";

const AuthorPoems = dynamic(() => import("./Components/AuthorPoems"));

export default function Page({
  params: { authorId },
}: {
  params: { authorId: string };
}) {
  const author = findAuthor(parseInt(authorId));

  return (
    author && (
      <main
        aria-label={`All poems by ${author.name}`}
        className="machine-main"
      >
        <Marquee title={`Poems by ${author.name}`} />

        <AuthorPoems author={author} />
      </main>
    )
  );
}
