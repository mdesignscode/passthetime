import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface IRecipe {
  name: string;
  category: string;
  area: string;
  instructions: string;
  thumbnail: string;
  tags: string | null;
  youtubeUrl: string | null;
  ingredients: { name: string }[];
  measurements: { name: string }[];
  source: string;
}

async function main() {
  const url = "https://www.themealdb.com/api/json/v1/1/random.php",
    recipes: Record<string, true> = {},
    RECIPE_COUNT = 250;

  for (let index = 0; index < RECIPE_COUNT; index++) {
    const request = await fetch(url),
      response = await request.json(),
      meal = response.meals[0],
      // create recipe model
      recipeModel = {
        youtubeUrl: meal.strYoutube,
        thumbnail: meal.strMealThumb,
        tags: meal.strTags,
        source: meal.strSource,
        name: meal.strMeal,
        area: meal.strArea,
        category: meal.strCategory,
        instructions: meal.strInstructions
      },
      measurements = Object.keys(meal)
        // get measurement keys
        .filter(key => key.includes("Measure"))
        // create measurements list
        .map(key => ({ name: meal[key] as string }))
        // remove empty keys
        .filter(obj => !!obj.name),
      ingredients = Object.keys(meal)
        // get ingredient keys
        .filter(key => key.includes("Ingredient"))
        // create ingredients list
        .map(key => ({ name: meal[key] as string }))
        // remove empty keys
        .filter(obj => !!obj.name)

    // add record if not a duplicate
    if (!recipes[meal.idMeal])
      console.log(await prisma.recipe.create({
        data: {
          ...recipeModel,
          ingredients: {
            create: ingredients
          },
          measurements: {
            create: measurements
          }
        }
      }))

    recipes[meal.idMeal] = true
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
