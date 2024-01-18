"use client";

import { buttonDisabled, buttonPrimary } from "@/Components/TailwindClasses";
import { GlobalContext } from "@/context/globalContext";
import { useContext, useState } from "react";
import { RPSContext } from "./context";
import { motion } from "framer-motion";
import usePaginateList from "@/hooks/paginateList";
import dynamic from "next/dynamic";
import classNames from "classnames";

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
      <motion.section
        initial={{ scale: 0.5, opacity: 0 }}
        transition={{ duration: 0.5 }}
        animate={{ scale: 1, opacity: 100 }}
        className="flex flex-col gap-4"
      >
        <button
          className={classNames(buttonPrimary, "text-xl")}
          type="button"
          onClick={handleShowObjects}
        >
          Pick an object to play with
        </button>

        <button
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
      </motion.section>
    )
  );
}
