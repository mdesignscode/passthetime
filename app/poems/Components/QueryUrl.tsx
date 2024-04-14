"use client";

import { useContext } from "react";
import { PoemsContext } from "./context";
import Link from "next/link";
import BrowseMobileIcon from "@/Components/Icons/BrowseMobile";

export default function QueryUrl() {
  const { queryUrl } = useContext(PoemsContext);

  return (
    <Link
      href={queryUrl.url}
      className={`text-sm flex gap-2 md:gap-4 text-center md:text-base items-center justify-center border-2 border-dark p-2 rounded-lg hover:-translate-y-2 active:translate-y-0 transition-all ${!queryUrl.url && "pointer-events-none opacity-50"}`}
      id="explore-poems"
    >
      <BrowseMobileIcon className="w-8 h-8 lg:w-10 lg:h-10" />
      <span>{queryUrl.text}</span>
    </Link>
  );
}
