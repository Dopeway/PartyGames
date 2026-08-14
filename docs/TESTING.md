# TESTING.md

## Strategy
The project prioritizes the correctness of game business logic over UI testing.

## Unit Testing
Business logic (e.g., result calculations) is implemented as pure functions to facilitate testing.

### Current Implementation
For the "Le 10/10... mais" game, the following are tested:
- **Average Calculation**: Ensures the mean is calculated correctly and rounded to one decimal.
- **Outlier Detection**: Ensures the player furthest from the average is correctly identified.
- **Edge Cases**:
  - Minimum players (2).
  - Identical votes.
  - Empty vote lists.

## Manual Testing
The main user journey is verified manually on mobile viewports:
- 375 x 667
- 390 x 844

Verification points:
- No horizontal overflow.
- Touch targets are large enough.
- "Pass the Phone" buffer works as intended.
- Results are clearly legible.
