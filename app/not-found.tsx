import Link from "next/link";

export default function NotFound() {
  return (
    <main className="machine-main">
      <h1 className="marquee text-3xl md:text-5xl">This slot is empty</h1>
      <p className="marquee-note">Nothing is stocked at this address.</p>
      <Link href="/" className="key self-start">
        Back to the machine
      </Link>
    </main>
  );
}
