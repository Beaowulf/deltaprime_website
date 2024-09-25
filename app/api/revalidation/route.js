import { NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';

export async function POST(request) {
  const requestHeaders = new Headers(request.headers);
  const secret = requestHeaders.get('x-vercel-reval-key');

  // Verify that the secret matches the one in the environment variable
  if (secret !== process.env.CONTENTFUL_REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
  }

  // Revalidate pages with the "tokenomics" tag
  revalidateTag('tokenomics');

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
