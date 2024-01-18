"use client";

import { absoluteCenter, buttonPrimary } from "@/Components/TailwindClasses";
import Image from "next/image";
import { TRPSObject } from "./PickAnObject";
import classNames from "classnames";

interface IShowObjectsProps {
  showObjects: boolean;
  handleHideObjects(): void;
  partialList: TRPSObject[];
  handleSelectObject(object: TRPSObject): void;
  handleStartPlaying(): void;
  playerObject: TRPSObject | null;
  NextButton: () => JSX.Element;
  PreviousButton: () => JSX.Element;
}

export default function ShowObjects({
  showObjects,
  handleHideObjects,
  partialList,
  handleSelectObject,
  handleStartPlaying,
  playerObject,
  NextButton,
  PreviousButton,
}: IShowObjectsProps) {
  return (
    showObjects && (
      <div
        className={classNames(
          "z-20 h-full overflow-y-auto w-full grid p-4 place-items-center",
          absoluteCenter
        )}
      >
        <section className="w-5/6 md:w-2/3">
          <section className="flex gap-4 items-center">
            <button className="grid" type="button" onClick={handleHideObjects}>
              <Image
                src="/icons/close-circle-svgrepo-com.svg"
                className="hover:opacity-50 transition-all"
                alt="Hide objects"
                width={50}
                height={50}
              />
            </button>
            <button
              className={classNames(
                buttonPrimary,
                { [buttonPrimary]: !playerObject },
                "tracking-widest uppercase text-xl"
              )}
              type="button"
              onClick={() => {
                handleStartPlaying();
                handleHideObjects();
              }}
            >
              Play
            </button>
          </section>
          <section className="border-2 border-light p-4 rounded-lg flex flex-col gap-4 mt-2 items-center">
            <PreviousButton />
            <section className="flex flex-wrap gap-2 items-center justify-center">
              {partialList.map((object) => (
                <button
                  className={buttonPrimary}
                  type="button"
                  key={object.id}
                  onClick={() => handleSelectObject(object)}
                >
                  {object.name}
                </button>
              ))}
            </section>
            <NextButton />
          </section>
        </section>
      </div>
    )
  );
}
