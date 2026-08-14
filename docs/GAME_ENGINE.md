# GAME_ENGINE.md

## Concept
The Game Engine provides a common framework for different party games to operate while allowing each game to maintain its own specific rules.

## Core Entities

- **Game**: The definition of a specific game (e.g., "10/10 but").
- **GameSession**: An active instance of a game being played by a group of players.
- **GamePhase**: The current state of the game loop (e.g., SETUP, PROMPT, INPUT, RESULT).
- **Player**: A participant in the session.
- **Prompt**: The question or situation presented to players.
- **Answer**: The input provided by a player for a specific prompt.
- **GameResult**: The calculated outcome of a round.

## Game Loop Lifecycle

## Game Loop Lifecycle

A typical game cycle follows these phases:

1. **SETUP**: Adding players and configuring the game.
2. **PROMPT**: Displaying the situation/question to the group.
3. **PLAYER_INPUT**: Collecting secret responses from each player (passing the phone).
4. **RESULT**: Calculating and revealing the results to everyone.
5. **DISCUSSION**: A pause for players to debate the results.
6. **NEXT_ROUND**: Transitioning back to the PROMPT phase.
7. **FINISHED**: Ending the session.

### Implementation: "Le 10/10... mais"
The first game implemented validates this loop:
- **Setup**: Players are added via `/setup`.
- **Prompt**: A random prompt is selected from a mock list.
- **Input**: A "Pass the Phone" buffer screen ensures secrecy before each player uses a `Slider` to vote.
- **Result**: The average is calculated and the player furthest from it is highlighted to spark debate.
- **Loop**: The game continues until the prompt list is exhausted or the user chooses to finish.

## Extension Principles

To add a new game:
1. Create a new folder in `src/games/[game-id]`.
2. Define the game-specific logic in `game.ts` (e.g., how to calculate the result).
3. Create game-specific UI components.
4. Map the game's flow to the Game Engine phases.

## Abstraction Limits
The Game Engine should not become an overly complex generic system. If a game has rules that completely break the standard loop, it is better to implement a specific flow than to force it into a rigid abstraction.

**Crucial Rule**: The Game Engine must remain minimal. The common architecture should emerge from real needs identified during the implementation of the first games. Do not create generic abstractions or additional managers without a concrete need. The first game will serve to identify the mechanisms that are truly common to future games.
