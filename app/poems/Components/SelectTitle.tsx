"use client";

import { motion } from "framer-motion";
import { ChangeEvent, useContext, useState } from "react";
import { PoemsContext } from "./context";
import { childrenVariants } from "./PoemOptions";

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
    const { authorId, titleId, title } = JSON.parse(event.target.value);

    setSelectedOption(event.target.value);
    setQueryUrl({
      url: `/poems/${authorId}/${titleId}`,
      text: `View ${title}`,
    });
  };

  return (
    <motion.div
      variants={childrenVariants}
      className="flex flex-col border-2 border-dark p-2 gap-2 rounded-lg"
    >
      <label className="md:text-lg" htmlFor="title">
        Get poems by Title
      </label>
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
              title: title.title,
            })}
          >
            {`${title.title} By ${title.author || "Unknown"}`}
          </option>
        ))}
      </select>
    </motion.div>
  );
}
