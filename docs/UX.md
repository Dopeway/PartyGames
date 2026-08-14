# UX.md

## Core Principles

- **Mobile-First**: The application is designed primarily for smartphones.
- **Single Device Interaction**: The app assumes only one device is used for the entire group.
- **Guided Experience**: The app acts as the Game Master, providing clear instructions on what to do next.

## Main User Journey

1. **Home Screen**: Simple entry point to select a game.
2. **Player Setup**: A screen to add names of all participants (min 2).
3. **Game Selection**: Selection of the game (currently only "Le 10/10... mais").
4. **Prompt Phase**: The prompt is displayed for everyone to see.
5. **Input Phase (The "Pass the Phone" mechanism)**:
   - Screen: "Passe le téléphone à [Player Name]".
   - Action: Player clicks "Je suis prêt".
   - Input: Player enters their secret response using a slider (0-10).
   - Confirmation: Response is saved internally.
6. **Reveal Phase**: All responses are shown, the average is displayed, and the "outlier" (furthest from average) is highlighted.
7. **Discussion Phase**: The group discusses the outlier's choice.
8. **Loop**: Option to start a new round or exit.

## Response Confidentiality
To ensure fairness and surprise, responses must be hidden until all players have contributed. The "Pass the Phone" screen acts as a buffer to prevent the next player from seeing the previous player's input.

## Visual & Interaction Guidelines
- **High Contrast**: Easy to read in various lighting conditions (e.g., dim party rooms).
- **Large Touch Targets**: Buttons and inputs must be easy to tap.
- **Minimal Navigation**: Linear flow to avoid confusion.
- **Responsive**: While mobile-first, the app should remain usable on tablets and desktops.
- **Accessibility**: Proper contrast, font sizes, and ARIA labels.
