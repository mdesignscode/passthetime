import Image from "next/image";
import Link from "next/link";

export default function RecipeButton({
  recipe,
}: {
  recipe: TRecipe;
}) {
  return (
    <Link
      aria-label={`View ${recipe.name}`}
      href={`/recipes/${recipe.id}`}
      className="slot"
    >
      <span className="slot-goods flex flex-col gap-2">
        <span className="relative block aspect-[4/3] overflow-hidden rounded-sm shadow-md">
          <Image
            src={recipe.thumbnail}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 320px"
            className="object-cover"
          />
        </span>
        <span className="stamp block text-xl leading-tight">{recipe.name}</span>
        {!!recipe.tags?.length && (
          <span className="flex flex-wrap gap-x-2 text-sm text-ink">
            {recipe.tags.map((tag) => (
              <span key={tag}>#{tag}</span>
            ))}
          </span>
        )}
      </span>
      <span className="rail">
        <span className="truncate">
          {recipe.category}, {recipe.area}
        </span>
      </span>
    </Link>
  );
}
