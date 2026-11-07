/** Returns a shuffled copy (Fisher-Yates). */
export default function shuffle<T>(items: readonly T[]): T[] {
  const copy = [...items];

  for (let index = copy.length - 1; index > 0; index--) {
    const swap = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swap]] = [copy[swap], copy[index]];
  }

  return copy;
}
