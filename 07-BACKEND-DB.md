# 07 — Backend & Database (Neon Postgres + Prisma)

## Target
- App folder (ALL edits/commands here): `1-star-restaurant-website/`

Add a persistent backend using Neon DB (Serverless Postgres) + Prisma ORM, with Next.js Server Actions (NO separate Express server — Next.js IS the Node backend; avoids CORS). `.env` with `DATABASE_URL` already exists — do not overwrite it.

## Steps

1. **Install Prisma:**
   ```bash
   npm install @prisma/client
   npm install -D prisma
   npx prisma init --datasource-provider postgresql
   ```
   (If `.env` already exists, prisma init must NOT overwrite it — keep the existing `DATABASE_URL`.)

2. **Define schema** in `prisma/schema.prisma`:
   ```prisma
   generator client {
     provider = "prisma-client-js"
   }

   datasource db {
     provider = "postgresql"
     url      = env("DATABASE_URL")
   }

   model Reservation {
     id        String   @id @default(cuid())
     name      String
     email     String
     phone     String?
     date      DateTime
     time      String
     guests    Int
     request   String?
     createdAt DateTime @default(now())
   }

   model ContactMessage {
     id        String   @id @default(cuid())
     name      String
     email     String
     subject   String?
     message   String
     createdAt DateTime @default(now())
   }
   ```

3. **Sync + generate:**
   ```bash
   npx prisma db push
   npx prisma generate
   ```

4. **DB client singleton** in `src/lib/prisma.ts`:
   ```typescript
   import { PrismaClient } from '@prisma/client';
   const globalForPrisma = global as unknown as { prisma: PrismaClient };
   export const prisma = globalForPrisma.prisma || new PrismaClient();
   if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
   ```

5. **Server Actions** in `src/actions/submit.ts`:
   - `submitReservation(formData)` — validate with `zod` (`npm install zod`), insert into `Reservation`, return success/error.
   - `submitContact(formData)` — validate, insert into `ContactMessage`, return success/error.

6. **Wire the forms:** Reservation + Contact components use `<form action={submitReservation}>`, loading state via `useFormStatus`, success/error message shown to the user. Remove any fake/mock submit logic.

7. **Verify connection (proof, not claims):**
   - `npx prisma studio` opens and shows both tables.
   - Submit a test reservation in the browser at localhost — it MUST appear in Prisma Studio under this app's Neon branch.

8. **Finish:** `npm run lint` + `npm run build`; paste real output. Update `MEMORY.md` (schema + actions locations). STOP.

## Execution Rules (CRITICAL)
- One tool call per response.
- Run ALL commands inside the Target app folder — never in the workspace root.
- Never commit `.env`. Never claim success without the Prisma Studio screenshot/proof of the test row.