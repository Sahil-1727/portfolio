# Sahil Teltumde — Portfolio

A personal portfolio built with React, TypeScript, Vite, and Material UI, showcasing my background, technical skills, projects, and contact information.

## Live Demo

https://sahil-1727.github.io/portfolio/

## Tech Stack

- React
- Vite
- Material UI
- TypeScript
- GitHub Pages
- GitHub Actions

## Development

Install dependencies with `npm ci`, then run `npm run dev`.

- `npm run lint` — checks JavaScript and TypeScript code
- `npm run typecheck` — checks types without emitting JavaScript
- `npm run build` — runs type checking and creates the production build
- `npm run preview` — serves the production build locally

## Contact Form Setup

This portfolio uses [Web3Forms](https://web3forms.com/) for the contact form.

1. Go to https://web3forms.com and get a free access key using your email
2. In `src/components/ContactCard.tsx`, replace `<YOUR_WEB3FORMS_ACCESS_KEY>` with your key

## Deployment

The project deploys automatically to GitHub Pages via GitHub Actions on every push to `main`.

Make sure the `base` in `vite.config.ts` matches your GitHub repository name:

```ts
base: "/your-repo-name/",
```
