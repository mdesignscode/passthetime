import prisma from "lib/prisma";
import RandomPoem from "./Components/RandomPoem";

export default async function Page() {
  const poems = await prisma.poem.findMany({ include: { Author: true } }),
    randomIndex = Math.floor(Math.random() * poems.length);

  return <RandomPoem poems={poems} initialIndex={randomIndex} />;
}
