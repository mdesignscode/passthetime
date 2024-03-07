import prisma from "@/lib/prisma";
import type { Metadata } from "next";
import AuthorPoems from "./Components/AuthorPoems";
import { ReactNode } from "react";

export async function generateStaticParams() {
  const allAuthors = await prisma.author.findMany();

  return allAuthors.map(({ id }) => ({
    authorId: id.toString(),
  }));
}

export const metadata: Metadata = {
  title: "Poems | Random Stuff",
  description:
    "Read poems by authors such as William Brown, Alan Seeger, Charlotte Smith, Robin Brown, and many more!",
};

export default function RootLayout({
  children,
}: {
  params: { authorId: string };
  children: ReactNode;
}) {
  return children;
}
