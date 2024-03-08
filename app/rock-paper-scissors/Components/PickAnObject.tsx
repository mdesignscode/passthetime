"use client";

import { buttonDisabled, buttonPrimary } from "@/Components/TailwindClasses";
import ScaleIn from "@/app/Components/ScaleIn";
import { GlobalContext } from "@/context/globalContext";
import usePaginateList from "@/hooks/paginateList";
import classNames from "classnames";
import dynamic from "next/dynamic";
import { useContext, useState } from "react";
import { RPSContext } from "./context";

const ShowObjects = dynamic(() => import("./ShowObjects"));

export type TRPSObject = {
  winningMatches: {
    id: number;
    name: string;
    action: string;
    rockPaperScissorId: number | null;
  }[];
} & {
  id: number;
  name: string;
};

export default function PickAnObject({
  playObjects,
}: {
  playObjects: TRPSObject[];
}) {
  const [showObjects, setShowObjects] = useState(false),
    PAGE_COUNT = 20,
    { partialList, NextButton, PreviousButton } = usePaginateList<TRPSObject>(
      playObjects,
      PAGE_COUNT
    ),
    { setShowLightbox } = useContext(GlobalContext),
    { setPlayerObject, playerObject, setPlayState, playState } =
      useContext(RPSContext);

  function handleShowObjects() {
    setShowLightbox(true);
    setShowObjects(true);
  }

  function handleSelectObject(object: TRPSObject) {
    setPlayerObject(object);
  }

  function handleHideObjects() {
    setShowLightbox(false);
    setShowObjects(false);
  }

  function handleStartPlaying() {
    setPlayState("playing");
  }

  return (
    playState === "selectObject" && (
      <ScaleIn className="flex flex-col gap-4" ariaLabel="Play options">
        <button
          className={classNames(buttonPrimary, "text-xl")}
          type="button"
          onClick={handleShowObjects}
          aria-label="Show all objects"
          aria-controls="all-objects"
          aria-expanded={showObjects}
          id="all-objects-button"
        >
          Pick an object to play with
        </button>

        <button
          aria-label={
            playerObject
              ? `Play with ${playerObject?.name}`
              : "Pick an object to play with"
          }
          disabled={!playerObject}
          className={classNames(
            buttonPrimary,
            { [buttonDisabled]: !playerObject },
            "tracking-widest uppercase text-xl"
          )}
          type="button"
          onClick={handleStartPlaying}
        >
          Play
        </button>

        {showObjects && (
          <ShowObjects
            {...{
              NextButton,
              PreviousButton,
              handleHideObjects,
              handleStartPlaying,
              playerObject,
              showObjects,
              partialList,
              handleSelectObject,
            }}
          />
        )}
      </ScaleIn>
    )
  );
}
