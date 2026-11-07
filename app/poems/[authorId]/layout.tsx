import { authors } from "lib/data";
import type { Metadata } from "next";
import { ReactNode } from "react";

export function generateStaticParams() {
  return authors.map(({ id }) => ({
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
