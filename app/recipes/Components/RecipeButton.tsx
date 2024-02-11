import ScaleIn from "@/Components/ScaleIn";
import { backgroundLight, buttonHover } from "@/Components/TailwindClasses";
import Image from "next/image";
import Link from "next/link";

export type TRecipe = {
  tags: {
    id: number;
    name: string;
    recipeId: number | null;
  }[];
  ingredients: {
    id: number;
    name: string;
    recipeId: number;
  }[];
  measurements: {
    id: number;
    name: string;
    recipeId: number;
  }[];
} & {
  id: number;
  name: string;
  category: string;
  area: string;
  instructions: string;
  thumbnail: string;
  youtubeUrl: string | null;
  source: string | null;
};

export default function RecipeButton({
  recipe,
  index,
}: {
  recipe: TRecipe;
  index: number;
}) {
  return (
    <ScaleIn index={index}>
      <Link
        aria-label={`View ${recipe.name}`}
        href={`/recipes/${recipe.id}`}
        className={`${backgroundLight} flex gap-2 flex-col ${buttonHover}`}
      >
        <section className="flex gap-4 items-center">
          <Image
            src={recipe.thumbnail}
            alt={`${recipe.name} preview`}
            width={80}
            height={80}
            className="rounded-lg"
          />
          <section>
            <strong>{recipe.name}</strong>
            <p>Category: {recipe.category}</p>
            <p>Famous in: {recipe.area}</p>
          </section>
        </section>

        {recipe.tags && (
          <section className="flex text-sm gap-x-2 flex-wrap text-gray-600">
            {recipe.tags.map((tag) => (
              <span key={tag.id}>#{tag.name}</span>
            ))}
          </section>
        )}
      </Link>
    </ScaleIn>
  );
}
