"use client";

import Packet from "@/Components/Packet";
import { useEffect, useRef } from "react";

interface IShowObjectsProps {
  handleHideObjects(): void;
  partialList: TPlayObject[];
  handleSelectObject(object: TPlayObject): void;
  handleStartPlaying(): void;
  playerObject: TPlayObject | null;
  NextButton: (props: object) => JSX.Element;
  PreviousButton: (props: object) => JSX.Element;
}

export default function ShowObjects({
  handleHideObjects,
  partialList,
  handleSelectObject,
  handleStartPlaying,
  playerObject,
  NextButton,
  PreviousButton,
}: IShowObjectsProps) {
  const dialog = useRef<HTMLDialogElement>(null);

  // a native dialog gives the picker focus trapping and Escape handling
  useEffect(() => {
    const element = dialog.current;
    element?.showModal();
    return () => element?.close();
  }, []);

  return (
    <dialog
      ref={dialog}
      id="all-objects"
      aria-label="Pick an object"
      onCancel={handleHideObjects}
      className="m-auto max-h-[92dvh] w-[min(56rem,94vw)] overflow-y-auto rounded-lg bg-enamel p-3 text-on-enamel backdrop:bg-black/70"
    >
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <button
          aria-label="Hide all objects"
          className="key close-button"
          type="button"
          onClick={handleHideObjects}
        >
          Close
        </button>
        <PreviousButton />
        <NextButton />
        <button
          aria-label={
            playerObject
              ? `Play with ${playerObject?.name}`
              : "Pick an object to play with"
          }
          disabled={!playerObject}
          className="key key-go ml-auto"
          type="button"
          onClick={() => {
            handleStartPlaying();
            handleHideObjects();
          }}
        >
          Play
        </button>
      </div>

      <section
        aria-label="All objects"
        className="wall grid-cols-[repeat(auto-fill,minmax(8rem,1fr))]"
      >
        {partialList.map((object) => (
          <button
            aria-label={`Select ${object.name}`}
            aria-pressed={playerObject?.id === object.id}
            className="slot"
            type="button"
            key={object.id}
            onClick={() => handleSelectObject(object)}
          >
            <span className="slot-goods slot-recess w-full">
              <Packet name={object.name} className="w-full !min-h-20" />
            </span>
          </button>
        ))}
      </section>
    </dialog>
  );
}
