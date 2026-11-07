"use client";

import { GlobalContext } from "@/context/globalContext";
import { ISlot } from "@/Components/slots";
import { gsap } from "gsap";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useContext } from "react";

/**
 * The machine's signature move: the display echoes the slot, the slot lights
 * up, one packet falls into the retrieval flap, then the route opens. Where the
 * flap is off screen the packet falls past the bottom edge instead. With no
 * slot on the page, or with reduced motion, it navigates straight away.
 */
export default function useDispense() {
  const router = useRouter(),
    pathname = usePathname(),
    { setMachineMessage } = useContext(GlobalContext);

  return useCallback(
    (slot: ISlot) => {
      setMachineMessage(`${slot.code} ${slot.name}`);

      const element = document.querySelector<HTMLElement>(
          `[data-slot="${slot.code}"]`
        ),
        packet = element?.querySelector<HTMLElement>("[data-packet]");

      if (
        !element ||
        !packet ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        router.push(slot.path);
        return;
      }

      const from = packet.getBoundingClientRect(),
        flap = document.querySelector<HTMLElement>("[data-flap]"),
        flapBox = flap?.getBoundingClientRect(),
        flapInView =
          !!flapBox && flapBox.width > 0 && flapBox.top < window.innerHeight,
        clone = packet.cloneNode(true) as HTMLElement;

      element.classList.add("is-selected");
      packet.style.visibility = "hidden";
      document.body.append(clone);
      gsap.set(clone, {
        position: "fixed",
        left: from.left,
        top: from.top,
        width: from.width,
        height: from.height,
        margin: 0,
        zIndex: 30,
        pointerEvents: "none",
      });

      function finish() {
        router.push(slot.path);
        clone.remove();
        if (slot.path === pathname) {
          element?.classList.remove("is-selected");
          flap?.classList.remove("is-open");
          if (packet) packet.style.visibility = "";
          setMachineMessage("Enter a code");
        }
      }

      gsap
        .timeline({ onComplete: finish })
        .to(clone, {
          x: flapInView
            ? flapBox.left + flapBox.width / 2 - from.left - from.width / 2
            : 0,
          y: flapInView
            ? flapBox.top + flapBox.height / 2 - from.top - from.height / 2
            : window.innerHeight - from.top + 20,
          rotation: gsap.utils.random(-12, 12),
          scale: flapInView ? 0.45 : 1,
          duration: 0.6,
          ease: "power2.in",
        })
        .call(() => flap?.classList.add("is-open"), undefined, 0.3)
        .to(clone, { opacity: 0, duration: 0.14 });
    },
    [pathname, router, setMachineMessage]
  );
}
