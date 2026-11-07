---
name: Random Stuff
description: A street vending machine holding a miscellaneous set of small activities, each in its own lit slot.
colors:
  enamel: "#12389e"
  enamel-deep: "#0b2670"
  enamel-lift: "#2a52c4"
  on-enamel: "#f4f6ff"
  on-enamel-dim: "#d0daf9"
  display: "#0a0d1c"
  led: "#ff5a36"
  signal: "#ffcf24"
  key-go: "#cf2a1f"
  key-go-hover: "#e03226"
  glass: "#edf1f7"
  glass-shade: "#aebacf"
  rail: "#ffffff"
  tube-white: "#ffffff"
  ink: "#0a0d1c"
  ink-dim: "#454d68"
  key-face: "#f4f6fb"
  key-disabled: "#aab3c7"
  housing-black: "#000000"
  paper: "#fbfbf6"
  paper-ink: "#15151c"
  goods-red: "#c8281f"
  goods-cobalt: "#12389e"
  goods-green: "#0a7a4f"
  goods-carbon: "#17181f"
  goods-magenta: "#a8318c"
  goods-rust: "#b34700"
  night-enamel: "#0a1234"
  night-enamel-deep: "#050921"
  night-enamel-lift: "#1a2a6b"
  night-on-enamel: "#eef1ff"
  night-on-enamel-dim: "#b5c0ea"
  night-glass: "#f3f6ff"
  night-glass-shade: "#a9b9e6"
typography:
  led-display:
    fontFamily: "Doto, monospace"
    fontSize: "4.5rem"
    fontWeight: 900
    lineHeight: 1
  led-title:
    fontFamily: "Doto, monospace"
    fontSize: "3rem"
    fontWeight: 900
    lineHeight: 1
  led-readout:
    fontFamily: "Doto, monospace"
    fontSize: "1.125rem"
    fontWeight: 900
    lineHeight: 1.25
  stamp-logo:
    fontFamily: "Big Shoulders Display, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.04em"
  stamp-title:
    fontFamily: "Big Shoulders Display, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 800
    lineHeight: 1.25
    letterSpacing: "0.04em"
  stamp-label:
    fontFamily: "Big Shoulders Display, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.04em"
  stamp-compact:
    fontFamily: "Big Shoulders Display, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 800
    lineHeight: 1.5
    letterSpacing: "0.04em"
  key-label:
    fontFamily: "Big Shoulders Display, sans-serif"
    fontSize: "1rem"
    fontWeight: 800
    lineHeight: 1.5
    letterSpacing: "0.04em"
  packet-label:
    fontFamily: "Big Shoulders Display, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 800
    lineHeight: 1.02
  body:
    fontFamily: "Archivo, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
    fontFeature: "\"tnum\""
  body-note:
    fontFamily: "Archivo, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.5
  field-value:
    fontFamily: "Archivo, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1.5
  nav-link:
    fontFamily: "Archivo, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.25
  rail-fact:
    fontFamily: "Archivo, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.5
  receipt:
    fontFamily: "Red Hat Mono, monospace"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
  code-chip:
    fontFamily: "Red Hat Mono, monospace"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.667
rounded:
  photo: "2px"
  chip: "3px"
  flap: "4px"
  key: "5px"
  housing: "8px"
  sheet: "12px"
spacing:
  hair: "4px"
  seam: "8px"
  gutter: "12px"
  page: "16px"
