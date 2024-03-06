type TPlayObjects = ({
  winningMatches: {
    id: number;
    name: string;
    action: string;
    rockPaperScissorId: number | null;
  }[];
} & {
  id: number;
  name: string;
})[]

type TFruit = ({
  nutritions: {
    id: number;
    calories: number;
    fat: number;
    sugar: number;
    carbohydrates: number;
    protein: number;
  };
} & {
  id: number;
  name: string;
  family: string;
  order: string;
  genus: string;
  nutritionsId: number;
})

type TAuthor = ({
  poems: {
    id: number;
    title: string;
    lines: string;
    authorId: number | null;
  }[];
} & {
  id: number;
  name: string;
})

type TPoem = {
  id: number;
  title: string;
  lines: string;
  authorId: number | null;
}
