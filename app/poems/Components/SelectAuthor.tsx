"use client";
import { ChangeEvent, useContext, useState } from "react";
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
    { setQueryUrl } = useContext(PoemsContext);

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const authorId = event.target.value;
    setSelectedOption(authorId);
    setQueryUrl(`/poems/${authorId}`);
  };

  return (
    <div className="flex flex-col border-2 border-dark p-2 gap-2 rounded-lg">
      <label className="text-lg" htmlFor="author">
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
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        ))}
      </select>
    </div>
  );
}
