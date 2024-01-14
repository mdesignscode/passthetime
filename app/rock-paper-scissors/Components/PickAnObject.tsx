"use client";

import { buttonPrimary } from "@/Components/TailwindClasses";
import { GlobalContext } from "@/context/globalContext";
import { useContext, useState } from "react";
import { RPSContext } from "./context";
import ShowObjects from "./ShowObjects";
import { motion } from "framer-motion";

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
    LAST_PAGE = playObjects.length - PAGE_COUNT,
    { setShowLightbox } = useContext(GlobalContext),
    [currentIndex, setCurrentIndex] = useState(0),
    [partialList, setPartialList] = useState(playObjects.slice(0, PAGE_COUNT)),
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

  function handlePaginateNext() {
    setCurrentIndex((state) => {
      const newIndex = state + PAGE_COUNT,
        IS_LAST_PAGE = newIndex + PAGE_COUNT > LAST_PAGE;

      setPartialList(
        playObjects.slice(
          newIndex,
          IS_LAST_PAGE ? undefined : newIndex + PAGE_COUNT
        )
      );

      return newIndex;
    });
  }

  function handlePaginatePrevious() {
    setCurrentIndex((state) => {
      const newIndex = state - PAGE_COUNT;

      setPartialList(playObjects.slice(newIndex, state));

      return newIndex;
    });
  }

  function handleStartPlaying() {
    setPlayState("playing");
  }

  return (
    playState === "selectObject" && (
      <motion.section
        initial={{ scale: 0.5, opacity: 0 }}
        transition={{ duration: 0.5 }}
        animate={{ scale: 1, opacity: 100 }}
        className="flex flex-col gap-4"
      >
        <button
          className={`${buttonPrimary} text-xl`}
          type="button"
          onClick={handleShowObjects}
        >
          Pick an object to play with
        </button>

        <button
          className={`${buttonPrimary} ${
            !playerObject && "opacity-50 pointer-events-none"
          } tracking-widest uppercase text-xl`}
          type="button"
          onClick={handleStartPlaying}
        >
          Play
        </button>

        <ShowObjects
          {...{
            handleHideObjects,
            handleStartPlaying,
            playerObject,
            showObjects,
            currentIndex,
            handlePaginatePrevious,
            handlePaginateNext,
            PAGE_COUNT,
            LAST_PAGE,
            partialList,
            handleSelectObject,
          }}
        />
      </motion.section>
    )
  );
}
