export default function ArrowIcon({
  size,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size || 24}
      height={size || 24}
    >
      <path d="M5 15.5l7-7 7 7" />
    </svg>
  );
}
