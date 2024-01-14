"use client";

import { useContext } from "react";
import { PoemsContext } from "./context";
import Link from "next/link";
import BrowseMobileIcon from "@/Components/Icons/BrowseMobile";

export default function QueryUrl() {
  const { queryUrl } = useContext(PoemsContext);

  return (
    <Link
      href={queryUrl}
      className={`flex border-2 border-dark p-2 gap-4 items-center justify-center rounded-lg hover:-translate-y-2 active:translate-y-0 transition-all ${!queryUrl && "pointer-events-none opacity-50"}`}
    >
      <BrowseMobileIcon />
      Explore Poems
    </Link>
  );
}
