# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: portfolio reviewers (recruiters and developers) judging the author's frontend craft, usually in a short desktop session and sometimes on a phone. They should be able to reach and try every activity quickly.

Secondary: casual visitors who are bored and want something to do.

## Product Purpose

Random Stuff is one site holding several small activities: browse fruits and their information, read poems by author or at random, browse and filter recipes, and play Rock, Paper, Scissors with 101 objects against the computer. It exists mainly as a portfolio piece. Success means a reviewer tries the activities and leaves convinced of the author's craft.

## Positioning

A deliberately miscellaneous collection: unrelated activities with real data, behind one site.

## Capabilities and Constraints

- Next.js 14 App Router with `output: 'export'`, so pages are static and data comes from JSON files in `data/` at build time, with no database.
- Installable PWA through `public/site.webmanifest`.
- Cypress e2e tests cover every route and rely on existing selectors and text.
- Features and data stay as they are; the current revamp changes presentation only.

## Brand Commitments

- Light and dark modes with a user toggle.
- Use the GSAP-based `components/SplitText.tsx` (react-bits) and make the UI interactive. The author asked for help making these feel good and is not prescribing how.

## Evidence on Hand

- Data: `data/*.json` for fruits, recipes, poets, poems and the 101 RPS objects; recipe photos are stored in `public/images/recipes/`, originally from TheMealDB.
- No testimonials, usage figures or press exist. Do not invent them.

## Product Principles

1. Every activity is reachable and understandable within seconds.
2. Interaction shows craft; it never delays or blocks the activity.
3. Real content leads, not decoration.
4. Each activity works fully on keyboard, on a phone and in both themes.

## Accessibility & Inclusion

The README commits to accessibility. Keep keyboard operation, visible focus and honor `prefers-reduced-motion` for all animation.
