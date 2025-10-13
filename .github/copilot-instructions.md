# Copilot Instructions for portfolio2.0

## Project Overview
- This is a Next.js (TypeScript) portfolio project using Tailwind CSS and Apollo Client.
- The codebase is organized for modularity: UI components in `src/components`, API queries in `api/gql`, and static data in `public/api`.
- The Deno backend (in `../portfolio_deno`) is separate and not directly integrated with this Next.js frontend.

## Key Architectural Patterns
- **Pages & Layouts:** Main entry is `src/app/page.tsx` and `src/app/layout.tsx`. No classic `pages/` directory; uses Next.js 13+ app directory structure.
- **Component Organization:**
  - Home page sections (AboutMe, Contact, Experience, Projects) are in `src/components/home/`.
  - Shared UI (footer, navbar) in `src/sheard/`.
- **GraphQL Data:**
  - Queries are defined in `api/gql/query/` and imported via `api/gql/index.ts`.
  - Apollo Client setup is in `src/lib/apolloClient.ts`.
  - Static JSON data (skills, projects, links) is in `public/api/` for local fetches.

## Developer Workflows
- **Start Dev Server:** `npm run dev` (Next.js)
- **Build:** `npm run build`
- **Lint:** `npm run lint`
- **Tailwind:** Config in `tailwind.config.ts`, global styles in `src/styles/globals.css`.
- **TypeScript:** Types are organized in `src/types/`.

## Project-Specific Conventions
- **Section Components:** Each home section is a dedicated React component, often using props for data injection.
- **GraphQL:** Use Apollo Client for all remote data; local static data is fetched via standard fetch API.
- **File Naming:** Use PascalCase for React components, camelCase for functions/variables.
- **No API routes in frontend:** All API logic is in `api/gql/` or static JSON, not in `pages/api`.

## Integration Points
- **External:** Apollo Client (GraphQL), Tailwind CSS, Next.js app router.
- **Internal:** Components communicate via props/context; data flows from GraphQL queries or static JSON to UI components.

## Examples
- To add a new home section, create a component in `src/components/home/` and import it in `src/app/page.tsx`.
- To add a new GraphQL query, define it in `api/gql/query/`, export via `api/gql/index.ts`, and use Apollo Client in your component.
- To update static data, edit the relevant JSON file in `public/api/`.

---
If any conventions or workflows are unclear, please ask for clarification or provide feedback to improve these instructions.
