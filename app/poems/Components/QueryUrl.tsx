"use client";

import classNames from "classnames";
import Link from "next/link";
import { useContext } from "react";
import { PoemsContext } from "./context";

export default function QueryUrl() {
  const { queryUrl } = useContext(PoemsContext);

  return (
    <Link
      href={queryUrl.url}
      id="explore-poems"
      aria-disabled={!queryUrl.url}
      tabIndex={queryUrl.url ? undefined : -1}
      className={classNames("key key-go w-full text-center", {
        "pointer-events-none": !queryUrl.url,
      })}
    >
      <span>{queryUrl.text}</span>
    </Link>
  );
}
