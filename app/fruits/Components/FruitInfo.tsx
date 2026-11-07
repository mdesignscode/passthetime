"use client";

import RetrievalTray from "@/Components/RetrievalTray";
import { useCallback, useContext } from "react";
import { FruitContext } from "./context";

const generalInfoKeys = ["name", "family", "order", "genus"],
  nutritionalInfoKeys = ["calories", "fat", "sugar", "carbohydrates", "protein"];

function Rows({ source, keys }: { source: Record<string, any>; keys: string[] }) {
  return (
    <dl>
      {keys.map((key) => (
        <div key={key} className="flex justify-between gap-4 border-b border-dotted border-current py-0.5">
          <dt className="capitalize">{key}</dt>
          <dd className="text-right font-semibold">{source[key]}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function FruitInfo() {
  const { fruit, setFruit } = useContext(FruitContext),
    close = useCallback(() => setFruit(null), [setFruit]);

  return (
    <RetrievalTray
      id="fruit-info"
      title={fruit ? `${fruit.name} information` : undefined}
      isOpen={!!fruit}
      closeLabel={`Hide ${fruit?.name} information`}
      onClose={close}
      emptyText="Pick a fruit to dispense its label"
    >
      {fruit && (
        <article key={fruit.id} className="receipt receipt-print flex flex-col gap-4">
          <section>
            <h2 className="font-bold">General information</h2>
            <Rows source={fruit} keys={generalInfoKeys} />
          </section>
          <section>
            <h2 className="font-bold">Nutritional value</h2>
            <Rows source={fruit.nutritions} keys={nutritionalInfoKeys} />
          </section>
        </article>
      )}
    </RetrievalTray>
  );
}
