"use client";

import Packet from "@/Components/Packet";
import { useContext } from "react";
import { FruitContext } from "./context";

export default function FruitButton({
  fruit,
}: {
  fruit: TFruit;
}) {
  const { setFruit, fruit: selected } = useContext(FruitContext);

  return (
    <div className="flex">
      <button
        type="button"
        className="slot"
        onClick={() => setFruit(fruit)}
        aria-controls="fruit-info"
        aria-label={`Show ${fruit.name} information`}
        aria-pressed={selected?.id === fruit.id}
        id={`${fruit.name}-info-button`}
      >
        <span className="slot-goods slot-recess w-full">
          <Packet name={fruit.name} className="w-full" />
        </span>
        <span className="rail w-full">
                    <span>{fruit.nutritions.calories} kcal</span>
        </span>
      </button>
    </div>
  );
}
