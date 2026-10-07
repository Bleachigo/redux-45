# React Redux Theme Demo

A minimal React + TypeScript + Vite app that manages a light/dark theme with **Redux Toolkit**.

The theme lives in a Redux slice (`features/theme/themeSlice.ts`) with a single `themeToggled` action. The store is provided to the app through `react-redux`'s `<Provider>`, and components read and update the theme with typed hooks (`useAppSelector`, `useAppDispatch`) instead of React Context. Clicking the button in the header switches the theme for the whole page.

**Live demo:** <https://redux-45.vercel.app> <!-- TODO: replace with the actual Vercel deployment URL -->

## Tech Stack

- React 19
- Redux Toolkit + React Redux
- TypeScript
- Vite

## Installation

Requires [Node.js](https://nodejs.org/) 20.19+ (or 22.12+) and npm.

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd redux-45
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Startup

### Development

Start the local dev server with hot module reloading:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### Production Build

Type-check and build the app for production (output goes to `dist/`):

```bash
npm run build
```

Serve the production build locally:

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Deployment (Vercel)

1. Push the repository to GitHub/GitLab/Bitbucket.
2. Import the project in the [Vercel dashboard](https://vercel.com/new).
3. Vercel auto-detects the Vite preset — no extra configuration is required:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Deploy, then put the live URL in the demo link at the top of this README.

## Project Structure

```
src/
├── app/
│   ├── store.ts          # configureStore, RootState and AppDispatch types
│   └── hooks.ts          # typed useAppSelector / useAppDispatch
├── features/
│   └── theme/
│       ├── themeSlice.ts # theme state, themeToggled action, reducer
│       └── ThemeToggle.tsx
├── components/
│   ├── Header/
│   ├── Card/
│   └── Footer/
├── App.tsx               # applies the app--light / app--dark class
└── main.tsx              # wraps <App /> in the Redux <Provider>
```

## License

Licensed under the MIT License — see [LICENSE.md](./LICENSE.md).
