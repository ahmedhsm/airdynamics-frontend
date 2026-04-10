# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Sanity Studio

This repo also includes a Sanity Studio dashboard in [`studio/`](./studio) for editing AIRDYNAMICS content without changing JSX.

Run it from the project root:

```powershell
npm run studio:dev
```

Before starting the Studio, set these environment variables in the `studio` folder:

- `SANITY_STUDIO_PROJECT_ID`
- `SANITY_STUDIO_DATASET`

The Home Page document is set up for drag-and-drop ordering of navigation links, cards, products, partners, and footer links.

For the public app to read from Sanity during local development, add your Vite origin to Sanity CORS, usually:

```powershell
sanity cors add http://localhost:5173 --no-credentials
```
