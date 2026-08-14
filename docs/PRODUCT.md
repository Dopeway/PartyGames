# PRODUCT.md

## Vision
Create a "Game Master" application for physical gatherings. The app guides friends through various party games using a single shared device (phone or tablet), facilitating social interaction and debate.

## The Problem
Many party games require multiple devices, complex setups, or a human game master who cannot participate. This app removes those frictions by acting as the game master on a single device.

## User Experience (UX)
- **Mobile-First**: Optimized for handheld use.
- **Single Device**: The device is passed from player to player.
- **Guided Flow**: The app explicitly tells players when to pass the phone and when to reveal results.

## Target Audience
Groups of friends or family gathered physically in the same room.

## General Workflow
1. **Home**: Select a game.
2. **Setup**: Add players to the session.
3. **Game Loop**:
   - Display a prompt.
   - Collect secret inputs (passing the phone).
   - Reveal results.
   - Facilitate discussion.
   - Next round or finish.

## First Version (MVP)
The first game implemented will be **"Le 10/10… mais"**.
- Prompt: "She is 10/10... but she always replies 8 hours later."
- Action: Each player secretly rates the situation from 0 to 10.
- Result: Average score and identification of the outlier to spark debate.

## Future Features
- Large library of games (Who is most likely to, Secret Vote, Debate games, etc.).
- Content categories (Relationships, Gaming, Pop Culture, etc.).
- AI-assisted prompt generation (with human validation).
- Supabase integration for persistent content and sessions.

## Out of Scope (For Now)
- Multi-device synchronization.
- Real-time online multiplayer.
- Automated AI publishing of content.
- Complex user accounts/profiles.
