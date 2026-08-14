# CONTENT.md

## Prompt Structure
Prompts are treated as data and should follow this structure:
- `id`: Unique identifier.
- `gameId`: Link to the specific game.
- `text`: The prompt content.
- `category`: The thematic category.
- `tags`: Descriptive tags for filtering.
- `language`: Language of the prompt.
- `active`: Status for production visibility.

## Content Organization

### Categories
Prompts are grouped into categories to allow players to choose themes:
- Relations, Friendship, Red Flags, Social Media, Gaming, Music, Food, Travel, Work, Awkward Situations, Pop Culture, News, Internet Culture, Tunisia, etc.

### Tags
Tags provide more granular classification for better filtering and AI generation.

## Editorial Rules
- **Clarity**: Prompts must be easy to understand quickly.
- **Engagement**: Prompts should spark debate or laughter.
- **Appropriateness**: Content should be suitable for the target audience (party setting).

## Content Pipeline (Future)
To scale to thousands of prompts, the following pipeline is envisioned:
1. **AI Generation**: Using LLMs to propose new prompts.
2. **Auto-Validation**: Basic checks for length and format.
3. **Duplicate Detection**: Ensuring prompts aren't too similar.
4. **Classification**: Auto-tagging and categorization.
5. **Human Review**: Final validation by a human editor.
6. **Publication**: Adding to the production database.

**Crucial Rule**: AI must NEVER publish content directly to production without human validation.
