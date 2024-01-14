"use client";
import { ChangeEvent, useContext, useState } from "react";
import { PoemsContext } from "./context";

interface ITitle {
  author?: string;
  authorId?: number;
  title: string;
  titleId: number;
}

export default function SelectTitle({ titles }: { titles: ITitle[] }) {
  const [selectedOption, setSelectedOption] = useState(""),
    { setQueryUrl } = useContext(PoemsContext);

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { authorId, titleId } = JSON.parse(event.target.value);

    setSelectedOption(event.target.value);
    setQueryUrl(`/poems/${authorId}/${titleId}`);
  };

  return (
    <div className="flex flex-col border-2 border-dark p-2 gap-2 rounded-lg">
      <label className="text-lg" htmlFor="author">Get poems by Title</label>
      <select
        id="author"
        value={selectedOption}
        onChange={handleSelectChange}
        className="p-2 rounded-lg"
      >
        <option value="">Select title...</option>
        {titles.map((title) => (
          <option
            key={title.titleId}
            value={JSON.stringify({
              titleId: title.titleId,
              authorId: title.authorId,
            })}
          >
            {`${title.title} By ${title.author || "Unknown"}`}
          </option>
        ))}
      </select>
    </div>
  );
}
