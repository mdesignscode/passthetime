import { PrismaClient } from "@prisma/client";
import { useMemo } from "react";
import RandomPoem from "./Components/RandomPoem";

export default async function Page() {
  const prisma = useMemo(() => new PrismaClient(), []),
    poems = await prisma.poem.findMany({ include: { Author: true } }),
    randomIndex = Math.floor(Math.random() * poems.length);

  return <RandomPoem poems={poems} initialIndex={randomIndex} />
}
