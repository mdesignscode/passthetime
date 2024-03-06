"use client";

import PickAnObject from "./PickAnObject";
import PlayStats from "./PlayStats";
import Playing from "./Playing";
import ShowResult from "./ShowResult";
import { RPSProvider } from "./context";

export default function MainScreen({
  playObjects,
}: {
  playObjects: TPlayObjects;
}) {
  console.log({ playObjects });

  return (
    <RPSProvider>
      <PlayStats />

      <div className="m-auto">
        <PickAnObject playObjects={playObjects} />
        <Playing objects={playObjects} />
        <ShowResult />
      </div>
    </RPSProvider>
  );
}
