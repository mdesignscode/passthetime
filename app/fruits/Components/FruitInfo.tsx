"use client";

import { GlobalContext } from "@/context/globalContext";
import classNames from "classnames";
import Image from "next/image";
import { useContext } from "react";
import { FruitContext } from "./context";

export default function FruitInfo() {
  const { setShowInfo, showInfo, fruit } = useContext(FruitContext);
  const { setShowLightbox } = useContext(GlobalContext);

  const generalInfoKeys = ["name", "family", "order", "genus"],
    nutritionalInfoKeys = [
      "calories",
      "fat",
      "sugar",
      "carbohydrates",
      "protein",
    ];

  function handleHideInfo() {
    setShowInfo(false);
    setShowLightbox(false);
  }

  return (
    showInfo && (
      <article
        aria-labelledby={`${fruit?.name}-info-button`}
        aria-hidden={!showInfo}
        id="fruit-info"
        style={{
          opacity: showInfo ? 1 : 0,
          transition: "opacity ease-in-out 1s 150ms",
          transform: "translate(-50%, -50%)",
        }}
        className={classNames(
          "flex flex-col absolute top-1/2 left-1/2 gap-2",
          showInfo ? "z-20" : "-z-10"
        )}
      >
        <button
          aria-label={`Hide ${fruit?.name} information`}
          className="self-start close-button"
          type="button"
          onClick={handleHideInfo}
        >
          <Image
            src="/icons/close-circle-svgrepo-com.svg"
            alt="Hide fruit info"
            width={50}
            height={50}
          />
        </button>

        <div className="flex flex-col md:flex-row md:gap-6 bg-light gap-4 rounded-lg px-6 py-4 md:text-lg">
          <div>
            <h1 className="font-bold">General information</h1>
            <div className="flex gap-4">
              <div>
                {generalInfoKeys.map((info) => (
                  <p key={info}>{info}</p>
                ))}
              </div>
              <div>
                {generalInfoKeys.map((info) => (
                  <p key={info}>{(fruit as Record<string, any>)[info]}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="md:border-l-2 border-dark md:pl-6">
            <h1 className="font-bold">Nutritional value</h1>
            <div className="flex gap-4">
              <div>
                {nutritionalInfoKeys.map((info) => (
                  <p key={info}>{info}</p>
                ))}
              </div>
              <div>
                {nutritionalInfoKeys.map((info) => (
                  <p key={info}>
                    {(fruit?.nutritions as Record<string, number>)[info]}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>
    )
  );
}
