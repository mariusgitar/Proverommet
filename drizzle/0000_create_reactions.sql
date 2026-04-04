CREATE TABLE IF NOT EXISTS "reactions" (
  "id" serial PRIMARY KEY NOT NULL,
  "product_slug" text NOT NULL,
  "created_at" timestamp with time zone DEFAULT now() NOT NULL
);
