export interface ISlot {
  /** Empty for pages the keypad does not dispense. */
  code: string;
  path: string;
  name: string;
  /** Shown in the header navigation. */
  inNav: boolean;
}

export const SLOTS: ISlot[] = [
  { code: "", path: "/", name: "Home", inNav: true },
  { code: "A1", path: "/fruits", name: "Fruits", inNav: true },
  { code: "A2", path: "/recipes", name: "Recipes", inNav: true },
  { code: "A3", path: "/gallery", name: "Art Gallery", inNav: true },
  { code: "B1", path: "/rock-paper-scissors", name: "Rock, Paper, Scissors", inNav: true },
  { code: "B2", path: "/poems", name: "Poems", inNav: true },
  { code: "B3", path: "/poems/random", name: "Random Poem", inNav: false },
  { code: "C1", path: "/trivia", name: "Trivia", inNav: true },
  { code: "C2", path: "/higher-or-lower", name: "Higher or Lower", inNav: true },
  { code: "C3", path: "/jokes", name: "Jokes", inNav: true },
];

/** Slots the keypad can reach. */
export const CODED_SLOTS = SLOTS.filter((slot) => slot.code);

export const findSlot = (code: string) => CODED_SLOTS.find((slot) => slot.code === code);
