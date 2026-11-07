"use client";

import SplitText from "@/components/SplitText";

/** The LED band that titles every page, flipping its characters in on load. */
export default function Marquee({
  title,
  large = false,
}: {
  title: string;
  large?: boolean;
}) {
  return (
    <div className="marquee">
      <SplitText
        tag="h1"
        text={title}
        effect="flip"
        trigger="load"
        delay={22}
        duration={0.55}
        hoverEffect="lift"
        textAlign="left"
        className={
          large
            ? "text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl"
            : "text-2xl sm:text-4xl lg:text-5xl"
        }
      />
    </div>
  );
}