components:
  key:
    backgroundColor: "{colors.key-face}"
    textColor: "{colors.ink}"
    typography: "{typography.key-label}"
    rounded: "{rounded.key}"
    padding: "6px 14px"
    height: "44px"
  key-hover:
    backgroundColor: "{colors.tube-white}"
  key-disabled:
    backgroundColor: "{colors.key-disabled}"
    textColor: "{colors.ink-dim}"
  key-go:
    backgroundColor: "{colors.key-go}"
    textColor: "{colors.tube-white}"
    typography: "{typography.key-label}"
    rounded: "{rounded.key}"
    padding: "6px 14px"
    height: "44px"
  key-go-hover:
    backgroundColor: "{colors.key-go-hover}"
  marquee:
    backgroundColor: "{colors.display}"
    textColor: "{colors.led}"
    typography: "{typography.led-title}"
    rounded: "{rounded.housing}"
    padding: "12px 16px"
  wall:
    backgroundColor: "{colors.enamel-deep}"
    rounded: "{rounded.housing}"
    padding: "8px"
  slot:
    backgroundColor: "{colors.glass}"
    textColor: "{colors.ink}"
    rounded: "{rounded.chip}"
  rail:
    backgroundColor: "{colors.rail}"
    textColor: "{colors.ink-dim}"
    typography: "{typography.rail-fact}"
    padding: "4px 8px"
  rail-selected:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.ink}"
  code-chip:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.tube-white}"
    typography: "{typography.code-chip}"
    rounded: "{rounded.chip}"
    padding: "0 5px"
    height: "20px"
  packet:
    backgroundColor: "{colors.goods-red}"
    textColor: "{colors.tube-white}"
    typography: "{typography.packet-label}"
    padding: "14px 8px"
  panel:
    backgroundColor: "{colors.enamel-lift}"
    textColor: "{colors.on-enamel}"
    rounded: "{rounded.housing}"
    padding: "12px"
  field:
    backgroundColor: "{colors.glass}"
    textColor: "{colors.ink}"
    typography: "{typography.field-value}"
    rounded: "{rounded.key}"
    padding: "8px 36px 8px 12px"
    height: "44px"
  receipt:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.paper-ink}"
    typography: "{typography.receipt}"
    padding: "16px 16px 24px"
  rocker:
    backgroundColor: "{colors.housing-black}"
    textColor: "{colors.on-enamel-dim}"
    typography: "{typography.stamp-compact}"
    rounded: "{rounded.key}"
    padding: "2px"
    height: "36px"
  rocker-on:
    backgroundColor: "{colors.key-face}"
    textColor: "{colors.ink}"
    rounded: "{rounded.chip}"
  nav-link:
    textColor: "{colors.on-enamel}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.flap}"
    padding: "0 8px"
    height: "36px"
  nav-link-current:
    backgroundColor: "{colors.enamel}"
    textColor: "{colors.on-enamel}"
  tray-sheet:
    backgroundColor: "{colors.enamel-deep}"
    rounded: "{rounded.sheet}"
    padding: "12px"
---

# Design System: Random Stuff

## Overview

**Creative North Star: "The Automat"**

Random Stuff is one street vending machine. The body is cobalt baked enamel; activities and items sit behind lit cool-white glass; black displays speak in red-orange dot lettering; anything meant for reading comes out as thermal paper. Every activity page is a different front on the same machine, so a recipe browser and a game of Rock, Paper, Scissors share housing, keys, slots and light.

The system is dense and physical. The screen is a fixed machine front that fills the viewport, with the page scrolling inside it, and compartments sit a thin enamel seam apart. Depth, shadow, gradient and pointed edges are all used literally: a light tube at the top of a compartment, shade falling toward the shelf, crimped seals on a packet, a torn edge on a receipt. Each one describes a thing the machine would have, which is the test for adding another.

Night mode is the same machine in the dark, lit by its own compartments. The enamel falls away and the glass brightens and throws a glow; the goods, displays, keys and paper do not change.

**Key Characteristics:**
- Cobalt enamel housing with lit glass compartments set into a dark recessed wall.
- Black LED displays title every page in red-orange dot lettering.
- Saturated packets whose color and print derive from the item's name.
- Thermal paper for all long reading, printed downward with a torn bottom edge.
- Physical keys that press in; a working keypad and a dispense animation as the signature.

## Colors

Saturated cobalt carries the machine, cool-white glass holds the goods, and two small hot signals (LED orange and selection yellow) do all the speaking.

