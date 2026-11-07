"use client";

import { ReactNode, useEffect, useRef } from "react";

/**
 * Where dispensed items land. A sticky column beside the slots on desktop, so
 * visitors can compare items; a bottom sheet on phones.
 */
export default function RetrievalTray({
  id,
  title,
  isOpen,
  closeLabel,
  onClose,
  emptyText,
  children,
}: {
  id: string;
  title?: string;
  isOpen: boolean;
  closeLabel: string;
  onClose(): void;
  emptyText: string;
  children?: ReactNode;
}) {
  const closeButton = useRef<HTMLButtonElement>(null),
    opener = useRef<Element | null>(null),
    wasOpen = useRef(false);

  useEffect(() => {
    if (isOpen && !wasOpen.current) {
      opener.current = document.activeElement;
      closeButton.current?.focus({ preventScroll: true });
    }
    if (!isOpen && wasOpen.current) {
      (opener.current as HTMLElement | null)?.focus?.({ preventScroll: true });
    }
    wasOpen.current = isOpen;

    if (!isOpen) return;

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen, onClose]);

  return (
    <aside
      id={id}
      aria-label={title || "Retrieval tray"}
      className={`tray-sheet ${isOpen ? "" : "hidden md:block"}`}
    >
      {isOpen ? (
        <div className="flex flex-col gap-2">
          <button
            ref={closeButton}
            id="close-button"
            type="button"
            aria-label={closeLabel}
            className="key close-button self-end !min-h-9 text-sm"
            onClick={onClose}
          >
            Close
          </button>
          {children}
        </div>
      ) : (
        <p className="stamp p-4 text-center text-lg text-on-enamel-dim">
          {emptyText}
        </p>
      )}
    </aside>
  );
}
