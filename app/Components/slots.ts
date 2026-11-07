export interface ISlot {
  code: string;
  path: string;
  name: string;
  /** Shown in the header navigation. */
  inNav: boolean;
}

export const SLOTS: ISlot[] = [
  { code: "A1", path: "/fruits", name: "Fruits", inNav: true },
  { code: "A2", path: "/recipes", name: "Recipes", inNav: true },
  { code: "B1", path: "/rock-paper-scissors", name: "Rock, Paper, Scissors", inNav: true },
  { code: "B2", path: "/poems", name: "Poems", inNav: true },
  { code: "B3", path: "/poems/random", name: "Random Poem", inNav: false },
  { code: "C1", path: "/", name: "Home", inNav: true },
];

export const findSlot = (code: string) => SLOTS.find((slot) => slot.code === code);
