"use client";

import { ChangeEvent, useContext, useEffect, useState } from "react";
import { PoemsContext } from "./context";

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
    { setQueryUrl, queryUrl } = useContext(PoemsContext);

  useEffect(() => {
    if (!selectedOption) return;
    const { author } = JSON.parse(selectedOption);

    if (!queryUrl.text.includes(author)) setSelectedOption("");
  }, [queryUrl.text, selectedOption]);

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (!event.target.value) return;
    const { authorId, author } = JSON.parse(event.target.value);
    setSelectedOption(event.target.value);
    setQueryUrl({
      url: `/poems/${authorId}`,
      text: `View poems by ${author}`,
    });
  };

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="author">Get poems by Author:</label>
      <select
        className="field"
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
    </div>
  );
}
