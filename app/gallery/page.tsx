import Marquee from "@/Components/Marquee";
import { artworks } from "lib/data";
import type { Metadata } from "next";
import Gallery from "./Components/Gallery";

export const metadata: Metadata = {
  title: "Art Gallery | Random Stuff",
  description:
    "Browse public-domain artworks from the Art Institute of Chicago, including Van Gogh and Seurat.",
};

export default function Page() {
  return (
    <main aria-label="Art gallery" className="machine-main">
      <Marquee title="The Art Gallery" />

      <p className="marquee-note md:text-lg">
        Public-domain works from the{" "}
        <a
          href="https://www.artic.edu/"
          className="underline underline-offset-2"
        >
          Art Institute of Chicago
        </a>
        . Pick a slot to print its label.
      </p>

      <Gallery artworks={artworks} />
    </main>
  );
}
