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
  return (
    <RPSProvider>
      <div className="grid items-start gap-3 md:grid-cols-[1fr_19rem] md:gap-4">
        <section
          aria-label="Game"
          className="wall min-h-72 md:min-h-96"
        >
          <div className="slot slot-goods slot-recess justify-center p-4 hover:!transform-none">
            <PickAnObject playObjects={playObjects} />
            <Playing objects={playObjects} />
            <ShowResult />
          </div>
        </section>

        <PlayStats />
      </div>
    </RPSProvider>
  );
}