### Primary
- **Baked Cobalt Enamel** (#12389e): the body of the machine; the page background behind everything, and the current and hover state of a navigation link.
- **Recessed Enamel** (#0b2670): anything set back into the body: the header band, the wall behind compartments, the retrieval tray.
- **Raised Enamel** (#2a52c4): panels that stand proud of the body, such as the control column and filter panels. Also the scrollbar thumb.
- **Enamel White** (#f4f6ff) and **Dim Enamel White** (#d0daf9): text printed directly on enamel; the dim step serves intro notes and unlit rocker labels, and holds 7.23:1 on the body.

### Secondary
- **LED Red-Orange** (#ff5a36) on **Display Black** (#0a0d1c): the only pairing for displays, at 6.22:1. It appears in marquees, the keypad display and the score readout, and nowhere else.

### Tertiary
- **Selection Yellow** (#ffcf24): the selected slot's rail and frame, an active filter tag, the focus outline and text selection.
- **Go Red** (#cf2a1f, hover #e03226): the go key, and only the go key.

### Neutral
- **Lit Glass** (#edf1f7) falling to **Glass Shade** (#aebacf): compartment interiors, field faces. Shade falls from a white tube at the top toward the shelf.
- **Rail White** (#ffffff): the shelf rail below a compartment. **Tube White** (#ffffff) is the light tube, key hover, packet lettering and code chip lettering.
- **Machine Ink** (#0a0d1c) and **Worn Ink** (#454d68): text on glass and rails; the worn step carries rail facts and disabled key labels.
- **Key Face** (#f4f6fb) and **Dead Key** (#aab3c7): the resting and disabled faces of a key.
- **Housing Black** (#000000): the well behind the rocker and the flap, and the bezel of a display.
- **Thermal Paper** (#fbfbf6) and **Thermal Ink** (#15151c): receipts only.

### Goods
Six saturated wrappers: **Tomato** (#c8281f), **Cobalt** (#12389e), **Bottle Green** (#0a7a4f), **Carbon** (#17181f), **Magenta** (#a8318c) and **Rust** (#b34700). White packet lettering holds at least 5.37:1 on all six.

### Night
Only the enamel and glass families change: **Night Enamel** (#0a1234), **Night Recess** (#050921), **Night Raised** (#1a2a6b), **Night White** (#eef1ff), **Night Dim White** (#b5c0ea), **Night Glass** (#f3f6ff) and **Night Glass Shade** (#a9b9e6). The theme is the `.dark` class on the root element, toggled by the rocker and set before first paint.

### Named Rules
**The Selection Yellow Rule.** Yellow means this one is chosen or this one has focus. It marks a selected slot, an active tag, the focus outline and selected text, and is never decoration, a heading color or a hover.

**The Same Machine Rule.** Night changes the light, not the machine. Glass stays bright, paper stays paper, keys stay pale, and displays and goods keep their exact colors.

**The Name Decides Rule.** A packet's wrapper color and print are hashed from the item's name, so an apple is the same packet on every page. Never assign a named packet's color by hand or by position.

## Typography

**Display Font:** Doto, variable, self-hosted (with monospace)
**Panel Font:** Big Shoulders Display, 700 and 800 (with sans-serif)
**Body Font:** Archivo (with sans-serif)
**Label/Mono Font:** Red Hat Mono (with monospace)

**Character:** Each face is a different part of the machine. Doto is the dot-matrix display, Big Shoulders is the lettering stamped on the panels and wrappers, Red Hat Mono is the receipt printer, and Archivo is the plain voice of the instructions. Numerals are tabular everywhere.

### Hierarchy
- **LED Display** (Doto 900, 2.25rem rising to 6rem by width, recorded at its 1280px step of 4.5rem, line-height 1): the home marquee.
- **LED Title** (Doto 900, 1.5rem rising to 3rem, line-height 1 at full size): the h1 of every other page.
- **LED Readout** (Doto 900, 1.125rem, 1.25): the keypad display, which echoes each key and code.
- **Stamp** (Big Shoulders 800, uppercase, 0.04em tracking; 1.5rem logo, 1.25rem item titles at 1.25, 1.125rem rail titles and panel labels at 1, 0.875rem on the rocker): names of compartments, items, panels and switches.
- **Key Label** (Big Shoulders 800, uppercase, 0.04em tracking, 1rem; keypad keys 1.25rem; compact header keys 0.875rem): every key.
- **Packet Label** (Big Shoulders 800, 1.25rem at 1.02, sentence case, no tracking): the name on a wrapper, scaled with the packet up to 2.25rem on the game surfaces.
- **Body** (Archivo 400, 1rem at 1.5, notes 1.125rem from 768px; capped at 75ch): instructions and page introductions on enamel.
- **Rail Fact** (Archivo 400, 0.8125rem at 1.5): the one fact on a rail.
- **Receipt** (Red Hat Mono 400, 0.9375rem at 1.6, 1rem for poems from 768px, bold for its headings): poems and fruit labels.
- **Code** (Red Hat Mono 600, 0.75rem on a 20px line): the slot code chip.

### Named Rules
**The Display Only Rule.** Doto appears only inside a black display. The score readout keeps the display's black and orange but swaps to Big Shoulders, because a live count has to read at a glance.

**The Printed Reading Rule.** Long text that is the content itself prints in Red Hat Mono on paper. Archivo on enamel introduces it and never replaces it.

## Layout

The viewport is the machine: the body is locked to the dynamic viewport height, a slim enamel header stays in place, and the main area scrolls inside it. Page gutters and vertical gaps are 12px, rising to 16px from 768px; compartments sit 8px apart inside a wall with 8px of padding.

Every page stacks a marquee, an optional note, and then its working surface. On the home page, a wall on a 12-column grid holds five deliberately unequal compartments (7 and 5 columns above, 5, 4 and 3 below) with the first row taller, beside a 17rem control column from 1024px. Below 768px the wall becomes two columns with most compartments spanning the full width.

Item walls use auto-filling grids with a minimum track between 8rem and 14rem according to the item. Beside a wall, a retrieval tray takes a 19rem or wider sticky column from 768px; below that the tray becomes a bottom sheet capped at 72% of viewport height. Reading receipts cap at 42rem wide and center. Touch targets on keys, fields and phone navigation stay at 44px or more; the compact header keys and tablet-and-up navigation run at 36px.

## Elevation & Depth

Depth is physical and hybrid: shadows describe what is lit, recessed or pressed, with no ambient card shadow anywhere. Recessed parts cast inward, raised parts cast down, and keys swap one for the other when pressed. At night the compartments become the light source, throwing a soft blue glow outward, and marquees gain a faint orange spill.

### Shadow Vocabulary
- **Compartment, day** (`box-shadow: 0 2px 3px rgb(4 12 40 / 0.35)`): a slot seated in the wall.
- **Compartment, night** (`box-shadow: 0 10px 44px rgb(170 195 255 / 0.3)`): the slot as the machine's light source.
- **Glass recess** (`box-shadow: inset 0 16px 16px -14px rgb(10 13 28 / 0.4), inset 12px 0 14px -12px rgb(10 13 28 / 0.45), inset -12px 0 14px -12px rgb(10 13 28 / 0.45)`): a compartment holding goods, with a vertical gradient from white through glass to glass shade.
- **Light tube** (`box-shadow: 0 2px 12px 2px rgb(255 255 255 / 0.95)`): the 4px white bar along the top of a recess.
- **Well** (`box-shadow: inset 0 2px 10px rgb(0 0 0 / 0.45)`): the wall and the desktop tray.
- **Display bezel** (`box-shadow: inset 0 0 0 2px #000, inset 0 3px 14px rgb(0 0 0 / 0.9)`): a black display, day.
- **Display spill** (`box-shadow: inset 0 0 0 2px #000, 0 6px 36px rgb(255 90 54 / 0.22)`): a black display, night.
- **Raised panel** (`box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.2), 0 2px 6px rgb(0 0 0 / 0.3)`): panels, with a lit top edge.
- **Seated photo** (`box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)`): a photograph set into a compartment.
- **Rocker cap** (`box-shadow: 0 1px 4px rgb(255 255 255 / 0.35)`): the active side of the lights switch.
- **Key at rest** (`box-shadow: 0 2px 5px rgb(0 0 0 / 0.4)`) and **key pressed** (`box-shadow: inset 0 2px 4px rgb(0 0 0 / 0.35)`, moved down 2px).
- **Bottom sheet** (`box-shadow: 0 -8px 30px rgb(0 0 0 / 0.5)`): the phone tray, casting upward.

### Named Rules
**The Lit From Within Rule.** Light comes from the machine. Day or night, the brightest thing in a compartment is its top edge, and shade falls toward the shelf.

## Shapes

Corners are small and manufactured. Radii step up with the size of the part: 2px on inset photographs, 3px on slots and code chips, 4px on the flap and navigation links, 5px on keys and fields, 8px on displays, walls and panels, 12px on the top corners of the phone sheet.

Two silhouettes are cut rather than rounded, and they are the system's signatures. Packets have square sides and 10px crimped zigzag seals along the top and bottom. Receipts have square sides and top with a 12px torn zigzag along the bottom edge. Both are CSS masks and neither takes a radius.

## Components

### Buttons
Physical and pressable: every button is a key on the machine.
- **Shape:** gently squared corners (5px), at least 44px tall; a 36px compact size lives in the header and tray.
- **Primary (Go Key):** white stamped lettering on Go Red, one per working view, for the action that moves the machine forward (Surprise Me, Play Again).
- **Standard Key:** ink stamped lettering on the pale key face, with the resting key shadow.
- **Hover / Focus:** the face brightens within 90ms and the key does not lift. Pressed, it drops 2px and its shadow goes inset. Focus is the global 3px yellow outline offset by 2px.
- **Disabled:** dead key face, worn ink, no shadow, not-allowed cursor.

### Chips
- **Code Chip:** white mono on ink, 3px corners, 20px tall. See The Punchable Code Rule below.
- **Filter Tag:** ink on glass, 4px corners, 32px minimum height, medium weight 0.875rem, hover to white, yellow when active and exposed with `aria-pressed`.

### Cards / Containers
- **Wall:** the recessed enamel well that holds slots.
- **Slot:** the machine's card. A glass compartment (3px corners) over a white rail, used as a link or a pressed toggle. Hover lifts the packet or home goods inside by 5px and tilts them 1.5 degrees; the slot itself stays seated.
- **Recess or Plain Glass:** compartments holding goods get the full recess and light tube; compartments holding only a stamped name, or a photo and title, use flat lit glass.
- **Rail:** one line under a slot, white with a hairline of glass shade above. A slot with no fact to state, such as the game's object picker, has no rail.
- **Selected:** rail turns yellow with ink text and a 3px yellow inner frame sits above the contents, in every slot.
- **Panel:** a raised enamel plate for controls.

### Inputs / Fields
- **Style:** native select on a glass face, 5px corners, 44px tall, medium weight ink, with an inline heavy ink chevron.
- **Focus:** the global yellow outline.

### Navigation
A slim recessed band: stamped logo, coded links, keypad key, lights rocker. Links are Archivo 0.875rem with a code chip, 36px tall at 768px and up. Hover and current both fill with body enamel, and current also goes semibold. Below 768px the links collapse behind a Menu key into a panel with a keypad and 44px links, over a 70% black overlay.

### Black Display (Marquee)
Black glass with a black bezel and orange dot lettering. Page titles flip in by character on load (0.55s with a 22ms stagger) and lift on hover. The keypad display is the small form, announces politely to assistive technology, and echoes every entry. Below 1024px on the home page, a fixed display along the bottom edge echoes a dispense, because the control column is out of view.

### Packet
A wrapped good with a crimped silhouette, a large 24% white print drawn from four whole shapes (sun, bars, dots, chevrons), and its name at the foot. The print fills the space above the label and never runs behind it. A good that is not a named item, like the Random Poem dice, may be hand-set on a goods color.

### Receipt
Thermal paper for reading, with a torn bottom edge and dotted or dashed rules between entries. Prints downward over 520ms from behind a clip. Fruit labels and poems both use it; it also appears as goods in the home Poems compartment.

### Keypad and Dispense
The signature interaction. Six keys (A, B, C, 1, 2, 3) plus Clear and a Surprise Me go key, driven by pointer or keyboard. A valid code or a slot click echoes on the display, turns the slot's rail yellow and drops one packet (0.6s, accelerating, with a slight random tilt) into the retrieval flap, which swings open on its top hinge at 68 degrees before the route opens. Off screen, the packet falls past the bottom edge. With reduced motion, or with no slot on the page, navigation is immediate. An invalid code reports "is empty" on the display.

### Retrieval Tray
Where a chosen item lands: recessed enamel, a compact Close key that takes focus on open, and a receipt inside. Sticky column from 768px and bottom sheet below. Escape closes it and focus returns to the opener.

### Lights Rocker
A two-position switch in a black well with Day and Night stamped on it. The active side is a raised pale cap; it swaps within 140ms.

### Named Rules
**The Punchable Code Rule.** A slot code appears only where the keypad can punch it: on the home page's slots and in the navigation. Home is reached by the logo and navigation and has no code. Navigation chips show only on phones and at 1536px and wider, where the links have room. Item rails in the fruit, recipe and poem walls carry one fact and no code.

**The One Fact Rule.** An item rail states a single real fact from the data, such as calories, category and area, or a poem count. It never carries invented labels or a second fact.

**The One Go Key Rule.** Red marks the single action that moves the current view forward. All other actions in that view are standard keys.

## Do's and Don'ts

### Do:
- **Do** seat every activity's items in a wall of slots, with the enamel seam (8px) showing between them.
- **Do** title every page with a black display, and put live machine messages on one.
- **Do** wrap countable goods such as fruits and game objects in a Packet; give recipes their photograph and poets and poems a stamped name on plain glass.
- **Do** print long reading content on a receipt, capped at 42rem when it stands alone.
- **Do** keep keys physical: 44px minimum, inset and 2px down when pressed.
- **Do** honor reduced motion: titles appear without the flip, dispense navigates at once, and all transitions collapse to 1ms.
- **Do** keep the motion grammar small: LED titles flip in on load, receipts print downward, and a pointer light drifts across the enamel at night.

### Don't:
- **Don't** put a slot code on an item rail; a code that cannot be punched is a false promise.
- **Don't** use yellow for hover, emphasis or decoration; it marks selection and focus only.
- **Don't** use Doto outside a black display, or LED orange on anything but display black.
- **Don't** use more than one go key in a working view.
- **Don't** invert the machine at night: glass, paper, keys, displays and goods stay as they are.
- **Don't** add entrance animations beyond the LED flip and the receipt print.
- **Don't** set a stamped label above a headline as an eyebrow; a stamp names the control or compartment it sits on.
- **Don't** round a packet or a receipt; their cut edges are the silhouette.
