import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(request) {
  const requestHeaders = new Headers(request.headers);
  const secret = requestHeaders.get("x-vercel-reval-key");

  // Validate secret
  if (secret !== process.env.CONTENTFUL_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  // Parse the incoming request body
  const body = await request.json();
  console.log('Incoming request body:', body);

  // Extract the content type from the request
  const contentType = body.sys?.contentType?.sys?.id;
  console.log('Content type:', contentType);

  // Check if the content type is either TokenomicsPage or TokenomicsSection
  if (contentType === "tokenomicsPage" || contentType === "tokenomicsSection") {
    console.log(`Content type ${contentType} matches. Triggering revalidation...`);
    revalidateTag("tokenomics");

    return NextResponse.json({ revalidated: true, now: Date.now() });
  } else {
    console.log(`Content type ${contentType} does not match the expected types.`);
    return NextResponse.json({ message: "No revalidation needed for this content type" }, { status: 200 });
  }
}
