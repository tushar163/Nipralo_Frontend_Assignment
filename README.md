# Frontend Assignment

This project is a `Next.js 16` app built with the App Router, `React 19`, Tailwind CSS, `GSAP`, and `Lenis`.

## Approach

The implementation favors small reusable UI modules over large page files. Sections such as the home services area, industries animation, and PentaKuhl hero/product blocks are split into focused components so layout, content, and animation logic stay easier to reason about.

For motion-heavy sections, the main pattern is:

- use a client component only where browser APIs are needed
- keep scroll animation logic in a dedicated hook when the interaction is substantial
- animate with transform-based properties (`x`, `y`, `scale`, `rotate`, `opacity`) for smoother performance
- use `ScrollTrigger` pinning for narrative scroll sections and `Lenis` for smoother scroll feel where needed

## Assumptions

- JavaScript only: no TypeScript was introduced
- existing assets in `public/` were reused where possible
- when exact brand/logo assets were not available, lightweight text-based stand-ins were used
- the target was visual parity and interaction feel from the references, not pixel-perfect reproduction
- reduced-motion users should still see the content in a readable final state even if the full animation is skipped

## Run Locally

```bash
npm run dev
```

Open `http://localhost:3000`.

## Notes

- `npm run build` has been used as the main verification step
- the app keeps the shared `Navbar` and `Footer` in the root layout
