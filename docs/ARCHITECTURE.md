# ARCHITECTURE.md

## Technical Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Mantine UI (Primary) & Tailwind CSS (Utility)
- **Database/Backend**: Supabase (PostgreSQL) - Planned
- **Deployment**: Vercel
- **PWA**: Integrated for mobile-first installation experience.

### UI System: Mantine
Mantine is used as the primary UI library to provide consistent, accessible, and mobile-friendly components. 
- **Theming**: A centralized theme is defined in `src/theme.ts`.
- **Component Strategy**: Mantine primitives (Button, Stack, Group, etc.) are used for layout and basic interactions. Business-specific components (e.g., `TenTenButGame`) are built on top of these primitives.

## Project Structure

The project follows a feature-oriented organization:

```text
src/
├── app/              # Next.js App Router (Pages, Layouts, API routes)
├── components/       # Shared UI components
│   ├── ui/           # Atomic UI components (Buttons, Inputs, etc.)
│   ├── game/         # Generic game-related UI
│   └── players/      # Player management UI
├── games/            # Game-specific logic and components
│   └── [game-id]/    # Folder per game
│       ├── components/ # Game-specific UI
│       ├── game.ts    # Game rules and logic
│       └── types.ts   # Game-specific types
├── lib/              # Shared utilities and core logic
│   ├── game-engine/  # Core game state management and interfaces
│   ├── supabase/     # Supabase client and database helpers
│   └── utils/        # General helper functions
└── types/            # Global TypeScript definitions
```

## Architectural Principles

- **Simple over Engineered**: Prefer native React/Next.js features over external libraries.
- **Separation of Concerns**: Business logic (game rules) is separated from the UI (React components).
- **Type Safety**: Strict TypeScript usage across the entire application.
- **Mobile-First**: All components are designed for mobile first, then scaled to desktop.

## State Management Strategy

- **Local State**: React `useState` and `useReducer` for simple UI state.
- **Game State**: A dedicated Game Engine logic layer to handle transitions between phases.
- **Global State**: Avoid Redux/Zustand unless a clear need arises. Use Context API or URL state where appropriate.

## Data Management

- **Initial Phase**: Mocked data for rapid prototyping.
- **Content Structure**: Prompts are organized by game and category in `src/data/prompts/` to allow for easy expansion and thematic filtering.
- **Future Phase**: Supabase for content (prompts, categories) and session persistence.

## PWA Strategy
The app will be configured as a Progressive Web App to allow "Add to Home Screen", providing a native-like experience on mobile devices.

**Note**: The Game Engine must remain minimal. The common architecture should emerge from real needs identified during the implementation of the first games. Do not create generic abstractions or additional managers without a concrete need. The first game will serve to identify the mechanisms that are truly common to future games.
