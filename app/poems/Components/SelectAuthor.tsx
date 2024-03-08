"use client";

import { m } from "framer-motion";
import { ChangeEvent, useContext, useState } from "react";
import { PoemsContext } from "./context";
import { childrenVariants } from "./PoemOptions";

export interface IAuthorOption {
  name: string;
  id: number;
}

export default function SelectAuthor({
  authors,
}: {
  authors: IAuthorOption[];
}) {
  const [selectedOption, setSelectedOption] = useState(""),
    { setQueryUrl } = useContext(PoemsContext);

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { authorId, author } = JSON.parse(event.target.value);
    setSelectedOption(event.target.value);
    setQueryUrl({
      url: `/poems/${authorId}`,
      text: `View poems by ${author}`,
    });
  };

  return (
    <m.div
      variants={childrenVariants}
      className="flex flex-col border-2 border-dark p-2 gap-2 rounded-lg"
    >
      <label className="lg:text-lg" htmlFor="author">
        Get poems by Author:
      </label>
      <select
        className="p-2 rounded-lg"
        id="author"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option value="">Select author...</option>
        {authors.map((author) => (
          <option
            value={JSON.stringify({
              author: author.name,
              authorId: author.id,
            })}
            key={author.id}
            data-author={author.name}
          >
            {author.name}
          </option>
        ))}
      </select>
    </m.div>
  );
}
