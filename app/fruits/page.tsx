import { fruits } from "lib/data";
import Marquee from "@/Components/Marquee";
import dynamic from "next/dynamic";

const RenderFruits = dynamic(() => import("./Components/RenderFruits"));

export default function Page() {
  return (
    <main aria-label="Fruits page" className="machine-main">
      <Marquee title="Fruit Island" />

      <p className="marquee-note md:text-lg">
        Find out how much nutritional value the fruits you consume daily
        contains, and the families they belong to.
      </p>

      <RenderFruits fruits={fruits} />
    </main>
  );
}
