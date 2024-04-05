# AGUR-UI

A simple UI built using [svelte](https://svelte.dev) for 3d Modeling based on [threlte](https://threlte.xyz). Styling is handled using [tailwind css](https://tailwindcss.com).

### Purpose

To implement a robust UI for 3d Modeling to serve as a scalable and generalizable UI for a network of docker containers to interact with. The loose idea is to allow one interface to elegantly call on micro-servervices which update layers of the interface without the need to develop many separate interfaces and apis ... need to work this part out. CONTAINERIZATION.

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of this app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
