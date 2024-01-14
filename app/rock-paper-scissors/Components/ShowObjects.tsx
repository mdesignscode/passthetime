"use client";

import {
  absoluteCenter,
  buttonHover,
  buttonPrimary,
} from "@/Components/TailwindClasses";
import Image from "next/image";
import ArrowIcon from "@/Components/Icons/Arrow";
import { TRPSObject } from "./PickAnObject";

interface IShowObjectsProps {
  showObjects: boolean;
  handleHideObjects(): void;
  currentIndex: number;
  handlePaginatePrevious(): void;
  handlePaginateNext(): void;
  PAGE_COUNT: number;
  LAST_PAGE: number;
  partialList: TRPSObject[];
  handleSelectObject(object: TRPSObject): void;
  handleStartPlaying(): void;
  playerObject: TRPSObject | null;
}

export default function ShowObjects({
  showObjects,
  handleHideObjects,
  currentIndex,
  handlePaginatePrevious,
  handlePaginateNext,
  PAGE_COUNT,
  LAST_PAGE,
  partialList,
  handleSelectObject,
  handleStartPlaying,
  playerObject,
}: IShowObjectsProps) {
  return (
    showObjects && (
      <div className={`z-20 ${absoluteCenter} h-full overflow-y-auto w-full grid p-4 place-items-center`}>
        <section className={`w-5/6 md:w-2/3`}>
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
              className={`${buttonPrimary} ${
                !playerObject && "opacity-50 pointer-events-none"
              } tracking-widest uppercase text-xl`}
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
            <button
              className={`${buttonHover} ${
                !currentIndex && "opacity-50 pointer-events-none"
              } grid text-light transition-all`}
              type="button"
              onClick={handlePaginatePrevious}
            >
              <ArrowIcon />
            </button>
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
            <button
              className={`${buttonHover} ${
                currentIndex + PAGE_COUNT > LAST_PAGE &&
                "opacity-50 pointer-events-none"
              } rotate-180 hover:translate-y-2 grid text-light transition-all`}
              type="button"
              onClick={handlePaginateNext}
            >
              <ArrowIcon />
            </button>
          </section>
        </section>
      </div>
    )
  );
}
