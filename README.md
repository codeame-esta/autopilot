# Autopilot

A personal finance management app powered by AI. Autopilot helps you track transactions, manage budgets, set savings goals and automate financial decisions — all from a clean, modern dashboard.

## Tech Stack

| Layer                | Technology                                                                                            |
| -------------------- | ----------------------------------------------------------------------------------------------------- |
| Framework            | [React 19](https://react.dev) + [TypeScript 6](https://www.typescriptlang.org)                        |
| Build tool           | [Vite 8](https://vite.dev)                                                                            |
| Styling              | [Tailwind CSS 4](https://tailwindcss.com)                                                             |
| UI components        | [shadcn/ui](https://ui.shadcn.com) + [Radix UI](https://www.radix-ui.com)                             |
| Backend / Auth       | [Supabase](https://supabase.com)                                                                      |
| Data fetching        | [TanStack Query v5](https://tanstack.com/query) + [Axios](https://axios-http.com)                     |
| Routing              | [React Router v7](https://reactrouter.com)                                                            |
| State management     | [Zustand](https://zustand-demo.pmnd.rs)                                                               |
| Internationalisation | [i18next](https://www.i18next.com) + [react-i18next](https://react.i18next.com) (EN / ES)             |
| Charts               | [Recharts](https://recharts.org)                                                                      |
| Icons                | [Lucide React](https://lucide.dev)                                                                    |
| Notifications        | [Sonner](https://sonner.emilkowal.ski)                                                                |
| Linting              | [ESLint 10](https://eslint.org) + [typescript-eslint](https://typescript-eslint.io)                   |
| Formatting           | [Prettier](https://prettier.io)                                                                       |
| Git hooks            | [Husky](https://typicode.github.io/husky) + [lint-staged](https://github.com/lint-staged/lint-staged) |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) LTS
- npm 10+

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/autopilot.git
cd autopilot

# Install dependencies
npm install
```

### Environment variables

Create a `.env` file in the root of the project:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Running the app

```bash
# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

## Available Scripts

| Script            | Description                           |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Start the development server with HMR |
| `npm run build`   | Type-check and build for production   |
| `npm run preview` | Preview the production build locally  |
| `npm run lint`    | Run ESLint across the project         |
| `npm run format`  | Format all files with Prettier        |

## Project Structure

```
src/
├── api/              # API client, contracts and React Query hooks
├── assets/           # Static assets (fonts, images)
├── components/
│   ├── common/       # Shared layout components (Sidebar, etc.)
│   └── ui/           # Base UI primitives (shadcn)
├── hooks/            # Custom React hooks
├── layouts/          # Route layouts (auth, private)
├── lib/              # Third-party client instances (Supabase, utils)
├── pages/            # Page components grouped by route
├── router/           # Route definitions
└── utils/
    └── i18n/         # Translation files (EN / ES)
```

## Internationalisation

The app supports **English** and **Spanish**. Translation files live in `src/utils/i18n/locales/`. Keys follow a nested `SCREAMING_SNAKE_CASE` convention mirroring the component tree:

```
PAGES.TRANSACTIONS.FILTERS.CATEGORY.ALL
COMPONENTS.COMMON.SIDEBAR.PRO_BANNER.TITLE
```

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
