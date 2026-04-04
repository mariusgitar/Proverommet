import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const reactions = pgTable('reactions', {
  id: serial('id').primaryKey(),
  productSlug: text('product_slug').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});
