"use client";

import RetrievalTray from "@/Components/RetrievalTray";
import Image from "next/image";
import { useCallback, useState } from "react";

export default function Gallery({ artworks }: { artworks: TArtwork[] }) {
  const [selected, setSelected] = useState<TArtwork | null>(null),
    close = useCallback(() => setSelected(null), []);

  const details = selected
    ? [
        ["Artist", selected.artist],
        ["Date", selected.date],
        ["Medium", selected.medium],
        ["Origin", selected.place],
      ].filter(([, value]) => value)
    : [];

  return (
    <div className="grid items-start gap-3 md:grid-cols-[1fr_22rem] md:gap-4">
      <section
        aria-label="Artworks"
        className="wall grid-cols-[repeat(auto-fill,minmax(10rem,1fr))]"
      >
        {artworks.map((artwork) => (
          <div key={artwork.id} className="flex">
            <button
              type="button"
              className="slot"
              onClick={() => setSelected(artwork)}
              aria-controls="art-info"
              aria-pressed={selected?.id === artwork.id}
            >
              <span className="slot-goods slot-recess w-full">
                <span className="relative block aspect-[4/5] overflow-hidden rounded-sm shadow-md">
                  <Image
                    src={artwork.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 50vw, 240px"
                    className="object-cover"
                  />
                </span>
              </span>
              <span className="rail w-full flex-col !items-start !gap-0">
                <span className="stamp line-clamp-2 text-base leading-tight text-ink">
                  {artwork.title}
                </span>
                <span className="truncate">{artwork.artist}</span>
              </span>
            </button>
          </div>
        ))}
      </section>

      <RetrievalTray
        id="art-info"
        title={selected ? `${selected.title} details` : undefined}
        isOpen={!!selected}
        closeLabel={`Hide ${selected?.title} details`}
        onClose={close}
        emptyText="Pick a work to print its label"
        fitToScreen
      >
        {selected && (
          <>
            <Image
              key={selected.image}
              src={selected.image}
              alt={`${selected.title} by ${selected.artist}`}
              width={843}
              height={843}
              sizes="352px"
              className="h-auto min-h-32 w-full flex-shrink object-contain"
            />
            <article key={selected.id} className="receipt receipt-print shrink-0">
              <h2 className="mb-2 border-b border-dashed border-current pb-2 font-bold">
                {selected.title}
              </h2>
              {/* artic.edu answers 403 to some referrers, including this site, so send none */}
              <a
                href={`https://www.artic.edu/artworks/${selected.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-2 inline-block underline underline-offset-2"
              >
                View at the museum
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <dl>
                {details.map(([label, value]) => (
                  <div
                    key={label}
                    className="flex justify-between gap-4 border-b border-dotted border-current py-0.5"
                  >
                    <dt>{label}</dt>
                    <dd className="text-right font-semibold">{value}</dd>
                  </div>
                ))}
              </dl>
              {selected.credit && (
                <p className="mt-2 line-clamp-3 text-xs leading-snug" title={selected.credit}>
                  {selected.credit}
                </p>
              )}
            </article>
          </>
        )}
      </RetrievalTray>
    </div>
  );
}
