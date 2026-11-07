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

type TTriviaQuestion = {
  id: number;
  category: string;
  difficulty: string;
  question: string;
  correctAnswer: string;
  incorrectAnswers: string[];
};

type TArtwork = {
  id: number;
  title: string;
  artist: string;
  date: string;
  medium: string | null;
  place: string | null;
  credit: string | null;
  image: string;
};

type TJoke = {
  id: number;
  category: string;
  setup: string;
  punchline: string | null;
};

type TCard = {
  code: string;
  name: string;
  rank: number;
  image: string;
};
