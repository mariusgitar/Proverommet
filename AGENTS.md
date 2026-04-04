# Prøverommet Agent Notes

## Project overview
Prøverommet is a Next.js 14 application scaffold using the App Router. The repository is organized for API routes, shared components, and database access with Drizzle + Neon.

## Stack
- Next.js 14 + React + TypeScript
- Tailwind CSS
- Drizzle ORM + drizzle-kit
- Neon serverless Postgres driver

## Conventions
- Keep `app/` pages thin: rendering and routing only.
- Put reusable UI into `components/`.
- Put database and utility code in `lib/`.
- Content metadata lives in `content/` as JSON.
- Use named exports for components.
- Never commit `.env` files.
- Keep pull requests small and testable.
