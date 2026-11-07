import Marquee from "@/Components/Marquee";
import { authors, poems } from "lib/data";
import dynamic from "next/dynamic";

const PoemOptions = dynamic(() => import("./Components/PoemOptions"), { ssr: false });

export default function Page() {
  return (
    <main className="machine-main">
      <Marquee title="Poetic Sanctuary" />

      <p className="marquee-note md:text-lg">
        Welcome to a poetic realm where words dance and emotions unfold! Our
        poetry collection is a sanctuary of enchanting verses that resonate with
        the rhythm of the human soul. Each poem is a brushstroke on the canvas
        of emotions, painting vivid landscapes of love, longing, and
        introspection.
      </p>

      <PoemOptions authors={authors} poems={poems} />
    </main>
  );
}
