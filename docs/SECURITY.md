# SECURITY.md

## General Principles
The application prioritizes simplicity and safety. Since it is a social party app, the security model is focused on data integrity and protecting administrative access.

## Environment & Secrets
- **Environment Variables**: All sensitive keys (e.g., Supabase URL, Anon Key) must be stored in `.env` files and never committed to version control.
- **Vercel Integration**: Secrets are managed via Vercel's environment variable settings.

## Supabase Security
- **Client-Side Access**: Use the Supabase `anon` key for public read access to prompts.
- **Row Level Security (RLS)**: Future implementation of RLS to ensure that only authorized users (admins) can modify prompts or categories.
- **API Validation**: All inputs from the client must be validated on the server/database side.

## Client-Side Security
- **Input Sanitization**: Prevent XSS by using React's default escaping and validating user-provided player names.
- **State Protection**: Game state is managed locally; sensitive game logic is kept separate from the UI.

## Administrative Access
- **Admin Panel**: Any future administrative interface for content management must be protected by a strong authentication mechanism (e.g., Supabase Auth with specific roles).
- **Privilege Separation**: Clear distinction between "Player" (read-only content) and "Admin" (read/write content).
