# DATA_MODEL.md

## Entities

### Game
Represents a type of game available in the app.
- `id`: Unique identifier.
- `name`: Display name of the game.
- `description`: Brief explanation of how to play.

### Prompt
The content displayed during a game round.
- `id`: Unique identifier.
- `gameId`: Reference to the Game it belongs to.
- `text`: The actual prompt text.
- `category`: Reference to a Category (e.g., RELATIONS, HABITUDES, ABSURDE, SOCIÉTÉ).
- `tags`: List of associated tags (e.g., 'redflag', 'weird', 'funny').
- `language`: Language code (e.g., 'fr', 'en').
- `active`: Boolean to enable/disable the prompt.
- `difficulty`: Optional intensity level ('SOFT', 'MEDIUM', 'HARD').

### Category
Groups prompts by theme.
- `id`: Unique identifier.
- `name`: Category name (e.g., "Relationships", "Gaming").

### Tag
Fine-grained labels for prompts.
- `id`: Unique identifier.
- `name`: Tag name.

### GameSession
An active instance of a game.
- `id`: Unique identifier.
- `gameId`: Reference to the Game being played.
- `players`: List of players in the session.
- `gameState`: Current phase and progress.

### Player
A person participating in a session.
- `id`: Unique identifier.
- `name`: Display name.

### Answer
A player's response to a prompt.
- `id`: Unique identifier.
- `sessionId`: Reference to the GameSession.
- `promptId`: Reference to the Prompt.
- `playerId`: Reference to the Player.
- `value`: The response (e.g., a number from 0-10).

### GameResult
The outcome of a round.
- `id`: Unique identifier.
- `sessionId`: Reference to the GameSession.
- `promptId`: Reference to the Prompt.
- `resultData`: JSON containing calculated results (e.g., average, outliers).

## Relationships

- **Game** $\rightarrow$ **Prompt** (One-to-Many)
- **GameSession** $\rightarrow$ **Game** (Many-to-One)
- **GameSession** $\rightarrow$ **Player** (Many-to-Many)
- **Answer** $\rightarrow$ **Player** (Many-to-One)
- **Answer** $\rightarrow$ **Prompt** (Many-to-One)
- **GameResult** $\rightarrow$ **GameSession** (Many-to-One)

## Note on Model Evolution
This data model is currently a **conceptual/business model** and does not represent the final PostgreSQL/Supabase schema. It will evolve during the development of the first vertical slice as real needs are identified.
