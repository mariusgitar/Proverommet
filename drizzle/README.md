# Running the initial migration in Neon

1. Open your Neon project and go to **SQL Editor**.
2. Create/select the target branch/database.
3. Copy the SQL from `drizzle/0000_create_reactions.sql`.
4. Run the query in the Neon SQL Editor.
5. Verify with:
   ```sql
   SELECT * FROM reactions LIMIT 1;
   ```
