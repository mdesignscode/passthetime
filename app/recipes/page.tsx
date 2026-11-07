import Marquee from "@/Components/Marquee";
import { recipeTags, recipes } from "lib/data";
import dynamic from "next/dynamic";

const DisplayAllRecipes = dynamic(
  () => import("./Components/DisplayAllRecipes")
);

export default function Page() {
  return (
    <main aria-label="View recipes" className="machine-main">
      <Marquee title="Delightful Delicacies" />

      <p className="marquee-note md:text-lg">
        Welcome to our culinary haven, where the aroma of creativity meets the
        joy of flavors! Discover a treasure trove of mouthwatering recipes that
        cater to every palate. Our curated collection showcases a blend of
        tradition and innovation, offering a delightful journey through the
        world of gastronomy.
      </p>

      <DisplayAllRecipes tags={recipeTags} recipes={recipes} />
    </main>
  );
}
