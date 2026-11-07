"use client";

import { ChangeEvent, useContext, useEffect, useState } from "react";
import { PoemsContext } from "./context";

interface ITitle {
  author?: string;
  authorId?: number;
  title: string;
  titleId: number;
}

export default function SelectTitle({ titles }: { titles: ITitle[] }) {
  const [selectedOption, setSelectedOption] = useState(""),
    { setQueryUrl, queryUrl } = useContext(PoemsContext);

  useEffect(() => {
    if (!selectedOption) return;
    const { title } = JSON.parse(selectedOption);

    if (!queryUrl.text.includes(title)) setSelectedOption("");
  }, [queryUrl.text, selectedOption]);

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (!event.target.value) return;
    const { authorId, titleId, title } = JSON.parse(event.target.value);

    setSelectedOption(event.target.value);
    setQueryUrl({
      url: `/poems/${authorId}/${titleId}`,
      text: `View ${title}`,
    });
  };

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="title">Get poems by Title</label>
      <select
        id="title"
        value={selectedOption}
        onChange={handleSelectChange}
        className="field"
      >
        <option value="">Select title...</option>
        {titles.map((title) => (
          <option
            key={title.titleId}
            value={JSON.stringify({
              titleId: title.titleId,
              authorId: title.authorId,
              title: title.title,
            })}
          >
            {`${title.title} By ${title.author || "Unknown"}`}
          </option>
        ))}
      </select>
    </div>
  );
}
