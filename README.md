# The-Fued

A host-controlled survey game with six selectable categories, built with Next.js, React, TypeScript, and Tailwind CSS.

## Run locally

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000` in your browser.

## Customize the game

The category packs and answers live in `app/questions.ts`. Each category contains 10 rounds, and each answer has display text and a point value. Team and player defaults are in `STARTING_TEAMS`; they can also be edited on the setup screen before each game.

## Deploy

Push this project to a GitHub repository, then import that repository into Vercel. Vercel will detect the Next.js settings automatically.
