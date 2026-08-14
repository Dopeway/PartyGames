# DECISIONS.md

## Decision 001 — Frontend
- **Decision**: Next.js + React + TypeScript.
- **Context**: Need for a modern, scalable, and type-safe web application.
- **Reason**: Next.js provides excellent routing, performance, and developer experience. TypeScript ensures maintainability.
- **Consequences**: Standardized project structure, better IDE support, and optimized production builds.

## Decision 002 — Styling
- **Decision**: Tailwind CSS.
- **Context**: Need for rapid UI development and a mobile-first approach.
- **Reason**: Utility-first CSS allows for fast prototyping and consistent styling without writing custom CSS files.
- **Consequences**: Small CSS bundle size and highly responsive designs.

## Decision 003 — Backend
- **Decision**: Supabase planned for future persistence.
- **Context**: Need for a database to store prompts, categories, and sessions.
- **Reason**: Supabase provides a powerful PostgreSQL backend with easy-to-use APIs and authentication.
- **Consequences**: Simplified backend management and scalable data storage. **Note**: While Supabase Authentication is available in the stack, it is NOT planned for V1. The app must be usable without a user account. No authentication should be implemented unless a concrete product need justifies it.


## Decision 004 — Mobile
- **Decision**: PWA mobile-first.
- **Context**: The app is designed to be used on a single phone during parties.
- **Reason**: PWA allows users to "install" the app on their home screen without going through app stores, providing a native-like experience.
- **Consequences**: Better accessibility on mobile and offline capabilities.

## Decision 005 — First Game
- **Decision**: "Le 10/10… mais".
- **Context**: Need a simple first game to validate the architecture.
- **Reason**: It has a clear, linear flow (Prompt $\rightarrow$ Input $\rightarrow$ Result) that tests the core "Pass the Phone" mechanic.
- **Consequences**: Establishes the baseline for the Game Engine.

## Decision 007 — UI Library
- **Decision**: Mantine UI.
- **Context**: Need for a robust, accessible, and mobile-first component library.
- **Reason**: Mantine provides a comprehensive set of primitives (Slider, Button, Stack, etc.) that accelerate development and ensure a consistent look and feel.
- **Consequences**: Reduced custom CSS, faster prototyping, and better accessibility.

## Decision 008 — Game State Management (V1)
- **Decision**: Local React state + LocalStorage.
- **Context**: Need to pass players list from setup to game.
- **Reason**: For the first vertical slice, a full state management library (Zustand/Redux) is over-engineering. LocalStorage provides a simple way to persist the session across page transitions.
- **Consequences**: Simple implementation, sufficient for a single-device experience.
