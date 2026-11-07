import { poems } from "lib/data";
import RandomPoem from "./Components/RandomPoem";

export default function Page() {
  const randomIndex = Math.floor(Math.random() * poems.length);

  return <RandomPoem poems={poems} initialIndex={randomIndex} />;
}
