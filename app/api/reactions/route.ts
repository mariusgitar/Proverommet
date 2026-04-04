import { NextRequest, NextResponse } from 'next/server';
import { eq, sql } from 'drizzle-orm';

import { db } from '@/lib/db';
import { reactions } from '@/lib/schema';

async function getReactionCount(slug: string) {
  const [result] = await db
    .select({ count: sql<number>`count(*)::int` })
    .from(reactions)
    .where(eq(reactions.productSlug, slug));

  return result?.count ?? 0;
}

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get('slug');

  if (!slug) {
    return NextResponse.json({ error: 'Missing slug query parameter' }, { status: 400 });
  }

  const count = await getReactionCount(slug);
  return NextResponse.json({ slug, count });
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const slug = typeof body?.slug === 'string' ? body.slug : '';

  if (!slug) {
    return NextResponse.json({ error: 'Missing slug in request body' }, { status: 400 });
  }

  await db.insert(reactions).values({ productSlug: slug });
  const count = await getReactionCount(slug);

  return NextResponse.json({ slug, count });
}
