/** Poem text, keeping blank lines as stanza breaks. */
export default function PoemLines({ lines }: { lines: string }) {
  return (
    <>
      {lines.split("\n").map((line, index) => (
        <p className="poem-line" key={index}>
          {line}
        </p>
      ))}
    </>
  );
}
