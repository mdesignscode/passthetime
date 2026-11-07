type TPlayObject = {
  id: number;
  name: string;
  winningMatches: { name: string; action: string }[];
};

type TPlayObjects = TPlayObject[];

type TFruit = {
  id: number;
  name: string;
  family: string;
  order: string;
  genus: string;
  nutritions: {
    calories: number;
    fat: number;
    sugar: number;
    carbohydrates: number;
    protein: number;
  };
};

type TPoem = {
  id: number;
  authorId: number;
  title: string;
  lines: string;
};

type TAuthor = {
  id: number;
  name: string;
  poems: TPoem[];
};

type TPoemWithAuthor = TPoem & {
  Author: { id: number; name: string } | null;
};

type TRecipe = {
  id: number;
  name: string;
  category: string;
  area: string;
  thumbnail: string;
  youtubeUrl: string | null;
  source: string | null;
  instructions: string;
  ingredients: string[];
  measurements: string[];
  tags: string[];
};
