import classNames from "classnames";

function hashName(name: string) {
  // FNV-1a, which spreads similar names across colours better than a simple sum
  let hash = 2166136261;
  for (const char of name) {
    hash = Math.imul(hash ^ char.charCodeAt(0), 16777619);
  }
  return hash >>> 0;
}

// Each print is a whole shape inside its box, so nothing is cut at the label.
const PRINTS = [
  <circle key="sun" cx="50" cy="50" r="44" />,
  <path key="bars" d="M4 96 62 4h20L24 96zM44 96 96 14v30L66 96z" />,
  <path
    key="dots"
    d="M20 12a12 12 0 1 0 .01 0M50 12a12 12 0 1 0 .01 0M80 12a12 12 0 1 0 .01 0M35 56a12 12 0 1 0 .01 0M65 56a12 12 0 1 0 .01 0"
  />,
  <path key="chevrons" d="M6 10l44 24 44-24v18L50 52 6 28zM6 48l44 24 44-24v18L50 90 6 66z" />,
];

/** A wrapped item. Its colour and print come from its name, so it looks the same everywhere. */
export default function Packet({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const hash = hashName(name);

  return (
    <span
      data-packet
      className={classNames("packet", `goods-${hash % 6}`, className)}
    >
      <svg
        className="packet-print"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        {PRINTS[(hash >>> 4) % PRINTS.length]}
      </svg>
      <span>{name}</span>
    </span>
  );
}
