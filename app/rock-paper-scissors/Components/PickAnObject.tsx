"use client";

import usePaginateList from "@/hooks/paginateList";
import { GlobalContext } from "@/context/globalContext";
import { useContext, useState } from "react";
import Packet from "@/Components/Packet";
import ShowObjects from "./ShowObjects";
import { RPSContext } from "./context";

export default function PickAnObject({
  playObjects,
}: {
  playObjects: TPlayObject[];
}) {
  const [showObjects, setShowObjects] = useState(false),
    PAGE_COUNT = 20,
    { partialList, NextButton, PreviousButton } = usePaginateList<TPlayObject>(
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

  function handleHideObjects() {
    setShowLightbox(false);
    setShowObjects(false);
  }

  function handleStartPlaying() {
    setPlayState("playing");
  }

  return (
    playState === "selectObject" && (
      <div
        className="grid items-stretch gap-4 sm:grid-cols-[minmax(9rem,13rem)_1fr] [&>span]:sm:min-h-56"
        aria-label="Play options"
        role="group"
      >
        {playerObject ? (
          <Packet name={playerObject.name} className="min-h-28 !text-4xl sm:min-h-56" />
        ) : (
          <span className="stamp flex min-h-20 items-center justify-center rounded border-2 border-dashed border-ink p-4 text-center text-xl">
            Empty slot
          </span>
        )}

        <div className="flex flex-col justify-end gap-3">
          <div aria-hidden="true" className="flex min-h-24 flex-1 gap-2 sm:min-h-36">
            {playObjects.slice(0, 5).map((object, index) => (
              <Packet
                key={object.id}
                name={object.name}
                className={`flex-1 !text-base ${index > 2 ? "hidden md:flex" : ""}`}
              />
            ))}
          </div>

        <button
          className="key text-xl"
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
          className="key key-go text-2xl"
          type="button"
          onClick={handleStartPlaying}
        >
          Play
        </button>
        </div>

        {showObjects && (
          <ShowObjects
            {...{
              NextButton,
              PreviousButton,
              handleHideObjects,
              handleStartPlaying,
              playerObject,
              partialList,
              handleSelectObject: setPlayerObject,
            }}
          />
        )}
      </div>
    )
  );
}
